'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Chemistry, Renew, Filter, CheckmarkFilled, Collaborate, Security, Time, FlashFilled, WarningAltFilled } from '@carbon/icons-react'
import { ArrowRight, DollarSign, TrendingUp } from 'lucide-react'

export default function OrganicTreatmentServicePage() {
  const [activeTreatment, setActiveTreatment] = useState('arcilla')
  const [activeBusinessModel, setActiveBusinessModel] = useState('preventivo')

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Nunca pares producción por orgánico degradado
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Equipos móviles que limpian tu orgánico mientras sigues produciendo. Instalamos en 48-72 horas,
                recuperas orgánico perdido, y ahorras hasta $260K USD mensuales. Sin paradas. Sin CAPEX.
              </p>

              <div className="flex items-center gap-4">
                <button className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                  Solicitar Evaluación
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="inline-flex items-center px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                  Ver Caso de Éxito
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/filtro_prensa_movil.png"
                  alt="Filtro prensa móvil TSF instalado en planta SX"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Filtro prensa móvil 1200L instalado en by-pass para diálisis continua
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TEC-IONIC DIFFERENCE */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Restaura orgánico sin parar producción
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conectamos equipos móviles en by-pass de tu circuito SX. Tratamiento continuo mientras sigues extrayendo cobre.
              TIF mejora en 24-48 horas, pérdidas de orgánico caen en primera semana.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="text-3xl font-bold text-gray-900 mb-2">48-72h</div>
              <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">Montaje completo</div>
              <p className="text-gray-700 leading-relaxed">
                Traemos equipos, conectamos a línea orgánica entre settler y strip, arrancamos tratamiento. Tu planta nunca para.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">Operación continua</div>
              <p className="text-gray-700 leading-relaxed">
                Ingenieros Tec-Ionic en faena operan filtros, ajustan dosis arcilla, monitorean TIF/TSF diariamente.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="text-3xl font-bold text-gray-900 mb-2">&lt;4h</div>
              <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">Swap de equipos</div>
              <p className="text-gray-700 leading-relaxed">
                Cuando filtro necesita mantención, traemos uno de respaldo. Cambio rápido, tratamiento nunca se detiene.
              </p>
            </div>
          </div>

          {/* Physical connection diagram */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Conexión física al circuito SX existente</h3>

            <div className="space-y-8">
              {/* Connection point 1 */}
              <div className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 mb-2">Toma desde settler overflow (orgánico cargado)</div>
                  <p className="text-gray-700 mb-3">
                    Conexión con brida Victaulic 2&quot; en línea overflow settler extracción → stripping. By-pass mediante válvula bola,
                    no requiere soldar ni modificar línea principal. Caudal tratamiento típico 2-5 m³/h (10-25% flujo total).
                  </p>
                  <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    <span className="font-semibold">Punto de instalación:</span> Después de settler E-1, antes de bomba de strip.
                    Presión disponible 0.5-1.5 bar suficiente para alimentar filtro.
                  </div>
                </div>
              </div>

              {/* Connection point 2 */}
              <div className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 mb-2">Retorno a settler o línea orgánico limpio</div>
                  <p className="text-gray-700 mb-3">
                    Orgánico tratado retorna aguas arriba del settler (para re-coalescencia) o directo a línea orgánico descargado
                    hacia EW. Bomba centrífuga con control de flujo, interlock con nivel tanque contacto.
                  </p>
                  <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    <span className="font-semibold">Configuración típica:</span> Retorno a entrada settler permite que orgánico
                    tratado pase nuevamente por decantación, mejorando separación de trazas acuosas residuales.
                  </div>
                </div>
              </div>

              {/* Power and utilities */}
              <div className="flex items-start gap-6 bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 mb-2">Servicios requeridos de planta</div>
                  <p className="text-gray-700 mb-3">
                    Potencia eléctrica trifásica 380V (tablero dedicado 200A), aire comprimido 6 bar para actuadores válvulas,
                    agua industrial para lavado membranas filtro (1-2 m³/día).
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 mb-1">Eléctrica</div>
                      <div className="text-gray-600">50-75 kW consumo continuo</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 mb-1">Aire comprimido</div>
                      <div className="text-gray-600">100-200 Nl/min @ 6 bar</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold text-gray-900 mb-1">Agua industrial</div>
                      <div className="text-gray-600">1-2 m³/día (lavados)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footprint */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckmarkFilled className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-2">Huella física: 120 m² aprox (3 trailers + tanque contacto + zona arcilla)</div>
                  <p className="text-gray-700">
                    Instalación típica junto a settlers existentes. Acceso para camión pluma (descarga big-bags arcilla) y tracto
                    (swap equipos). Piso compactado suficiente, no requiere fundaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY MOBILE EQUIPMENT */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Capacidad en 48 horas sin esperar proyectos
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Flota móvil lista para desplegar. Arriendo mensual, no inversión permanente. Swap de equipos sin costo adicional.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Advantage 1: No shutdowns */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <FlashFilled className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cero paradas de planta
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Instalación en bypass mientras operas normalmente. Sin modificar infraestructura permanente.
              </p>
              <div className="text-3xl font-bold text-gray-900">0</div>
              <div className="text-sm text-gray-500">Shutdowns requeridos</div>
            </div>

            {/* Advantage 2: Fast deployment */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Time className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Despliegue en 48-72 horas
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Flota regional lista para movilizar. Sin esperar fabricación ni proyectos largos.
              </p>
              <div className="text-3xl font-bold text-gray-900">2-3</div>
              <div className="text-sm text-gray-500">Días hasta operación</div>
            </div>

            {/* Advantage 3: Zero CAPEX */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-emerald-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sin inversión de capital
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Arriendo mensual todo incluido. Opex, no Capex. Swap de equipos sin costo.
              </p>
              <div className="text-3xl font-bold text-gray-900">$0</div>
              <div className="text-sm text-gray-500">CAPEX inicial</div>
            </div>
          </div>

          {/* Certifications row */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Security className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Equipos Ex-Proof</h4>
                <p className="text-sm text-gray-600">Certificados para zonas de atmósferas explosivas (IEC 60079)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckmarkFilled className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Registro SICEP</h4>
                <p className="text-sm text-gray-600">Certificación gubernamental chilena para proveedores mineros</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <WarningAltFilled className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Sin modificar permisos</h4>
                <p className="text-sm text-gray-600">Equipos móviles no requieren cambios a permisos ambientales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TREATMENT SOLUTIONS */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cuatro tecnologías probadas
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              De prevención continua a recuperación de emergencia
            </p>
          </div>

          {/* Treatment tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTreatment('arcilla')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeTreatment === 'arcilla'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Arcilla Activada
            </button>
            <button
              onClick={() => setActiveTreatment('crud')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeTreatment === 'crud'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Recuperación Crud
            </button>
            <button
              onClick={() => setActiveTreatment('coalescencia')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeTreatment === 'coalescencia'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Coalescencia
            </button>
            <button
              onClick={() => setActiveTreatment('dialisis')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeTreatment === 'dialisis'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Diálisis Continua
            </button>
          </div>

          {/* Treatment content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
            {activeTreatment === 'arcilla' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Chemistry className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Arcilla Activada</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Restaura TIF eliminando compuestos tensioactivos formados por degradación oxidativa
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">TIF &lt;21 a &gt;23 dinas/cm en 24-48h</div>
                        <div className="text-sm text-gray-600">Resultados rápidos visibles</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Dosificación 5-10 kg/m³ según severidad</div>
                        <div className="text-sm text-gray-600">Ajustable a nivel de degradación</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Adsorción selectiva sin afectar extractante</div>
                        <div className="text-sm text-gray-600">Preserva capacidad de extracción</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Mecanismo</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Montmorillonita activada adsorbe compuestos tensioactivos formados por degradación oxidativa del orgánico, restaurando propiedades físico-químicas originales sin afectar extractante ni diluyente.
                  </p>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Equipamiento</div>
                  <p className="text-gray-700 leading-relaxed">
                    Tanque de contacto con agitación, sistema de dosificación controlada, filtro prensa para separación de arcilla saturada.
                  </p>
                </div>
              </div>
            )}

            {activeTreatment === 'crud' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Renew className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Recuperación de Crud</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Centrífuga trifásica Tricanter® separa orgánico, acuoso y sólidos de emulsiones estabilizadas
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">95% orgánico recuperado (crud &gt;50% org)</div>
                        <div className="text-sm text-gray-600">Alta eficiencia de separación</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Hasta 15 m³/hora de capacidad</div>
                        <div className="text-sm text-gray-600">Procesa grandes volúmenes</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Payback típico 4 meses solo en orgánico</div>
                        <div className="text-sm text-gray-600">ROI rápido comprobado</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Separación 3 Fases</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Orgánico limpio → retorna al circuito | Acuoso → refinería o descarte | Sólidos → disposición final. Instalación móvil en trailer, 48-72h puesta en marcha.
                  </p>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Resultado Típico</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">$260K</div>
                      <div className="text-xs text-gray-600">Ahorro mensual caso típico</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">-52%</div>
                      <div className="text-xs text-gray-600">Reducción pérdidas diarias</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTreatment === 'coalescencia' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Filter className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Coalescencia</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Protege electrolito EW y cátodos eliminando orgánico finamente disperso
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Arrastre de 1-3% a &lt;0.5% garantizado</div>
                        <div className="text-sm text-gray-600">Elimina rechazos de cátodos</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Instalación en línea SX → EW</div>
                        <div className="text-sm text-gray-600">Integración sencilla</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Operación continua 24/7</div>
                        <div className="text-sm text-gray-600">Sin interrupciones</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Tecnología</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Medios coalescentes de alto área superficial fuerzan coalescencia de gotas &lt;40 micrones dispersas en acuoso, formando gotas mayores que se separan por gravedad, previniendo contaminación de electrolito EW y rechazos de cátodos.
                  </p>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Beneficio</div>
                  <p className="text-gray-700 leading-relaxed">
                    Cero rechazos de cátodos por contaminación orgánica. Mayor pureza del producto final.
                  </p>
                </div>
              </div>
            )}

            {activeTreatment === 'dialisis' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <Collaborate className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Diálisis Continua</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Prevención 24/7 con filtro prensa en bypass mantiene calidad sin emergencias
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">1200-1500L trata 5-10% flujo en bypass</div>
                        <div className="text-sm text-gray-600">Capacidad adecuada para prevención</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">De 3-4 paradas/año a cero</div>
                        <div className="text-sm text-gray-600">Elimina emergencias</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckmarkFilled className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Mantiene TIF/TSF en spec sin emergencias</div>
                        <div className="text-sm text-gray-600">Operación predecible</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Modo Preventivo</div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Remoción continua de sólidos finos &lt;10 micrones que estabilizan emulsiones y promueven formación de crud. Operación desatendida 24/7 mantiene parámetros en especificación evitando degradación acumulativa.
                  </p>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Resultado</div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                    <div className="text-sm text-gray-600">Paradas emergencia/año</div>
                    <div className="text-xs text-gray-500 mt-2">De 3-4 shutdowns a cero</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRY BREADTH */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Copper */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">Cu</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cobre</h3>
              <p className="text-sm text-gray-600 mb-3">Tratamiento orgánico, filtración borras, limpieza EW</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                20+ plantas activas
              </div>
            </div>

            {/* Zinc */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">Zn</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zinc</h3>
              <p className="text-sm text-gray-600 mb-3">Filtros móviles en circuitos SX-Zn</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Fase expansión
              </div>
            </div>

            {/* Lithium */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-cyan-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">Li</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Litio</h3>
              <p className="text-sm text-gray-600 mb-3">Tratamiento salmueras y sólidos finos</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Operativo
              </div>
            </div>

            {/* Potassium */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Potasio</h3>
              <p className="text-sm text-gray-600 mb-3">Sales minerales y cumplimiento ambiental</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Operativo
              </div>
            </div>

            {/* Crude Oil */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-lg font-bold">Oil</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Petróleo</h3>
              <p className="text-sm text-gray-600 mb-3">Deshidratación borras oleosas</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                Operativo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROOF & RESULTS */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-6">
              CASO DE ÉXITO
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Planta SX Cobre 50,000 t Cu/año
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              18 meses de operación continua con tratamiento integrado: arcilla + centrífuga + filtro prensa
            </p>
          </div>

          {/* Metrics cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">+16%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Mejora TIF</div>
              <div className="text-xs text-gray-500">20.4 → 23.7 dinas/cm</div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">-66%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Reducción TSF</div>
              <div className="text-xs text-gray-500">444s → 153s</div>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">-52%</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Arrastre diario</div>
              <div className="text-xs text-gray-500">6 m³ → 2.9 m³</div>
            </div>

            <div className="bg-white rounded-xl border-2 border-emerald-200 p-6 text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">$260K</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">Ahorro mensual</div>
              <div className="text-xs text-gray-500">Orgánico recuperado</div>
            </div>
          </div>

          {/* Before/After table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Parámetro</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Antes</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Después</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-700">Mejora</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Tensión Interfacial (TIF)</td>
                    <td className="px-6 py-4 text-sm text-gray-600">20.4 dinas/cm</td>
                    <td className="px-6 py-4 text-sm text-gray-600">23.7 dinas/cm</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-700">+16.2%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Tiempo Separación (TSF)</td>
                    <td className="px-6 py-4 text-sm text-gray-600">444 segundos</td>
                    <td className="px-6 py-4 text-sm text-gray-600">153 segundos</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-700">-65.5%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Viscosidad @ 40°C</td>
                    <td className="px-6 py-4 text-sm text-gray-600">7.5 cP</td>
                    <td className="px-6 py-4 text-sm text-gray-600">6.35 cP</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-700">-15%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Arrastre Orgánico Diario</td>
                    <td className="px-6 py-4 text-sm text-gray-600">6 m³/día</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2.9 m³/día</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-700">-52%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Eficiencia Global SX</td>
                    <td className="px-6 py-4 text-sm text-gray-600">77%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">92.16%</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-700">+19.6%</td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">Ahorro Mensual Directo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">—</td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-700">$260,400 USD</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Pérdidas evitadas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Hidden benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios adicionales</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mayor eficiencia de planta</h4>
                <p className="text-sm text-gray-600">Global SX aumenta hasta 92.16% con orgánico en especificación</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Chemistry className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Uso reducido de reactivos</h4>
                <p className="text-sm text-gray-600">Menos químicos correctivos (sulfato ferroso, ácido)</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckmarkFilled className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mejor calidad de cátodo</h4>
                <p className="text-sm text-gray-600">Mayor pureza, menos rechazos por contaminación</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <blockquote className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
              &ldquo;El modelo móvil nos permitió resolver el problema crítico de orgánico degradado sin inversión en infraestructura permanente. En 18 meses recuperamos estabilidad operacional completa.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">OM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Operations Manager</div>
                <div className="text-sm text-gray-600">Planta SX Cobre 50,000 t Cu/año, Segunda Región Chile</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BUSINESS MODELS */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Piloto sin riesgo, escala según resultados
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Prueba con equipos de flota compartida. Valida ROI. Escala a capacidad dedicada cuando tengas confianza.
            </p>
          </div>

          {/* Business model tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveBusinessModel('preventivo')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeBusinessModel === 'preventivo'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Preventivo
            </button>
            <button
              onClick={() => setActiveBusinessModel('crisis')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeBusinessModel === 'crisis'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Crisis
            </button>
            <button
              onClick={() => setActiveBusinessModel('piloto')}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                activeBusinessModel === 'piloto'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Piloto Escalable
            </button>
          </div>

          {/* Business model content */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
            {activeBusinessModel === 'preventivo' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Mantención Preventiva Continua</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Diálisis 24/7 mantiene calidad sin emergencias
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Qué incluye</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Filtro prensa móvil en by-pass continuo 24/7</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Monitoreo semanal TIF/TSF/entrainment</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Arcilla programada por calendario (no reactivo)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Operación, mantención y consumibles incluidos</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-6">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Resultado</div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-5xl font-bold text-emerald-700">0</div>
                        <div className="text-lg text-gray-600">paradas/año</div>
                      </div>
                      <div className="text-sm text-gray-600">De 3-4 emergencias a cero shutdowns</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Ideal para plantas que buscan estabilidad operacional y eliminar contingencias. ROI inmediato en evitar pérdidas por paradas.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeBusinessModel === 'crisis' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Respuesta de Emergencia</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Restaura parámetros críticos en 2-4 semanas
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Qué incluye</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Movilización de flota en 48-72 horas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Tratamiento intensivo con arcilla activada</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Diálisis acelerada hasta recuperación</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckmarkFilled className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Monitoreo diario de parámetros críticos</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Restauración típica</div>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <div className="text-5xl font-bold text-red-700">2-4</div>
                        <div className="text-lg text-gray-600">semanas</div>
                      </div>
                      <div className="text-sm text-gray-600">De orgánico fuera de spec a operación normal</div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Para plantas con TIF &lt;18 dinas/cm o TSF &gt;300s que requieren restauración urgente. Luego puede continuar con modalidad preventiva.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeBusinessModel === 'piloto' && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Escalabilidad Probada</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Inicia pequeño, valida ROI, escala con confianza
                </p>

                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200 p-6 relative">
                    <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Piloto</h4>
                    <p className="text-gray-600 mb-4">Prueba con equipos existentes</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li>• 1 unidad de flota compartida</li>
                      <li>• Prueba de concepto 2-3 meses</li>
                      <li>• Valida ROI y resultados técnicos</li>
                    </ul>
                    <div className="text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-2 rounded-lg inline-block">
                      Bajo riesgo, rápida validación
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl border-2 border-emerald-200 p-6 relative">
                    <div className="absolute top-4 right-4 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Operación Estándar</h4>
                    <p className="text-gray-600 mb-4">Servicio continuo con flota existente</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li>• Equipos de flota regional asignados</li>
                      <li>• Arriendo mensual flexible</li>
                      <li>• Swap de equipos sin costo extra</li>
                    </ul>
                    <div className="text-sm font-semibold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-lg inline-block">
                      Operación probada, sin CAPEX
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-purple-200 p-6 relative">
                    <div className="absolute top-4 right-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Capacidad Dedicada</h4>
                    <p className="text-gray-600 mb-4">Equipamiento a medida para tu operación</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      <li>• Equipos de alta capacidad dedicados</li>
                      <li>• Contrato largo plazo con descuentos</li>
                      <li>• Asociación estratégica</li>
                    </ul>
                    <div className="text-sm font-semibold text-purple-700 bg-purple-100 px-4 py-2 rounded-lg inline-block">
                      Máxima eficiencia y economía
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-8 py-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Evalúa la solución para tu planta
          </h2>
          <p className="text-xl text-emerald-100 mb-4">
            Envíanos muestras de tu orgánico (2L suficiente) para análisis completo: TIF, TSF, viscosidad, densidad, contenido acuoso, y evaluación de tratabilidad
          </p>
          <p className="text-lg text-emerald-100 mb-10">
            En 5 días hábiles recibes diagnóstico técnico completo, recomendación de tratamiento, estimación de resultados, y propuesta económica sin CAPEX
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-xl">
              Solicitar Evaluación Técnica
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors">
              Descargar Caso Completo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
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
