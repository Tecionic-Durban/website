// src/components/Contact.js
import Link from 'next/link'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact-section" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Balls */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-600/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-emerald-500/15 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-emerald-400/25 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-5 h-5 bg-emerald-600/10 rounded-full animate-float-slow"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-4xl font-bold mb-6">¿Necesita optimizar sus procesos mineros?</h2>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contacte con nuestros expertos para una consulta técnica especializada. 
          Evaluamos sus desafíos operacionales y proponemos soluciones móviles especializadas.
        </p>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Directo</h3>
            <p className="text-gray-400 text-sm mb-4">Respuesta en 24 horas hábiles</p>
            <a 
              href="mailto:contacto@tsf.cl" 
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              contacto@tsf.cl
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Ubicaciones</h3>
            <p className="text-gray-400 text-sm">
              Santiago (Providencia) • Calama (Antofagasta)
            </p>
            <p className="text-emerald-400 text-sm font-medium mt-2">
              Servicios móviles en toda Latinoamérica
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contacto"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
          >
            Formulario de Consulta Técnica
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          
          <a 
            href="mailto:contacto@tsf.cl?subject=Consulta%20Técnica%20-%20Servicios%20TSF"
            className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
          >
            Email Directo
            <Mail className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">24h</div>
              <div className="text-gray-400 text-sm">Respuesta garantizada</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">20+</div>
              <div className="text-gray-400 text-sm">Años experiencia</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">70</div>
              <div className="text-gray-400 text-sm">Ton/día capacidad</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400 mb-1">SICEP</div>
              <div className="text-gray-400 text-sm">Certificación oficial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}