'use client'

import { useState, useEffect, useRef } from 'react'
import { Filter, CheckCircle, ArrowRight, Truck, Shield, Settings, BarChart3, Clock, Zap, Activity, TrendingUp, Award, Target, Users, Globe, Play, Droplets, Waves, FlaskConical, Factory, RefreshCw, Cog, MapPin, Calendar, ExternalLink, FileText, Phone, Building, Star } from 'lucide-react'

export default function EWCleaningServicePage() {
  const router = null // Will be imported when needed
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
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

    const refs = [heroRef, overviewRef, processRef, benefitsRef, caseStudiesRef]
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
      title: 'Diagnóstico Integral',
      description: 'Evaluación estado celdas: eficiencia corriente, calidad cátodos, voltajes',
      additionalInfo: 'Medición parámetros eléctricos • Análisis impurezas • Inspección visual',
      icon: FlaskConical
    },
    {
      step: '2',
      title: 'Stripping Especializado',
      description: 'Remoción selectiva depósitos según tipo metal y contaminación',
      additionalInfo: 'Stripping ácido controlado • Recuperación metal • Protección substrato',
      icon: Target
    },
    {
      step: '3',
      title: 'Limpieza Avanzada',
      description: 'Tratamiento electroquímico y químico para reactivación superficies',
      additionalInfo: 'Limpieza electrolítica • Pasivación controlada • Preparación contactos',
      icon: Zap
    },
    {
      step: '4',
      title: 'Optimización Performance',
      description: 'Reajuste parámetros operacionales para máxima eficiencia',
      additionalInfo: 'Calibración densidad corriente • Control voltaje • Monitoreo continuo',
      icon: TrendingUp
    }
  ]

  const useCases = [
    {
      industry: 'Cobre SX-EW',
      application: 'Recuperación celdas contaminadas orgánico',
      challenge: 'Acumulación orgánico arrastrado causaba cortocircuitos masivos, eficiencia corriente caída 78%',
      solution: 'Stripping completo + limpieza ácida especializada + reoptimización parámetros',
      result: 'Eficiencia corriente recuperada 94%, cátodos 99.99% Cu',
      client: 'Codelco Radomiro Tomic',
      savings: 'ROI 4 meses'
    },
    {
      industry: 'Zinc EW',
      application: 'Calidad SHG premium para laminación',
      challenge: 'Deposición rugosa Zn por trazas Co/Ni imposibilitaba laminación directa',
      solution: 'Limpieza ultra-pura electrodos Al + control estricto &lt;0.001% impurezas',
      result: 'Pureza zinc 99.995% SHG, superficie lisa',
      client: 'Korea Zinc Smelter',
      savings: 'Premium +$200/t'
    },
    {
      industry: 'Níquel EW',
      application: 'Reactivación celdas degradadas alta corriente',
      challenge: 'Pasivación crítica ánodos Ni causaba voltaje excesivo +40% consumo energético',
      solution: 'Reactivación electroquímica ánodos DSA + optimización densidad corriente',
      result: 'Reducción consumo energético 30%, cátodos grado LME',
      client: 'Pacific Metals Ni Refinery',
      savings: 'Ahorro $2.8M/año'
    }
  ]

  const industrialApplications = [
    {
      element: "Cu",
      industry: "Electroobtención Cobre",
      application: "Optimización celdas EW contaminadas",
      performance: "95% Eficiencia corriente",
      specs: "Incremento 25% productividad | Cátodos 99.99% Cu",
      color: "#ea580c",
      status: "Operativo"
    },
    {
      element: "Zn",
      industry: "Electroobtención Zinc",
      application: "Purificación ultra-alta cátodos",
      performance: "99.995% Pureza Zn",
      specs: "Calidad SHG LME | Superficie lisa laminación",
      color: "#64748b",
      status: "Especializado"
    },
    {
      element: "Ni",
      industry: "Electroobtención Níquel",
      application: "Recuperación celdas degradadas",
      performance: "30% Reducción OPEX",
      specs: "Reactivación ánodos | Cátodos grado LME",
      color: "#10b981",
      status: "Recuperación"
    },
    {
      element: "Co",
      industry: "Electroobtención Cobalto",
      application: "Control impurezas trazas",
      performance: "99.8% Pureza Co",
      specs: "Eliminación Ni/Fe | Cátodos premium",
      color: "#6366f1",
      status: "Premium"
    },
    {
      element: "Au",
      industry: "Electroafinación Oro",
      application: "Limpieza cátodos Au contaminados",
      performance: "99.99% Pureza Au",
      specs: "Eliminación Ag/Cu | Estándar LBMA",
      color: "#f59e0b",
      status: "Afinación"
    },
    {
      element: "Ag",
      industry: "Electroafinación Plata",
      application: "Recuperación plata electrolítica",
      performance: "99.9% Pureza Ag",
      specs: "Stripping selectivo | Calidad comercial",
      color: "#94a3b8",
      status: "Precioso"
    }
  ]

  const caseStudies = [
    {
      title: "Recuperación Total Celdas EW Cobre",
      client: "Codelco Radomiro Tomic",
      challenge: "Acumulación orgánico arrastrado causaba cortocircuitos masivos, eficiencia corriente caída 78% y rechazo 15% cátodos por contaminación.",
      solution: "Stripping completo 120 celdas + limpieza ácida especializada electrodos + pasivación superficies + reoptimización parámetros.",
      results: [
        "Eficiencia corriente: 94%",
        "Cátodos 99.99% Cu sin rechazos",
        "Incremento producción: 18%",
        "ROI: 4 meses"
      ],
      metrics: {
        before: { efficiency: "78%", purity: "99.8%", rejection: "15%" },
        after: { efficiency: "94%", purity: "99.99%", rejection: "&lt;1%" }
      },
      industry: "Cobre",
      color: "#ea580c"
    },
    {
      title: "Optimización Premium Zinc SHG",
      client: "Korea Zinc Smelter",
      challenge: "Deposición rugosa Zn por trazas Co/Ni imposibilitaba laminación directa, pérdida premium $200/t por calidad inferior.",
      solution: "Limpieza ultra-pura electrodos Al + control estricto &lt;0.001% impurezas + optimización densidad corriente para superficie lisa.",
      results: [
        "Pureza zinc: 99.995% SHG",
        "Superficie lisa laminación",
        "Premium calidad: +$200/t",
        "Certificación LME mantenida"
      ],
      metrics: {
        before: { purity: "99.9%", surface: "rugosa", premium: "$0/t" },
        after: { purity: "99.995%", surface: "lisa", premium: "+$200/t" }
      },
      industry: "Zinc",
      color: "#64748b"
    },
    {
      title: "Reactivación Celdas Níquel Degradadas",
      client: "Pacific Metals Ni Refinery",
      challenge: "Pasivación crítica ánodos Ni causaba voltaje excesivo +40% consumo energético, amenazando viabilidad operación.",
      solution: "Reactivación electroquímica ánodos DSA + optimización densidad corriente + control automático parámetros.",
      results: [
        "Reducción consumo energético: 30%",
        "Cátodos grado LME recuperados",
        "Ahorro energía: $2.8M/año",
        "Extensión vida útil ánodos: 50%"
      ],
      metrics: {
        before: { voltage: "3.8V", efficiency: "65%", cost: "$4.2M/año" },
        after: { voltage: "2.6V", efficiency: "91%", cost: "$1.4M/año" }
      },
      industry: "Níquel",
      color: "#10b981"
    }
  ]

  const benefits = [
    'Incremento eficiencia corriente 15-25%',
    'Cátodos &gt;99.5% pureza sin rechazos',
    'Reducción 30% consumo energético',
    'Extensión 50% vida útil electrodos',
    'Eliminación cortocircuitos y dendritas',
    'ROI &lt;6 meses en operaciones continuas',
    'Cumplimiento estándares LME/LBMA'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enterprise-Grade EW Cleaning Hero */}
      <section ref={heroRef} className="relative bg-white overflow-hidden">
        {/* TSF Signature Industrial EW Theme */}
        <div className="absolute inset-0 overflow-hidden">
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
                <span className="text-amber-600 font-medium">Limpieza & Optimización EW</span>
              </nav>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span>Disponible 24/7</span>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
                  Solicitar Cotización
                </button>
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
                  Limpieza y Optimización
                  <span className="block text-amber-600">
                    Celdas EW
                  </span>
                </h1>
                <div className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide">
                  Para Electroobtención • Móvil • Alta Eficiencia
                </div>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                Sistemas especializados de limpieza electroquímica con incremento hasta
                <span className="font-bold text-slate-900"> 25% eficiencia corriente</span>.
                <span className="text-amber-600 font-medium"> Reactivación completa</span> en 24-48 horas
                sin interrumpir producción.
              </p>

              {/* Enterprise CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 overflow-hidden hover:shadow-xl hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-blue-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Evaluación Técnica</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 bg-white/50 hover:bg-white/80 backdrop-blur-sm">
                  <span>Descargar Especificaciones</span>
                  <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
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
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <Zap className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Sistema EW-Clean Pro</h3>
                  <p className="text-slate-600 mb-4">Tecnología de reactivación electroquímica para máxima eficiencia corriente</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-600">Operativo</span>
                    </div>
                    <div className="text-slate-400">•</div>
                    <div className="text-amber-600 font-semibold">5000A Capacidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section ref={overviewRef} className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 progressive-reveal">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-slate-900">{useCase.industry}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-amber-600 mb-2">{useCase.application}</h4>
                  <p className="text-slate-600 text-sm mb-4">{useCase.challenge}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Solución TSF</span>
                    <p className="text-slate-700 font-medium">{useCase.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Resultado</span>
                    <p className="text-slate-900 font-bold">{useCase.result}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{useCase.client}</span>
                      <span className="text-sm font-semibold text-green-600">{useCase.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Matrix */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Aplicaciones por Metal
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Servicios especializados optimización electroobtención para cada metal con estándares internacionales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {industrialApplications.map((app, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-500/10 transition-all duration-500 hover:-translate-y-2 progressive-reveal"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: app.color }}
                    >
                      {app.element}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{app.industry}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium text-slate-500">{app.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-slate-500">Aplicación</span>
                    <p className="text-slate-900 font-medium">{app.application}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-500">Performance</span>
                    <p className="text-lg font-bold" style={{ color: app.color }}>{app.performance}</p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-slate-500">Especificaciones Técnicas</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{app.specs}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 group-hover:bg-slate-900 group-hover:text-white">
                    Ver Especificaciones
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="text-center mb-16 progressive-reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Proceso de Optimización EW
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Metodología especializada para máxima eficiencia corriente y calidad cátodos
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-96 flex flex-col progressive-reveal">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 text-amber-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{step.description}</p>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                  </div>
                  <p className="text-sm text-slate-500">{step.additionalInfo}</p>
                </div>
              </div>
            ))}
          </div>
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
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: study.color }}
                      >
                        {study.industry === 'Cobre' ? 'Cu' : study.industry === 'Zinc' ? 'Zn' : 'Ni'}
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
                Beneficios Clave
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Ventajas competitivas de nuestros servicios de optimización electroobtención
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
              <h3 className="text-2xl font-bold text-white mb-6">Contacto Especializado</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Metal</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
                    <option>Cobre - EW Cu</option>
                    <option>Zinc - EW Zn SHG</option>
                    <option>Níquel - EW Ni</option>
                    <option>Metales Preciosos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Capacidad Celdas</label>
                  <input
                    type="text"
                    placeholder="ej: 5000A"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400"
                  />
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                  Solicitar Evaluación Técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}