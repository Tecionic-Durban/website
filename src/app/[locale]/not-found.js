import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function NotFound() {
  const t = await getTranslations('notFound')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-emerald-50 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-7xl md:text-8xl font-black text-emerald-600">404</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t('heading')}
        </h1>

        <p className="text-lg text-gray-600 mb-3">
          {t('description')}
        </p>

        <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto">
          {t('subDescription')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300"
          >
            {t('backHome')}
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg font-semibold transition-all duration-300"
          >
            {t('contactCta')}
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-widest">
            {t('helpfulLinks')}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            <Link href="/services/filtration" className="text-emerald-600 hover:text-emerald-700">
              {t('links.filtration')}
            </Link>
            <Link href="/services/organic-treatment" className="text-emerald-600 hover:text-emerald-700">
              {t('links.organicTreatment')}
            </Link>
            <Link href="/industries/copper" className="text-emerald-600 hover:text-emerald-700">
              {t('links.copperIndustry')}
            </Link>
            <Link href="/casos-de-exito" className="text-emerald-600 hover:text-emerald-700">
              {t('links.caseStudies')}
            </Link>
            <Link href="/about" className="text-emerald-600 hover:text-emerald-700">
              {t('links.about')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
