// src/app/[locale]/industries/crude-oil/layout.js - SEO metadata for crude oil industry page
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
      title: 'Servicios de Filtración para Industria Petrolera | Tecionic',
      description: 'Soluciones móviles para tratamiento de lodos petroleros y recuperación de hidrocarburos. Equipos especializados para refinerías. Operaciones ambientalmente responsables.',
      keywords: 'filtración petróleo, tratamiento lodos petroleros, recuperación hidrocarburos, filtro prensa refinería, borra petrolera, servicios petroleros Chile, tratamiento residuos refinería',
    },
    'es-mx': {
      title: 'Servicios de Filtración para Industria Petrolera | Tecionic',
      description: 'Soluciones móviles para tratamiento de lodos petroleros y recuperación de hidrocarburos. Equipos especializados para refinerías. Operaciones ambientalmente responsables.',
      keywords: 'filtración petróleo, tratamiento lodos petroleros, recuperación hidrocarburos, filtro prensa refinería, borra petrolera, servicios petroleros México, tratamiento residuos refinería',
    },
    'pt-br': {
      title: 'Serviços de Filtração para Indústria Petrolífera | Tecionic',
      description: 'Soluções móveis para tratamento de lodos de petróleo e recuperação de hidrocarbonetos. Equipamentos especializados para refinarias. Operações ambientalmente responsáveis.',
      keywords: 'filtração petróleo, tratamento lodos petróleo, recuperação hidrocarbonetos, filtro prensa refinaria, borra petrolífera, serviços petrolíferos Brasil, tratamento resíduos refinaria',
    },
    'en': {
      title: 'Oil Industry Filtration Services | Tecionic',
      description: 'Mobile solutions for petroleum sludge treatment and hydrocarbon recovery. Specialized equipment for refineries. Environmentally responsible operations.',
      keywords: 'oil filtration, petroleum sludge treatment, hydrocarbon recovery, refinery filter press, oil sludge, petroleum services, refinery waste treatment',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/industries/crude-oil`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/crude-oil`,
        'es-MX': `${baseUrl}/es-mx/industries/crude-oil`,
        'pt-BR': `${baseUrl}/pt-br/industries/crude-oil`,
        'en': `${baseUrl}/en/industries/crude-oil`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/crude-oil`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/oil_refinery.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para industria petrolera',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/oil_refinery.jpg`],
    },
  };
}

export default function CrudeOilLayout({ children }) {
  return children;
}
