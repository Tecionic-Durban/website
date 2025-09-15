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

        {/* Value Propositions in Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-600 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce text-center">
            <Droplets className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sin Inversión Capital</h3>
            <p className="text-gray-600 text-sm">Equipos móviles sin requerir modificaciones de infraestructura ni nuevos permisos ambientales</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce text-center">
            <RefreshCw className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI Inmediato</h3>
            <p className="text-gray-600 text-sm">Desde contratos de emergencia (48-72h) hasta proyectos de largo plazo (5 años)</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-400 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce text-center">
            <Zap className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cero Riesgo Operacional</h3>
            <p className="text-gray-600 text-sm">Tecnología probada en cobre, litio, potasio y refinación de petróleo</p>
          </div>
        </div>

        {/* Detailed Differentiators */}
        <div className="space-y-6 mb-12">
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
              Flexibilidad Operacional Total
            </h3>
            <p className="text-gray-600">
              Desde contratos de emergencia con despliegue en 48-72 horas hasta proyectos
              de largo plazo de hasta 5 años. Capacidad de atender múltiples líneas en paralelo
              con operación continua y monitoreo remoto de KPIs en tiempo real.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-400 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Tecnología Probada Multisectorial
            </h3>
            <p className="text-gray-600">
              Soluciones aplicadas exitosamente en cobre, litio, potasio y refinación de petróleo.
              Equipos ex.proof certificados para ambientes explosivos y registro SICEP vigente
              para operaciones en faenas de alta complejidad.
            </p>
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