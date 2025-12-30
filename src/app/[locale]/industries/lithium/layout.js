// src/app/[locale]/industries/lithium/layout.js - SEO metadata for lithium industry page
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
      title: 'Servicios de Filtración para Minería de Litio | Tecionic',
      description: 'Soluciones móviles de filtración para operaciones de litio en salares. Equipos resistentes a salmueras corrosivas. Servicio en el Triángulo del Litio de Sudamérica.',
      keywords: 'filtración litio, tratamiento salmuera litio, filtro prensa litio, minería litio Chile, salar Atacama, carbonato de litio, triángulo del litio',
    },
    'es-mx': {
      title: 'Servicios de Filtración para Minería de Litio | Tecionic',
      description: 'Soluciones móviles de filtración para operaciones de litio en salares. Equipos resistentes a salmueras corrosivas. Servicio en el Triángulo del Litio de Sudamérica.',
      keywords: 'filtración litio, tratamiento salmuera litio, filtro prensa litio, minería litio México, extracción litio, carbonato de litio, procesamiento litio',
    },
    'pt-br': {
      title: 'Serviços de Filtração para Mineração de Lítio | Tecionic',
      description: 'Soluções móveis de filtração para operações de lítio em salinas. Equipamentos resistentes a salmouras corrosivas. Serviço no Triângulo do Lítio da América do Sul.',
      keywords: 'filtração lítio, tratamento salmoura lítio, filtro prensa lítio, mineração lítio Brasil, carbonato de lítio, processamento lítio',
    },
    'en': {
      title: 'Lithium Mining Filtration Services | Tecionic',
      description: 'Mobile filtration solutions for lithium operations in salt flats. Equipment resistant to corrosive brines. Service in South America\'s Lithium Triangle.',
      keywords: 'lithium filtration, lithium brine treatment, lithium filter press, lithium mining services, Atacama salt flat, lithium carbonate, lithium triangle',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/industries/lithium`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/industries/lithium`,
        'es-MX': `${baseUrl}/es-mx/industries/lithium`,
        'pt-BR': `${baseUrl}/pt-br/industries/lithium`,
        'en': `${baseUrl}/en/industries/lithium`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}/industries/lithium`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/lithium_mine.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Servicios de filtración para minería de litio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/lithium_mine.jpg`],
    },
  };
}

export default function LithiumLayout({ children }) {
  return children;
}
