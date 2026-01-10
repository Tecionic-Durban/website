'use client'

// src/app/page.js
import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import EfficiencyComparison from '@/components/EfficiencyComparison'
import About from '@/components/About'
import LatamPresence from '@/components/LatamPresence'
import OperationalIntelligence from '@/components/OperationalIntelligence'
import Customers from '@/components/Customers'
import Contact from '@/components/Contact'
import { checkHashAndScroll } from '@/utils/navigation'

export default function Home() {
  useEffect(() => {
    checkHashAndScroll()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <EfficiencyComparison />
      <LatamPresence />
      <OperationalIntelligence />
      <Customers />
      <Contact />
    </>
  )
}
