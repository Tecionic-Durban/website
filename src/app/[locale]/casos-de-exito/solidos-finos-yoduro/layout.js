// src/app/[locale]/casos-de-exito/solidos-finos-yoduro/layout.js - SEO metadata
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
      title: 'Caso de Éxito: Sólidos Finos en Producción de Yoduro | Tecionic',
      description: 'Caso de éxito en filtración de sólidos finos para producción de yoduro. Recuperación de partículas y mejora de pureza del producto.',
      keywords: 'caso éxito sólidos finos, producción yoduro, filtración partículas, proyecto industria química',
    },
    'es-mx': {
      title: 'Caso de Éxito: Sólidos Finos en Producción de Yoduro | Tecionic',
      description: 'Caso de éxito en filtración de sólidos finos para producción de yoduro. Recuperación de partículas y mejora de pureza del producto.',
      keywords: 'caso éxito sólidos finos, producción yoduro, filtración partículas, proyecto industria química',
    },
    'pt-br': {
      title: 'Caso de Sucesso: Sólidos Finos em Produção de Iodeto | Tecionic',
      description: 'Caso de sucesso em filtração de sólidos finos para produção de iodeto. Recuperação de partículas e melhoria de pureza do produto.',
      keywords: 'caso sucesso sólidos finos, produção iodeto, filtração partículas, projeto indústria química',
    },
    'en': {
      title: 'Success Story: Fine Solids in Iodide Production | Tecionic',
      description: 'Success story in fine solids filtration for iodide production. Particle recovery and product purity improvement.',
      keywords: 'fine solids success story, iodide production, particle filtration, chemical industry project',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito/solidos-finos-yoduro`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito/solidos-finos-yoduro`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito/solidos-finos-yoduro`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito/solidos-finos-yoduro`,
        'en': `${baseUrl}/en/casos-de-exito/solidos-finos-yoduro`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito/solidos-finos-yoduro`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function SolidosFinosYoduroLayout({ children }) {
  return children;
}
