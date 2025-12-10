'use client'

import { useState } from 'react'

export default function EspecificacionesTecnicasPage() {
  const [activeEquipment, setActiveEquipment] = useState(0)

  const equipment = [
    {
      id: "FP-430",
      name: "F430-1",
      fullName: "Filtro Prensa Compacto",
      description: "Sistema móvil de filtración para deshidratación de borras SX y concentrados.",
      highlight: "250L",
      highlightLabel: "por batch",
      primarySpecs: [
        { label: "Capacidad", value: "250", unit: "L" },
        { label: "Placas", value: "430 × 430", unit: "mm" },
        { label: "Área filtración", value: "14", unit: "m²" },
        { label: "Cámaras", value: "10", unit: "un" },
      ],
      secondarySpecs: [
        { label: "Espesor torta", value: "30 mm" },
        { label: "Presión feed", value: "0-15 bar" },
        { label: "Presión aire", value: "0-10 bar" },
        { label: "Hidráulica", value: "Power Team P-51" },
      ]
    },
    {
      id: "FP-1500",
      name: "XZG400/1500-U",
      fullName: "Filtro Prensa Automático",
      description: "Filtro prensa de membrana con control PLC Siemens para operaciones de gran escala.",
      highlight: "220m²",
      highlightLabel: "área filtración",
      primarySpecs: [
        { label: "Capacidad", value: "7,618", unit: "L" },
        { label: "Placas", value: "1500 × 1500", unit: "mm" },
        { label: "Área filtración", value: "220", unit: "m²" },
        { label: "Cantidad placas", value: "99+2", unit: "un" },
      ],
      secondarySpecs: [
        { label: "Presión feed", value: "8 bar" },
        { label: "Presión squeeze", value: "16 bar" },
        { label: "Motor", value: "18.5 kW" },
        { label: "Control", value: "PLC Siemens" },
      ]
    },
    {
      id: "DC-PDC",
      name: "Serie PDC",
      fullName: "Centrífuga Decanter",
      description: "Decanter de doble accionamiento con VFD y caja planetaria.",
      highlight: "SS316L",
      highlightLabel: "construcción",
      primarySpecs: [
        { label: "Bowl", value: "SS316L", unit: "" },
        { label: "Scroll", value: "SS304", unit: "" },
        { label: "Accionamiento", value: "Dual", unit: "drive" },
        { label: "Rodamientos", value: "SKF/NSK", unit: "" },
      ],
      secondarySpecs: [
        { label: "Control", value: "VFD ABB" },
        { label: "Gearbox", value: "Planetario" },
        { label: "Certificación", value: "CE / ISO" },
        { label: "Lubricación", value: "Automática" },
      ]
    },
    {
      id: "BP-SPX",
      name: "Bredel SPX",
      fullName: "Bomba Peristáltica",
      description: "Bombas de manguera para pulpas abrasivas. Sin sellos ni válvulas.",
      highlight: "80%",
      highlightLabel: "sólidos",
      primarySpecs: [
        { label: "Sólidos", value: "80", unit: "%" },
        { label: "Presión máx", value: "16", unit: "bar" },
        { label: "Autocebante", value: "9", unit: "m" },
        { label: "Serie", value: "SPX10-100", unit: "" },
      ],
      secondarySpecs: [
        { label: "Válvulas", value: "Sin válvulas" },
        { label: "Sellos", value: "Sin sellos" },
        { label: "Reversible", value: "Sí" },
        { label: "Mantenimiento", value: "Mínimo" },
      ]
    },
    {
      id: "TF-3123",
      name: "Art. 3123 CAL",
      fullName: "Tela Filtrante",
      description: "Polipropileno multifilamento para filtración de borras y concentrados.",
      highlight: "90°C",
      highlightLabel: "temp. máxima",
      primarySpecs: [
        { label: "Material", value: "PP", unit: "" },
        { label: "Temp. máx", value: "90", unit: "°C" },
        { label: "Resistencia", value: "Ácidos", unit: "" },
        { label: "Permeabilidad", value: "Alta", unit: "" },
      ],
      secondarySpecs: [
        { label: "Construcción", value: "Multifilamento" },
        { label: "Formato", value: "Corte a medida" },
        { label: "Aplicación", value: "Filtros prensa" },
        { label: "Durabilidad", value: "Alta" },
      ]
    },
    {
      id: "EW-CLN",
      name: "Patente 44656",
      fullName: "Limpieza Celdas EW",
      description: "Sistema patentado de limpieza para celdas EW. Incrementa eficiencia 15-25%.",
      highlight: "+25%",
      highlightLabel: "eficiencia",
      primarySpecs: [
        { label: "Eficiencia", value: "+15-25", unit: "%" },
        { label: "Pureza Cu", value: ">99.5", unit: "%" },
        { label: "Corriente", value: "200-400", unit: "A/m²" },
        { label: "Ciclo", value: "4-8", unit: "h" },
      ],
      secondarySpecs: [
        { label: "Frecuencia", value: "7-14 días" },
        { label: "Control", value: "Automático" },
        { label: "Patente", value: "N° 44656" },
        { label: "Monitoreo", value: "Tiempo real" },
      ]
    }
  ]

  const currentEquipment = equipment[activeEquipment]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-5 border-b border-white/5">
            <h1
              className="text-4xl lg:text-5xl text-white tracking-tight"
              style={{ fontFamily: 'var(--font-family-headings)', fontWeight: 300 }}
            >
              Especificaciones <span className="text-emerald-400">Técnicas</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {equipment.map((eq, index) => (
              <button
                key={eq.id}
                onClick={() => setActiveEquipment(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                  activeEquipment === index
                    ? 'bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                style={{ fontFamily: 'var(--font-family-headings)', fontWeight: 500 }}
              >
                {eq.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Equipment Title + Hero Stat */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <p className="text-emerald-400 text-sm tracking-wider mb-2" style={{ fontFamily: 'var(--font-family-body)' }}>
              {currentEquipment.id}
            </p>
            <h2
              className="text-5xl lg:text-6xl text-white tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-family-headings)', fontWeight: 300 }}
            >
              {currentEquipment.name}
            </h2>
            <p className="text-white/80 text-lg" style={{ fontFamily: 'var(--font-family-body)' }}>
              {currentEquipment.fullName}
            </p>
            <p className="text-white/70 text-base mt-2 max-w-xl" style={{ fontFamily: 'var(--font-family-body)' }}>
              {currentEquipment.description}
            </p>
          </div>

          {/* Hero Stat */}
          <div className="lg:text-right">
            <p
              className="text-6xl lg:text-7xl text-emerald-400 tracking-tight leading-none"
              style={{ fontFamily: 'var(--font-family-headings)', fontWeight: 300 }}
            >
              {currentEquipment.highlight}
            </p>
            <p className="text-white/70 text-sm mt-2" style={{ fontFamily: 'var(--font-family-body)' }}>
              {currentEquipment.highlightLabel}
            </p>
          </div>
        </div>

        {/* Two Column Layout: Primary + Secondary */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Primary Specs - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {currentEquipment.primarySpecs.map((spec, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all"
                >
                  <p
                    className="text-emerald-400 text-xs uppercase tracking-widest mb-4"
                    style={{ fontFamily: 'var(--font-family-body)' }}
                  >
                    {spec.label}
                  </p>
                  <p
                    className="text-4xl lg:text-5xl text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-family-headings)', fontWeight: 300 }}
                  >
                    {spec.value}
                    {spec.unit && (
                      <span className="text-xl text-white/70 ml-2">{spec.unit}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Specs - Takes 1 column */}
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-family-body)' }}>
              Detalles técnicos
            </p>
            <div className="divide-y divide-white/10">
              {currentEquipment.secondarySpecs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4"
                >
                  <span
                    className="text-white/70 text-sm"
                    style={{ fontFamily: 'var(--font-family-body)' }}
                  >
                    {spec.label}
                  </span>
                  <span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: 'var(--font-family-headings)' }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
          <button
            onClick={() => setActiveEquipment(prev => prev > 0 ? prev - 1 : equipment.length - 1)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            style={{ fontFamily: 'var(--font-family-body)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>

          <div className="flex items-center gap-2">
            {equipment.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveEquipment(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeEquipment === index
                    ? 'bg-emerald-400 w-8'
                    : 'bg-white/20 hover:bg-white/40 w-1.5'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveEquipment(prev => prev < equipment.length - 1 ? prev + 1 : 0)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            style={{ fontFamily: 'var(--font-family-body)' }}
          >
            Siguiente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
