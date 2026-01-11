'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { RainDrop, Chemistry, Industry, CheckmarkFilled, ArrowRight, Time, UserMultiple, Tools, Recycle, Growth, Settings } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LithiumIndustryPage() {
  const locale = useLocale()
  const stickyScrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !stickyScrollRef.current || !scrollContentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(stickyScrollRef.current, {
        backgroundColor: 'rgb(236, 254, 255)',
        scrollTrigger: {
          trigger: scrollContentRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 2,
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* Hero - The Race */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 182 212) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1]">
                Tu piloto DLE no puede esperar 18 meses por filtración
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                La carrera del litio se gana con velocidad. Mientras otros esperan obra civil,
                permisos y comisionamiento, tú podrías estar generando datos de proceso reales.
                Tecionic llega en semanas con todo lo necesario para operar.
              </p>
            </div>

            <div className="relative lg:h-[450px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/filtro_prensa_movil.png"
                alt="Equipos móviles de filtración Tecionic"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Stakes - Why This Matters */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                DLE va a ganar. Pero DLE exige salmuera impecable.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                La extracción directa de litio está reemplazando las pozas de evaporación.
                Reduce meses a días, consume menos agua, tiene menor huella. Los proyectos que dominen DLE
                van a liderar el mercado.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Pero hay un problema: las membranas y adsorbentes DLE son sensibles.
                Arcillas, sólidos suspendidos, precipitados de magnesio - cualquier contaminante
                reduce eficiencia y acorta vida útil de equipos que cuestan una fortuna.
              </p>
              <p className="text-lg text-white font-semibold">
                La separación sólido-líquido no es opcional. Es el habilitador de tu proceso DLE.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-cyan-500 pl-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">El problema tradicional</div>
                <div className="text-gray-300">
                  Construir infraestructura de filtración fija toma 12-18 meses y varios millones de dólares.
                  Tu piloto queda en pausa. Tu ventana de oportunidad se cierra.
                </div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">El problema de escala</div>
                <div className="text-gray-300">
                  Dimensionas para tu capacidad futura y pagas por equipos que no usas.
                  O dimensionas para hoy y quedas corto cuando escalas.
                </div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <div className="text-2xl font-bold text-cyan-400 mb-2">El problema de capital</div>
                <div className="text-gray-300">
                  Cada dólar que inviertes en filtración es un dólar que no va a capacidad extractiva.
                  Tu directorio quiere ver litio producido, no fierro instalado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tecionic Answer */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              Tecionic elimina estos tres problemas de un golpe
            </h2>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Llegamos con equipos listos, personal que los opera, mantención incluida, y escalamos contigo.
              Tú pagas una tarifa mensual por capacidad de filtración funcionando. Cero CAPEX. Cero espera. Cero rigidez.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props - What You Get */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
            Lo que significa trabajar con Tecionic
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Speed */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Time size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Arrancas en semanas, no en años</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tus competidores están esperando permisos de construcción. Tú ya tienes centrífugas clarificando salmuera.
                  Tu piloto genera datos mientras otros todavía están en ingeniería de detalle.
                  Esa ventaja de tiempo puede definir quién lidera el mercado.
                </p>
              </div>
            </div>

            {/* Capital */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Growth size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Tu capital produce litio, no fierro</h3>
                <p className="text-gray-600 leading-relaxed">
                  En vez de inmovilizar millones en equipos de filtración, ese capital va a expandir tu capacidad extractiva.
                  La filtración la resuelve Tecionic con OPEX predecible. Tu balance queda limpio,
                  tu directorio ve inversión en producción.
                </p>
              </div>
            </div>

            {/* Flexibility */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Settings size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Escalas cuando quieres, no cuando puedes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tu proyecto crece de piloto a demostración a comercial. ¿Necesitas más capacidad? Agregamos equipos.
                  ¿Cambió el plan? Ajustamos. No hay fierro sobredimensionado comiendo depreciación,
                  ni infraestructura insuficiente frenando tu crecimiento.
                </p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <UserMultiple size={32} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Te enfocas en litio, nosotros en filtración</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro equipo opera los equipos, hace la mantención, resuelve los problemas.
                  Tu gente se dedica a lo que sabe: optimizar extracción, no a aprender sobre centrífugas.
                  23 años haciendo esto nos dieron la experiencia que tú no necesitas desarrollar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Tecionic Works */}
      <section ref={stickyScrollRef} className="bg-gray-50 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                No vendemos equipos. Vendemos capacidad de filtración operando.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Después de 23 años en minería entendimos algo: los clientes no quieren comprar fierro.
                Quieren que su proceso funcione. Eso es lo que entregamos.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Más del 70% de la minería de cobre en Chile trabaja con nosotros bajo este modelo.
                La misma lógica aplica a litio: tú produces, nosotros filtramos.
              </p>
            </div>

            <div ref={scrollContentRef} className="space-y-12">

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evaluamos tu proceso juntos</h3>
                <p className="text-gray-600">
                  Entendemos qué necesitas filtrar, qué volúmenes manejas, qué calidad requieres.
                  Definimos la configuración de equipos que resuelve tu problema específico.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Movilizamos en semanas</h3>
                <p className="text-gray-600">
                  Equipos llegan a tu salar listos. Centrífugas, filtros prensa, lo que necesites.
                  Sin obra civil, sin permisos de construcción, sin esperar meses.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Operamos con nuestro equipo</h3>
                <p className="text-gray-600">
                  Personal Tecionic corre los equipos. Conocen las máquinas, entienden los procesos,
                  resuelven problemas sin que tengas que intervenir. Mantención incluida.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">04</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Escalamos contigo</h3>
                <p className="text-gray-600">
                  ¿Tu piloto funcionó y necesitas más capacidad? Agregamos equipos.
                  ¿Cambió la estrategia? Ajustamos o nos retiramos. Flexibilidad total.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Where We Fit in Your Process */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-cyan-400">Dónde entramos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            Cada paso de tu proceso tiene un punto donde la filtración marca la diferencia
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            No importa si usas DLE, evaporación tradicional, o un híbrido. La separación sólido-líquido
            aparece en múltiples etapas. Estos son los puntos donde Tecionic agrega valor.
          </p>
        </div>

        {/* Horizontal scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l from-gray-800 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 overflow-x-auto pb-8 px-4 lg:px-8 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
            <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]"></div>

            {/* Pre-DLE */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <RainDrop size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Antes de DLE</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Tus membranas y adsorbentes cuestan una fortuna y son sensibles a sólidos.
                  Centrífugas Tecionic entregan salmuera clarificada que protege tu inversión DLE
                  y maximiza la vida útil de equipos críticos.
                </p>
                <div className="text-cyan-400 font-semibold">→ Protección de inversión DLE</div>
              </div>
            </div>

            {/* Precipitation */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Chemistry size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Remoción de impurezas</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Las salmueras de LATAM vienen cargadas de magnesio, calcio, boro.
                  Su precipitación genera lodos gelatinosos que son una pesadilla.
                  Filtros prensa Tecionic manejan estos materiales difíciles sin dramas.
                </p>
                <div className="text-cyan-400 font-semibold">→ Manejo de precipitados complejos</div>
              </div>
            </div>

            {/* Li2CO3 */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Industry size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Carbonato de litio</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Tu Li₂CO₃ necesita lavado para remover impurezas solubles y filtración para reducir humedad.
                  Ciclos controlados de lavado y compresión que entregan producto listo para secado.
                </p>
                <div className="text-cyan-400 font-semibold">→ Producto que cumple especificación</div>
              </div>
            </div>

            {/* Water */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Recycle size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cierre de circuitos</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  El agua en el salar es oro. Los permisos ambientales exigen minimizar consumo.
                  Clarificación de aguas de proceso para recirculación. Reduces dependencia de agua fresca
                  y cumples con regulaciones que cada año son más estrictas.
                </p>
                <div className="text-cyan-400 font-semibold">→ Cumplimiento ambiental</div>
              </div>
            </div>

            {/* Pilots */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] snap-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Settings size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Validación de proceso</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Antes de comprometer capital en planta comercial necesitas datos reales.
                  Equipos móviles que soportan tu piloto, generan la información que necesitas,
                  y se van cuando terminas. Sin inversión permanente para una fase temporal.
                </p>
                <div className="text-cyan-400 font-semibold">→ Datos reales sin CAPEX</div>
              </div>
            </div>

            <div className="flex-shrink-0 w-4 lg:w-[calc((100vw-1280px)/2)]"></div>
          </div>
        </div>
      </section>

      {/* The Tecionic Track Record */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wider">
                Por qué confiar en Tecionic
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                23 años. Más de 70% del cobre chileno. Ahora litio.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Comenzamos en 2002 resolviendo separación sólido-líquido para procesos SX/EW de cobre.
                Hoy la mayoría de las grandes mineras de Chile trabajan con nosotros.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                En 2020 expandimos a litio y potasio. La física de la separación es la misma.
                Lo que cambia es la química, y para eso adaptamos configuraciones y materiales.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                No estás experimentando con nosotros. Estás trabajando con gente que lleva
                décadas haciendo exactamente esto.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">23</div>
                  <div>
                    <div className="font-bold text-gray-900">Años en minería</div>
                    <div className="text-gray-600 text-sm">Desde 2002 operando en faenas</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">70%</div>
                  <div>
                    <div className="font-bold text-gray-900">Del cobre chileno</div>
                    <div className="text-gray-600 text-sm">Trabaja con nuestro modelo</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">2020</div>
                  <div>
                    <div className="font-bold text-gray-900">Expansión a litio</div>
                    <div className="text-gray-600 text-sm">Misma expertise, nuevo mercado</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-cyan-600">LATAM</div>
                  <div>
                    <div className="font-bold text-gray-900">Cobertura regional</div>
                    <div className="text-gray-600 text-sm">Chile, Perú, Argentina y más</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tu competencia está esperando permisos.<br />
            <span className="text-cyan-400">Tú podrías estar operando.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Cuéntanos sobre tu proyecto. Te mostramos cómo Tecionic puede acelerar tu timeline
            y liberar capital para lo que realmente importa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/${locale}/contact`} className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-colors shadow-xl shadow-cyan-500/20">
              Conversemos sobre tu proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <span>Respuesta en 24-48 horas</span>
            <span>Cobertura en todo el Triángulo del Litio</span>
            <span>Sin compromiso</span>
          </div>
        </div>
      </section>

    </div>
  )
}
