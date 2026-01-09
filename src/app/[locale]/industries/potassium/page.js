'use client'

// src/app/industries/potassium/page.js - Redesigned with operational continuity focus
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Droplets, Factory, Filter, CheckCircle, TrendingUp, ArrowRight, Download, Zap, Shield, Settings, AlertTriangle, Target, FlaskConical, Play, Pause, RefreshCw, Layers } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PotassiumIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const ThreeBallLoader = () => (
    <div className="flex space-x-2 justify-center items-center">
      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"></div>
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

        {/* Hero Section - Tecionic as operational infrastructure */}
        <section className="relative overflow-hidden">
          {/* Background with purple gradient + subtle grid pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)'
          }}></div>

          <div className="relative max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left - Value Proposition */}
              <div className="max-w-xl">
                <div className="inline-block px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-6">
                  <span className="text-sm font-semibold text-purple-900">Producción de Yodo y Potasio</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                  Continuidad operacional en extracción por solventes
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Infraestructura móvil de filtración que elimina sólidos de etapas SX sin detener producción. <strong className="text-gray-900">Cero paradas por acumulación</strong>, protección proceso completo, y capacidad flexible.
                </p>
              </div>

              {/* Right - Equipment Visual */}
              <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/filtro_prensa_movil.png"
                  alt="Infraestructura móvil Tecionic para producción potasio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Industry Challenge - Solid accumulation problem */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-red-100 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-red-700 mr-2" />
                <span className="text-red-700 font-semibold text-sm">EL DESAFÍO OPERACIONAL</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Sólidos en SX detienen producción y saturan filtros corriente abajo
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                En plantas de yoduro y potasio, la acumulación de material particulado en etapas de extracción por solventes causa paradas forzadas y reduce eficiencia de cristalización.
              </p>
            </div>

            {/* Problem Breakdown */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">

              {/* Problem 1: Shutdowns */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Pause className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Paradas forzadas por sólidos</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Acumulación en etapas de extracción (E1, E2) y coalescedores (C) requiere parada completa para limpieza manual. <strong>Pérdida producción 12-48h por evento</strong>.
                </p>
                <div className="bg-red-100 border border-red-200 rounded-lg p-3 text-sm text-red-800">
                  <strong>Impacto:</strong> $50K-$150K pérdida por día de parada
                </div>
              </div>

              {/* Problem 2: Downstream contamination */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8">
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Yoduro contaminado satura filtros</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sólidos arrastrados llegan a etapa de filtrado de compañía con <strong>alta carga particulada</strong>, reduciendo capacidad filtración hasta 40%.
                </p>
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 text-sm text-orange-800">
                  <strong>Resultado:</strong> Cuello de botella en cristalización corriente abajo
                </div>
              </div>

              {/* Problem 3: Reactive maintenance */}
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 border-2 border-yellow-200 rounded-2xl p-8">
                <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mantenimiento reactivo costoso</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sin filtración continua, limpieza es <strong>reactiva y emergencia</strong>. Personal, equipos auxiliares, y pérdida momentum operacional.
                </p>
                <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                  <strong>Costo:</strong> OPEX mantención 3-5x vs preventiva
                </div>
              </div>
            </div>

            {/* Cost visualization */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-4">El costo real de operar sin filtración continua</h3>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div className="text-4xl font-black text-red-400 mb-2">4-8x/año</div>
                    <div className="text-gray-300 text-sm">Paradas por limpieza</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-orange-400 mb-2">40%</div>
                    <div className="text-gray-300 text-sm">Reducción capacidad filtros</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-yellow-400 mb-2">$1M+</div>
                    <div className="text-gray-300 text-sm">Pérdida anual acumulada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Tecionic Solves It - Clean minimal workflow */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="inline-flex items-center px-3 py-1 bg-emerald-100 rounded-full mb-6">
                <Shield className="w-4 h-4 text-emerald-700 mr-2" />
                <span className="text-emerald-700 font-semibold text-sm">CÓMO FUNCIONA</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Filtración integrada a tu proceso SX
              </h2>
              <p className="text-xl text-gray-600">
                Tecionic opera en cada etapa del proceso sin detener producción
              </p>
            </div>

            {/* Clean horizontal workflow */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-[72px] left-0 right-0 h-0.5 bg-gray-200"></div>

              {/* Workflow steps */}
              <div className="grid lg:grid-cols-4 gap-8 relative mb-12">

                {/* Step 1: Salmuera */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-white border-4 border-gray-200 rounded-full mb-6 z-10">
                    <div className="text-center">
                      <Droplets className="w-8 h-8 text-gray-700 mx-auto mb-1" />
                      <div className="text-xs font-bold text-gray-500">01</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Salmuera</h3>
                  <p className="text-base text-gray-600">Solución de lixiviación</p>
                </div>

                {/* Step 2: Extracción + Tecionic */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-emerald-50 border-4 border-emerald-500 rounded-full mb-6 z-10">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-center">
                      <Beaker className="w-8 h-8 text-emerald-700 mx-auto mb-1" />
                      <div className="text-xs font-bold text-emerald-700">02</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Extracción</h3>
                  <p className="text-base text-gray-600 mb-3">Kerosene extrae yodo</p>

                  {/* Tecionic micro-flow */}
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center justify-center gap-1.5 text-sm text-emerald-700 font-semibold mb-2">
                      <span>Bomba</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Filtro</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Retorno</span>
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">Tecionic filtra continuo</div>
                  </div>
                </div>

                {/* Step 3: Separación + Tecionic */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-emerald-50 border-4 border-emerald-500 rounded-full mb-6 z-10">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-center">
                      <Layers className="w-8 h-8 text-emerald-700 mx-auto mb-1" />
                      <div className="text-xs font-bold text-emerald-700">03</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Separación</h3>
                  <p className="text-base text-gray-600 mb-3">Kerosene/Yoduro</p>

                  {/* Tecionic micro-flow */}
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center justify-center gap-1.5 text-sm text-emerald-700 font-semibold mb-2">
                      <span>Bomba</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Filtro</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Retorno</span>
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">Tecionic limpia inline</div>
                  </div>
                </div>

                {/* Step 4: Coalescencia + Tecionic */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-emerald-50 border-4 border-emerald-500 rounded-full mb-6 z-10">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-center">
                      <Filter className="w-8 h-8 text-emerald-700 mx-auto mb-1" />
                      <div className="text-xs font-bold text-emerald-700">04</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Coalescencia</h3>
                  <p className="text-base text-gray-600 mb-3">Recuperación kerosene</p>

                  {/* Tecionic micro-flow */}
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center justify-center gap-1.5 text-sm text-emerald-700 font-semibold mb-2">
                      <span>Diálisis</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Estanques</span>
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">Tecionic sin vaciar</div>
                  </div>
                </div>

              </div>

              {/* Key results - two-tone card with gradient flow */}
              <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border-2 border-emerald-200">
                {/* Top section - Technical result (darker) */}
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 px-8 py-6">
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                    <p className="text-emerald-900 font-bold text-lg">
                      Cero impacto operacional • Turbidez salida {'<'}10 NTU • Medición diaria
                    </p>
                  </div>
                </div>

                {/* Bottom section - Key metrics (lighter) */}
                <div className="bg-white px-8 py-8">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-black text-gray-900 mb-2">0</div>
                      <div className="text-sm text-gray-600">Paradas de proceso</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-black text-gray-900 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Operación continua</div>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-black text-gray-900 mb-2">1-2</div>
                      <div className="text-sm text-gray-600">Semanas movilización</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Benefits - The Tecionic Advantage */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                BENEFICIOS OPERACIONALES
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Por qué plantas de potasio operan con Tecionic
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">

              {/* Benefit 1: Operational Continuity */}
              <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Continuidad operacional garantizada</h3>
                    <p className="text-emerald-700 font-semibold">Elimina paradas por acumulación de sólidos</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Filtración continua</strong> en etapas de extracción E1-E2 sin detener proceso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Diálisis programada</strong> de estanques, settlers, piscinas sin paradas mayores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Limpieza lozas</strong> por acumulación soluciones sin interrumpir flujo</span>
                  </li>
                </ul>
                <div className="bg-emerald-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-black">100%</span>
                    <span className="text-emerald-100">disponibilidad operacional</span>
                  </div>
                  <div className="text-emerald-100 text-sm">Cero paradas forzadas por sólidos desde implementación Tecionic</div>
                </div>
              </div>

              {/* Benefit 2: Downstream Protection */}
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Protección corriente abajo y calidad</h3>
                    <p className="text-blue-700 font-semibold">Yoduro limpio maximiza eficiencia cristalización</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Carga sólidos reducida</strong> en yoduro enviado a filtrado compañía</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Aumenta capacidad filtración</strong> corriente abajo al recibir alimentación más limpia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Vida útil extendida</strong> de filtros y equipos cristalización</span>
                  </li>
                </ul>
                <div className="bg-blue-600 rounded-xl p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-black">+35%</span>
                    <span className="text-blue-100">capacidad filtros cliente</span>
                  </div>
                  <div className="text-blue-100 text-sm">Mayor capacidad cristalización con misma infraestructura permanente</div>
                </div>
              </div>
            </div>

            {/* Benefit 3 & 4: Flexibility and Zero CAPEX */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Capacidad flexible escalable</h3>
                <p className="text-gray-600 mb-4">
                  Tecionic ajusta equipos según necesidades producción. Escalas o reduces sin CAPEX adicional ni equipos ociosos.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Módulos móviles 5-100+ m³/h</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-black text-xl">$0</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cero inversión permanente</h3>
                <p className="text-gray-600 mb-4">
                  Sin CAPEX filtración. OPEX predecible mensual incluye equipos, operación, mantención, e intercambio garantizado.
                </p>
                <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Capital libre para core business</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services - Beyond core filtration */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                SERVICIOS COMPLEMENTARIOS
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Apoyo operacional completo para plantas SX
              </h2>
              <p className="text-xl text-gray-600">
                Además de filtración continua, Tecionic provee servicios especializados según necesidades prioritarias informadas por jefe planta.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Service 1: Dialysis */}
              <div className="group bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Beaker className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Diálisis estanques y etapas</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Limpieza programada estanques gemelos, settlers, piscinas acumulación. Remoción sólidos sin vaciar ni detener proceso.
                </p>
                <div className="text-purple-600 font-semibold text-sm">Frecuencia: Según carga sólidos medida</div>
              </div>

              {/* Service 2: Slab cleaning */}
              <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Limpieza lozas acumulación</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Retiro soluciones acumuladas en lozas proceso. Prevención derrames y contaminación cruzada entre etapas SX.
                </p>
                <div className="text-blue-600 font-semibold text-sm">Ejecutado según prioridad planta</div>
              </div>

              {/* Service 3: Turbidity monitoring */}
              <div className="group bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Medición turbidez y KPIs</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Equipos medición turbidez diaria entrada/salida. Reporte KPIs efectividad filtrado entregado a jefe planta turno.
                </p>
                <div className="text-emerald-600 font-semibold text-sm">Control diario performance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Tecionic - Strategic positioning */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="text-emerald-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                POR QUÉ TECIONIC
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Infraestructura móvil vs equipos permanentes
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Traditional Approach */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Infraestructura permanente tradicional</div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold">$</span>
                      </div>
                      <div className="font-bold text-gray-900">$1M-$3M+ CAPEX filtración</div>
                    </div>
                    <p className="text-gray-600 text-sm">Inversión inicial equipos, obra civil, instalación permanente</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Pause className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="font-bold text-gray-900">12-18 meses implementación</div>
                    </div>
                    <p className="text-gray-600 text-sm">Diseño, procurement, construcción, comisionamiento</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Settings className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="font-bold text-gray-900">Mantención in-house costosa</div>
                    </div>
                    <p className="text-gray-600 text-sm">Personal propio, repuestos, paradas programadas afectan producción</p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="font-bold text-gray-900">Capacidad fija no escalable</div>
                    </div>
                    <p className="text-gray-600 text-sm">Equipos dimensionados para una capacidad fija, cambios requieren nuevo CAPEX</p>
                  </div>
                </div>
              </div>

              {/* Tecionic Model */}
              <div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Modelo Tecionic móvil</div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">$0</span>
                      </div>
                      <div className="font-bold text-emerald-900">Sin inversión inicial</div>
                    </div>
                    <p className="text-emerald-800 text-sm">OPEX predecible mensual. Capital libre para core business producción.</p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-bold text-emerald-900">1-2 semanas movilización</div>
                    </div>
                    <p className="text-emerald-800 text-sm">Equipos móviles llegan listos, conexión directa a proceso. Operación inmediata.</p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-bold text-emerald-900">Mantención incluida en servicio</div>
                    </div>
                    <p className="text-emerald-800 text-sm">Personal Tecionic opera + mantiene. Intercambio equipos si requiere mantención mayor.</p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-bold text-emerald-900">Escalabilidad modular inmediata</div>
                    </div>
                    <p className="text-emerald-800 text-sm">Aumenta o reduce capacidad según producción sin nuevo CAPEX ni equipos ociosos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Callout */}
            <div className="mt-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Infraestructura operacional sin compromiso CAPEX</h3>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Tecionic despliega, opera, y mantiene infraestructura filtración para tu proceso SX. Tú enfocas en producir potasio—nosotros aseguramos continuidad operacional.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Mantén producción potasio sin paradas por sólidos
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Si operas proceso SX para yoduro o potasio, Tecionic elimina paradas forzadas por acumulación sólidos y protege tus filtros corriente abajo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={(e) => handleContactClick(e, router, pathname)}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar evaluación operacional
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2 justify-center">
                    <Download className="w-5 h-5" />
                    Descargar caso de éxito
                  </div>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Plantas objetivo</div>
                  <div className="text-white font-medium">Producción yoduro/potasio</div>
                  <div className="text-gray-400 text-sm">Proceso SX etapas de extracción</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Contacto</div>
                  <div className="text-white font-medium">contacto@tecionic.cl</div>
                  <div className="text-gray-400 text-sm">Respuesta 24 horas</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Experiencia</div>
                  <div className="text-white font-medium">Plantas SX potasio</div>
                  <div className="text-gray-400 text-sm">Múltiples operaciones activas</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
