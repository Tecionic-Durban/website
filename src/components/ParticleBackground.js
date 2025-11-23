'use client'

// src/components/ParticleBackground.js - Oil droplet particle system
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ParticleBackground({ count = 20, color = 'rgba(107, 114, 128, 0.3)' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full pointer-events-none'

      const size = gsap.utils.random(4, 12)
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.backgroundColor = color
      particle.style.filter = 'blur(2px)'
      particle.style.opacity = gsap.utils.random(0.2, 0.6)

      // Random initial position
      particle.style.left = `${gsap.utils.random(0, 100)}%`
      particle.style.top = `${gsap.utils.random(0, 100)}%`

      container.appendChild(particle)
      particles.push(particle)

      // Animate particle
      const duration = gsap.utils.random(15, 30)
      const yMovement = gsap.utils.random(-100, 100)
      const xMovement = gsap.utils.random(-50, 50)

      gsap.to(particle, {
        y: yMovement,
        x: xMovement,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: gsap.utils.random(0, 5)
      })

      // Opacity animation
      gsap.to(particle, {
        opacity: gsap.utils.random(0.1, 0.4),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      particles.forEach(particle => {
        const particleRect = particle.getBoundingClientRect()
        const particleX = particleRect.left - rect.left + particleRect.width / 2
        const particleY = particleRect.top - rect.top + particleRect.height / 2

        const distance = Math.sqrt(
          Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
        )

        if (distance < 100) {
          const angle = Math.atan2(particleY - mouseY, particleX - mouseX)
          const force = (100 - distance) / 100
          const moveX = Math.cos(angle) * force * 30
          const moveY = Math.sin(angle) * force * 30

          gsap.to(particle, {
            x: `+=${moveX}`,
            y: `+=${moveY}`,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      particles.forEach(p => p.remove())
    }
  }, [count, color])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  )
}
