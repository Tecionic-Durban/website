export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await request.json();

    // Validate required fields
    const { firstName, lastName, company, email, service } = data;
    if (!firstName || !lastName || !company || !email || !service) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Format the email content for Tecionic
    const formattedDate = new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const emailToTecionic = {
      from: 'Formulario Web <onboarding@resend.dev>',
      to: ['contacto@tsf.cl'],
      subject: `Nueva Consulta: ${service} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Consulta Técnica</h1>
            <p style="color: #a7f3d0; margin: 10px 0 0 0;">${formattedDate}</p>
          </div>

          <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #059669; margin-top: 0; font-size: 18px;">Información del Contacto</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px;">Nombre:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Empresa:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Teléfono:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Servicio:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">${service}</td>
              </tr>
              ${data.serviceSpecificAnswer ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">Detalle Técnico:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.serviceSpecificAnswer}</td>
              </tr>
              ` : ''}
            </table>

            ${data.message ? `
            <h2 style="color: #059669; margin-top: 25px; font-size: 18px;">Comentarios Adicionales</h2>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${data.message}</p>
            </div>
            ` : ''}
          </div>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Este mensaje fue enviado desde el formulario de contacto de tecionicdurban.com
            </p>
          </div>
        </div>
      `,
    };

    // Confirmation email to the sender
    const emailToSender = {
      from: 'Tecionic Durban <onboarding@resend.dev>',
      to: [email],
      subject: 'Hemos recibido su consulta - Tecionic Durban',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Gracias por contactarnos</h1>
          </div>

          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Estimado/a <strong>${firstName}</strong>,
            </p>

            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Hemos recibido su consulta sobre <strong>${service}</strong> y nuestro equipo técnico
              la está revisando. Le responderemos dentro de las próximas <strong>24 horas hábiles</strong>.
            </p>

            <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 15px; margin: 25px 0;">
              <p style="margin: 0; color: #166534; font-size: 14px;">
                <strong>Resumen de su consulta:</strong><br>
                Servicio: ${service}<br>
                Empresa: ${company}
                ${data.serviceSpecificAnswer ? `<br>Detalle: ${data.serviceSpecificAnswer}` : ''}
              </p>
            </div>

            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Si tiene alguna consulta urgente, puede contactarnos directamente:
            </p>

            <ul style="color: #374151; font-size: 14px; line-height: 1.8;">
              <li>Email: <a href="mailto:contacto@tsf.cl" style="color: #059669;">contacto@tsf.cl</a></li>
              <li>Soporte de emergencia disponible 24/7</li>
            </ul>

            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Saludos cordiales,<br>
              <strong>Equipo Tecionic Durban</strong>
            </p>
          </div>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              Especialistas en soluciones móviles de filtración y separación sólido-líquido<br>
              para la industria minera en Latinoamérica
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails via Resend
    const resendApiKey = env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Error de configuración del servidor' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Send email to Tecionic
    const tecioniResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailToTecionic),
    });

    if (!tecioniResponse.ok) {
      const error = await tecioniResponse.text();
      console.error('Failed to send email to Tecionic:', error);
      throw new Error('Error enviando email a Tecionic');
    }

    // Send confirmation to sender
    const senderResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailToSender),
    });

    if (!senderResponse.ok) {
      console.error('Failed to send confirmation email:', await senderResponse.text());
      // Don't fail the request if confirmation email fails
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Consulta enviada exitosamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Error procesando su solicitud. Por favor intente nuevamente.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
