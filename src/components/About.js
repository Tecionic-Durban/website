'use client'
import { useState, useEffect, useRef } from 'react'
import { Finance, Dashboard, Portfolio, Flash, Time, Security } from '@carbon/icons-react'
import { useTranslations } from 'next-intl'

export default function About() {
  const sectionRef = useRef(null)
  const t = useTranslations('about')
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.progressive-reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 70)
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const cards = [
    { key: 'opexModel',            icon: <Finance className="w-6 h-6" /> },
    { key: 'performance',          icon: <Dashboard className="w-6 h-6" /> },
    { key: 'multisector',          icon: <Portfolio className="w-6 h-6" /> },
    { key: 'plugAndPlay',          icon: <Flash className="w-6 h-6" /> },
    { key: 'flexibleContracts',    icon: <Time className="w-6 h-6" /> },
    { key: 'corrosiveEnvironments',icon: <Security className="w-6 h-6" /> },
  ]

  // Desktop grid style: active card grows wide (5fr) others stay narrow (1fr).
  const desktopGridStyle = {
    gridTemplateColumns: cards.map((_, i) => (i === activeIndex ? '5fr' : '1fr')).join(' '),
    gridTemplateRows: '1fr',
  }

  const activeCard = cards[activeIndex]

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24">

          {/* Left — sticky headline */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="progressive-reveal text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
              {t('headline')}
              <span className="block text-emerald-500">{t('headlineSub')}</span>
            </h2>
            <p className="progressive-reveal text-lg text-gray-500 leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Right — expanding cards */}
          {/* Desktop: horizontal row, active card expands wider on hover/tap */}
          <ul
            className="progressive-reveal hidden md:grid gap-2 transition-[grid-template-columns] duration-500 ease-out"
            style={{ ...desktopGridStyle, height: '480px' }}
          >
            {cards.map((card, index) => {
              const isActive = activeIndex === index
              return (
                <li
                  key={card.key}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-emerald-900 min-h-0 min-w-0 md:min-w-[52px]"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Collapsed: vertical title */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      {t(`cards.${card.key}.title`)}
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className={`flex items-start justify-between gap-4 transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0 delay-[350ms]' : 'opacity-0 -translate-y-2'}`}>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {t(`cards.${card.key}.title`)}
                      </h3>
                      <div className="text-white/70 shrink-0">{card.icon}</div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className={`text-xs font-bold text-emerald-300 uppercase tracking-widest transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0 delay-[420ms]' : 'opacity-0 translate-y-3'}`}>
                        {t(`cards.${card.key}.metric`)}
                      </span>
                      <p className={`max-w-xs text-sm text-white/70 leading-relaxed transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0 delay-[490ms]' : 'opacity-0 translate-y-3'}`}>
                        {t(`cards.${card.key}.description`)}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* Mobile: 6 thin tabs in a row, active content expands vertically below */}
          <div className="progressive-reveal md:hidden">
            {/* Tabs row */}
            <ul className="grid grid-cols-6 gap-1.5 mb-3" role="tablist">
              {cards.map((card, index) => {
                const isActive = activeIndex === index
                return (
                  <li key={card.key} className="contents" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`about-card-panel-${index}`}
                      onClick={() => setActiveIndex(index)}
                      className={`flex h-14 items-center justify-center rounded-xl transition-colors duration-200 ${
                        isActive
                          ? 'bg-emerald-900 text-white'
                          : 'bg-emerald-900/30 text-white/50 hover:bg-emerald-900/50 hover:text-white/80'
                      }`}
                    >
                      <span className="sr-only">{t(`cards.${card.key}.title`)}</span>
                      <span aria-hidden="true">{card.icon}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Active content panel */}
            <div
              id={`about-card-panel-${activeIndex}`}
              role="tabpanel"
              className="rounded-2xl bg-emerald-900 p-6 min-h-[280px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {t(`cards.${activeCard.key}.title`)}
                </h3>
                <div className="text-white/70 shrink-0">{activeCard.icon}</div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                  {t(`cards.${activeCard.key}.metric`)}
                </span>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t(`cards.${activeCard.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
