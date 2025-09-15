'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, AlertCircle, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    industry: '',
    plantCapacity: '',
    currentChallenges: '',
    urgency: '',
    budget: '',
    message: ''
  })

  const services = [
    'Filtración y deshidratación de borras y sólidos',
    'Tratamiento y recuperación de orgánico en procesos SX', 
    'Deshidratación de concentrados de cobre',
    'Tratamiento de sólidos finos (centrífugas)',
    'Remoción de sólidos de aguas clarificadas',
    'Limpieza de celdas EW',
    'Consulta general'
  ]

  const industries = [
    'Cobre', 'Zinc', 'Litio', 'Potasio', 
    'Petróleo Crudo', 'Otro'
  ]

  const handleServiceChange = (service) => {
    setSelectedService(service)
    setFormData({...formData, service})
    
    // Auto-show advanced fields for specific services
    if (['Tratamiento de borras de plantas SX', 'Apoyo completo planta de SX, housekeeping'].includes(service)) {
      setShowAdvanced(true)
    }
  }

  const getFormProgress = () => {
    const requiredFields = ['name', 'company', 'email', 'service']
    const filledFields = requiredFields.filter(field => formData[field].trim() !== '').length
    return (filledFields / requiredFields.length) * 100
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <div className="w-24 h-1 bg-emerald-400 mb-6"></div>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Estamos listos para ayudarle a optimizar sus procesos mineros con soluciones móviles 
              especializadas en filtración y separación sólido-líquido.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solicite una Consulta</h2>
              
              {/* Form Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Progreso del formulario</span>
                  <span className="text-sm text-emerald-600">{Math.round(getFormProgress())}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-emerald-600 rounded-full transition-all duration-500"
                    style={{ width: `${getFormProgress()}%` }}
                  ></div>
                </div>
              </div>

              <form className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>Nombre Completo</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>Empresa</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>Email</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="su@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="+56 9 xxxx xxxx"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <span>Servicio de Interés</span>
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select 
                    value={selectedService}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Seleccione un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Progressive Disclosure - Advanced Fields */}
                {selectedService && (
                  <div className="border-t border-gray-200 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="flex items-center text-emerald-600 hover:text-emerald-700 mb-4 transition-colors duration-300"
                    >
                      <span className="font-semibold">Información Técnica Adicional</span>
                      <span className="text-xs ml-2">(opcional - ayuda con cotización precisa)</span>
                      {showAdvanced ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                    </button>

                    {showAdvanced && (
                      <div className="space-y-4 bg-gray-50 rounded-lg p-6 animate-in slide-in-from-top duration-300">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Industria Principal
                            </label>
                            <select 
                              value={formData.industry}
                              onChange={(e) => setFormData({...formData, industry: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                            >
                              <option value="">Seleccione industria</option>
                              {industries.map((industry, index) => (
                                <option key={index} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Capacidad de Planta
                            </label>
                            <select 
                              value={formData.plantCapacity}
                              onChange={(e) => setFormData({...formData, plantCapacity: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                            >
                              <option value="">Seleccione capacidad</option>
                              <option value="< 10k tpa">Menos de 10K tpa</option>
                              <option value="10-50k tpa">10K - 50K tpa</option>
                              <option value="50-100k tpa">50K - 100K tpa</option>
                              <option value="> 100k tpa">Más de 100K tpa</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Urgencia del Proyecto
                            </label>
                            <select 
                              value={formData.urgency}
                              onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                            >
                              <option value="">Seleccione urgencia</option>
                              <option value="immediate">Inmediato (1-2 semanas)</option>
                              <option value="short">Corto plazo (1-3 meses)</option>
                              <option value="medium">Mediano plazo (3-6 meses)</option>
                              <option value="long">Largo plazo (6+ meses)</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Rango de Presupuesto
                            </label>
                            <select 
                              value={formData.budget}
                              onChange={(e) => setFormData({...formData, budget: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-sm"
                            >
                              <option value="">Seleccione rango</option>
                              <option value="< 50k">Menos de $50K USD</option>
                              <option value="50-200k">$50K - $200K USD</option>
                              <option value="200-500k">$200K - $500K USD</option>
                              <option value="> 500k">Más de $500K USD</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Desafíos Actuales
                          </label>
                          <textarea 
                            value={formData.currentChallenges}
                            onChange={(e) => setFormData({...formData, currentChallenges: e.target.value})}
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 placeholder-gray-500 text-sm resize-none"
                            placeholder="Describa los principales desafíos operacionales que enfrenta..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Main Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje Adicional
                  </label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder="Cuéntenos más detalles sobre sus necesidades específicas..."
                  />
                </div>

                {/* Smart Submit Button */}
                <div className="flex items-center space-x-4">
                  <button 
                    type="submit"
                    disabled={getFormProgress() < 100}
                    className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      getFormProgress() >= 100 
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {getFormProgress() >= 100 ? (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Enviar Consulta Técnica
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        Complete campos requeridos
                      </div>
                    )}
                  </button>
                  
                  {getFormProgress() >= 100 && (
                    <div className="text-emerald-600 text-sm animate-pulse">
                      ✓ Listo para enviar
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">Ubicaciones</h4>
                      <p className="text-gray-600">
                        <strong>Santiago:</strong> Luis Thayer Ojeda 95, of. 312, Providencia<br />
                        <strong>Antofagasta:</strong> Miraflores 1260 B, Calama<br />
                        <span className="text-emerald-600 font-medium">Servicios móviles en toda Latinoamérica</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">Email</h4>
                      <a href="mailto:contacto@tsf.cl" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                        contacto@tsf.cl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">Horarios de Atención</h4>
                      <p className="text-gray-600">
                        Lunes - Viernes: 8:00 - 18:00 CLT<br />
                        <span className="text-emerald-600 font-medium">Soporte de emergencia 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">¿Por qué elegir Tec-Ionic Durban?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">20+ años de experiencia especializada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Equipos móviles certificados ex.proof</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Hasta 70 ton/día capacidad torta seca</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Registro SICEP - Operación certificada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Clientes como BHP, SQM, Capstone, Antofagasta Minerals</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                  <h4 className="font-semibold text-yellow-900">Garantía de Respuesta</h4>
                </div>
                <p className="text-yellow-800 text-sm">
                  Respondemos todas las consultas técnicas dentro de <strong>24 horas hábiles</strong>. 
                  Para emergencias operacionales, contamos con soporte prioritario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}