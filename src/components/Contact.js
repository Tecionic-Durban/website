// src/components/Contact.js
'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone, Clock, Shield, TrendingUp } from 'lucide-react'

export default function Contact() {
  const contactRef = useRef(null)

  // Progressive disclosure on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressiveElements = entry.target.querySelectorAll('.progressive-reveal')
          progressiveElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('revealed')
            }, index * 150)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={contactRef} id="contact-section" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Enterprise Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sophisticated floating elements */}
        <div className="absolute top-32 left-[8%] w-36 h-36 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-24 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

        {/* Strategic three ball brand element */}
        <div className="absolute top-20 right-[15%] opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative">
        {/* Enterprise Header */}
        <div className="text-center mb-20 progressive-reveal">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-300 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-6 sophisticated-hover">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
            Consulta Técnica Especializada
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight enterprise-slide-up">
            ¿Necesita Optimizar
            <span className="block text-emerald-400 gradient-text-animated">Sus Procesos Mineros?</span>
          </h2>

          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed progressive-reveal">
            Contacte con nuestros expertos para una consulta técnica especializada.
            <span className="font-semibold text-emerald-300">Evaluamos sus desafíos operacionales</span> y proponemos
            soluciones móviles especializadas que optimizan rendimiento sin interrumpir procesos existentes.
          </p>
        </div>

        {/* Enterprise Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 layered-shadow-hover sophisticated-hover magnetic-hover progressive-reveal overflow-hidden">
            {/* Sophisticated background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Strategic three ball accent */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Mail className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 enterprise-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">Email Directo</h3>
              <p className="text-emerald-200/70 text-sm mb-4">Respuesta garantizada en 24 horas hábiles</p>
              <a
                href="mailto:contacto@tsf.cl"
                className="text-emerald-400 hover:text-emerald-300 font-semibold text-lg transition-colors duration-300 flex items-center group"
              >
                contacto@tsf.cl
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 layered-shadow-hover sophisticated-hover magnetic-hover progressive-reveal overflow-hidden">
            {/* Sophisticated background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Strategic three ball accent */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <MapPin className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 enterprise-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">Cobertura Regional</h3>
              <p className="text-emerald-200/70 text-sm mb-3">
                Santiago (Providencia) • Calama (Antofagasta)
              </p>
              <p className="text-emerald-400 text-sm font-semibold">
                Servicios móviles en toda Latinoamérica
              </p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 layered-shadow-hover sophisticated-hover magnetic-hover progressive-reveal overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Sophisticated background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Strategic three ball accent */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-emerald-400 rounded-full enterprise-pulse"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1 h-1 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Clock className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 enterprise-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">Respuesta Rápida</h3>
              <p className="text-emerald-200/70 text-sm mb-3">Emergencias y consultas urgentes</p>
              <p className="text-emerald-400 text-sm font-semibold">
                Disponibilidad 24/7 para proyectos críticos
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA Section */}
        <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl p-12 md:p-16 text-white text-center overflow-hidden progressive-reveal mb-20">
          {/* Sophisticated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-8 right-12 w-20 h-20 bg-emerald-500/20 rounded-full animate-float-slow blur-sm"></div>
            <div className="absolute bottom-8 left-12 w-16 h-16 bg-emerald-400/25 rounded-full animate-float-medium blur-sm"></div>

            {/* Strategic three ball constellation */}
            <div className="absolute top-6 left-6 opacity-30">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-300 rounded-full enterprise-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-black mb-6 gradient-text-animated">
              Consulta Sin Costo con Especialistas
            </h3>
            <p className="text-xl text-emerald-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Diagnóstico inicial, evaluación técnica y propuesta de soluciones móviles especializadas.
              <span className="font-semibold text-emerald-300">Sin compromiso, máximo valor técnico.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contacto"
                className="group relative bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Formulario de Consulta Técnica</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <a
                href="mailto:contacto@tsf.cl?subject=Consulta%20Técnica%20-%20Servicios%20TSF"
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover"
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">Email Directo</span>
                <Mail className="relative z-10 w-5 h-5 ml-3 enterprise-pulse" />
              </a>
            </div>
          </div>
        </div>

        {/* Enterprise Trust Indicators */}
        <div className="bg-white/5 rounded-2xl p-8 border border-emerald-400/20 backdrop-blur-sm progressive-reveal">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-emerald-400 enterprise-pulse" />
              <h3 className="text-2xl font-bold text-white gradient-text-animated">Garantías de Servicio</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24h", label: "Respuesta Garantizada", description: "Consultas técnicas", icon: Clock, color: "text-emerald-400" },
              { value: "23+", label: "Años Experiencia", description: "Separación sólido-líquido", icon: TrendingUp, color: "text-blue-400" },
              { value: "70", label: "Ton/día Capacidad", description: "Equipos móviles", icon: Shield, color: "text-purple-400" },
              { value: "SICEP", label: "Certificación Oficial", description: "Sistemas de gestión", icon: Mail, color: "text-green-400" }
            ].map((indicator, index) => (
              <div key={index} className={`group relative bg-white/10 rounded-xl p-6 border border-emerald-400/20 hover:bg-white/15 hover:border-emerald-400/40 transition-all duration-500 backdrop-blur-sm overflow-hidden sophisticated-hover layered-shadow progressive-reveal text-center`}>
                {/* Subtle background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className={`text-3xl font-black ${indicator.color} mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 gradient-text-animated`}>
                    {indicator.value}
                  </div>
                  <div className="text-emerald-100 font-semibold text-sm mb-1">
                    {indicator.label}
                  </div>
                  <div className="text-emerald-200/60 text-xs">
                    {indicator.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}