// src/components/About.js
'use client'
import { useEffect, useRef } from 'react'
import { Finance, Dashboard, Portfolio, Flash, Time, Security } from '@carbon/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const t = useTranslations('about')

  const cards = [
    { key: 'opexModel', icon: Finance },
    { key: 'performance', icon: Dashboard },
    { key: 'multisector', icon: Portfolio },
    { key: 'plugAndPlay', icon: Flash },
    { key: 'flexibleContracts', icon: Time },
    { key: 'corrosiveEnvironments', icon: Security }
  ]

  // Scroll-based vertical stack animation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      // Calculate scroll progress through the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)))

      // Determine which card should be active based on scroll progress
      const cardIndex = Math.min(
        Math.floor(scrollProgress * cards.length),
        cards.length - 1
      )

      // Update each card's position - only show active + 2 adjacent
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const relativePosition = index - cardIndex
        let y, scale, opacity, blur, visibility

        if (relativePosition === 0) {
          // Active card - centered, fully visible
          y = 0
          scale = 1
          opacity = 1
          blur = 0
          visibility = 'visible'
        } else if (relativePosition === -1) {
          // Previous card - above
          y = -100
          scale = 0.94
          opacity = 0.4
          blur = 0.5
          visibility = 'visible'
        } else if (relativePosition === 1) {
          // Next card - below
          y = 100
          scale = 0.94
          opacity = 0.4
          blur = 0.5
          visibility = 'visible'
        } else {
          // All other cards - hidden
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
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [cards.length])

  return (
    <>
    {/* Tall container for scroll distance */}
    <section ref={sectionRef} className="relative bg-gradient-to-br from-emerald-50/30 via-white to-gray-50" style={{ height: `${Math.max(300, cards.length * 60)}vh` }}>
      {/* Enterprise Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[5%] w-36 h-36 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-20 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-24 right-[8%] w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>

        <div className="absolute top-20 right-[12%] opacity-20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full enterprise-pulse"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full enterprise-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-emerald-600 rounded-full enterprise-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Side - Static Text */}
          <div className="lg:w-2/5 flex-shrink-0">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {t('headline')}
              <span className="block text-emerald-600">{t('headlineSub')}</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('description')} {t('clientList')}
            </p>
          </div>

          {/* Right Side - Card Track */}
          <div className="w-full lg:w-3/5 relative" style={{ minHeight: '350px', perspective: '1200px' }}>
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute top-1/2 left-0 right-0 -translate-y-1/2 will-change-transform transition-all duration-500 ease-out mx-auto px-4 sm:px-0"
                style={{ transformOrigin: 'center center', maxWidth: '100%' }}
              >
                <div className="group relative bg-white rounded-2xl p-5 sm:p-8 border border-emerald-300/50 shadow-2xl overflow-hidden transition-shadow duration-500"
                  style={{
                    boxShadow: '0 20px 60px -15px rgba(16, 185, 129, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
                          <h3 className="font-bold text-xl sm:text-2xl text-gray-900">{t(`cards.${card.key}.title`)}</h3>
                          <span className="text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-700 rounded-full w-fit">
                            {t(`cards.${card.key}.metric`)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{t(`cards.${card.key}.description`)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          </div>
        </div>
      </div>
    </section>
</>
  )
}
