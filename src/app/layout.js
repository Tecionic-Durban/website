// src/app/layout.js
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// TEMPORARILY DISABLED: AI Chatbot and Dashboard per stakeholder request
// import FloatingElements from "@/components/FloatingElements"

export const metadata = {
  title: 'Tec-Ionic Durban - Servicios Especializados en LIX/SX/EW',
  description: 'Empresa con más de 18 años de experiencia en servicios de filtrado y tratamiento de borra para áreas LIX/SX/EW.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {/* TEMPORARILY DISABLED: AI Chatbot and Dashboard per stakeholder request */}
        {/* <FloatingElements /> */}
      </body>
    </html>
  )
}