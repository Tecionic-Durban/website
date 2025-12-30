// src/app/[locale]/industries/copper/layout.js - SEO metadata for copper industry page
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
      title: 'Servicios de Filtración para Minería de Cobre | Tecionic',
      description: 'Soluciones móviles de filtración y tratamiento de borra para operaciones de cobre LIX/SX/EW. Sin CAPEX, movilización en 48 horas. Más de 23 años de experiencia en Latinoamérica.',
      keywords: 'filtración cobre, tratamiento orgánico SX, limpieza celdas EW, deshidratación concentrados, filtro prensa móvil, minería cobre Chile, servicios hidrometalurgia',
    },
    'es-mx': {
      title: 'Servicios de Filtración para Minería de Cobre | Tecionic',
      description: 'Soluciones móviles de filtración y tratamiento de borra para operaciones de cobre LIX/SX/EW. Sin CAPEX, movilización en 48 horas. Más de 23 años de experiencia en Latinoamérica.',
      keywords: 'filtración cobre, tratamiento orgánico SX, limpieza celdas EW, deshidratación concentrados, filtro prensa móvil, minería cobre México, servicios hidrometalurgia',
    },
    'pt-br': {
      title: 'Serviços de Filtração para Mineração de Cobre | Tecionic',
      description: 'Soluções móveis de filtração e tratamento de borra para operações de cobre LIX/SX/EW. Sem CAPEX, mobilização em 48 horas. Mais de 23 anos de experiência na América Latina.',
      keywords: 'filtração cobre, tratamento orgânico SX, limpeza células EW, desidratação concentrados, filtro prensa móvel, mineração cobre Brasil, serviços hidrometalurgia',
    },
    'en': {
      title: 'Copper Mining Filtration Services | Tecionic',
      description: 'Mobile filtration and sludge treatment solutions for copper LIX/SX/EW operations. Zero CAPEX, 48-hour mobilization. Over 23 years of experience in Latin America.',
      keywords: 'copper filtration, SX organic treatment, EW cell cleaning, concentrate dehydration, mobile filter press, copper mining services, hydrometallurgy services',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/industries/copper`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/copper`,
        'es-MX': `${baseUrl}/es-mx/industries/copper`,
        'pt-BR': `${baseUrl}/pt-br/industries/copper`,
        'en': `${baseUrl}/en/industries/copper`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/copper`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/copper_ore.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para minería de cobre',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/copper_ore.jpg`],
    },
  };
}

export default function CopperLayout({ children }) {
  return children;
}
