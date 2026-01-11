// src/components/Header.js
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { handleContactClick } from '@/utils/navigation'
import { Filter, Chemistry, Layers, CirclePacking, RainDrop, BatteryCharging, Analytics, ChartLineData, Meter, CertificateCheck, ArrowLeft, ChevronRight, Document, Growth } from '@carbon/icons-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState(null)
  const [mobilePanel, setMobilePanel] = useState('main') // 'main', 'services', 'industries', 'resources'
  const [activeServiceTab, setActiveServiceTab] = useState('operaciones')
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Language config for mobile display
  const localeConfig = {
    'es-cl': { name: 'Español (Chile)', flag: '🇨🇱' },
    'es-mx': { name: 'Español (México)', flag: '🇲🇽' },
    'pt-br': { name: 'Português (Brasil)', flag: '🇧🇷' },
    'en': { name: 'English', flag: '🇺🇸' }
  }

  const navigation = [
    { name: t('navigation.services'), href: '/services', key: 'services' },
    { name: t('navigation.industries'), href: '/industries', key: 'industries' },
    { name: t('navigation.resources'), href: '/resources', key: 'resources' },
    { name: t('navigation.about'), href: '/about', key: 'about' },
  ]

  const toggleMobileSection = (section) => {
    setOpenMobileSection(openMobileSection === section ? null : section)
  }

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setMobilePanel('main')
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 steel-gradient" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
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
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-sm font-bold">Cu</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.copper.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.copper.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/zinc" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-sm font-bold">Zn</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.zinc.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.zinc.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/potassium" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-sm font-bold">K</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.potassium.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.potassium.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/lithium" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                <span className="text-white text-sm font-bold">Li</span>
                              </div>
                              <div>
                                <div className="font-medium">{t('header.industries.lithium.name')}</div>
                                <div className="text-xs text-gray-500">{t('header.industries.lithium.description')}</div>
                              </div>
                            </a>

                            <a href="/industries/crude-oil" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-gray-900 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
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
                          <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                            <Document className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
                          </div>
                          <div>
                            <div className="font-medium">{t('header.resourceLinks.caseStudies.name')}</div>
                            <div className="text-xs text-gray-500">{t('header.resourceLinks.caseStudies.description')}</div>
                          </div>
                        </a>

                        <Link href="/tendencias-industria" className="group/item flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-200">
                          <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover/item:from-emerald-500 group-hover/item:to-emerald-600 rounded-lg flex items-center justify-center mr-3 transition-all duration-200">
                            <Growth className="w-5 h-5 text-emerald-600 group-hover/item:text-white transition-colors duration-200" />
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

        {/* Mobile Navigation - Full Screen Slide */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-hidden" style={{ top: 'calc(88px + env(safe-area-inset-top, 0px))' }}>
            <div className="relative h-full">
              {/* Main Panel */}
              <div
                className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                  mobilePanel === 'main' ? 'translate-x-0' : '-translate-x-full'
                }`}
              >
                <div className="h-full flex flex-col px-4 py-6">
                  <nav className="flex-1 space-y-2">
                    {/* Services - with arrow */}
                    <button
                      onClick={() => setMobilePanel('services')}
                      className="w-full flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <span>{t('navigation.services')}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>

                    {/* Industries - with arrow */}
                    <button
                      onClick={() => setMobilePanel('industries')}
                      className="w-full flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <span>{t('navigation.industries')}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>

                    {/* Resources - with arrow */}
                    <button
                      onClick={() => setMobilePanel('resources')}
                      className="w-full flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <span>{t('navigation.resources')}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>

                    {/* About - direct link */}
                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="w-full flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <span>{t('navigation.about')}</span>
                    </Link>

                    {/* Language Switcher - Improved */}
                    <div className="pt-4 border-t border-gray-100 mt-4">
                      <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('languageSwitcher.selectLanguage')}</p>
                      <LanguageSwitcher />
                    </div>
                  </nav>

                  {/* Contact Button */}
                  <div className="pt-4">
                    <button
                      onClick={(e) => {
                        handleContactClick(e, router, pathname)
                        closeMobileMenu()
                      }}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-colors"
                    >
                      {t('navigation.contact')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Services Panel */}
              <div
                className={`absolute inset-0 bg-white transition-transform duration-300 ease-in-out ${
                  mobilePanel === 'services' ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="h-full flex flex-col">
                  {/* Back Header */}
                  <button
                    onClick={() => setMobilePanel('main')}
                    className="flex items-center gap-2 px-4 py-4 text-emerald-600 font-semibold border-b border-gray-100"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t('navigation.services')}</span>
                  </button>

                  {/* Services List */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                    {/* Operational Services */}
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">{t('header.operationalServices')}</p>

                    <Link href="/services/filtration" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Filter className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.filtration.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.filtration.description')}</div>
                      </div>
                    </Link>

                    <Link href="/services/organic-treatment" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Chemistry className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.organicTreatment.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.organicTreatment.description')}</div>
                      </div>
                    </Link>

                    <Link href="/services/concentrate-dehydration" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Layers className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.concentrateDehydration.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.concentrateDehydration.description')}</div>
                      </div>
                    </Link>

                    <Link href="/services/fine-solids" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <CirclePacking className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.fineSolids.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.fineSolids.description')}</div>
                      </div>
                    </Link>

                    <Link href="/services/ew-cleaning" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <BatteryCharging className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.ewCleaning.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.ewCleaning.description')}</div>
                      </div>
                    </Link>

                    {/* Data Analytics */}
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2 mt-6 pt-4 border-t border-gray-100">{t('header.dataAnalytics')}</p>

                    <Link href="/services/turbidity-monitoring" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Analytics className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.turbidityMonitoring.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.turbidityMonitoring.description')}</div>
                      </div>
                    </Link>

                    <Link href="/services/tsf-monitoring" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <ChartLineData className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.tsfMonitoring.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.tsfMonitoring.description')}</div>
                      </div>
                    </Link>

                    <Link href="/services/tif-measurement" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Meter className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{t('header.services.tifMeasurement.name')}</div>
                        <div className="text-xs text-gray-500">{t('header.services.tifMeasurement.description')}</div>
                      </div>
                    </Link>

                  </div>
                </div>
              </div>

              {/* Industries Panel */}
              <div
                className={`absolute inset-0 bg-white transition-transform duration-300 ease-in-out ${
                  mobilePanel === 'industries' ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="h-full flex flex-col">
                  {/* Back Header */}
                  <button
                    onClick={() => setMobilePanel('main')}
                    className="flex items-center gap-2 px-4 py-4 text-emerald-600 font-semibold border-b border-gray-100"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t('navigation.industries')}</span>
                  </button>

                  {/* Industries List */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                    <Link href="/industries/copper" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-bold">Cu</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.industries.copper.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.industries.copper.description')}</div>
                      </div>
                    </Link>

                    <Link href="/industries/zinc" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-bold">Zn</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.industries.zinc.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.industries.zinc.description')}</div>
                      </div>
                    </Link>

                    <Link href="/industries/potassium" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-bold">K</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.industries.potassium.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.industries.potassium.description')}</div>
                      </div>
                    </Link>

                    <Link href="/industries/lithium" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-bold">Li</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.industries.lithium.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.industries.lithium.description')}</div>
                      </div>
                    </Link>

                    <Link href="/industries/crude-oil" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-gray-800 rounded-xl flex items-center justify-center">
                        <RainDrop className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.industries.crudeOil.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.industries.crudeOil.description')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources Panel */}
              <div
                className={`absolute inset-0 bg-white transition-transform duration-300 ease-in-out ${
                  mobilePanel === 'resources' ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <div className="h-full flex flex-col">
                  {/* Back Header */}
                  <button
                    onClick={() => setMobilePanel('main')}
                    className="flex items-center gap-2 px-4 py-4 text-emerald-600 font-semibold border-b border-gray-100"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>{t('navigation.resources')}</span>
                  </button>

                  {/* Resources List */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                    <Link href="/casos-de-exito" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Document className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.resourceLinks.caseStudies.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.resourceLinks.caseStudies.description')}</div>
                      </div>
                    </Link>

                    <Link href="/tendencias-industria" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Growth className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t('header.resourceLinks.industryTrends.name')}</div>
                        <div className="text-sm text-gray-500">{t('header.resourceLinks.industryTrends.description')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}