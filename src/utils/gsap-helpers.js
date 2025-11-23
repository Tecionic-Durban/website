// src/utils/gsap-helpers.js - GSAP Animation Utilities

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Stagger fade-up animation for elements
 */
export const fadeUpStagger = (selector, options = {}) => {
  const {
    stagger = 0.15,
    duration = 0.8,
    y = 60,
    delay = 0,
    scrollTrigger = null
  } = options

  return gsap.from(selector, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: 'power3.out',
    scrollTrigger
  })
}

/**
 * Scale-in animation with elastic easing
 */
export const scaleElastic = (selector, options = {}) => {
  const {
    duration = 1,
    delay = 0,
    scrollTrigger = null
  } = options

  return gsap.from(selector, {
    scale: 0,
    opacity: 0,
    duration,
    delay,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger
  })
}

/**
 * Number counter animation
 */
export const animateCounter = (element, targetValue, options = {}) => {
  const {
    duration = 2,
    decimals = 0,
    prefix = '',
    suffix = '',
    ease = 'power2.out'
  } = options

  const obj = { value: 0 }

  return gsap.to(obj, {
    value: targetValue,
    duration,
    ease,
    onUpdate: function() {
      const currentValue = decimals > 0
        ? obj.value.toFixed(decimals)
        : Math.ceil(obj.value)
      element.innerHTML = `${prefix}${currentValue}${suffix}`
    }
  })
}

/**
 * Parallax effect on scroll
 */
export const parallaxScroll = (selector, options = {}) => {
  const {
    yPercent = 30,
    trigger = null,
    start = 'top top',
    end = 'bottom top',
    scrub = 1
  } = options

  return gsap.to(selector, {
    yPercent,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || selector,
      start,
      end,
      scrub
    }
  })
}

/**
 * Draw SVG path animation
 */
export const drawSVGPath = (selector, options = {}) => {
  const {
    duration = 1.5,
    delay = 0,
    scrollTrigger = null,
    ease = 'power2.inOut'
  } = options

  return gsap.fromTo(selector,
    {
      strokeDasharray: function() {
        return this.getTotalLength()
      },
      strokeDashoffset: function() {
        return this.getTotalLength()
      }
    },
    {
      strokeDashoffset: 0,
      duration,
      delay,
      ease,
      scrollTrigger
    }
  )
}

/**
 * Create scroll-triggered animation with default settings
 */
export const createScrollTrigger = (selector, animationProps, triggerOptions = {}) => {
  const defaultTrigger = {
    trigger: selector,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    ...triggerOptions
  }

  return gsap.from(selector, {
    scrollTrigger: defaultTrigger,
    ...animationProps
  })
}

/**
 * Magnetic button effect
 */
export const createMagneticEffect = (buttonRef, strength = 0.3) => {
  const onMouseMove = (e) => {
    const btn = buttonRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(btn, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const onMouseLeave = () => {
    const btn = buttonRef.current
    if (!btn) return

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  }

  return { onMouseMove, onMouseLeave }
}

/**
 * Card tilt effect (3D)
 */
export const create3DTilt = (cardRef, maxTilt = 15) => {
  const onMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    })
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  return { onMouseMove, onMouseLeave }
}

/**
 * Batch reveal animation for multiple elements
 */
export const batchReveal = (elements, options = {}) => {
  const {
    stagger = 0.1,
    duration = 0.8,
    from = { y: 50, opacity: 0 },
    to = { y: 0, opacity: 1 }
  } = options

  return gsap.fromTo(elements, from, {
    ...to,
    duration,
    stagger,
    ease: 'power3.out'
  })
}

/**
 * Timeline for complex sequences
 */
export const createTimeline = (options = {}) => {
  return gsap.timeline({
    defaults: {
      ease: 'power3.out',
      duration: 0.8
    },
    ...options
  })
}

/**
 * Cleanup all ScrollTriggers
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}
