import Link from 'next/link'

export const metadata = {
  title: 'Caso de Estudio: Filtración de Sólidos Finos para Producción de Yoduro',
  description: 'Descubra cómo la filtración de sólidos finos aseguró la continuidad operacional y calidad del producto en una planta de producción de yoduro.',
}

export default function SolidosFinosYoduroCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Operational Continuity First */}
      <section className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Caso de Estudio Real - Industria Química
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              100% Continuidad Operacional
            </h1>
            <p className="text-2xl text-cyan-100 mb-8">
              Filtración de Sólidos Finos para Producción de Yoduro
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">100%</div>
              <div className="text-cyan-100">Continuidad Operacional</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">24/7</div>
              <div className="text-cyan-100">Monitoreo Continuo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">&lt;5 NTU</div>
              <div className="text-cyan-100">Turbidez Controlada</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Industria</h3>
              <p className="text-lg text-gray-900">Química - Producción de Yoduro</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Servicio</h3>
              <p className="text-lg text-gray-900">Remoción de sólidos finos</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Objetivo</h3>
              <p className="text-lg text-gray-900">Control de turbidez y calidad de producto</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Resultado</h3>
              <p className="text-lg text-gray-900">Continuidad operacional asegurada</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">El Desafío</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantener la pureza del proceso en una planta de producción de yoduro
              donde la contaminación por sólidos finos puede comprometer la calidad del producto final
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Problemática Identificada</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Presencia de Sólidos Finos</h4>
                    <p className="text-gray-600">Partículas submicrónicas que pasan los sistemas de filtración convencionales</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Riesgo de Contaminación</h4>
                    <p className="text-gray-600">Cualquier contaminación afecta directamente la pureza del yoduro producido</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Variabilidad del Proceso</h4>
                    <p className="text-gray-600">Fluctuaciones en la carga de sólidos que dificultan el control continuo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos del Cliente</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sin Interrupción de Producción</h4>
                    <p className="text-gray-600">La solución no puede afectar la operación continua de la planta</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Control de Turbidez</h4>
                    <p className="text-gray-600">Mantener niveles bajos y consistentes de turbidez en el proceso</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitoreo en Tiempo Real</h4>
                    <p className="text-gray-600">Visibilidad constante del estado del proceso de filtración</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Solución</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistema móvil de filtración con monitoreo continuo de turbidez,
              diseñado para operar sin afectar la producción
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Filtración Especializada</h3>
              <p className="text-gray-600">
                Sistema de filtración de alta eficiencia para captura de partículas
                submicrónicas sin reducir el flujo de proceso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoreo de Turbidez</h3>
              <p className="text-gray-600">
                Sensores en línea para medición continua de turbidez con alertas
                automáticas ante desviaciones de los parámetros.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operación Continua</h3>
              <p className="text-gray-600">
                Diseño que permite cambio de filtros y mantenimiento sin
                interrumpir el flujo de producción.
              </p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Flujo del Proceso</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200 w-full md:w-auto">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900">Entrada</h4>
                <p className="text-sm text-gray-600">Flujo con sólidos finos</p>
              </div>
              <svg className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200 w-full md:w-auto">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900">Filtración</h4>
                <p className="text-sm text-gray-600">Remoción de partículas</p>
              </div>
              <svg className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200 w-full md:w-auto">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900">Monitoreo</h4>
                <p className="text-sm text-gray-600">Control de turbidez</p>
              </div>
              <svg className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200 w-full md:w-auto">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Salida</h4>
                <p className="text-sm text-gray-600">Flujo clarificado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados Obtenidos</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-gray-900 font-medium mb-1">Continuidad</div>
              <div className="text-sm text-gray-600">Sin interrupciones de producción</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">&lt;5</div>
              <div className="text-gray-900 font-medium mb-1">NTU</div>
              <div className="text-sm text-gray-600">Turbidez controlada</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-900 font-medium mb-1">Monitoreo</div>
              <div className="text-sm text-gray-600">Control en tiempo real</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">0</div>
              <div className="text-gray-900 font-medium mb-1">Rechazos</div>
              <div className="text-sm text-gray-600">Por contaminación de producto</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Calidad Asegurada</h3>
              <p className="text-gray-600">
                La remoción efectiva de sólidos finos garantiza que el yoduro producido
                cumple con las especificaciones de pureza requeridas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respuesta Rápida</h3>
              <p className="text-gray-600">
                El sistema de alertas permite identificar y corregir desviaciones
                antes de que afecten la calidad del producto.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Costo-Efectivo</h3>
              <p className="text-gray-600">
                Evitar rechazos de producto y paradas no programadas representa
                un retorno significativo sobre la inversión en filtración.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value for Chemical Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Soluciones para la Industria Química</h2>
                <p className="text-cyan-100 mb-6">
                  La industria química requiere niveles de pureza y control que los sistemas
                  convencionales no siempre pueden garantizar. Nuestras soluciones móviles
                  de filtración se adaptan a las necesidades específicas de cada proceso.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipos certificados para uso en plantas químicas</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Materiales compatibles con procesos corrosivos</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Instrumentación para monitoreo en tiempo real</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personal capacitado en protocolos de seguridad</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">5+</div>
                  <div className="text-cyan-100 text-sm">Plantas químicas atendidas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">ISO</div>
                  <div className="text-cyan-100 text-sm">Procesos certificados</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">0</div>
                  <div className="text-cyan-100 text-sm">Incidentes de seguridad</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">100%</div>
                  <div className="text-cyan-100 text-sm">Satisfacción del cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesita filtración especializada para su proceso químico?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Cada proceso químico tiene requisitos únicos. Permítanos diseñar una solución
            de filtración que asegure la calidad de su producto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Solicitar consulta
            </Link>
            <Link
              href="/casos-de-exito"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-700 transition-colors"
            >
              Ver más casos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
