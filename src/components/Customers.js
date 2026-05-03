// src/components/Customers.js
'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// All 27 logos have been trimmed of canvas whitespace (sharp `.trim()`).
// Uniform height (h-10 = 40px) — the standard pattern for client logo bands.
// Widths vary naturally with each logo's aspect; flex spacing handles separation.
const allLogos = [
  { name: 'Escondida BHP',           logo: '/client_logos/ESCONDIDA-BHP-LOGO.png' },
  { name: 'Anglo American',          logo: '/client_logos/anglo_american_logo.png' },
  { name: 'Antucoya',                logo: '/client_logos/antucoya_antofagasta_minerals.png' },
  { name: 'Capstone Manto Verde',    logo: '/client_logos/capstone_copper_manto_verde_logo.png' },
  { name: 'Capstone Mantos Blancos', logo: '/client_logos/capstone_copper_mantos_blancos_logo.png' },
  { name: 'Caserones',               logo: '/client_logos/caserones_lumina_copper_logo.png' },
  { name: 'Centinela',               logo: '/client_logos/centinela_antofagasta_minerals_logo.png' },
  { name: 'Cerro Colorado',          logo: '/client_logos/cerro_colorado_bhp_logo.png' },
  { name: 'Chuquicamata',            logo: '/client_logos/chuqui_codelco_logo.png' },
  { name: 'CMPC',                    logo: '/client_logos/cmpc_logo.png' },
  { name: 'Radomiro Tomic',          logo: '/client_logos/codelco_radomiro_tomic_logo.png' },
  { name: 'Collahuasi',              logo: '/client_logos/collahuasi_logo.png' },
  { name: 'Eco Metales',             logo: '/client_logos/eco_metales_logo.png' },
  { name: 'El Abra',                 logo: '/client_logos/el_abra_logo.png' },
  { name: 'El Teniente',             logo: '/client_logos/el_teniente_codelco_logo.png' },
  { name: 'ENAMI',                   logo: '/client_logos/enami_logo.png' },
  { name: 'ENAP',                    logo: '/client_logos/enap_logo.png' },
  { name: 'Gaby',                    logo: '/client_logos/gaby_codelco_logo.png' },
  { name: 'KGHM',                    logo: '/client_logos/kghm_logo.png' },
  { name: 'Las Cenizas',             logo: '/client_logos/las_cenizas_logo.png' },
  { name: 'Lomas Bayas',             logo: '/client_logos/lomas_bayas_logo.png' },
  { name: 'Marcobre',                logo: '/client_logos/marcobre_logo.png' },
  { name: 'Michilla',                logo: '/client_logos/michilla_logo.png' },
  { name: 'Salvador',                logo: '/client_logos/salvador_codelco_logo.png' },
  { name: 'Spence BHP',              logo: '/client_logos/spence_bhp_logo.png' },
  { name: 'SQM',                     logo: '/client_logos/sqm_logo.png' },
  { name: 'Teck',                    logo: '/client_logos/teck_logo.png' },
]

export default function Customers() {
  const t = useTranslations('customers')
  const carouselRef = useRef(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let animationFrameId
    const positionRef = { current: 0 }
    const speed = 0.6

    const animate = () => {
      if (!isPausedRef.current && carouselRef.current) {
        positionRef.current -= speed
        const halfWidth = carouselRef.current.scrollWidth / 2
        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current = 0
        }
        carouselRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-center text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-8 lg:mb-10">
          {t('subheader')}
        </p>

        <div className="relative overflow-hidden">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={carouselRef}
            className="flex items-center"
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
            style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
          >
            {[...allLogos, ...allLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-2 flex items-center justify-center h-14 w-[160px]"
              >
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={160}
                  height={56}
                  loading="lazy"
                  className="max-h-10 max-w-[130px] w-auto h-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
