// src/components/Footer.js
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Filtración y deshidratación de borras',
    'Tratamiento y recuperación de orgánico SX',
    'Deshidratación de concentrados',
    'Tratamiento de sólidos finos',
    'Clarificación de aguas',
    'Limpieza de celdas EW'
  ]

  const industries = [
    'Cobre',
    'Zinc',
    'Litio',
    'Potasio',
    'Petróleo Crudo'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg p-2">
                <Image 
                  src="/logo.png" 
                  alt="Tec-Ionic Durban"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tec-Ionic Durban</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Empresa chilena con más de dos décadas de experiencia en servicios 
              de filtración, deshidratación de sólidos, separación sólido-líquido 
              y tratamiento de orgánico en plantas de extracción por solventes (SX).
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-300">Oficinas en Santiago, Calama y Lima</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contacto@tsf.cl" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  contacto@tsf.cl
                </a>
              </div>
              <div className="mt-4">
                <Link href="/contacto" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  Ver información completa de contacto →
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Industrias</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link 
                    href="/industries" 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 mt-8">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Casos de Estudio
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Guías Técnicas
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Tec-Ionic Durban S.A. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}