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

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}) {
  const {locale} = await params;

  // Can be extended to use translations for metadata
  const titles = {
    'es-cl': 'Tec-Ionic Durban - Servicios Especializados en LIX/SX/EW',
    'es-mx': 'Tec-Ionic Durban - Servicios Especializados en LIX/SX/EW',
    'pt-br': 'Tec-Ionic Durban - Servicos Especializados em LIX/SX/EW',
    'en': 'Tec-Ionic Durban - Specialized LIX/SX/EW Services'
  };

  const descriptions = {
    'es-cl': 'Empresa con mas de 18 anos de experiencia en servicios de filtrado y tratamiento de borra para areas LIX/SX/EW.',
    'es-mx': 'Empresa con mas de 18 anos de experiencia en servicios de filtrado y tratamiento de borra para areas LIX/SX/EW.',
    'pt-br': 'Empresa com mais de 18 anos de experiencia em servicos de filtragem e tratamento de borra para areas LIX/SX/EW.',
    'en': 'Company with over 18 years of experience in filtration and sludge treatment services for LIX/SX/EW areas.'
  };

  return {
    title: titles[locale] || titles['es-cl'],
    description: descriptions[locale] || descriptions['es-cl'],
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.ico',
      apple: '/favicon.svg',
    },
    alternates: {
      languages: {
        'es-CL': '/es-cl',
        'es-MX': '/es-mx',
        'pt-BR': '/pt-br',
        'en': '/en',
      },
    },
  };
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
