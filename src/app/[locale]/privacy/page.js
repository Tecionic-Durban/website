'use client'

import { useTranslations } from 'next-intl'
import { Shield, Database, Cookie, UserCheck, Clock, Mail } from 'lucide-react'

export default function PrivacyPage() {
  const t = useTranslations()

  const lastUpdated = '3 de enero de 2025'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-emerald-400" />
            <h1 className="text-4xl font-bold">Politica de Privacidad</h1>
          </div>
          <div className="w-24 h-1 bg-emerald-400 mb-6"></div>
          <p className="text-xl text-gray-300">
            En Tecionic, respetamos su privacidad y nos comprometemos a proteger sus datos personales.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Ultima actualizacion: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-10">

            {/* Introduction */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                Esta Politica de Privacidad describe como Tecionic S.A. ("nosotros", "nuestro" o "la Empresa")
                recopila, utiliza y protege la informacion que usted nos proporciona cuando utiliza nuestro
                sitio web tecionic.com. Esta politica cumple con la legislacion aplicable en Chile
                (Ley 19.628), Brasil (LGPD), Mexico (LFPDPPP) y otras jurisdicciones de Latinoamerica.
              </p>
            </div>

            {/* Section 1: Data Collection */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Informacion que Recopilamos</h2>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.1 Informacion que usted nos proporciona</h3>
              <p className="text-gray-700 mb-4">
                Cuando utiliza nuestro formulario de contacto, recopilamos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nombre y apellido</li>
                <li>Correo electronico corporativo</li>
                <li>Nombre de la empresa</li>
                <li>Numero de telefono (opcional)</li>
                <li>Servicio de interes</li>
                <li>Mensaje o consulta</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.2 Informacion recopilada automaticamente</h3>
              <p className="text-gray-700 mb-4">
                Utilizamos PostHog, una plataforma de analitica, para recopilar informacion sobre como
                interactua con nuestro sitio. Esta informacion incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Paginas visitadas y tiempo de permanencia</li>
                <li>Clics en botones y enlaces (como "Contactar")</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Direccion IP (para ubicacion geografica aproximada)</li>
                <li>Pagina de referencia (como llego a nuestro sitio)</li>
                <li>Interacciones con formularios (sin incluir datos personales ingresados)</li>
              </ul>
            </div>

            {/* Section 2: Use of Data */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Como Utilizamos su Informacion</h2>
              </div>

              <p className="text-gray-700 mb-4">Utilizamos la informacion recopilada para:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Responder a sus consultas:</strong> Procesar y responder solicitudes de contacto</li>
                <li><strong>Mejorar nuestro sitio:</strong> Analizar patrones de uso para optimizar la experiencia</li>
                <li><strong>Comunicaciones comerciales:</strong> Enviar informacion sobre nuestros servicios (solo con su consentimiento)</li>
                <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales aplicables</li>
              </ul>
            </div>

            {/* Section 3: Cookies */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Cookies y Tecnologias de Seguimiento</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Utilizamos las siguientes tecnologias de seguimiento:
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">PostHog Analytics</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Proposito:</strong> Analisis de uso del sitio web</li>
                  <li><strong>Datos:</strong> Comportamiento de navegacion, clics, tiempo en pagina</li>
                  <li><strong>Retencion:</strong> Los datos se almacenan en servidores de PostHog en Estados Unidos</li>
                </ul>
              </div>

              <p className="text-gray-700">
                <strong>Su eleccion:</strong> Al visitar nuestro sitio por primera vez, le pedimos su consentimiento
                para utilizar estas tecnologias. Puede rechazar las cookies de analitica y seguiremos respetando
                su decision. Tambien puede cambiar su preferencia eliminando las cookies de su navegador.
              </p>
            </div>

            {/* Section 4: Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Comparticion de Datos</h2>

              <p className="text-gray-700 mb-4">
                No vendemos ni alquilamos su informacion personal. Compartimos datos solo con:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Proveedores de servicios:</strong> PostHog (analitica), Resend (envio de emails)</li>
                <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley</li>
                <li><strong>Transferencias corporativas:</strong> En caso de fusion o adquisicion</li>
              </ul>
            </div>

            {/* Section 5: Your Rights */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Sus Derechos</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Bajo las leyes de proteccion de datos aplicables, usted tiene derecho a:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Acceso</h4>
                  <p className="text-sm text-emerald-700">Solicitar una copia de los datos personales que tenemos sobre usted</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Rectificacion</h4>
                  <p className="text-sm text-emerald-700">Corregir datos inexactos o incompletos</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Eliminacion</h4>
                  <p className="text-sm text-emerald-700">Solicitar la eliminacion de sus datos personales</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Oposicion</h4>
                  <p className="text-sm text-emerald-700">Oponerse al procesamiento de sus datos para ciertos fines</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Portabilidad</h4>
                  <p className="text-sm text-emerald-700">Recibir sus datos en un formato estructurado y legible</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">Retiro de consentimiento</h4>
                  <p className="text-sm text-emerald-700">Retirar su consentimiento en cualquier momento</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                Para ejercer estos derechos, contactenos a <a href="mailto:privacidad@tecionic.com" className="text-emerald-600 hover:underline">privacidad@tecionic.com</a>
              </p>
            </div>

            {/* Section 6: Data Retention */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Retencion de Datos</h2>
              </div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Datos de contacto:</strong> Conservamos sus datos mientras exista una relacion comercial activa o potencial, y por el periodo legalmente requerido</li>
                <li><strong>Datos de analitica:</strong> Se retienen de forma anonimizada por un periodo de 2 anos</li>
                <li><strong>Cookies:</strong> Las preferencias de consentimiento se almacenan en su navegador hasta que las elimine</li>
              </ul>
            </div>

            {/* Section 7: Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seguridad de Datos</h2>

              <p className="text-gray-700">
                Implementamos medidas tecnicas y organizativas apropiadas para proteger sus datos personales
                contra acceso no autorizado, alteracion, divulgacion o destruccion. Estas medidas incluyen
                encriptacion de datos en transito (HTTPS), control de acceso y monitoreo de seguridad.
              </p>
            </div>

            {/* Section 8: International Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferencias Internacionales</h2>

              <p className="text-gray-700">
                Sus datos pueden ser transferidos y procesados en servidores ubicados fuera de su pais de
                residencia, incluyendo Estados Unidos (PostHog). Nos aseguramos de que dichas transferencias
                cumplan con las leyes aplicables y que existan salvaguardas adecuadas para proteger sus datos.
              </p>
            </div>

            {/* Section 9: Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios a esta Politica</h2>

              <p className="text-gray-700">
                Podemos actualizar esta Politica de Privacidad periodicamente. Le notificaremos sobre
                cambios significativos publicando la nueva politica en esta pagina con una nueva fecha
                de "ultima actualizacion". Le recomendamos revisar esta politica periodicamente.
              </p>
            </div>

            {/* Section 10: Contact */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">10. Contacto</h2>
              </div>

              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre esta Politica de Privacidad o desea ejercer sus derechos,
                puede contactarnos a:
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold">Tecionic S.A.</p>
                <p className="text-gray-600">Responsable de Proteccion de Datos</p>
                <p className="text-gray-600 mt-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacidad@tecionic.com" className="text-emerald-600 hover:underline">
                    privacidad@tecionic.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Direccion:</strong> Luis Thayer Ojeda 95, of. 312, Providencia, Santiago, Chile
                </p>
              </div>
            </div>

            {/* Legal Compliance Note */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cumplimiento Legal</h3>
              <p className="text-sm text-gray-600">
                Esta politica ha sido disenada para cumplir con: Ley 19.628 sobre Proteccion de la Vida
                Privada (Chile), Lei Geral de Protecao de Dados - LGPD (Brasil), Ley Federal de Proteccion
                de Datos Personales en Posesion de los Particulares - LFPDPPP (Mexico), y principios
                generales de proteccion de datos reconocidos internacionalmente.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
