'use client'
import { useState, useEffect, useCallback } from 'react'
import { Location, Email, Time } from '@carbon/icons-react'
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import posthog from 'posthog-js'

// reCAPTCHA v3 site key
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function ContactPage() {
  const t = useTranslations('contactPage')
  const [selectedService, setSelectedService] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Spam protection
  const [formLoadTime] = useState(() => Date.now())
  const [honeypot, setHoneypot] = useState('')

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (typeof window !== 'undefined' && RECAPTCHA_SITE_KEY) {
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  // Get reCAPTCHA token
  const getRecaptchaToken = useCallback(async () => {
    if (typeof window !== 'undefined' && window.grecaptcha && RECAPTCHA_SITE_KEY) {
      try {
        return new Promise((resolve) => {
          window.grecaptcha.ready(async () => {
            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
            resolve(token)
          })
        })
      } catch (error) {
        console.error('reCAPTCHA error:', error)
        return null
      }
    }
    return null
  }, [])

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

    // Get reCAPTCHA token
    const recaptchaToken = await getRecaptchaToken()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _honeypot: honeypot,
          _formLoadTime: formLoadTime,
          _submitTime: Date.now(),
          _recaptchaToken: recaptchaToken
        }),
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

  // Service keys for translation lookup
  const serviceKeys = [
    'filtration',
    'organicTreatment',
    'concentrateDehydration',
    'fineSolids',
    'waterClarification',
    'ewCleaning',
    'generalInquiry'
  ]

  const handleServiceChange = (serviceKey) => {
    setSelectedService(serviceKey)
    const serviceLabel = t(`form.services.${serviceKey}`)
    setFormData({...formData, service: serviceLabel})
  }

  const getFormProgress = () => {
    const requiredFields = ['firstName', 'lastName', 'company', 'email', 'service']
    const filledFields = requiredFields.filter(field => formData[field].trim() !== '').length
    return (filledFields / requiredFields.length) * 100
  }

  // Service-specific questions
  const getServiceQuestion = () => {
    if (!selectedService || selectedService === 'generalInquiry') return null
    return t(`form.serviceQuestions.${selectedService}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <div className="w-24 h-1 bg-emerald-400 mb-6"></div>
            <p className="text-xl text-emerald-100 leading-relaxed">
              {t('hero.description')}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('form.title')}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot - hidden from humans */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>{t('form.firstName')}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('form.placeholder.firstName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>{t('form.lastName')}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('form.placeholder.lastName')}
                    />
                  </div>
                </div>

                {/* Email and Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>{t('form.workEmail')}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('form.placeholder.email')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <span>{t('form.company')}</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder={t('form.placeholder.company')}
                    />
                  </div>
                </div>

                {/* Phone (optional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('form.phone')} <span className="text-gray-400 font-normal">({t('form.optional')})</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('form.placeholder.phone')}
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <span>{t('form.serviceOfInterest')}</span>
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{t('form.selectService')}</option>
                    {serviceKeys.map((key) => (
                      <option key={key} value={key}>{t(`form.services.${key}`)}</option>
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
                      placeholder={t('form.answerPlaceholder')}
                    />
                  </div>
                )}

                {/* Additional Comments */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('form.additionalComments')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder={t('form.placeholder.message')}
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                      <div>
                        <p className="font-semibold text-emerald-800">{t('form.success.title')}</p>
                        <p className="text-sm text-emerald-600">{t('form.success.message')}</p>
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
                        <p className="font-semibold text-red-800">{t('form.error.title')}</p>
                        <p className="text-sm text-red-600">{t('form.error.message')}</p>
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
                        {t('form.submit.sending')}
                      </div>
                    ) : getFormProgress() >= 100 ? (
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        {t('form.submit.ready')}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        {t('form.submit.incomplete')}
                      </div>
                    )}
                  </button>

                  {getFormProgress() >= 100 && !isSubmitting && submitStatus !== 'success' && (
                    <div className="text-emerald-600 text-sm animate-pulse">
                      {t('form.submit.readyToSend')}
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('info.title')}</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Location className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{t('info.locations')}</h4>
                      <p className="text-gray-600">
                        <strong>{t('info.locationsDetail.santiago')}</strong> {t('info.locationsDetail.santiagoAddress')}<br />
                        <strong>{t('info.locationsDetail.antofagasta')}</strong> {t('info.locationsDetail.antofagastaAddress')}<br />
                        <span className="text-emerald-600 font-medium">{t('info.locationsDetail.mobileServices')}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Email className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{t('info.email')}</h4>
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
                      <h4 className="font-semibold text-lg text-gray-900">{t('info.hours')}</h4>
                      <p className="text-gray-600">
                        {t('info.hoursDetail.weekdays')}<br />
                        <span className="text-emerald-600 font-medium">{t('info.hoursDetail.emergency')}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Time className="w-5 h-5 text-yellow-600 mr-2" />
                  <h4 className="font-semibold text-yellow-900">{t('guarantee.title')}</h4>
                </div>
                <p
                  className="text-yellow-800 text-sm"
                  dangerouslySetInnerHTML={{ __html: t('guarantee.message') }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
