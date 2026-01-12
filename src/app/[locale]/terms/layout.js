// src/app/[locale]/terms/layout.js - SEO metadata
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
      title: 'Términos y Condiciones | Tecionic',
      description: 'Términos y condiciones de uso del sitio web de Tecionic. Condiciones legales para el uso de nuestros servicios.',
    },
    'es-mx': {
      title: 'Términos y Condiciones | Tecionic',
      description: 'Términos y condiciones de uso del sitio web de Tecionic. Condiciones legales para el uso de nuestros servicios.',
    },
    'pt-br': {
      title: 'Termos e Condições | Tecionic',
      description: 'Termos e condições de uso do site da Tecionic. Condições legais para o uso de nossos serviços.',
    },
    'en': {
      title: 'Terms and Conditions | Tecionic',
      description: 'Tecionic website terms and conditions. Legal conditions for the use of our services.',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/terms`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/terms`,
        'es-MX': `${baseUrl}/es-mx/terms`,
        'pt-BR': `${baseUrl}/pt-br/terms`,
        'en': `${baseUrl}/en/terms`,
      },
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function TermsLayout({ children }) {
  return children;
}
