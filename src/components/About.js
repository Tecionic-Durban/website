// src/components/About.js
import { Droplets, RefreshCw, Zap, Shield, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 rounded-full text-emerald-700 font-medium text-sm mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            Líderes en Innovación Industrial
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Especialistas en Separación
            <span className="block text-emerald-600">Sólido-Líquido Móvil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
Especialistas en separación sólido-líquido en aplicaciones SX/EW con equipos móviles de alta capacidad.
            Atendemos a BHP, Codelco, Antofagasta Minerals, entre otras importantes empresas mineras,
            proporcionando soluciones que optimizan operaciones sin interrumpir procesos existentes.
          </p>
        </div>

        {/* Enterprise Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Left Panel - Value Propositions */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-8 h-full">
              <div className="flex items-center mb-8">
                <div className="w-3 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-900">Valor Empresarial</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Droplets,
                    title: "Modelo OPEX Avanzado",
                    description: "Cero inversión inicial. Modelo de servicios con facturación mensual que optimiza el flujo de caja operacional del cliente.",
                    metric: "0% CAPEX",
                    color: "emerald"
                  },
                  {
                    icon: RefreshCw,
                    title: "Rendimiento Verificable",
                    description: "Reportería diaria de KPIs operacionales específicos según el tipo de servicio prestado. Parámetros verificables que demuestran mejoras en eficiencia y productividad.",
                    metric: "24/7 Tracking",
                    color: "blue"
                  },
                  {
                    icon: Zap,
                    title: "Experiencia Multisectorial",
                    description: "Portfolio comprobado en cobre, litio, potasio y refinación de petróleo con casos de éxito documentados.",
                    metric: "5 Sectores",
                    color: "purple"
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start space-x-4 p-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                          <span className={`text-xs font-semibold px-2 py-1 bg-${item.color}-100 text-${item.color}-700 rounded-full`}>
                            {item.metric}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Process Excellence */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl shadow-xl p-8 text-white h-full relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-3 h-8 bg-gradient-to-b from-emerald-300 to-emerald-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold">Excelencia Operacional</h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      number: "01",
                      title: "Instalación Plug & Play",
                      description: "Equipos móviles preconfigurados que se integran directamente con sistemas existentes. Sin modificaciones de infraestructura, sin permisos adicionales. Operativo en 24-48 horas.",
                      timeline: "24-48h"
                    },
                    {
                      number: "02",
                      title: "Contratos Flexibles",
                      description: "Desde respuesta de emergencia hasta proyectos estratégicos de 5 años. Escalamiento automático según demanda operacional con términos adaptables a ciclos de mercado.",
                      timeline: "48h-5 años"
                    },
                    {
                      number: "03",
                      title: "Operación Multi-Línea",
                      description: "Capacidad de atender múltiples líneas de trabajo en paralelo con equipos independientes. Maximiza productividad sin interferir con operaciones simultáneas.",
                      timeline: "Paralelo"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-6 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center font-bold text-lg backdrop-blur-sm border border-white/30 flex-shrink-0">
                          {item.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-lg text-emerald-100">{item.title}</h4>
                            <span className="text-xs font-semibold px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full border border-emerald-400/30">
                              {item.timeline}
                            </span>
                          </div>
                          <p className="text-emerald-100/90 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-emerald-100 mb-1">¿Listo para optimizar sus operaciones?</h4>
                      <p className="text-emerald-200/80 text-sm">Consulta técnica sin costo con nuestros especialistas</p>
                    </div>
                    <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center space-x-2 group">
                      <span>Contactar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics - Executive Dashboard */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Indicadores de Rendimiento</h3>
                <p className="text-gray-600 mt-1">Métricas verificables de operaciones actuales</p>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 font-medium text-sm">En Vivo</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "23+", label: "Años Experiencia", icon: "🏆", color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50" },
                { value: "96.8%", label: "Recuperación Cu", icon: "⚡", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
                { value: "70", label: "Ton/día Capacidad", icon: "🔧", color: "from-purple-500 to-purple-600", bg: "bg-purple-50" },
                { value: "1,500+", label: "Días sin Accidentes", icon: "🛡️", color: "from-green-500 to-green-600", bg: "bg-green-50" }
              ].map((metric, index) => (
                <div key={index} className={`relative ${metric.bg} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-100/50`}>
                  <div className="text-center">
                    <div className="text-2xl mb-3">{metric.icon}</div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-8 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-emerald-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-emerald-100">Certificaciones y Acreditaciones</h3>
                  <p className="text-emerald-200/80">Cumplimiento normativo verificado</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              {[
                { name: "SICEP Vigente", desc: "Registro de Proveedores", icon: "📋" },
                { name: "Equipos Ex.Proof", desc: "Ambientes Explosivos", icon: "⚡" }
              ].map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center max-w-sm">
                  <div className="text-3xl mb-4">{cert.icon}</div>
                  <h4 className="font-bold text-emerald-100 mb-2">{cert.name}</h4>
                  <p className="text-emerald-200/80 text-sm">{cert.desc}</p>
                  <div className="mt-4 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-300 mr-2" />
                    <span className="text-emerald-300 font-medium text-sm">Verificado</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}