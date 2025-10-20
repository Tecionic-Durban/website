'use client'

// src/app/industries/potassium/page.js
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Beaker, Droplets, Factory, Filter, CheckCircle, TrendingUp, ArrowRight, Download, Zap, Shield, Settings, AlertTriangle, Target, FlaskConical } from 'lucide-react'
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

        {/* Hero Section - Split layout consistent with other industries */}
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

              {/* Left - Content */}
              <div className="max-w-xl">
                <div className="inline-block px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-6">
                  <span className="text-sm font-semibold text-purple-900">Industria del Potasio</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                  Clarificación de salmueras para cristalización limpia
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Desplegamos infraestructura móvil de clarificación que procesa <strong className="text-gray-900">salmueras reales de tu yacimiento</strong>, generando data operativa para dimensionar equipos permanentes con certeza—no con supuestos.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">30-40%</div>
                    <div className="text-sm text-gray-600">Reducción riesgo CAPEX</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">2-4</div>
                    <div className="text-sm text-gray-600">Semanas validación</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">$0</div>
                    <div className="text-sm text-gray-600">CAPEX pruebas</div>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('validation').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Ver cómo funciona
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right - Equipment photo placeholder */}
              <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <FlaskConical className="w-16 h-16 text-purple-400 mx-auto mb-3" />
                  <div className="text-purple-600 font-semibold">Centrífuga Decanter Tecionic</div>
                  <div className="text-purple-500 text-sm">Validación salmueras potasio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Validation Problem - Why you can't design blind */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-red-100 rounded-full mb-6">
                <AlertTriangle className="w-4 h-4 text-red-700 mr-2" />
                <span className="text-red-700 font-semibold text-sm">EL PROBLEMA DE DISEÑAR DESDE SUPUESTOS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                La mineralogía de potasio varía radicalmente entre yacimientos
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                No puedes predecir el comportamiento de arcillas desde literatura técnica. Saskatchewan ≠ Atacama ≠ Amazonas.
              </p>
            </div>

            {/* Problem illustrations */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
                <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Arcillas impredecibles</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Partículas &lt;10 micrones comportamiento depende de composición mineralógica local. Eficiencia desliming puede variar <strong>50-95%</strong> según tipo arcilla.
                </p>
                <div className="bg-red-100 border border-red-200 rounded-lg p-3 text-sm text-red-800">
                  <strong>Resultado:</strong> Centrífuga mal dimensionada = cuello de botella o CAPEX desperdiciado
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <Beaker className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Consumo floculante desconocido</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dosis óptima de floculante varía <strong>3-15 ppm</strong> según química salmuera. Imposible estimar desde análisis batch.
                </p>
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 text-sm text-orange-800">
                  <strong>Resultado:</strong> OPEX floculante mal presupuestado hasta +200%
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 border-2 border-yellow-200 rounded-2xl p-8">
                <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Factory className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Throughput real vs teórico</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  G-force y tiempo residencia óptimos solo descubiertos procesando volumen continuo. Literatura da <strong>rangos demasiado amplios</strong>.
                </p>
                <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                  <strong>Resultado:</strong> Capacidad instalada incorrecta = bottleneck producción
                </div>
              </div>
            </div>

            {/* Cost of getting it wrong */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">El costo de equivocarse</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black text-red-400 mb-3">Sobredimensionar</div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">→</span>
                        <span>$2M-$5M+ CAPEX desperdiciado en capacidad ociosa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">→</span>
                        <span>Footprint civil más grande de lo necesario</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">→</span>
                        <span>OPEX mantención equipos sub-utilizados</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-orange-400 mb-3">Subdimensionar</div>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">→</span>
                        <span>Cuello de botella limita producción total planta</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">→</span>
                        <span>Pérdidas $50K-$200K/día por throughput insuficiente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">→</span>
                        <span>CAPEX adicional retrofit = diseño desde cero otra vez</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Tecionic De-risks - 3 step process */}
        <section id="validation" className="py-24 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 rounded-full mb-6">
                <Target className="w-4 h-4 text-purple-700 mr-2" />
                <span className="text-purple-700 font-semibold text-sm">CÓMO TECIONIC ELIMINA EL RIESGO</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Tecionic valida con data real antes de tu inversión permanente
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Infraestructura móvil que procesa salmueras de tu yacimiento, entregando parámetros operativos validados para diseño definitivo.
              </p>
            </div>

            {/* 3 Step Process - Visual Flow */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-emerald-400 -translate-y-1/2" style={{top: '120px'}}></div>

              <div className="grid lg:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 relative">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecionic despliega móvil</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Centrífugas decanter, filtros, sistemas clarificación transportados a sitio. <strong className="text-gray-900">Montaje en 2-4 semanas</strong> sin obra civil.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Equipos skid-mounted listos
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Conexión directa a flujo salmuera
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Ingeniero residente on-site
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-300 relative">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecionic procesa continuo</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Operación 24/7 procesando <strong className="text-gray-900">salmueras reales de tu mineralogía</strong>. KPIs diarios validando performance.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Eficiencia desliming real
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Consumo floculante validado
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        Throughput y G-force óptimos
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-300 relative">
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecionic entrega data</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Reporte técnico con <strong className="text-gray-900">parámetros validados</strong> para dimensionar equipos permanentes con certeza.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Capacidad real ton/h
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        OPEX floculante proyectado
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Spec equipos definitivos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome callout */}
            <div className="mt-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-4">El resultado</h3>
                <p className="text-xl text-purple-100 mb-8">
                  Dimensionas tu CAPEX permanente basado en <strong className="text-white">performance comprobado</strong> con tu propia mineralogía—no con rangos teóricos de handbook.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-4xl font-black mb-2">30-40%</div>
                    <div className="text-purple-200 text-sm">Reducción riesgo dimensionamiento</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">100%</div>
                    <div className="text-purple-200 text-sm">Data operativa validada</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">$0</div>
                    <div className="text-purple-200 text-sm">CAPEX pruebas piloto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Tecionic Validates - Specific parameters */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                PARÁMETROS VALIDADOS
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Qué valida exactamente Tecionic para tu proyecto
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Parameter cards */}
              <div className="group bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Eficiencia desliming</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Remoción real partículas &lt;10μm con TU mineralogía específica
                </p>
                <div className="text-purple-600 font-bold text-sm">Target: &gt;95% removal</div>
              </div>

              <div className="group bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Beaker className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Consumo floculante</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Dosis óptima ppm para química salmuera real, no batch lab
                </p>
                <div className="text-blue-600 font-bold text-sm">Rango típico: 3-15 ppm</div>
              </div>

              <div className="group bg-gradient-to-br from-white to-emerald-50 border border-emerald-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Throughput real</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Capacidad ton/h procesamiento continuo, no cálculo teórico
                </p>
                <div className="text-emerald-600 font-bold text-sm">Validación 24/7 operación</div>
              </div>

              <div className="group bg-gradient-to-br from-white to-orange-50 border border-orange-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">G-force óptima</h3>
                <p className="text-gray-600 text-sm mb-3">
                  RPM centrífuga para máxima eficiencia con TU tipo arcilla
                </p>
                <div className="text-orange-600 font-bold text-sm">Variable según mineralogía</div>
              </div>

              <div className="group bg-gradient-to-br from-white to-teal-50 border border-teal-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Turbidez salida</h3>
                <p className="text-gray-600 text-sm mb-3">
                  NTU real post-clarificación para protección downstream
                </p>
                <div className="text-teal-600 font-bold text-sm">Target: &lt;10 NTU</div>
              </div>

              <div className="group bg-gradient-to-br from-white to-purple-50 border border-purple-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">TSS descarga</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sólidos totales suspendidos para compliance ambiental
                </p>
                <div className="text-purple-600 font-bold text-sm">Target: &lt;50 mg/L</div>
              </div>
            </div>
          </div>
        </section>

        {/* SQM Case - Started validation, now continuous */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-emerald-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Cliente validado
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                SQM validó con Tecionic, ahora usa continuamente
              </h2>
              <p className="text-xl text-gray-600">
                Comenzaron validando parámetros para Salar de Atacama. Performance comprobado llevó a servicio continuo para operación multi-mineral.
              </p>
            </div>

            {/* Case details */}
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-12 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Validación inicial</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Tecionic desplegó móvil</div>
                        <div className="text-gray-600 text-sm">Validación comportamiento arcillas Salar Atacama</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Procesamiento continuo 4 semanas</div>
                        <div className="text-gray-600 text-sm">Data real eficiencia desliming y consumo reactivos</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Performance validado</div>
                        <div className="text-gray-600 text-sm">85% remoción finos, TSS &lt;45 mg/L descarga</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Servicio continuo actual</h3>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 mb-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-black text-emerald-700 mb-1">24/7</div>
                        <div className="text-sm text-emerald-900">Operación continua</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-emerald-700 mb-1">100%</div>
                        <div className="text-sm text-emerald-900">Compliance NPDES</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-emerald-700 mb-1">85%</div>
                        <div className="text-sm text-emerald-900">Remoción sólidos finos</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-emerald-700 mb-1">$0</div>
                        <div className="text-sm text-emerald-900">CAPEX equipos backup</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-600 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6" />
                      <div className="font-bold text-lg">De validación a operación</div>
                    </div>
                    <p className="text-emerald-100 text-sm">
                      Tecionic demostró performance con data real. SQM continuó servicio eliminando necesidad CAPEX equipos backup permanentes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary benefits - Scale when ready */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Tecionic escala contigo post-validación
              </h2>
              <p className="text-xl text-gray-600">
                Una vez validados parámetros, Tecionic puede continuar operando durante ramp-up, expansiones o como backup permanente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Durante construcción permanente</h3>
                <p className="text-gray-600 mb-6">
                  Mientras tu infraestructura definitiva se construye (12-18 meses), <strong className="text-gray-900">Tecionic mantiene producción</strong>. No pierdes ventanas operativas esperando CAPEX.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span>Continuidad producción 100%</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span>Flujo cash desde día 1</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span>Sin riesgo construcción delays</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expansiones futuras</h3>
                <p className="text-gray-600 mb-6">
                  Cuando escales capacidad, <strong className="text-gray-900">Tecionic agrega módulos móviles</strong> en semanas mientras diseñas expansión permanente con data validada otra vez.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Escalabilidad modular 5-100+ t/h</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Validación nueva capacidad</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Sin detener operación actual</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - For projects planning infrastructure */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Valida antes de comprometer CAPEX permanente
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Si estás diseñando infraestructura de clarificación para potasio, Tecionic te entrega data operativa real de tu mineralogía—no supuestos de literatura.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={(e) => handleContactClick(e, router, pathname)}
                  className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Validar tu proyecto
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-2 justify-center">
                    <Download className="w-5 h-5" />
                    Reporte técnico SQM
                  </div>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Proyectos objetivo</div>
                  <div className="text-white font-medium">Nuevos desarrollos KCl</div>
                  <div className="text-gray-400 text-sm">Startup, expansiones, brownfield</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Contacto</div>
                  <div className="text-white font-medium">contacto@tecionic.cl</div>
                  <div className="text-gray-400 text-sm">Respuesta 24 horas</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">Cliente validado</div>
                  <div className="text-white font-medium">SQM</div>
                  <div className="text-gray-400 text-sm">Salar de Atacama</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
