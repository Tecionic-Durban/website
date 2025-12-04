'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Settings, ArrowDown, Filter, Renew } from '@carbon/icons-react'
import { CheckCircle, Truck, Shield, BarChart3, Clock, Zap, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star, ArrowRight, RotateCw } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import CurrentFlowAnimation from '@/components/CurrentFlowAnimation'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

// Rounded Rectangle Cycle Visualization
function CycleWorkflow({ steps }) {
  const [activeStep, setActiveStep] = useState(0) // Which line is drawing
  const [highlightedStep, setHighlightedStep] = useState(0) // Which card is highlighted
  const [showExit, setShowExit] = useState(false)
  const arrowRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })

    // Cycle through steps 0-3 once (4 transitions)
    for (let i = 0; i < 4; i++) {
      tl.call(() => setActiveStep(i))
        .to({}, { duration: 2.5 })
    }

    // Wait for step 5 display, then hide it
    tl.to({}, { duration: 3 })
    .call(() => {
      setShowExit(false)
      setActiveStep(-1)
    })

    return () => tl.kill()
  }, [])

  // Animate arrow drawing when active step changes
  useEffect(() => {
    if (arrowRef.current && activeStep >= 0 && activeStep <= 3) {
      const path = arrowRef.current.querySelector(`#arrow-path-${activeStep}`)
      if (path) {
        const length = path.getTotalLength()
        const tl = gsap.timeline()

        // First: Draw the line (head moves forward)
        tl.fromTo(path,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => {
              // Special case: step 3 (line from step 4→1) triggers step 5 instead
              if (activeStep === 3) {
                setShowExit(true)
                setHighlightedStep(-1)
              } else {
                // Highlight next card when line head reaches it
                const nextStep = activeStep + 1
                setHighlightedStep(nextStep)
              }
            }
          }
        )
        // Second: Compress the line (tail follows head into destination)
        .to(path, {
          strokeDashoffset: -length,
          duration: 0.8,
          ease: 'power2.in'
        })
      }
    }
  }, [activeStep])

  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Desktop & Tablet: Rounded Rectangle Cycle */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-16">
            {/* Cycle Container */}
            <div className="relative" style={{ width: '700px', height: '560px' }}>
              {/* SVG Lines Layer - Behind cards */}
              <svg ref={arrowRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Animated lines - only show active one */}
                {/* Top: Step 1 → Step 2 (centered vertically) */}
                {activeStep === 0 && (
                  <line
                    id="arrow-path-0"
                    x1="260" y1="100" x2="440" y2="100"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                )}

                {/* Right: Step 2 → Step 3 (centered horizontally) */}
                {activeStep === 1 && (
                  <line
                    id="arrow-path-1"
                    x1="570" y1="140" x2="570" y2="420"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                )}

                {/* Bottom: Step 3 → Step 4 (centered vertically) */}
                {activeStep === 2 && (
                  <line
                    id="arrow-path-2"
                    x1="440" y1="460" x2="260" y2="460"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                )}

                {/* Left: Step 4 → Step 1 (centered horizontally) */}
                {activeStep === 3 && (
                  <line
                    id="arrow-path-3"
                    x1="130" y1="420" x2="130" y2="140"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                )}
              </svg>

              {/* Step Cards Positioned at Corners */}
              {/* Step 1 - Top Left */}
              <div className="absolute top-0 left-0" style={{ width: '260px' }}>
                {[0].map(idx => {
                  const step = steps[idx]
                  const isActive = highlightedStep === idx
                  return (
                    <div key={idx} className={`relative rounded-2xl transition-all duration-700 ${isActive ? 'scale-105 z-10' : 'scale-100 z-0'}`}>
                      {isActive && (
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-amber-500/30 rounded-3xl blur-2xl" />
                      )}
                      <div className={`relative bg-white rounded-2xl p-5 shadow-lg border-2 transition-all duration-700 ${isActive ? 'border-amber-400 shadow-amber-200/50 shadow-2xl' : 'border-slate-200 shadow-slate-200/50'}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-700 shadow-lg ${isActive ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white scale-110' : 'bg-slate-100 text-slate-500'}`}>
                            {idx + 1}
                          </div>
                          <h3 className={`text-base font-bold transition-colors duration-700 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{step.title}</h3>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-slate-600 leading-relaxed mb-2">{step.description}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{step.additionalInfo}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Step 2 - Top Right */}
              <div className="absolute top-0 right-0" style={{ width: '260px' }}>
                {[1].map(idx => {
                  const step = steps[idx]
                  const isActive = highlightedStep === idx
                  return (
                    <div key={idx} className={`relative rounded-2xl transition-all duration-700 ${isActive ? 'scale-105 z-10' : 'scale-100 z-0'}`}>
                      {isActive && (
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-amber-500/30 rounded-3xl blur-2xl" />
                      )}
                      <div className={`relative bg-white rounded-2xl p-5 shadow-lg border-2 transition-all duration-700 ${isActive ? 'border-amber-400 shadow-amber-200/50 shadow-2xl' : 'border-slate-200 shadow-slate-200/50'}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-700 shadow-lg ${isActive ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white scale-110' : 'bg-slate-100 text-slate-500'}`}>
                            {idx + 1}
                          </div>
                          <h3 className={`text-base font-bold transition-colors duration-700 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{step.title}</h3>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-slate-600 leading-relaxed mb-2">{step.description}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{step.additionalInfo}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Step 3 - Bottom Right */}
              <div className="absolute bottom-0 right-0" style={{ width: '260px' }}>
                {[2].map(idx => {
                  const step = steps[idx]
                  const isActive = highlightedStep === idx
                  return (
                    <div key={idx} className={`relative rounded-2xl transition-all duration-700 ${isActive ? 'scale-105 z-10' : 'scale-100 z-0'}`}>
                      {isActive && (
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-amber-500/30 rounded-3xl blur-2xl" />
                      )}
                      <div className={`relative bg-white rounded-2xl p-5 shadow-lg border-2 transition-all duration-700 ${isActive ? 'border-amber-400 shadow-amber-200/50 shadow-2xl' : 'border-slate-200 shadow-slate-200/50'}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-700 shadow-lg ${isActive ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white scale-110' : 'bg-slate-100 text-slate-500'}`}>
                            {idx + 1}
                          </div>
                          <h3 className={`text-base font-bold transition-colors duration-700 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{step.title}</h3>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-slate-600 leading-relaxed mb-2">{step.description}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{step.additionalInfo}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Step 4 - Bottom Left */}
              <div className="absolute bottom-0 left-0" style={{ width: '260px' }}>
                {[3].map(idx => {
                  const step = steps[idx]
                  const isActive = highlightedStep === idx
                  return (
                    <div key={idx} className={`relative rounded-2xl transition-all duration-700 ${isActive ? 'scale-105 z-10' : 'scale-100 z-0'}`}>
                      {isActive && (
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-amber-500/30 rounded-3xl blur-2xl" />
                      )}
                      <div className={`relative bg-white rounded-2xl p-5 shadow-lg border-2 transition-all duration-700 ${isActive ? 'border-amber-400 shadow-amber-200/50 shadow-2xl' : 'border-slate-200 shadow-slate-200/50'}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-700 shadow-lg ${isActive ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white scale-110' : 'bg-slate-100 text-slate-500'}`}>
                            {idx + 1}
                          </div>
                          <h3 className={`text-base font-bold transition-colors duration-700 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{step.title}</h3>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs text-slate-600 leading-relaxed mb-2">{step.description}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{step.additionalInfo}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Exit Arrow to Step 5 */}
            <div className="flex flex-col items-center gap-4">
              <ArrowRight className={`w-10 h-10 transition-all duration-1000 ${showExit ? 'text-emerald-500 animate-pulse' : 'text-slate-300'}`} />
              {showExit && (
                <span className="text-xs font-medium text-emerald-600 animate-pulse">Salida</span>
              )}
            </div>

            {/* Step 5 - Exit */}
            <div className={`transition-all duration-1000 ${showExit ? 'scale-100 opacity-100' : 'scale-95 opacity-40'}`} style={{ width: '300px' }}>
              <div className="relative">
                {showExit && (
                  <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-emerald-500/30 rounded-3xl blur-2xl" />
                )}
                <div className={`relative bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-lg border-2 transition-all duration-1000 ${showExit ? 'border-emerald-300 shadow-emerald-200/50' : 'border-slate-200 shadow-slate-200/50'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl transition-all duration-1000 shadow-lg ${showExit ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white scale-110' : 'bg-slate-100 text-slate-400'}`}>
                      {showExit ? <CheckCircle className="w-8 h-8" /> : '5'}
                    </div>
                    <h3 className={`text-lg font-bold transition-colors duration-1000 ${showExit ? 'text-emerald-900' : 'text-slate-600'}`}>{steps[4].title}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed mb-3 transition-colors duration-1000 ${showExit ? 'text-emerald-800' : 'text-slate-500'}`}>{steps[4].description}</p>
                  <div className={`pt-3 border-t transition-colors duration-1000 ${showExit ? 'border-emerald-200' : 'border-slate-200'}`}>
                    <p className={`text-xs leading-relaxed transition-colors duration-1000 ${showExit ? 'text-emerald-600' : 'text-slate-400'}`}>{steps[4].additionalInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Cycle Flow */}
        <div className="md:hidden">
          {/* Cycle Steps 1-4 */}
          <div className="relative">
            {steps.slice(0, 4).map((step, idx) => {
              const isActive = highlightedStep === idx
              return (
                <div key={idx}>
                  {/* Step Card */}
                  <div className={`rounded-2xl p-5 shadow-lg border-2 transition-all duration-700 ${isActive ? 'bg-white border-amber-400 shadow-amber-200/50' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shrink-0 transition-all duration-700 ${isActive ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {idx + 1}
                      </div>
                      <h3 className={`text-base font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-2">{step.description}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.additionalInfo}</p>
                  </div>

                  {/* Arrow to next step */}
                  {idx < 3 && (
                    <div className="flex justify-center py-3">
                      <ArrowDown className={`w-6 h-6 transition-all duration-700 ${isActive ? 'text-amber-500' : 'text-slate-300'}`} />
                    </div>
                  )}

                  {/* Return arrow after Step 4 */}
                  {idx === 3 && (
                    <div className="flex items-center justify-center py-4 gap-2">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-700 ${isActive ? 'border-amber-400 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}>
                        <RotateCw className={`w-5 h-5 ${isActive ? 'text-amber-500' : 'text-slate-400'}`} />
                        <span className={`text-xs font-medium ${isActive ? 'text-amber-700' : 'text-slate-500'}`}>Ciclo se repite</span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Exit Arrow and Step 5 */}
          <div className="mt-6 pt-6 border-t-2 border-dashed border-slate-300">
            <div className="flex justify-center mb-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-1000 ${showExit ? 'bg-emerald-500' : 'bg-slate-300'}`}>
                <ArrowDown className="w-5 h-5 text-white" />
                <span className="text-xs font-medium text-white">Salida del ciclo</span>
              </div>
            </div>

            {/* Step 5 Card */}
            <div className={`rounded-2xl p-5 shadow-lg border-2 transition-all duration-1000 ${showExit ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-300' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shrink-0 transition-all duration-1000 ${showExit ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {showExit ? <CheckCircle className="w-6 h-6" /> : '5'}
                </div>
                <h3 className={`text-base font-bold ${showExit ? 'text-emerald-900' : 'text-slate-600'}`}>{steps[4].title}</h3>
              </div>
              <p className={`text-sm leading-relaxed mb-2 ${showExit ? 'text-emerald-800' : 'text-slate-600'}`}>{steps[4].description}</p>
              <p className={`text-xs leading-relaxed ${showExit ? 'text-emerald-600' : 'text-slate-500'}`}>{steps[4].additionalInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EWCleaningServicePage() {
  const router = null // Will be imported when needed
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const specsRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const caseStudiesRef = useRef(null)

  // Progressive disclosure on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressiveElements = entry.target.querySelectorAll('.progressive-reveal')
          progressiveElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('revealed')
            }, index * 150)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const refs = [heroRef, overviewRef, specsRef, processRef, benefitsRef, caseStudiesRef]
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const processSteps = [
    {
      step: '1',
      title: 'Retiro de Electrodo',
      description: 'Remoción controlada de un electrodo de la celda para habilitar acceso al fondo',
      additionalInfo: 'Retiro 1 electrodo • Acceso seguro',
      icon: Settings
    },
    {
      step: '2',
      title: 'Succión de Borras',
      description: 'Aspirado neumático de borras plomadas y orgánicas desde fondo de celda',
      additionalInfo: 'Tasa 6 m³/hora • Bombas neumáticas • Mangueras antiestáticas',
      icon: ArrowDown
    },
    {
      step: '3',
      title: 'Filtración Móvil',
      description: 'Separación sólido-líquido mediante filtros prensa móviles de alta capacidad',
      additionalInfo: 'Filtros prensa • Retorno <2-3 ppm sólidos • Borra deshidratada',
      icon: Filter
    },
    {
      step: '4',
      title: 'Retorno de Electrolito',
      description: 'Devolución de electrolito filtrado al rebose de celda sin variación de nivel',
      additionalInfo: 'Cero pérdida electrolito • 100-200 L fuera celda • Sin interrupciones',
      icon: Renew
    },
    {
      step: '5',
      title: 'Verificación y Entrega',
      description: 'Inspección final, reinstalación de electrodo y entrega de borra pesada',
      additionalInfo: 'Borra pesada • Registro fotográfico • Trazabilidad completa',
      icon: CheckCircle
    }
  ]

  const useCases = [
    {
      industry: 'Problema Resuelto',
      application: 'Eliminación de borras para prevenir contaminación catódica',
      challenge: 'Borras plomadas y orgánicas en fondo de celdas causan contaminación catódica, reduciendo la pureza y calidad del cobre producido.',
      solution: 'Nuestro sistema de succión neumática de 6 m³/h con filtración móvil devuelve el electrolito filtrado con menos de 2-3 ppm de sólidos, logrando',
      result: '100% reducción de depósitos metálicos en zonas críticas',
      client: 'Solución Tecionic',
      savings: 'sin pérdida de electrolito'
    },
    {
      industry: 'Ventaja Operacional',
      application: 'Sin interrupciones de producción durante limpieza',
      challenge: 'Métodos tradicionales requieren vaciado completo de celdas con pérdida masiva de electrolito y detención de producción.',
      solution: 'El sistema mantiene solo 100-200 litros de electrolito fuera de la celda con retorno inmediato filtrado y sin variación de nivel, manteniendo',
      result: 'continuidad operacional completa',
      client: 'Sistema Móvil',
      savings: '2-3 celdas/turno 12h'
    },
    {
      industry: 'Eficiencia del Sistema',
      application: 'Proceso automatizado, seguro y rápido',
      challenge: 'Limpieza manual tradicional requiere trabajo físico intenso en espacios confinados con exposición a químicos. Operadores deben desconectar celdas, extraerlas manualmente, y limpiarlas bajo riesgo ergonómico y químico. Proceso lento que toma días por celda.',
      solution: 'Equipos móviles de aspirado industrial con filtros prensa y bombas neumáticas certificadas alcanzan',
      result: '2-3 celdas por turno sin riesgo para operadores',
      client: 'Tecnología Probada',
      savings: 'con ROI inmediato'
    }
  ]

  const industrialApplications = [
    {
      element: "6 m³/h",
      industry: "Tasa de Succión",
      application: "Capacidad de aspirado neumático de borras desde fondo de celdas EW",
      specs: "Bombas neumáticas de alta capacidad con mangueras antiestáticas de 2-3 pulgadas",
      color: "#ea580c"
    },
    {
      element: "<2-3 ppm",
      industry: "Calidad Retorno",
      application: "Nivel de sólidos en suspensión del electrolito filtrado devuelto a la celda",
      specs: "Filtros prensa móviles garantizan retorno ultra limpio sin pérdida de electrolito",
      color: "#10b981"
    },
    {
      element: "2-3 celdas",
      industry: "Rendimiento",
      application: "Número de celdas completas desborrradas por turno de 12 horas",
      specs: "Productividad variable según cantidad de borra acumulada, mínimo contractual 1 celda/día",
      color: "#f59e0b"
    },
    {
      element: "100-200 L",
      industry: "Electrolito Fuera",
      application: "Volumen mínimo de electrolito que permanece fuera de celda durante operación",
      specs: "Sin variación de nivel gracias al retorno continuo filtrado durante el desborre",
      color: "#6366f1"
    },
    {
      element: "0%",
      industry: "Pérdida Electrolito",
      application: "Pérdida nula de electrolito durante todo el proceso de desborre y filtración",
      specs: "Sistema cerrado con retorno total filtrado y borra deshidratada para disposición",
      color: "#059669"
    }
  ]

  const caseStudies = [
    {
      title: "Desborre de Celdas EW - Minera en Región de Tarapacá",
      client: "Operación minera región de Tarapacá",
      challenge: "Acumulación de borras plomadas en fondo de celdas EW causaba contaminación catódica, reduciendo la pureza y calidad del cobre producido. Operación a >4.000 msnm exigía solución móvil de rápida implementación.",
      solution: "Servicio integral de desborre mediante succión neumática + filtración móvil + retorno de electrolito filtrado. Jornada 7x7 diurna. Rendimiento: 1 celda/día. Equipos móviles adaptados a altura con contenedores-bodega autónomos.",
      results: [
        "100% reducción borras plomadas en zonas críticas",
        "Cero incidentes de seguridad durante ejecución",
        "Reducción consumo energético por celda",
        "Calidad cátodos mantenida dentro de estándares LME",
        "Continuidad productiva sin detenciones mayores"
      ],
      metrics: {
        before: { deposits: "Alto", incidents: "Riesgo", quality: "Variable" },
        after: { deposits: "0%", incidents: "0", quality: "LME" }
      },
      industry: "Cobre",
      color: "#ea580c"
    }
  ]

  const benefits = [
    '100% reducción de depósitos metálicos en zonas críticas',
    'Cero pérdida de electrolito durante proceso',
    'Reducción consumo energético por celda',
    'Eliminación de borras para prevenir contaminación catódica',
    'Proceso automatizado sin pérdida de electrolito',
    'Continuidad operacional sin detenciones mayores',
    'Calidad cátodos mantenida dentro estándares LME',
    'Sistema móvil de rápida implementación',
    'Solo 100-200 L electrolito fuera de celda',
    'Retorno filtrado <2-3 ppm sólidos',
    'Borra deshidratada con bajo contenido humedad',
    'Trazabilidad completa con registro fotográfico'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION - Stripe-style narrative */}
      <section ref={heroRef} className="relative overflow-hidden bg-white">
        {/* Current Flow Animation Background - subtle, below text */}
        <CurrentFlowAnimation variant="hero" className="opacity-30" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Mejora la calidad de tus cátodos <span className="text-gradient">sin detener producción</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Limpieza de celdas EW con equipos móviles que operan celda por celda mientras tu nave sigue produciendo. Sistema de succión neumática y filtración in-situ que retorna el electrolito al circuito con menos de 3 ppm de sólidos.
              </p>

              <div className="flex items-center gap-4">
                <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                  Solicitar Evaluación
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="inline-flex items-center px-6 py-3 text-gray-600 font-medium hover:text-gray-900 transition-colors cursor-pointer">
                  Ver Caso Caserones
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <Image
                  src="/EW Photos/20251009_141008.jpg"
                  alt="Sistema de limpieza de celdas EW Tecionic en operación"
                  width={800}
                  height={400}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY BENEFITS - Stripe-style benefit cards */}
      <section ref={overviewRef} className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 blur-sm"></div>
          <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em]">
              Resultados que impactan tu operación
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {/* 3-ball divider - left edge */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 1: Zero electrolyte loss */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cero pérdida de electrolito</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sistema cerrado que retorna 100% del electrolito filtrado con menos de 3 ppm de sólidos.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Energy reduction */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Menor consumo energético</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Eliminación de depósitos que causan cortocircuitos reduce el gasto eléctrico por tonelada.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: LME quality */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Calidad LME asegurada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Eliminación total de borras que causan contaminación catódica.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Extended anode life */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mayor vida útil de ánodos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menos acumulación de borra reduce desgaste y extiende ciclos de reemplazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS - Stripe narrative style */}
      <section ref={specsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section header */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              Limpieza sin interrumpir tu operación
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nuestro sistema móvil opera celda por celda, manteniendo solo 100-200 litros fuera del circuito en cualquier momento. El resto de tu nave sigue produciendo.
            </p>
          </div>

          {/* Feature grid - alternating layout */}
          <div className="space-y-24">
            {/* Feature 1: Suction capacity - Image LEFT, Content RIGHT */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px]">
                <Image
                  src="/EW Photos/20251009_141022.jpg"
                  alt="Sistema de succión neumática para celdas EW"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-4xl font-black text-white">6 m³/h</div>
                  <div className="text-emerald-400 font-medium">Capacidad de succión</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Succión neumática de alta capacidad
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Bombas neumáticas con mangueras antiestáticas de 2-3 pulgadas extraen la borra del fondo de celda a 6 m³ por hora. Sin contacto eléctrico, sin riesgo de chispas.
                </p>
                <div className="flex items-center gap-3 text-emerald-600 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span>Mangueras antiestáticas certificadas</span>
                </div>
              </div>
            </div>

            {/* Feature 2: Filtration - Content LEFT, Image RIGHT */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Filtración móvil con retorno inmediato
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  El electrolito aspirado pasa por filtros prensa móviles que separan los sólidos y retornan el líquido limpio al circuito con menos de 3 ppm de sólidos. Cero pérdida.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-emerald-600 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Retorno con {"<"}3 ppm sólidos</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-600 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    <span>Borra deshidratada lista para disposición</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] order-1 lg:order-2">
                <Image
                  src="/EW Photos/20251009_141008.jpg"
                  alt="Filtros prensa móviles para electrolito"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-4xl font-black text-white">0%</div>
                  <div className="text-emerald-400 font-medium">Pérdida de electrolito</div>
                </div>
              </div>
            </div>

            {/* Feature 3: Productivity - Stats focus - Emerald theme */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Rendimiento comprobado en altura
                  </h3>
                  <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                    A más de 4.000 msnm, nuestro equipo completó el desborre de toda la nave con jornada 7x7, logrando mínimo 1 celda por día con cero incidentes.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white font-medium">
                      <CheckCircle className="w-5 h-5" />
                      <span>Operación comprobada sobre 4.000 msnm</span>
                    </div>
                    <div className="flex items-center gap-3 text-white font-medium">
                      <CheckCircle className="w-5 h-5" />
                      <span>Cero incidentes de seguridad</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-white mb-2">2-3</div>
                    <div className="text-emerald-100 text-sm">Celdas por turno de 12h</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-white mb-2">100%</div>
                    <div className="text-emerald-100 text-sm">Remoción de depósitos</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-white mb-2">LME</div>
                    <div className="text-emerald-100 text-sm">Calidad mantenida</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-white mb-2">18+</div>
                    <div className="text-emerald-100 text-sm">Años de experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.5: RISK REDUCTION & OPERATIONAL SIMPLICITY - Dark section like organic treatment */}
      <section className="border-b border-gray-800 bg-gray-900 relative overflow-hidden">
        {/* Columns of circles at top - transitioning from previous section (white) */}
        <div className="absolute top-0 left-0 right-0 w-full flex justify-around z-0">
          {[...Array(96)].map((_, col) => (
            <div key={col} className="flex flex-col items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-100"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
          {/* Risk Reduction Section */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Seguridad sin compromisos
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Eliminamos los riesgos inherentes a la limpieza tradicional de celdas EW.
            </p>
          </div>

          {/* Risk reduction cards - 2 columns like organic treatment */}
          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* Card 1: No confined space */}
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/20">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sin ingreso a espacios confinados</h3>
                    <p className="text-sm text-gray-400">Operación 100% externa</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Nuestro sistema de succión neumática opera desde fuera de la celda. Los operadores nunca necesitan ingresar a espacios confinados para realizar la limpieza.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Elimina riesgos de asfixia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Sin necesidad de permisos especiales de trabajo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Cumple &quot;Reglas que Salvan Vidas&quot;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: No acid exposure */}
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/20">
                    <FlaskConical className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sin exposición a ácidos</h3>
                    <p className="text-sm text-gray-400">Sistema cerrado de aspiración</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  El electrolito ácido nunca queda expuesto al ambiente. El sistema cerrado de succión y filtración elimina el contacto directo con soluciones corrosivas.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Cero riesgo de quemaduras químicas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Cumplimiento DS-43 MINSAL</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Protocolo SG-SSSC certificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simplicidad Operacional - stats */}
          <div className="pt-16 border-t border-gray-700">
            <div className="max-w-3xl mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Simplicidad Operacional
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Implementación rápida sin complejidad. Equipos móviles que llegan operativos a tu faena.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* 24/7 Tecionic specialists */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">24/7</div>
                <div className="text-lg font-semibold text-white mb-2">Especialistas Tecionic</div>
                <p className="text-gray-400 leading-relaxed">
                  Personal certificado opera y mantiene los equipos en tu faena
                </p>
              </div>

              {/* Fast deployment */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">48h</div>
                <div className="text-lg font-semibold text-white mb-2">Despliegue rápido</div>
                <p className="text-gray-400 leading-relaxed">
                  Flota regional lista para movilizar sin esperar fabricación
                </p>
              </div>

              {/* Zero CAPEX */}
              <div className="text-center lg:text-left">
                <div className="text-6xl lg:text-7xl font-bold text-emerald-400 mb-3">$0</div>
                <div className="text-lg font-semibold text-white mb-2">Inversión en capital</div>
                <p className="text-gray-400 leading-relaxed">
                  Servicio mensual todo incluido. Opex, no Capex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS STEPS - Clean expandable list */}
      <section ref={processRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Header and description */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
                Proceso paso a paso
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Cada celda se limpia de forma individual mientras el resto de la nave sigue operando. El proceso completo toma aproximadamente 4-6 horas por celda.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Seguridad certificada</h4>
                    <p className="text-gray-600 text-sm">
                      Todo el proceso cumple con protocolos SG-SSSC, DS-43 MINSAL y &quot;Reglas que Salvan Vidas&quot;. Cero incidentes en Caserones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Process steps accordion */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {processSteps.map((step, index) => (
                <div key={index} className={index !== processSteps.length - 1 ? 'border-b border-gray-100' : ''}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        <p className="text-emerald-600 text-xs mt-2 font-medium">{step.additionalInfo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CASE STUDY - Caserones highlight */}
      <section ref={caseStudiesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-emerald-600 font-semibold mb-4">CASO DE ÉXITO</div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em] mb-6">
              Caserones: Desborre a 4.000+ metros de altura
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              SCM Minera Lumina Copper Chile nos contrató para el desborre completo de su nave de electroobtención en una de las operaciones más desafiantes del país.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Challenge card */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">El desafío</h3>
              <p className="text-gray-600 leading-relaxed">
                Acumulación de borras plomadas causando contaminación catódica a más de 4.000 msnm. Se requería una solución móvil que pudiera operar en altura sin interrumpir la producción.
              </p>
            </div>

            {/* Solution card */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nuestra solución</h3>
              <p className="text-gray-600 leading-relaxed">
                Servicio integral con jornada 7x7 diurna. Equipos móviles adaptados a altura con contenedores-bodega autónomos. Rendimiento mínimo garantizado de 1 celda por día.
              </p>
            </div>

            {/* Results card */}
            <div className="bg-emerald-600 rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resultados</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>100% remoción de depósitos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Cero incidentes de seguridad</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Calidad LME mantenida</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Reducción consumo energético</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA - Clean and focused */}
      <section ref={benefitsRef} className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-[-0.02em] mb-6">
            Mejora la calidad de tus cátodos
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Agenda una evaluación con nuestro equipo técnico. Te mostraremos cómo podemos limpiar tus celdas sin detener tu producción.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
              Solicitar Evaluación
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
              <Phone className="mr-2 w-5 h-5" />
              Hablar con Ventas
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            18+ años de experiencia • Operaciones en Radomiro Tomic, Chuquicamata, El Abra, Caserones y más
          </p>
        </div>
      </section>
    </div>
  )
}
