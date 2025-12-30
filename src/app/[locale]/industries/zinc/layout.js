// src/app/[locale]/industries/zinc/layout.js - SEO metadata for zinc industry page
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
      title: 'Servicios de Filtración para Minería de Zinc | Tecionic',
      description: 'Soluciones móviles de filtración y tratamiento de borra para operaciones de zinc LIX/SX/EW. Equipos especializados para alta pureza. Más de 23 años de experiencia.',
      keywords: 'filtración zinc, tratamiento electrolito zinc, purificación zinc, filtro prensa zinc, minería zinc Chile, electrowinning zinc, hidrometalurgia zinc',
    },
    'es-mx': {
      title: 'Servicios de Filtración para Minería de Zinc | Tecionic',
      description: 'Soluciones móviles de filtración y tratamiento de borra para operaciones de zinc LIX/SX/EW. Equipos especializados para alta pureza. Más de 23 años de experiencia.',
      keywords: 'filtración zinc, tratamiento electrolito zinc, purificación zinc, filtro prensa zinc, minería zinc México, electrowinning zinc, hidrometalurgia zinc',
    },
    'pt-br': {
      title: 'Serviços de Filtração para Mineração de Zinco | Tecionic',
      description: 'Soluções móveis de filtração e tratamento de borra para operações de zinco LIX/SX/EW. Equipamentos especializados para alta pureza. Mais de 23 anos de experiência.',
      keywords: 'filtração zinco, tratamento eletrólito zinco, purificação zinco, filtro prensa zinco, mineração zinco Brasil, electrowinning zinco, hidrometalurgia zinco',
    },
    'en': {
      title: 'Zinc Mining Filtration Services | Tecionic',
      description: 'Mobile filtration and sludge treatment solutions for zinc LIX/SX/EW operations. Specialized equipment for high purity. Over 23 years of experience.',
      keywords: 'zinc filtration, zinc electrolyte treatment, zinc purification, zinc filter press, zinc mining services, zinc electrowinning, zinc hydrometallurgy',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/industries/zinc`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/zinc`,
        'es-MX': `${baseUrl}/es-mx/industries/zinc`,
        'pt-BR': `${baseUrl}/pt-br/industries/zinc`,
        'en': `${baseUrl}/en/industries/zinc`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/zinc`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/zinc_ore.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para minería de zinc',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/zinc_ore.jpg`],
    },
  };
}

export default function ZincLayout({ children }) {
  return children;
}
