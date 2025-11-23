// src/components/Header.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { handleContactClick } from '@/utils/navigation'
import { Filter, Chemistry, Layers, CirclePacking, RainDrop, BatteryCharging } from '@carbon/icons-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState(null)
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: 'Servicios', href: '/services' },
    { name: 'Industrias', href: '/industries' },
    { name: 'Recursos', href: '/resources' },
    { name: 'Acerca', href: '/about' },
  ]

  const toggleMobileSection = (section) => {
    setOpenMobileSection(openMobileSection === section ? null : section)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 steel-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-20 h-20 flex items-center justify-center">
              {/* Three balls logo with modern progressive greens */}
              <div className="flex items-center space-x-1.5">
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-sm"></div>
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full shadow-sm"></div>
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full shadow-sm"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black text-gray-900">
                Teci<span className="text-emerald-600">o</span>nic Durban
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                {/* Dropdown triggers for Servicios, Industrias and Recursos */}
                {(item.name === 'Servicios' || item.name === 'Industrias' || item.name === 'Recursos') ? (
                  <div className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 block text-gray-700 hover:text-emerald-600 cursor-pointer z-10">
                    <span className="flex items-center relative z-10">
                      {item.name}
                      <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 block z-10 ${
                      pathname === item.href
                        ? 'text-emerald-600'
                        : 'text-gray-700 hover:text-emerald-600'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"></div>
                    )}
                  </Link>
                )}
                
                {/* Services Dropdown */}
                {item.name === 'Servicios' && (
                  <div className="absolute top-full left-0 -translate-x-[10%] mt-1 w-[48rem] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
                       style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                    <div className="p-6">
                      <div className="flex gap-8">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                            Servicios Especializados
                          </div>
                          <div className="space-y-2">
                            <a href="/services/filtration" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                <Filter className="w-6 h-6 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div>
                                <div className="font-medium">Filtración y Deshidratación de Borras</div>
                                <div className="text-xs text-gray-500">Sistemas móviles SX</div>
                              </div>
                            </a>

                            <a href="/services/organic-treatment" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                <Chemistry className="w-6 h-6 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div>
                                <div className="font-medium">Tratamiento Orgánico</div>
                                <div className="text-xs text-gray-500">Purificación de extractantes</div>
                              </div>
                            </a>

                            <a href="/services/concentrate-dehydration" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                <Layers className="w-6 h-6 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div>
                                <div className="font-medium">Deshidratación Concentrados</div>
                                <div className="text-xs text-gray-500">Reducción de humedad</div>
                              </div>
                            </a>

                            <a href="/services/fine-solids" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                <CirclePacking className="w-6 h-6 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div>
                                <div className="font-medium">Sólidos Finos</div>
                                <div className="text-xs text-gray-500">Separación de finos</div>
                              </div>
                            </a>

                            <a href="/services/water-clarification" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                <RainDrop className="w-6 h-6 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div>
                                <div className="font-medium">Clarificación de Aguas</div>
                                <div className="text-xs text-gray-500">Recuperación de agua</div>
                              </div>
                            </a>

                            <a href="/services/ew-cleaning" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                <BatteryCharging className="w-6 h-6 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                              </div>
                              <div>
                                <div className="font-medium">Limpieza Celdas EW</div>
                                <div className="text-xs text-gray-500">Desborre de celdas</div>
                              </div>
                            </a>
                          </div>
                        </div>
                        
                        {/* Use Cases Section */}
                        <div className="w-80 border-l border-gray-100 pl-6">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Cuándo Usar Nuestros Servicios
                          </div>
                          <div className="space-y-3">
                            <a href="/use-cases/operational-problems" className="group/item block p-4 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                              <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                  </svg>
                                </div>
                                <span className="font-medium text-gray-900">Problemas Operacionales</span>
                              </div>
                              <p className="text-xs text-gray-600">Acumulación de borras, crud runs, o pérdidas de orgánico en su planta</p>
                            </a>
                            
                            <a href="/use-cases/emergency-shutdowns" className="group/item block p-4 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                              <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                  </svg>
                                </div>
                                <span className="font-medium text-gray-900">Paradas de Emergencia</span>
                              </div>
                              <p className="text-xs text-gray-600">Resolución rápida de problemas críticos con montaje inmediato</p>
                            </a>
                            
                            <a href="/use-cases/continuous-improvement" className="group/item block p-4 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                              <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                  </svg>
                                </div>
                                <span className="font-medium text-gray-900">Mejora Continua</span>
                              </div>
                              <p className="text-xs text-gray-600">Optimización de procesos sin inversión en instalaciones permanentes</p>
                            </a>
                            
                            <a href="/use-cases/environmental-compliance" className="group/item block p-4 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                              <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                  </svg>
                                </div>
                                <span className="font-medium text-gray-900">Cumplimiento Ambiental</span>
                              </div>
                              <p className="text-xs text-gray-600">Cumplir normativas sin construir instalaciones definitivas</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


                {/* Professional Industrial Dropdown for Industries */}
                {item.name === 'Industrias' && (
                  <div className="absolute top-full left-0 -translate-x-[10%] mt-1 w-[42rem] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
                       style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                    <div className="p-6">
                      <div className="flex gap-8">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                            Sectores Especializados
                          </div>
                          <div className="space-y-2">
                            <a href="/industries/copper" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">Cu</span>
                              </div>
                              <div>
                                <div className="font-medium">Cobre</div>
                                <div className="text-xs text-gray-500">Lixiviación y SX/EW</div>
                              </div>
                            </a>
                            
                            <a href="/industries/zinc" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">Zn</span>
                              </div>
                              <div>
                                <div className="font-medium">Zinc</div>
                                <div className="text-xs text-gray-500">Electroobtención y refinación</div>
                              </div>
                            </a>
                            
                            <a href="/industries/potassium" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">K</span>
                              </div>
                              <div>
                                <div className="font-medium">Potasio</div>
                                <div className="text-xs text-gray-500">Sales minerales</div>
                              </div>
                            </a>
                            
                            <a href="/industries/lithium" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">Li</span>
                              </div>
                              <div>
                                <div className="font-medium">Litio</div>
                                <div className="text-xs text-gray-500">Baterías y energía</div>
                              </div>
                            </a>
                            
                            <a href="/industries/crude-oil" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <ellipse cx="12" cy="6" rx="7" ry="2.5"/>
                                  <path d="M5 6v12c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V6"/>
                                  <path d="M5 11c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5"/>
                                  <path d="M5 16c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5"/>
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium">Petróleo Crudo</div>
                                <div className="text-xs text-gray-500">Refinación y procesamiento</div>
                              </div>
                            </a>
                          </div>
                        </div>
                        
                        {/* ENAP Customer Success Story - Enhanced */}
                        <div className="w-80 border-l border-gray-100 pl-6">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Historia de Éxito
                          </div>
                          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                            {/* Thumbnail placeholder */}
                            <div className="w-full h-24 bg-emerald-200 rounded-lg mb-4 flex items-center justify-center">
                              <div className="text-emerald-600 text-xs font-medium">Imagen del Proyecto</div>
                            </div>
                            
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                <span className="text-emerald-600 text-xs font-bold">ENAP</span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-emerald-800">ENAP</div>
                                <div className="text-xs text-emerald-600">Empresa Nacional del Petróleo</div>
                              </div>
                            </div>
                            
                            <p className="text-sm text-emerald-700 mb-4 leading-relaxed">
                              &quot;Tec-Ionic Durban optimizó nuestros procesos de refinación, 
                              reduciendo costos operacionales en un 18% y mejorando la eficiencia general.&quot;
                            </p>
                            
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="text-center bg-white rounded-lg p-2">
                                <div className="text-lg font-bold text-emerald-600">18%</div>
                                <div className="text-xs text-gray-600">Reducción costos</div>
                              </div>
                              <div className="text-center bg-white rounded-lg p-2">
                                <div className="text-lg font-bold text-emerald-600">95%</div>
                                <div className="text-xs text-gray-600">Eficiencia</div>
                              </div>
                            </div>
                            
                            <a href="#" className="flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                              Ver caso completo
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Professional Resources Dropdown */}
                {item.name === 'Recursos' && (
                  <div className="absolute top-full left-0 -translate-x-[10%] mt-1 w-80 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
                       style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                    <div className="p-4">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                        Centro de Recursos
                      </div>
                      <div className="space-y-1">
                        <a href="/casos-de-estudio" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Casos de Estudio</div>
                            <div className="text-xs text-gray-500">Proyectos reales documentados</div>
                          </div>
                        </a>
                        
                        <a href="/historias-de-clientes" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Historias de Clientes</div>
                            <div className="text-xs text-gray-500">Testimonios y experiencias</div>
                          </div>
                        </a>
                        
                        <a href="/tendencias-industria" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Tendencias de la Industria</div>
                            <div className="text-xs text-gray-500">Análisis y perspectivas</div>
                          </div>
                        </a>
                        
                        <a href="/white-papers" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">White Papers</div>
                            <div className="text-xs text-gray-500">Investigación técnica profunda</div>
                          </div>
                        </a>
                        
                        <a href="/especificaciones-tecnicas" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Especificaciones Técnicas</div>
                            <div className="text-xs text-gray-500">Detalles de equipos y procesos</div>
                          </div>
                        </a>
                        
                        <a href="/cumplimiento" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Cumplimiento</div>
                            <div className="text-xs text-gray-500">Normativas y certificaciones</div>
                          </div>
                        </a>
                        
                        <a href="/calculadora" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Calculadora de Eficiencia</div>
                            <div className="text-xs text-gray-500">Herramienta de cálculo interactiva</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Animation - 3 Balls Floating Left to Right (show on dropdown triggers and inactive regular links) */}
                {((item.name === 'Servicios' || item.name === 'Industrias' || item.name === 'Recursos') || pathname !== item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 w-full flex justify-center">
                    <div className="relative">
                      <div 
                        className="ball ball-1 w-3 h-3 bg-emerald-800 rounded-full absolute opacity-0 shadow-sm"
                        style={{left: '-15px', bottom: '-6px'}}
                      ></div>
                      <div 
                        className="ball ball-2 w-3 h-3 bg-emerald-600 rounded-full absolute opacity-0 shadow-md"
                        style={{left: '-1.5px', bottom: '-6px'}}
                      ></div>
                      <div 
                        className="ball ball-3 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full absolute opacity-0 shadow-sm"
                        style={{left: '12px', bottom: '-6px'}}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={(e) => handleContactClick(e, router, pathname)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Contactar
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Accordion Style */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {/* Servicios Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection('servicios')}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Servicios</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'servicios' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {openMobileSection === 'servicios' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                    <Link href="/services/filtration" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Filtración y Deshidratación de Borras
                    </Link>
                    <Link href="/services/organic-treatment" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Tratamiento Orgánico
                    </Link>
                    <Link href="/services/concentrate-dehydration" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Deshidratación Concentrados
                    </Link>
                    <Link href="/services/fine-solids" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Sólidos Finos
                    </Link>
                    <Link href="/services/water-clarification" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Clarificación de Aguas
                    </Link>
                    <Link href="/services/ew-cleaning" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Limpieza Celdas EW
                    </Link>
                    <Link href="/services/maintenance" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Mantención Preventiva
                    </Link>
                  </div>
                )}
              </div>

              {/* Industrias Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection('industrias')}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Industrias</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'industrias' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {openMobileSection === 'industrias' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                    <Link href="/industries/copper" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">Cobre</span>
                      <span className="text-xs text-gray-500 block">Lixiviación y SX/EW</span>
                    </Link>
                    <Link href="/industries/zinc" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">Zinc</span>
                      <span className="text-xs text-gray-500 block">Electroobtención y refinación</span>
                    </Link>
                    <Link href="/industries/potassium" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">Potasio</span>
                      <span className="text-xs text-gray-500 block">Sales minerales</span>
                    </Link>
                    <Link href="/industries/lithium" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">Litio</span>
                      <span className="text-xs text-gray-500 block">Baterías y energía</span>
                    </Link>
                    <Link href="/industries/crude-oil" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">Petróleo Crudo</span>
                      <span className="text-xs text-gray-500 block">Refinación y procesamiento</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Casos de Uso Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection('casos-uso')}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Casos de Uso</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'casos-uso' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {openMobileSection === 'casos-uso' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                    <Link href="/use-cases/operational-problems" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Problemas Operacionales
                    </Link>
                    <Link href="/use-cases/emergency-shutdowns" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Paradas de Emergencia
                    </Link>
                    <Link href="/use-cases/continuous-improvement" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Mejora Continua
                    </Link>
                    <Link href="/use-cases/environmental-compliance" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Cumplimiento Ambiental
                    </Link>
                  </div>
                )}
              </div>

              {/* Recursos Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileSection('recursos')}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Recursos</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openMobileSection === 'recursos' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {openMobileSection === 'recursos' && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                    <Link href="/casos-de-estudio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Casos de Estudio
                    </Link>
                    <Link href="/historias-de-clientes" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Historias de Clientes
                    </Link>
                    <Link href="/tendencias-industria" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Tendencias de la Industria
                    </Link>
                    <Link href="/white-papers" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      White Papers
                    </Link>
                    <Link href="/especificaciones-tecnicas" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Especificaciones Técnicas
                    </Link>
                    <Link href="/cumplimiento" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Cumplimiento
                    </Link>
                    <Link href="/calculadora" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      Calculadora de Eficiencia
                    </Link>
                  </div>
                )}
              </div>

              {/* Acerca - Simple link */}
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Acerca
              </Link>

              {/* Contact Button */}
              <button
                onClick={(e) => {
                  handleContactClick(e, router, pathname)
                  setIsMenuOpen(false)
                }}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 w-full"
              >
                Contactar
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}