import Link from 'next/link'

export const metadata = {
  title: 'Caso de Éxito: Desborre de Celdas EW en Minera Caserones - Zero Incidentes',
  description: 'Servicio de limpieza de celdas EW a más de 4,200 msnm con cero incidentes y 100% remoción de borras metálicas en Minera Caserones.',
}

export default function LimpiezaCeldasEWCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-slate-500/20 text-slate-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Caso de Éxito - Alta Montaña
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Zero Incidentes de Seguridad
            </h1>
            <p className="text-2xl text-slate-100 mb-8">
              Desborre de Celdas EW en Minera Caserones
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">0</div>
              <div className="text-slate-100">Incidentes de Seguridad</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-slate-100">Remoción de Borras</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">4,200+</div>
              <div className="text-slate-100">Metros de Altitud</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1 celda</div>
              <div className="text-slate-100">Por Día (Meta Cumplida)</div>
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
              <p className="text-lg text-gray-900">SCM Minera Lumina Copper Chile - Caserones</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Ubicación</h3>
              <p className="text-lg text-gray-900">Región de Atacama, +4,200 msnm</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Servicio</h3>
              <p className="text-lg text-gray-900">Desborre integral de celdas EW</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Sistema de Gestión</h3>
              <p className="text-lg text-gray-900">SG-SSSC (Seguridad, Salud, Sustentabilidad)</p>
            </div>
          </div>
        </div>
      </section>

      {/* El Desafío */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">El Desafío</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Limpieza de celdas EW en condiciones extremas de alta montaña
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Problem Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Problema Operacional</h3>
              <p className="text-gray-600 mb-6">
                La acumulación de borras metálicas y orgánicas en el fondo de las celdas durante la operación
                electrolítica genera múltiples problemas que afectan la eficiencia y seguridad del proceso EW.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cortocircuitos</h4>
                    <p className="text-gray-600">Depósitos metálicos generan fallas eléctricas y riesgos de seguridad</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alto consumo eléctrico</h4>
                    <p className="text-gray-600">Borras acumuladas aumentan la resistencia y costos energéticos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Calidad de cátodos</h4>
                    <p className="text-gray-600">Contaminación reduce la pureza del cobre producido</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extreme Conditions */}
            <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Condiciones Extremas</h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-8 h-8 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold text-slate-800">+4,200 msnm</div>
                      <div className="text-sm text-gray-600">Altitud de operación</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Condiciones de hipobaria que requieren protocolos especiales y personal capacitado</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-8 h-8 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <div className="text-lg font-bold text-slate-800">Riesgos Críticos</div>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Riesgo eléctrico en celdas energizadas</li>
                    <li>• Exposición a nieblas ácidas</li>
                    <li>• Riesgo de atrapamiento mecánico</li>
                    <li>• Trabajo en espacios confinados</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex items-center mb-2">
                    <svg className="w-8 h-8 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <div className="text-lg font-bold text-slate-800">Sistema SG-SSSC</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Cumplimiento estricto del Sistema de Gestión de Seguridad, Salud, Sustentabilidad y Comunidades de MLCC</p>
                </div>
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
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología integral de desborre con los más altos estándares de seguridad
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Análisis de Seguridad</h3>
              <p className="text-sm text-gray-600">AST y revisión de parámetros eléctricos/estructurales de cada celda</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Retiro de Electrodos</h3>
              <p className="text-sm text-gray-600">Retiro controlado de 3 cátodos y 3 ánodos para habilitar acceso</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aspirado y Limpieza</h3>
              <p className="text-sm text-gray-600">Succión neumática de borras y limpieza hidráulica a presión controlada</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-slate-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Verificación y Reinstalación</h3>
              <p className="text-sm text-gray-600">Nivelación, reinstalación de electrodos y registro fotográfico</p>
            </div>
          </div>

          {/* Technical Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Equipment */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Equipamiento Especializado</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Aspirado industrial de alta capacidad con bombas neumáticas</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Líneas de mangueras antiestáticas (2-3 pulgadas)</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Filtros prensa móviles para separación sólido-líquido</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Estanques de decantación</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Tableros trifásicos de control</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-slate-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700">Contenedores-bodega con autonomía logística</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Todos los equipos certificados y diseñados para operaciones de alta montaña</p>
            </div>

            {/* Safety & Team */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Gestión de Seguridad</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">EPP Certificado</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Respiradores con filtro P100</li>
                    <li>• Trajes impermeables</li>
                    <li>• Calzado dieléctrico</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Procedimientos</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bloqueo y desenergización (LOTO)</li>
                    <li>• Verificación de gases y ventilación</li>
                    <li>• Permisos especiales (trabajo en caliente, espacios confinados)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Capacitaciones</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• HIPOBARIA (trabajo en altura geográfica)</li>
                    <li>• PREXOR (exposición a ruido)</li>
                    <li>• PLANESI (exposición a sílice)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Info */}
          <div className="mt-8 bg-slate-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-1">7x7</div>
                <div className="text-sm text-gray-600">Jornada diurna (08:00-20:00h)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-1">1 celda/día</div>
                <div className="text-sm text-gray-600">Rendimiento contractual</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-1">APR 3+ años</div>
                <div className="text-sm text-gray-600">Experiencia en minería</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-1">ISOTools</div>
                <div className="text-sm text-gray-600">Trazabilidad y seguimiento</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados Verificables</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Impacto medible en seguridad, calidad y continuidad operacional</p>
          </div>

          {/* Results Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Safety */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Seguridad</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-emerald-600 mb-2">0</div>
                <div className="text-gray-600">Incidentes durante todo el contrato</div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Cumplimiento &quot;Reglas que Salvan Vidas&quot;
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  100% plazos cumplidos
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Adherencia Ley 20.393
                </li>
              </ul>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Calidad</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Remoción de depósitos metálicos</div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Conductividad eléctrica restaurada
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Cátodos dentro de estándar LME
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Registro fotográfico georreferenciado
                </li>
              </ul>
            </div>

            {/* Operations */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Operaciones</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">Sin Detenciones</div>
                <div className="text-gray-600">Continuidad productiva mantenida</div>
              </div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Reducción consumo energético
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Menor riesgo de cortocircuitos
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Planificación escalonada exitosa
                </li>
              </ul>
            </div>
          </div>

          {/* Key Highlight */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-white text-center">
            <p className="text-lg mb-4">
              El modelo operativo de Tec-Ionic demostró ser una alternativa eficiente, de rápida implementación
              y bajo impacto para operaciones en condiciones extremas de alta montaña.
            </p>
            <div className="text-2xl font-bold text-emerald-400">
              Resultados medibles y replicables en otras operaciones del sector
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gestión Ambiental</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Control de Residuos</h3>
              </div>
              <p className="text-sm text-gray-600">Residuos metálicos y aguas contaminadas almacenados en recipientes sellados</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Normativa DS-43</h3>
              </div>
              <p className="text-sm text-gray-600">Disposición conforme a normativa MINSAL vigente</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">PR-SUST Compliance</h3>
              </div>
              <p className="text-sm text-gray-600">Cumplimiento PR-SUST-009 y PR-SUST-010 para sustancias peligrosas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Necesita Servicios de Desborre para su Planta EW?</h2>
          <p className="text-xl text-slate-100 mb-8">
            Nuestro equipo especializado opera en condiciones extremas con los más altos estándares de seguridad.
            Garantizamos resultados medibles y cero incidentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-block">
              Solicitar Cotización
            </Link>
            <Link href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors inline-block">
              Ver Más Casos de Éxito
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
