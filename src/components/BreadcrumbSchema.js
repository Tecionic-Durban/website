// src/components/BreadcrumbSchema.js - JSON-LD Breadcrumb schema for SEO
'use client';

import { usePathname } from 'next/navigation';

const baseUrl = 'https://tecionic.com';

// Human-readable labels for URL segments (Spanish/Portuguese/English)
const segmentLabels = {
  // Locales
  'es-cl': 'Inicio',
  'es-mx': 'Inicio',
  'pt-br': 'Início',
  'en': 'Home',

  // Main sections
  'industries': { 'es-cl': 'Industrias', 'es-mx': 'Industrias', 'pt-br': 'Indústrias', 'en': 'Industries' },
  'services': { 'es-cl': 'Servicios', 'es-mx': 'Servicios', 'pt-br': 'Serviços', 'en': 'Services' },
  'about': { 'es-cl': 'Acerca de', 'es-mx': 'Acerca de', 'pt-br': 'Sobre', 'en': 'About' },
  'contacto': { 'es-cl': 'Contacto', 'es-mx': 'Contacto', 'pt-br': 'Contato', 'en': 'Contact' },
  'resources': { 'es-cl': 'Recursos', 'es-mx': 'Recursos', 'pt-br': 'Recursos', 'en': 'Resources' },
  'casos-de-exito': { 'es-cl': 'Casos de Éxito', 'es-mx': 'Casos de Éxito', 'pt-br': 'Casos de Sucesso', 'en': 'Case Studies' },
  'white-papers': { 'es-cl': 'White Papers', 'es-mx': 'White Papers', 'pt-br': 'White Papers', 'en': 'White Papers' },
  'tendencias-industria': { 'es-cl': 'Tendencias', 'es-mx': 'Tendencias', 'pt-br': 'Tendências', 'en': 'Industry Trends' },
  'especificaciones-tecnicas': { 'es-cl': 'Especificaciones Técnicas', 'es-mx': 'Especificaciones Técnicas', 'pt-br': 'Especificações Técnicas', 'en': 'Technical Specifications' },
  'calculadora': { 'es-cl': 'Calculadora', 'es-mx': 'Calculadora', 'pt-br': 'Calculadora', 'en': 'Calculator' },
  'cumplimiento': { 'es-cl': 'Cumplimiento', 'es-mx': 'Cumplimiento', 'pt-br': 'Conformidade', 'en': 'Compliance' },
  'historias-de-clientes': { 'es-cl': 'Historias de Clientes', 'es-mx': 'Historias de Clientes', 'pt-br': 'Histórias de Clientes', 'en': 'Customer Stories' },

  // Industries
  'copper': { 'es-cl': 'Cobre', 'es-mx': 'Cobre', 'pt-br': 'Cobre', 'en': 'Copper' },
  'zinc': { 'es-cl': 'Zinc', 'es-mx': 'Zinc', 'pt-br': 'Zinco', 'en': 'Zinc' },
  'lithium': { 'es-cl': 'Litio', 'es-mx': 'Litio', 'pt-br': 'Lítio', 'en': 'Lithium' },
  'potassium': { 'es-cl': 'Potasio', 'es-mx': 'Potasio', 'pt-br': 'Potássio', 'en': 'Potassium' },
  'crude-oil': { 'es-cl': 'Petróleo', 'es-mx': 'Petróleo', 'pt-br': 'Petróleo', 'en': 'Crude Oil' },

  // Services
  'filtration': { 'es-cl': 'Filtración', 'es-mx': 'Filtración', 'pt-br': 'Filtração', 'en': 'Filtration' },
  'organic-treatment': { 'es-cl': 'Tratamiento Orgánico', 'es-mx': 'Tratamiento Orgánico', 'pt-br': 'Tratamento Orgânico', 'en': 'Organic Treatment' },
  'ew-cleaning': { 'es-cl': 'Limpieza EW', 'es-mx': 'Limpieza EW', 'pt-br': 'Limpeza EW', 'en': 'EW Cleaning' },
  'concentrate-dehydration': { 'es-cl': 'Deshidratación de Concentrados', 'es-mx': 'Deshidratación de Concentrados', 'pt-br': 'Desidratação de Concentrados', 'en': 'Concentrate Dehydration' },
  'fine-solids': { 'es-cl': 'Sólidos Finos', 'es-mx': 'Sólidos Finos', 'pt-br': 'Sólidos Finos', 'en': 'Fine Solids' },
  'maintenance': { 'es-cl': 'Mantenimiento', 'es-mx': 'Mantenimiento', 'pt-br': 'Manutenção', 'en': 'Maintenance' },
  'water-clarification': { 'es-cl': 'Clarificación de Agua', 'es-mx': 'Clarificación de Agua', 'pt-br': 'Clarificação de Água', 'en': 'Water Clarification' },
  'tif-measurement': { 'es-cl': 'Medición TIF', 'es-mx': 'Medición TIF', 'pt-br': 'Medição TIF', 'en': 'TIF Measurement' },
  'tsf-monitoring': { 'es-cl': 'Monitoreo TSF', 'es-mx': 'Monitoreo TSF', 'pt-br': 'Monitoramento TSF', 'en': 'TSF Monitoring' },
  'turbidity-monitoring': { 'es-cl': 'Monitoreo de Turbidez', 'es-mx': 'Monitoreo de Turbidez', 'pt-br': 'Monitoramento de Turbidez', 'en': 'Turbidity Monitoring' },

  // Case studies
  'deshidratacion-concentrados': { 'es-cl': 'Deshidratación Concentrados', 'es-mx': 'Deshidratación Concentrados', 'pt-br': 'Desidratação Concentrados', 'en': 'Concentrate Dehydration' },
  'lodos-petroleros': { 'es-cl': 'Lodos Petroleros', 'es-mx': 'Lodos Petroleros', 'pt-br': 'Lodos Petrolíferos', 'en': 'Petroleum Sludge' },
  'limpieza-celdas-ew': { 'es-cl': 'Limpieza Celdas EW', 'es-mx': 'Limpieza Celdas EW', 'pt-br': 'Limpeza Células EW', 'en': 'EW Cell Cleaning' },
  'solidos-finos-yoduro': { 'es-cl': 'Sólidos Finos Yoduro', 'es-mx': 'Sólidos Finos Yoduro', 'pt-br': 'Sólidos Finos Iodeto', 'en': 'Iodide Fine Solids' },
  'soporte-sx-dgm': { 'es-cl': 'Soporte SX DGM', 'es-mx': 'Soporte SX DGM', 'pt-br': 'Suporte SX DGM', 'en': 'SX DGM Support' },
  'tratamiento-organico-sx': { 'es-cl': 'Tratamiento Orgánico SX', 'es-mx': 'Tratamiento Orgánico SX', 'pt-br': 'Tratamento Orgânico SX', 'en': 'SX Organic Treatment' },
};

function getLabel(segment, locale) {
  const label = segmentLabels[segment];
  if (!label) {
    // Fallback: capitalize and replace hyphens with spaces
    return segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
  if (typeof label === 'string') {
    return label;
  }
  return label[locale] || label['es-cl'] || segment;
}

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  if (!pathname) return null;

  // Parse the path
  const segments = pathname.split('/').filter(Boolean);

  // Need at least locale to generate breadcrumbs
  if (segments.length === 0) return null;

  const locale = segments[0];
  const homeLabel = segmentLabels[locale] || 'Inicio';

  // Build breadcrumb items
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: homeLabel,
      item: `${baseUrl}/${locale}`,
    },
  ];

  // Add remaining path segments
  let currentPath = `${baseUrl}/${locale}`;

  for (let i = 1; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    breadcrumbItems.push({
      '@type': 'ListItem',
      position: i + 1,
      name: getLabel(segment, locale),
      item: currentPath,
    });
  }

  // Don't render schema for home page (only 1 item)
  if (breadcrumbItems.length <= 1) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
