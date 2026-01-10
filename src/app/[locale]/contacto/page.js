'use client'
import { useState } from 'react'
import { Location, Email, Time } from '@carbon/icons-react'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import posthog from 'posthog-js'

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    serviceSpecificAnswer: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (getFormProgress() < 100 || isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Track successful form submission
        posthog.capture('contact_form_submitted', {
          service: formData.service,
          company: formData.company,
          has_phone: !!formData.phone,
          has_message: !!formData.message
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          serviceSpecificAnswer: '',
          message: ''
        })
        setSelectedService('')
      } else {
        setSubmitStatus('error')
        // Track failed submission
        posthog.capture('contact_form_failed', {
          error: result.error || 'unknown'
        })
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'Filtración y deshidratación de borras y sólidos',
    'Tratamiento y recuperación de orgánico en procesos SX',
    'Deshidratación de concentrados de cobre',
    'Tratamiento de sólidos finos (centrífugas)',
    'Remoción de sólidos de aguas clarificadas',
    'Limpieza de celdas EW',
    'Consulta general'
  ]

  const handleServiceChange = (service) => {
    setSelectedService(service)
    setFormData({...formData, service})
  }

  const getFormProgress = () => {
    const requiredFields = ['firstName', 'lastName', 'company', 'email', 'service']
    const filledFields = requiredFields.filter(field => formData[field].trim() !== '').length
    return (filledFields / requiredFields.length) * 100
  }

  // Service-specific questions
  const getServiceQuestion = () => {
    const questions = {
      'Filtración y deshidratación de borras y sólidos': '¿Cuál es el volumen aproximado de borras que necesita procesar? (ton/día)',
      'Tratamiento y recuperación de orgánico en procesos SX': '¿Qué tipo de contaminación presenta su orgánico?',
      'Deshidratación de concentrados de cobre': '¿Cuál es la capacidad de producción de concentrados? (ton/día)',
      'Tratamiento de sólidos finos (centrífugas)': '¿Cuál es el caudal de sólidos finos a tratar? (m³/h)',
      'Remoción de sólidos de aguas clarificadas': '¿Cuál es el caudal de agua a clarificar? (m³/h)',
      'Limpieza de celdas EW': '¿Cuántas celdas EW requieren limpieza?'
    }
    return questions[selectedService] || null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solicite una Consulta</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>Nombre</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>Apellido</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                {/* Email and Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>Email de Trabajo</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="juan.perez@empresa.com"
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

                {/* Phone (optional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="+56 9 xxxx xxxx"
                  />
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

                {/* Service-Specific Question */}
                {selectedService && getServiceQuestion() && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {getServiceQuestion()}
                    </label>
                    <input
                      type="text"
                      value={formData.serviceSpecificAnswer}
                      onChange={(e) => setFormData({...formData, serviceSpecificAnswer: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Ingrese su respuesta"
                    />
                  </div>
                )}

                {/* Additional Comments */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Comentarios Adicionales
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder="Cuéntenos más detalles sobre sus necesidades específicas..."
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                      <div>
                        <p className="font-semibold text-emerald-800">¡Consulta enviada exitosamente!</p>
                        <p className="text-sm text-emerald-600">Recibirá una confirmación en su correo. Le responderemos dentro de 24 horas hábiles.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <div>
                        <p className="font-semibold text-red-800">Error al enviar la consulta</p>
                        <p className="text-sm text-red-600">Por favor intente nuevamente o contáctenos directamente a contacto@tsf.cl</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Smart Submit Button */}
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    disabled={getFormProgress() < 100 || isSubmitting}
                    className={`flex-1 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform shadow-lg ${
                      isSubmitting
                        ? 'bg-emerald-400 text-white cursor-wait'
                        : getFormProgress() >= 100
                          ? 'bg-emerald-600 hover:bg-emerald-500 hover:scale-105 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </div>
                    ) : getFormProgress() >= 100 ? (
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

                  {getFormProgress() >= 100 && !isSubmitting && submitStatus !== 'success' && (
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
                      <Location className="w-5 h-5 text-white" />
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
                      <Email className="w-5 h-5 text-white" />
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
                      <Time className="w-5 h-5 text-white" />
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

              {/* Response Time Guarantee */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Time className="w-5 h-5 text-yellow-600 mr-2" />
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