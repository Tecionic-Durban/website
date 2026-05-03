import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  serviceSpecificAnswer?: string;
  message?: string;
  _honeypot?: string;
  _formLoadTime?: number;
  _submitTime?: number;
  _recaptchaToken?: string | null;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_MAP_CAP = 5000;

const rateLimitStore = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real.trim();
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitStore.get(ip) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);

  if (rateLimitStore.size > RATE_LIMIT_MAP_CAP) {
    for (const [key, ts] of rateLimitStore) {
      const fresh = ts.filter((t) => t > cutoff);
      if (fresh.length === 0) rateLimitStore.delete(key);
      else rateLimitStore.set(key, fresh);
    }
  }

  return false;
}

function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isGibberish(str: string | undefined): boolean {
  if (!str || str.length < 5) return false;
  const upperCount = (str.match(/[A-Z]/g) || []).length;
  const lowerCount = (str.match(/[a-z]/g) || []).length;
  if (lowerCount > 0 && upperCount / lowerCount > 1) return true;
  if (str.length > 15 && !str.includes(' ')) return true;
  if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{6,}/i.test(str)) return true;
  return false;
}

const SPAM_OK_RESPONSE = NextResponse.json(
  { success: true, message: 'Consulta enviada exitosamente' },
  { status: 200 }
);

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Por favor intente nuevamente en unos minutos.' },
        { status: 429 }
      );
    }

    const data = (await request.json()) as ContactPayload;
    const { firstName, lastName, company, email, service } = data;

    if (!firstName || !lastName || !company || !email || !service) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    if (data._honeypot) {
      console.log('[SPAM BLOCKED] Honeypot triggered:', { email, company });
      return SPAM_OK_RESPONSE;
    }

    const formLoadTime = data._formLoadTime;
    const submitTime = data._submitTime;
    if (formLoadTime && submitTime && submitTime - formLoadTime < 3000) {
      console.log('[SPAM BLOCKED] Too fast submission:', { email, company });
      return SPAM_OK_RESPONSE;
    }

    if (isGibberish(firstName) || isGibberish(lastName) || isGibberish(company)) {
      console.log('[SPAM BLOCKED] Gibberish detected:', { firstName, lastName, company, email });
      return SPAM_OK_RESPONSE;
    }

    const recaptchaToken = data._recaptchaToken;
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (recaptchaToken && recaptchaSecretKey) {
      try {
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
        });
        const recaptchaResult = (await recaptchaResponse.json()) as {
          success: boolean;
          score?: number;
        };
        if (!recaptchaResult.success || (recaptchaResult.score ?? 0) < 0.5) {
          console.log('[SPAM BLOCKED] reCAPTCHA failed:', {
            email,
            company,
            score: recaptchaResult.score,
            success: recaptchaResult.success,
          });
          return SPAM_OK_RESPONSE;
        }
      } catch (error) {
        console.error('reCAPTCHA verification error:', error);
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: 'CONFIG_ERROR: API key not found' }, { status: 500 });
    }

    const formattedDate = new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago',
    });

    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      company: escapeHtml(company),
      email: escapeHtml(email),
      phone: escapeHtml(data.phone),
      service: escapeHtml(service),
      serviceSpecificAnswer: escapeHtml(data.serviceSpecificAnswer),
      message: escapeHtml(data.message),
      formattedDate: escapeHtml(formattedDate),
    };

    const emailToTecionic = {
      from: 'Formulario Web <noreply@tsf.cl>',
      to: ['contacto@tsf.cl'],
      subject: `Nueva Consulta: ${service} - ${company}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #059669;">Nueva Consulta Tecnica</h2>
          <p><strong>Fecha:</strong> ${safe.formattedDate}</p>
          <p><strong>Nombre:</strong> ${safe.firstName} ${safe.lastName}</p>
          <p><strong>Empresa:</strong> ${safe.company}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          ${safe.phone ? `<p><strong>Telefono:</strong> ${safe.phone}</p>` : ''}
          <p><strong>Servicio:</strong> ${safe.service}</p>
          ${safe.serviceSpecificAnswer ? `<p><strong>Detalle:</strong> ${safe.serviceSpecificAnswer}</p>` : ''}
          ${safe.message ? `<p><strong>Mensaje:</strong> ${safe.message}</p>` : ''}
        </div>
      `,
    };

    const tecioniResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailToTecionic),
    });

    if (!tecioniResponse.ok) {
      const errorText = await tecioniResponse.text();
      return NextResponse.json(
        { error: `RESEND_ERROR: ${tecioniResponse.status} - ${errorText}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Consulta enviada exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'unknown';
    return NextResponse.json({ error: `CATCH_ERROR: ${message}` }, { status: 500 });
  }
}
