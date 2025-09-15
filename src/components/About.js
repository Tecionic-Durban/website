// src/components/About.js
import { Beaker, Droplets, RefreshCw, Zap, Shield, Award, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 bg-gray-50 carbon-fiber">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Líderes en Filtración y Separación Sólido-Líquido
              </h2>
              <div className="w-20 h-1 bg-emerald-600"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empresa chilena especializada en separación sólido-líquido en aplicaciones SX/EW con equipos móviles de alta capacidad.
                Atendemos a BHP, Codelco, Antofagasta Minerals, entre otras importantes empresas mineras,
                proporcionando soluciones que optimizan operaciones sin interrumpir procesos existentes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-600 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Sin Modificaciones de Planta
                </h3>
                <p className="text-gray-600">
                  Equipos móviles que operan sin requerir modificaciones a infraestructura existente
                  ni nuevos permisos ambientales. Instalación rápida y operación inmediata
                  sin interrumpir procesos productivos.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Respuesta Rápida 24/7
                </h3>
                <p className="text-gray-600">
                  Despliegue de equipos en 48-72 horas para emergencias operacionales.
                  Capacidad de atender múltiples líneas en paralelo con operación continua
                  y monitoreo remoto de KPIs en tiempo real.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-400 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tecnología Probada Multisectorial
                </h3>
                <p className="text-gray-600">
                  Soluciones aplicadas exitosamente en cobre, zinc, litio, potasio y refinación de petróleo.
                  Equipos ex.proof certificados para ambientes explosivos y registro SICEP vigente
                  para operaciones en faenas de alta complejidad.
                </p>
              </div>

              {/* Trust Signals Section */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Certificaciones y Credenciales
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                    <span>Registro SICEP Vigente</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                    <span>Equipos Ex.Proof Certificados</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                    <span>+1,500 días sin Accidentes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                    <span>ISO 9001:2015 Calidad</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                    <span>ISO 14001:2015 Ambiental</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                    <span>OHSAS 18001 Seguridad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <Beaker className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Servicios Especializados</h3>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-emerald-700/50 rounded-lg p-4">
                    <Droplets className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Filtración</div>
                    <div className="text-xs text-emerald-200">Móvil</div>
                  </div>
                  <div className="bg-emerald-700/50 rounded-lg p-4">
                    <RefreshCw className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Separación</div>
                    <div className="text-xs text-emerald-200">Sólido-Líquido</div>
                  </div>
                  <div className="bg-emerald-700/50 rounded-lg p-4">
                    <Zap className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Tratamiento</div>
                    <div className="text-xs text-emerald-200">Orgánico</div>
                  </div>
                </div>

                <div className="border-t border-emerald-500 pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-300">23+</div>
                      <div className="text-sm text-emerald-100">Años de Experiencia</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-300">96.8%</div>
                      <div className="text-sm text-emerald-100">Recuperación Cu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}