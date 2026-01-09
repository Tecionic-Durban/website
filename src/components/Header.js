// src/components/Header.js
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { handleContactClick } from '@/utils/navigation'
import { Filter, Chemistry, Layers, CirclePacking, RainDrop, BatteryCharging, Analytics, ChartLineData, Meter, CertificateCheck } from '@carbon/icons-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState(null)
  const [activeServiceTab, setActiveServiceTab] = useState('operaciones')
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations()

  const navigation = [
    { name: t('navigation.services'), href: '/services', key: 'services' },
    { name: t('navigation.industries'), href: '/industries', key: 'industries' },
    { name: t('navigation.resources'), href: '/resources', key: 'resources' },
    { name: t('navigation.about'), href: '/about', key: 'about' },
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
                Teci<span className="text-emerald-600">o</span>nic
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.key} className="group relative">
                {/* Dropdown triggers for Services, Industries and Resources */}
                {(item.key === 'services' || item.key === 'industries' || item.key === 'resources') ? (
                  <div className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 block text-gray-700 hover:text-emerald-600 cursor-default z-10">
                    <span className="flex items-center relative z-10">
                      <span className="relative">
                        {item.name}
                        {/* Balls positioned under text only */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100">
                          <div className="ball ball-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-0 shadow-sm"></div>
                          <div className="ball ball-2 w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full opacity-0 shadow-sm"></div>
                          <div className="ball ball-3 w-3 h-3 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full opacity-0 shadow-sm"></div>
                        </div>
                      </span>
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
                    <span className="relative z-10">
                      {item.name}
                      {/* Balls positioned under text only */}
                      {pathname !== item.href && (
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100">
                          <div className="ball ball-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-0 shadow-sm"></div>
                          <div className="ball ball-2 w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full opacity-0 shadow-sm"></div>
                          <div className="ball ball-3 w-3 h-3 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full opacity-0 shadow-sm"></div>
                        </div>
                      )}
                    </span>
                    {pathname === item.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"></div>
                    )}
                  </Link>
                )}
                
                {/* Services Dropdown - Plaid-style tabbed layout */}
                {item.key === 'services' && (
                  <div className="absolute top-full left-0 -translate-x-[10%] mt-1 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
                       style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                    <div className="flex">
                      {/* Left Sidebar - Category Tabs */}
                      <div className="w-56 border-r border-gray-100 py-4">
                        <button
                          onMouseEnter={() => setActiveServiceTab('operaciones')}
                          className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                            activeServiceTab === 'operaciones'
                              ? 'text-emerald-600 bg-emerald-50 border-l-2 border-emerald-600'
                              : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 border-l-2 border-transparent'
                          }`}
                        >
                          {t('header.operationalServices')}
                        </button>
                        <button
                          onMouseEnter={() => setActiveServiceTab('analitica')}
                          className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                            activeServiceTab === 'analitica'
                              ? 'text-emerald-600 bg-emerald-50 border-l-2 border-emerald-600'
                              : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 border-l-2 border-transparent'
                          }`}
                        >
                          {t('header.dataAnalytics')}
                        </button>
                        <button
                          onMouseEnter={() => setActiveServiceTab('calidad')}
                          className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                            activeServiceTab === 'calidad'
                              ? 'text-emerald-600 bg-emerald-50 border-l-2 border-emerald-600'
                              : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 border-l-2 border-transparent'
                          }`}
                        >
                          {t('header.qualityControl')}
                        </button>
                      </div>

                      {/* Right Content - Services Grid */}
                      <div className="flex-1 p-6 min-w-[32rem]">
                        {/* Operaciones Tab Content */}
                        {activeServiceTab === 'operaciones' && (
                          <>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                              <a href="/services/filtration" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <Filter className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.filtration.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.filtration.description')}</div>
                                </div>
                              </a>

                              <a href="/services/organic-treatment" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <Chemistry className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.organicTreatment.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.organicTreatment.description')}</div>
                                </div>
                              </a>

                              <a href="/services/concentrate-dehydration" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <Layers className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.concentrateDehydration.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.concentrateDehydration.description')}</div>
                                </div>
                              </a>

                              <a href="/services/fine-solids" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <CirclePacking className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.fineSolids.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.fineSolids.description')}</div>
                                </div>
                              </a>

                              <a href="/services/ew-cleaning" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <BatteryCharging className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.ewCleaning.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.ewCleaning.description')}</div>
                                </div>
                              </a>
                            </div>
                          </>
                        )}

                        {/* Analítica Tab Content */}
                        {activeServiceTab === 'analitica' && (
                          <>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                              <a href="/services/turbidity-monitoring" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100 group-hover/item:from-purple-500 group-hover/item:to-purple-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <Analytics className="w-5 h-5 text-purple-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.turbidityMonitoring.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.turbidityMonitoring.description')}</div>
                                </div>
                              </a>

                              <a href="/services/tsf-monitoring" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100 group-hover/item:from-purple-500 group-hover/item:to-purple-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <ChartLineData className="w-5 h-5 text-purple-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.tsfMonitoring.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.tsfMonitoring.description')}</div>
                                </div>
                              </a>

                              <a href="/services/tif-measurement" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100 group-hover/item:from-purple-500 group-hover/item:to-purple-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <Meter className="w-5 h-5 text-purple-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.tifMeasurement.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.tifMeasurement.description')}</div>
                                </div>
                              </a>
                            </div>
                          </>
                        )}

                        {/* Control de Calidad Tab Content */}
                        {activeServiceTab === 'calidad' && (
                          <>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                              <a href="/services/humidity-certification" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                                <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 group-hover/item:from-blue-500 group-hover/item:to-blue-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                                  <CertificateCheck className="w-5 h-5 text-blue-600 group-hover/item:text-white transition-colors duration-200" />
                                </div>
                                <div>
                                  <div className="font-medium">{t('header.services.humidityCertification.name')}</div>
                                  <div className="text-xs text-gray-500">{t('header.services.humidityCertification.description')}</div>
                                </div>
                              </a>
                            </div>

                            {/* Coming soon indicator */}
                            <div className="mt-6 pt-4 border-t border-gray-100">
                              <p className="text-xs text-gray-400">
                                {t('header.qualityComingSoon')}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}


                {/* Professional Industrial Dropdown for Industries */}
                {item.key === 'industries' && (
                  <div className="absolute top-full left-0 -translate-x-[10%] mt-1 w-[42rem] bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
                       style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                    <div className="p-6">
                      <div className="flex gap-8">
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                            {t('header.specializedSectors')}
                          </div>
                          <div className="space-y-2">
                            <a href="/industries/copper" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">Cu</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.copper.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.copper.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/zinc" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">Zn</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.zinc.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.zinc.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/potassium" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">K</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.potassium.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.potassium.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/lithium" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-xs font-bold">Li</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.lithium.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.lithium.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/crude-oil" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-gray-900 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <RainDrop className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.crudeOil.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.crudeOil.description')}</div>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* Copper Case Study - Real */}
                        <div className="w-80 border-l border-gray-100 pl-6">
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            {t('header.successStory')}
                          </div>
                          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
                            {/* Real image */}
                            <div className="w-full h-24 rounded-lg mb-4 overflow-hidden relative">
                              <Image
                                src="/filtro_prensa_1200_drone_view.png"
                                alt={t('header.copperCaseStudy.imageAlt')}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white text-xs font-bold">Cu</span>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-orange-800">{t('header.copperCaseStudy.title')}</div>
                                <div className="text-xs text-orange-600">{t('header.copperCaseStudy.location')}</div>
                              </div>
                            </div>

                            <p className="text-sm text-orange-700 mb-4 leading-relaxed">
                              {t('header.copperCaseStudy.description')}
                            </p>

                            <div className="grid grid-cols-2 gap-2 mb-4">
                              <div className="text-center bg-white rounded-lg p-2">
                                <div className="text-lg font-bold text-orange-600">0</div>
                                <div className="text-xs text-gray-600">{t('header.copperCaseStudy.incidents')}</div>
                              </div>
                              <div className="text-center bg-white rounded-lg p-2">
                                <div className="text-lg font-bold text-orange-600">100%</div>
                                <div className="text-xs text-gray-600">{t('header.copperCaseStudy.removal')}</div>
                              </div>
                            </div>

                            <a href="/case-studies/limpieza-celdas-ew" className="flex items-center justify-center w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                              {t('header.viewFullCase')}
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
                {item.key === 'resources' && (
                  <div className="absolute top-full left-0 -translate-x-[10%] mt-1 w-80 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
                       style={{boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                    <div className="p-4">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                        {t('header.resourceCenter')}
                      </div>
                      <div className="space-y-1">
                        <a href="/casos-de-exito" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">{t('header.resourceLinks.caseStudies.name')}</div>
                            <div className="text-xs text-gray-500">{t('header.resourceLinks.caseStudies.description')}</div>
                          </div>
                        </a>

                        <Link href="/tendencias-industria" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">{t('header.resourceLinks.industryTrends.name')}</div>
                            <div className="text-xs text-gray-500">{t('header.resourceLinks.industryTrends.description')}</div>
                          </div>
                        </Link>


                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </nav>

          {/* CTA Button + Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={(e) => handleContactClick(e, router, pathname)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
            >
              {t('navigation.contact')}
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
                  <span>{t('navigation.services')}</span>
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
                  <div className="pl-4 pr-2 py-2 bg-gray-50 rounded-lg mt-1">
                    {/* Servicios Operacionales */}
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                      {t('header.operationalServices')}
                    </div>
                    <Link href="/services/filtration" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.services.filtration.name')}
                    </Link>
                    <Link href="/services/organic-treatment" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.services.organicTreatment.name')}
                    </Link>
                    <Link href="/services/concentrate-dehydration" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.services.concentrateDehydration.name')}
                    </Link>
                    <Link href="/services/fine-solids" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.services.fineSolids.name')}
                    </Link>
                    <Link href="/services/ew-cleaning" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.services.ewCleaning.name')}
                    </Link>

                    {/* Analítica de Datos */}
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 mt-3 border-t border-gray-200 pt-3">
                      {t('header.dataAnalytics')}
                    </div>
                    <Link href="/services/turbidity-monitoring" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-white rounded transition-colors">
                      {t('header.services.turbidityMonitoring.name')}
                    </Link>
                    <Link href="/services/tsf-monitoring" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-white rounded transition-colors">
                      {t('header.services.tsfMonitoring.name')}
                    </Link>
                    <Link href="/services/tif-measurement" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-white rounded transition-colors">
                      {t('header.services.tifMeasurement.name')}
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
                  <span>{t('navigation.industries')}</span>
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
                      <span className="font-medium">{t('header.industries.copper.name')}</span>
                      <span className="text-xs text-gray-500 block">{t('header.industries.copper.description')}</span>
                    </Link>
                    <Link href="/industries/zinc" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">{t('header.industries.zinc.name')}</span>
                      <span className="text-xs text-gray-500 block">{t('header.industries.zinc.description')}</span>
                    </Link>
                    <Link href="/industries/potassium" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">{t('header.industries.potassium.name')}</span>
                      <span className="text-xs text-gray-500 block">{t('header.industries.potassium.description')}</span>
                    </Link>
                    <Link href="/industries/lithium" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">{t('header.industries.lithium.name')}</span>
                      <span className="text-xs text-gray-500 block">{t('header.industries.lithium.description')}</span>
                    </Link>
                    <Link href="/industries/crude-oil" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      <span className="font-medium">{t('header.industries.crudeOil.name')}</span>
                      <span className="text-xs text-gray-500 block">{t('header.industries.crudeOil.description')}</span>
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
                  <span>{t('navigation.resources')}</span>
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
                    <Link href="/casos-de-exito" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.resourceLinks.caseStudies.name')}
                    </Link>
                    <Link href="/tendencias-industria" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-white rounded transition-colors">
                      {t('header.resourceLinks.industryTrends.name')}
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
                {t('navigation.about')}
              </Link>

              {/* Language Switcher - Mobile */}
              <div className="px-3 py-3">
                <LanguageSwitcher />
              </div>

              {/* Contact Button */}
              <button
                onClick={(e) => {
                  handleContactClick(e, router, pathname)
                  setIsMenuOpen(false)
                }}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 w-full cursor-pointer"
              >
                {t('navigation.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}