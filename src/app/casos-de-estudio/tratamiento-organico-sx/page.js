export const metadata = {
  title: 'Caso de Estudio: Tratamiento de Fase Orgánica en Planta SX - USD $3.1M Ahorro Anual',
  description: 'Descubra cómo el tratamiento de fase orgánica logró reducir arrastres en 52%, aumentar eficiencia al 92% y generar USD $3.1M en ahorros anuales en una planta SX.',
}

export default function TratamientoOrganicoCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - ROI First */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Caso de Estudio Real
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              USD $3.1M en Ahorro Anual
            </h1>
            <p className="text-2xl text-emerald-100 mb-8">
              Tratamiento de Fase Orgánica en Planta SX
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">52%</div>
              <div className="text-emerald-100">Reducción de Arrastre</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">92%</div>
              <div className="text-emerald-100">Eficiencia Global</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">18 meses</div>
              <div className="text-emerald-100">Período de Mejora</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Servicio</h3>
              <p className="text-lg text-gray-900">Filtrado, centrifugado y tratamiento con arcilla de fase orgánica</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Industria</h3>
              <p className="text-lg text-gray-900">Extracción por Solventes (SX)</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Objetivo</h3>
              <p className="text-lg text-gray-900">Eliminar arrastres, estabilizar fase orgánica y mejorar eficiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">El Desafío</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Durante 2023 y 2024, la planta SX enfrentó problemas persistentes en la calidad físico-química del orgánico
            </p>
          </div>

          {/* SX Plant Blueprint Diagram */}
          <div className="bg-white rounded-2xl p-4 md:p-8 mb-12 shadow-lg border border-slate-200">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 md:mb-3">Diagrama de Proceso - Planta SX</h3>
              <p className="text-sm md:text-base text-slate-600">Identificación de puntos críticos en el sistema de extracción por solventes</p>
            </div>

            {/* Mobile Simplified View */}
            <div className="block md:hidden space-y-6 mb-8">
              {/* Process Flow */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-semibold text-sm mb-2">
                      PLS (Entrada)
                    </div>
                    <div className="flex justify-center my-3">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="bg-white border-2 border-slate-300 rounded-lg p-4 mb-2">
                      <div className="font-bold text-slate-800 text-sm">MEZCLADOR</div>
                      <div className="text-xs text-slate-500">Extracción</div>
                    </div>
                    <div className="flex justify-center my-3">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="bg-white border-2 border-slate-300 rounded-lg p-4 mb-2">
                      <div className="font-bold text-slate-800 text-sm">DECANTADOR</div>
                      <div className="text-xs text-slate-500">Separación de Fases</div>
                    </div>
                    <div className="flex justify-center my-3">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <div className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg font-semibold text-xs">
                        Orgánico
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-semibold text-xs">
                        Acuoso → EW
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problems Grid - Mobile */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-center mb-4">Problemas Identificados</h4>

                {/* Critical Problems */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded-r-lg p-4">
                  <div className="font-bold text-red-900 text-sm mb-2">TIF BAJO</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">20.4</div>
                  <div className="text-xs text-slate-600">objetivo &gt;23 dinas/cm</div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded-r-lg p-4">
                  <div className="font-bold text-red-900 text-sm mb-2">TSF CRÍTICO</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">444 seg</div>
                  <div className="text-xs text-slate-600">objetivo &lt;200s</div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 rounded-r-lg p-4">
                  <div className="font-bold text-red-900 text-sm mb-2">PÉRDIDA Cu</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">410 ppm</div>
                  <div className="text-xs text-slate-600">descarga orgánico</div>
                </div>

                {/* Monitored Problems */}
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-600 rounded-r-lg p-4">
                  <div className="font-bold text-emerald-900 text-sm mb-2">ΔTIF ALTO</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">6.5</div>
                  <div className="text-xs text-slate-600">objetivo &lt;3</div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-600 rounded-r-lg p-4">
                  <div className="font-bold text-emerald-900 text-sm mb-2">VISCOSIDAD</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">7.5 cP</div>
                  <div className="text-xs text-slate-600">objetivo &lt;6.3</div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-600 rounded-r-lg p-4">
                  <div className="font-bold text-emerald-900 text-sm mb-2">ARRASTRE</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">65%</div>
                  <div className="text-xs text-slate-600">acuoso en orgánico</div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-600 rounded-r-lg p-4">
                  <div className="font-bold text-emerald-900 text-sm mb-2">EFICIENCIA</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">77%</div>
                  <div className="text-xs text-slate-600">variable 77-92%</div>
                </div>
              </div>

              {/* Economic Impact - Mobile */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-6 text-center text-white shadow-lg">
                <div className="text-xs font-bold tracking-wide mb-2">IMPACTO ECONÓMICO</div>
                <div className="text-4xl font-bold mb-1">$504K</div>
                <div className="text-sm text-emerald-100">USD/mes en pérdidas</div>
              </div>
            </div>

            {/* Desktop Blueprint View */}
            <svg viewBox="0 0 1200 650" className="hidden md:block w-full h-auto">
                {/* Subtle background */}
                <rect width="1200" height="650" fill="url(#bgGradient)" />

                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#f8fafc', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#f1f5f9', stopOpacity: 1}} />
                  </linearGradient>

                  {/* Subtle grid */}
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e2e8f0" strokeWidth="0.3" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="1200" height="650" fill="url(#grid)" />

                {/* Arrow markers */}
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#475569" />
                  </marker>
                  <marker id="arrowhead-emerald" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#10b981" />
                  </marker>
                </defs>

                {/* PLS Input */}
                <g>
                  <line x1="60" y1="370" x2="140" y2="370" stroke="#475569" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                  <text x="80" y="360" className="text-xs font-semibold fill-slate-600">PLS</text>
                </g>

                {/* MIXER (More detailed 3D rendering) */}
                <g>
                  {/* Main tank body with depth */}
                  <rect x="160" y="260" width="240" height="220" rx="8" fill="white" stroke="#64748b" strokeWidth="2.5"/>

                  {/* 3D effect - side panel */}
                  <path d="M 400 260 L 410 250 L 410 470 L 400 480" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5"/>
                  <path d="M 160 260 L 170 250 L 410 250 L 400 260" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>

                  {/* Organic phase (top - lighter amber) */}
                  <rect x="170" y="270" width="220" height="85" fill="#fef9c3" fillOpacity="0.6" />
                  <line x1="170" y1="355" x2="390" y2="355" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5"/>

                  {/* Aqueous phase (bottom - blue) */}
                  <rect x="170" y="355" width="220" height="110" fill="#bfdbfe" fillOpacity="0.4" />

                  {/* Agitator shaft */}
                  <line x1="280" y1="235" x2="280" y2="410" stroke="#334155" strokeWidth="3"/>

                  {/* Agitator blades */}
                  <ellipse cx="280" cy="410" rx="35" ry="8" fill="none" stroke="#334155" strokeWidth="2.5"/>
                  <line x1="245" y1="410" x2="315" y2="410" stroke="#334155" strokeWidth="2.5"/>

                  {/* Motor mount */}
                  <rect x="270" y="220" width="20" height="15" rx="2" fill="#475569"/>
                  <circle cx="280" cy="227" r="6" fill="#64748b"/>

                  {/* Label */}
                  <text x="280" y="500" textAnchor="middle" className="text-sm font-bold fill-slate-700">MEZCLADOR</text>
                  <text x="280" y="515" textAnchor="middle" className="text-xs fill-slate-500">Etapa de Extracción</text>
                </g>

                {/* SETTLER (Improved proportional design) */}
                <g>
                  {/* Main settler body - wider, shallower */}
                  <rect x="460" y="290" width="340" height="160" rx="8" fill="white" stroke="#64748b" strokeWidth="2.5"/>

                  {/* 3D effect */}
                  <path d="M 800 290 L 810 280 L 810 440 L 800 450" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5"/>
                  <path d="M 460 290 L 470 280 L 810 280 L 800 290" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>

                  {/* Organic layer */}
                  <rect x="470" y="300" width="320" height="70" fill="#fef9c3" fillOpacity="0.6" />

                  {/* Interface - wavy line for realism */}
                  <path d="M 470 370 Q 540 365 610 370 T 790 370" stroke="#10b981" strokeWidth="2" strokeDasharray="6,4" fill="none" opacity="0.6"/>

                  {/* Aqueous layer */}
                  <rect x="470" y="370" width="320" height="70" fill="#bfdbfe" fillOpacity="0.4" />

                  {/* Baffle plates (vertical dividers) */}
                  <line x1="570" y1="300" x2="570" y2="440" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5"/>
                  <line x1="690" y1="300" x2="690" y2="440" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5"/>

                  {/* Label */}
                  <text x="630" y="470" textAnchor="middle" className="text-sm font-bold fill-slate-700">DECANTADOR</text>
                  <text x="630" y="485" textAnchor="middle" className="text-xs fill-slate-500">Separación de Fases</text>
                </g>

                {/* Connection pipe from mixer to settler */}
                <path d="M 400 330 L 430 330 Q 445 330 445 345 L 445 360 Q 445 370 455 370 L 460 370"
                      fill="none" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)"/>

                {/* Output pipes */}
                <g>
                  {/* Organic output */}
                  <line x1="800" y1="325" x2="910" y2="325" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)"/>
                  <rect x="815" y="295" width="80" height="26" rx="6" fill="white" opacity="0.98" stroke="#10b981" strokeWidth="1.5"/>
                  <text x="855" y="312" textAnchor="middle" className="text-sm font-bold fill-emerald-800">Orgánico</text>

                  {/* Aqueous output */}
                  <line x1="800" y1="405" x2="910" y2="405" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                  <rect x="800" y="440" width="100" height="26" rx="6" fill="white" opacity="0.98" stroke="#0284c7" strokeWidth="1.5"/>
                  <text x="850" y="457" textAnchor="middle" className="text-sm font-bold fill-blue-800">Acuoso → EW</text>
                </g>

                {/* Gradients and filters for modern look */}
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="0" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.2"/>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#fef2f2', stopOpacity: 0.95}} />
                    <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.95}} />
                  </linearGradient>
                  <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ecfdf5', stopOpacity: 0.95}} />
                    <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.95}} />
                  </linearGradient>
                  <linearGradient id="emeraldBoxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#059669', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#047857', stopOpacity: 1}} />
                  </linearGradient>
                </defs>

                {/* Problem Indicators - Aligned to tank edges */}
                {/* Mixer problems */}
                <g>
                  {/* TIF - On left edge of mixer */}
                  <circle cx="160" cy="285" r="6" fill="#dc2626" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="160" y1="285" x2="200" y2="203" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="130" y="125" width="140" height="75" rx="12" fill="url(#redGradient)" stroke="#dc2626" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="200" y="147" textAnchor="middle" className="text-sm font-bold fill-red-700">TIF BAJO</text>
                  <text x="200" y="172" textAnchor="middle" className="text-2xl font-bold fill-slate-900">20.4</text>
                  <text x="200" y="192" textAnchor="middle" className="text-xs fill-slate-700">objetivo &gt;23 dinas/cm</text>

                  {/* ΔTIF - On right edge of mixer */}
                  <circle cx="400" cy="285" r="6" fill="#059669" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="400" y1="285" x2="460" y2="203" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="400" y="125" width="120" height="75" rx="12" fill="url(#emeraldGradient)" stroke="#059669" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="460" y="147" textAnchor="middle" className="text-sm font-bold fill-emerald-800">ΔTIF ALTO</text>
                  <text x="460" y="172" textAnchor="middle" className="text-2xl font-bold fill-slate-900">6.5</text>
                  <text x="460" y="192" textAnchor="middle" className="text-xs fill-slate-700">objetivo &lt;3</text>

                  {/* Viscosidad - On left edge of mixer, lower */}
                  <circle cx="160" cy="340" r="6" fill="#059669" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="160" y1="340" x2="80" y2="128" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="20" y="50" width="120" height="75" rx="12" fill="url(#emeraldGradient)" stroke="#059669" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="80" y="72" textAnchor="middle" className="text-sm font-bold fill-emerald-800">VISCOSIDAD</text>
                  <text x="80" y="97" textAnchor="middle" className="text-2xl font-bold fill-slate-900">7.5 cP</text>
                  <text x="80" y="117" textAnchor="middle" className="text-xs fill-slate-700">objetivo &lt;6.3</text>
                </g>

                {/* Settler problems */}
                <g>
                  {/* TSF - On interface line in settler */}
                  <circle cx="560" cy="370" r="6" fill="#dc2626" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="560" y1="370" x2="530" y2="538" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="460" y="540" width="140" height="75" rx="12" fill="url(#redGradient)" stroke="#dc2626" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="530" y="562" textAnchor="middle" className="text-sm font-bold fill-red-700">TSF CRÍTICO</text>
                  <text x="530" y="587" textAnchor="middle" className="text-2xl font-bold fill-slate-900">444 seg</text>
                  <text x="530" y="607" textAnchor="middle" className="text-xs fill-slate-700">objetivo &lt;200s</text>

                  {/* Arrastre - On interface line in settler */}
                  <circle cx="710" cy="370" r="6" fill="#059669" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="710" y1="370" x2="800" y2="538" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="740" y="540" width="120" height="75" rx="12" fill="url(#emeraldGradient)" stroke="#059669" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="800" y="562" textAnchor="middle" className="text-sm font-bold fill-emerald-800">ARRASTRE</text>
                  <text x="800" y="587" textAnchor="middle" className="text-2xl font-bold fill-slate-900">65%</text>
                  <text x="800" y="607" textAnchor="middle" className="text-xs fill-slate-700">acuoso en orgánico</text>
                </g>

                {/* Output problems */}
                <g>
                  {/* Pérdida Cu - On organic output pipe */}
                  <circle cx="910" cy="325" r="6" fill="#dc2626" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="910" y1="325" x2="990" y2="203" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="930" y="125" width="120" height="75" rx="12" fill="url(#redGradient)" stroke="#dc2626" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="990" y="147" textAnchor="middle" className="text-sm font-bold fill-red-700">PÉRDIDA Cu</text>
                  <text x="990" y="172" textAnchor="middle" className="text-2xl font-bold fill-slate-900">410 ppm</text>
                  <text x="990" y="192" textAnchor="middle" className="text-xs fill-slate-700">descarga orgánico</text>

                  {/* Eficiencia - On aqueous output pipe */}
                  <circle cx="910" cy="405" r="6" fill="#059669" opacity="0.9" stroke="white" strokeWidth="2"/>
                  <line x1="910" y1="405" x2="1020" y2="538" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                  <rect x="960" y="540" width="120" height="75" rx="12" fill="url(#emeraldGradient)" stroke="#059669" strokeWidth="2.5" filter="url(#shadow)"/>
                  <text x="1020" y="562" textAnchor="middle" className="text-sm font-bold fill-emerald-800">EFICIENCIA</text>
                  <text x="1020" y="587" textAnchor="middle" className="text-2xl font-bold fill-slate-900">77%</text>
                  <text x="1020" y="607" textAnchor="middle" className="text-xs fill-slate-700">variable 77-92%</text>
                </g>

                {/* Economic Impact - Aligned between output lines */}
                <g>
                  <rect x="920" y="332" width="250" height="98" rx="16" fill="url(#emeraldBoxGradient)" filter="url(#shadow)"/>
                  <rect x="920" y="332" width="250" height="32" rx="16" fill="#047857" opacity="0.3"/>
                  <text x="1045" y="355" textAnchor="middle" className="text-sm font-bold fill-white tracking-wide">IMPACTO ECONÓMICO</text>
                  <text x="1045" y="398" textAnchor="middle" className="text-5xl font-bold fill-white">$504K</text>
                  <text x="1045" y="422" textAnchor="middle" className="text-sm font-semibold fill-white">USD/mes en pérdidas</text>
                </g>

              </svg>

          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TIF bajos */}
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">TIF Bajos</h3>
              </div>
              <p className="text-gray-700">20,4 - 21,10 dinas/cm</p>
              <p className="text-sm text-gray-600 mt-2">Bajo el rango recomendado (&gt;23)</p>
            </div>

            {/* Delta TIF elevados */}
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Delta TIF Elevado</h3>
              </div>
              <p className="text-gray-700">5,5 - 6,5 dinas/cm</p>
              <p className="text-sm text-gray-600 mt-2">Alta carga de tensoactivos</p>
            </div>

            {/* Alta Viscosidad */}
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Alta Viscosidad</h3>
              </div>
              <p className="text-gray-700">&gt; 6,3 cP (hasta 7,5 cP)</p>
              <p className="text-sm text-gray-600 mt-2">Sobre el umbral recomendado</p>
            </div>

            {/* TSF Alto */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">TSF Alto</h3>
              </div>
              <p className="text-gray-700">Hasta 444 segundos</p>
              <p className="text-sm text-gray-600 mt-2">Tiempo de separación crítico</p>
            </div>

            {/* Altos Arrastres */}
            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-pink-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Altos Arrastres</h3>
              </div>
              <p className="text-gray-700">Hasta 65% acuoso</p>
              <p className="text-sm text-gray-600 mt-2">Contaminación de fase orgánica</p>
            </div>

            {/* Alta Descarga Cu */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Alta Descarga Cu</h3>
              </div>
              <p className="text-gray-700">Hasta 410 ppm</p>
              <p className="text-sm text-gray-600 mt-2">Pérdidas económicas relevantes</p>
            </div>

            {/* Eficiencia Fluctuante */}
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Eficiencia Fluctuante</h3>
              </div>
              <p className="text-gray-700">77% - 92%</p>
              <p className="text-sm text-gray-600 mt-2">Variación según tratamiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">La Solución Tec-Ionic</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema de tratamiento integral de fase orgánica con monitoreo continuo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Filtrado */}
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Filtrado</h3>
              <p className="text-gray-600">
                Filtrado de fase orgánica mediante filtro prensa y retiro de sólidos desde el inventario
              </p>
            </div>

            {/* Tratamiento con Arcilla */}
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Tratamiento con Arcilla</h3>
              <p className="text-gray-600">
                Aplicación de arcilla tratante con dosis optimizadas entre 5 y 10 kg/m³
              </p>
            </div>

            {/* Centrifugado */}
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Centrifugado</h3>
              <p className="text-gray-600">
                Centrifugado de mezcla con arcilla para separación óptima
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-3">Monitoreo Continuo</h3>
            <p className="text-gray-700">
              Muestreos regulares y seguimiento de variables críticas: <span className="font-semibold">TIF, viscosidad, TSF, contenido acuoso y descarga de cobre</span>
            </p>
          </div>
        </div>
      </section>

      {/* Resultados - Main Focus */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados Medibles</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Mejoras comprobadas en 18 meses de operación</p>
          </div>

          {/* Metric Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Calidad Físico-Química */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Calidad Físico-Química</h3>
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">TIF</span>
                    <span className="text-2xl font-bold text-emerald-600">+16%</span>
                  </div>
                  <div className="text-sm text-gray-600">20,4 → 23,7 dinas/cm</div>
                </div>

                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Delta TIF</span>
                    <span className="text-2xl font-bold text-emerald-600">-54%</span>
                  </div>
                  <div className="text-sm text-gray-600">&gt;6 → ~3 dinas/cm</div>
                </div>

                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Viscosidad</span>
                    <span className="text-2xl font-bold text-emerald-600">-15%</span>
                  </div>
                  <div className="text-sm text-gray-600">7,5 → 6,35 cP promedio</div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">TSF</span>
                    <span className="text-2xl font-bold text-emerald-600">-66%</span>
                  </div>
                  <div className="text-sm text-gray-600">444 → 153 segundos</div>
                </div>
              </div>
            </div>

            {/* Eficiencia Operacional */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eficiencia Operacional</h3>
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Eficiencia Global</span>
                    <span className="text-2xl font-bold text-blue-600">92,16%</span>
                  </div>
                  <div className="text-sm text-gray-600">Con tratamiento mantenido</div>
                </div>

                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Descarga Cu</span>
                    <span className="text-2xl font-bold text-blue-600">-50%</span>
                  </div>
                  <div className="text-sm text-gray-600">410 → 170-210 ppm</div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Arrastre Orgánico</span>
                    <span className="text-2xl font-bold text-blue-600">-50%</span>
                  </div>
                  <div className="text-sm text-gray-600">Reducción de contenido en acuoso</div>
                </div>
              </div>
            </div>

            {/* Impacto Económico */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-emerald-400">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Impacto Económico</h3>
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Arrastre Diario</span>
                    <span className="text-2xl font-bold text-emerald-600">-52%</span>
                  </div>
                  <div className="text-sm text-gray-600">6 → 2,9 m³/día</div>
                </div>

                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-gray-700 font-medium">Costo Mensual</span>
                    <span className="text-2xl font-bold text-emerald-600">-52%</span>
                  </div>
                  <div className="text-sm text-gray-600">$504K → $243K USD</div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 -mx-2">
                  <div className="text-sm text-emerald-800 font-semibold mb-1">Ahorro Anual Total</div>
                  <div className="text-4xl font-bold text-emerald-600">$3.124M</div>
                  <div className="text-sm text-emerald-700 mt-1">USD proyectado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Economic Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Desglose Económico</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Antes del Tratamiento</h4>
                <div className="space-y-3 bg-red-50 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Arrastre promedio diario:</span>
                    <span className="font-semibold text-gray-900">6 m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Costo diario reposición:</span>
                    <span className="font-semibold text-gray-900">USD $16.800</span>
                  </div>
                  <div className="flex justify-between border-t border-red-200 pt-2">
                    <span className="text-gray-700 font-semibold">Costo mensual:</span>
                    <span className="font-bold text-red-600 text-lg">USD $504.000</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Con Servicio Tec-Ionic</h4>
                <div className="space-y-3 bg-emerald-50 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Arrastre promedio diario:</span>
                    <span className="font-semibold text-gray-900">2,9 m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Costo diario reposición:</span>
                    <span className="font-semibold text-gray-900">USD $8.120</span>
                  </div>
                  <div className="flex justify-between border-t border-emerald-200 pt-2">
                    <span className="text-gray-700 font-semibold">Costo mensual:</span>
                    <span className="font-bold text-emerald-600 text-lg">USD $243.600</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-emerald-100 to-green-100 p-6 rounded-lg border-l-4 border-emerald-600">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-emerald-800 mb-1">AHORRO MENSUAL DIRECTO</div>
                  <div className="text-3xl font-bold text-emerald-600">USD $260.400</div>
                </div>
                <svg className="w-16 h-16 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impacto Integral del Tratamiento</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Mayor Eficiencia de Planta</h3>
              </div>
              <p className="text-gray-700 text-sm">Mayor productividad y rendimiento operacional sostenido</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Uso Reducido de Reactivos</h3>
              </div>
              <p className="text-gray-700 text-sm">Menos necesidad de productos químicos correctivos (sulfato ferroso, ácido)</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Mejor Calidad de Cátodo</h3>
              </div>
              <p className="text-gray-700 text-sm">Reducción de contaminantes en proceso de electroobtención (EW)</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Deterioro Reducido de Extractante</h3>
              </div>
              <p className="text-gray-700 text-sm">Menor degradación de componentes químicos, extendiendo vida útil</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Reducción de Paradas</h3>
              </div>
              <p className="text-gray-700 text-sm">Menos interrupciones y menores costos de mantención correctiva</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Estabilidad Operativa</h3>
              </div>
              <p className="text-gray-700 text-sm">Proceso más predecible y reducción de contingencias operacionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros vs Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Análisis Objetivo</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Beneficios
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Calidad Óptima</div>
                    <div className="text-gray-600 text-sm">Recuperación de parámetros a condiciones ideales</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Eficiencia Mejorada</div>
                    <div className="text-gray-600 text-sm">Mayor productividad y rendimiento sostenido</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Reducción de Costos</div>
                    <div className="text-gray-600 text-sm">Ahorro directo de USD $3.1M anual</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Estabilidad Operativa</div>
                    <div className="text-gray-600 text-sm">Proceso predecible, menos contingencias</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Consideraciones
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Costo Inicial</div>
                    <div className="text-gray-600 text-sm">Inversión inicial en equipos y tratamiento</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-900">Mantenimiento Continuo</div>
                    <div className="text-gray-600 text-sm">Requiere operación y monitoreo regular</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conclusión Técnica</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border-l-4 border-emerald-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El servicio de tratamiento de fase orgánica proporcionado por <span className="font-bold text-emerald-600">Tec-Ionic Durban</span> ha
              contribuido significativamente a la mejora de la calidad físico-química del orgánico, reducción de arrastres y aumento de la
              eficiencia global de la planta SX.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Estos resultados se han logrado en conjunto con la implementación de buenas prácticas operacionales complementarias.
              El tratamiento regular de la fase orgánica, enmarcado dentro de una estrategia integral, ha permitido <span className="font-semibold">recuperar
              condiciones operacionales óptimas, reducir pérdidas económicas por reposición de orgánico</span> y aumentar la estabilidad y
              eficiencia del proceso de extracción por solventes.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-emerald-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">52%</div>
                <div className="text-sm text-gray-600 mt-1">Reducción Arrastre</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">92%</div>
                <div className="text-sm text-gray-600 mt-1">Eficiencia Global</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">-66%</div>
                <div className="text-sm text-gray-600 mt-1">TSF Reducido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">$3.1M</div>
                <div className="text-sm text-gray-600 mt-1">Ahorro Anual</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Enfrenta Problemas Similares en su Planta SX?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Nuestros especialistas pueden ayudarle a diagnosticar y resolver problemas de calidad de orgánicos,
            arrastres y eficiencia operacional con soluciones comprobadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-block">
              Solicitar Consulta Técnica
            </a>
            <a href="/casos-de-estudio" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block">
              Ver Más Casos de Estudio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
