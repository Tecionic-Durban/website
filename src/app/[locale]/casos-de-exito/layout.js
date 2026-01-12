// src/app/[locale]/casos-de-exito/layout.js - SEO metadata for case studies
import { routing } from '@/i18n/routing';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadata = {
    'es-cl': {
      title: 'Casos de Éxito - Proyectos de Filtración Minera | Tecionic',
      description: 'Conozca nuestros casos de éxito en filtración móvil para minería. Proyectos reales con resultados medibles en operaciones LIX/SX/EW en Latinoamérica.',
      keywords: 'casos éxito minería, proyectos filtración, resultados filtro prensa, casos estudio minería, tecionic proyectos',
    },
    'es-mx': {
      title: 'Casos de Éxito - Proyectos de Filtración Minera | Tecionic',
      description: 'Conozca nuestros casos de éxito en filtración móvil para minería. Proyectos reales con resultados medibles en operaciones LIX/SX/EW en Latinoamérica.',
      keywords: 'casos éxito minería, proyectos filtración, resultados filtro prensa, casos estudio minería, tecionic proyectos',
    },
    'pt-br': {
      title: 'Casos de Sucesso - Projetos de Filtração Mineração | Tecionic',
      description: 'Conheça nossos casos de sucesso em filtração móvel para mineração. Projetos reais com resultados mensuráveis em operações LIX/SX/EW na América Latina.',
      keywords: 'casos sucesso mineração, projetos filtração, resultados filtro prensa, casos estudo mineração, tecionic projetos',
    },
    'en': {
      title: 'Success Stories - Mining Filtration Projects | Tecionic',
      description: 'Discover our success stories in mobile filtration for mining. Real projects with measurable results in LIX/SX/EW operations across Latin America.',
      keywords: 'mining success stories, filtration projects, filter press results, mining case studies, tecionic projects',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito`,
        'en': `${baseUrl}/en/casos-de-exito`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function CasosDeExitoLayout({ children }) {
  return children;
}
