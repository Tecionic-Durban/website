// src/components/Contact.js
'use client'
import { useEffect, useRef } from 'react'
import { Link } from '@/i18n/navigation'
import { Location, ArrowRight } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const contactRef = useRef(null)
  const t = useTranslations('contact')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressiveElements = entry.target.querySelectorAll('.progressive-reveal')
          progressiveElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('revealed')
            }, index * 90)
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={contactRef} id="contact-section" className="relative py-28 lg:py-40 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="progressive-reveal text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
          {t('headline')}
        </h2>

        <p className="progressive-reveal text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          {t('description')}
        </p>

        <div className="progressive-reveal flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            {t('contactForm')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <a
            href="mailto:contacto@tsf.cl"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium px-2 py-3.5 transition-colors"
          >
            <span className="border-b border-slate-700 group-hover:border-slate-500">{t('email')}</span>
          </a>
        </div>

        <div className="progressive-reveal flex flex-col items-center gap-4 pt-10 border-t border-slate-900">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500">
            <Location className="w-4 h-4" />
            <span>{t('locations.santiago')}</span>
            <span className="text-slate-700">·</span>
            <span>{t('locations.calama')}</span>
            <span className="text-slate-700">·</span>
            <span>{t('locations.lima')}</span>
          </div>
          <p className="text-xs lg:text-sm text-slate-600 max-w-xl">
            {t('trustLine')}
          </p>
        </div>
      </div>
    </section>
  )
}