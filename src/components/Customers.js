// src/components/Customers.js
'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Growth, Currency, Security, Time } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'

export default function Customers() {
  const t = useTranslations('customers')
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const isPausedRef = useRef(false)
  const customersRef = useRef(null)
  const topCarouselRef = useRef(null)
  const bottomCarouselRef = useRef(null)

  // Sync pause state to ref
  useEffect(() => {
    isPausedRef.current = isCarouselPaused
  }, [isCarouselPaused])

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
            }, index * 200)
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (customersRef.current) {
      observer.observe(customersRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Seamless infinite scroll with RAF
  useEffect(() => {
    let animationFrameId
    const topPositionRef = { current: 0 }
    const bottomPositionRef = { current: null }
    const speed = 0.6 // pixels per frame (adjust for speed)

    const animate = () => {
      // Initialize bottom position on first frame
      if (bottomPositionRef.current === null && bottomCarouselRef.current) {
        const carouselWidth = bottomCarouselRef.current.scrollWidth / 2
        bottomPositionRef.current = -carouselWidth
      }

      if (!isPausedRef.current) {
        // Top carousel - scroll left
        topPositionRef.current -= speed

        // Bottom carousel - scroll right
        if (bottomPositionRef.current !== null) {
          bottomPositionRef.current += speed
        }
      }

      if (topCarouselRef.current) {
        const carouselWidth = topCarouselRef.current.scrollWidth / 2

        // Reset seamlessly when first set is completely off-screen
        if (Math.abs(topPositionRef.current) >= carouselWidth) {
          topPositionRef.current = 0
        }

        topCarouselRef.current.style.transform = `translate3d(${topPositionRef.current}px, 0, 0)`
      }

      if (bottomCarouselRef.current && bottomPositionRef.current !== null) {
        const carouselWidth = bottomCarouselRef.current.scrollWidth / 2

        // Reset seamlessly when scrolled back to start
        if (bottomPositionRef.current >= 0) {
          bottomPositionRef.current = -carouselWidth
        }

        bottomCarouselRef.current.style.transform = `translate3d(${bottomPositionRef.current}px, 0, 0)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []) // Empty dependency array - runs once and never remounts

  // Top row - scrolls right to left
  const topRowLogos = [
    { name: 'Escondida BHP', logo: '/client_logos/ESCONDIDA-BHP-LOGO.png', size: 'h-[74px] w-auto' },
    { name: 'Anglo American', logo: '/client_logos/anglo_american_logo.png', size: 'h-16 w-auto' },
    { name: 'Antucoya', logo: '/client_logos/antucoya_antofagasta_minerals.png', size: 'h-16 w-auto' },
    { name: 'Capstone Manto Verde', logo: '/client_logos/capstone_copper_manto_verde_logo.png', size: 'h-[77px] w-auto' },
    { name: 'Capstone Mantos Blancos', logo: '/client_logos/capstone_copper_mantos_blancos_logo.png', size: 'h-[77px] w-auto' },
    { name: 'Caserones', logo: '/client_logos/caserones_lumina_copper_logo.png', size: 'h-16 w-auto' },
    { name: 'Centinela', logo: '/client_logos/centinela_antofagasta_minerals_logo.png', size: 'h-[115px] w-auto' },
    { name: 'Cerro Colorado', logo: '/client_logos/cerro_colorado_bhp_logo.png', size: 'h-[554px] w-auto' },
    { name: 'Chuquicamata', logo: '/client_logos/chuqui_codelco_logo.png', size: 'h-[154px] w-auto' },
    { name: 'CMPC', logo: '/client_logos/cmpc_logo.png', size: 'h-20 w-auto' },
    { name: 'Radomiro Tomic', logo: '/client_logos/codelco_radomiro_tomic_logo.png', size: 'h-32 w-auto' },
    { name: 'Collahuasi', logo: '/client_logos/collahuasi_logo.png', size: 'h-[104px] w-auto' },
    { name: 'Eco Metales', logo: '/client_logos/eco_metales_logo.png', size: 'h-[138px] w-auto' },
    { name: 'El Abra', logo: '/client_logos/el_abra_logo.png', size: 'h-[115px] w-auto' }
  ]

  // Bottom row - scrolls left to right
  const bottomRowLogos = [
    { name: 'El Teniente', logo: '/client_logos/el_teniente_codelco_logo.png', size: 'h-32 w-auto' },
    { name: 'ENAMI', logo: '/client_logos/enami_logo.png', size: 'h-[77px] w-auto' },
    { name: 'ENAP', logo: '/client_logos/enap_logo.png', size: 'h-[185px] w-auto' },
    { name: 'Gaby', logo: '/client_logos/gaby_codelco_logo.png', size: 'h-32 w-auto' },
    { name: 'KGHM', logo: '/client_logos/kghm_logo.png', size: 'h-[54px] w-auto' },
    { name: 'Las Cenizas', logo: '/client_logos/las_cenizas_logo.png', size: 'h-16 w-auto' },
    { name: 'Lomas Bayas', logo: '/client_logos/lomas_bayas_logo.png', size: 'h-16 w-auto' },
    { name: 'Marcobre', logo: '/client_logos/marcobre_logo.png', size: 'h-16 w-auto' },
    { name: 'Michilla', logo: '/client_logos/michilla_logo.png', size: 'h-[86px] w-auto' },
    { name: 'Salvador', logo: '/client_logos/salvador_codelco_logo.png', size: 'h-48 w-auto' },
    { name: 'Spence BHP', logo: '/client_logos/spence_bhp_logo.png', size: 'h-32 w-auto' },
    { name: 'SQM', logo: '/client_logos/sqm_logo.png', size: 'h-24 w-auto' },
    { name: 'Teck', logo: '/client_logos/teck_logo.png', size: 'h-[54px] w-auto' }
  ]

  return (
    <section ref={customersRef} className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-gray-50 relative overflow-hidden">
      {/* Enterprise Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[12%] w-28 h-28 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative">
        {/* Enterprise Header */}
        <div className="mb-6 lg:mb-20 progressive-reveal">
          <div className="inline-flex items-center px-4 py-2 lg:px-5 lg:py-3 bg-gradient-to-r from-emerald-500/10 to-emerald-400/5 rounded-full text-emerald-700 text-sm font-semibold border border-emerald-400/20 backdrop-blur-sm mb-2 lg:mb-6 sophisticated-hover">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 enterprise-pulse"></div>
            {t('badge')}
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-6 leading-tight enterprise-slide-up">
            {t('headline')} <span className="text-emerald-600">{t('headlineSub')}</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed progressive-reveal">
            {t('description')}
          </p>
        </div>

        {/* Double Carousel - Opposite Directions */}
        <div className="space-y-8 mb-20 progressive-reveal">
          {/* Top Row - Right to Left */}
          <div className="relative overflow-hidden">
            <div
              ref={topCarouselRef}
              className="flex"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
            >
              {/* First set */}
              {topRowLogos.map((logo, index) => (
                <div
                  key={`top-first-${index}`}
                  className="group flex-shrink-0 w-64 mx-4 relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 layered-shadow-hover sophisticated-hover transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={200}
                      height={80}
                      loading="lazy"
                      className={`${logo.size} object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {topRowLogos.map((logo, index) => (
                <div
                  key={`top-duplicate-${index}`}
                  className="group flex-shrink-0 w-64 mx-4 relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 layered-shadow-hover sophisticated-hover transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={200}
                      height={80}
                      loading="lazy"
                      className={`${logo.size} object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div
              ref={bottomCarouselRef}
              className="flex"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
            >
              {/* First set */}
              {bottomRowLogos.map((logo, index) => (
                <div
                  key={`bottom-first-${index}`}
                  className="group flex-shrink-0 w-64 mx-4 relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 layered-shadow-hover sophisticated-hover transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={200}
                      height={80}
                      loading="lazy"
                      className={`${logo.size} object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {bottomRowLogos.map((logo, index) => (
                <div
                  key={`bottom-duplicate-${index}`}
                  className="group flex-shrink-0 w-64 mx-4 relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 layered-shadow-hover sophisticated-hover transition-all duration-300 border border-gray-100 hover:border-gray-200"
                >
                  <div className="h-20 flex items-center justify-center">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={200}
                      height={80}
                      loading="lazy"
                      className={`${logo.size} object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-emerald-600 rounded-xl lg:rounded-2xl p-4 lg:p-8 text-white text-center mb-8 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">{t('resultsTitle')}</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Growth className="w-6 h-6 lg:w-8 lg:h-8 mb-2 lg:mb-3 text-emerald-200" />
              <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">+22%</div>
              <div className="text-emerald-100 text-sm">{t('stats.efficiency')}</div>
            </div>
            <div className="flex flex-col items-center">
              <Time className="w-6 h-6 lg:w-8 lg:h-8 mb-2 lg:mb-3 text-emerald-200" />
              <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">95%</div>
              <div className="text-emerald-100 text-sm">{t('stats.downtime')}</div>
            </div>
            <div className="flex flex-col items-center">
              <Currency className="w-6 h-6 lg:w-8 lg:h-8 mb-2 lg:mb-3 text-emerald-200" />
              <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">$500M+</div>
              <div className="text-emerald-100 text-sm">{t('stats.savings')}</div>
            </div>
            <div className="flex flex-col items-center">
              <Security className="w-6 h-6 lg:w-8 lg:h-8 mb-2 lg:mb-3 text-emerald-200" />
              <div className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">23+</div>
              <div className="text-emerald-100 text-sm">{t('stats.years')}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
