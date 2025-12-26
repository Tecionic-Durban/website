// src/components/Footer.js
'use client'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()

  const services = [
    { key: 'filtration', href: '/services/filtration' },
    { key: 'organicTreatment', href: '/services/organic-treatment' },
    { key: 'concentrateDehydration', href: '/services/concentrate-dehydration' },
    { key: 'fineSolids', href: '/services/fine-solids' },
    { key: 'waterClarification', href: '/services/water-clarification' },
    { key: 'ewCleaning', href: '/services/ew-cleaning' }
  ]

  const industries = [
    { key: 'copper', href: '/industries/copper' },
    { key: 'zinc', href: '/industries/zinc' },
    { key: 'lithium', href: '/industries/lithium' },
    { key: 'potassium', href: '/industries/potassium' },
    { key: 'crudeOil', href: '/industries/crude-oil' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg p-2">
                <Image 
                  src="/logo.png" 
                  alt="Tec-Ionic Durban"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tec-Ionic Durban</h3>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-300">{t('footer.offices')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contacto@tsf.cl" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  contacto@tsf.cl
                </a>
              </div>
              <div className="mt-4">
                <Link href="/contacto" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  {t('footer.viewContactInfo')} →
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {t(`services.items.${service.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.industries')}</h4>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.key}>
                  <Link
                    href={industry.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {t(`header.industries.${industry.key}.name`)}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-8">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/casos-de-exito" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  {t('footer.caseStudies')}
                </Link>
              </li>
              <li>
                <Link href="/especificaciones-tecnicas" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  {t('footer.technicalGuides')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  {t('footer.webinars')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Tec-Ionic Durban S.A. {t('footer.copyright')}
          </div>

          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}