// src/app/[locale]/privacy/layout.js - SEO metadata
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
      title: 'Política de Privacidad | Tecionic',
      description: 'Política de privacidad de Tecionic. Información sobre cómo recopilamos, usamos y protegemos sus datos personales.',
    },
    'es-mx': {
      title: 'Política de Privacidad | Tecionic',
      description: 'Política de privacidad de Tecionic. Información sobre cómo recopilamos, usamos y protegemos sus datos personales.',
    },
    'pt-br': {
      title: 'Política de Privacidade | Tecionic',
      description: 'Política de privacidade da Tecionic. Informações sobre como coletamos, usamos e protegemos seus dados pessoais.',
    },
    'en': {
      title: 'Privacy Policy | Tecionic',
      description: 'Tecionic privacy policy. Information about how we collect, use and protect your personal data.',
    },
  };

  const meta = metadata[locale] || metadata['es-cl'];
  const baseUrl = 'https://tecionic.com';

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy`,
      languages: {
        'es-CL': `${baseUrl}/es-cl/privacy`,
        'es-MX': `${baseUrl}/es-mx/privacy`,
        'pt-BR': `${baseUrl}/pt-br/privacy`,
        'en': `${baseUrl}/en/privacy`,
      },
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function PrivacyLayout({ children }) {
  return children;
}
