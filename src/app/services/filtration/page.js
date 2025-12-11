'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flash, Enterprise, Launch, Apps, Connect, Filter as FilterCarbon, Renew, Currency, ArrowDownRight, Chemistry, RainDrop, Humidity, DeliveryTruck, Pipelines, Power } from '@carbon/icons-react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import BorraSeparationAnimation from '@/components/BorraSeparationAnimation'

// Recovery Section - Atlassian KPI Style with Tabs
function RecoverySection() {
  const [activeTab, setActiveTab] = useState('copper')

  const industries = {
    copper: {
      name: 'Cobre',
      icon: 'Cu',
      color: 'orange',
      heroStat: '91%',
      heroLabel: 'del valor vuelve al ciclo',
      description: 'Separamos la borra en sus componentes: fase orgánica y fase acuosa. Ambas vuelven a sus respectivos circuitos. Nada se pierde.',
      kpis: [
        { value: '90%', label: 'recuperación de orgánico' },
        { value: '92%', label: 'fase acuosa retornada' }
      ]
    },
    petroleum: {
      name: 'Petróleo',
      icon: '⛽',
      color: 'amber',
      heroStat: '67%',
      heroLabel: 'de hidrocarburos recuperados',
      description: 'Los lodos de refinería contienen hidrocarburos valiosos atrapados. El líquido recuperado vuelve a proceso o se comercializa.',
      kpis: [
        { value: '67%', label: 'hidrocarburos recuperables' },
        { value: '100%', label: 'líquido reutilizable' }
      ]
    }
  }

  const active = industries[activeTab]
  const colorClasses = activeTab === 'copper'
    ? { text: 'text-orange-600', bg: 'bg-orange-500', border: 'border-orange-500', light: 'bg-orange-50' }
    : { text: 'text-amber-700', bg: 'bg-amber-600', border: 'border-amber-600', light: 'bg-amber-50' }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-100/80 via-emerald-50/50 to-gray-100 relative overflow-hidden">
      {/* Enterprise Background Elements - more visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[12%] w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-emerald-600/15 rounded-full opacity-60 animate-float-slow blur-md"></div>
        <div className="absolute bottom-20 left-[15%] w-48 h-48 bg-gradient-to-br from-emerald-400/25 to-emerald-500/20 rounded-full opacity-50 animate-float-medium blur-md"></div>
        <div className="absolute top-1/2 right-[25%] w-32 h-32 bg-gradient-to-br from-emerald-300/20 to-emerald-400/15 rounded-full opacity-40 animate-float-slow blur-sm"></div>

        {/* Strategic three ball constellation */}
        <div className="absolute top-16 left-[8%] opacity-40">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-3 h-3 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
        {/* Atlassian-style two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Hero stat with title - dynamic based on tab */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Recuperamos el valor atrapado en la borra
            </h2>
            <div className={`text-7xl lg:text-8xl font-bold mb-4 transition-all ${colorClasses.text}`}>
              {active.heroStat}
            </div>
            <p className="text-xl text-gray-600">
              {active.heroLabel}
            </p>
          </div>

          {/* Right: Tabbed KPIs */}
          <div>
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setActiveTab('copper')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === 'copper'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Cobre
              </button>
              <button
                onClick={() => setActiveTab('petroleum')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeTab === 'petroleum'
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Petróleo
              </button>
            </div>

            {/* KPI Cards */}
            <div className="space-y-6">
              {active.kpis.map((kpi, index) => (
                <div key={index} className={`border-l-4 ${colorClasses.border} pl-6 py-2`}>
                  <div className={`text-4xl lg:text-5xl font-bold ${colorClasses.text} mb-1`}>
                    {kpi.value}
                  </div>
                  <div className="text-gray-600">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-500 mt-8 leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Expandable Equipment Benefits Component
function EquipmentBenefits() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const benefits = [
    {
      title: 'Equipos ágiles y compactos',
      description: 'Unidades móviles de solo 35 m² que se instalan donde sea conveniente para tu operación. Llegan en camión, se posicionan cerca del punto de extracción, y operan sin infraestructura permanente. Flexibilidad total para adaptarse a tu layout.',
      icon: DeliveryTruck,
      image: '/filtro_prensa_1200_drone_view.png'
    },
    {
      title: 'Mangueras de largo alcance',
      description: 'Para plantas compactas con estanques en altura donde el espacio interno es limitado, nuestras mangueras de succión extra largas permiten instalar el equipo lejos del punto de extracción. Minimiza la invasión del espacio y se rutean por donde sea conveniente para tu operación.',
      icon: Pipelines,
      image: '/filtros_acoplados.png'
    },
    {
      title: 'Operación sin interferir tu planta',
      description: 'Sistema 100% autónomo que no utiliza equipamiento de planta cliente. Bombas, tuberías, controles y energía propios. Sin modificar permisos ni RCA. Instalación en 48 horas, operación inmediata. Tu proceso sigue corriendo mientras limpiamos.',
      icon: Power,
      image: '/filtro_prensa_1200_drone_view.png'
    }
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left: Expandable list */}
      <div>
        {benefits.map((benefit, index) => {
          const isExpanded = expandedIndex === index
          const Icon = benefit.icon

          return (
            <div key={index}>
              {/* Top border line */}
              <div className="border-t border-gray-200"></div>

              {/* Header - Icon + Title + Plus/Minus */}
              <button
                onClick={() => setExpandedIndex(index)}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isExpanded ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-emerald-50'
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors ${
                      isExpanded ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-600'
                    }`} />
                  </div>
                  <span className={`font-semibold text-lg transition-colors ${
                    isExpanded ? 'text-emerald-600' : 'text-gray-900 group-hover:text-emerald-600'
                  }`}>
                    {benefit.title}
                  </span>
                </div>
                <span className={`text-2xl font-light transition-colors ${
                  isExpanded ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-600'
                }`}>
                  {isExpanded ? '−' : '+'}
                </span>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        {/* Bottom border line */}
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Right: Image - changes based on selected item */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-xl overflow-hidden shadow-xl aspect-[16/10]">
          <Image
            src={benefits[expandedIndex].image}
            alt={benefits[expandedIndex].title}
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}


export default function FiltrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO - Matching organic-treatment style */}
      <section className="relative overflow-hidden bg-white">
        {/* Borra Separation Animation - The signature motif */}
        <BorraSeparationAnimation variant="hero" cycleDuration={10} className="opacity-60" />

        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Filtración móvil para <span className="text-gradient">máxima eficiencia de planta</span>
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Conecta filtros prensa a cualquier punto de tu proceso. Recupera hasta 90% del orgánico atrapado, reduce volumen de disposición hasta 85%, y mantén tu planta operando mientras limpiamos.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                Solicitar Evaluación
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <Image
                  src="/filtro_prensa_1200_drone_view.png"
                  alt="Sistema de Filtración Móvil - Vista aérea del filtro prensa 1200"
                  width={800}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY BENEFITS */}
      <section className="bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 blur-sm"></div>
          <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-[-0.02em]">
              Beneficios de eliminar la borra
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
            {/* 3-ball divider - left edge */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 1: Increase plant efficiency */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Flash className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aumenta la eficiencia de tu planta</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Etapas más limpias mejoran la separación y transferencia en todo el proceso.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 2: Recover trapped value */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Currency className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recupera valor atrapado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Extrae hidrocarburos o extractante orgánico que de otra forma se perdería atrapado en las borras.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 3: Recover storage capacity */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Enterprise className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recupera capacidad de almacenamiento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                La borra ocupa volumen valioso en tus estanques. Elimínala y aprovecha esa capacidad para crudo, fase acuosa u orgánica.
              </p>
            </div>

            {/* 3-ball divider */}
            <div className="hidden lg:flex flex-col items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
            </div>

            {/* Benefit 4: Reduce operational costs */}
            <div className="flex-1 lg:px-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ArrowDownRight className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce costos operacionales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menos volumen a disponer, menor consumo de reactivos, y menores costos de transporte y tratamiento de residuos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 1: OPTIMIZA CONSUMO DE INSUMOS */}
      <section className="border-b border-gray-800 bg-gray-900 relative overflow-hidden">
        {/* Columns of circles at top - transitioning from previous section */}
        <div className="absolute top-0 left-0 right-0 w-full flex justify-around z-0">
          {[...Array(96)].map((_, col) => (
            <div key={col} className="flex flex-col items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32 relative z-10">
          {/* Side by side: Header left, 4 items right */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Header content */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-6">
                EFICIENCIA OPERACIONAL
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Devolvemos tu circuito a eficiencia de diseño
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                La borra acumulada en settler/mixer degrada la separación de fases y aumenta el arrastre entre etapas.
                Nosotros removemos la causa raíz.
              </p>
            </div>

            {/* Right: 4 items stacked */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Flash className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Energía</h3>
                  <p className="text-gray-400 text-sm">
                    Extraemos borra, reduciendo viscosidad. Bombas y agitadores vuelven a su curva de diseño.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Chemistry className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Extractante</h3>
                  <p className="text-gray-400 text-sm">
                    Separamos el orgánico atrapado y lo devolvemos a tu circuito. Hasta 90% recuperado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Humidity className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Ácido</h3>
                  <p className="text-gray-400 text-sm">
                    Removemos sólidos finos que interfieren en stripping. Dosificación según diseño.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RainDrop className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Agua</h3>
                  <p className="text-gray-400 text-sm">
                    Limpiamos sin detener operación. Sin lavados de emergencia ni consumo extra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 2: PROTEGE TU EW */}
      <section className="border-b border-gray-200 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-semibold rounded-full mb-6">
              CALIDAD DE PRODUCTO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Electrolito puro, cátodos de primera
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Etapas limpias entregan electrolito cargado libre de orgánico hacia EW.
              Refino limpio retorna a lixiviación sin pérdida de extractante ni kerosene.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Protection for EW */}
            <div className="bg-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Electrolito cargado limpio</h3>
                <p className="text-sm text-emerald-300">Protección para tu electroobtención</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Cátodos de alta pureza</span>
                    <p className="text-gray-400 text-sm">Sin contaminación orgánica que afecte la calidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Celdas EW protegidas</span>
                    <p className="text-gray-400 text-sm">Vida útil extendida sin acumulación de residuos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Extractante contenido</span>
                    <p className="text-gray-400 text-sm">Sin pérdidas hacia la fase acuosa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Protection for Lixiviación */}
            <div className="bg-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Refino limpio</h3>
                <p className="text-sm text-emerald-300">Protección para tu lixiviación</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Orgánico concentrado</span>
                    <p className="text-gray-400 text-sm">Sin dilución por arrastre acuoso</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Pilas de lixiviación limpias</span>
                    <p className="text-gray-400 text-sm">Refino libre de orgánico</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Kerosene conservado</span>
                    <p className="text-gray-400 text-sm">Menor consumo de diluyente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result stats */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">E1</div>
              <div className="text-sm text-gray-400">Limpia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">E2</div>
              <div className="text-sm text-gray-400">Limpia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">S1</div>
              <div className="text-sm text-gray-400">Limpia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-1">S2</div>
              <div className="text-sm text-gray-400">Limpia</div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 3: TODO VUELVE AL CICLO - Atlassian KPI Style */}
      <RecoverySection />

      {/* THEME 4: MÍNIMO IMPACTO TÉRMICO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header + Benefits */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Extracción precisa, impacto térmico mínimo
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Pipeta larga identifica la cota exacta de contaminación. Solo extraemos lo necesario.
                Menor volumen procesado significa menor costo de recalentamiento.
              </p>

              {/* Three benefits - clean list */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Extracción selectiva por cota.</span>
                    <span className="text-gray-600"> Medimos dónde está la borra y atacamos específicamente esa zona.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Volumen mínimo procesado.</span>
                    <span className="text-gray-600"> Sin extraer todo el estanque. Solo la zona contaminada.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Retorno inmediato.</span>
                    <span className="text-gray-600"> Líquido separado vuelve a proceso con mínima pérdida de temperatura.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual comparison */}
            <div className="space-y-6">
              {/* Conventional method */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Método convencional</span>
                  <span className="text-red-500 font-bold">Alto costo</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gradient-to-r from-red-400 to-red-500 h-10 rounded-lg"></div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">100%</div>
                    <div className="text-sm text-gray-500">volumen extraído</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Vaciar todo el estanque, recalentar todo el volumen</p>
              </div>

              {/* Tecionic method */}
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-emerald-700 uppercase tracking-wide">Método Tecionic</span>
                  <span className="text-emerald-600 font-bold">Costo mínimo</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gradient-to-r from-emerald-400 to-emerald-500 h-10 rounded-lg" style={{width: '25%'}}></div>
                  <div className="flex-1"></div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">~15%</div>
                    <div className="text-sm text-gray-500">volumen extraído</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">Solo la zona contaminada, menor costo de recalentamiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEME 5: CADA METRO CÚBICO CUENTA */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6">
              CADA METRO CÚBICO CUENTA
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Menos a disponer, más para producir
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              La borra ocupa espacio y atrapa valor. Nuestro proceso la reduce a torta seca y devuelve el líquido a tu circuito.
            </p>
          </div>

          {/* Row 1: Disposal - Content left, Image right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                DISPOSICIÓN
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Menos residuo, menos costo</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                La borra entra como líquido y sale como torta seca. Menos peso, menos volumen,
                menos camiones. Transporte y disposición final simplificados.
              </p>

              {/* KPIs */}
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Reducción de volumen</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Sequedad de torta</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/filtro_prensa_1200_drone_view.png"
                alt="Torta seca lista para disposición"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2: Volume Recovery - Image left, Content right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/filtros_acoplados.png"
                alt="Recuperación de volumen productivo"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
                RECUPERACIÓN
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Capacidad productiva de vuelta</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                El espacio que ocupaba la borra queda libre para tu proceso. Y el líquido atrapado—orgánico,
                acuoso, hidrocarburos—retorna al circuito en vez de irse a disposición.
              </p>

              {/* KPIs */}
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-600">90%</div>
                  <div className="text-sm text-gray-600">Líquido recuperado</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">100%</div>
                  <div className="text-sm text-gray-600">Retorna al proceso</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Equipos diseñados para precisión operacional
            </h2>

            {/* Equipment Benefits - Expandable with images */}
            <EquipmentBenefits />
          </div>

          {/* Modular Configuration - Clean Minimal Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Configuración en Módulos Paralelos</h3>

            <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
              {/* Left - Large Image */}
              <div>
                <Image
                  src="/filtros_acoplados.png"
                  alt="Configuración Modular de Equipos"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>

              {/* Right - Text Content */}
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Los equipos pueden instalarse como módulos independientes en paralelo, permitiendo escalabilidad progresiva
                  y acelerando la estabilidad de planta. Esta configuración es económica con el espacio disponible y permite
                  instalación externa para minimizar la fricción operacional interna.
                </p>

                {/* Benefits - Icon Bullets */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Enterprise className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Escalabilidad ilimitada</div>
                      <div className="text-gray-600">Agrega todos los equipos que necesites según tu operación</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Launch className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Instalación externa</div>
                      <div className="text-gray-600">Sin modificar infraestructura de planta existente</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Apps className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Eficiencia espacial</div>
                      <div className="text-gray-600">Optimiza espacio disponible con configuración flexible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INDUSTRIES */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Probado en múltiples industrias
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tecnología móvil adaptada a las necesidades específicas de cada sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Copper */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/copper_ore.jpg"
                  alt="Mineral de cobre"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Cu</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Cobre</h3>
                </div>
                <p className="text-sm text-gray-600">Filtración borras SX con 98% sólidos capturados y 90% recuperación orgánico</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <a href="/industries/copper" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Zinc */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-slate-400 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/zinc_ore.jpg"
                  alt="Mineral de zinc"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Zn</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Zinc</h3>
                </div>
                <p className="text-sm text-gray-600">Filtración de sólidos abrasivos adaptado a densidades Zn y sensibilidad orgánica</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <a href="/industries/zinc" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Crude Oil */}
            <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-400 hover:shadow-lg transition-all">
              <div className="h-64 group-hover:h-52 relative transition-all duration-300">
                <Image
                  src="/crude_oil.png"
                  alt="Petróleo crudo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RainDrop className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Petróleo Crudo</h3>
                </div>
                <p className="text-sm text-gray-600">Limpieza de borras desde estanques con 80% reducción de volumen y 90% recuperación HC</p>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <a href="/industries/crude-oil" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-3">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY: ENAP */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              CASO DE ÉXITO
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-2xl">
              ENAP redujo volumen de lodos en 85% y recuperó hidrocarburos valiosos
            </h2>
          </div>

          {/* Main content - Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-5">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem] transition-all duration-300">
                <Image
                  src="/fotos_spence/Imagen7.jpg"
                  alt="Filtración de lodos industriales ENAP"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <RainDrop className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Refinería ENAP</div>
                      <div className="text-white/70 text-xs">Lodos industriales</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">-85%</div>
                    <div className="text-sm text-gray-600">Volumen de lodo</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">67%</div>
                    <div className="text-sm text-gray-600">HC recuperados</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-amber-600">100%</div>
                    <div className="text-sm text-gray-600">Cumplimiento ambiental</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  Tratamiento de lodos fenólicos, fondo de estanque T-2402 y separadores API. Reducción masiva del volumen a disponer con recuperación de hidrocarburos de alto valor que retornaron al proceso.
                </p>

                {/* CTA */}
                <Link href="/industries/crude-oil" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  Ver más sobre petróleo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matching organic-treatment style */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        {/* Clean interface line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Mining topographic contour lines - right corner */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="/mine_motif_right_corner.svg"
            alt=""
            className="absolute right-0 bottom-0 w-full h-full opacity-[0.08] object-cover object-right-bottom"
          />
        </div>
        <div className="max-w-4xl mx-auto px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Evalúa los resultados para tu planta
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            Diagnóstico técnico sin costo. Cuantificamos el orgánico recuperable, la reducción de volumen, y el impacto en eficiencia de tu circuito.
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            En 48 horas instalamos el equipo. Resultados visibles desde el primer día de operación.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl">
              Solicitar Evaluación Técnica
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/industries/copper" className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors">
              Ver Caso Cobre
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-emerald-500 pt-8">
            <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wide mb-4">Contacto directo</div>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div>
                <div className="font-semibold mb-1">Santiago:</div>
                <div className="text-emerald-100">Luis Thayer Ojeda 95, of. 312</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Calama:</div>
                <div className="text-emerald-100">Miraflores 1260 B</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}