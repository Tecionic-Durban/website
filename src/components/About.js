// src/components/About.js
'use client'
import { useEffect, useRef, useState } from 'react'
import { Finance, Dashboard, Portfolio, Flash, Time, Security } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [isMobile, setIsMobile] = useState(false)
  const t = useTranslations('about')

  const cards = [
    { key: 'opexModel', icon: Finance },
    { key: 'performance', icon: Dashboard },
    { key: 'multisector', icon: Portfolio },
    { key: 'plugAndPlay', icon: Flash },
    { key: 'flexibleContracts', icon: Time },
    { key: 'corrosiveEnvironments', icon: Security }
  ]

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll-based vertical stack animation (desktop only)
  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)))
      const cardIndex = Math.min(
        Math.floor(scrollProgress * cards.length),
        cards.length - 1
      )

      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const relativePosition = index - cardIndex
        let y, scale, opacity, blur, visibility

        if (relativePosition === 0) {
          y = 0
          scale = 1
          opacity = 1
          blur = 0
          visibility = 'visible'
        } else if (relativePosition === -1) {
          y = -100
          scale = 0.94
          opacity = 0.4
          blur = 0.5
          visibility = 'visible'
        } else if (relativePosition === 1) {
          y = 100
          scale = 0.94
          opacity = 0.4
          blur = 0.5
          visibility = 'visible'
        } else {
          y = relativePosition > 0 ? 200 : -200
          scale = 0.9
          opacity = 0
          blur = 2
          visibility = 'hidden'
        }

        card.style.transform = `translateY(${y}px) scale(${scale})`
        card.style.opacity = opacity
        card.style.filter = `blur(${blur}px)`
        card.style.visibility = visibility
        card.style.zIndex = cards.length - Math.abs(relativePosition)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [cards.length, isMobile])

  // Mobile card - compact design with larger text
  const MobileCard = ({ card }) => (
    <div
      className="bg-white rounded-xl border border-emerald-200 shadow-md p-5 min-w-[80vw] max-w-[80vw] snap-center scroll-ml-4"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <card.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-gray-900 leading-tight">
            {t(`cards.${card.key}.title`)}
          </h3>
          <span className="text-sm font-medium text-emerald-600">
            {t(`cards.${card.key}.metric`)}
          </span>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">
        {t(`cards.${card.key}.description`)}
      </p>
    </div>
  )

  // Desktop card - full design
  const DesktopCard = ({ card }) => (
    <div
      className="group relative bg-white rounded-2xl border border-emerald-300/50 shadow-xl overflow-hidden p-8"
      style={{
        boxShadow: '0 20px 60px -15px rgba(16, 185, 129, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <card.icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-2xl text-gray-900">
                {t(`cards.${card.key}.title`)}
              </h3>
              <span className="text-sm font-semibold px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full w-fit">
                {t(`cards.${card.key}.metric`)}
              </span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t(`cards.${card.key}.description`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // Mobile layout - horizontal carousel
  if (isMobile) {
    return (
      <section className="py-8 bg-gradient-to-br from-emerald-50/30 via-white to-gray-50">
        <div className="px-4 mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
            {t('headline')}
            <span className="block text-emerald-600">{t('headlineSub')}</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Horizontal scroll carousel with snap lock */}
        <div className="overflow-x-auto scrollbar-hide scroll-smooth" style={{ scrollSnapType: 'x mandatory' }}>
          <div className="flex gap-4 px-4">
            {cards.map((card, index) => (
              <MobileCard key={index} card={card} />
            ))}
            {/* End padding for last card visibility */}
            <div className="min-w-4"></div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop layout - scroll-based stacking
  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-emerald-50/30 via-white to-gray-50" style={{ height: `${Math.max(300, cards.length * 60)}vh` }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>
        
      </div>

      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
          <div className="flex gap-16 items-center">
            {/* Left Side - Static Text */}
            <div className="w-2/5 flex-shrink-0">
              <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                {t('headline')}
                <span className="block text-emerald-600">{t('headlineSub')}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('description')} {t('clientList')}
              </p>
            </div>

            {/* Right Side - Card Track */}
            <div className="w-3/5 relative" style={{ minHeight: '350px', perspective: '1200px' }}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="absolute top-1/2 left-0 right-0 -translate-y-1/2 will-change-transform transition-all duration-500 ease-out"
                  style={{ transformOrigin: 'center center' }}
                >
                  <DesktopCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
