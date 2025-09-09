'use client'

// src/app/page.js
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SwipeableProcessCards from '@/components/SwipeableProcessCards'
import EfficiencyComparison from '@/components/EfficiencyComparison'
import About from '@/components/About'
import Customers from '@/components/Customers'
import Contact from '@/components/Contact'
import { checkHashAndScroll } from '@/utils/navigation'

export default function Home() {
  useEffect(() => {
    checkHashAndScroll()
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Customers />
      <SwipeableProcessCards />
      <EfficiencyComparison />
      <Contact />
    </main>
  )
}