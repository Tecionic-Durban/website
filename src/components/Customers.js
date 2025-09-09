// src/components/Customers.js
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, Award, Zap, Target } from 'lucide-react'

export default function Customers() {
  const [hoveredCustomer, setHoveredCustomer] = useState(null)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  // KPI translation map
  const kpiTranslations = {
    efficiency: 'Eficiencia',
    downtime: 'Tiempo Parada',
    savings: 'Ahorros',
    recovery: 'Recuperación',
    production: 'Producción',
    uptime: 'Tiempo Activo',
    waste: 'Residuos',
    quality: 'Calidad'
  }

  const customers = [
    { 
      name: 'BHP Billiton', 
      logo: '/BHP_billiton_logo.png', 
      size: 'h-16 w-auto',
      caseStudy: {
        project: 'Optimización Planta Escondida',
        industry: 'Cobre',
        year: '2023',
        results: {
          efficiency: '+23%',
          downtime: '-65%',
          savings: '$4.2M USD'
        },
        description: 'Implementación de sistema avanzado de desborre y tratamiento de orgánico, resultando en mejoras record de eficiencia.'
      }
    }, 
    { 
      name: 'Anglo American', 
      logo: '/anglo_american_logo.png', 
      size: 'h-16 w-auto',
      caseStudy: {
        project: 'Modernización Los Bronces',
        industry: 'Cobre',
        year: '2023',
        results: {
          efficiency: '+19%',
          recovery: '+8.5%',
          savings: '$2.8M USD'
        },
        description: 'Actualización completa del sistema de filtración con tecnología de tierra activada de última generación.'
      }
    }, 
    { 
      name: 'Antofagasta Minerals', 
      logo: '/antofagasta_minerals_logo.png', 
      size: 'h-20 w-auto',
      caseStudy: {
        project: 'Expansión Centinela',
        industry: 'Cobre',
        year: '2022',
        results: {
          efficiency: '+27%',
          production: '+35%',
          savings: '$6.1M USD'
        },
        description: 'Proyecto integral de housekeeping y optimización de procesos SX/EW para nueva línea de producción.'
      }
    }, 
    { 
      name: 'Codelco', 
      logo: '/codelco_logo.png', 
      size: 'h-18 w-auto',
      caseStudy: {
        project: 'Revitalización El Teniente',
        industry: 'Cobre',
        year: '2023',
        results: {
          efficiency: '+21%',
          uptime: '+12%',
          savings: '$5.4M USD'
        },
        description: 'Programa de mantenimiento predictivo y desborre especializado para maximizar tiempo operativo.'
      }
    }, 
    { 
      name: 'Eco Metales', 
      logo: '/eco_metales_logo.png', 
      size: 'h-28 w-auto',
      caseStudy: {
        project: 'Optimización Sustentable',
        industry: 'Zinc',
        year: '2023',
        results: {
          efficiency: '+18%',
          waste: '-42%',
          savings: '$1.9M USD'
        },
        description: 'Implementación de procesos eco-eficientes con reducción significativa de residuos industriales.'
      }
    }, 
    { 
      name: 'El Abra', 
      logo: '/el_abra_logo.png', 
      size: 'h-24 w-auto',
      caseStudy: {
        project: 'Recuperación Avanzada',
        industry: 'Cobre',
        year: '2022',
        results: {
          efficiency: '+25%',
          recovery: '+11%',
          savings: '$3.7M USD'
        },
        description: 'Sistema innovador de recuperación de orgánico con tecnología de diálisis especializada.'
      }
    }, 
    { 
      name: 'ENAP', 
      logo: '/enap_logo.png', 
      size: 'h-40 w-auto',
      caseStudy: {
        project: 'Refinería Concón',
        industry: 'Petroquímica',
        year: '2023',
        results: {
          efficiency: '+16%',
          quality: '+9%',
          savings: '$2.3M USD'
        },
        description: 'Adaptación de tecnologías mineras para procesos petroquímicos con resultados excepcionales.'
      }
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Clientes que Confían en Nosotros
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las principales compañías mineras de Chile y el mundo, 
            brindando soluciones especializadas que optimizan sus operaciones.
          </p>
        </div>

        {/* Moving Carousel with Case Studies */}
        <div className="relative overflow-hidden mb-16">
          <div 
            className={`flex animate-carousel ${isCarouselPaused ? 'paused' : ''}`}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => {
              setIsCarouselPaused(false)
              setHoveredCustomer(null)
            }}
          >
            {/* First set of customers */}
            {customers.map((customer, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-72 mx-4 relative bg-white rounded-xl p-6 shadow-sm transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCustomer(index)}
                onMouseLeave={() => setHoveredCustomer(null)}
              >
                {/* Logo */}
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={160}
                    height={80}
                    className={`${customer.size} object-contain opacity-70 transition-all duration-300 filter`}
                    style={{
                      filter: 'grayscale(100%) brightness(0) invert(0.2) sepia(1) saturate(3) hue-rotate(140deg)'
                    }}
                  />
                </div>

                {/* Hover Case Study Overlay */}
                {hoveredCustomer === index && customer.caseStudy && isCarouselPaused && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-95 rounded-xl flex flex-col justify-center text-white z-10 transition-all duration-300 p-4">
                    <div className="text-center space-y-2 overflow-hidden">
                      <h4 className="font-bold text-xs text-emerald-400 leading-tight">{customer.caseStudy.project}</h4>
                      <div className="text-xs text-gray-300">
                        {customer.caseStudy.industry} • {customer.caseStudy.year}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-1">
                        {Object.entries(customer.caseStudy.results).slice(0, 3).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-sm font-bold text-emerald-400">{value}</div>
                            <div className="text-xs text-gray-300 leading-tight">{kpiTranslations[key] || key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-xs text-gray-300 leading-tight px-1 line-clamp-3">
                        {customer.caseStudy.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Client Name */}
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-700 transition-colors duration-300">
                    {customer.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 transition-opacity duration-300">
                    {isCarouselPaused ? 'Hover para ver caso de éxito' : ''}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {customers.map((customer, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-72 mx-4 relative bg-white rounded-xl p-6 shadow-sm transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCustomer(index + customers.length)}
                onMouseLeave={() => setHoveredCustomer(null)}
              >
                {/* Logo */}
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={160}
                    height={80}
                    className={`${customer.size} object-contain opacity-70 transition-all duration-300 filter`}
                    style={{
                      filter: 'grayscale(100%) brightness(0) invert(0.2) sepia(1) saturate(3) hue-rotate(140deg)'
                    }}
                  />
                </div>

                {/* Hover Case Study Overlay */}
                {hoveredCustomer === (index + customers.length) && customer.caseStudy && isCarouselPaused && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-95 rounded-xl flex flex-col justify-center text-white z-10 transition-all duration-300 p-4">
                    <div className="text-center space-y-2 overflow-hidden">
                      <h4 className="font-bold text-xs text-emerald-400 leading-tight">{customer.caseStudy.project}</h4>
                      <div className="text-xs text-gray-300">
                        {customer.caseStudy.industry} • {customer.caseStudy.year}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-1">
                        {Object.entries(customer.caseStudy.results).slice(0, 3).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-sm font-bold text-emerald-400">{value}</div>
                            <div className="text-xs text-gray-300 leading-tight">{kpiTranslations[key] || key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-xs text-gray-300 leading-tight px-1 line-clamp-3">
                        {customer.caseStudy.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Client Name */}
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-700 transition-colors duration-300">
                    {customer.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 transition-opacity duration-300">
                    {isCarouselPaused ? 'Hover para ver caso de éxito' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Resultados Comprobados en la Industria</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 mb-3 text-emerald-200" />
              <div className="text-3xl font-bold mb-2">+22%</div>
              <div className="text-emerald-100 text-sm">Promedio Mejora Eficiencia</div>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 mb-3 text-emerald-200" />
              <div className="text-3xl font-bold mb-2">-58%</div>
              <div className="text-emerald-100 text-sm">Reducción Tiempo Parada</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-3 text-emerald-200" />
              <div className="text-3xl font-bold mb-2">$32M+</div>
              <div className="text-emerald-100 text-sm">Ahorros Acumulados USD</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 mb-3 text-emerald-200" />
              <div className="text-3xl font-bold mb-2">18+</div>
              <div className="text-emerald-100 text-sm">Años de Confianza</div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Highlight */}
        {hoveredCustomer === null && (
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-emerald-600">
            <div className="text-lg font-semibold text-gray-900 mb-2">
              &quot;Tec-Ionic Durban ha transformado nuestras operaciones con resultados que superan consistentemente nuestras expectativas.&quot;
            </div>
            <div className="text-emerald-600 font-medium">
              — Gerente de Operaciones, Minera Principal
            </div>
            <div className="text-sm text-gray-500 mt-4">
              *Los nombres específicos se mantienen confidenciales por acuerdos de privacidad
            </div>
          </div>
        )}
      </div>
    </section>
  )
}