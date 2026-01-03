// src/components/FloatingElements.js
'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Wrench, Zap, X, Wifi, WifiOff, Cloud, CloudOff, RefreshCw, ChevronUp, ChevronDown, LogIn, LogOut, MessageCircle, Send, Bot } from 'lucide-react'

export default function FloatingElements() {
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: '¡Hola! Soy Lupin, el asistente virtual de Tec-Ionic Durban. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date()
    }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isChatTyping, setIsChatTyping] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [syncStatus, setSyncStatus] = useState('synced') // 'syncing', 'synced', 'failed'
  const [lastSyncTime, setLastSyncTime] = useState(new Date())
  const [offlineQueueCount, setOfflineQueueCount] = useState(0)
  const [isEquipmentCollapsed, setIsEquipmentCollapsed] = useState(false)
  const [isNetworkCollapsed, setIsNetworkCollapsed] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Client login state
  const [equipmentStatus, setEquipmentStatus] = useState([
    { id: 'sx-plant', name: 'Planta SX', status: 'operational', lastUpdate: '2 min ago' },
    { id: 'ew-cells', name: 'Celdas EW', status: 'operational', lastUpdate: '1 min ago' },
    { id: 'filtration', name: 'Sistema Filtración', status: 'maintenance', lastUpdate: '5 min ago' },
    { id: 'recovery', name: 'Recuperación Orgánico', status: 'operational', lastUpdate: '3 min ago' }
  ])

  // Network status monitoring
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      // Simulate sync when coming back online
      if (offlineQueueCount > 0) {
        setSyncStatus('syncing')
        setTimeout(() => {
          setSyncStatus('synced')
          setLastSyncTime(new Date())
          setOfflineQueueCount(0)
        }, 3000)
      }
    }

    const handleOffline = () => {
      setIsOnline(false)
      setSyncStatus('failed')
    }

    // Set initial state
    setIsOnline(navigator.onLine)

    // Add event listeners
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [offlineQueueCount])

  // Simulate real-time status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEquipmentStatus(prev => prev.map(equipment => ({
        ...equipment,
        lastUpdate: Math.random() > 0.7 ? 
          `${Math.floor(Math.random() * 5) + 1} min ago` : 
          equipment.lastUpdate
      })))

      // Simulate offline queue changes
      if (!isOnline && Math.random() > 0.8) {
        setOfflineQueueCount(prev => prev + 1)
      }
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [isOnline])

  // Periodic sync simulation
  useEffect(() => {
    if (!isOnline) return

    const syncInterval = setInterval(() => {
      setSyncStatus('syncing')
      setTimeout(() => {
        setSyncStatus('synced')
        setLastSyncTime(new Date())
      }, 2000)
    }, 300000) // Sync every 5 minutes when online

    return () => clearInterval(syncInterval)
  }, [isOnline])

  const getStatusColor = (status) => {
    switch(status) {
      case 'operational': return 'text-green-500'
      case 'maintenance': return 'text-yellow-500'  
      case 'critical': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'operational': return CheckCircle
      case 'maintenance': return Wrench
      case 'critical': return AlertTriangle
      default: return Clock
    }
  }

  const getNetworkIcon = () => {
    if (!isOnline) return WifiOff
    return Wifi
  }

  const getSyncIcon = () => {
    switch(syncStatus) {
      case 'syncing': return RefreshCw
      case 'synced': return Cloud
      case 'failed': return CloudOff
      default: return Cloud
    }
  }

  const getSyncColor = () => {
    switch(syncStatus) {
      case 'syncing': return 'text-blue-500'
      case 'synced': return 'text-green-500'
      case 'failed': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  // Chat functionality
  const handleSendMessage = () => {
    if (!chatInput.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: chatInput.trim(),
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')
    setIsChatTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        message: getBotResponse(userMessage.message),
        timestamp: new Date()
      }
      setChatMessages(prev => [...prev, botResponse])
      setIsChatTyping(false)
    }, 1500)
  }

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('servicios') || lowerMessage.includes('service')) {
      return 'Ofrecemos servicios especializados en LIX/SX/EW (lixiviación, extracción por solventes y electroobtención) para la industria minera. ¿Te interesa algún proceso en particular?'
    }
    
    if (lowerMessage.includes('industria') || lowerMessage.includes('mining')) {
      return 'Trabajamos con diversas industrias: Cobre, Zinc, Potasio, Litio e Hidrocarburos. Cada una tiene procesos especializados. ¿Cuál te interesa más?'
    }
    
    if (lowerMessage.includes('contacto') || lowerMessage.includes('contact')) {
      return 'Puedes contactarnos a través de nuestro formulario web o llamando a nuestra línea principal. Nuestro equipo está disponible para atender tus consultas. ¿Necesitas información específica de contacto?'
    }
    
    if (lowerMessage.includes('lix') || lowerMessage.includes('lixiviacion')) {
      return 'La lixiviación (LIX) es nuestro proceso especializado de extracción química de metales usando soluciones ácidas o básicas. Logramos eficiencias del 85-92%. ¿Quieres saber más detalles técnicos?'
    }
    
    if (lowerMessage.includes('sx') || lowerMessage.includes('solvente')) {
      return 'La extracción por solventes (SX) permite concentrar y purificar metales disueltos con alta pureza (95-98%). Es ideal para cobre, zinc, níquel y cobalto. ¿Te interesa el proceso completo?'
    }
    
    if (lowerMessage.includes('ew') || lowerMessage.includes('electroobtención')) {
      return 'La electroobtención (EW) deposita metales puros (99.9% pureza) mediante corriente eléctrica. Consumo energético eficiente de 1.8-2.0 kWh/kg. ¿Necesitas especificaciones técnicas?'
    }
    
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo')) {
      return 'Los costos varían según el proyecto, volumen y especificaciones técnicas. Te recomiendo contactar a nuestro equipo comercial para una cotización personalizada. ¿Tienes detalles específicos del proyecto?'
    }
    
    if (lowerMessage.includes('ubicacion') || lowerMessage.includes('donde')) {
      return 'Tec-Ionic Durban tiene presencia en Chile con servicios especializados para la minería. Ofrecemos soporte técnico 24/7 y presencia en terreno. ¿Necesitas información de una ubicación específica?'
    }
    
    return 'Interesante pregunta. Te recomiendo explorar las secciones de Industrias y Servicios en nuestro sitio web, o contactar directamente a nuestros especialistas para información más detallada. ¿Hay algo específico que pueda ayudarte a encontrar?'
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 space-y-4">
      {/* Client Login Button (when not logged in) */}
      {!isLoggedIn && (
        <button 
          onClick={() => setIsLoggedIn(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl transition-all duration-300 transform hover:scale-110 precision-click"
          suppressHydrationWarning
        >
          <LogIn className="w-6 h-6" />
        </button>
      )}

      {/* Equipment Status Monitor - Only for logged in clients */}
      {isLoggedIn && (
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-80 transform transition-all duration-300 hover:scale-105 steel-gradient">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-gray-900 text-sm">Estado de Equipos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <button 
              onClick={() => setIsEquipmentCollapsed(!isEquipmentCollapsed)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              suppressHydrationWarning
            >
              {isEquipmentCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>
        
        {!isEquipmentCollapsed && (
          <>
            <div className="space-y-2">
              {equipmentStatus.map((equipment) => {
                const StatusIcon = getStatusIcon(equipment.status)
                return (
                  <div key={equipment.id} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <StatusIcon className={`w-4 h-4 ${getStatusColor(equipment.status)}`} />
                      <span className="text-sm font-medium text-gray-700">{equipment.name}</span>
                    </div>
                    <div className="text-xs text-gray-500">{equipment.lastUpdate}</div>
                  </div>
                )
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200 text-center">
              <div className="text-xs text-gray-500">
                Sistema de Monitoreo 24/7 • Última sincronización: {lastSyncTime.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </>
        )}
        </div>
      )}

      {/* Network & Sync Status Indicator - Only for logged in clients */}
      {isLoggedIn && (
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-80 transform transition-all duration-300 hover:scale-105 steel-gradient">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {(() => {
                  const NetworkIcon = getNetworkIcon()
                  return <NetworkIcon className={`w-5 h-5 ${isOnline ? 'text-emerald-600' : 'text-red-500'}`} />
                })()}
                {(() => {
                  const SyncIcon = getSyncIcon()
                  return <SyncIcon className={`w-4 h-4 ${getSyncColor()} ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                })()}
              </div>
              <span className="font-semibold text-gray-900 text-sm">
                {isOnline ? 'Conectado' : 'Modo Offline'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <button 
                onClick={() => setIsNetworkCollapsed(!isNetworkCollapsed)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                suppressHydrationWarning
              >
                {isNetworkCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {!isNetworkCollapsed && (
            <>
              <div className="space-y-3">
                {/* Connection Status */}
                <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm font-medium text-gray-700">
                      {isOnline ? 'Red Disponible' : 'Sin Conexión'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {isOnline ? 'Estable' : 'Reconectando...'}
                  </div>
                </div>

                {/* Sync Status */}
                <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      syncStatus === 'synced' ? 'bg-green-500' : 
                      syncStatus === 'syncing' ? 'bg-blue-500 animate-pulse' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm font-medium text-gray-700">
                      {syncStatus === 'synced' ? 'Sincronizado' : 
                       syncStatus === 'syncing' ? 'Sincronizando...' : 'Error Sync'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {syncStatus === 'synced' ? lastSyncTime.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }) :
                     syncStatus === 'syncing' ? 'En proceso' : 'Falló'}
                  </div>
                </div>

                {/* Offline Queue */}
                {(!isOnline || offlineQueueCount > 0) && (
                  <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-yellow-800">Cola Offline</span>
                    </div>
                    <div className="text-xs text-yellow-700">
                      {offlineQueueCount} pendientes
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Campo Compatible</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                    <span>Datos Locales OK</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Client Logout Button (when logged in) */}
      {isLoggedIn && (
        <button 
          onClick={() => {
            setIsLoggedIn(false)
            setIsEquipmentCollapsed(false)
            setIsNetworkCollapsed(false)
          }}
          className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-4 shadow-xl transition-all duration-300 transform hover:scale-110 precision-click"
          suppressHydrationWarning
        >
          <LogOut className="w-6 h-6" />
        </button>
      )}

      {/* Chat Assistant Button */}
      <button 
        onClick={() => setShowChat(true)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-xl transition-all duration-300 transform hover:scale-110 precision-click"
        suppressHydrationWarning
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Assistant Modal */}
      {showChat && (
        <div className="fixed bottom-20 right-6 z-40">
          <div className="bg-white rounded-2xl shadow-2xl w-96 h-[480px] flex flex-col relative animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                  <img 
                    src="/chatbot_avatar.png" 
                    alt="Lupin Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Lupin</h3>
                  <p className="text-emerald-100 text-sm">Asistente Virtual • En línea</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-emerald-200 hover:text-white transition-colors"
                suppressHydrationWarning
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-md' 
                      : 'bg-gray-100 text-gray-900 rounded-bl-md'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-emerald-200' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isChatTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md p-3 max-w-[80%]">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  disabled={isChatTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim() || isChatTyping}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
                  suppressHydrationWarning
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setChatInput('¿Qué servicios ofrecen?')}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  disabled={isChatTyping}
                >
                  Servicios
                </button>
                <button
                  onClick={() => setChatInput('¿En qué industrias trabajan?')}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  disabled={isChatTyping}
                >
                  Industrias
                </button>
                <button
                  onClick={() => setChatInput('¿Cómo puedo contactarlos?')}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  disabled={isChatTyping}
                >
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}