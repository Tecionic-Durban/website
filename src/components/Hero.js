// src/components/Hero.js
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowRight } from 'lucide-react'

// Hero background images for cycling carousel - TSF equipment focused
const heroImages = [
  { src: '/filtro_prensa_1200_drone_view.png', alt: 'TSF mobile filter press drone view' },
  { src: '/mobile_equipment_spence.jpeg', alt: 'TSF mobile filtration equipment at Spence' },
  { src: '/fotos_spence/Imagen2.jpg', alt: 'TSF equipment installation at mining site' },
  { src: '/Fotos_Marccobre/no_permit_modification.jpg', alt: 'TSF filter press on mobile trailer' },
  { src: '/filtro_prensa_movil.png', alt: 'TSF mobile filter press unit' },
  { src: '/copper_concentrate_plant.jpg', alt: 'Copper concentrate processing plant' },
]

export default function Hero() {
  const router = useRouter()
  const heroRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Progressive disclosure on scroll/mount
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
            }, index * 150) // Staggered revelation
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Cycle through hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen text-white overflow-hidden flex flex-col justify-center">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32 w-full">
        {/* Content */}
        <div className="max-w-3xl">
            {/* Eyebrow + Headline Complex */}
            <div className="space-y-6">
              {/* Layered Headline Structure */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-[-0.02em] enterprise-slide-up stagger-1">
                  <span className="gradient-text-animated">Optimiza tus</span>
                  <span className="block text-emerald-300 font-black relative enterprise-slide-up stagger-2">
                    Operaciones
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-60 enterprise-scale-in stagger-3"></div>
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-100/80 mt-2 enterprise-slide-up stagger-4">Sin Parar la Planta</span>
                </h1>

                <div className="space-y-4 max-w-3xl">
                  <p className="text-lg lg:text-xl text-white leading-[1.4] font-medium progressive-reveal">
                    <span className="text-emerald-400 font-bold">Maximiza producción</span> mientras resuelves cuellos de botella críticos sin parar operaciones.
                  </p>

                  <div className="inline-flex items-center px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg progressive-reveal">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-white font-semibold text-sm tracking-wide">CERO CAPEX • CERO MODIFICACIONES • MÁXIMO ROI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* KPIs Row */}
            <div className="mt-10 grid grid-cols-3 gap-8">
              <div className="text-left">
                <div className="text-4xl font-black text-white">23+</div>
                <div className="text-sm text-white/70">Años de experiencia</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-black text-white">120+</div>
                <div className="text-sm text-white/70">Proyectos completados</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-black text-white">24/7</div>
                <div className="text-sm text-white/70">Soporte operacional</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button
                onClick={() => router.push('/services')}
                className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center"
              >
                <span>Ver Nuestros Servicios</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgb(255,255,255)"></path>
        </svg>
      </div>
    </section>
  )
}