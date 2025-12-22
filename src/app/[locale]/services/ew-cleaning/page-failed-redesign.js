'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, RefreshCw, Droplets, Factory, Check, X, ChevronRight, Gauge, Boxes, Timer, FlaskConical, Building } from 'lucide-react'

export default function EWCleaningServicePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [countersStarted, setCountersStarted] = useState(false)
  const metricsRef = useRef(null)

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (metricsRef.current) {
      observer.observe(metricsRef.current)
    }

    return () => observer.disconnect()
  }, [countersStarted])

  const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!countersStarted) return

      let startTime
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / duration

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          requestAnimationFrame(animateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animateCount)
    }, [countersStarted, end, duration])

    return <span>{count}{suffix}</span>
  }

  const caseStudies = [
    {
      title: "Desborre de Celdas EW - Minera Caserones",
      client: "SCM Minera Lumina Copper Chile",
      location: ">4,000 msnm",
      duration: "Contrato 7x7",
      challenge: "Acumulación de borras metálicas y orgánicas en fondo de celdas EW generaba cortocircuitos, aumento consumo eléctrico y reducción calidad cobre. Operación en altura extrema exigía solución móvil.",
      solution: "Servicio integral mediante succión neumática 6 m³/h + filtración móvil + retorno electrolito filtrado. Equipos adaptados a altura con contenedores-bodega autónomos.",
      metrics: {
        before: { deposits: 100, incidents: 'Alto riesgo', consumption: 'Elevado' },
        after: { deposits: 0, incidents: '0 incidentes', consumption: 'Reducido' }
      },
      results: [
        "100% reducción depósitos metálicos",
        "0 incidentes seguridad",
        "Conductividad eléctrica restaurada",
        "Calidad LME mantenida"
      ]
    },
    {
      title: "Servicio Continuo SX - CODELCO DGM",
      client: "División Gabriela Mistral",
      location: "8 años operación",
      duration: "Contrato largo plazo",
      challenge: "Mantener calidad orgánico y eficiencia planta SX durante operación continua. Control constante borras + diálisis + tratamiento programado.",
      solution: "Administración eficiente retiro borras + diálisis continua orgánico + campañas tratamiento tierra activada. Mayor flota filtros prensa móviles del mercado.",
      metrics: {
        before: { tsf: 120, recovery: 94, replacement: 5.0 },
        after: { tsf: 92, recovery: 96, replacement: 2.6 }
      },
      results: [
        "Tensión interfacial 29.5 dinas/cm",
        "TSF 70s orgánica, 92s acuosa",
        "Recuperación SX >96% mensual",
        "Reposición 2.6% mes"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Refined Hero - Premium Minimalism */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden border-b border-slate-100">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 relative">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-amber-900">Sistema Móvil Operativo 24/7</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Desborre de
              <span className="block text-amber-600">Celdas EW</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 font-light leading-relaxed">
              Succión neumática y filtración móvil con cero pérdida de electrolito.
              <span className="block mt-2 text-slate-500">Reducción 100% de depósitos metálicos.</span>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Split - Alternating Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Problem */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-700 mb-4">
                EL PROBLEMA
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">
                Borras metálicas causan cortocircuitos críticos
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                La acumulación de borras metálicas y orgánicas en el fondo de las celdas EW genera cortocircuitos masivos, aumenta el consumo eléctrico y reduce la calidad del cobre producido.
              </p>
              <ul className="space-y-4">
                {['Cortocircuitos frecuentes', 'Aumento consumo energético', 'Reducción calidad cátodos', 'Pérdida electrolito en limpieza manual'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border border-red-100">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <Factory className="w-24 h-24 text-red-600 mb-4" />
                <div className="text-6xl font-black text-red-600 mb-2">78%</div>
                <p className="text-red-700 font-medium">Caída eficiencia corriente típica</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-12 border border-emerald-100">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <Filter className="w-24 h-24 text-emerald-600 mb-4" />
                <div className="text-6xl font-black text-emerald-600 mb-2">0%</div>
                <p className="text-emerald-700 font-medium">Pérdida de electrolito</p>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700 mb-4">
                LA SOLUCIÓN TSF
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">
                Sistema móvil de succión y filtración
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Succión neumática de borras a 6 m³/h + filtración móvil con retorno de electrolito {'<'}2-3 ppm sólidos. Sin interrumpir producción.
              </p>
              <ul className="space-y-4">
                {['100% reducción depósitos', 'Cero pérdida electrolito', '95% eficiencia vs manual', '2-3 celdas por turno'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard - Replace Cards */}
      <section ref={metricsRef} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Especificaciones del Sistema
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Parámetros operacionales certificados
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Metric 1 - Large */}
            <div className="sm:col-span-2 lg:col-span-1 bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <Gauge className="w-8 h-8 text-amber-600" />
                <div className="px-3 py-1 bg-amber-50 rounded-full text-xs font-bold text-amber-700">
                  TASA SUCCIÓN
                </div>
              </div>
              <div className="text-6xl font-black text-slate-900 mb-2">
                {countersStarted ? <AnimatedCounter end={6} suffix=" m³/h" /> : '6 m³/h'}
              </div>
              <p className="text-slate-600">Capacidad aspirado neumático</p>
              <div className="mt-6 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000" style={{width: countersStarted ? '100%' : '0%'}}></div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <FlaskConical className="w-8 h-8 text-green-600 mb-4" />
              <div className="text-5xl font-black text-slate-900 mb-2">
                {'<'}2-3
                <span className="text-2xl ml-2">ppm</span>
              </div>
              <p className="text-slate-600 font-medium">Calidad Retorno</p>
              <p className="text-sm text-slate-500 mt-2">Sólidos en electrolito filtrado</p>
            </div>

            {/* Metric 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <Timer className="w-8 h-8 text-blue-600 mb-4" />
              <div className="text-5xl font-black text-slate-900 mb-2">
                2-3
              </div>
              <p className="text-slate-600 font-medium">Celdas/Turno</p>
              <p className="text-sm text-slate-500 mt-2">Rendimiento por 12 horas</p>
            </div>

            {/* Metric 4 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <Droplets className="w-8 h-8 text-amber-400 mb-4" />
              <div className="text-5xl font-black mb-2">
                100-200<span className="text-2xl ml-2">L</span>
              </div>
              <p className="text-slate-300 font-medium">Electrolito Fuera</p>
              <p className="text-sm text-slate-400 mt-2">Mínimo volumen fuera de celda</p>
            </div>

            {/* Metric 5 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <Target className="w-8 h-8 text-purple-600 mb-4" />
              <div className="text-5xl font-black text-slate-900 mb-2">
                {countersStarted ? <AnimatedCounter end={95} suffix="%" /> : '95%'}
              </div>
              <p className="text-slate-600 font-medium">Eficiencia</p>
              <p className="text-sm text-slate-500 mt-2">vs operación manual</p>
            </div>

            {/* Metric 6 */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
              <CheckCircle className="w-8 h-8 mb-4" />
              <div className="text-5xl font-black mb-2">0%</div>
              <p className="font-medium">Pérdida Electrolito</p>
              <p className="text-sm text-emerald-100 mt-2">Garantizado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline - Replace Process Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Metodología de Desborre
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proceso sistemático de 5 pasos
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                {icon: Settings, title: 'Retiro de Electrodo', desc: 'Bloqueo y desenergización segura. Remoción controlada de 1 electrodo para acceso al fondo de celda.'},
                {icon: Activity, title: 'Succión de Borras', desc: 'Aspirado neumático 6 m³/h con bombas industriales. Mangueras antiestáticas 2-3 pulgadas.'},
                {icon: Filter, title: 'Filtración Móvil', desc: 'Separación sólido-líquido mediante filtros prensa. Retorno <2-3 ppm sólidos.'},
                {icon: RefreshCw, title: 'Retorno de Electrolito', desc: 'Devolución inmediata de electrolito filtrado. Solo 100-200 L fuera de celda.'},
                {icon: CheckCircle, title: 'Verificación Final', desc: 'Inspección completa, reinstalación electrodo, borra pesada y registro fotográfico.'}
              ].map((step, i) => (
                <div key={i} className="relative flex items-start space-x-6 group">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 group-hover:shadow-lg group-hover:border-slate-300 transition-all">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm font-bold text-amber-600">PASO {i + 1}</span>
                      <div className="h-px flex-1 bg-slate-200"></div>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Tabbed Interface */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Casos de Éxito Verificados
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Resultados cuantificables en operaciones reales
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {caseStudies.map((study, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <div className="text-sm opacity-80">{study.client}</div>
                <div className="text-lg font-bold">{study.title.split(' - ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Challenge & Solution */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="w-5 h-5 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-600">{caseStudies[activeTab].client}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{caseStudies[activeTab].title}</h3>
                  <div className="flex gap-3">
                    <div className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-700">
                      {caseStudies[activeTab].location}
                    </div>
                    <div className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-700">
                      {caseStudies[activeTab].duration}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Desafío
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{caseStudies[activeTab].challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Solución TSF
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{caseStudies[activeTab].solution}</p>
                </div>
              </div>

              {/* Right: Results & Metrics */}
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-6 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Resultados
                  </h4>
                  <div className="space-y-3">
                    {caseStudies[activeTab].results.map((result, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before/After Metrics Visualization */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-6">Antes vs Después</h4>
                  <div className="space-y-4">
                    {Object.keys(caseStudies[activeTab].metrics.before).map((key) => {
                      const before = caseStudies[activeTab].metrics.before[key]
                      const after = caseStudies[activeTab].metrics.after[key]
                      const isNumeric = typeof before === 'number'

                      return (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium text-slate-700 capitalize">{key.replace('_', ' ')}</span>
                            <span className="text-slate-500">{isNumeric ? `${after}${key === 'replacement' ? '%' : key === 'recovery' ? '%' : 's'}` : after}</span>
                          </div>
                          {isNumeric && (
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <div className="text-xs text-slate-500 mb-1">Antes</div>
                                <div className="h-2 bg-red-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-red-500 rounded-full" style={{width: `${(before / Math.max(before, after)) * 100}%`}}></div>
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-slate-500 mb-1">Después</div>
                                <div className="h-2 bg-green-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-green-500 rounded-full" style={{width: `${(after / Math.max(before, after)) * 100}%`}}></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Icon Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Beneficios Clave
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ventajas operacionales certificadas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: Target, title: '100% Reducción', desc: 'Depósitos metálicos eliminados'},
              {icon: Droplets, title: 'Cero Pérdida', desc: 'Electrolito recuperado totalmente'},
              {icon: Zap, title: 'Menor Consumo', desc: 'Energético por celda'},
              {icon: Shield, title: 'Sin Cortocircuitos', desc: 'Eliminación total de riesgos'},
              {icon: TrendingUp, title: '95% Eficiencia', desc: 'vs operación manual'},
              {icon: CheckCircle, title: 'Calidad LME', desc: 'Cátodos estándar mantenido'},
              {icon: Clock, title: 'Rápida Implementación', desc: 'Sistema móvil plug & play'},
              {icon: BarChart3, title: 'Trazabilidad', desc: 'Registro fotográfico completo'},
              {icon: Award, title: 'Continuidad', desc: 'Sin detenciones de producción'}
            ].map((benefit, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            ¿Listo para optimizar sus celdas EW?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Solicite una evaluación técnica sin compromiso y descubra cómo nuestro sistema puede eliminar sus problemas de borras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-[1.02]">
              <span>Solicitar Evaluación</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm">
              Descargar Especificaciones
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
