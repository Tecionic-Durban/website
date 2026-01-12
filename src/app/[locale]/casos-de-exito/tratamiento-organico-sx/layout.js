// src/app/[locale]/casos-de-exito/tratamiento-organico-sx/layout.js - SEO metadata
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
      title: 'Caso de Éxito: Tratamiento Orgánico SX | Tecionic',
      description: 'Caso de éxito en tratamiento de orgánico degradado en circuitos SX. Recuperación de solventes y mejora de calidad de extracción.',
      keywords: 'caso éxito tratamiento orgánico, SX degradados, recuperación solventes, proyecto extracción solventes',
    },
    'es-mx': {
      title: 'Caso de Éxito: Tratamiento Orgánico SX | Tecionic',
      description: 'Caso de éxito en tratamiento de orgánico degradado en circuitos SX. Recuperación de solventes y mejora de calidad de extracción.',
      keywords: 'caso éxito tratamiento orgánico, SX degradados, recuperación solventes, proyecto extracción solventes',
    },
    'pt-br': {
      title: 'Caso de Sucesso: Tratamento Orgânico SX | Tecionic',
      description: 'Caso de sucesso em tratamento de orgânico degradado em circuitos SX. Recuperação de solventes e melhoria de qualidade de extração.',
      keywords: 'caso sucesso tratamento orgânico, SX degradados, recuperação solventes, projeto extração solventes',
    },
    'en': {
      title: 'Success Story: SX Organic Treatment | Tecionic',
      description: 'Success story in degraded organic treatment in SX circuits. Solvent recovery and extraction quality improvement.',
      keywords: 'organic treatment success story, SX degraded, solvent recovery, solvent extraction project',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/casos-de-exito/tratamiento-organico-sx`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/casos-de-exito/tratamiento-organico-sx`,
        'es-MX': `${baseUrl}/es-mx/casos-de-exito/tratamiento-organico-sx`,
        'pt-BR': `${baseUrl}/pt-br/casos-de-exito/tratamiento-organico-sx`,
        'en': `${baseUrl}/en/casos-de-exito/tratamiento-organico-sx`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/casos-de-exito/tratamiento-organico-sx`,
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

export default function TratamientoOrganicoSXLayout({ children }) {
  return children;
}
