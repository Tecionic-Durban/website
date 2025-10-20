'use client'

// src/app/industries/copper/page.js - Stripe-inspired visual design
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Zap, Filter, Droplets, Waves, Settings, Wrench, ArrowRight, Download, CheckCircle, TrendingUp, Factory, Shield } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CopperIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const stickyScrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !stickyScrollRef.current || !scrollContentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(stickyScrollRef.current, {
        backgroundColor: 'rgb(236, 253, 245)', // emerald-50
        scrollTrigger: {
          trigger: scrollContentRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 2,
        }
      })
    })

    return () => ctx.revert()
  }, [isLoading])


  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-emerald-600 rounded-full animate-bounce"></div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <ThreeBallLoader />
          <p className="mt-6 text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white">

        {/* Hero Section - Split layout with equipment photo */}
        <section className="relative overflow-hidden">
          {/* Background with copper/orange gradient + subtle grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(251, 146, 60, 0.08) 40%, transparent 70%)'
          }}></div>

          <div className="relative max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Content */}
              <div className="max-w-xl">
                <div className="inline-block px-3 py-1 bg-orange-50 border border-orange-200 rounded-full mb-6">
                  <span className="text-sm font-semibold text-orange-900">Industria del Cobre</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                  Infraestructura móvil para plantas de cobre
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Filtración, deshidratación, tratamiento—todo lo que necesitas para tu circuito SX/EW, sin inversión permanente.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">20+</div>
                    <div className="text-sm text-gray-600">años</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">$0</div>
                    <div className="text-sm text-gray-600">CAPEX</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">8+</div>
                    <div className="text-sm text-gray-600">años RT</div>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Explorar servicios
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right - Large equipment photo */}
              <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/filtro_prensa_movil.png"
                  alt="Filtro prensa móvil TSF"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sticky scroll - simple */}
        <section ref={stickyScrollRef} className="bg-gray-50 py-20 transition-colors">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left - Sticky */}
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  De infraestructura fija a móvil
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Plantas de cobre enfrentan problemas operacionales continuos: orgánico contaminado, borras en celdas,
                  concentrados húmedos, aguas con sólidos.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tradicionalmente cada problema requiere equipos fijos propios—millones en CAPEX, años de implementación.
                  TSF cambia este modelo completamente.
                </p>
              </div>

              {/* Right - Scrolls naturally */}
              <div ref={scrollContentRef} className="space-y-16">

                {/* Traditional model - scrolls up and out */}
                <div>
                  <div className="text-lg font-bold text-gray-600 uppercase tracking-wider mb-8">Modelo tradicional</div>

                  <div className="space-y-12">
                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">$500K-$2M+</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">CAPEX por sistema</div>
                        <p className="text-gray-600">Inversión permanente en infraestructura fija. Capital inmovilizado por décadas.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">12-18 meses</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Implementación</div>
                        <p className="text-gray-600">Desde ingeniería hasta operación. Más permisos ambientales modificados.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-gray-300">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">Obsolescencia</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Tecnología fija</div>
                        <p className="text-gray-600">Equipos quedan obsoletos. Nuevas inversiones para actualizar.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TSF model - appears as you scroll */}
                <div className="pt-16">
                  <div className="text-lg font-bold text-emerald-900 uppercase tracking-wider mb-8">Modelo TSF móvil</div>

                  <div className="space-y-12">
                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">$0 CAPEX</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">Sin inversión inicial</div>
                        <p className="text-gray-700">Opex predecible mensual. Capital libre para prioridades estratégicas.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">2-4 semanas</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">Movilización</div>
                        <p className="text-gray-700">Equipos llegan listos. Sin obra civil. Sin modificación de permisos RCA.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">Actualizada</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">Tecnología renovada</div>
                        <p className="text-gray-700">Flota renovada continuamente. Acceso a mejoras sin nuevas inversiones.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 pb-12 border-b border-emerald-200">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">Escalable</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">Capacidad flexible</div>
                        <p className="text-gray-700">Crece o reduce según demanda. Sin costos hundidos ni equipos ociosos.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      <div className="col-span-1">
                        <div className="text-3xl font-bold text-gray-900">Operado</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-emerald-700 uppercase tracking-wide mb-2">Servicio completo</div>
                        <p className="text-gray-700">Personal TSF 7x7, KPIs diarios, mantención incluida. Swap garantizado.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Why TSF - Strategic partner positioning */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-emerald-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Por qué TSF
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Socio estratégico, no proveedor transaccional
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                No vendemos ni arrendamos equipos. Aseguramos continuidad operacional con un modelo de servicio completo.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-bold text-emerald-600 mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnóstico inicial</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Análisis de muestras y condiciones específicas de tu planta. Diseño de solución a medida.
                </p>
                <div className="text-sm text-gray-500">2-3 semanas típicamente</div>
              </div>

              <div>
                <div className="text-6xl font-bold text-emerald-600 mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Montaje rápido</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Equipos móviles llegan listos. Sin obra civil, sin modificación de permisos ambientales.
                </p>
                <div className="text-sm text-gray-500">2-4 semanas movilización</div>
              </div>

              <div>
                <div className="text-6xl font-bold text-emerald-600 mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Operación continua</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Turnos 7x7, KPIs diarios, mantención preventiva incluida. Swap de equipos si se requiere mantención.
                </p>
                <div className="text-sm text-gray-500">Garantía de continuidad</div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Diferencia clave</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Si un equipo requiere mantención mayor, lo reemplazamos. Tu producción no se detiene mientras nosotros reparamos.
                    Eso es un socio estratégico—no un arriendo de equipos.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Operadores TSF dedicados 7x7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">KPIs diarios (volumen, eficiencia, sólidos)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Equipos certificados SICEP, ex.proof</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Mantención preventiva incluida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Clean visual layout */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-gray-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Servicios
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Todo lo que necesitas para tu circuito SX/EW
              </h2>
              <p className="text-xl text-gray-600">
                Flota móvil completa. Sin instalaciones permanentes, sin modificaciones a permisos.
              </p>
            </div>

            {/* Service grid - Compact with subtle visual distinction */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

              {/* Service 1 - Blue accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all">
                    <Beaker className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tratamiento Orgánico SX</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Filtración, arcilla activada, centrifugación. Restaura TIF, reduce TSF, elimina entrainment.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      TIF 20 → 24+ dinas/cm
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      TSF -65% (444s → 153s)
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      Reducción entrainment 50%
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">VALIDADO</div>
                    <div className="text-sm font-bold text-blue-600">Radomiro Tomic • 8+ años</div>
                  </div>
                </div>
              </div>

              {/* Service 2 - Amber accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-amber-100 to-orange-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group-hover:shadow-xl group-hover:shadow-amber-500/30 group-hover:scale-105 transition-all">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Desborre Celdas EW</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Succión neumática + filtración en línea. Retorno limpio, sin pérdida de nivel.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                      2-3 celdas/turno 12h
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                      Retorno 2-3 ppm sólidos
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                      95% eficiencia vs manual
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">VALIDADO</div>
                    <div className="text-sm font-bold text-amber-600">Caserones • 4,200 msnm</div>
                  </div>
                </div>
              </div>

              {/* Service 3 - Purple accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-violet-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 group-hover:scale-105 transition-all">
                    <Filter className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Deshidratación Concentrados</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Filtros prensa de alta capacidad. Reduce humedad, optimiza transporte.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Hasta 70 ton/día torta
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Humedad reducida
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                      Equipos escalables
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-xs font-semibold text-gray-500">CAPACIDAD</div>
                    <div className="text-sm font-bold text-purple-600">Mayor flota móvil Chile</div>
                  </div>
                </div>
              </div>

              {/* Service 4 - Teal accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-teal-100 to-emerald-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-teal-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:shadow-xl group-hover:shadow-teal-500/30 group-hover:scale-105 transition-all">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tratamiento Borras SX</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Filtración desde settlers, sumideros, piscinas. Recuperación de orgánico.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                      Limpieza LOT completo
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                      Recuperación orgánico
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 5 - Cyan accent */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/5 rounded-tr-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:shadow-xl group-hover:shadow-cyan-500/30 group-hover:scale-105 transition-all">
                    <Waves className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clarificación Aguas</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Remoción de sólidos. Recirculación, cumplimiento ambiental.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                      120 m³/día clarificada
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                      Reducción {'>'}90%
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 6 - Slate accent, slightly offset down */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden lg:translate-y-4">
                {/* Subtle corner decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-gray-50 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-slate-500/5 rounded-tl-full"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-500/20 group-hover:shadow-xl group-hover:shadow-slate-500/30 group-hover:scale-105 transition-all">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sólidos Finos</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Tratamiento especializado de clarificadores. Partículas difíciles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      14 ton/día sólidos finos
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      Filtros especializados
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Housekeeping callout */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-emerald-100 text-sm font-semibold mb-1">SERVICIO INTEGRAL</div>
                    <h3 className="text-3xl font-bold">Housekeeping Completo SX</h3>
                  </div>
                </div>
                <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                  Apoyo continuo: filtración programada, retiro de borras, limpieza, trasvasije.
                  Mantén eficiencia operacional óptima con un solo partner.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="font-bold mb-3">Resultados DGM</div>
                    <div className="space-y-2 text-sm text-emerald-50">
                      <div>• 8 años operación continua</div>
                      <div>• Recuperación {'>'}96% mes</div>
                      <div>• Reposición orgánico 2.6%</div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="font-bold mb-3">Servicios incluidos</div>
                    <div className="space-y-2 text-sm text-emerald-50">
                      <div>• Diálisis continua</div>
                      <div>• Campañas arcilla</div>
                      <div>• Retiro borras programado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split section - EW Cell cleaning with photo */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/EW Photos/20251009_141022.jpg"
                  alt="Desborre celdas EW"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content */}
              <div>
                <div className="text-amber-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                  Desborre EW
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Limpieza de celdas sin parar producción
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Succión neumática desde fondo de celda. Filtración inline retorna electrolito limpio.
                  Sin pérdida de nivel, sin detención de proceso.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">2-3 celdas por turno</div>
                      <div className="text-gray-600">Eficiencia 95% vs limpieza manual</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Retorno 2-3 ppm sólidos</div>
                      <div className="text-gray-600">Cero pérdida de electrolito</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Validado 4,200 msnm</div>
                      <div className="text-gray-600">Caserones - condiciones extremas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Radomiro Tomic Case Study - Visual with data */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-blue-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Caso validado
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Radomiro Tomic: 8 años de validación continua
              </h2>
              <p className="text-xl text-gray-600">
                Tratamiento de orgánico SX. Renovación anual por licitación competitiva desde 2016.
              </p>
            </div>

            {/* Before/After comparison */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Antes</div>
                <div className="space-y-4">
                  {[
                    { label: 'TIF', value: '20.4', unit: 'dinas/cm', bad: true },
                    { label: 'TSF', value: '444', unit: 'segundos', bad: true },
                    { label: 'Entrainment', value: '6', unit: 'm³/día', bad: true },
                    { label: 'Eficiencia', value: '77-92%', unit: 'variable', bad: true }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-red-50">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">Después</div>
                <div className="space-y-4">
                  {[
                    { label: 'TIF', value: '23.7', unit: 'dinas/cm' },
                    { label: 'TSF', value: '153', unit: '-65%' },
                    { label: 'Entrainment', value: '2.9', unit: '-52%' },
                    { label: 'Eficiencia', value: '92%+', unit: 'estable' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-emerald-50">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Economic impact */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-12 border border-emerald-100">
              <div className="text-center mb-8">
                <div className="text-sm font-semibold text-emerald-900 mb-2 uppercase tracking-wider">Impacto económico</div>
                <div className="text-gray-700">Validado durante 8 años de operación continua</div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">$260K</div>
                  <div className="text-sm text-gray-600 font-medium">ahorro mensual</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">$3.1M</div>
                  <div className="text-sm text-gray-600 font-medium">ahorro anual</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">$12M+</div>
                  <div className="text-sm text-gray-600 font-medium">reemplazo evitado</div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 p-4 rounded-xl bg-emerald-100">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-emerald-900">8 renovaciones consecutivas por licitación</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile vs Fixed comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-gray-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Modelo móvil
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por qué equipos móviles cambian todo
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Traditional */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Modelo tradicional</div>
                <div className="space-y-4">
                  {[
                    { metric: '$500K-$2M+', label: 'Inversión CAPEX inicial' },
                    { metric: '12-18 meses', label: 'Tiempo instalación' },
                    { metric: 'RCA modificada', label: 'Permisos ambientales' },
                    { metric: 'Obsolescencia', label: 'Tecnología queda fija' }
                  ].map((item, i) => (
                    <div key={i} className="group relative flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Subtle corner decoration */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full opacity-40"></div>

                      <div className="relative w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Shield className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="relative">
                        <div className="font-bold text-gray-900 text-lg mb-1">{item.metric}</div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TSF Model */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Modelo TSF</div>
                <div className="space-y-4">
                  {[
                    { metric: '$0', label: 'Sin inversión inicial' },
                    { metric: '2-4 semanas', label: 'Movilización rápida' },
                    { metric: 'Sin modificación', label: 'Permisos intactos' },
                    { metric: 'Siempre actualizado', label: 'Flota renovada' }
                  ].map((item, i) => (
                    <div key={i} className="group relative flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      {/* Subtle corner decoration */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/30 rounded-bl-full"></div>

                      <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="relative">
                        <div className="font-bold text-emerald-900 text-lg mb-1">{item.metric}</div>
                        <div className="text-sm text-emerald-700">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Diagnóstico técnico
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Envíanos muestras. Te daremos un diagnóstico honesto—si no tiene sentido, te lo diremos directamente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={(e) => handleContactClick(e, router, pathname)}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar diagnóstico
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2 justify-center">
                    <Download className="w-5 h-5" />
                    Caso Radomiro Tomic
                  </div>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Contacto</div>
                  <div className="text-white font-medium">+56 2 2334 7087</div>
                  <div className="text-gray-400 text-sm">contacto@tsf.cl</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Cobertura</div>
                  <div className="text-white font-medium">Toda Latinoamérica</div>
                  <div className="text-gray-400 text-sm">Flota móvil disponible</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Clientes</div>
                  <div className="text-white font-medium">Radomiro Tomic, BHP</div>
                  <div className="text-gray-400 text-sm">SQM, Capstone, Antofagasta</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

