'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Filter, CheckCircle, Truck, Shield, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Vertical Timeline Component with GSAP Animations
function VerticalTimeline({ steps }) {
  const timelineRef = useRef(null)
  const stepRefs = useRef([])
  const lineRefs = useRef([])

  useEffect(() => {
    // Animate each step as it comes into view
    stepRefs.current.forEach((step, idx) => {
      if (!step) return

      // Animate the number circle
      const circle = step.querySelector('.timeline-circle')
      const card = step.querySelector('.timeline-card')
      const line = lineRefs.current[idx]

      gsap.fromTo(circle,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Animate the card sliding in from right
      gsap.fromTo(card,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      // Animate the timeline line drawing down
      if (line) {
        gsap.fromTo(line,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      {steps.map((step, idx) => {
        const Icon = step.icon
        return (
          <div
            key={idx}
            ref={el => stepRefs.current[idx] = el}
            className="relative flex gap-8 pb-12 last:pb-0 group"
          >
            {/* Timeline line and number */}
            <div className="flex flex-col items-center shrink-0">
              {/* Step number circle */}
              <div className="timeline-circle w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-black text-2xl shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>

              {/* Vertical line (not on last item) */}
              {idx < steps.length - 1 && (
                <div
                  ref={el => lineRefs.current[idx] = el}
                  className="w-0.5 h-full bg-gradient-to-b from-amber-200 to-slate-200 mt-2"
                ></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="timeline-card bg-white rounded-2xl p-8 shadow-md border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300">
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Additional info */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    {step.additionalInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
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
      additionalInfo: 'Bloqueo y desenergización • Retiro 1 electrodo • Acceso seguro',
      icon: Cog
    },
    {
      step: '2',
      title: 'Succión de Borras',
      description: 'Aspirado neumático de borras metálicas y orgánicas desde fondo de celda',
      additionalInfo: 'Tasa 6 m³/hora • Bombas neumáticas • Mangueras antiestáticas',
      icon: Activity
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
      icon: RefreshCw
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
      application: 'Prevención de contaminación catódica por acumulación de borras',
      challenge: 'Borras metálicas y orgánicas en fondo de celdas causan contaminación catódica, reduciendo la pureza y calidad del cobre producido.',
      solution: 'Nuestro sistema de succión neumática de 6 m³/h con filtración móvil devuelve el electrolito filtrado con menos de 2-3 ppm de sólidos, logrando',
      result: '100% reducción de depósitos metálicos en zonas críticas',
      client: 'Solución TSF',
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
      application: 'Alta tasa de remoción de borras vs operación manual',
      challenge: 'Limpieza manual de celdas es lenta, peligrosa y deja residuos metálicos que reinician problemas.',
      solution: 'Equipos móviles de aspirado industrial con filtros prensa y bombas neumáticas certificadas alcanzan',
      result: '95% de eficiencia en remoción versus limpieza manual',
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
      element: "95%",
      industry: "Eficiencia Remoción",
      application: "Tasa de remoción efectiva de borras comparado con limpieza manual tradicional",
      specs: "Logra 100% de reducción de depósitos metálicos con trazabilidad completa del proceso",
      color: "#64748b"
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
      title: "Desborre de Celdas EW - Minera Caserones",
      client: "SCM Minera Lumina Copper Chile - Caserones",
      challenge: "Acumulación de borras metálicas y orgánicas en fondo de celdas EW causaba contaminación catódica, reduciendo la pureza y calidad del cobre producido. Operación a >4.000 msnm exigía solución móvil de rápida implementación.",
      solution: "Servicio integral de desborre mediante succión neumática + filtración móvil + retorno de electrolito filtrado. Jornada 7x7 diurna. Rendimiento: 1 celda/día. Equipos móviles adaptados a altura con contenedores-bodega autónomos.",
      results: [
        "100% reducción depósitos metálicos en zonas críticas",
        "Cero incidentes de seguridad durante ejecución",
        "Conductividad eléctrica restaurada en todas las celdas",
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
    },
    {
      title: "Servicio Continuo Planta SX - CODELCO DGM",
      client: "División Gabriela Mistral - CODELCO",
      challenge: "Mantener calidad de orgánico y eficiencia de planta SX durante casi 8 años de operación continua. Requerimiento de control constante de borras, diálisis de orgánico y tratamiento programado.",
      solution: "Administración eficiente y constante de retiro de borras desde etapas SX + diálisis continua del orgánico + campañas programadas de tratamiento con tierra activada. Mayor flota de filtros prensa móviles del mercado.",
      results: [
        "Tensión interfacial 29.5 dinas/cm (PLS planta)",
        "Tiempos separación: 70s orgánica, 92s acuosa vs 120s máx",
        "Recuperación global SX >96% promedio mensual",
        "Tasa reposición orgánico: 2.6% mes",
        "8 años operación continua sin interrupciones"
      ],
      metrics: {
        before: { tsf: "Variable", recovery: "<96%", replacement: "Alto" },
        after: { tsf: "70-92s", recovery: ">96%", replacement: "2.6%" }
      },
      industry: "SX Plant",
      color: "#10b981"
    },
    {
      title: "Deshidratación de Lodos Petroleros - Refinería ENAP",
      client: "ENAP Refinería Concón",
      challenge: "4.5+ millones kg/año de lodos petroleros con 70-92% humedad generan altos costos de disposición y logística. Tres corrientes críticas (planta fenólica, fenoles y T-2402) requieren solución de reducción volumétrica sin inversión en infraestructura permanente.",
      solution: "Validación técnica de laboratorio con tecnología de filtración móvil. Pruebas con filtros equivalentes a sistemas industriales demostraron viabilidad de deshidratación mediante filtro prensa/centrífuga. Se identificaron 5 áreas de aplicación en procesos Delayed Coker, FCC, tratamiento efluentes y separadores API.",
      results: [
        "84.23% reducción volumen lodos planta fenólica (92.59% → 53% humedad)",
        "77.31% reducción volumen lodos planta fenoles (90.02% → 56% humedad)",
        "32.96% reducción volumen lodos T-2402 (70.37% → 55.8% humedad)",
        "Validación técnica sin inversión del cliente",
        "5 oportunidades adicionales identificadas en refinería",
        "Potencial recuperación de agua para reutilización"
      ],
      metrics: {
        before: { volume: "4.5M kg/año", humidity: "70-92%", disposal: "Alto costo" },
        after: { volume: "↓35-85%", humidity: "53-56%", disposal: "Optimizado" }
      },
      industry: "Petróleo Crudo",
      color: "#1e293b"
    }
  ]

  const benefits = [
    '100% reducción de depósitos metálicos en zonas críticas',
    'Cero pérdida de electrolito durante proceso',
    'Reducción consumo energético por celda',
    'Prevención de contaminación catódica por borras',
    '95% eficiencia de remoción vs operación manual',
    'Continuidad operacional sin detenciones mayores',
    'Calidad cátodos mantenida dentro estándares LME',
    'Sistema móvil de rápida implementación',
    'Solo 100-200 L electrolito fuera de celda',
    'Retorno filtrado <2-3 ppm sólidos',
    'Borra deshidratada con bajo contenido humedad',
    'Trazabilidad completa con registro fotográfico'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enterprise-Grade EW Cleaning Hero */}
      <section ref={heroRef} className="relative bg-white overflow-hidden">
        {/* TSF Signature Industrial EW Theme */}
        <div className="absolute inset-0 overflow-hidden" style={{
          maskImage: `linear-gradient(to left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 65%,
            rgba(0,0,0,0.15) 85%,
            rgba(0,0,0,0.05) 100%
          )`,
          WebkitMaskImage: `linear-gradient(to left,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.9) 20%,
            rgba(0,0,0,0.7) 40%,
            rgba(0,0,0,0.4) 65%,
            rgba(0,0,0,0.15) 85%,
            rgba(0,0,0,0.05) 100%
          )`
        }}>
          {/* Base gradient foundation */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-gray-50/50"></div>

          {/* EXPANDED CIRCUIT BOARD PATTERN */}
          <div className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1400' height='800' viewBox='0 0 1400 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='boardGradient' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230a3d2e;stop-opacity:0.1' /%3E%3Cstop offset='50%25' style='stop-color:%230f4d3a;stop-opacity:0.05' /%3E%3Cstop offset='100%25' style='stop-color:%231a5c47;stop-opacity:0.1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1400' height='800' fill='url(%23boardGradient)'/%3E%3Cg stroke='%23f59e0b' stroke-width='2' fill='none' opacity='0.6'%3E%3C!-- Main horizontal traces --%3E%3Cline x1='0' y1='120' x2='300' y2='120'/%3E%3Cline x1='350' y1='120' x2='750' y2='120'/%3E%3Cline x1='800' y1='120' x2='1400' y2='120'/%3E%3Cline x1='0' y1='280' x2='250' y2='280'/%3E%3Cline x1='300' y1='280' x2='650' y2='280'/%3E%3Cline x1='700' y1='280' x2='1400' y2='280'/%3E%3Cline x1='0' y1='440' x2='400' y2='440'/%3E%3Cline x1='450' y1='440' x2='850' y2='440'/%3E%3Cline x1='900' y1='440' x2='1400' y2='440'/%3E%3Cline x1='0' y1='600' x2='350' y2='600'/%3E%3Cline x1='400' y1='600' x2='800' y2='600'/%3E%3Cline x1='850' y1='600' x2='1400' y2='600'/%3E%3C!-- Vertical connections --%3E%3Cline x1='200' y1='120' x2='200' y2='280'/%3E%3Cline x1='500' y1='80' x2='500' y2='200'/%3E%3Cline x1='800' y1='160' x2='800' y2='320'/%3E%3Cline x1='1100' y1='120' x2='1100' y2='240'/%3E%3Cline x1='350' y1='280' x2='350' y2='440'/%3E%3Cline x1='650' y1='240' x2='650' y2='400'/%3E%3Cline x1='950' y1='320' x2='950' y2='480'/%3E%3Cline x1='300' y1='440' x2='300' y2='600'/%3E%3Cline x1='600' y1='480' x2='600' y2='640'/%3E%3C!-- Angled traces --%3E%3Cline x1='300' y1='120' x2='350' y2='160'/%3E%3Cline x1='350' y1='160' x2='400' y2='160'/%3E%3Cline x1='750' y1='120' x2='800' y2='160'/%3E%3Cline x1='800' y1='160' x2='850' y2='200'/%3E%3Cline x1='250' y1='280' x2='300' y2='320'/%3E%3Cline x1='300' y1='320' x2='350' y2='320'/%3E%3Cline x1='650' y1='280' x2='700' y2='320'/%3E%3Cline x1='700' y1='320' x2='750' y2='360'/%3E%3Cline x1='400' y1='440' x2='450' y2='480'/%3E%3Cline x1='450' y1='480' x2='500' y2='480'/%3E%3Cline x1='850' y1='440' x2='900' y2='480'/%3E%3Cline x1='900' y1='480' x2='950' y2='520'/%3E%3C!-- Complex routing --%3E%3Cpath d='M 600 120 L 650 140 L 680 140 L 700 160'/%3E%3Cpath d='M 250 280 L 280 260 L 300 260 L 320 240'/%3E%3Cpath d='M 550 440 L 580 420 L 600 420 L 620 400'/%3E%3Cpath d='M 1000 280 L 1030 300 L 1060 300 L 1100 320'/%3E%3Cpath d='M 150 600 L 180 580 L 200 580 L 220 560'/%3E%3C/g%3E%3C!-- Resistors --%3E%3Cg fill='none' stroke='%23f59e0b' stroke-width='1' opacity='0.5'%3E%3Crect x='195' y='115' width='10' height='10' fill='%23654321'/%3E%3Crect x='495' y='155' width='10' height='10' fill='%23654321'/%3E%3Crect x='795' y='195' width='10' height='10' fill='%23654321'/%3E%3Crect x='345' y='315' width='10' height='10' fill='%23654321'/%3E%3Crect x='645' y='395' width='10' height='10' fill='%23654321'/%3E%3Crect x='945' y='515' width='10' height='10' fill='%23654321'/%3E%3C/g%3E%3C!-- Capacitors --%3E%3Cg fill='%23f59e0b' opacity='0.4'%3E%3Crect x='345' y='155' width='6' height='12'/%3E%3Crect x='745' y='315' width='6' height='12'/%3E%3Crect x='445' y='475' width='6' height='12'/%3E%3Ccircle cx='248' cy='280' r='4'/%3E%3Ccircle cx='598' cy='440' r='4'/%3E%3Ccircle cx='848' cy='600' r='4'/%3E%3C/g%3E%3C!-- ICs (Integrated Circuits) --%3E%3Cg fill='%23333333' stroke='%23666666' stroke-width='1' opacity='0.6'%3E%3Crect x='290' y='110' width='20' height='20' rx='2'/%3E%3Crect x='740' y='110' width='20' height='20' rx='2'/%3E%3Crect x='540' y='270' width='20' height='20' rx='2'/%3E%3Crect x='340' y='430' width='20' height='20' rx='2'/%3E%3Crect x='840' y='430' width='20' height='20' rx='2'/%3E%3Crect x='640' y='590' width='20' height='20' rx='2'/%3E%3C/g%3E%3C!-- Connection pads/vias --%3E%3Cg fill='%23f59e0b' opacity='0.7'%3E%3Ccircle cx='200' cy='120' r='3'/%3E%3Ccircle cx='200' cy='280' r='3'/%3E%3Ccircle cx='500' cy='160' r='3'/%3E%3Ccircle cx='800' cy='200' r='3'/%3E%3Ccircle cx='800' cy='320' r='3'/%3E%3Ccircle cx='1100' cy='120' r='3'/%3E%3Ccircle cx='1100' cy='240' r='3'/%3E%3Ccircle cx='350' cy='280' r='3'/%3E%3Ccircle cx='350' cy='440' r='3'/%3E%3Ccircle cx='650' cy='240' r='3'/%3E%3Ccircle cx='650' cy='400' r='3'/%3E%3Ccircle cx='950' cy='320' r='3'/%3E%3Ccircle cx='950' cy='480' r='3'/%3E%3Ccircle cx='300' cy='440' r='3'/%3E%3Ccircle cx='300' cy='600' r='3'/%3E%3Ccircle cx='600' cy='480' r='3'/%3E%3Ccircle cx='600' cy='640' r='3'/%3E%3C/g%3E%3C!-- Additional smaller traces for detail --%3E%3Cg stroke='%23f59e0b' stroke-width='1' fill='none' opacity='0.4'%3E%3Cline x1='100' y1='120' x2='100' y2='80'/%3E%3Cline x1='100' y1='80' x2='150' y2='80'/%3E%3Cline x1='400' y1='120' x2='400' y2='80'/%3E%3Cline x1='400' y1='80' x2='450' y2='80'/%3E%3Cline x1='900' y1='120' x2='900' y2='80'/%3E%3Cline x1='900' y1='80' x2='950' y2='80'/%3E%3Cline x1='150' y1='280' x2='150' y2='240'/%3E%3Cline x1='150' y1='240' x2='200' y2='240'/%3E%3Cline x1='750' y1='280' x2='750' y2='240'/%3E%3Cline x1='750' y1='240' x2='800' y2='240'/%3E%3Cline x1='450' y1='440' x2='450' y2='400'/%3E%3Cline x1='450' y1='400' x2='500' y2='400'/%3E%3Cline x1='1050' y1='440' x2='1050' y2='400'/%3E%3Cline x1='1050' y1='400' x2='1100' y2='400'/%3E%3Cline x1='250' y1='600' x2='250' y2='560'/%3E%3Cline x1='250' y1='560' x2='300' y2='560'/%3E%3Cline x1='950' y1='600' x2='950' y2='560'/%3E%3Cline x1='950' y1='560' x2='1000' y2='560'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}></div>

          {/* ELECTRICAL CIRCUIT TRACES - Representing Current Pathways */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.08]">
            {/* Main circuit traces - horizontal */}
            <div className="absolute top-1/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-amber-500/30 via-transparent via-amber-500/30 to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-amber-400/25 via-transparent via-amber-400/25 to-transparent"></div>
            <div className="absolute top-5/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/35 to-transparent"></div>

            {/* Main circuit traces - vertical */}
            <div className="absolute left-1/6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-500/40 to-transparent"></div>
            <div className="absolute left-1/3 top-0 w-px h-full bg-gradient-to-b from-amber-500/30 via-transparent via-amber-500/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-600/50 to-transparent"></div>
            <div className="absolute left-2/3 top-0 w-px h-full bg-gradient-to-b from-amber-400/25 via-transparent via-amber-400/25 to-transparent"></div>
            <div className="absolute left-5/6 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-amber-500/35 to-transparent"></div>

            {/* Circuit junctions and connection points */}
            <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-amber-500/40 rounded-full"></div>
            <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-amber-600/50 rounded-full"></div>
            <div className="absolute top-1/6 left-5/6 w-2 h-2 bg-amber-500/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-amber-600/50 rounded-full"></div>
            <div className="absolute top-1/2 left-5/6 w-2 h-2 bg-amber-600/50 rounded-full"></div>
            <div className="absolute top-5/6 left-1/6 w-2 h-2 bg-amber-500/40 rounded-full"></div>
            <div className="absolute top-5/6 left-1/2 w-2 h-2 bg-amber-600/50 rounded-full"></div>
            <div className="absolute top-5/6 left-5/6 w-2 h-2 bg-amber-500/40 rounded-full"></div>
          </div>

          {/* ELECTRONIC COMPONENTS - Circuit elements */}
          <div className="absolute inset-0 opacity-[0.07]">
            {/* Resistors (input processing) */}
            <div className="absolute top-1/5 left-[15%] w-6 h-2 bg-amber-600/30 rounded-sm animate-pulse"></div>
            <div className="absolute top-2/5 left-[12%] w-5 h-1.5 bg-amber-500/25 rounded-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-3/5 left-[18%] w-7 h-2.5 bg-amber-700/20 rounded-sm animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Capacitors (charge storage) */}
            <div className="absolute top-1/4 left-1/2 w-2 h-4 bg-amber-500/40 rounded-sm animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-3/4 left-1/2 w-2.5 h-5 bg-amber-600/35 rounded-sm animate-ping" style={{animationDelay: '0.8s'}}></div>

            {/* Transistors (output control) */}
            <div className="absolute top-1/6 right-[15%] w-3 h-3 bg-amber-400/50 transform rotate-45 animate-ping" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-[12%] w-2 h-2 bg-amber-500/45 transform rotate-45 animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-5/6 right-[18%] w-3 h-3 bg-amber-600/40 transform rotate-45 animate-ping" style={{animationDelay: '2.5s'}}></div>

            {/* IC chips (processing units) */}
            <div className="absolute top-1/3 left-[25%] w-4 h-4 bg-amber-600/25 rounded-sm border border-amber-500/30 animate-pulse" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute top-2/3 right-[25%] w-5 h-3 bg-amber-500/30 rounded-sm border border-amber-400/35 animate-pulse" style={{animationDelay: '1.8s'}}></div>
          </div>

          {/* CIRCUIT NODES AND JUNCTIONS */}
          <div className="absolute inset-0 opacity-[0.06]">
            {/* Main circuit nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 border-2 border-amber-500/50 rounded-full flex items-center justify-center bg-white/20">
              <div className="w-1 h-1 bg-amber-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 border-2 border-amber-400/50 rounded-full flex items-center justify-center bg-white/20">
              <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 border-2 border-amber-600/50 rounded-full flex items-center justify-center bg-white/20">
              <div className="w-1 h-1 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            <div className="absolute top-1/2 right-1/3 w-3 h-3 border-2 border-amber-500/50 rounded-full flex items-center justify-center bg-white/20">
              <div className="w-1 h-1 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Circuit traces between nodes */}
            <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-amber-500/30 to-transparent transform rotate-12 origin-left"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-0.5 bg-gradient-to-r from-amber-600/25 to-transparent transform -rotate-6 origin-left"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-0.5 bg-gradient-to-l from-amber-500/35 to-transparent transform rotate-45 origin-right"></div>
          </div>

          {/* TSF CIRCUIT SIGNATURE - Electronic pattern */}
          <div className="absolute bottom-1/6 right-1/6 opacity-[0.08]">
            <div className="relative w-24 h-24">
              {/* Central processing unit */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-600/30 rounded-sm border border-amber-500/40 animate-pulse"></div>

              {/* Circuit terminals */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-sm animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-2 h-2 bg-amber-600 rounded-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-sm animate-pulse" style={{animationDelay: '2s'}}></div>

              {/* Circuit traces */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-amber-500/40"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-amber-500/40 rotate-90"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-amber-500/30 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-amber-500/30 -rotate-45"></div>
            </div>
          </div>

        </div>

        {/* Large Circuit Icon - Premium Treatment */}
        <div className="absolute -top-32 -right-40 w-96 h-96 pointer-events-none">
          <div className="relative w-full h-full">
            <Zap className="w-full h-full text-amber-500/8 transform rotate-12" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* TSF Circuit Elements */}
        <div className="absolute top-40 left-20 opacity-30">
          {/* Electronic components signature */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-2 bg-amber-500 rounded-sm animate-pulse"></div>
            <div className="w-2 h-3 bg-amber-400 rounded-sm animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-amber-600 transform rotate-45 animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Circuit Connection Traces */}
        <div className="absolute bottom-60 right-32 opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
            <div className="w-6 h-0.5 bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
            <div className="w-6 h-0.5 bg-amber-500"></div>
            <div className="w-2 h-2 bg-amber-500 rounded-sm"></div>
          </div>
        </div>


        {/* Enterprise Navigation Bar */}
        <div className="relative z-20 border-b border-slate-200/60 backdrop-blur-xl bg-white/80">
          <div className="max-w-8xl mx-auto px-8 py-3">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-1 text-sm">
                <span className="text-slate-500 hover:text-slate-700 transition-colors cursor-pointer">Servicios</span>
                <span className="text-slate-300 mx-2">/</span>
                <span className="text-amber-600 font-medium">Desborre de Celdas EW</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span>Sistema Móvil 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Hero Content */}
        <div className="relative z-10 max-w-8xl mx-auto px-8 pt-12 pb-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Premium Content */}
            <div className="lg:col-span-7">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight text-slate-900 leading-[0.9] mb-4">
                  Desborre de
                  <span className="block text-amber-600">
                    Celdas EW
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  Succión • Filtración Móvil • Cero Pérdida Electrolito
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Sistema especializado de remoción de borras metálicas y orgánicas mediante
                <span className="font-bold text-slate-900"> succión y filtración móvil</span>.
                <span className="text-amber-600 font-medium"> Reducción 100% depósitos metálicos</span> sin pérdida de electrolito.
              </p>

            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              {/* Enhanced Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-600/15 to-amber-700/8 rounded-full opacity-40 animate-float-slow blur-sm"></div>
                <div className="absolute bottom-8 -left-4 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-amber-600/12 rounded-full opacity-35 animate-float-medium blur-sm"></div>
                <div className="absolute top-1/3 right-4 w-20 h-20 bg-gradient-to-br from-amber-400/18 to-amber-500/10 rounded-full opacity-30 animate-float-slow blur-md"></div>

                <div className="absolute bottom-1/4 right-8 opacity-25">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full enterprise-pulse"></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full enterprise-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full enterprise-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>

              {/* Hero Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 h-[320px] group">
                <Image
                  src="/EW Photos/20251009_141008.jpg"
                  alt="Instalación de celdas de electroobtención de cobre"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 text-sm text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-medium">Operativo 24/7</span>
                    </div>
                    <div className="text-white/60">•</div>
                    <div className="text-amber-400 font-semibold">6 m³/hora capacidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Advantages Overview - Stripe Pattern */}
      <section ref={overviewRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">¿Por qué Desborre Móvil TSF?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Ventajas clave del sistema versus métodos tradicionales de limpieza</p>
          </div>

          {/* Advantage 1: Content LEFT, Stat RIGHT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="progressive-reveal">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{useCases[0].industry}</h3>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{useCases[0].application}</h4>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  {useCases[0].challenge}
                </p>
                <p className="text-slate-900 leading-relaxed font-medium">
                  {useCases[0].solution} <span className="text-green-600 font-bold">{useCases[0].result}</span>, {useCases[0].savings.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="progressive-reveal">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-8xl font-black text-green-600 mb-4">100%</div>
                  <p className="text-lg font-semibold text-slate-700">Reducción depósitos metálicos</p>
                  <p className="text-sm text-slate-500 mt-2">{useCases[0].savings}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advantage 2: Photo LEFT, Content RIGHT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-slate-50 -mx-8 px-8 py-16 rounded-3xl">
            <div className="progressive-reveal order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200/50 group h-[380px]">
                <Image
                  src="/EW Photos/20251009_141022.jpg"
                  alt="Depósitos metálicos y orgánicos en cátodos de cobre - antes del desborre móvil TSF"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="progressive-reveal order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{useCases[1].industry}</h3>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{useCases[1].application}</h4>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  {useCases[1].challenge}
                </p>
                <p className="text-slate-900 leading-relaxed font-medium mb-4">
                  {useCases[1].solution} <span className="text-blue-600 font-bold">{useCases[1].result}</span>.
                </p>
                <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700">{useCases[1].savings}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advantage 3: Content LEFT, Stat RIGHT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="progressive-reveal">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{useCases[2].industry}</h3>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{useCases[2].application}</h4>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  {useCases[2].challenge}
                </p>
                <p className="text-slate-900 leading-relaxed font-medium">
                  {useCases[2].solution} <span className="text-purple-600 font-bold">{useCases[2].result}</span>, {useCases[2].savings.toLowerCase()}.
                </p>
              </div>
            </div>

            <div className="progressive-reveal">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-8xl font-black text-purple-600 mb-4">95%</div>
                  <p className="text-lg font-semibold text-slate-700">Eficiencia vs manual</p>
                  <p className="text-sm text-slate-500 mt-2">{useCases[2].savings}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Horizontal Carousel */}
      <section ref={specsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Especificaciones Técnicas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Parámetros operacionales del sistema de desborre móvil
            </p>
          </div>

          {/* Horizontal scrolling carousel */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {industrialApplications.map((app, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 snap-start progressive-reveal"
                >
                  <div
                    className="rounded-xl p-6 h-full hover:shadow-lg transition-all duration-200 border border-slate-200/50"
                    style={{
                      background: `linear-gradient(135deg, ${app.color}08 0%, ${app.color}03 100%)`
                    }}
                  >
                    {/* Header with color accent */}
                    <div className="mb-6">
                      <div className="mb-3">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: app.color }}
                        >
                          {app.element}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{app.industry}</h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-slate-700 leading-relaxed">
                        {app.application}
                      </p>
                      <div className="pt-3 border-t border-slate-200/50">
                        <p className="text-sm text-slate-600 leading-relaxed">{app.specs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {industrialApplications.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-slate-300"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hide scrollbar CSS */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Process Steps - Animated Bento Grid */}
      <section ref={processRef} className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Metodología de Desborre
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proceso sistemático de 5 pasos para remoción completa de borras con cero pérdida de electrolito
            </p>
          </div>

          <VerticalTimeline steps={processSteps} />
        </div>
      </section>

      {/* Case Studies */}
      <section ref={caseStudiesRef} className="py-20 bg-slate-50">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transformaciones exitosas electroobtención con incrementos cuantificables eficiencia y calidad
            </p>
          </div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 progressive-reveal"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Case Study Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: study.color }}
                      >
                        {study.industry === 'Cobre' ? 'Cu' : study.industry === 'SX Plant' ? 'SX' : study.industry === 'Zinc' ? 'Zn' : 'EW'}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-500">{study.industry}</span>
                        <h3 className="text-2xl font-black text-slate-900">{study.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 font-medium">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="lg:col-span-1 space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Desafío
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        Solución TSF
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-1">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Resultados
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* Before/After Metrics */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <span className="text-xs text-slate-500 block">Antes</span>
                          <div className="text-lg font-bold text-red-600">{Object.values(study.metrics.before)[0]}</div>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 block">Después</span>
                          <div className="text-lg font-bold text-green-600">{Object.values(study.metrics.after)[0]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Contact */}
      <section ref={benefitsRef} className="py-20 bg-slate-900">
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="progressive-reveal">
              <h2 className="text-4xl font-black text-white mb-6">
                Beneficios del Servicio
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Ventajas operacionales del sistema de desborre móvil con filtración industrial
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 progressive-reveal">
              <h3 className="text-2xl font-bold text-white mb-6">Solicitar Servicio de Desborre</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Servicio</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
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
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400"
                  />
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}