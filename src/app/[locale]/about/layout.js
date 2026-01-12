// src/app/[locale]/about/layout.js - SEO metadata for about page
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
      title: 'Sobre Nosotros - 23+ Años de Experiencia en Filtración | Tecionic',
      description: 'Conozca Tecionic: más de 23 años liderando servicios móviles de filtración para minería LIX/SX/EW en Latinoamérica. Nuestra historia, misión y valores.',
      keywords: 'sobre tecionic, empresa filtración minería, historia tecionic, servicios mineros latinoamérica, filtro prensa móvil empresa',
    },
    'es-mx': {
      title: 'Sobre Nosotros - 23+ Años de Experiencia en Filtración | Tecionic',
      description: 'Conozca Tecionic: más de 23 años liderando servicios móviles de filtración para minería LIX/SX/EW en Latinoamérica. Nuestra historia, misión y valores.',
      keywords: 'sobre tecionic, empresa filtración minería, historia tecionic, servicios mineros latinoamérica, filtro prensa móvil empresa',
    },
    'pt-br': {
      title: 'Sobre Nós - 23+ Anos de Experiência em Filtração | Tecionic',
      description: 'Conheça a Tecionic: mais de 23 anos liderando serviços móveis de filtração para mineração LIX/SX/EW na América Latina. Nossa história, missão e valores.',
      keywords: 'sobre tecionic, empresa filtração mineração, história tecionic, serviços mineiros américa latina, filtro prensa móvel empresa',
    },
    'en': {
      title: 'About Us - 23+ Years of Filtration Experience | Tecionic',
      description: 'Discover Tecionic: over 23 years leading mobile filtration services for LIX/SX/EW mining in Latin America. Our history, mission and values.',
      keywords: 'about tecionic, mining filtration company, tecionic history, latin america mining services, mobile filter press company',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/about`,
        'es-MX': `${baseUrl}/es-mx/about`,
        'pt-BR': `${baseUrl}/pt-br/about`,
        'en': `${baseUrl}/en/about`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/about`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/filtro_prensa_1200_drone_view.png`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Empresa de filtración móvil para minería',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/filtro_prensa_1200_drone_view.png`],
    },
  };
}

export default function AboutLayout({ children }) {
  return children;
}
