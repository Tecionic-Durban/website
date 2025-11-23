'use client'

// src/app/industries/crude-oil/page.js - Redesigned with better component/layout design
import { useRouter, usePathname } from 'next/navigation'
import { Droplets, Factory, Shield, CheckCircle, TrendingUp, ArrowRight, Recycle, DollarSign, AlertTriangle, Truck, Settings } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'
import Image from 'next/image'

export default function CrudeOilIndustryPage() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Split layout with equipment photo */}
      <section className="relative overflow-hidden">
        {/* Background with gray/dark gradient + subtle grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(55 65 81) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(55, 65, 81, 0.15) 0%, rgba(75, 85, 99, 0.08) 40%, transparent 70%)'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left - Content */}
            <div className="max-w-xl">
              <div className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded-full mb-6">
                <span className="text-sm font-semibold text-gray-900">Refinerías y Terminales de Petróleo</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                Transforma tus lodos oleosos en hidrocarburos recuperables
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reducimos hasta 84% del volumen de borras y lodos de estanques con <strong className="text-gray-900">equipos móviles certificados, sin inversión CAPEX.</strong> Recupera hidrocarburos valiosos mientras reduces costos de disposición.
              </p>
            </div>

            {/* Right - Large equipment photo */}
            <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/filtro_prensa_movil.png"
                alt="Filtro prensa móvil Tecionic para refinerías"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section - Featured card + breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">El Desafío Operacional</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Lodos de estanques cuestan millones en pérdidas
            </h2>
            <p className="text-xl text-gray-600">
              Borras oleosas acumuladas generan pérdidas operacionales masivas y costos de disposición crecientes
            </p>
          </div>

          {/* Problem cards - Clean 3-column grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            {/* Problem 1: Capacity Loss */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-red-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-3">15-25%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Pérdida capacidad almacenamiento
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Borras acumuladas reducen capacidad efectiva de estanques.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Costo limpieza</div>
                <div className="text-lg font-bold text-gray-900">$500K-$2M</div>
              </div>
            </div>

            {/* Problem 2: Lost Hydrocarbons */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-orange-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-3">60-75%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                HC recuperables perdidos
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hidrocarburos valiosos en borras se pierden como residuo.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Valor perdido anual</div>
                <div className="text-lg font-bold text-gray-900">$1M-$2M</div>
              </div>
            </div>

            {/* Problem 3: Disposal Costs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-yellow-600" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-3">$300-600</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Disposición residuos peligrosos
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Costo por tonelada para disposición certificada de borras.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Costo anual típico</div>
                <div className="text-lg font-bold text-gray-900">$0.6-3M</div>
              </div>
            </div>

          </div>

          {/* Industry scope context */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-black mb-3">Magnitud del desafío en el sector</h3>
                <p className="text-gray-400 text-lg">Basado en análisis de refinerías latinoamericanas</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-3">4.5M+</div>
                  <div className="text-gray-300 text-lg font-medium">kg de residuos anuales por refinería típica</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-3">5</div>
                  <div className="text-gray-300 text-lg font-medium">Áreas críticas de generación de lodos</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-black text-emerald-400 mb-3">$2M+</div>
                  <div className="text-gray-300 text-lg font-medium">Potencial de recuperación anual por sitio</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Capabilities - Bento Box Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wide">Capacidades Críticas</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Infraestructura que se paga sola
            </h2>
            <p className="text-xl text-gray-600">
              Cuatro capacidades críticas que transforman tus borras de pasivo a activo valioso
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-6">

            {/* Feature 1: Zero CAPEX - Wide Card */}
            <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Modelo Financiero
                </span>
                <h3 className="text-3xl lg:text-4xl font-black mt-4 mb-4">
                  $0 inversión inicial
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Servicio 100% OPEX. Sin compra de equipos, sin instalaciones permanentes, sin riesgo de capital.
                </p>
                <div className="flex items-end gap-4">
                  <div className="text-6xl font-black text-emerald-400">$0</div>
                  <div className="text-gray-400 pb-2 text-lg">CAPEX requerido</div>
                </div>
              </div>
            </div>

            {/* Feature 2: Volume Reduction - Narrow Card */}
            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 relative overflow-hidden">
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                Reducción de Volumen
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mt-4 mb-4">
                Hasta 84% reducción
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Reducción certificada de volumen de lodos oleosos deshidratados.
              </p>
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-200">
                <div className="text-5xl font-black text-orange-600 mb-2">84%</div>
                <div className="text-sm text-gray-600 font-medium">Comprobado en laboratorio certificado</div>
              </div>
            </div>

            {/* Feature 3: Speed - Narrow Card */}
            <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 relative overflow-hidden">
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                Velocidad
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mt-4 mb-4">
                Despliegue en 48 horas
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Equipos móviles certificados listos para operar.
              </p>
              <div className="flex items-center gap-6 bg-white rounded-2xl p-6 border-2 border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <div className="text-3xl font-black text-gray-900">2 días</div>
                  <div className="text-sm text-gray-600 font-medium">instalación completa</div>
                </div>
              </div>
            </div>

            {/* Feature 4: Compliance - Wide Card */}
            <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 lg:p-12 relative overflow-hidden">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Cumplimiento
              </span>
              <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mt-4 mb-4">
                Certificación completa incluida
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                Todos los permisos ambientales, seguridad operacional, y cumplimiento regulatorio garantizado.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center">
                  <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-sm font-bold text-gray-900">Certificado ISO</div>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center">
                  <CheckCircle className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-sm font-bold text-gray-900">Cumplimiento Ambiental</div>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-blue-200 text-center">
                  <Settings className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-sm font-bold text-gray-900">Mantención Incluida</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Lab Results Validation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Validación Técnica</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Tecnología validada para lodos de refinería
            </h2>
            <p className="text-xl text-gray-600">
              Pruebas de laboratorio certificadas confirman efectividad en múltiples tipos
              de residuos oleosos del sector refinación
            </p>
          </div>

          {/* Lab results table */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Resultados de pruebas certificadas
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-6 text-gray-900 font-bold">Tipo de lodo</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-bold">Humedad inicial</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-bold">Humedad final</th>
                      <th className="text-center py-4 px-6 text-gray-900 font-bold">Reducción de volumen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-5 px-6 font-medium text-gray-900">Lodos fenólicos</td>
                      <td className="text-center py-5 px-6 text-gray-700">92.59%</td>
                      <td className="text-center py-5 px-6 text-gray-700">53%</td>
                      <td className="text-center py-5 px-6">
                        <span className="inline-block px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-xl">
                          <span className="text-3xl font-black text-emerald-700">84.23%</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-5 px-6 font-medium text-gray-900">Lodos de fenol</td>
                      <td className="text-center py-5 px-6 text-gray-700">90.02%</td>
                      <td className="text-center py-5 px-6 text-gray-700">56%</td>
                      <td className="text-center py-5 px-6">
                        <span className="inline-block px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-xl">
                          <span className="text-3xl font-black text-emerald-700">77.31%</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5 px-6 font-medium text-gray-900">Lodos de proceso (T-2402)</td>
                      <td className="text-center py-5 px-6 text-gray-700">70.37%</td>
                      <td className="text-center py-5 px-6 text-gray-700">55.8%</td>
                      <td className="text-center py-5 px-6">
                        <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-xl">
                          <span className="text-3xl font-black text-blue-700">32.96%</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* What this means - 3 cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Validación técnica</h4>
              <p className="text-gray-600">
                Pruebas en condiciones reales de refinería confirman viabilidad del proceso
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Múltiples aplicaciones</h4>
              <p className="text-gray-600">
                Efectivo en lodos fenólicos, de fenol y de proceso - cobertura integral
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Certificación independiente</h4>
              <p className="text-gray-600">
                Resultados validados por laboratorio especializado externo
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5 Application Areas Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Aplicaciones en refinería
            </h2>
            <p className="text-xl text-gray-300">
              Tecnología móvil aplicable en múltiples puntos críticos de generación
              de lodos oleosos en refinerías de petróleo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Area 1: Delayed Coker */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-5">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Delayed Coker</h3>
              <p className="text-gray-300 mb-4">
                Piscinas decantadoras con flujos de 250-300 m³/hora generan lodos
                de alta densidad con hidrocarburos recuperables
              </p>
              <div className="text-sm text-emerald-400 font-semibold">
                → Filtración en continuo, sin parada
              </div>
            </div>

            {/* Area 2: FCC Wet Gas Scrubber */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">FCC Wet Gas Scrubber</h3>
              <p className="text-gray-300 mb-4">
                Plantas de clarificación (14.4 m³/h) acumulan sólidos finos
                en recirculación que requieren purga continua
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                → Clarificación optimizada
              </div>
            </div>

            {/* Area 3: Tank Cleaning */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-5">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Limpieza de estanques</h3>
              <p className="text-gray-300 mb-4">
                Estanques de crudo y productos acumulan lodos de fondo con
                alto contenido de hidrocarburos
              </p>
              <div className="text-sm text-purple-400 font-semibold">
                → Recuperación de capacidad
              </div>
            </div>

            {/* Area 4: Effluent Treatment */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tratamiento de efluentes</h3>
              <p className="text-gray-300 mb-4">
                Plantas de tratamiento industrial generan lodos con contenido
                orgánico que requieren deshidratación
              </p>
              <div className="text-sm text-amber-400 font-semibold">
                → Reducción de volumen 70-84%
              </div>
            </div>

            {/* Area 5: API Separators */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-5">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Separadores API y DAF</h3>
              <p className="text-gray-300 mb-4">
                Sistemas API y DAF acumulan grasas y sólidos flotantes
                que se convierten en residuo peligroso
              </p>
              <div className="text-sm text-cyan-400 font-semibold">
                → Conversión a torta sólida
              </div>
            </div>

            {/* Area 6: Other Applications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Otras aplicaciones</h3>
              <p className="text-gray-300 mb-4">
                Desaladores, filtros de proceso, limpieza de equipos -
                cualquier punto de generación de lodos oleosos
              </p>
              <div className="text-sm text-gray-400 font-semibold">
                → Solución integral
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Benefits Section - Clean card design */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Beneficios Operacionales</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-4">
              Beneficios para el sector refinación
            </h2>
            <p className="text-xl text-gray-600">
              Tecnología móvil certificada transforma residuos en activos recuperables
            </p>
          </div>

          {/* Primary benefits - 2 column */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 mb-10">

            {/* Benefit 1: HC Recovery */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-10 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Recuperación máxima HC
                    </h3>
                    <p className="text-emerald-700 font-semibold">
                      Captura valor perdido en borras
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">84% reducción de volumen</strong> en lodos oleosos deshidratados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Hidrocarburos recuperables</strong> retornan a proceso para monetización
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Procesamiento continuo</strong> sin parada de operaciones
                    </span>
                  </li>
                </ul>
                <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-black mb-1">$2M+</div>
                  <div className="text-emerald-100 font-medium">Potencial de recuperación anual por sitio</div>
                  <div className="text-sm text-emerald-200 mt-2">
                    Basado en 4.5M+ kg residuos/año × valor HC
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2: Cost Reduction */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-white p-10 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Reducción costos disposición
                    </h3>
                    <p className="text-blue-700 font-semibold">
                      Menos residuos = menos gasto
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Hasta 84% reducción</strong> de volumen residuos post-deshidratación
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Tortas sólidas secas</strong> con humedad reducida para disposición económica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Cumplimiento ambiental</strong> garantizado con manejo certificado
                    </span>
                  </li>
                </ul>
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-black mb-1">$0.6-3M</div>
                  <div className="text-blue-100 font-medium">Reducción costos disposición/año</div>
                  <div className="text-sm text-blue-200 mt-2">
                    84% menos volumen @ $300-600/ton
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary benefits - 2 column smaller cards */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Infraestructura móvil sin CAPEX</h3>
                  <p className="text-sm text-purple-700 font-medium">Modelo OPEX predecible</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Equipos móviles incluyen filtros prensa, bombas y sistemas completos. Sin inversión permanente de la refinería.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
                <CheckCircle className="w-4 h-4" />
                <span>Despliegue en 1-2 semanas</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Certificación ex-proof</h3>
                  <p className="text-sm text-gray-700 font-medium">Zonas clasificadas</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Equipos certificados para operar en Clase I, Div 1. Cumplimiento normativo total para refinerías.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                <span>100% equipos certificados</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Comparison Section - Side-by-side layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8">

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Infraestructura fija vs tecnología móvil certificada
            </h2>
            <p className="text-xl text-gray-600">
              Comparación de inversión, tiempo de implementación y flexibilidad operacional
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

            {/* Traditional Model */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Factory className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Modelo Tradicional</h3>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">CAPEX $2M-$5M infraestructura</div>
                    <div className="text-sm text-gray-600">Filtros, bombas, obras civiles, instalación</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">6-12 meses instalación</div>
                    <div className="text-sm text-gray-600">Larga espera antes de procesar borras</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Equipos ociosos entre campañas</div>
                    <div className="text-sm text-gray-600">Capital inmovilizado sin generar valor</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Personal propio + mantención</div>
                    <div className="text-sm text-gray-600">OPEX fijo + riesgo técnico interno</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="text-sm text-red-700 font-semibold mb-1">Inversión total típica</div>
                <div className="text-4xl font-black text-red-700">$2M-$5M</div>
                <div className="text-sm text-red-600 mt-1">CAPEX + instalación + permisos</div>
              </div>
            </div>

            {/* Mobile Technology Model */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-10 border-2 border-emerald-300 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tecnología Móvil</h3>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Cero CAPEX para refinería</div>
                    <div className="text-sm text-gray-700">Modelo OPEX cubre equipos, operación y mantención integral</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">1-2 semanas despliegue</div>
                    <div className="text-sm text-gray-700">Inicio rápido, recuperación de HC inmediata</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Capacidad flexible y escalable</div>
                    <div className="text-sm text-gray-700">Ajuste de equipos según volumen sin CAPEX adicional</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Personal especializado incluido</div>
                    <div className="text-sm text-gray-700">Operación 24/7 con expertise certificado, cero riesgo técnico</div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                <div className="text-sm font-semibold text-emerald-100 mb-1">Inversión cliente</div>
                <div className="text-5xl font-black">$0</div>
                <div className="text-sm text-emerald-100 mt-1">
                  Capital disponible para core business
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Recupere valor de sus borras oleosas
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Nuestros ingenieros pueden evaluar su operación y diseñar solución móvil para máxima recuperación de hidrocarburos y mínimos costos disposición
          </p>
          <button
            onClick={() => handleContactClick(router, pathname)}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            Solicitar evaluación técnica
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  )
}
