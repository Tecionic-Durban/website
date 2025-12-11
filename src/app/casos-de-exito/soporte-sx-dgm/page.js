import Link from 'next/link'

export const metadata = {
  title: 'Caso de Estudio: 8 Años de Soporte SX en DGM CODELCO - 96% Recuperación',
  description: 'Descubra cómo el soporte continuo de planta SX durante 8 años logró mantener 96% de recuperación y 2.6% de reposición de orgánico en División Gabriela Mistral.',
}

export default function SoporteSXDGMCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Long-term Partnership First */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-emerald-500/20 text-emerald-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Caso de Estudio Real - CODELCO DGM
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              8 Años de Operación Continua
            </h1>
            <p className="text-2xl text-emerald-100 mb-8">
              Soporte Integral de Planta SX - División Gabriela Mistral
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">96%</div>
              <div className="text-emerald-100">Recuperación Cu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">2.6%</div>
              <div className="text-emerald-100">Reposición Orgánico</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">29.5</div>
              <div className="text-emerald-100">TIF (dinas/cm)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">18+</div>
              <div className="text-emerald-100">Años Experiencia TSF</div>
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
              <p className="text-lg text-gray-900">CODELCO - División Gabriela Mistral (DGM)</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Duración</h3>
              <p className="text-lg text-gray-900">8 años de operación continua</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Servicio</h3>
              <p className="text-lg text-gray-900">Soporte integral de planta SX</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Industria</h3>
              <p className="text-lg text-gray-900">Minería del Cobre - SX/EW</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alianza Estratégica de Largo Plazo</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde hace más de 8 años, TSF ha sido el socio estratégico de CODELCO DGM para el mantenimiento
              y optimización de su planta de extracción por solventes, asegurando resultados consistentes año tras año.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Timeline Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Historia de la Colaboración</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inicio de Operaciones</h4>
                    <p className="text-gray-600">Contrato inicial para servicios de filtrado y desborre en planta SX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-emerald-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expansión de Servicios</h4>
                    <p className="text-gray-600">Incorporación de diálisis de orgánico y campañas programadas de tratamiento</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-emerald-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Soporte Integral</h4>
                    <p className="text-gray-600">Modelo de servicio completo con monitoreo continuo y respuesta inmediata</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-emerald-600 font-bold">8+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hoy</h4>
                    <p className="text-gray-600">8 años de operación continua con resultados consistentes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Provided Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Servicios Proporcionados</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Remoción de Borras</span>
                    <p className="text-sm text-gray-600">Limpieza continua de emulsiones y crud</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Diálisis de Orgánico</span>
                    <p className="text-sm text-gray-600">Tratamiento para regeneración de fase orgánica</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Campañas Programadas</span>
                    <p className="text-sm text-gray-600">Tratamientos preventivos según calendario</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50 rounded-lg">
                  <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Filtrado Continuo</span>
                    <p className="text-sm text-gray-600">Remoción de sólidos finos del circuito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Parameters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parámetros Técnicos Alcanzados</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados consistentes que demuestran la efectividad del soporte continuo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* TIF Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Tensión Interfacial (TIF)</h3>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Óptimo
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-5xl font-bold text-emerald-600 mb-2">29.5</div>
                  <div className="text-gray-600">dinas/cm</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Orgánico fresco:</div>
                  <div className="text-lg font-semibold text-gray-700">30-32 dinas/cm</div>
                  <div className="text-sm text-emerald-600 mt-2">≈ 98% del valor ideal</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <p className="text-sm text-gray-600">
                  Un TIF cercano al orgánico fresco indica mínima degradación química y
                  excelente separación de fases en los mezcladores-decantadores.
                </p>
              </div>
            </div>

            {/* TSF Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Tiempo de Separación de Fases (TSF)</h3>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Dentro de Norma
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Continuidad Orgánica</div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">70</div>
                  <div className="text-gray-600">segundos</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Continuidad Acuosa</div>
                  <div className="text-4xl font-bold text-blue-600 mb-1">92</div>
                  <div className="text-gray-600">segundos</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ambos valores bajo el máximo permitido de 120 segundos
                </div>
              </div>
            </div>
          </div>

          {/* Recovery and Replacement */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">96%</h3>
                  <p className="text-gray-600">Recuperación de Cobre</p>
                </div>
              </div>
              <p className="text-gray-600">
                La alta recuperación de cobre se mantiene consistentemente gracias al control
                riguroso de la calidad del orgánico y la prevención de arrastres excesivos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">2.6%</h3>
                  <p className="text-gray-600">Reposición de Orgánico Anual</p>
                </div>
              </div>
              <p className="text-gray-600">
                Una tasa de reposición baja indica mínimas pérdidas por degradación química y
                arrastres, reduciendo significativamente los costos operacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Delivered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Valor Entregado</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estabilidad Operacional</h3>
              <p className="text-gray-600">
                8 años sin interrupciones mayores gracias al mantenimiento preventivo y
                respuesta rápida ante contingencias.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reducción de Costos</h3>
              <p className="text-gray-600">
                Tasa de reposición de orgánico del 2.6% vs. industria típica de 5-8%,
                representando ahorros significativos en insumos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relación de Confianza</h3>
              <p className="text-gray-600">
                Renovación continua del contrato año tras año, demostrando la satisfacción
                del cliente con los resultados entregados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TSF Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Más de 18 Años de Experiencia en SX</h2>
                <p className="text-emerald-100 mb-6">
                  El caso de DGM es parte de una trayectoria de más de 18 años de TSF
                  proporcionando servicios especializados de mantenimiento de fase orgánica
                  a las principales operaciones mineras de Chile y Latinoamérica.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipos móviles de alta tecnología</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personal altamente capacitado</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Respuesta en 24-48 horas</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contratos flexibles según necesidad</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-300 mb-2">18+</div>
                  <div className="text-emerald-100 text-sm">Años en el mercado</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-300 mb-2">50+</div>
                  <div className="text-emerald-100 text-sm">Proyectos completados</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-300 mb-2">15+</div>
                  <div className="text-emerald-100 text-sm">Plantas SX atendidas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-300 mb-2">24/7</div>
                  <div className="text-emerald-100 text-sm">Soporte disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Busca un socio de largo plazo para su planta SX?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Nuestro modelo de soporte continuo garantiza resultados consistentes y
            reduce sus costos operacionales. Conversemos sobre cómo podemos ayudarle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Solicitar consulta
            </Link>
            <Link
              href="/casos-de-exito"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
            >
              Ver más casos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
