'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Globe2, ArrowRight } from 'lucide-react'

// Dynamically import the 3D globe to avoid SSR issues
const LatamGlobe = dynamic(() => import('./LatamGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-slate-900/50 rounded-2xl flex items-center justify-center">
      <div className="text-emerald-400 animate-pulse flex items-center gap-2">
        <Globe2 className="w-6 h-6 animate-spin" />
        <span>Cargando mapa interactivo...</span>
      </div>
    </div>
  )
})

// Industries served
const industries = [
  { name: 'Cobre', color: 'bg-orange-500', href: '/industries/copper' },
  { name: 'Litio', color: 'bg-cyan-500', href: '/industries/lithium' },
  { name: 'Zinc', color: 'bg-slate-400', href: '/industries/zinc' },
  { name: 'Petróleo', color: 'bg-amber-500', href: '/industries/crude-oil' },
  { name: 'Potasio', color: 'bg-purple-500', href: '/industries/potassium' },
]

export default function LatamPresence() {
  return (
    <section className="relative z-10 py-20 lg:py-40 lg:min-h-[900px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-visible">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129 / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Globe - Stripe-style: extends beyond container, zoomed in */}
      <div className="absolute -left-[100px] top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <LatamGlobe />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center lg:text-right lg:ml-auto lg:max-w-xl mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full mb-4">
            ALCANCE REGIONAL
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Equipos móviles para<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">toda Latinoamérica</span>
          </h2>
          <p className="text-lg text-slate-400">
            Desde nuestras bases en Chile y Perú, desplegamos equipos de filtración y tratamiento
            a operaciones industriales en todo el continente.
          </p>
        </div>

        {/* Mobile globe */}
        <div className="lg:hidden mb-8 -mx-4">
          <LatamGlobe className="w-full h-[450px]" />
        </div>

        {/* Content - positioned on the right */}
        <div className="lg:ml-auto lg:max-w-lg space-y-10">
          {/* Mobile equipment callout */}
          <div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-white text-lg font-medium mb-1">Equipos 100% móviles</p>
              <p className="text-slate-400">
                Nuestros equipos se transportan directamente a tu operación, sin importar la ubicación.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors group mt-3 ml-4"
            >
              Solicitar Equipo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>

          {/* Offices - simple inline */}
          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider mb-3">Bases de operación</p>
            <p className="text-white text-lg">
              <span className="font-medium">Santiago</span>
              <span className="text-slate-500">, Chile</span>
              <span className="text-slate-600 mx-3">·</span>
              <span className="font-medium">Calama</span>
              <span className="text-slate-500">, Chile</span>
              <span className="text-slate-600 mx-3">·</span>
              <span className="font-medium">Lima</span>
              <span className="text-slate-500">, Perú</span>
            </p>
          </div>

          {/* Industries - horizontal colored bars */}
          <div>
            <p className="text-slate-500 text-sm uppercase tracking-wider mb-4">Industrias principales</p>
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <a
                  key={index}
                  href={industry.href}
                  className="flex items-center gap-3 group"
                >
                  <div className={`w-1 h-6 rounded-full ${industry.color}`} />
                  <span className="text-white group-hover:text-emerald-400 transition-colors">{industry.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
