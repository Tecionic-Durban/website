'use client'

import { useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Filter as FilterCarbon, Humidity, Flash, Recycle as RecycleCarbon, CheckmarkFilled, ArrowRight, Industry, Chemistry, Security } from '@carbon/icons-react'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { handleContactClick } from '@/utils/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ZincIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const stickyRef = useRef(null)
  const cardsRef = useRef(null)

  const useCases = [
    {
      icon: FilterCarbon,
      title: 'Filtración de Residuos de Hierro',
      description: 'Jarosita y goethita requieren filtración eficiente para maximizar recuperación de zinc y minimizar volumen de residuos peligrosos. Nuestros filtros prensa procesan el flujo de precipitación sin interrumpir tu circuito de remoción de hierro.',
      result: 'Mejor recuperación de zinc, menor costo de disposición de residuos.',
      color: 'blue'
    },
    {
      icon: Humidity,
      title: 'Deshidratación de Residuos de Lixiviación',
      description: 'Los residuos de lixiviación contienen valores concentrados de Au, Ag, y Pb. Deshidratación efectiva reduce peso y volumen para transporte, y prepara el material para procesamiento posterior.',
      result: 'Reducción 60-70% de humedad, manejo más eficiente de residuos valiosos.',
      color: 'amber'
    },
    {
      icon: Flash,
      title: 'Desborre de Celdas de Electroobtención',
      description: 'Las plantas de zinc electrolítico operan cientos de celdas. La acumulación de depósitos reduce eficiencia de corriente y calidad de cátodos. Limpieza programada mantiene tu tankhouse operando a capacidad.',
      result: 'Eficiencia de corriente sostenida, calidad de zinc consistente.',
      color: 'purple'
    },
    {
      icon: RecycleCarbon,
      title: 'Clarificación de Aguas de Proceso',
      description: 'Recuperación y clarificación de aguas de proceso para recirculación. Cierre de circuitos para cumplimiento ambiental y reducción de consumo de agua fresca.',
      result: 'Hasta 120 m³/día de clarificación, circuitos cerrados.',
      color: 'slate'
    }
  ]

  const colorClasses = {
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
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'from-purple-500 to-purple-600',
      text: 'text-purple-700',
      result: 'bg-purple-100 text-purple-800'
    },
    slate: {
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      icon: 'from-slate-500 to-slate-600',
      text: 'text-slate-700',
      result: 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(100 116 139) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(100, 116, 139, 0.1) 0%, transparent 70%)'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1.1]">
                Recupera más zinc en cada etapa de tu proceso
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
                Separación sólido-líquido móvil para remoción de hierro, manejo de residuos, y electroobtención—sin inversión en infraestructura fija.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/zinc_processing_plant.jpg"
                alt="Planta de procesamiento de zinc"
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
              Donde se separan sólidos, se define tu recuperación
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              En el proceso Roast-Leach-Electrowin, cada etapa de separación sólido-líquido impacta directamente cuánto zinc recuperas y cuánto termina en residuos.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Industry size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remoción de Hierro</h3>
              <p className="text-gray-600 leading-relaxed">
                La precipitación de jarosita o goethita genera la mayor masa de residuos en tu planta. Filtración eficiente significa menos zinc atrapado en el residuo—y menos toneladas a disponer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Chemistry size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residuos de Lixiviación</h3>
              <p className="text-gray-600 leading-relaxed">
                Los residuos de lixiviación concentran metales valiosos del mineral original. Deshidratación efectiva reduce volumen y facilita recuperación posterior de Au, Ag, Pb.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Security size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electrolito Limpio</h3>
              <p className="text-gray-600 leading-relaxed">
                Impurezas sobre 0.01 mg/L afectan eficiencia de corriente en electroobtención. Mantener celdas limpias y electrolito clarificado protege tu producción de cátodos.
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
              Infraestructura móvil para tu proceso
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Equipos de separación sólido-líquido donde los necesitas, cuando los necesitas. Sin obra civil, sin modificación de permisos, sin capital inmovilizado.
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
                      <useCase.icon size={24} className={colors.text} />
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
          <div className="bg-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-white mb-2">Equipamiento especializado</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-300">
                {[
                  'Filtros prensa hasta 400 ton/día',
                  'Centrífugas decanter',
                  'Certificación Ex-Proof',
                  'Operación incluida'
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup / Contingencia */}
      <section className="py-20 bg-gradient-to-br from-slate-600 to-slate-700">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Tu plan B cuando la infraestructura fija falla
              </h2>
              <p className="text-xl text-slate-50 leading-relaxed mb-8">
                Mantenciones programadas, fallas imprevistas, o peaks de demanda—desplegamos capacidad de filtración en 24-48 horas para que tu producción no se detenga.
              </p>
              <div className="space-y-4">
                {[
                  'Movilización de emergencia en 24-48 horas',
                  'Equipos certificados y operadores capacitados',
                  'Sin compromiso de largo plazo—usa solo cuando lo necesites'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-50">
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
                  { title: 'Falla de equipos', desc: 'Respuesta rápida para minimizar downtime' },
                  { title: 'Aumento de producción', desc: 'Capacidad adicional sin inversión permanente' },
                  { title: 'Pruebas de proceso', desc: 'Validación antes de invertir en infraestructura fija' }
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-slate-100">{item.desc}</div>
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
            <div className="text-slate-600 text-sm font-semibold mb-4 uppercase tracking-wider">
              Cómo trabajamos
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              De la evaluación a la operación en semanas
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Un proceso simple para integrar capacidad de separación sólido-líquido a tu operación, sin la complejidad de un proyecto de capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl font-bold text-slate-600 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Evaluamos tu proceso, identificamos puntos críticos de separación, y dimensionamos la solución adecuada.
              </p>
              <div className="text-sm text-gray-500">1-2 semanas</div>
            </div>

            <div>
              <div className="text-6xl font-bold text-slate-600 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Movilización</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Trasladamos equipos a tu sitio, realizamos conexiones, y validamos operación con tu equipo técnico.
              </p>
              <div className="text-sm text-gray-500">24-48 horas</div>
            </div>

            <div>
              <div className="text-6xl font-bold text-slate-600 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operación</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Operamos y mantenemos los equipos. Tú te enfocas en producir zinc—nosotros en la separación sólido-líquido.
              </p>
              <div className="text-sm text-gray-500">Servicio continuo</div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">La diferencia clave</h3>
                <p className="text-gray-600 leading-relaxed">
                  No vendemos equipos—entregamos resultados. Nuestro éxito se mide en tu recuperación de zinc y continuidad operacional.
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
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Modelo Tecionic */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Infraestructura sin compromiso de capital
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              El mismo modelo validado en más de 30 operaciones de cobre aplica a tu refinería de zinc. Equipos móviles, operación especializada, OPEX predecible.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: '$0', label: 'CAPEX inicial' },
              { value: '24-48h', label: 'Movilización' },
              { value: '30+', label: 'Operaciones validadas' },
              { value: 'Incluida', label: 'Mantención y operación' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Infraestructura Fija</div>
              <div className="space-y-4">
                {[
                  '$1M-3M+ inversión inicial',
                  '12-18 meses implementación',
                  'Mantención por cuenta propia',
                  'Capacidad fija'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-500/10 border border-slate-500/30 rounded-2xl p-8">
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">Modelo Tecionic</div>
              <div className="space-y-4">
                {[
                  'OPEX mensual predecible',
                  'Operación en semanas',
                  'Servicio integral incluido',
                  'Escala según demanda'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-100">
                    <CheckCircle className="w-4 h-4 text-slate-300 flex-shrink-0" />
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
              Evaluemos tu operación
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Análisis técnico sin costo para identificar dónde la separación sólido-líquido móvil agrega valor en tu proceso de zinc.
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
                <span>Santiago | Calama | Lima</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
