
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'

export const metadata: Metadata = {
  title: "Fauteuil — Coiffeur Démo | Projet Portfolio Nancy",
  description: "Site de démo d'un salon de coiffure créateur à Nancy. Coupe, coloration, balayage dans un cadre chic et confidentiel.",
  openGraph: {
    title: "Fauteuil — Coiffeur Démo | Projet Portfolio Nancy",
    description: "Site de démo d'un salon de coiffure créateur à Nancy. Coupe, coloration, balayage dans un cadre chic et confidentiel.",
    images: [
      {
        url: '/images/interior/exterieur-facade-nuit.png',
        width: 1200,
        height: 630,
        alt: 'Façade du salon Fauteuil de nuit',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
    </>
  )
}
