export const metadata = {
  title: 'Caso de Estudio: Deshidratación de Lodos Petroleros - ENAP Refinería Concón',
  description: 'Validación técnica de sistema móvil de filtración para reducción volumétrica de lodos petroleros. 84% reducción en planta fenólica, 77% en fenoles, y 33% en T-2402.',
}

export default function ENAPLodosPetroleroCase() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-slate-500/20 text-slate-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Validación Técnica · Petróleo Crudo
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              35-85% Reducción Volumétrica
            </h1>
            <p className="text-2xl text-slate-100 mb-8">
              Deshidratación de Lodos Petroleros - ENAP Refinería Concón
            </p>
          </div>

          {/* Key Stats Bar */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">84%</div>
              <div className="text-slate-100">Reducción Lodos Fenólica</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">77%</div>
              <div className="text-slate-100">Reducción Lodos Fenoles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">3 meses</div>
              <div className="text-slate-100">Validación Técnica</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Cliente</h3>
              <p className="text-lg text-gray-900">ENAP Refinería Concón</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Industria</h3>
              <p className="text-lg text-gray-900">Refinación de Petróleo Crudo</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Objetivo</h3>
              <p className="text-lg text-gray-900">Reducir costos de disposición mediante deshidratación de lodos</p>
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
              4.5+ millones kg/año de lodos petroleros con alta humedad generan costos excesivos de transporte y disposición
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Alta Humedad */}
            <div className="bg-slate-100 border-l-4 border-slate-900 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-slate-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Alta Humedad</h3>
              </div>
              <p className="text-gray-700">70-92% contenido de agua</p>
              <p className="text-sm text-gray-600 mt-2">Incrementa peso y volumen de transporte</p>
            </div>

            {/* Alto Volumen */}
            <div className="bg-slate-100 border-l-4 border-slate-900 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-slate-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Alto Volumen Generado</h3>
              </div>
              <p className="text-gray-700">4.5M kg/año</p>
              <p className="text-sm text-gray-600 mt-2">Tres corrientes críticas de proceso</p>
            </div>

            {/* Costos Logísticos */}
            <div className="bg-slate-50 border-l-4 border-slate-700 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <svg className="w-8 h-8 text-slate-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">Altos Costos</h3>
              </div>
              <p className="text-gray-700">Disposición y transporte</p>
              <p className="text-sm text-gray-600 mt-2">Costos logísticos elevados por alta humedad</p>
            </div>
          </div>

          {/* Three Sludge Streams */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Tres Corrientes Críticas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <div className="text-5xl font-bold text-slate-700 mb-2">92.59%</div>
                <div className="text-sm font-semibold text-slate-600 mb-3">Humedad Inicial</div>
                <div className="text-lg font-bold text-gray-900">Lodos Planta Fenólica</div>
                <div className="mt-3 text-sm text-gray-600">Corriente más crítica</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <div className="text-5xl font-bold text-slate-700 mb-2">90.02%</div>
                <div className="text-sm font-semibold text-slate-600 mb-3">Humedad Inicial</div>
                <div className="text-lg font-bold text-gray-900">Lodos Planta Fenoles</div>
                <div className="mt-3 text-sm text-gray-600">Segunda corriente prioritaria</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                <div className="text-5xl font-bold text-slate-700 mb-2">70.37%</div>
                <div className="text-sm font-semibold text-slate-600 mb-3">Humedad Inicial</div>
                <div className="text-lg font-bold text-gray-900">Lodos T-2402</div>
                <div className="mt-3 text-sm text-gray-600">Tercera corriente evaluada</div>
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
              Validación técnica de laboratorio sin inversión del cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Enfoque Innovador */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-slate-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                Enfoque Innovador
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-700">
                    <span className="font-semibold">Sin inversión del cliente</span> - validación técnica con equipos de TecIonic
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-700">
                    <span className="font-semibold">Pruebas de laboratorio</span> con filtros equivalentes a escala industrial
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-slate-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-700">
                    <span className="font-semibold">Caracterización fisicoquímica</span> completa de tres corrientes
                  </div>
                </li>
              </ul>
            </div>

            {/* Tecnología Aplicada */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="bg-amber-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Tecnología Aplicada
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="text-gray-700">
                    <span className="font-semibold">Filtración móvil bajo vacío</span> - tecnología portátil y flexible
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="text-gray-700">
                    <span className="font-semibold">Filtro prensa industrial</span> - simulación a escala real
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="text-gray-700">
                    <span className="font-semibold">Sistemas de centrífuga</span> - evaluación de alternativas
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Opportunities */}
          <div className="bg-slate-50 border-l-4 border-slate-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 text-slate-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              5 Oportunidades Adicionales Identificadas
            </h3>
            <p className="text-gray-700">
              Durante el estudio se identificaron aplicaciones en <span className="font-semibold">Delayed Coker, FCC, tratamiento de efluentes, separadores API y tanques de almacenamiento</span>,
              ampliando el potencial de impacto de la tecnología móvil de filtración en la refinería.
            </p>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados de Validación</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Reducción volumétrica comprobada en tres corrientes de lodos</p>
          </div>

          {/* Results by Sludge Type */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Planta Fenólica */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-amber-400">
              <div className="text-center mb-6">
                <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Mejor Resultado
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lodos Planta Fenólica</h3>
              </div>

              <div className="space-y-6">
                <div className="text-center bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6">
                  <div className="text-6xl font-bold text-amber-600 mb-2">84.23%</div>
                  <div className="text-lg font-semibold text-gray-700">Reducción Volumétrica</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">Humedad Inicial</div>
                    <div className="text-3xl font-bold text-red-600">92.59%</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">Humedad Final</div>
                    <div className="text-3xl font-bold text-green-600">53%</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Mayor eficiencia de deshidratación lograda
                  </p>
                </div>
              </div>
            </div>

            {/* Planta Fenoles */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Segundo Resultado
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lodos Planta Fenoles</h3>
              </div>

              <div className="space-y-6">
                <div className="text-center bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-6">
                  <div className="text-6xl font-bold text-slate-600 mb-2">77.31%</div>
                  <div className="text-lg font-semibold text-gray-700">Reducción Volumétrica</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">Humedad Inicial</div>
                    <div className="text-3xl font-bold text-red-600">90.02%</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">Humedad Final</div>
                    <div className="text-3xl font-bold text-green-600">56%</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Excelente reducción de humedad
                  </p>
                </div>
              </div>
            </div>

            {/* T-2402 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Tercer Resultado
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lodos T-2402</h3>
              </div>

              <div className="space-y-6">
                <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
                  <div className="text-6xl font-bold text-blue-600 mb-2">32.96%</div>
                  <div className="text-lg font-semibold text-gray-700">Reducción Volumétrica</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">Humedad Inicial</div>
                    <div className="text-3xl font-bold text-red-600">70.37%</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">Humedad Final</div>
                    <div className="text-3xl font-bold text-green-600">55.8%</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Menor humedad inicial, sigue siendo efectivo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impacto Global de la Deshidratación</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Antes del Tratamiento</h4>
                <div className="space-y-3 bg-red-50 p-6 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Volumen anual de lodos:</span>
                    <span className="font-semibold text-gray-900">4.5M kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Humedad promedio:</span>
                    <span className="font-semibold text-gray-900">70-92%</span>
                  </div>
                  <div className="flex justify-between border-t border-red-200 pt-2">
                    <span className="text-gray-700 font-semibold">Costo disposición:</span>
                    <span className="font-bold text-red-600 text-lg">Alto</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Con Tecnología Móvil de Filtración</h4>
                <div className="space-y-3 bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Reducción volumétrica:</span>
                    <span className="font-semibold text-gray-900">35-85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Humedad final:</span>
                    <span className="font-semibold text-gray-900">53-56%</span>
                  </div>
                  <div className="flex justify-between border-t border-green-200 pt-2">
                    <span className="text-gray-700 font-semibold">Costo disposición:</span>
                    <span className="font-bold text-green-600 text-lg">Optimizado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-600">↓40-85%</div>
                  <div className="text-sm text-gray-700 mt-1">Reducción viajes transporte</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">53-56%</div>
                  <div className="text-sm text-gray-700 mt-1">Humedad final óptima</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">5</div>
                  <div className="text-sm text-gray-700 mt-1">Oportunidades adicionales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ventajas Competitivas de la Solución</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Sin Inversión del Cliente</h3>
              </div>
              <p className="text-gray-700 text-sm">Validación técnica sin compromiso de capital, reduciendo riesgo financiero</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="bg-slate-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Tecnología Móvil</h3>
              </div>
              <p className="text-gray-700 text-sm">Equipos portátiles permiten operar en múltiples puntos de la refinería</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Reducción de Costos Logísticos</h3>
              </div>
              <p className="text-gray-700 text-sm">Menor volumen y peso reducen dramáticamente costos de transporte y disposición</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Potencial Recuperación de Agua</h3>
              </div>
              <p className="text-gray-700 text-sm">Agua extraída puede reutilizarse en procesos industriales de la refinería</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Escalabilidad Comprobada</h3>
              </div>
              <p className="text-gray-700 text-sm">20+ años de experiencia en minería aplicada al sector petrolero</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Múltiples Aplicaciones</h3>
              </div>
              <p className="text-gray-700 text-sm">5 oportunidades adicionales identificadas en procesos de refinería</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conclusión Técnica</h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-8 border-l-4 border-slate-600">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La validación técnica realizada por <span className="font-bold text-slate-600">Tec-Ionic Durban</span> en ENAP Refinería Concón demuestra
              la viabilidad de <span className="font-semibold">reducir significativamente el volumen de lodos petroleros mediante tecnología móvil de filtración</span>,
              con reducciones volumétricas que van desde 32.96% hasta 84.23% dependiendo de la corriente.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Esta solución permite a ENAP <span className="font-semibold">evaluar la tecnología sin inversión de capital</span>, reducir costos de transporte y disposición,
              y potencialmente recuperar agua para reutilización. La identificación de 5 oportunidades adicionales en diferentes procesos de la refinería
              amplía el potencial impacto de la tecnología móvil de filtración en el sector petrolero.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">84%</div>
                <div className="text-sm text-gray-600 mt-1">Reducción Máxima</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">53-56%</div>
                <div className="text-sm text-gray-600 mt-1">Humedad Final</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">3</div>
                <div className="text-sm text-gray-600 mt-1">Corrientes Validadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">5</div>
                <div className="text-sm text-gray-600 mt-1">Oportunidades Más</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Necesita Reducir Costos de Disposición de Lodos?</h2>
          <p className="text-xl text-slate-100 mb-8">
            Nuestros especialistas pueden ayudarle a validar soluciones de deshidratación sin inversión inicial,
            con tecnología móvil comprobada en minería y sector petrolero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors inline-block">
              Solicitar Evaluación Técnica
            </a>
            <a href="/casos-de-exito" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-colors inline-block">
              Ver Más Casos de Éxito
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
