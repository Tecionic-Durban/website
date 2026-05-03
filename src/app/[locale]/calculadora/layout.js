// Calculadora content is Spanish-only. Metadata is also Spanish.
// Block indexing on non-Spanish locales to avoid Spanish content under /en/* or /pt-br/*.
export async function generateMetadata({ params }) {
  const { locale } = await params
  return {
    title: 'Calculadora de Optimización | Tecionic',
    description: 'Estime el potencial de mejora en eficiencia y rendimiento de sus procesos mineros LIX/SX/EW con nuestra calculadora especializada.',
    robots: locale === 'pt-br' || locale === 'en'
      ? { index: false, follow: true }
      : undefined,
  }
}

export default function CalculadoraLayout({ children }) {
  return children
}