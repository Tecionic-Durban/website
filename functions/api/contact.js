// Cloudflare Pages Function for contact form
export async function onRequestPost(context) {
  try {
    const data = await context.request.json();

    // Validate required fields
    const { firstName, lastName, company, email, service } = data;
    if (!firstName || !lastName || !company || !email || !service) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get API key from environment
    const resendApiKey = context.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'CONFIG_ERROR: API key not found' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Format date
    const formattedDate = new Date().toLocaleString('es-CL', {
      timeZone: 'America/Santiago'
    });

    // Email to Tecionic
    const emailToTecionic = {
      from: 'Formulario Web <onboarding@resend.dev>',
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
      return new Response(
        JSON.stringify({ error: `RESEND_ERROR: ${tecioniResponse.status} - ${errorText}` }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send confirmation to sender
    const emailToSender = {
      from: 'Tecionic Durban <onboarding@resend.dev>',
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

    return new Response(
      JSON.stringify({ success: true, message: 'Consulta enviada exitosamente' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: `CATCH_ERROR: ${error.message}` }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
