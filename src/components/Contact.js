// src/components/Contact.js
'use client'
import { useEffect, useRef } from 'react'
import { Link } from '@/i18n/navigation'
import { Location, Email, Edit, ChevronRight } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const contactRef = useRef(null)
  const t = useTranslations('contact')

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

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Editorial Header */}
        <div className="text-center mb-16 progressive-reveal">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {t('headline')}
          </h2>

          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Contact Pathways */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 progressive-reveal">
          <a
            href="mailto:contacto@tsf.cl"
            className="group flex items-center justify-between w-full md:w-auto min-w-[280px] px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Email className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-lg font-semibold text-emerald-200">{t('email')}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <Link
            href="/contacto"
            className="group flex items-center justify-between w-full md:w-auto min-w-[280px] px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-xl transition-all duration-300 border border-emerald-400/20 hover:border-emerald-400/40"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Edit className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-lg font-semibold text-emerald-200">{t('contactForm')}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Location Info */}
        <div className="text-center mb-12 progressive-reveal">
          <div className="inline-flex items-center space-x-3 text-emerald-300">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
              <Location className="w-5 h-5" />
            </div>
            <div className="text-lg">
              <span className="font-semibold">{t('locations.santiago')}</span>
              <span className="text-emerald-400/60 mx-2">•</span>
              <span className="font-semibold">{t('locations.calama')}</span>
              <span className="text-emerald-400/60 mx-2">•</span>
              <span className="font-semibold">{t('locations.lima')}</span>
            </div>
          </div>
        </div>

        {/* Trust Line */}
        <div className="text-center progressive-reveal">
          <p className="text-emerald-200/70 text-lg">
            {t('trustLine')}
          </p>
        </div>
      </div>
    </section>
  )
}