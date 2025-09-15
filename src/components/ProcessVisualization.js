// src/components/ProcessVisualization.js
'use client'
import { useState, useEffect } from 'react'
import { Beaker, ArrowRight, ArrowDown, Zap, Droplets, Factory, ChevronRight } from 'lucide-react'

export default function ProcessVisualization() {
  const [activeProcess, setActiveProcess] = useState('lix')
  const [animatedSteps, setAnimatedSteps] = useState([])
  const [isFlowActive, setIsFlowActive] = useState(false)

  const processes = {
    lix: {
      name: 'Lixiviación (LIX)',
      color: 'emerald',
      description: 'Proceso de disolución selectiva de minerales mediante soluciones acuosas',
      steps: [
        { id: 'crushing', name: 'Trituración', icon: Factory, detail: 'Reducción de tamaño del mineral' },
        { id: 'heap', name: 'Formación de Pilas', icon: Beaker, detail: 'Apilamiento estratificado del mineral' },
        { id: 'irrigation', name: 'Irrigación', icon: Droplets, detail: 'Aplicación de solución lixiviante' },
        { id: 'collection', name: 'Recolección', icon: ArrowDown, detail: 'Captación de solución rica' }
      ]
    },
    sx: {
      name: 'Extracción por Solventes (SX)',
      color: 'blue',
      description: 'Separación y concentración de metales mediante solventes orgánicos',
      steps: [
        { id: 'extraction', name: 'Extracción', icon: Beaker, detail: 'Transferencia metal a fase orgánica' },
        { id: 'separation', name: 'Separación', icon: ArrowRight, detail: 'Separación de fases acuosa-orgánica' },
        { id: 'stripping', name: 'Re-extracción', icon: Droplets, detail: 'Transferencia a electrolito rico' },
        { id: 'regeneration', name: 'Regeneración', icon: Factory, detail: 'Recuperación de solvente orgánico' }
      ]
    },
    ew: {
      name: 'Electroobtención (EW)',
      color: 'purple',
      description: 'Deposición electrolítica de metales de alta pureza',
      steps: [
        { id: 'electrolyte', name: 'Electrolito', icon: Beaker, detail: 'Preparación de solución rica' },
        { id: 'electrolysis', name: 'Electrólisis', icon: Zap, detail: 'Aplicación de corriente eléctrica' },
        { id: 'deposition', name: 'Deposición', icon: ArrowDown, detail: 'Formación de cátodos metálicos' },
        { id: 'harvesting', name: 'Cosecha', icon: Factory, detail: 'Recolección del metal puro' }
      ]
    }
  }

  // Animation control
  useEffect(() => {
    if (isFlowActive) {
      const steps = processes[activeProcess].steps
      const animateSequentially = async () => {
        setAnimatedSteps([])
        for (let i = 0; i < steps.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 800))
          setAnimatedSteps(prev => [...prev, steps[i].id])
        }
        // Reset after showing complete flow
        setTimeout(() => {
          setAnimatedSteps([])
          setIsFlowActive(false)
        }, 2000)
      }
      animateSequentially()
    }
  }, [isFlowActive, activeProcess])

  const startFlowAnimation = () => {
    setIsFlowActive(true)
  }

  const getStepColor = (processType, stepId) => {
    const colors = {
      emerald: animatedSteps.includes(stepId) ? 'bg-emerald-600 text-white' : 'bg-emerald-50 border-emerald-200 text-emerald-700',
      blue: animatedSteps.includes(stepId) ? 'bg-blue-600 text-white' : 'bg-blue-50 border-blue-200 text-blue-700',
      purple: animatedSteps.includes(stepId) ? 'bg-purple-600 text-white' : 'bg-purple-50 border-purple-200 text-purple-700'
    }
    return colors[processType] || colors.emerald
  }

  const getArrowColor = (processType, index) => {
    const colors = {
      emerald: 'text-emerald-400',
      blue: 'text-blue-400', 
      purple: 'text-purple-400'
    }
    const isActive = isFlowActive && animatedSteps.length > index
    return isActive ? 'text-emerald-500 animate-pulse' : colors[processType]
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Titillium Web, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif'}}>
            Visualización de Procesos LIX/SX/EW
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nuestros procesos especializados de manera interactiva. 
            Comprenda cómo optimizamos cada etapa para máxima eficiencia.
          </p>
        </div>

        {/* Process Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-lg p-2 flex space-x-2">
            {Object.entries(processes).map(([key, process]) => (
              <button
                key={key}
                onClick={() => setActiveProcess(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeProcess === key
                    ? `bg-${process.color}-600 text-white shadow-md`
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                suppressHydrationWarning
              >
                {process.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Process Visualization */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {processes[activeProcess].name}
            </h3>
            <p className="text-gray-600 text-lg">
              {processes[activeProcess].description}
            </p>
          </div>

          {/* Process Flow Diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
            {processes[activeProcess].steps.map((step, index) => {
              const IconComponent = step.icon
              const isLastStep = index === processes[activeProcess].steps.length - 1
              
              return (
                <div key={step.id} className="flex items-center">
                  {/* Process Step */}
                  <div className={`relative group cursor-pointer transition-all duration-500 ${
                    animatedSteps.includes(step.id) ? 'scale-110' : 'scale-100'
                  }`}>
                    <div className={`p-6 rounded-xl border-2 transition-all duration-500 ${
                      getStepColor(processes[activeProcess].color, step.id)
                    }`}>
                      <div className="text-center">
                        <div className="mb-3">
                          <IconComponent className="w-8 h-8 mx-auto" />
                        </div>
                        <div className="font-semibold text-sm mb-1">{step.name}</div>
                      </div>
                    </div>
                    
                    {/* Hover Tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      {step.detail}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {!isLastStep && (
                    <div className={`mx-4 transition-all duration-300 ${
                      getArrowColor(processes[activeProcess].color, index)
                    }`}>
                      <ChevronRight className="w-6 h-6 lg:block hidden" />
                      <ArrowDown className="w-6 h-6 lg:hidden block" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Animation Control */}
          <div className="text-center mt-12">
            <button
              onClick={startFlowAnimation}
              disabled={isFlowActive}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isFlowActive 
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : `bg-${processes[activeProcess].color}-600 hover:bg-${processes[activeProcess].color}-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl`
              }`}
              suppressHydrationWarning
            >
              {isFlowActive ? 'Reproduciendo Flujo...' : 'Ver Flujo del Proceso'}
            </button>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Factory className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Optimización Continua</h4>
            <p className="text-gray-600">Monitoreo y ajuste en tiempo real para máxima eficiencia operacional</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Beaker className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Control de Calidad</h4>
            <p className="text-gray-600">Análisis químico avanzado en cada etapa del proceso</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Eficiencia Energética</h4>
            <p className="text-gray-600">Reducción del consumo energético mediante tecnología avanzada</p>
          </div>
        </div>
      </div>
    </section>
  )
}