'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Filter, Droplets, Beaker, Layers, CheckCircle, ArrowRight, Shield, Play, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import { handleContactClick } from '@/utils/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PotassiumIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()

  const useCases = [
    {
      icon: Beaker,
      title: 'Filtración en Etapas de Extracción',
      description: 'Remoción continua de sólidos en E1, E2, y etapas de extracción sin detener el flujo de kerosene. Bomba S30 succiona solución, filtra sólidos, retorna limpia a la etapa.',
      result: 'Cero paradas por acumulación de material particulado.',
      color: 'purple'
    },
    {
      icon: Layers,
      title: 'Limpieza en Separación y Coalescencia',
      description: 'En etapas S1 y coalescedores (C), donde kerosene y yoduro se separan, removemos sólidos arrastrados que afectan la recuperación de micro-gotas de kerosene.',
      result: 'Máxima recuperación de kerosene, menor pérdida de solvente.',
      color: 'blue'
    },
    {
      icon: Droplets,
      title: 'Diálisis de Estanques y Piscinas',
      description: 'Limpieza programada de estanques gemelos, settlers, y piscinas de acumulación. Remoción de sedimentos sin vaciar ni detener operación del circuito.',
      result: 'Capacidad de almacenamiento íntegra, sin paradas mayores.',
      color: 'amber'
    },
    {
      icon: Filter,
      title: 'Limpieza de Lozas por Acumulación',
      description: 'Retiro de soluciones acumuladas en lozas de proceso. Prevención de derrames y contaminación cruzada entre etapas del circuito SX.',
      result: 'Proceso limpio, riesgo de contaminación eliminado.',
      color: 'emerald'
    }
  ]

  const colorClasses = {
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'from-purple-500 to-purple-600',
      text: 'text-purple-700',
      result: 'bg-purple-100 text-purple-800'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'from-blue-500 to-blue-600',
      text: 'text-blue-700',
      result: 'bg-blue-100 text-blue-800'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: 'from-amber-500 to-amber-600',
      text: 'text-amber-700',
      result: 'bg-amber-100 text-amber-800'
    },
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: 'from-emerald-500 to-emerald-600',
      text: 'text-emerald-700',
      result: 'bg-emerald-100 text-emerald-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-block px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-6">
                <span className="text-sm font-semibold text-purple-900">Producción de Yodo y Potasio</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
                100% continuidad operacional en tu proceso SX
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
                Filtración móvil que opera en cada etapa de extracción por solventes—desde E1 hasta coalescencia—sin detener producción.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/filtro_prensa_movil.png"
                alt="Infraestructura móvil Tecionic para producción de yodo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* La Oportunidad */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Donde el kerosene se mezcla con salmuera, la limpieza define tu producción
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              En plantas de yoduro, cada etapa del proceso SX acumula material particulado. Mantener soluciones limpias significa yoduro de mayor calidad y mayor capacidad de filtración corriente abajo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-800 rounded-xl flex items-center justify-center mb-6">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Etapas de Extracción</h3>
              <p className="text-gray-600 leading-relaxed">
                En E1 y E2, el kerosene extrae yodo libre de la cortadura. Sólidos acumulados reducen eficiencia de contacto y contaminan el kerosene cargado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-800 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Separación y Coalescencia</h3>
              <p className="text-gray-600 leading-relaxed">
                En S1 y coalescedores, kerosene y yoduro se separan. Sólidos arrastrados dificultan la separación y causan pérdida de kerosene valioso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-800 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Yoduro a Filtrado</h3>
              <p className="text-gray-600 leading-relaxed">
                El yoduro enviado a filtrado de compañía llega con carga de sólidos. Menos sólidos significa mayor capacidad de filtración y cristalización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones Tecionic */}
      <section id="aplicaciones" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              Intervención en cada etapa de tu proceso SX
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Desde la primera etapa de extracción hasta coalescencia, Tecionic filtra donde tú lo necesites—según las prioridades informadas por el jefe de planta.
            </p>
          </div>

          {/* Use Cases Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => {
              const colors = colorClasses[useCase.color]
              return (
                <div key={index} className="relative">
                  {/* Circle outline behind card */}
                  <div className={`absolute -top-12 -left-12 w-[140px] h-[140px] rounded-full pointer-events-none border-2 ${colors.border}`}></div>

                  <div className="bg-gray-50 rounded-2xl p-8 relative z-10">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                      <useCase.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-sm text-gray-600">{useCase.result}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Capabilities callout */}
          <div className="bg-purple-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Control de efectividad diario</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-purple-200">
                {[
                  'Medición turbidez entrada/salida',
                  'Reporte KPIs a jefe de planta',
                  'Bomba S30 + filtro móvil',
                  'Operación 24/7'
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup / Contingencia */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Tu plan B cuando la infraestructura fija falla
              </h2>
              <p className="text-xl text-emerald-50 leading-relaxed mb-8">
                Mantenciones programadas, fallas imprevistas, o peaks de producción—desplegamos capacidad de filtración en 24-48 horas para que tu planta no pare.
              </p>
              <div className="space-y-4">
                {[
                  'Movilización de emergencia en 24-48 horas',
                  'Equipos certificados y operadores capacitados',
                  'Sin compromiso de largo plazo—usa solo cuando lo necesites'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-emerald-50">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Escenarios donde Tecionic te respalda</h3>
              <div className="space-y-4">
                {[
                  { title: 'Mantención programada', desc: 'Capacidad temporal mientras tus equipos están en servicio' },
                  { title: 'Acumulación excesiva', desc: 'Refuerzo rápido cuando la carga de sólidos aumenta' },
                  { title: 'Aumento de producción', desc: 'Capacidad adicional sin inversión permanente' },
                  { title: 'Pruebas de proceso', desc: 'Validación antes de invertir en infraestructura fija' }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-emerald-100">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos - 3 steps */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wider">
              Cómo trabajamos
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              De la evaluación a la operación en semanas
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Un proceso simple para integrar capacidad de filtración a tu planta SX, sin la complejidad de un proyecto de capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl font-bold text-emerald-600 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Evaluamos tu proceso SX, identificamos etapas críticas con el jefe de planta, y dimensionamos la solución.
              </p>
              <div className="text-sm text-gray-500">1-2 semanas</div>
            </div>

            <div>
              <div className="text-6xl font-bold text-emerald-600 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Movilización</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Trasladamos equipos a tu sitio, conectamos bomba y filtro a las etapas definidas, y validamos operación.
              </p>
              <div className="text-sm text-gray-500">24-48 horas</div>
            </div>

            <div>
              <div className="text-6xl font-bold text-emerald-600 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operación</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Operamos y mantenemos los equipos. Medición diaria de turbidez, reportes a jefe de planta, ajustes según necesidad.
              </p>
              <div className="text-sm text-gray-500">Servicio continuo</div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">La diferencia clave</h3>
                <p className="text-gray-600 leading-relaxed">
                  No vendemos equipos—entregamos continuidad operacional. Nuestro éxito se mide en cero paradas y mayor capacidad de filtración corriente abajo.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Sin licitación de equipos',
                  'Sin gestión de proyecto',
                  'Sin contratación de operadores',
                  'Sin mantención por tu cuenta'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Modelo Tecionic */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Infraestructura sin compromiso de capital
            </h2>
            <p className="text-xl text-purple-200 leading-relaxed">
              El mismo modelo validado en operaciones de cobre y zinc aplica a tu planta de yoduro. Equipos móviles, operación especializada, OPEX predecible.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: '$0', label: 'CAPEX inicial' },
              { value: '24-48h', label: 'Movilización' },
              { value: '100%', label: 'Continuidad operacional' },
              { value: 'Incluida', label: 'Mantención y operación' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-purple-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-6">Infraestructura Permanente</div>
              <div className="space-y-4">
                {[
                  '$1M-3M+ inversión inicial',
                  '12-18 meses implementación',
                  'Mantención por cuenta propia',
                  'Capacidad fija no escalable'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-purple-200">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8">
              <div className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-6">Modelo Tecionic</div>
              <div className="space-y-4">
                {[
                  'OPEX mensual predecible',
                  'Operación en semanas',
                  'Servicio integral incluido',
                  'Escala según demanda'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Evaluemos tu proceso SX
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Análisis técnico sin costo para identificar dónde la filtración móvil agrega valor en tu planta de yoduro o potasio.
            </p>

            <button
              onClick={(e) => handleContactClick(e, router, pathname)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              Solicitar evaluación técnica
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-400">
                <span>contacto@tecionic.com</span>
                <span className="hidden sm:block">•</span>
                <span>Operaciones activas en plantas SX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
