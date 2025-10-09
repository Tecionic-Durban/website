export const metadata = {
  title: 'Especificaciones Técnicas - Tec-Ionic Durban',
  description: 'Detalles técnicos completos de equipos, procesos y tecnologías especializadas en LIX/SX/EW para operaciones mineras.',
}

export default function EspecificacionesTecnicasPage() {
  const specifications = [
    {
      id: 1,
      category: "Filtración Móvil",
      title: "Filtros Prensa Móviles de Alta Presión",
      equipment: "Mobile Filter Press Systems",
      description: "Sistemas móviles de filtración prensa diseñados para deshidratación de borras SX y concentrados mineros con certificación ex.proof.",
      specifications: {
        "Capacidad de Procesamiento": "20-70 ton/día torta seca",
        "Presión de Operación": "Filtración: 4-16 bar | Lavado: 2-8 bar | Secado: hasta 20 bar",
        "Ciclo de Operación": "90-180 minutos según material",
        "Área de Placas": "1.2-2.5 m² por placa | 20-80 placas/prensa",
        "Reducción de Humedad": "12-15% inicial → 3-8% final",
        "Material de Construcción": "Acero inoxidable 316L, certificado ex.proof",
        "Automatización": "Control PLC con HMI | Registro tiempo real",
        "Movilidad": "Plataformas móviles | Sin fundaciones permanentes"
      },
      applications: ["Borras SX cobre", "Concentrados Cu/Zn", "Lodos oleosos refinería"],
      features: [
        "Placas intercambiables para distintos materiales",
        "Montaje rápido sin instalaciones fijas",
        "Operación continua 24/7",
        "Recuperación orgánico >90%"
      ],
      image: "/spec-mobile-filter-press.jpg"
    },
    {
      id: 2,
      category: "Separación Centrífuga",
      title: "Centrífugas Decanter de Alta Eficiencia",
      equipment: "High-Performance Decanter Centrifuges",
      description: "Centrífugas decanter móviles especializadas en separación de sólidos finos para aplicaciones DLE litio y clarificación.",
      specifications: {
        "Capacidad": "0.5-14 ton/día sólidos | 15-80 m³/h líquido",
        "G-Force": "2000-3200 x g",
        "Velocidad": "3600-4200 RPM | Diferencial: 5-50 RPM",
        "Bowl": "Diámetro: 350-450 mm | Material: Duplex 2205",
        "Corte Granulométrico": "2-15 μm | Eficiencia >98% para >5 μm",
        "Torque": "Hasta 1200 Nm",
        "Claridad Centrado": "<50 mg/L TSS | <20 NTU turbidez",
        "Dosificación Polímero": "0.5-5 kg/ton sólidos | Preparación automática"
      },
      applications: ["DLE litio", "Sólidos finos SX", "Clarificación agua proceso"],
      features: [
        "Sistema dosificación floculante automático",
        "Control velocidad diferencial variable",
        "Monitoreo vibración y temperatura",
        "Operación continua sin paradas"
      ],
      image: "/spec-decanter-centrifuge.jpg"
    },
    {
      id: 3,
      category: "Tratamiento Orgánico",
      title: "Sistemas de Coalescencia y Separación",
      equipment: "Coalescence Separation Systems",
      description: "Equipos especializados para tratamiento y recuperación de orgánico contaminado en procesos SX mediante coalescencia gravitacional.",
      specifications: {
        "Tiempo de Residencia": "15-45 minutos",
        "Eficiencia Coalescencia": ">98%",
        "Reducción Entrainment": "500-1500 ppm → <50 ppm acuoso",
        "Velocidad Sedimentación": "0.5-2.0 cm/min",
        "Caudales de Operación": "50-800 L/min",
        "Relación O/A": "Variable 0.5-5:1",
        "Control de Temperatura": "25-45°C ±2°C",
        "Calidad Final": "<2% agua en orgánico | <0.1% orgánico en acuoso"
      },
      applications: ["Recuperación extractante", "Eliminación entrainment", "Purificación orgánico SX"],
      features: [
        "Separación gravitacional asistida",
        "Control automático de interfase",
        "Compatible extractantes Cu/Zn",
        "Reducción 60% pérdidas solvente"
      ],
      image: "/spec-coalescence-system.jpg"
    },
    {
      id: 4,
      category: "Clarificación Agua",
      title: "Sistemas DAF (Dissolved Air Flotation)",
      equipment: "Mobile DAF Water Treatment Systems",
      description: "Sistemas móviles de flotación por aire disuelto para clarificación de aguas proceso y optimización de recirculación.",
      specifications: {
        "Capacidad": "Hasta 120 m³/día tratamiento agua",
        "Presión Saturación": "4-6 bar | Recirculación: 8-12% caudal",
        "Tamaño Burbujas": "40-70 μm | Densidad: 10⁶-10⁷ burbujas/mL",
        "Tiempo Residencia": "15-25 min | Velocidad ascensional: <5 m/h",
        "Remoción Eficiencia": "TSS >95% | Turbidez: 150→<5 NTU | Aceites >90%",
        "Dosificación Química": "Coagulante: 20-80 mg/L | Floculante: 0.5-3 mg/L",
        "Control pH": "6.5-8.5 | Ajuste automático",
        "Carga Superficial": "8-15 m³/m²/h"
      },
      applications: ["Recirculación agua proceso", "Tratamiento efluentes", "Clarificación circuitos cerrados"],
      features: [
        "Generación burbujas optimizada",
        "Sistema barrido automático lodos",
        "Control químico proporcional",
        "Monitoreo turbidez tiempo real"
      ],
      image: "/spec-daf-system.jpg"
    },
    {
      id: 5,
      category: "Deshidratación Concentrados",
      title: "Sistemas de Deshidratación de Concentrados",
      equipment: "Concentrate Dehydration Systems",
      description: "Equipos especializados para deshidratación de concentrados mineros hasta niveles de transporte marítimo (TML compliance).",
      specifications: {
        "Capacidad": "Hasta 50 ton/día concentrados",
        "Reducción Humedad": "Cu: 18-22% → 8-12% | Zn: 15-20% → 6-10%",
        "Presión Filtros": "8-15 bar | G-Force Centrífugas: 800-1200",
        "Granulometría": "5-150 μm | D50: 25-45 μm típico",
        "Densidad Proceso": "Cu: 3.2-4.1 g/cm³ | Zn: 3.8-4.3 g/cm³",
        "TML Compliance": "<10% humedad final | Certificación IMSBC",
        "Recuperación Agua": "85-92% | Claridad filtrado: <200 NTU",
        "Control Humedad": "Tiempo real | Pesaje automático"
      },
      applications: ["Concentrados cobre", "Concentrados zinc", "Concentrados metales preciosos"],
      features: [
        "Cumplimiento especificaciones transporte",
        "Control humedad automático",
        "Sistemas pesaje integrados",
        "Operación continua alta capacidad"
      ],
      image: "/spec-concentrate-dehydration.jpg"
    },
    {
      id: 6,
      category: "Limpieza EW",
      title: "Sistemas de Limpieza y Optimización Celdas EW",
      equipment: "EW Cell Cleaning & Optimization Systems",
      description: "Equipos automatizados para limpieza, stripping y optimización de celdas electrowinning con incremento significativo de eficiencia.",
      specifications: {
        "Capacidad Celdas": "Hasta 5000A por celda",
        "Densidad Corriente": "200-400 A/m²",
        "Voltaje Operación": "1.8-2.2 V/celda",
        "Eficiencia Corriente": "85-95% | Meta >99.5% pureza cátodos",
        "Consumo Energético": "1.8-2.1 kWh/kg Cu",
        "Frecuencia Limpieza": "Cada 7-14 días | Stripping: 4-8 h/ciclo",
        "Electrolito": "40-50 g/L Cu | 150-180 g/L H₂SO₄ | 45-65°C",
        "Control Impurezas": "Fe <2 g/L | As <500 mg/L | Sb <200 mg/L"
      },
      applications: ["Celdas EW cobre", "Celdas EW zinc", "Optimización eficiencia corriente"],
      features: [
        "Limpieza automatizada programable",
        "Control temperatura electrolito",
        "Monitoreo individual por celda",
        "Incremento 15-25% eficiencia"
      ],
      image: "/spec-ew-cleaning.jpg"
    }
  ]

  const getSpecificationIcon = (category) => {
    const icons = {
      "Filtración Móvil": "🔧",
      "Separación Centrífuga": "🌀",
      "Tratamiento Orgánico": "⚗️",
      "Clarificación Agua": "💧",
      "Deshidratación Concentrados": "📦",
      "Limpieza EW": "🔋"
    }
    return icons[category] || "📋"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Especificaciones Técnicas</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Detalles técnicos completos de equipos y sistemas especializados para 
              procesos LIX/SX/EW en la industria minera moderna.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Equipos Especificados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Eficiencia Promedio</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">6</div>
              <div className="text-gray-600">Categorías de Equipos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {specifications.map((spec) => (
              <div key={spec.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 lg:col-span-1">
                    <div className="h-64 lg:h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{getSpecificationIcon(spec.category)}</div>
                        <div className="text-emerald-700 font-medium">{spec.equipment}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {spec.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{spec.title}</h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{spec.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      {/* Technical Specifications */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Especificaciones Técnicas</h4>
                        <div className="space-y-2">
                          {Object.entries(spec.specifications).slice(0, 6).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-start py-2 border-b border-gray-100">
                              <span className="text-sm text-gray-600 font-medium">{key}:</span>
                              <span className="text-sm text-gray-900 text-right ml-4">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications & Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Aplicaciones</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {spec.applications.map((app, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {app}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-semibold text-gray-900 mb-4">Características Destacadas</h4>
                        <ul className="space-y-2">
                          {spec.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                        Descargar Ficha Técnica
                      </button>
                      <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-lg font-semibold transition-colors">
                        Solicitar Cotización
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors">
                        Ver Más Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorías de Equipos</h2>
            <p className="text-lg text-gray-600">
              Especializados en equipos de alta tecnología para cada etapa del proceso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from(new Set(specifications.map(s => s.category))).map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors group">
                <div className="w-16 h-16 bg-emerald-100 group-hover:bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <span className="text-2xl">{getSpecificationIcon(category)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {specifications.filter(s => s.category === category).length} equipos especificados
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                  Ver Especificaciones →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Especificaciones Personalizadas?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Nuestro equipo de ingenieros puede desarrollar especificaciones técnicas
            adaptadas a tus requerimientos específicos y condiciones operacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Consulta Técnica
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Catálogo Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}