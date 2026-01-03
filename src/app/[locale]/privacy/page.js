'use client'

import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('privacy')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Clean Tecionic style */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12 space-y-10">

            {/* Introduction */}
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                {t('context')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('intro')}
              </p>
              <p className="text-gray-600 text-sm">
                {t('legalNote')}
              </p>
            </div>

            {/* Section 1: Data Collection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section1.title')}</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{t('section1.subtitle1')}</h3>
              <p className="text-gray-700 mb-4">
                {t('section1.description1')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section1.items1').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">{t('section1.subtitle2')}</h3>
              <p className="text-gray-700 mb-4">
                {t('section1.description2')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section1.items2').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Section 2: Use of Data */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section2.title')}</h2>

              <p className="text-gray-700 mb-4">{t('section2.description')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section2.items').map((item, index) => (
                  <li key={index}><strong>{item.title}</strong> {item.description}</li>
                ))}
              </ul>
            </div>

            {/* Section 3: Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section3.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section3.description')}
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">{t('section3.posthog.title')}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>{t('section3.posthog.purpose')}</strong> {t('section3.posthog.purposeDesc')}</li>
                  <li><strong>{t('section3.posthog.data')}</strong> {t('section3.posthog.dataDesc')}</li>
                  <li><strong>{t('section3.posthog.retention')}</strong> {t('section3.posthog.retentionDesc')}</li>
                </ul>
              </div>

              <p className="text-gray-700">
                {t('section3.choice')}
              </p>
            </div>

            {/* Section 4: Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section4.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section4.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section4.items').map((item, index) => (
                  <li key={index}><strong>{item.title}</strong> {item.description}</li>
                ))}
              </ul>
            </div>

            {/* Section 5: Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section5.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section5.description')}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('section5.rights.access.title')}</h4>
                  <p className="text-sm text-gray-600">{t('section5.rights.access.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('section5.rights.rectification.title')}</h4>
                  <p className="text-sm text-gray-600">{t('section5.rights.rectification.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('section5.rights.deletion.title')}</h4>
                  <p className="text-sm text-gray-600">{t('section5.rights.deletion.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('section5.rights.opposition.title')}</h4>
                  <p className="text-sm text-gray-600">{t('section5.rights.opposition.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('section5.rights.portability.title')}</h4>
                  <p className="text-sm text-gray-600">{t('section5.rights.portability.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('section5.rights.withdrawal.title')}</h4>
                  <p className="text-sm text-gray-600">{t('section5.rights.withdrawal.description')}</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                {t('section5.contact')} <a href="mailto:privacidad@tecionic.com" className="text-emerald-600 hover:underline">privacidad@tecionic.com</a>
              </p>
            </div>

            {/* Section 6: Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section6.title')}</h2>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {t.raw('section6.items').map((item, index) => (
                  <li key={index}><strong>{item.title}</strong> {item.description}</li>
                ))}
              </ul>
            </div>

            {/* Section 7: Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section7.title')}</h2>

              <p className="text-gray-700">
                {t('section7.description')}
              </p>
            </div>

            {/* Section 8: International Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section8.title')}</h2>

              <p className="text-gray-700">
                {t('section8.description')}
              </p>
            </div>

            {/* Section 9: Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section9.title')}</h2>

              <p className="text-gray-700">
                {t('section9.description')}
              </p>
            </div>

            {/* Section 10: Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('section10.title')}</h2>

              <p className="text-gray-700 mb-4">
                {t('section10.description')}
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-800 font-semibold">{t('section10.company')}</p>
                <p className="text-gray-600">{t('section10.role')}</p>
                <p className="text-gray-600 mt-2">
                  <strong>{t('section10.email')}</strong>{' '}
                  <a href="mailto:privacidad@tecionic.com" className="text-emerald-600 hover:underline">
                    privacidad@tecionic.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>{t('section10.address')}</strong> {t('section10.addressValue')}
                </p>
              </div>
            </div>

            {/* Legal Compliance Note */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('compliance.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('compliance.description')}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
