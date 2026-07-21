// Internal tool — not publicly launched. Keep out of Google for every locale.
export async function generateMetadata() {
  return {
    title: 'Calculadora de Optimización',
    description: 'Estime el potencial de mejora en eficiencia y rendimiento de sus procesos mineros LIX/SX/EW con nuestra calculadora especializada.',
    robots: { index: false, follow: true },
  }
}

export default function CalculadoraLayout({ children }) {
  return children
}