'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function TermsPage() {
  const t = useTranslations('terms')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Clean Tecionic style */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-3">
            {t('lastUpdated')}: 3 de enero de 2025
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12 space-y-10">

            {/* Introduction */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                {t('intro')}
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section1.title')}</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-3">{t('section1.subtitle1')}</h3>
              <p className="text-gray-700 mb-4">
                {t('section1.description1')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section1.items1').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{t('section1.subtitle2')}</h3>
              <p className="text-gray-700 mb-4">{t('section1.description2')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section1.items2').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section2.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section2.description1')}
              </p>

              <p className="text-gray-700">
                {t('section2.description2')}
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section3.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section3.description')}
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium">{t('section3.warning.title')}</p>
                <p className="text-sm text-amber-700 mt-1">
                  {t('section3.warning.description')}
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section4.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section4.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section4.items').slice(0, 3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                <li>
                  {t.raw('section4.items')[3]}{' '}
                  <Link href="/privacy" className="text-emerald-600 hover:underline">
                    {t.raw('section4.items')[3].includes('Privacy') ? 'Privacy Policy' : 'Politica de Privacidad'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section5.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section5.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section5.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section6.title')}</h2>

              <p className="text-gray-700">
                {t('section6.description')}
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section7.title')}</h2>

              <p className="text-gray-700">
                {t('section7.description')}
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section8.title')}</h2>

              <p className="text-gray-700">
                {t('section8.description')}
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section9.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section9.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section9.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section10.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section10.description')}
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-800 font-semibold">{t('section10.company')}</p>
                <p className="text-gray-600 mt-2">
                  <strong>{t('section10.email')}</strong>{' '}
                  <a href="mailto:contacto@tecionic.com" className="text-emerald-600 hover:underline">
                    contacto@tecionic.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>{t('section10.address')}</strong> {t('section10.addressValue')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
