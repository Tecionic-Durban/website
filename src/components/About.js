// src/components/About.js
import { Beaker, Droplets, RefreshCw, Zap } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 bg-gray-50 carbon-fiber">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Líderes en Filtración y Separación Sólido-Líquido
              </h2>
              <div className="w-20 h-1 bg-emerald-600"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tec-Ionic Durban surge de más de dos décadas de experiencia acumulada en servicios 
                de filtración en faenas mineras de Chile. Fundada por profesionales con trayectoria 
                en SX y filtración, consolidamos nuestro primer gran contrato en Radomiro Tomic.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-600 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Equipos Móviles
                </h3>
                <p className="text-gray-600">
                  Planta y equipos móviles que permiten operar sin necesidad de instalaciones 
                  definitivas ni modificaciones a permisos ambientales. Flexibilidad operativa 
                  para atender múltiples líneas de trabajo en paralelo.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-sm metal-texture industrial-shimmer subtle-glow micro-bounce">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Experiencia Comprobada
                </h3>
                <p className="text-gray-600">
                  Experiencia comprobada en cobre y aplicable a otras industrias: zinc, litio, 
                  potasio y petróleo crudo. Modelos de servicio escalables desde pilotos 
                  hasta nuevas adquisiciones de gran capacidad.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-400 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Clientes de Prestigio
                </h3>
                <p className="text-gray-600">
                  Actualmente prestamos servicios a clientes como BHP, SQM, Capstone Cooper 
                  y Antofagasta Minerals. Registro en SICEP y equipos con clasificación 
                  ex.proof para ambientes explosivos.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <Beaker className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Servicios Especializados</h3>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-emerald-700/50 rounded-lg p-4">
                    <Droplets className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Filtración</div>
                    <div className="text-xs text-emerald-200">Móvil</div>
                  </div>
                  <div className="bg-emerald-700/50 rounded-lg p-4">
                    <RefreshCw className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Separación</div>
                    <div className="text-xs text-emerald-200">Sólido-Líquido</div>
                  </div>
                  <div className="bg-emerald-700/50 rounded-lg p-4">
                    <Zap className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Tratamiento</div>
                    <div className="text-xs text-emerald-200">Orgánico</div>
                  </div>
                </div>

                <div className="border-t border-emerald-500 pt-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-300">20+</div>
                      <div className="text-sm text-emerald-100">Años de Experiencia</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-300">70</div>
                      <div className="text-sm text-emerald-100">Ton/día Capacidad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}