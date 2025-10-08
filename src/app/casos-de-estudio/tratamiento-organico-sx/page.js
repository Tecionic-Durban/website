export const metadata = {
  title: 'Caso de Estudio: Tratamiento de Fase Orgánica en Planta SX - USD $3.1M Ahorro Anual',
  description: 'Descubra cómo el tratamiento de fase orgánica logró reducir arrastres en 52%, aumentar eficiencia al 92% y generar USD $3.1M en ahorros anuales en una planta SX.',
}

export default function TratamientoOrganicoCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Maximum Impact */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-100 px-5 py-2.5 rounded-full text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Caso de Estudio Verificado
            </div>
          </div>

          {/* Main Hero */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="block text-emerald-400">USD $3.1M</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-4">
                Ahorro Anual Verificado
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Optimización completa de fase orgánica en planta SX mediante filtración, tratamiento con arcilla y centrifugado
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="text-5xl font-black text-emerald-300 mb-2">52%</div>
              <div className="text-sm text-emerald-100 font-medium">Reducción de Arrastre</div>
              <div className="text-xs text-emerald-200/60 mt-1">6 → 2.9 m³/día</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="text-5xl font-black text-emerald-300 mb-2">92%</div>
              <div className="text-sm text-emerald-100 font-medium">Eficiencia Global</div>
              <div className="text-xs text-emerald-200/60 mt-1">desde 77% inicial</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="text-5xl font-black text-emerald-300 mb-2">-66%</div>
              <div className="text-sm text-emerald-100 font-medium">Reducción TSF</div>
              <div className="text-xs text-emerald-200/60 mt-1">444 → 153 seg</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="text-5xl font-black text-emerald-300 mb-2">18</div>
              <div className="text-sm text-emerald-100 font-medium">Meses de Ejecución</div>
              <div className="text-xs text-emerald-200/60 mt-1">2023 - 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Statement - Clean & Simple */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">El Desafío</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Durante 2023 y 2024, la planta SX enfrentó <strong className="text-gray-900">problemas críticos y persistentes</strong> en la calidad físico-química de la fase orgánica, generando pérdidas económicas de <strong className="text-red-600">USD $504K mensuales</strong>.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Los parámetros operacionales se encontraban fuera de especificación, afectando severamente la eficiencia del proceso de extracción por solventes y comprometiendo la producción de cobre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification - Blueprint Diagram */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Puntos Críticos Identificados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mapeo técnico de los 7 problemas operacionales en el sistema de extracción por solventes
            </p>
          </div>

          {/* Desktop Blueprint View */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
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

                {/* Arrow markers */}
                <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#0284c7"/>
                </marker>
                <marker id="arrowhead-emerald" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#10b981"/>
                </marker>

                {/* Gradients for modern look */}
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

                {/* Emerald gradients by severity */}
                <linearGradient id="severeDark" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ecfdf5', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.95}} />
                </linearGradient>
                <linearGradient id="moderateGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#d1fae5', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.95}} />
                </linearGradient>
                <linearGradient id="lightGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#a7f3d0', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.95}} />
                </linearGradient>
                <linearGradient id="emeraldBoxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#059669', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#047857', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <rect width="1200" height="650" fill="url(#grid)" />

              {/* Title Block */}
              <g>
                <rect x="20" y="20" width="300" height="80" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="2" opacity="0.95"/>
                <text x="170" y="50" textAnchor="middle" className="text-lg font-bold fill-slate-700">PLANTA SX</text>
                <text x="170" y="72" textAnchor="middle" className="text-sm fill-slate-500">Proceso de Extracción</text>
                <text x="170" y="90" textAnchor="middle" className="text-xs fill-slate-400">Sistema Mixer-Settler</text>
              </g>

              {/* Input */}
              <g>
                <line x1="40" y1="350" x2="130" y2="350" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)"/>
                <rect x="40" y="335" width="60" height="30" rx="6" fill="white" opacity="0.98" stroke="#10b981" strokeWidth="1.5"/>
                <text x="70" y="355" textAnchor="middle" className="text-sm font-bold fill-emerald-800">PLS</text>
              </g>

              {/* MIXER (3D rendering) */}
              <g>
                <rect x="160" y="260" width="240" height="220" rx="8" fill="white" stroke="#64748b" strokeWidth="2.5"/>
                <path d="M 400 260 L 410 250 L 410 470 L 400 480" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5"/>
                <path d="M 160 260 L 170 250 L 410 250 L 400 260" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>

                <rect x="170" y="270" width="220" height="85" fill="#fef9c3" fillOpacity="0.6" />
                <line x1="170" y1="355" x2="390" y2="355" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5"/>
                <rect x="170" y="355" width="220" height="110" fill="#bfdbfe" fillOpacity="0.4" />

                <line x1="280" y1="235" x2="280" y2="410" stroke="#334155" strokeWidth="3"/>
                <ellipse cx="280" cy="410" rx="35" ry="8" fill="none" stroke="#334155" strokeWidth="2.5"/>
                <line x1="245" y1="410" x2="315" y2="410" stroke="#334155" strokeWidth="2.5"/>
                <rect x="270" y="220" width="20" height="15" rx="2" fill="#475569"/>
                <circle cx="280" cy="227" r="6" fill="#64748b"/>

                <text x="280" y="500" textAnchor="middle" className="text-sm font-bold fill-slate-700">MEZCLADOR</text>
                <text x="280" y="515" textAnchor="middle" className="text-xs fill-slate-500">Etapa de Extracción</text>
              </g>

              {/* SETTLER */}
              <g>
                <rect x="460" y="290" width="340" height="160" rx="8" fill="white" stroke="#64748b" strokeWidth="2.5"/>
                <path d="M 800 290 L 810 280 L 810 440 L 800 450" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5"/>
                <path d="M 460 290 L 470 280 L 810 280 L 800 290" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>

                <rect x="470" y="300" width="320" height="70" fill="#fef9c3" fillOpacity="0.6" />
                <path d="M 470 370 Q 540 365 610 370 T 790 370" stroke="#10b981" strokeWidth="2" strokeDasharray="6,4" fill="none" opacity="0.6"/>
                <rect x="470" y="370" width="320" height="70" fill="#bfdbfe" fillOpacity="0.4" />

                <line x1="570" y1="300" x2="570" y2="440" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5"/>
                <line x1="690" y1="300" x2="690" y2="440" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5"/>

                <text x="630" y="470" textAnchor="middle" className="text-sm font-bold fill-slate-700">DECANTADOR</text>
                <text x="630" y="485" textAnchor="middle" className="text-xs fill-slate-500">Separación de Fases</text>
              </g>

              {/* Connection pipe */}
              <path d="M 400 330 L 430 330 Q 445 330 445 345 L 445 360 Q 445 370 455 370 L 460 370"
                    fill="none" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)"/>

              {/* Output pipes */}
              <g>
                <line x1="800" y1="325" x2="910" y2="325" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowhead-emerald)"/>
                <rect x="815" y="295" width="80" height="26" rx="6" fill="white" opacity="0.98" stroke="#10b981" strokeWidth="1.5"/>
                <text x="855" y="312" textAnchor="middle" className="text-sm font-bold fill-emerald-800">Orgánico</text>

                <line x1="800" y1="405" x2="910" y2="405" stroke="#0284c7" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
                <rect x="800" y="440" width="100" height="26" rx="6" fill="white" opacity="0.98" stroke="#0284c7" strokeWidth="1.5"/>
                <text x="850" y="457" textAnchor="middle" className="text-sm font-bold fill-blue-800">Acuoso → EW</text>
              </g>

              {/* Problem Indicators - Emerald Gradient by Severity */}
              {/* Most Severe (Dark Emerald #047857) */}
              <g>
                {/* TSF Crítico - Most Severe */}
                <circle cx="560" cy="370" r="6" fill="#047857" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="560" y1="370" x2="530" y2="538" stroke="#047857" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="460" y="540" width="140" height="75" rx="12" fill="url(#severeDark)" stroke="#047857" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="530" y="562" textAnchor="middle" className="text-sm font-bold fill-emerald-900">TSF CRÍTICO</text>
                <text x="530" y="587" textAnchor="middle" className="text-2xl font-bold fill-slate-900">444 seg</text>
                <text x="530" y="607" textAnchor="middle" className="text-xs fill-slate-700">objetivo &lt;200s</text>

                {/* Delta TIF - Most Severe */}
                <circle cx="400" cy="285" r="6" fill="#047857" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="400" y1="285" x2="460" y2="203" stroke="#047857" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="400" y="125" width="120" height="75" rx="12" fill="url(#severeDark)" stroke="#047857" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="460" y="147" textAnchor="middle" className="text-sm font-bold fill-emerald-900">ΔTIF ALTO</text>
                <text x="460" y="172" textAnchor="middle" className="text-2xl font-bold fill-slate-900">6.5</text>
                <text x="460" y="192" textAnchor="middle" className="text-xs fill-slate-700">objetivo &lt;3</text>

                {/* Arrastre - Severe */}
                <circle cx="710" cy="370" r="6" fill="#047857" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="710" y1="370" x2="800" y2="538" stroke="#047857" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="740" y="540" width="120" height="75" rx="12" fill="url(#severeDark)" stroke="#047857" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="800" y="562" textAnchor="middle" className="text-sm font-bold fill-emerald-900">ARRASTRE</text>
                <text x="800" y="587" textAnchor="middle" className="text-2xl font-bold fill-slate-900">65%</text>
                <text x="800" y="607" textAnchor="middle" className="text-xs fill-slate-700">acuoso en orgánico</text>

                {/* Pérdida Cu - Severe */}
                <circle cx="910" cy="325" r="6" fill="#047857" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="910" y1="325" x2="990" y2="203" stroke="#047857" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="930" y="125" width="120" height="75" rx="12" fill="url(#severeDark)" stroke="#047857" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="990" y="147" textAnchor="middle" className="text-sm font-bold fill-emerald-900">PÉRDIDA Cu</text>
                <text x="990" y="172" textAnchor="middle" className="text-2xl font-bold fill-slate-900">410 ppm</text>
                <text x="990" y="192" textAnchor="middle" className="text-xs fill-slate-700">descarga orgánico</text>
              </g>

              {/* Moderate (Mid Emerald #059669) */}
              <g>
                {/* TIF Bajo - Moderate */}
                <circle cx="160" cy="285" r="6" fill="#059669" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="160" y1="285" x2="200" y2="203" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="130" y="125" width="140" height="75" rx="12" fill="url(#moderateGreen)" stroke="#059669" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="200" y="147" textAnchor="middle" className="text-sm font-bold fill-emerald-800">TIF BAJO</text>
                <text x="200" y="172" textAnchor="middle" className="text-2xl font-bold fill-slate-900">20.4</text>
                <text x="200" y="192" textAnchor="middle" className="text-xs fill-slate-700">objetivo &gt;23 dinas/cm</text>

                {/* Viscosidad - Moderate */}
                <circle cx="160" cy="340" r="6" fill="#059669" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="160" y1="340" x2="80" y2="128" stroke="#059669" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="20" y="50" width="120" height="75" rx="12" fill="url(#moderateGreen)" stroke="#059669" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="80" y="72" textAnchor="middle" className="text-sm font-bold fill-emerald-800">VISCOSIDAD</text>
                <text x="80" y="97" textAnchor="middle" className="text-2xl font-bold fill-slate-900">7.5 cP</text>
                <text x="80" y="117" textAnchor="middle" className="text-xs fill-slate-700">objetivo &lt;6.3</text>
              </g>

              {/* Minor (Light Emerald #10b981) */}
              <g>
                {/* Eficiencia - Minor */}
                <circle cx="910" cy="405" r="6" fill="#10b981" opacity="0.9" stroke="white" strokeWidth="2"/>
                <line x1="910" y1="405" x2="1020" y2="538" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5"/>
                <rect x="960" y="540" width="120" height="75" rx="12" fill="url(#lightGreen)" stroke="#10b981" strokeWidth="2.5" filter="url(#shadow)"/>
                <text x="1020" y="562" textAnchor="middle" className="text-sm font-bold fill-emerald-700">EFICIENCIA</text>
                <text x="1020" y="587" textAnchor="middle" className="text-2xl font-bold fill-slate-900">77%</text>
                <text x="1020" y="607" textAnchor="middle" className="text-xs fill-slate-700">variable 77-92%</text>
              </g>

              {/* Economic Impact Box */}
              <g>
                <rect x="920" y="332" width="250" height="98" rx="16" fill="url(#emeraldBoxGradient)" filter="url(#shadow)"/>
                <rect x="920" y="332" width="250" height="32" rx="16" fill="#047857" opacity="0.3"/>
                <text x="1045" y="355" textAnchor="middle" className="text-sm font-bold fill-white tracking-wide">IMPACTO ECONÓMICO</text>
                <text x="1045" y="398" textAnchor="middle" className="text-5xl font-bold fill-white">$504K</text>
                <text x="1045" y="422" textAnchor="middle" className="text-sm font-semibold fill-white">USD/mes en pérdidas</text>
              </g>
            </svg>

            {/* Mobile Simplified List */}
            <div className="block md:hidden space-y-3">
              <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 border-l-4 border-emerald-900 rounded-r-xl p-4 text-white">
                <div className="font-bold text-sm mb-1">TSF CRÍTICO</div>
                <div className="text-2xl font-bold mb-1">444 seg</div>
                <div className="text-xs opacity-75">objetivo &lt;200s</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 border-l-4 border-emerald-800 rounded-r-xl p-4 text-white">
                <div className="font-bold text-sm mb-1">ΔTIF ALTO</div>
                <div className="text-2xl font-bold mb-1">6.5</div>
                <div className="text-xs opacity-75">objetivo &lt;3</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 border-l-4 border-emerald-700 rounded-r-xl p-4 text-white">
                <div className="font-bold text-sm mb-1">ARRASTRE</div>
                <div className="text-2xl font-bold mb-1">65%</div>
                <div className="text-xs opacity-75">acuoso en orgánico</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 border-l-4 border-emerald-600 rounded-r-xl p-4 text-white">
                <div className="font-bold text-sm mb-1">PÉRDIDA Cu</div>
                <div className="text-2xl font-bold mb-1">410 ppm</div>
                <div className="text-xs opacity-75">descarga orgánico</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 border-l-4 border-emerald-500 rounded-r-xl p-4 text-white">
                <div className="font-bold text-sm mb-1">TIF BAJO</div>
                <div className="text-2xl font-bold mb-1">20.4</div>
                <div className="text-xs opacity-75">objetivo &gt;23 dinas/cm</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-300 border-l-4 border-emerald-400 rounded-r-xl p-4 text-white">
                <div className="font-bold text-sm mb-1">VISCOSIDAD</div>
                <div className="text-2xl font-bold mb-1">7.5 cP</div>
                <div className="text-xs opacity-75">objetivo &lt;6.3</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-300 to-emerald-200 border-l-4 border-emerald-300 rounded-r-xl p-4 text-gray-800">
                <div className="font-bold text-sm mb-1">EFICIENCIA</div>
                <div className="text-2xl font-bold mb-1">77%</div>
                <div className="text-xs opacity-75">variable 77-92%</div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-6 text-center text-white shadow-lg mt-6">
                <div className="text-xs font-bold tracking-wide mb-2">IMPACTO ECONÓMICO</div>
                <div className="text-4xl font-bold mb-1">$504K</div>
                <div className="text-sm">USD/mes en pérdidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Approach - Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">La Solución</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proceso integral de tres etapas para restaurar la calidad de la fase orgánica
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Filtrado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Retiro de sólidos del inventario mediante filtro prensa, eliminando impurezas y contaminantes físicos
                </p>
              </div>
              {/* Connector */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tratamiento con Arcilla</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aplicación de arcilla tratante en dosis optimizadas (5-10 kg/m³) para adsorber contaminantes químicos
                </p>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centrifugado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Separación de mezcla arcilla-contaminantes del orgánico limpio mediante centrifugación industrial
                </p>
              </div>
            </div>
          </div>

          {/* Monitoring */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoreo Continuo</h3>
                <p className="text-gray-700">
                  Seguimiento en tiempo real de TIF, viscosidad, TSF, contenido acuoso y descarga de cobre para garantizar parámetros dentro de especificación durante todo el proceso de 18 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Before/After Comparison */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resultados Medibles</h2>
            <p className="text-lg text-gray-600">
              Mejoras verificadas en todos los parámetros críticos de operación
            </p>
          </div>

          {/* Before/After Table */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-12">
            <div className="grid md:grid-cols-2">
              <div className="bg-red-50 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    Antes
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Después
                  </div>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {[
                {param: 'TIF', before: '20.4 dinas/cm', after: '23.7 dinas/cm', improvement: '+16%', unit: 'dinas/cm'},
                {param: 'Delta TIF', before: '6.5', after: '3.0', improvement: '-54%', unit: ''},
                {param: 'TSF', before: '444 seg', after: '153 seg', improvement: '-66%', unit: 'seg'},
                {param: 'Viscosidad', before: '7.5 cP', after: '6.35 cP', improvement: '-15%', unit: 'cP'},
                {param: 'Arrastre Diario', before: '6 m³', after: '2.9 m³', improvement: '-52%', unit: 'm³/día'},
                {param: 'Eficiencia Global', before: '77%', after: '92.16%', improvement: '+15.16%', unit: '%'},
                {param: 'Descarga Cu', before: '410 ppm', after: '190 ppm', improvement: '-54%', unit: 'ppm'},
                {param: 'Costo Mensual', before: '$504K', after: '$243K', improvement: '-52%', unit: 'USD'},
              ].map((row, idx) => (
                <div key={idx} className="grid md:grid-cols-7 items-center hover:bg-gray-50 transition-colors">
                  <div className="col-span-2 p-6 font-semibold text-gray-900">
                    {row.param}
                  </div>
                  <div className="col-span-2 p-6 text-gray-700 bg-red-50 md:bg-transparent">
                    <div className="flex items-center gap-2">
                      <span className="md:hidden text-xs text-red-600 font-semibold">Antes:</span>
                      {row.before}
                    </div>
                  </div>
                  <div className="col-span-2 p-6 text-gray-900 font-semibold bg-emerald-50 md:bg-transparent">
                    <div className="flex items-center gap-2">
                      <span className="md:hidden text-xs text-emerald-600 font-semibold">Después:</span>
                      {row.after}
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                      row.improvement.startsWith('+') && row.param !== 'Eficiencia Global' && row.param !== 'TIF'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {row.improvement.startsWith('-') ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/>
                        </svg>
                      )}
                      {row.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-6xl font-black mb-4">$3.1M</div>
              <div className="text-xl font-semibold mb-2">Ahorro Anual</div>
              <div className="text-emerald-100">Reducción de USD $260K mensuales en pérdidas operacionales</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-6xl font-black mb-4">52%</div>
              <div className="text-xl font-semibold mb-2">Menos Arrastre</div>
              <div className="text-blue-100">De 6 m³ a 2.9 m³ de arrastre diario de acuoso en orgánico</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-6xl font-black mb-4">92%</div>
              <div className="text-xl font-semibold mb-2">Eficiencia</div>
              <div className="text-purple-100">Mejora de 77% a 92.16% en eficiencia global del proceso SX</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Enfrenta problemas similares en su planta?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Nuestro equipo técnico puede ayudarle a optimizar su proceso SX y maximizar su eficiencia operacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl">
              Contactar Especialistas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="/casos-de-estudio" className="inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border-2 border-emerald-600">
              Ver Más Casos de Estudio
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
