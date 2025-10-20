'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, RefreshCw, Droplets, Factory, X, Check, ChevronRight, Gauge, Timer, FlaskConical, Building2, ArrowDown, MapPin, Calendar, TrendingDown, Users } from 'lucide-react'

export default function EWCleaningServicePage() {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <div className="min-h-screen bg-white">

      {/* 1. HERO - Full-bleed background with floating offset content */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-bleed gradient background simulating industrial setting */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
          {/* Grid overlay for industrial feel */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
          {/* Animated glow */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Floating content block - offset left, 45% width */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-100">Sistema Móvil • Operativo 24/7</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
              Desborre de<br/>
              <span className="text-emerald-400">Celdas EW</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Succión neumática y filtración móvil con <span className="text-white font-semibold">cero pérdida de electrolito</span>.
              Reducción 100% de depósitos metálicos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/50">
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm hover:bg-white/10">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* 2. PROBLEM - Split screen 60/40 with overlapping stat visual */}
      <section className="relative py-0">
        <div className="grid lg:grid-cols-5 min-h-[600px]">
          {/* Left 60% - Large stat visual bleeding to edge */}
          <div className="lg:col-span-3 relative bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>

            <div className="relative z-10 text-center px-12">
              <Factory className="w-32 h-32 text-red-600 mx-auto mb-6" />
              <div className="text-[120px] lg:text-[160px] font-black text-red-600 leading-none mb-4">78%</div>
              <p className="text-2xl font-bold text-red-700">Caída típica de eficiencia<br/>por acumulación de borras</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-red-300 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-orange-300"></div>
          </div>

          {/* Right 40% - Floating text box that overlaps */}
          <div className="lg:col-span-2 relative bg-white flex items-center p-12 lg:p-16">
            {/* Overlapping element */}
            <div className="lg:absolute lg:-left-12 bg-white shadow-2xl rounded-2xl p-8 border-l-4 border-red-500">
              <div className="inline-block px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-700 mb-4">
                EL PROBLEMA
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Borras metálicas causan cortocircuitos críticos
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                La acumulación de borras metálicas y orgánicas en el fondo de las celdas EW genera cortocircuitos masivos, aumenta el consumo eléctrico y reduce la calidad del cobre producido.
              </p>
              <ul className="space-y-3">
                {['Cortocircuitos frecuentes', 'Aumento consumo energético', 'Reducción calidad cátodos', 'Pérdida electrolito con limpieza manual'].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-red-600" />
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION - Asymmetric grid with diagonal transition */}
      <section className="relative">
        {/* Diagonal SVG separator */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 0 0 120z" fill="#ffffff"></path>
          </svg>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Wide column with solution content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-700 mb-4">
                    LA SOLUCIÓN TSF
                  </div>
                  <h2 className="text-5xl font-black text-slate-900 mb-6">
                    Sistema móvil de succión y filtración
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    Succión neumática de borras a <span className="font-bold text-emerald-700">6 m³/h</span> + filtración móvil con retorno de electrolito {'<'}2-3 ppm sólidos. Sin interrumpir producción.
                  </p>
                </div>

                {/* Benefits in 2-column grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {label: '100% reducción depósitos', icon: Target},
                    {label: 'Cero pérdida electrolito', icon: Droplets},
                    {label: '95% eficiencia vs manual', icon: TrendingUp},
                    {label: '2-3 celdas por turno', icon: Clock}
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-semibold text-slate-900">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Narrow column - Overlapping large stat */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-12 text-white shadow-2xl shadow-emerald-500/50 transform lg:-translate-y-12">
                  <Filter className="w-20 h-20 mb-6 opacity-80" />
                  <div className="text-8xl font-black mb-4">0%</div>
                  <p className="text-xl font-semibold text-emerald-50">Pérdida de electrolito garantizada</p>
                  <div className="mt-6 pt-6 border-t border-emerald-400/30">
                    <p className="text-sm text-emerald-100">Sistema probado en +4,000 msnm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SPECS - Dashboard-style with floating metric pods */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Especificaciones del Sistema
            </h2>
            <p className="text-xl text-slate-600">
              Parámetros operacionales certificados
            </p>
          </div>

          {/* Asymmetric dashboard grid - different heights and positions */}
          <div className="grid grid-cols-6 gap-6 auto-rows-[140px]">
            {/* Large metric - spans 2x2 */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-2 row-span-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Gauge className="w-12 h-12 opacity-80" />
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm">
                  TASA SUCCIÓN
                </div>
              </div>
              <div>
                <div className="text-7xl font-black mb-2">6</div>
                <p className="text-2xl font-bold opacity-90">m³/hora</p>
                <p className="text-sm opacity-75 mt-2">Capacidad aspirado neumático</p>
              </div>
            </div>

            {/* Medium metrics */}
            <div className="col-span-3 sm:col-span-3 lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <FlaskConical className="w-8 h-8 text-green-600 mb-3" />
              <div className="text-4xl font-black text-slate-900 mb-1">{'<'}2-3 <span className="text-xl">ppm</span></div>
              <p className="text-sm text-slate-600">Calidad retorno filtrado</p>
            </div>

            <div className="col-span-3 sm:col-span-3 lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <Timer className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-4xl font-black text-slate-900 mb-1">2-3</div>
              <p className="text-sm text-slate-600">Celdas por turno 12h</p>
            </div>

            {/* Full width dark metric */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-3 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl">
              <Droplets className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-5xl font-black mb-1">100-200 <span className="text-2xl">L</span></div>
              <p className="text-slate-300">Mínimo electrolito fuera de celda durante proceso</p>
            </div>

            <div className="col-span-3 sm:col-span-3 lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <Target className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-4xl font-black text-slate-900 mb-1">95%</div>
              <p className="text-sm text-slate-600">Eficiencia vs manual</p>
            </div>

            <div className="col-span-3 sm:col-span-3 lg:col-span-1 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-center items-center text-center">
              <CheckCircle className="w-10 h-10 mb-2" />
              <div className="text-3xl font-black">0%</div>
              <p className="text-xs">Pérdida</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS - Horizontal scroll with images (not vertical cards) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Metodología de Desborre
          </h2>
          <p className="text-xl text-slate-600">
            Proceso sistemático de 5 pasos
          </p>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 px-8 space-x-6 snap-x snap-mandatory hide-scrollbar" style={{scrollbarWidth: 'none'}}>
            {[
              {num: '01', title: 'Retiro de Electrodo', desc: 'Bloqueo y desenergización segura. Remoción controlada de 1 electrodo.', icon: Settings, color: 'from-blue-500 to-cyan-500'},
              {num: '02', title: 'Succión de Borras', desc: 'Aspirado neumático 6 m³/h con bombas industriales.', icon: Activity, color: 'from-purple-500 to-pink-500'},
              {num: '03', title: 'Filtración Móvil', desc: 'Separación sólido-líquido mediante filtros prensa.', icon: Filter, color: 'from-amber-500 to-orange-500'},
              {num: '04', title: 'Retorno Electrolito', desc: 'Devolución inmediata de electrolito filtrado.', icon: RefreshCw, color: 'from-green-500 to-emerald-500'},
              {num: '05', title: 'Verificación Final', desc: 'Inspección, reinstalación, borra pesada, registro fotográfico.', icon: CheckCircle, color: 'from-slate-600 to-slate-800'}
            ].map((step, i) => (
              <div key={i} className="flex-shrink-0 w-80 snap-center">
                <div className="relative h-full bg-white rounded-2xl border-2 border-slate-200 overflow-hidden group hover:border-slate-300 transition-all hover:shadow-xl">
                  {/* Background gradient header */}
                  <div className={`h-48 bg-gradient-to-br ${step.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}></div>
                    <step.icon className="w-24 h-24 text-white relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm font-bold text-slate-400 mb-2">PASO {step.num}</div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="text-center mt-4 text-sm text-slate-400">
            ← Desliza para ver todos los pasos →
          </div>
        </div>
      </section>

      {/* 6. CASE STUDY - Magazine layout (asymmetric, large image bleeding) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Casos de Éxito Verificados
            </h2>
            <p className="text-xl text-slate-600">
              Resultados cuantificables en operaciones reales
            </p>
          </div>

          {/* Magazine-style asymmetric layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Large image bleeding left - 5 columns */}
            <div className="lg:col-span-5">
              <div className="sticky top-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-12 text-white shadow-2xl min-h-[500px] flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-6 backdrop-blur-sm">
                    CASO DE ÉXITO
                  </div>
                  <h3 className="text-3xl font-black mb-4">Minera Caserones</h3>
                  <p className="text-orange-50 text-lg mb-6">SCM Minera Lumina Copper Chile</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5" />
                      <span>{'>'} 4,000 msnm</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>Contrato 7x7</span>
                    </div>
                  </div>
                </div>

                {/* Pull quote */}
                <div className="border-l-4 border-white/50 pl-6 mt-8">
                  <p className="text-2xl font-bold leading-tight">
                    "100% reducción de depósitos metálicos en zonas críticas"
                  </p>
                </div>
              </div>
            </div>

            {/* Narrow text column - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Desafío */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center text-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  Desafío
                </h4>
                <p className="text-slate-600 leading-relaxed pl-6">
                  Acumulación de borras metálicas y orgánicas en fondo de celdas EW generaba cortocircuitos, aumento consumo eléctrico y reducción calidad cobre. Operación en altura extrema exigía solución móvil.
                </p>
              </div>

              {/* Solución */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center text-lg">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                  Solución TSF
                </h4>
                <p className="text-slate-600 leading-relaxed pl-6">
                  Servicio integral mediante succión neumática 6 m³/h + filtración móvil + retorno electrolito filtrado. Equipos adaptados a altura con contenedores-bodega autónomos.
                </p>
              </div>

              {/* Resultados en cards pequeños */}
              <div>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center text-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  Resultados
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 pl-6">
                  {[
                    '100% reducción depósitos metálicos',
                    '0 incidentes seguridad',
                    'Conductividad eléctrica restaurada',
                    'Calidad LME mantenida'
                  ].map((result, i) => (
                    <div key={i} className="flex items-start space-x-2 bg-white rounded-lg p-4 border border-slate-200">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics comparison */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                <h4 className="font-bold text-slate-900 mb-6">Impacto Medido</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">Depósitos Metálicos</span>
                      <span className="text-green-600 font-bold">100% → 0%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Antes</div>
                        <div className="h-3 bg-red-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 w-full rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Después</div>
                        <div className="h-3 bg-green-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-0 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">Incidentes de Seguridad</span>
                      <span className="text-green-600 font-bold">Riesgo → 0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-red-600">Alto Riesgo</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-green-600 font-bold">Cero Incidentes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENEFITS - Mix of layouts (not all cards) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Large list with icons */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8">
                Beneficios Clave del Servicio
              </h2>
              <div className="space-y-4">
                {[
                  {icon: Target, text: '100% reducción de depósitos metálicos'},
                  {icon: Droplets, text: 'Cero pérdida de electrolito'},
                  {icon: Zap, text: 'Reducción consumo energético'},
                  {icon: Shield, text: 'Eliminación cortocircuitos'},
                  {icon: TrendingUp, text: '95% eficiencia vs manual'},
                  {icon: CheckCircle, text: 'Calidad LME mantenida'},
                  {icon: Clock, text: 'Rápida implementación móvil'},
                  {icon: BarChart3, text: 'Trazabilidad fotográfica completa'}
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-slate-800">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Contact form */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Solicitar Servicio</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Servicio</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white backdrop-blur-sm focus:outline-none focus:border-emerald-500 transition-colors">
                    <option value="">Seleccionar...</option>
                    <option>Desborre de Celdas EW</option>
                    <option>Tratamiento de Borras SX</option>
                    <option>Filtración de Orgánico</option>
                    <option>Apoyo Integral Planta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Número de Celdas</label>
                  <input
                    type="text"
                    placeholder="ej: 50 celdas"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 backdrop-blur-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-emerald-500/50 flex items-center justify-center space-x-2">
                  <span>Solicitar Cotización</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Respuesta en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
