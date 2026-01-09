// src/components/Services.js
'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { Filter, Chemistry, Layers, CirclePacking, RainDrop, BatteryCharging } from '@carbon/icons-react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { handleContactClick } from '@/utils/navigation'
import { useTranslations } from 'next-intl'

export default function Services() {
  const router = useRouter()
  const servicesRef = useRef(null)
  const t = useTranslations('services')

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      key: 'filtration',
      icon: Filter,
      slug: "/services/filtration"
    },
    {
      key: 'organicTreatment',
      icon: Chemistry,
      slug: "/services/organic-treatment"
    },
    {
      key: 'concentrateDehydration',
      icon: Layers,
      slug: "/services/concentrate-dehydration"
    },
    {
      key: 'fineSolids',
      icon: CirclePacking,
      slug: "/services/fine-solids"
    },
    {
      key: 'ewCleaning',
      icon: BatteryCharging,
      slug: "/services/ew-cleaning"
    }
  ]

  return (
    <section ref={servicesRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-[10%] w-32 h-32 bg-gradient-to-br from-emerald-600/10 to-emerald-700/5 rounded-full opacity-30 animate-float-slow blur-sm"></div>
        <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 rounded-full opacity-25 animate-float-medium blur-sm"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 relative">
        {/* Enterprise Header */}
        <div className="mb-6 lg:mb-20 progressive-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 lg:mb-6 leading-tight enterprise-slide-up">
            {t('headline')}
            <span className="block text-emerald-600">{t('headlineSub')}</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed progressive-reveal">
            {t('description')}
          </p>
        </div>

        {/* Services Grid - 3+2 Offset Layout */}
        <div className="mb-20">
          {/* Top Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 layered-shadow-hover sophisticated-hover progressive-reveal overflow-hidden transform hover:scale-105 hover:z-10 transition-all duration-500">
                {/* Sophisticated background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating balls on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-float-up-1"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-float-up-2"></div>
                  <div className="absolute top-6 right-12 w-1 h-1 bg-emerald-600 rounded-full animate-float-up-3"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-emerald-700 enterprise-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300">{t(`items.${service.key}.title`)}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{t(`items.${service.key}.description`)}</p>
                  <button
                    onClick={() => router.push(service.slug)}
                    className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-sm">{t('moreInfo')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <div key={index + 3} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 layered-shadow-hover sophisticated-hover progressive-reveal overflow-hidden transform hover:scale-105 hover:z-10 transition-all duration-500">
                {/* Sophisticated background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating balls on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-float-up-1"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-float-up-2"></div>
                  <div className="absolute top-6 right-12 w-1 h-1 bg-emerald-600 rounded-full animate-float-up-3"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-emerald-700 enterprise-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300">{t(`items.${service.key}.title`)}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{t(`items.${service.key}.description`)}</p>
                  <button
                    onClick={() => router.push(service.slug)}
                    className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-sm">{t('moreInfo')}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA Section */}
        <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 rounded-3xl p-6 lg:p-16 text-white text-center overflow-hidden progressive-reveal">
          {/* Sophisticated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-8 right-12 w-20 h-20 bg-emerald-600/20 rounded-full animate-float-slow blur-sm"></div>
            <div className="absolute bottom-8 left-12 w-16 h-16 bg-emerald-500/25 rounded-full animate-float-medium blur-sm"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-5xl font-black mb-4 lg:mb-6 gradient-text-animated">
              {t('cta.headline')}
            </h3>
            <p className="text-base lg:text-xl text-emerald-100 mb-6 lg:mb-10 max-w-4xl mx-auto leading-relaxed">
              {t('cta.description')} <span className="font-semibold text-emerald-300">{t('cta.flexibility')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={(e) => handleContactClick(e, router, '/services')}
                className="group relative bg-white text-emerald-900 px-6 py-3 lg:px-10 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg transition-all duration-300 hover:bg-emerald-50 layered-shadow-hover flex items-center justify-center overflow-hidden ripple-effect magnetic-hover cursor-pointer"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">{t('cta.requestConsultation')}</span>
                <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <button
                onClick={() => router.push('/casos-de-exito')}
                className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-6 py-3 lg:px-10 lg:py-5 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm relative overflow-hidden sophisticated-hover cursor-pointer"
                suppressHydrationWarning
              >
                <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="relative z-10">{t('cta.viewCaseStudies')}</span>
                <CheckCircle className="relative z-10 w-5 h-5 ml-3 enterprise-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}