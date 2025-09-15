// src/components/About.js
import { Droplets, RefreshCw, Zap, Shield, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 bg-gray-50 carbon-fiber">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Líderes en Filtración y Separación Sólido-Líquido
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Empresa chilena especializada en separación sólido-líquido en aplicaciones SX/EW con equipos móviles de alta capacidad.
            Atendemos a BHP, Codelco, Antofagasta Minerals, entre otras importantes empresas mineras,
            proporcionando soluciones que optimizan operaciones sin interrumpir procesos existentes.
          </p>
        </div>

        {/* Value Propositions - Benefit Cards with Icons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Por Qué Nos Eligen</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center border border-emerald-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Sin Inversión Capital</h4>
                <p className="text-gray-600">Cero CAPEX requerido, solo costos operacionales según uso real</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center border border-emerald-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">ROI Inmediato</h4>
                <p className="text-gray-600">Retorno desde el primer mes de operación</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white rounded-2xl p-8 text-center border border-emerald-100 hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Cero Riesgo Operacional</h4>
                <p className="text-gray-600">Sin interrupciones de planta ni modificaciones de procesos</p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Deliver - Timeline Style */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Cómo Lo Logramos</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600 hidden lg:block"></div>

            <div className="space-y-12">
              <div className="relative flex items-start lg:pl-20">
                <div className="absolute left-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg lg:block hidden">
                  01
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-600 w-full">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Sin Modificaciones de Planta</h4>
                  <p className="text-gray-600">
                    Equipos móviles que operan sin requerir modificaciones a infraestructura existente
                    ni nuevos permisos ambientales. Instalación rápida y operación inmediata
                    sin interrumpir procesos productivos.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start lg:pl-20">
                <div className="absolute left-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg lg:block hidden">
                  02
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-500 w-full">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Flexibilidad Operacional Total</h4>
                  <p className="text-gray-600">
                    Desde contratos de emergencia con despliegue en 48-72 horas hasta proyectos
                    de largo plazo de hasta 5 años. Capacidad de atender múltiples líneas en paralelo
                    con operación continua y monitoreo remoto de KPIs en tiempo real.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start lg:pl-20">
                <div className="absolute left-0 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg lg:block hidden">
                  03
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-400 w-full">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Tecnología Probada Multisectorial</h4>
                  <p className="text-gray-600">
                    Soluciones aplicadas exitosamente en cobre, litio, potasio y refinación de petróleo.
                    Equipos ex.proof certificados para ambientes explosivos y registro SICEP vigente
                    para operaciones en faenas de alta complejidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics and Certifications Combined */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white">
          {/* Key Metrics */}
          <div className="text-center mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-300">23+</div>
                <div className="text-sm text-emerald-100">Años Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">96.8%</div>
                <div className="text-sm text-emerald-100">Recuperación Cu</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">70</div>
                <div className="text-sm text-emerald-100">Ton/día Capacidad</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">1,500+</div>
                <div className="text-sm text-emerald-100">Días sin Accidentes</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-emerald-500 pt-6">
            <h4 className="text-lg font-semibold text-center mb-4 flex items-center justify-center">
              <Shield className="w-5 h-5 mr-2" />
              Certificaciones y Credenciales
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center justify-center bg-emerald-700/30 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span>SICEP Vigente</span>
              </div>
              <div className="flex items-center justify-center bg-emerald-700/30 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center justify-center bg-emerald-700/30 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span>ISO 14001:2015</span>
              </div>
              <div className="flex items-center justify-center bg-emerald-700/30 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span>OHSAS 18001</span>
              </div>
              <div className="flex items-center justify-center bg-emerald-700/30 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span>Equipos Ex.Proof</span>
              </div>
              <div className="flex items-center justify-center bg-emerald-700/30 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 mr-2 text-emerald-300" />
                <span>Múltiples Sectores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}