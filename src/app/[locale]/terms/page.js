'use client'

import { FileText, AlertTriangle, Scale, Globe } from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = '3 de enero de 2025'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-10 h-10 text-emerald-400" />
            <h1 className="text-4xl font-bold">Terminos de Servicio</h1>
          </div>
          <div className="w-24 h-1 bg-emerald-400 mb-6"></div>
          <p className="text-xl text-gray-300">
            Condiciones de uso del sitio web de Tecionic
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
                Bienvenido al sitio web de Tecionic S.A. Al acceder y utilizar este sitio web
                (tecionic.com), usted acepta cumplir con estos Terminos de Servicio. Si no esta
                de acuerdo con alguna parte de estos terminos, le solicitamos no utilizar nuestro sitio.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Uso del Sitio Web</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">1.1 Uso Permitido</h3>
              <p className="text-gray-700 mb-4">
                Este sitio web esta destinado a proporcionar informacion sobre los servicios de
                filtracion y separacion solido-liquido de Tecionic para la industria minera.
                Usted puede utilizar este sitio para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Conocer nuestros servicios y capacidades</li>
                <li>Solicitar informacion o cotizaciones a traves del formulario de contacto</li>
                <li>Acceder a recursos tecnicos y casos de estudio</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.2 Uso Prohibido</h3>
              <p className="text-gray-700 mb-4">Usted se compromete a no:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Utilizar el sitio de manera que viole leyes o regulaciones aplicables</li>
                <li>Intentar acceder a areas restringidas del sitio o sistemas</li>
                <li>Transmitir virus, malware o codigo danino</li>
                <li>Recopilar informacion de otros usuarios sin autorizacion</li>
                <li>Reproducir, duplicar o copiar contenido sin permiso escrito</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Propiedad Intelectual</h2>

              <p className="text-gray-700 mb-4">
                Todo el contenido de este sitio web, incluyendo pero no limitado a textos,
                graficos, logos, imagenes, videos, iconos y software, es propiedad de
                Tecionic S.A. o sus licenciantes y esta protegido por las leyes de propiedad
                intelectual de Chile y tratados internacionales.
              </p>

              <p className="text-gray-700">
                Las marcas "Tecionic", el logotipo de tres esferas, y otros identificadores
                visuales son marcas comerciales de Tecionic S.A. No se otorga ninguna licencia
                o derecho para usar estas marcas sin nuestro consentimiento previo por escrito.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Informacion del Sitio</h2>

              <p className="text-gray-700 mb-4">
                Nos esforzamos por mantener la informacion de este sitio precisa y actualizada.
                Sin embargo:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Aviso Importante</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      La informacion proporcionada en este sitio es de caracter general e informativo.
                      Las especificaciones tecnicas, capacidades y resultados pueden variar segun las
                      condiciones especificas de cada proyecto. Para informacion vinculante, solicite
                      una cotizacion formal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Formulario de Contacto</h2>

              <p className="text-gray-700 mb-4">
                Al utilizar nuestro formulario de contacto, usted:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Garantiza que la informacion proporcionada es veraz y precisa</li>
                <li>Acepta que podemos contactarle para responder a su consulta</li>
                <li>Comprende que el envio de una consulta no genera una obligacion contractual</li>
                <li>Acepta nuestra <a href="/privacy" className="text-emerald-600 hover:underline">Politica de Privacidad</a></li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Limitacion de Responsabilidad</h2>
              </div>

              <p className="text-gray-700 mb-4">
                En la maxima medida permitida por la ley aplicable:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Este sitio web se proporciona "tal cual" sin garantias de ningun tipo,
                  expresas o implicitas
                </li>
                <li>
                  Tecionic no sera responsable por danos directos, indirectos, incidentales
                  o consecuentes derivados del uso o imposibilidad de uso del sitio
                </li>
                <li>
                  No garantizamos que el sitio estara disponible de forma ininterrumpida
                  o libre de errores
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Enlaces a Terceros</h2>

              <p className="text-gray-700">
                Este sitio puede contener enlaces a sitios web de terceros. Estos enlaces se
                proporcionan unicamente para su conveniencia. No tenemos control sobre el
                contenido de esos sitios y no asumimos responsabilidad por ellos ni por
                cualquier perdida o dano que pueda surgir de su uso.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificaciones</h2>

              <p className="text-gray-700">
                Nos reservamos el derecho de modificar estos Terminos de Servicio en cualquier
                momento. Los cambios entraran en vigor inmediatamente despues de su publicacion
                en el sitio. Su uso continuado del sitio despues de cualquier cambio constituye
                su aceptacion de los nuevos terminos.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Ley Aplicable y Jurisdiccion</h2>
              </div>

              <p className="text-gray-700">
                Estos Terminos de Servicio se regiran e interpretaran de acuerdo con las leyes
                de la Republica de Chile. Cualquier disputa que surja en relacion con estos
                terminos sera sometida a la jurisdiccion exclusiva de los tribunales ordinarios
                de la ciudad de Santiago, Chile.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Servicios Profesionales</h2>

              <p className="text-gray-700 mb-4">
                Los servicios profesionales de filtracion y separacion solido-liquido de Tecionic
                se rigen por contratos especificos separados de estos terminos. Este sitio web
                no constituye una oferta de servicios y cualquier contratacion estara sujeta a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Evaluacion tecnica del proyecto</li>
                <li>Propuesta comercial formal</li>
                <li>Contrato de servicios firmado por ambas partes</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>

              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre estos Terminos de Servicio, puede contactarnos a:
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-800 font-semibold">Tecionic S.A.</p>
                <p className="text-gray-600 mt-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contacto@tecionic.com" className="text-emerald-600 hover:underline">
                    contacto@tecionic.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Direccion:</strong> Luis Thayer Ojeda 95, of. 312, Providencia, Santiago, Chile
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
