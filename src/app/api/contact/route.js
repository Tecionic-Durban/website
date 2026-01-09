import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    const { firstName, lastName, company, email, service } = data;
    if (!firstName || !lastName || !company || !email || !service) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Get API key from environment
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'CONFIG_ERROR: API key not found' },
        { status: 500 }
      );
    }

    // Format date
    const formattedDate = new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago'
    });

    // Email to Tecionic
    const emailToTecionic = {
      from: 'Formulario Web <noreply@tsf.cl>',
      to: ['contacto@tsf.cl'],
      subject: `Nueva Consulta: ${service} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #059669;">Nueva Consulta Tecnica</h2>
          <p><strong>Fecha:</strong> ${formattedDate}</p>
          <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
          <p><strong>Empresa:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${data.phone ? `<p><strong>Telefono:</strong> ${data.phone}</p>` : ''}
          <p><strong>Servicio:</strong> ${service}</p>
          ${data.serviceSpecificAnswer ? `<p><strong>Detalle:</strong> ${data.serviceSpecificAnswer}</p>` : ''}
          ${data.message ? `<p><strong>Mensaje:</strong> ${data.message}</p>` : ''}
        </div>
      `,
    };

    // Send email to Tecionic via Resend API
    const tecioniResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
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

    // Send confirmation to sender
    const emailToSender = {
      from: 'Tecionic Durban <noreply@tsf.cl>',
      to: [email],
      subject: 'Hemos recibido su consulta - Tecionic Durban',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #059669;">Gracias por contactarnos</h2>
          <p>Estimado/a ${firstName},</p>
          <p>Hemos recibido su consulta sobre <strong>${service}</strong>.</p>
          <p>Le responderemos dentro de las proximas 24 horas habiles.</p>
          <p>Saludos,<br>Equipo Tecionic Durban</p>
        </div>
      `,
    };

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailToSender),
    });

    return NextResponse.json(
      { success: true, message: 'Consulta enviada exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: `CATCH_ERROR: ${error.message}` },
      { status: 500 }
    );
  }
}
