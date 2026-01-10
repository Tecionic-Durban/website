'use client'

// src/components/ThreeBallLoader.js
// Universal loading animation matching the Tecionic logo design
// Only use when there's actual async loading - not for artificial delays

export default function ThreeBallLoader({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }

  const ballSize = sizeClasses[size] || sizeClasses.md

  return (
    <div className={`flex space-x-2 justify-center items-center ${className}`}>
      <div
        className={`${ballSize} bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-sm animate-bounce [animation-delay:-0.3s]`}
      />
      <div
        className={`${ballSize} bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full shadow-sm animate-bounce [animation-delay:-0.15s]`}
      />
      <div
        className={`${ballSize} bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full shadow-sm animate-bounce`}
      />
    </div>
  )
}

// Full page loader wrapper for page-level loading states
export function PageLoader({ message }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <ThreeBallLoader size="lg" />
        {message && (
          <p className="mt-4 text-gray-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  )
}
