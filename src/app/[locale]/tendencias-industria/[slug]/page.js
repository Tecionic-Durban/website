import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles = {
  'perdidas-solvente-sx': {
    id: 1,
    category: "Tecnología",
    title: "Pérdidas de Solvente en SX: Un Problema de Millones que Tiene Solución",
    subtitle: "La extracción por solventes (SX) es el corazón de la hidrometalurgia del cobre. Pero cada litro de orgánico perdido es dinero que se escapa de tu operación.",
    date: "Diciembre 2025",
    readTime: "10 min",
    author: "Equipo Técnico TSF",
    tags: ["SX-EW", "Recuperación Orgánico", "Reducción Costos", "Hidrometalurgia"],
    impact: "Alto",
    color: "from-emerald-500 to-emerald-600",
    heroImage: "/images/sx-plant.jpg",
    content: [
      {
        type: "section",
        title: "El Contexto: SX-EW Domina la Industria",
        text: "En 2025, más del 60% de los nuevos proyectos mineros optan por métodos hidrometalúrgicos como SX-EW en lugar de fundición tradicional. Las razones son claras: menor inversión de capital, mayor flexibilidad operacional y mejor perfil ambiental.\n\nPero esta tecnología tiene un talón de Aquiles: las pérdidas de solvente orgánico."
      },
      {
        type: "section",
        title: "El Problema Real",
        text: "En una planta SX típica, las pérdidas de orgánico provienen de:",
        list: [
          "Arrastre acuoso - Gotas de orgánico que escapan con el refino",
          "Degradación química - El extractante se degrada por oxidación y contaminantes",
          "Emulsiones estables - Sólidos finos y crud que atrapan orgánico irrecuperable",
          "Fugas y derrames - Pérdidas mecánicas en el circuito"
        ]
      },
      {
        type: "highlight",
        text: "Con precios de extractante que superan los $8-12 USD/litro, una planta que pierde 100-200 litros diarios está perdiendo $300,000 - $900,000 USD anuales solo en reposición de reactivos."
      },
      {
        type: "section",
        title: "Pero el costo real es mayor",
        text: "Orgánico degradado significa menor eficiencia de extracción, mayor consumo energético en EW, y cátodos de menor pureza."
      },
      {
        type: "section",
        title: "Avances Tecnológicos 2025-2026",
        text: "La industria está respondiendo con innovaciones:",
        list: [
          "Optimización con IA: Sensores en tiempo real ajustan parámetros para maximizar recuperación",
          "Celdas de electroobtención modulares: Mayor eficiencia, menor consumo energético",
          "Tecnología de centrífugas: Separación más efectiva de fases orgánica y acuosa"
        ]
      },
      {
        type: "section",
        title: "La Solución: Tratamiento y Recuperación de Orgánico",
        text: "El tratamiento especializado del orgánico degradado permite:"
      },
      {
        type: "stats",
        items: [
          { value: "90-98%", label: "Recuperación del Solvente", description: "El orgánico que parece perdido en emulsiones y crud puede recuperarse mediante procesos de separación especializados." },
          { value: "60%", label: "Reducción en Pérdidas", description: "Al eliminar contaminantes que causan degradación, el orgánico tratado dura más en el circuito." },
          { value: "18-24", label: "Meses Entre Tratamientos", description: "Plantas que trataban cada 12-15 meses ahora extienden el ciclo significativamente." }
        ]
      },
      {
        type: "section",
        title: "Estabilización de la Operación",
        text: "Las emulsiones estables son el enemigo de la eficiencia SX. Causan tiempos de separación de fases más largos, arrastre excesivo hacia EW, y contaminación de cátodos. El tratamiento elimina los precursores de emulsiones, devolviendo estabilidad al circuito."
      },
      {
        type: "table",
        title: "Caso Real: Impacto Medible",
        description: "Una planta SX de cobre procesando 50,000 toneladas anuales implementó tratamiento de orgánico:",
        headers: ["Métrica", "Antes", "Después", "Mejora"],
        rows: [
          ["Recuperación de Cu", "85%", "94%", "+9 puntos"],
          ["Vida útil del solvente", "12 meses", "20 meses", "+67%"],
          ["Pérdidas de orgánico", "80 L/día", "32 L/día", "-60%"],
          ["Pureza de cátodo", "99.95%", "99.99%", "Grado A"]
        ]
      },
      {
        type: "highlight",
        text: "El ahorro anual superó los $3.1 millones USD considerando menor reposición de reactivos, mayor recuperación de metal, y eliminación de penalizaciones por calidad de cátodo."
      },
      {
        type: "section",
        title: "Cuándo Considerar Tratamiento de Orgánico",
        text: "Tu planta SX probablemente necesita tratamiento si observas:",
        list: [
          "Tiempos de separación de fases superiores a 3-4 minutos",
          "Formación recurrente de crud en settlers",
          "Arrastre de orgánico hacia electrolito >15 ppm",
          "Degradación visible del color del orgánico (oscurecimiento)",
          "Consumo de extractante superior al benchmark de la industria",
          "Caída en eficiencia de extracción sin causa aparente"
        ]
      },
      {
        type: "section",
        title: "Ventajas del Tratamiento Móvil",
        text: "Las soluciones móviles de tratamiento ofrecen beneficios únicos:",
        list: [
          "Sin inversión de capital: Servicio mensual en vez de comprar equipos",
          "Sin modificaciones a planta: El tratamiento se realiza en paralelo al circuito",
          "Sin permisos adicionales: Instalación temporal no requiere aprobaciones ambientales",
          "Flexibilidad: Escala según necesidad, desde pilotos hasta tratamiento continuo"
        ]
      },
      {
        type: "conclusion",
        text: "Las pérdidas de solvente en SX no son un costo inevitable de la operación. Con la tecnología y el enfoque correcto, es posible recuperar hasta 98% del orgánico degradado y reducir las pérdidas continuas en más del 60%.\n\nEn un contexto donde Chile y Perú proyectan aumentar su producción de cobre significativamente hacia 2030, optimizar cada aspecto de la operación SX-EW no es opcional - es una ventaja competitiva."
      }
    ],
    sources: [
      { name: "SXEW Mining: 5 Breakthroughs Powering Extraction 2026", url: "https://farmonaut.com/mining/sxew-mining-5-breakthroughs-powering-extraction-2026" },
      { name: "SME - Centrifuge Technology in SX Process", url: "https://me.smenet.org/centrifuge-technology-in-sx-process-provides-solvent-loss-reduction/" },
      { name: "The Future of Copper Mining in Latin America 2025", url: "https://americasmi.com/insights/future-copper-mining-latin-america-2025/" }
    ]
  },
  'litio-triangulo-agua': {
    id: 2,
    category: "Mercados",
    title: "Litio en el Triángulo: El Desafío del Agua y la Oportunidad de la Filtración Móvil",
    subtitle: "Argentina podría convertirse en el mayor productor mundial de litio en la próxima década. Pero para lograrlo, la industria debe resolver un problema crítico: el agua.",
    date: "Diciembre 2025",
    readTime: "12 min",
    author: "Equipo Técnico TSF",
    tags: ["Litio", "Gestión de Agua", "Argentina", "Filtración", "Sustentabilidad"],
    impact: "Muy Alto",
    color: "from-cyan-500 to-cyan-600",
    content: [
      {
        type: "section",
        title: "El Boom del Litio Latinoamericano",
        text: "El \"Triángulo del Litio\" - Argentina, Chile y Bolivia - posee el 68% de las reservas mundiales de este mineral crítico para la transición energética. Y la demanda no para de crecer.\n\nSolo en 2025, la demanda global de litio aumentará 24% respecto al año anterior, impulsada principalmente por vehículos eléctricos que representan el 65% del consumo. Las proyecciones indican un crecimiento anual del 15% - ningún otro mineral tiene una trayectoria comparable."
      },
      {
        type: "highlight",
        text: "Argentina está posicionándose agresivamente. En junio 2024, el gobierno anunció un plan de 10 años con 4 nuevos proyectos mineros que aumentarán la capacidad anual en 79% (202,000 toneladas métricas adicionales)."
      },
      {
        type: "section",
        title: "El Problema: 21 Millones de Litros Diarios",
        text: "La extracción de litio de salmueras consume agua. Mucha agua.\n\nLos humedales de Argentina, Bolivia y Chile enfrentan una amenaza significativa: la minería de litio consume aproximadamente 21 millones de litros de agua diarios en la región. Este consumo masivo está contribuyendo a:",
        list: [
          "Sequías persistentes en zonas ya áridas",
          "Declive agrícola en comunidades locales",
          "Reducción notable de poblaciones de fauna silvestre",
          "Conflictos con comunidades indígenas"
        ]
      },
      {
        type: "highlight",
        text: "En 2024, un tribunal de la provincia de Catamarca en Argentina suspendió nuevos permisos mineros por preocupaciones relacionadas con el agua. Este precedente legal está cambiando las reglas del juego."
      },
      {
        type: "section",
        title: "La Presión Regulatoria Crece",
        text: "Las empresas están respondiendo de diferentes maneras:"
      },
      {
        type: "subsection",
        title: "Chile: \"Litio Verde\"",
        text: "Chile está apostando por el \"litio verde\", argumentando que la sustentabilidad y trazabilidad pueden comandar un precio premium de los fabricantes de autos. La estrategia busca proteger a las comunidades locales de los ciclos de auge y caída de los commodities."
      },
      {
        type: "subsection",
        title: "Argentina: DLE como Promesa",
        text: "Las empresas promueven la Extracción Directa de Litio (DLE), una tecnología presentada como menos intensiva en recursos. Sin embargo, esta tecnología aún no ha sido probada a escala industrial."
      },
      {
        type: "subsection",
        title: "La Realidad",
        text: "Con precios del litio que cayeron significativamente desde su máximo en 2022, algunas operaciones están reduciendo producción o retrasando expansiones. Los pueblos mineros que prosperaron durante el boom ahora enfrentan dificultades."
      },
      {
        type: "section",
        title: "Donde Entra la Filtración",
        text: "Independiente de la tecnología de extracción utilizada, todas las operaciones de litio requieren:",
        list: [
          "Clarificación de salmueras - Remover sólidos suspendidos antes del procesamiento",
          "Tratamiento de efluentes - Cumplir estándares antes de descarga o recirculación",
          "Recuperación de agua - Maximizar reutilización para reducir consumo neto",
          "Manejo de lodos - Deshidratar residuos para disposición responsable"
        ]
      },
      {
        type: "section",
        title: "Ventajas de la Filtración Móvil para Litio",
        text: "Los proyectos de litio en el Triángulo enfrentan desafíos únicos que hacen especialmente atractivas las soluciones móviles:"
      },
      {
        type: "stats",
        items: [
          { value: "Remotas", label: "Ubicaciones", description: "Los salares están en zonas de difícil acceso, a gran altitud. Los sistemas móviles llegan listos para operar." },
          { value: "Volátil", label: "Mercado", description: "Con precios fluctuantes, el modelo de servicio permite escalar según condiciones de mercado." },
          { value: "Rápido", label: "Permisos", description: "Los sistemas móviles, al ser temporales, evitan el cuello de botella regulatorio." },
          { value: "Flexible", label: "Adaptación", description: "Cada salar tiene composición química diferente. Los equipos móviles se reconfiguran fácilmente." }
        ]
      },
      {
        type: "table",
        title: "Especificaciones Técnicas Relevantes",
        description: "Para operaciones de litio, la filtración efectiva debe cumplir:",
        headers: ["Parámetro", "Requerimiento Típico"],
        rows: [
          ["Capacidad de clarificación", "80-120 m³/día"],
          ["Turbidez de salida", "<5 NTU"],
          ["Recuperación de agua", ">85%"],
          ["Deshidratación de lodos", "<30% humedad final"],
          ["Certificación", "Ex-proof para ambientes con gases"]
        ]
      },
      {
        type: "section",
        title: "El Factor Geopolítico",
        text: "China domina actualmente la cadena de valor del litio - desde extracción hasta refinación y procesamiento. Es el mayor inversor en proyectos de litio en Latinoamérica.\n\nPero con las tensiones comerciales actuales (aranceles de EE.UU., restricciones de exportación chinas), los fabricantes de baterías occidentales buscan diversificar proveedores. Latinoamérica está en el centro de esta competencia geopolítica."
      },
      {
        type: "section",
        title: "Recomendaciones para Operadores de Litio",
        text: "",
        list: [
          "Audita tu consumo de agua - Identifica dónde se pierde y dónde puede recircularse",
          "Evalúa tecnologías de clarificación - No toda el agua descartada está realmente inutilizable",
          "Considera soluciones móviles para pilotos - Antes de invertir en infraestructura permanente, valida con equipos flexibles",
          "Documenta tu gestión ambiental - Los compradores premium pagarán más por litio \"verde\" con trazabilidad demostrable",
          "Prepárate para escrutinio regulatorio - Lo que pasó en Catamarca puede replicarse en otras jurisdicciones"
        ]
      },
      {
        type: "conclusion",
        text: "El litio latinoamericano tiene un futuro brillante, pero solo si la industria resuelve el dilema del agua. Las operaciones que logren maximizar producción mientras minimizan impacto hídrico serán las que prosperen en la próxima década.\n\nLa filtración y clarificación no son glamorosas, pero son fundamentales. Cada metro cúbico de agua que se recircula en vez de descartarse es un metro cúbico menos de conflicto con comunidades, un metro cúbico menos de riesgo regulatorio, y un paso más hacia el \"litio verde\" que el mercado demanda."
      }
    ],
    sources: [
      { name: "Buenos Aires Herald - Argentina's New 10-Year Lithium Plan", url: "https://buenosairesherald.com/business/mining/argentinas-new-10-year-lithium-plan-just-dropped" },
      { name: "Rest of World - Lithium Price Crash Hits Mining Towns", url: "https://restofworld.org/2025/lithium-price-crash-latin-america-mining/" },
      { name: "IMARC Group - Latin America Lithium Mining Market", url: "https://www.imarcgroup.com/latin-america-lithium-mining-market" },
      { name: "Control Risks - Latin America Key Player in Lithium", url: "https://www.controlrisks.com/our-thinking/insights/latin-america-to-be-a-key-player-as-global-demand-for-lithium-skyrockets" }
    ]
  },
  'politica-minera-2050': {
    id: 3,
    category: "Regulación",
    title: "Política Minera 2050: Chile Limita Uso de Agua Continental al 10%",
    subtitle: "La nueva regulación chilena exige que la minería no supere el 10% de uso de agua continental para 2025 y 5% para 2040. Las operaciones deben alcanzar 85-90% de recirculación de agua.",
    date: "Noviembre 2025",
    readTime: "8 min",
    author: "Equipo Técnico TSF",
    tags: ["Regulación", "Agua", "Chile", "Desalinización", "Recirculación"],
    impact: "Alto",
    color: "from-blue-500 to-blue-600",
    content: [
      {
        type: "section",
        title: "El Nuevo Marco Regulatorio",
        text: "Chile ha establecido las reglas más estrictas del mundo para el uso de agua en minería. La Política Nacional Minera 2050 no es una sugerencia - es una hoja de ruta vinculante que transformará cómo opera cada mina en el país."
      },
      {
        type: "stats",
        items: [
          { value: "10%", label: "Límite 2025", description: "Máximo uso de agua continental permitido para la minería" },
          { value: "5%", label: "Límite 2040", description: "Objetivo a largo plazo de reducción de dependencia hídrica" },
          { value: "85-90%", label: "Recirculación", description: "Tasa de reutilización de agua exigida en plantas modernas" },
          { value: "130%", label: "Crecimiento Desal", description: "Aumento proyectado en capacidad de desalinización para 2031" }
        ]
      },
      {
        type: "section",
        title: "Lo Que Significa Para Las Operaciones",
        text: "Las grandes mineras ya están respondiendo. BHP y Antofagasta usan actualmente 30% de agua desalinizada, con meta de alcanzar 50% para 2030. Pero para las operaciones medianas y pequeñas, el desafío es mayor."
      },
      {
        type: "highlight",
        text: "El consumo de agua del sector cobre crecerá 2.3% anual hasta alcanzar 23.7 m³/s en 2034. El uso de agua de mar aumentará 230% esta década."
      },
      {
        type: "section",
        title: "Tecnologías de Cumplimiento",
        text: "Las operaciones tienen varias opciones para cumplir:",
        list: [
          "Desalinización - Costosa pero independiente de fuentes continentales",
          "Recirculación avanzada - Tratamiento y reutilización de agua de proceso",
          "Clarificación de efluentes - Recuperación de agua de corrientes residuales",
          "Espesamiento de relaves - Reducción del agua enviada a tranques"
        ]
      },
      {
        type: "section",
        title: "El Rol de la Filtración",
        text: "La filtración móvil permite a las operaciones implementar recirculación sin grandes inversiones de capital. Un sistema de clarificación puede recuperar 80-90% del agua de corrientes que actualmente se descartan, contribuyendo directamente al cumplimiento de las metas de recirculación."
      },
      {
        type: "conclusion",
        text: "La Política Minera 2050 no es negociable. Las operaciones que no se adapten enfrentarán restricciones operacionales, multas, y eventualmente, cierre. La inversión en tecnologías de gestión de agua no es un gasto - es la licencia para seguir operando."
      }
    ],
    sources: [
      { name: "Política Nacional Minera 2050 - Gobierno de Chile", url: "https://www.minmineria.cl/" },
      { name: "Cochilco - Proyección Consumo de Agua en Minería", url: "https://www.cochilco.cl/" }
    ]
  },
  'boom-cobre-chile-peru': {
    id: 4,
    category: "Producción",
    title: "Boom del Cobre: Chile y Perú Proyectan Récords de Producción",
    subtitle: "Chile proyecta 5.8Mt de cobre para 2025 (+5.8%), con Escondida subiendo 22% y Codelco apuntando a 1.4Mt. La capacidad de filtración será el cuello de botella durante mantenciones.",
    date: "Noviembre 2025",
    readTime: "9 min",
    author: "Equipo Técnico TSF",
    tags: ["Cobre", "Chile", "Perú", "Producción", "Mantenciones"],
    impact: "Alto",
    color: "from-orange-500 to-orange-600",
    content: [
      {
        type: "section",
        title: "Récords de Producción en el Horizonte",
        text: "2025 será un año histórico para el cobre latinoamericano. Después de años de producción estancada, las inversiones finalmente están dando frutos."
      },
      {
        type: "stats",
        items: [
          { value: "5.8Mt", label: "Chile 2025", description: "Producción proyectada de cobre, un aumento del 5.8% respecto al año anterior" },
          { value: "+22%", label: "Escondida", description: "Aumento de producción en el primer semestre 2025" },
          { value: "$10.8B", label: "Inversión BHP", description: "Compromiso de inversión en Chile, $2B solo en Escondida" },
          { value: "2.7Mt", label: "JV Codelco-Anglo", description: "Capacidad adicional del joint venture en 21 años" }
        ]
      },
      {
        type: "section",
        title: "El Pipeline de Inversiones",
        text: "Casi $50B USD se invertirán en proyectos de cobre que iniciarán producción antes de 2030, agregando 3.2 Mt/año a los 7.6 Mt/año actuales de la región."
      },
      {
        type: "highlight",
        text: "Codelco, el mayor productor mundial de cobre, apunta a 1.4Mt de producción propia. El joint venture con Anglo American agregará capacidad significativa al portafolio."
      },
      {
        type: "section",
        title: "El Desafío de las Mantenciones",
        text: "Más producción significa más desgaste de equipos. Las paradas de mantención programadas y no programadas serán más frecuentes y más críticas. Durante estos períodos, la capacidad de filtración se convierte en el cuello de botella.",
        list: [
          "Plantas SX requieren tratamiento de orgánico durante paradas",
          "Celdas EW necesitan limpieza y desborre",
          "Sistemas de clarificación deben mantenerse operativos",
          "La filtración de borras no puede detenerse"
        ]
      },
      {
        type: "section",
        title: "Soluciones Móviles para Mantenciones",
        text: "La filtración móvil permite mantener operaciones durante paradas de equipos fijos. Un sistema de respaldo puede desplegarse en 24-48 horas, evitando pérdidas de producción que pueden superar $100,000 USD por día de parada no planificada."
      },
      {
        type: "conclusion",
        text: "El boom del cobre es una oportunidad histórica para Latinoamérica. Pero aprovecharla requiere operaciones confiables y resilientes. Las empresas que inviertan en capacidad de respaldo y soluciones flexibles serán las que capturen el valor completo de este ciclo alcista."
      }
    ],
    sources: [
      { name: "Americas Market Intelligence - Future of Copper Mining", url: "https://americasmi.com/insights/future-copper-mining-latin-america-2025/" },
      { name: "Mining.com - Chile Copper Production Forecast", url: "https://www.mining.com/" },
      { name: "BHP Annual Report 2024", url: "https://www.bhp.com/" }
    ]
  },
  'ia-automatizacion-sx-ew': {
    id: 5,
    category: "Innovación",
    title: "IA y Automatización Revolucionan Eficiencia en Plantas SX-EW",
    subtitle: "La integración de inteligencia artificial y sensores en tiempo real está optimizando procesos de lixiviación y electroobtención, reduciendo costos operacionales hasta 35%.",
    date: "Octubre 2025",
    readTime: "8 min",
    author: "Equipo Técnico TSF",
    tags: ["Digitalización", "Automatización", "IoT", "Inteligencia Artificial"],
    impact: "Alto",
    color: "from-purple-500 to-purple-600",
    content: [
      {
        type: "section",
        title: "La Revolución Digital en Hidrometalurgia",
        text: "Las plantas SX-EW están experimentando una transformación sin precedentes. La combinación de sensores IoT, análisis de datos en tiempo real, e inteligencia artificial está redefiniendo lo que es posible en eficiencia operacional."
      },
      {
        type: "stats",
        items: [
          { value: "35%", label: "Reducción Costos", description: "Ahorro en costos operacionales mediante automatización avanzada" },
          { value: "28%", label: "Mejora Eficiencia", description: "Incremento en eficiencia con monitoreo en tiempo real" },
          { value: "45%", label: "Menos Downtime", description: "Reducción en tiempo de inactividad por predicción de fallas" },
          { value: "80%", label: "Adopción 2026", description: "Operaciones que tendrán algún nivel de automatización" }
        ]
      },
      {
        type: "section",
        title: "Tecnologías Clave",
        text: "Las innovaciones más impactantes incluyen:",
        list: [
          "Sensores de fase en línea - Monitoreo continuo de separación orgánico/acuoso",
          "Algoritmos predictivos - Anticipan degradación de solvente antes de que afecte producción",
          "Celdas EW modulares - Permiten escalamiento rápido y mantenimiento sin parada total",
          "Gemelos digitales - Simulación de procesos para optimización sin riesgo operacional"
        ]
      },
      {
        type: "section",
        title: "Integración con Servicios Móviles",
        text: "La automatización no reemplaza la necesidad de servicios especializados - la complementa. Los datos de sensores pueden identificar cuándo el orgánico necesita tratamiento, cuándo las celdas requieren limpieza, o cuándo la clarificación está perdiendo eficiencia."
      },
      {
        type: "highlight",
        text: "Las plantas más avanzadas están integrando alertas automáticas con proveedores de servicios, permitiendo despliegue preventivo de equipos móviles antes de que los problemas afecten producción."
      },
      {
        type: "conclusion",
        text: "La IA y automatización no son el futuro - son el presente. Las operaciones que no adopten estas tecnologías quedarán en desventaja competitiva. Pero la tecnología sola no es suficiente; debe combinarse con capacidad de respuesta operacional para maximizar su valor."
      }
    ],
    sources: [
      { name: "Farmonaut - SXEW Mining Breakthroughs 2026", url: "https://farmonaut.com/mining/sxew-mining-5-breakthroughs-powering-extraction-2026" },
      { name: "Mining Technology - Digital Transformation in Mining", url: "https://www.mining-technology.com/" }
    ]
  },
  'minerales-criticos-latam': {
    id: 6,
    category: "Geopolítica",
    title: "Minerales Críticos: Latinoamérica en el Centro de la Competencia Global",
    subtitle: "Con aranceles de EE.UU. a China y restricciones de exportación, los fabricantes occidentales buscan proveedores alternativos. Chile y Perú emergen como opciones estratégicas.",
    date: "Octubre 2025",
    readTime: "11 min",
    author: "Equipo Técnico TSF",
    tags: ["Geopolítica", "Minerales Críticos", "Cadena Suministro", "Latinoamérica"],
    impact: "Alto",
    color: "from-red-500 to-red-600",
    content: [
      {
        type: "section",
        title: "El Nuevo Orden de los Minerales",
        text: "La competencia entre Estados Unidos y China está redibujando el mapa global de los minerales críticos. Y Latinoamérica está exactamente en el centro de esta batalla."
      },
      {
        type: "stats",
        items: [
          { value: "40.5%", label: "Producción Cobre", description: "Participación de Latinoamérica en la producción global de cobre" },
          { value: "68%", label: "Reservas Litio", description: "Porcentaje de reservas mundiales en el Triángulo del Litio" },
          { value: "#1", label: "Chile Cobre", description: "Mayor productor mundial de cobre" },
          { value: "#3", label: "Argentina Litio", description: "Tercer productor mundial con potencial de ser #1" }
        ]
      },
      {
        type: "section",
        title: "La Presión por Diversificar",
        text: "China domina actualmente la cadena de valor del litio y procesa gran parte del cobre mundial. Con aranceles estadounidenses y restricciones de exportación chinas, los fabricantes occidentales están desesperados por alternativas.",
        list: [
          "Fabricantes de autos eléctricos buscan proveedores no-chinos",
          "Gobiernos occidentales ofrecen incentivos para producción local",
          "Compradores premium pagan más por minerales con trazabilidad",
          "ESG se convierte en requisito, no preferencia"
        ]
      },
      {
        type: "highlight",
        text: "Para las operaciones en Chile, Perú y Argentina, esto significa mayor escrutinio de prácticas ambientales, pero también oportunidad de diferenciarse con producción sustentable."
      },
      {
        type: "section",
        title: "Requisitos del Mercado Premium",
        text: "Los compradores occidentales exigen:",
        list: [
          "Gestión responsable del agua - Documentación de uso y recirculación",
          "Trazabilidad completa - Desde extracción hasta producto final",
          "Cumplimiento ambiental - Certificaciones y auditorías independientes",
          "Relaciones comunitarias - Licencia social demostrable"
        ]
      },
      {
        type: "section",
        title: "Cómo la Filtración Apoya el Posicionamiento",
        text: "La gestión de agua es central en la narrativa ESG. Las operaciones que pueden demostrar altas tasas de recirculación, tratamiento efectivo de efluentes, y mínimo impacto hídrico tienen ventaja competitiva en mercados premium."
      },
      {
        type: "conclusion",
        text: "Latinoamérica tiene una oportunidad única de capturar mayor participación del mercado global de minerales críticos. Pero esto requiere más que tener los recursos - requiere demostrar que se pueden extraer responsablemente. Las inversiones en gestión de agua y tecnologías de tratamiento no son costos - son la puerta de entrada a los mercados más valiosos del mundo."
      }
    ],
    sources: [
      { name: "Colombia One - Lithium: Latin America's White Gold", url: "https://colombiaone.com/2025/05/27/lithium-latin-america-china/" },
      { name: "Control Risks - Latin America Key Player in Lithium", url: "https://www.controlrisks.com/our-thinking/insights/latin-america-to-be-a-key-player-as-global-demand-for-lithium-skyrockets" },
      { name: "Americas Market Intelligence - Critical Minerals Report", url: "https://americasmi.com/" }
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return {
      title: 'Artículo no encontrado - Tec-Ionic Durban'
    }
  }

  return {
    title: `${article.title} - Tec-Ionic Durban`,
    description: article.subtitle
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'Muy Alto':
        return 'bg-red-100 text-red-800'
      case 'Alto':
        return 'bg-orange-100 text-orange-800'
      case 'Medio':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${article.color} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/tendencias-industria"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Tendencias
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getImpactColor(article.impact)}`}>
              Impacto {article.impact}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
          <p className="text-xl text-white/90 mb-8">{article.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} lectura</span>
            <span>•</span>
            <span>{article.author}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {article.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => {
              switch(block.type) {
                case 'section':
                  return (
                    <div key={index} className="mb-10">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{block.title}</h2>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">{block.text}</p>
                      {block.list && (
                        <ul className="mt-4 space-y-2">
                          {block.list.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )

                case 'subsection':
                  return (
                    <div key={index} className="mb-6 pl-4 border-l-4 border-emerald-500">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{block.title}</h3>
                      <p className="text-gray-600">{block.text}</p>
                    </div>
                  )

                case 'highlight':
                  return (
                    <div key={index} className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                      <p className="text-emerald-900 text-lg font-medium">{block.text}</p>
                    </div>
                  )

                case 'stats':
                  return (
                    <div key={index} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                      {block.items.map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                          <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                          <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                          <div className="text-xs text-gray-500">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  )

                case 'table':
                  return (
                    <div key={index} className="my-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h3>
                      {block.description && <p className="text-gray-600 mb-4">{block.description}</p>}
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                          <thead>
                            <tr className="bg-emerald-600 text-white">
                              {block.headers.map((header, i) => (
                                <th key={i} className="px-6 py-4 text-left text-sm font-semibold">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                {row.map((cell, j) => (
                                  <td key={j} className="px-6 py-4 text-sm text-gray-700">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )

                case 'conclusion':
                  return (
                    <div key={index} className="bg-gray-900 text-white rounded-xl p-8 my-10">
                      <h3 className="text-xl font-bold mb-4">Conclusión</h3>
                      <p className="text-gray-300 whitespace-pre-line leading-relaxed">{block.text}</p>
                    </div>
                  )

                default:
                  return null
              }
            })}
          </div>

          {/* Sources */}
          {article.sources && article.sources.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fuentes</h3>
              <ul className="space-y-2">
                {article.sources.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 hover:underline"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 bg-emerald-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas optimizar tu operación?</h3>
            <p className="text-emerald-100 mb-6">
              Nuestro equipo técnico puede evaluar tu proceso actual y proponer soluciones adaptadas a tus necesidades específicas.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Contactar Equipo Técnico
            </Link>
          </div>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              href="/tendencias-industria"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ver más tendencias de la industria
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
