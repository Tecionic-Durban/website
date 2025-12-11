import Link from 'next/link'

export const metadata = {
  title: 'Caso de Éxito: Backup Móvil de Filtración en Cerro Negro - USD $2.43M Valor Protegido',
  description: 'Descubra cómo el filtro prensa móvil de Tec-Ionic protegió $2.43M USD de concentrado de cobre durante una mantención mayor de 30 días en Cerro Negro.',
}

export default function DeshidratacionConcentradosCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - ROI First */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Caso de Éxito - Continuidad Operacional
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              USD $2.43M Valor Protegido
            </h1>
            <p className="text-2xl text-orange-100 mb-8">
              Backup Móvil de Filtración de Concentrado en Cerro Negro
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">50:1</div>
              <div className="text-orange-100">Ratio Beneficio/Costo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">75%</div>
              <div className="text-orange-100">Capacidad Mantenida</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">&lt;1 día</div>
              <div className="text-orange-100">Payback del Servicio</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-orange-300 mb-2">30 días</div>
              <div className="text-orange-100">Período de Respaldo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Cliente</h3>
              <p className="text-lg text-gray-900">Compañía Minera Cerro Negro</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Unidad</h3>
              <p className="text-lg text-gray-900">Planta concentradora de cobre</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Servicio</h3>
              <p className="text-lg text-gray-900">Filtro prensa móvil F-1200-3</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Objetivo</h3>
              <p className="text-lg text-gray-900">Continuidad operacional durante mantención mayor</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">El Desafío</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantención mayor de 30 días al filtro prensa principal sin equipo de respaldo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Situación Crítica</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sin filtro de respaldo</h4>
                    <p className="text-gray-600">La planta operaba con un solo filtro prensa como cuello de botella de la línea de espesado</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mantención mayor programada</h4>
                    <p className="text-gray-600">30 días de cambio de placas, revisión hidráulica, estructura, piping, válvulas y cloths</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stock limitado</h4>
                    <p className="text-gray-600">Espesadores y estanques solo permiten algunos días de operación transitoria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Box */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Riesgos Identificados</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-1">Pérdida de producción</h4>
                  <p className="text-sm text-gray-600">1,800 ton de concentrado en riesgo</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                  <h4 className="font-semibold text-gray-900 mb-1">Riesgo operativo</h4>
                  <p className="text-sm text-gray-600">Acumulación en espesadores, rebases, condiciones fuera de especificación</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-300">
                  <h4 className="font-semibold text-gray-900 mb-1">Riesgo comercial</h4>
                  <p className="text-sm text-gray-600">Incumplimiento de contratos de entrega a fundiciones</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Riesgo reputacional</h4>
                  <p className="text-sm text-gray-600">Impacto en indicadores de cumplimiento de plan minero</p>
                </div>
              </div>

              <div className="mt-6 bg-red-100 rounded-lg p-4 text-center">
                <div className="text-sm text-red-800 font-semibold mb-1">VALOR EN RIESGO</div>
                <div className="text-4xl font-bold text-red-600">$3.24M USD</div>
                <div className="text-sm text-red-700">Sin solución de respaldo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">La Solución Tec-Ionic</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Servicio turnkey de filtración móvil para mantener la continuidad operacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Technical Config */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Configuración Técnica</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Equipo Principal</h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="bg-orange-100 p-2 rounded mr-3">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900">Filtro Prensa Móvil F-1200-3</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">Volumen útil: ~2,500 L/batch</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Equipamiento Asociado</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Bomba peristáltica SP-50
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Bombas de diafragma 3&quot;
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Flujómetro calibrado
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Repuestos críticos (placas, telas, mangueras)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Características de la Pulpa</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-gray-900">50-60%</div>
                      <div className="text-sm text-gray-600">Sólidos en peso</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                      <div className="text-2xl font-bold text-gray-900">~9%</div>
                      <div className="text-sm text-gray-600">Humedad final</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operation Parameters */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Parámetros de Operación</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Ciclos de Producción</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-3xl font-bold text-orange-600">2.5 h</div>
                      <div className="text-sm text-gray-600">Tiempo por ciclo</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-3xl font-bold text-orange-600">8</div>
                      <div className="text-sm text-gray-600">Batch por día</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-3xl font-bold text-orange-600">20 m³</div>
                      <div className="text-sm text-gray-600">Volumen diario</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="text-3xl font-bold text-orange-600">45 ton</div>
                      <div className="text-sm text-gray-600">Concentrado/día</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Organización de Turnos</h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-600">Modalidad:</span>
                      <span className="font-semibold text-gray-900">7x7, Turnos A y B (24h/día)</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>8 operadores en total (turnos A y B)</div>
                      <div>4 capataces (cobertura completa)</div>
                      <div>Supervisor 4x3</div>
                      <div>APR soporte técnico remoto</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">KPIs del Servicio</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-gray-600">Disponibilidad en faena</span>
                      <span className="font-bold text-orange-600">≥ 95%</span>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                      <span className="text-gray-600">Toneladas/día objetivo</span>
                      <span className="font-bold text-orange-600">45 ton</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados del Proyecto</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Impacto económico verificable en 30 días de operación</p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid md:grid-cols-3">
              {/* Without Tec-Ionic */}
              <div className="bg-red-50 p-8 border-r border-gray-200">
                <h3 className="text-xl font-bold text-red-800 mb-6">Sin Solución de Respaldo</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Producción perdida</div>
                    <div className="text-3xl font-bold text-red-600">1,800 ton</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Valor en riesgo</div>
                    <div className="text-3xl font-bold text-red-600">$3.24M USD</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Capacidad operativa</div>
                    <div className="text-3xl font-bold text-red-600">0%</div>
                  </div>
                </div>
              </div>

              {/* With Tec-Ionic */}
              <div className="bg-green-50 p-8 border-r border-gray-200">
                <h3 className="text-xl font-bold text-green-800 mb-6">Con Filtro Móvil Tec-Ionic</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Producción preservada</div>
                    <div className="text-3xl font-bold text-green-600">1,350 ton</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Valor protegido</div>
                    <div className="text-3xl font-bold text-green-600">$2.43M USD</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Capacidad mantenida</div>
                    <div className="text-3xl font-bold text-green-600">75%</div>
                  </div>
                </div>
              </div>

              {/* ROI */}
              <div className="bg-orange-100 p-8">
                <h3 className="text-xl font-bold text-orange-800 mb-6">Retorno de Inversión</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Costo total del servicio</div>
                    <div className="text-3xl font-bold text-gray-900">~$49K USD</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Ratio Beneficio/Costo</div>
                    <div className="text-3xl font-bold text-orange-600">50:1</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Payback</div>
                    <div className="text-3xl font-bold text-orange-600">&lt; 1 día</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center">
            <div className="text-lg font-semibold mb-2">Por cada $1 USD invertido en el servicio móvil</div>
            <div className="text-5xl font-bold mb-2">$50 USD</div>
            <div className="text-lg">en valor de concentrado preservado</div>
          </div>
        </div>
      </section>

      {/* Riesgos Mitigados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Riesgos Mitigados</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Continuidad Operacional</h3>
              </div>
              <p className="text-gray-600 text-sm">Se evitó detener completamente la producción de concentrado, manteniendo 75% de la capacidad</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Infraestructura Estable</h3>
              </div>
              <p className="text-gray-600 text-sm">Menos riesgo de rebases de espesadores y estanques, flujo estable hacia sistemas de carga</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Cumplimiento Comercial</h3>
              </div>
              <p className="text-gray-600 text-sm">Mayor capacidad de cumplir contratos de entrega de concentrado a fundiciones</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Imagen Corporativa</h3>
              </div>
              <p className="text-gray-600 text-sm">Demostración de capacidad de gestión de riesgo operacional frente a casa matriz</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Sin CAPEX Inmediato</h3>
              </div>
              <p className="text-gray-600 text-sm">Solución OPEX flexible en lugar de inversión de capital en segundo filtro fijo</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Respuesta Rápida</h3>
              </div>
              <p className="text-gray-600 text-sm">Implementación en plazos muy inferiores a un proyecto de CAPEX tradicional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Análisis de Sensibilidad */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Análisis de Sensibilidad</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600">El caso se mantiene favorable en diferentes escenarios de precio</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Escenario</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Precio Concentrado</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Valor Preservado</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Ratio B/C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-600">Conservador (-20%)</td>
                  <td className="px-6 py-4 text-center text-gray-900">$1,440/ton</td>
                  <td className="px-6 py-4 text-center text-gray-900">$1.94M USD</td>
                  <td className="px-6 py-4 text-center font-bold text-orange-600">39:1</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-6 py-4 text-gray-900 font-semibold">Base</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold">$1,800/ton</td>
                  <td className="px-6 py-4 text-center text-gray-900 font-semibold">$2.43M USD</td>
                  <td className="px-6 py-4 text-center font-bold text-orange-600">50:1</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Optimista (+20%)</td>
                  <td className="px-6 py-4 text-center text-gray-900">$2,160/ton</td>
                  <td className="px-6 py-4 text-center text-gray-900">$2.92M USD</td>
                  <td className="px-6 py-4 text-center font-bold text-orange-600">59:1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-6">
            En todos los escenarios razonables de precio, la relación beneficio/costo es extremadamente favorable.
          </p>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conclusión del Caso</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-l-4 border-orange-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cerro Negro debía realizar una mantención mayor de 30 días a su filtro de concentrados, sin filtro de respaldo.
              Mediante la contratación del servicio de <span className="font-bold text-orange-600">filtro prensa móvil F-1200-3 de Tec-Ionic</span>,
              la planta logró mantener ~75% de su capacidad, deshidratando ~1,350 ton de concentrado en 30 días.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Esto se tradujo en un <span className="font-semibold">valor preservado de ~$2.43M USD</span>, frente a un costo total del servicio
              del orden de $49K USD, con una <span className="font-semibold">relación beneficio/costo cercana a 50:1</span> y un payback inferior a un día.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-orange-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">$2.43M</div>
                <div className="text-sm text-gray-600 mt-1">Valor Protegido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50:1</div>
                <div className="text-sm text-gray-600 mt-1">Ratio B/C</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">75%</div>
                <div className="text-sm text-gray-600 mt-1">Capacidad Mantenida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">&lt;1 día</div>
                <div className="text-sm text-gray-600 mt-1">Payback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Necesita Respaldo para su Filtración de Concentrados?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Nuestras soluciones móviles de filtración protegen su producción durante mantenciones mayores
            o como respaldo permanente para eliminar cuellos de botella.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-block">
              Solicitar Cotización
            </Link>
            <Link href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block">
              Ver Más Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
