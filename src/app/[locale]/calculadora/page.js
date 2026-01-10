'use client'
import { useState, useEffect } from 'react'
import { Calculator, ChevronLeft, ChevronRight, TrendingUp, BarChart3, Target, DollarSign } from 'lucide-react'
import ThreeBallLoader from '@/components/ThreeBallLoader'

export default function CalculadoraPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const [selectedProcess, setSelectedProcess] = useState('')
  const [parameters, setParameters] = useState({})
  const [results, setResults] = useState(null)
  const [animateResults, setAnimateResults] = useState(false)
  const [benchmarkComparison, setBenchmarkComparison] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const industries = [
    {
      id: 'copper',
      name: 'Cobre',
      symbol: 'Cu',
      color: 'from-orange-400 to-orange-600',
      processes: [
        { id: 'lix', name: 'Lixiviación (LIX)', description: 'Disolución ácida de minerales de cobre' },
        { id: 'sx', name: 'Extracción por Solventes (SX)', description: 'Separación y concentración de cobre' },
        { id: 'ew', name: 'Electroobtención (EW)', description: 'Deposición electrolítica de cobre' },
      ]
    },
    {
      id: 'zinc',
      name: 'Zinc',
      symbol: 'Zn',
      color: 'from-slate-400 to-slate-600',
      processes: [
        { id: 'roasting', name: 'Tostación', description: 'Conversión de sulfuros a óxidos' },
        { id: 'leaching', name: 'Lixiviación', description: 'Disolución de zinc en ácido sulfúrico' },
        { id: 'ew', name: 'Electroobtención (EW)', description: 'Refinación electrolítica de zinc' },
      ]
    },
    {
      id: 'lithium',
      name: 'Litio',
      symbol: 'Li',
      color: 'from-cyan-400 to-cyan-600',
      processes: [
        { id: 'brine', name: 'Extracción de Salmuera', description: 'Bombeo y concentración de salmueras' },
        { id: 'evaporation', name: 'Evaporación Solar', description: 'Concentración por evaporación natural' },
        { id: 'purification', name: 'Purificación', description: 'Eliminación de impurezas' },
      ]
    },
    {
      id: 'potassium',
      name: 'Potasio',
      symbol: 'K',
      color: 'from-purple-400 to-purple-600',
      processes: [
        { id: 'dissolution', name: 'Disolución', description: 'Extracción de sales de potasio' },
        { id: 'crystallization', name: 'Cristalización', description: 'Formación de cristales puros' },
        { id: 'refining', name: 'Refinación', description: 'Purificación del producto final' },
      ]
    }
  ]

  const getParameterFields = (industry, process) => {
    const commonFields = [
      { id: 'feedRate', label: 'Tasa de Alimentación (t/h)', type: 'number', unit: 't/h', min: 1, max: 1000 },
      { id: 'operatingHours', label: 'Horas de Operación/día', type: 'number', unit: 'hrs', min: 1, max: 24 },
      { id: 'efficiency', label: 'Eficiencia Actual (%)', type: 'number', unit: '%', min: 50, max: 98 }
    ]

    const processSpecific = {
      copper: {
        lix: [
          { id: 'acidConsumption', label: 'Consumo de Ácido (kg/t)', type: 'number', unit: 'kg/t', min: 10, max: 100 },
          { id: 'copperGrade', label: 'Ley de Cu (%)', type: 'number', unit: '%', min: 0.1, max: 5, step: 0.1 },
          { id: 'temperature', label: 'Temperatura (°C)', type: 'number', unit: '°C', min: 20, max: 80 }
        ],
        sx: [
          { id: 'organicFlow', label: 'Flujo Orgánico (m³/h)', type: 'number', unit: 'm³/h', min: 10, max: 500 },
          { id: 'aqueoFlow', label: 'Flujo Acuoso (m³/h)', type: 'number', unit: 'm³/h', min: 10, max: 500 },
          { id: 'copperConcentration', label: 'Concentración Cu (g/L)', type: 'number', unit: 'g/L', min: 1, max: 50 }
        ],
        ew: [
          { id: 'current', label: 'Corriente Aplicada (A)', type: 'number', unit: 'A', min: 100, max: 10000 },
          { id: 'voltage', label: 'Voltaje (V)', type: 'number', unit: 'V', min: 1.5, max: 3.5, step: 0.1 },
          { id: 'electrolyteCu', label: 'Cu en Electrolito (g/L)', type: 'number', unit: 'g/L', min: 30, max: 60 }
        ]
      },
      zinc: {
        roasting: [
          { id: 'temperature', label: 'Temperatura Tostación (°C)', type: 'number', unit: '°C', min: 900, max: 1200 },
          { id: 'oxygenFlow', label: 'Flujo de O₂ (m³/h)', type: 'number', unit: 'm³/h', min: 50, max: 500 },
          { id: 'sulfurContent', label: 'Contenido S (%)', type: 'number', unit: '%', min: 10, max: 35 }
        ],
        leaching: [
          { id: 'acidConsumption', label: 'H₂SO₄ Consumido (kg/t)', type: 'number', unit: 'kg/t', min: 50, max: 300 },
          { id: 'zincGrade', label: 'Ley de Zn (%)', type: 'number', unit: '%', min: 5, max: 65 },
          { id: 'solidLiquidRatio', label: 'Relación S:L', type: 'number', unit: 'kg/L', min: 0.2, max: 0.6, step: 0.1 }
        ],
        ew: [
          { id: 'currentDensity', label: 'Densidad Corriente (A/m²)', type: 'number', unit: 'A/m²', min: 400, max: 800 },
          { id: 'zincConcentration', label: 'Zn en Electrolito (g/L)', type: 'number', unit: 'g/L', min: 50, max: 150 },
          { id: 'temperature', label: 'Temperatura EW (°C)', type: 'number', unit: '°C', min: 35, max: 40 }
        ]
      },
      lithium: {
        brine: [
          { id: 'pumpingRate', label: 'Tasa de Bombeo (m³/h)', type: 'number', unit: 'm³/h', min: 10, max: 200 },
          { id: 'liConcentration', label: 'Concentración Li (mg/L)', type: 'number', unit: 'mg/L', min: 200, max: 7000 },
          { id: 'mgLiRatio', label: 'Relación Mg/Li', type: 'number', unit: '', min: 3, max: 20, step: 0.5 }
        ],
        evaporation: [
          { id: 'pondArea', label: 'Área de Piscinas (ha)', type: 'number', unit: 'ha', min: 10, max: 1000 },
          { id: 'evaporationRate', label: 'Tasa Evaporación (mm/día)', type: 'number', unit: 'mm/día', min: 5, max: 20 },
          { id: 'solarRadiation', label: 'Radiación Solar (kWh/m²)', type: 'number', unit: 'kWh/m²', min: 6, max: 12 }
        ],
        purification: [
          { id: 'recoveryRate', label: 'Recuperación (%)', type: 'number', unit: '%', min: 80, max: 95 },
          { id: 'purity', label: 'Pureza Li₂CO₃ (%)', type: 'number', unit: '%', min: 99, max: 99.9, step: 0.1 },
          { id: 'processingCost', label: 'Costo Proceso ($/t)', type: 'number', unit: '$/t', min: 3000, max: 8000 }
        ]
      },
      potassium: {
        dissolution: [
          { id: 'solubilityRate', label: 'Tasa Solubilidad (%)', type: 'number', unit: '%', min: 70, max: 95 },
          { id: 'kclGrade', label: 'Ley KCl (%)', type: 'number', unit: '%', min: 15, max: 95 },
          { id: 'waterRatio', label: 'Relación Agua:Mineral', type: 'number', unit: '', min: 2, max: 8, step: 0.5 }
        ],
        crystallization: [
          { id: 'supersaturation', label: 'Sobresaturación (%)', type: 'number', unit: '%', min: 5, max: 25 },
          { id: 'crystallizationTemp', label: 'Temperatura (°C)', type: 'number', unit: '°C', min: 20, max: 80 },
          { id: 'residence', label: 'Tiempo Residencia (h)', type: 'number', unit: 'h', min: 2, max: 24 }
        ],
        refining: [
          { id: 'purityTarget', label: 'Pureza Objetivo (%)', type: 'number', unit: '%', min: 95, max: 99.5, step: 0.1 },
          { id: 'yieldRecovery', label: 'Recuperación (%)', type: 'number', unit: '%', min: 85, max: 98 },
          { id: 'processCost', label: 'Costo Refinación ($/t)', type: 'number', unit: '$/t', min: 50, max: 200 }
        ]
      }
    }

    return [...commonFields, ...(processSpecific[industry]?.[process] || [])]
  }

  // Industry benchmarks for comparison
  const industryBenchmarks = {
    copper: { avgEfficiency: 89, topQuartile: 94, worldClass: 97 },
    zinc: { avgEfficiency: 87, topQuartile: 92, worldClass: 96 },
    lithium: { avgEfficiency: 75, topQuartile: 85, worldClass: 92 },
    potassium: { avgEfficiency: 82, topQuartile: 90, worldClass: 95 }
  }

  const calculateOptimization = () => {
    if (!selectedIndustry || !selectedProcess || !parameters.feedRate) return null

    const currentProduction = (parameters.feedRate || 0) * (parameters.operatingHours || 24) * 365
    const currentEfficiency = parameters.efficiency || 85
    const benchmark = industryBenchmarks[selectedIndustry]
    
    // Realistic target based on current performance vs benchmarks
    let targetEfficiency
    if (currentEfficiency < benchmark.avgEfficiency) {
      targetEfficiency = Math.min(benchmark.avgEfficiency, currentEfficiency + 8)
    } else if (currentEfficiency < benchmark.topQuartile) {
      targetEfficiency = Math.min(benchmark.topQuartile, currentEfficiency + 5)
    } else {
      targetEfficiency = Math.min(benchmark.worldClass, currentEfficiency + 3)
    }
    
    const improvement = targetEfficiency - currentEfficiency
    const optimizedProduction = currentProduction * (targetEfficiency / currentEfficiency)
    const additionalProduction = optimizedProduction - currentProduction
    
    // Performance rating
    let performanceRating = 'Below Average'
    if (currentEfficiency >= benchmark.worldClass - 1) performanceRating = 'World Class'
    else if (currentEfficiency >= benchmark.topQuartile) performanceRating = 'Top Quartile'
    else if (currentEfficiency >= benchmark.avgEfficiency) performanceRating = 'Industry Average'
    
    // Industry-specific calculations
    let specificMetrics = {}
    
    if (selectedIndustry === 'copper') {
      const copperPrice = 8500 // USD/t
      const additionalRevenue = additionalProduction * (parameters.copperGrade || 2) / 100 * copperPrice
      specificMetrics = {
        additionalRevenue,
        reducedAcidConsumption: (parameters.acidConsumption || 50) * 0.1 * additionalProduction / 1000,
        energySavings: improvement * 0.8 * 1000 // kWh saved per % improvement
      }
    } else if (selectedIndustry === 'zinc') {
      const zincPrice = 2800 // USD/t
      const additionalRevenue = additionalProduction * (parameters.zincGrade || 55) / 100 * zincPrice
      specificMetrics = {
        additionalRevenue,
        reducedAcidConsumption: (parameters.acidConsumption || 150) * 0.12 * additionalProduction / 1000,
        energySavings: improvement * 1.2 * 1000
      }
    } else if (selectedIndustry === 'lithium') {
      const lithiumPrice = 25000 // USD/t LCE
      const additionalRevenue = additionalProduction * 0.005 * lithiumPrice // 0.5% Li recovery
      specificMetrics = {
        additionalRevenue,
        waterSavings: additionalProduction * 2.5, // m³ water saved
        processingCostReduction: additionalProduction * (parameters.processingCost || 5000) * 0.08
      }
    } else if (selectedIndustry === 'potassium') {
      const potassiumPrice = 350 // USD/t KCl
      const additionalRevenue = additionalProduction * (parameters.kclGrade || 60) / 100 * potassiumPrice
      specificMetrics = {
        additionalRevenue,
        yieldImprovement: improvement * 0.6,
        processingCostReduction: additionalProduction * (parameters.processCost || 100) * 0.1
      }
    }

    // ROI and payback calculations
    const investmentCost = additionalRevenue * 0.25 // Estimated 25% of annual revenue
    const paybackMonths = investmentCost / (additionalRevenue / 12)
    const roi = ((additionalRevenue - investmentCost) / investmentCost * 100)

    return {
      currentProduction,
      optimizedProduction,
      additionalProduction,
      currentEfficiency,
      targetEfficiency,
      improvement,
      performanceRating,
      benchmark,
      investmentCost,
      paybackMonths,
      roi,
      ...specificMetrics
    }
  }

  const performCalculation = async () => {
    setIsCalculating(true)
    setAnimateResults(false)
    
    // Simulate calculation time for better UX
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const newResults = calculateOptimization()
    setResults(newResults)
    setIsCalculating(false)
    
    // Trigger animation after results are set
    setTimeout(() => {
      setAnimateResults(true)
    }, 100)
    
    // Set benchmark comparison for visualization
    if (newResults && newResults.benchmark) {
      setBenchmarkComparison({
        current: newResults.currentEfficiency,
        target: newResults.targetEfficiency,
        industry: newResults.benchmark,
        rating: newResults.performanceRating
      })
    }
  }

  useEffect(() => {
    if (selectedIndustry && selectedProcess && Object.keys(parameters).length > 0) {
      performCalculation()
    }
  }, [selectedIndustry, selectedProcess, parameters])

  const handleParameterChange = (fieldId, value) => {
    setParameters(prev => ({
      ...prev,
      [fieldId]: parseFloat(value) || 0
    }))
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetCalculator = () => {
    setCurrentStep(1)
    setSelectedIndustry('')
    setSelectedProcess('')
    setParameters({})
    setResults(null)
  }

  const canProceed = (step) => {
    switch(step) {
      case 1: return selectedIndustry !== ''
      case 2: return selectedProcess !== ''
      case 3: return Object.keys(parameters).length > 0
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Calculadora de Optimización</h1>
            <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Estime el potencial de mejora en eficiencia y rendimiento de sus procesos mineros 
              con nuestra calculadora especializada en tecnologías LIX/SX/EW.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep === step 
                    ? 'bg-white text-emerald-600' 
                    : currentStep > step 
                      ? 'bg-emerald-400 text-white' 
                      : 'bg-emerald-800 text-emerald-300'
                }`}>
                  {currentStep > step ? '✓' : step}
                </div>
                <div className={`ml-3 ${currentStep >= step ? 'text-white' : 'text-emerald-300'}`}>
                  <div className="font-semibold">
                    {step === 1 ? 'Industria' : step === 2 ? 'Proceso' : 'Parámetros'}
                  </div>
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 mx-4 ${currentStep > step ? 'bg-emerald-400' : 'bg-emerald-800'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 min-h-[600px] relative">
              {/* Step 1: Industry Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Seleccione la Industria</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => {
                          setSelectedIndustry(industry.id)
                          setSelectedProcess('')
                          setParameters({})
                        }}
                        className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                          selectedIndustry === industry.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4`}>
                          <span className="text-white font-bold text-2xl">
                            {industry.symbol}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                          {industry.processes.length} procesos disponibles
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Process Selection */}
              {currentStep === 2 && selectedIndustry && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Seleccione el Proceso</h2>
                  
                  <div className="grid gap-4">
                    {industries.find(i => i.id === selectedIndustry)?.processes.map((process) => (
                      <button
                        key={process.id}
                        onClick={() => {
                          setSelectedProcess(process.id)
                          setParameters({})
                        }}
                        className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                          selectedProcess === process.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <h3 className="text-lg font-semibold text-gray-900">{process.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{process.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Parameters */}
              {currentStep === 3 && selectedIndustry && selectedProcess && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingrese los Parámetros</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {getParameterFields(selectedIndustry, selectedProcess).map((field) => (
                      <div key={field.id}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            type={field.type}
                            min={field.min}
                            max={field.max}
                            step={field.step || 1}
                            value={parameters[field.id] || ''}
                            onChange={(e) => handleParameterChange(field.id, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder={`Ingrese ${field.label.toLowerCase()}`}
                            suppressHydrationWarning
                          />
                          {field.unit && (
                            <span className="absolute right-3 top-3 text-gray-500 text-sm">
                              {field.unit}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    currentStep === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  suppressHydrationWarning
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Anterior
                </button>

                <div className="flex space-x-4">
                  <button
                    onClick={resetCalculator}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    suppressHydrationWarning
                  >
                    Reiniciar
                  </button>
                  
                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceed(currentStep)}
                      className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                        canProceed(currentStep)
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                      suppressHydrationWarning
                    >
                      Siguiente
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={performCalculation}
                      disabled={isCalculating}
                      className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center min-w-[200px] ${
                        isCalculating 
                          ? 'bg-emerald-400 cursor-not-allowed' 
                          : 'bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105'
                      } text-white`}
                      suppressHydrationWarning
                    >
                      {isCalculating ? (
                        <>
                          <ThreeBallLoader />
                          <span className="ml-2">Calculando...</span>
                        </>
                      ) : (
                        'Calcular Optimización'
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Resultados de Optimización</h3>
              
              {isCalculating ? (
                <div className="text-center text-gray-500 py-8">
                  <div className="mb-4">
                    <ThreeBallLoader />
                  </div>
                  <p className="text-emerald-600 font-medium">Analizando parámetros y calculando optimización...</p>
                  <p className="text-sm text-gray-400 mt-2">Comparando con benchmarks de la industria</p>
                </div>
              ) : !results ? (
                <div className="text-center text-gray-500 py-8">
                  <Calculator className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Complete todos los parámetros para ver los resultados de optimización</p>
                </div>
              ) : (
                <div className={`space-y-6 transition-all duration-1000 ${animateResults ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                  
                  {/* Performance Rating Banner */}
                  <div className={`p-4 rounded-lg border-l-4 ${
                    results.performanceRating === 'World Class' ? 'bg-green-50 border-green-500' :
                    results.performanceRating === 'Top Quartile' ? 'bg-blue-50 border-blue-500' :
                    results.performanceRating === 'Industry Average' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-red-50 border-red-500'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span className="font-semibold">Clasificación: {results.performanceRating}</span>
                    </div>
                  </div>

                  {/* Industry Benchmark Visualization */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Comparación Industrial
                    </h4>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Su Eficiencia</span>
                          <span className="font-semibold">{results.currentEfficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1500 ${animateResults ? '' : 'w-0'} ${
                              results.currentEfficiency >= results.benchmark.worldClass - 1 ? 'bg-green-600' :
                              results.currentEfficiency >= results.benchmark.topQuartile ? 'bg-blue-600' :
                              results.currentEfficiency >= results.benchmark.avgEfficiency ? 'bg-yellow-600' : 'bg-red-500'
                            }`}
                            style={{ width: animateResults ? `${(results.currentEfficiency / 100) * 100}%` : '0%' }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="text-gray-500">Promedio</div>
                          <div className="font-semibold">{results.benchmark.avgEfficiency}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-500">Top 25%</div>
                          <div className="font-semibold">{results.benchmark.topQuartile}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-500">Clase Mundial</div>
                          <div className="font-semibold">{results.benchmark.worldClass}%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ROI & Payback Analysis */}
                  {results.roi && (
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Análisis de ROI
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">
                            {results.roi.toFixed(0)}%
                          </div>
                          <div className="text-sm text-gray-600">ROI Anual</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {results.paybackMonths.toFixed(1)}
                          </div>
                          <div className="text-sm text-gray-600">Meses Payback</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-sm text-gray-600">Inversión Estimada</div>
                        <div className="font-semibold">${results.investmentCost.toLocaleString()}</div>
                      </div>
                    </div>
                  )}

                  {/* Production Impact with Progress Animation */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Impacto en Producción
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Producción Actual</span>
                          <span className="font-semibold">{results.currentProduction.toLocaleString()} t/año</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                          <div 
                            className="h-2 bg-gray-600 rounded-full transition-all duration-1000"
                            style={{ width: animateResults ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-600">Producción Optimizada</span>
                          <span className="font-semibold text-emerald-700">{results.optimizedProduction.toLocaleString()} t/año</span>
                        </div>
                        <div className="w-full bg-emerald-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-emerald-600 rounded-full transition-all duration-1500 delay-300"
                            style={{ width: animateResults ? `${(results.optimizedProduction / results.currentProduction) * 100}%` : '0%' }}
                          ></div>
                        </div>
                      </div>

                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-600">Incremento Estimado</div>
                        <div className="text-xl font-bold text-blue-700">+{results.additionalProduction.toLocaleString()} t/año</div>
                        <div className="text-sm text-blue-600">({((results.improvement / results.currentEfficiency) * 100).toFixed(1)}% incremento)</div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Impact */}
                  {results.additionalRevenue && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Beneficios Adicionales</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm text-gray-600">Ingresos Adicionales</span>
                          <span className="font-semibold text-green-700">${results.additionalRevenue.toLocaleString()}</span>
                        </div>
                        {results.energySavings && (
                          <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                            <span className="text-sm text-gray-600">Ahorro Energético</span>
                            <span className="font-semibold text-purple-700">{results.energySavings.toLocaleString()} kWh</span>
                          </div>
                        )}
                        {results.waterSavings && (
                          <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                            <span className="text-sm text-gray-600">Ahorro de Agua</span>
                            <span className="font-semibold text-cyan-700">{results.waterSavings.toLocaleString()} m³</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        ¿Listo para implementar estas mejoras?
                      </p>
                      <button 
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        suppressHydrationWarning
                      >
                        Solicitar Consulta Técnica
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}