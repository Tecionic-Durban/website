// src/app/layout.js
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'

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
      </head>
      <body className="min-h-screen bg-white" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'}}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingElements />
      </body>
    </html>
  )
}