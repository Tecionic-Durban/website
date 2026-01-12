// src/app/[locale]/casos-de-exito/lodos-petroleros/layout.js - SEO metadata
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
      title: 'Caso de Éxito: Tratamiento Lodos Petroleros | Tecionic',
      description: 'Caso de éxito en tratamiento de lodos petroleros con filtro prensa móvil. Reducción de volumen y recuperación de hidrocarburos.',
      keywords: 'caso éxito lodos petroleros, tratamiento crudo, filtro prensa petróleo, proyecto industria petrolera',
    },
    'es-mx': {
      title: 'Caso de Éxito: Tratamiento Lodos Petroleros | Tecionic',
      description: 'Caso de éxito en tratamiento de lodos petroleros con filtro prensa móvil. Reducción de volumen y recuperación de hidrocarburos.',
      keywords: 'caso éxito lodos petroleros, tratamiento crudo, filtro prensa petróleo, proyecto industria petrolera',
    },
    'pt-br': {
      title: 'Caso de Sucesso: Tratamento Lodos Petrolíferos | Tecionic',
      description: 'Caso de sucesso em tratamento de lodos petrolíferos com filtro prensa móvel. Redução de volume e recuperação de hidrocarbonetos.',
      keywords: 'caso sucesso lodos petrolíferos, tratamento crude, filtro prensa petróleo, projeto indústria petrolífera',
    },
    'en': {
      title: 'Success Story: Oil Sludge Treatment | Tecionic',
      description: 'Success story in oil sludge treatment with mobile filter press. Volume reduction and hydrocarbon recovery.',
      keywords: 'oil sludge success story, crude treatment, oil filter press, oil industry project',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito/lodos-petroleros`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito/lodos-petroleros`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito/lodos-petroleros`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito/lodos-petroleros`,
        'en': `${baseUrl}/en/casos-de-exito/lodos-petroleros`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito/lodos-petroleros`,
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

export default function LodosPetrolerosLayout({ children }) {
  return children;
}
