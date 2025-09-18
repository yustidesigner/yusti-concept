'use client'

import { useEffect } from 'react'
import SoftSkills from '@/components/SoftSkills'
import IntroCard from '@/components/IntroCard'
import DetailLoverSection from '@/components/DetailLoverSection'
import PhotographyCard from '@/components/PhotographyCard'
import BrandsSection from '@/components/BrandsSection'
import LatestProjects from '@/components/LatestProjects'
import HeroDesigner from '@/components/HeroDesigner'
import ServicesGrid from '@/components/ServicesGrid'

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)

      if (el) {
        // Esperar a que todo cargue
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])
  return (
    <main>
      <HeroDesigner />
      <BrandsSection />
      <IntroCard />
      <SoftSkills />
      <LatestProjects />
      <DetailLoverSection />
      <PhotographyCard />
      <ServicesGrid />
    </main>
  )
}
