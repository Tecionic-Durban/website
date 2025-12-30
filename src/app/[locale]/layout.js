// src/app/[locale]/layout.js
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import '../../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// TEMPORARILY DISABLED: AI Chatbot and Dashboard per stakeholder request
// import FloatingElements from "@/components/FloatingElements"

// Force static generation for Cloudflare Pages deployment
export const dynamic = 'force-static';
export const dynamicParams = false;

const baseUrl = 'https://tecionic.com';

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
  const {locale} = await params;

  // Localized metadata for SEO
  const titles = {
    'es-cl': 'Tecionic - Servicios Móviles de Filtración LIX/SX/EW | Latinoamérica',
    'es-mx': 'Tecionic - Servicios Móviles de Filtración LIX/SX/EW | Latinoamérica',
    'pt-br': 'Tecionic - Serviços Móveis de Filtração LIX/SX/EW | América Latina',
    'en': 'Tecionic - Mobile Filtration Services LIX/SX/EW | Latin America'
  };

  const descriptions = {
    'es-cl': 'Más de 23 años de experiencia en filtración móvil y tratamiento de borra para minería LIX/SX/EW. Sin CAPEX, movilización en 48 horas. Servicio en Chile, Perú, México y toda Latinoamérica.',
    'es-mx': 'Más de 23 años de experiencia en filtración móvil y tratamiento de borra para minería LIX/SX/EW. Sin CAPEX, movilización en 48 horas. Servicio en México, Chile, Perú y toda Latinoamérica.',
    'pt-br': 'Mais de 23 anos de experiência em filtração móvel e tratamento de borra para mineração LIX/SX/EW. Sem CAPEX, mobilização em 48 horas. Serviço no Brasil e toda a América Latina.',
    'en': 'Over 23 years of experience in mobile filtration and sludge treatment for LIX/SX/EW mining operations. Zero CAPEX, 48-hour mobilization. Service throughout Latin America.'
  };

  const keywords = {
    'es-cl': 'filtración móvil, tratamiento borra, LIX SX EW, minería cobre, hidrometalurgia, filtro prensa móvil, Chile, Latinoamérica, servicios minería',
    'es-mx': 'filtración móvil, tratamiento borra, LIX SX EW, minería cobre, hidrometalurgia, filtro prensa móvil, México, Latinoamérica, servicios minería',
    'pt-br': 'filtração móvel, tratamento borra, LIX SX EW, mineração cobre, hidrometalurgia, filtro prensa móvel, Brasil, América Latina, serviços mineração',
    'en': 'mobile filtration, sludge treatment, LIX SX EW, copper mining, hydrometallurgy, mobile filter press, Latin America, mining services'
  };

  const title = titles[locale] || titles['es-cl'];
  const description = descriptions[locale] || descriptions['es-cl'];

  return {
    title: {
      default: title,
      template: `%s | Tecionic`
    },
    description: description,
    keywords: keywords[locale] || keywords['es-cl'],
    authors: [{ name: 'Tecionic' }],
    creator: 'Tecionic',
    publisher: 'Tecionic',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.ico',
      apple: '/favicon.svg',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'es-CL': `${baseUrl}/es-cl`,
        'es-MX': `${baseUrl}/es-mx`,
        'pt-BR': `${baseUrl}/pt-br`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Tecionic',
      locale: locale.replace('-', '_'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/filtro_prensa_1200_drone_view.png`,
          width: 1200,
          height: 630,
          alt: 'Tecionic - Filtro Prensa Móvil para Minería',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`${baseUrl}/filtro_prensa_1200_drone_view.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification when available
      // google: 'your-google-verification-code',
    },
  };
}

// Organization JSON-LD Schema for rich snippets
function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tecionic',
    alternateName: 'Tec-Ionic Durban',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Empresa líder en servicios móviles de filtración y tratamiento de borra para operaciones mineras LIX/SX/EW en Latinoamérica.',
    foundingDate: '2001',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100
    },
    areaServed: [
      { '@type': 'Country', name: 'Chile' },
      { '@type': 'Country', name: 'Peru' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'Continent', name: 'South America' }
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CL',
      addressRegion: 'Antofagasta'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['Spanish', 'Portuguese', 'English']
    },
    sameAs: [
      // Add social media URLs when available
      // 'https://www.linkedin.com/company/tecionic',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Filtración Móvil',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tratamiento Orgánico SX',
            description: 'Eliminación de degradados orgánicos en circuitos de extracción por solventes'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza Celdas EW',
            description: 'Limpieza especializada de celdas de electrowinning'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deshidratación de Concentrados',
            description: 'Equipos móviles para deshidratación de concentrados de cobre'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tratamiento de Sólidos Finos',
            description: 'Filtración de partículas finas en procesos hidrometalúrgicos'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <OrganizationSchema />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress hydration warnings for browser extension attributes
              if (typeof window !== 'undefined') {
                const originalConsoleError = console.error;
                console.error = function(message, ...args) {
                  if (typeof message === 'string' && (
                    message.includes('hydrated but some attributes') ||
                    message.includes('fdprocessedid') ||
                    message.includes('browser extension')
                  )) {
                    return;
                  }
                  originalConsoleError.apply(console, [message, ...args]);
                };
              }
            `
          }}
        />
      </head>
      <body className="min-h-screen bg-white" style={{fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'}}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          {/* TEMPORARILY DISABLED: AI Chatbot and Dashboard per stakeholder request */}
          {/* <FloatingElements /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
