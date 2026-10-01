
import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Inter } from 'next/font/google'
import '../styles/globals.css'
import Footer from '@/components/Footer'

// Configuration des polices Google Fonts
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// URL de base pour les métadonnées (aperçus de partage WhatsApp, SMS, réseaux)
const siteUrl = 'https://salondecoiffurefauteuil.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Fauteuil — Salon de coiffure démonstration | Projet portfolio',
    template: '%s | Fauteuil',
  },
  description: "Site de démonstration réalisé à des fins de portfolio. Ce projet ne représente aucun établissement réel et n'a aucune vocation commerciale.",
  keywords: ['portfolio', 'démonstration', 'projet web', 'site démo', 'projet fictif'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Fauteuil',
    title: 'Fauteuil — Salon de coiffure démonstration | Projet portfolio',
    description: "Site de démonstration réalisé à des fins de portfolio. Ce projet ne représente aucun établissement réel et n'a aucune vocation commerciale.",
    images: [
      {
        url: '/images/interior/interior-fauteuil-vintage.jpg',
        width: 1200,
        height: 630,
        alt: 'Façade du salon Fauteuil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fauteuil — Salon de coiffure démonstration | Projet portfolio',
    description: "Site de démonstration réalisé à des fins de portfolio. Ce projet ne représente aucun établissement réel et n'a aucune vocation commerciale.",
    images: ['/images/interior/interior-fauteuil-vintage.jpg'],
  },
  // Salon fictif : le site ne doit pas apparaître dans Google comme un vrai salon
  robots: {
    index: false,
    follow: true,
  },
  // Favicon SVG détecté automatiquement par Next.js depuis app/icon.svg
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-noir-profond text-blanc-casse font-inter overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-dore focus:text-noir-profond">Aller au contenu principal</a>
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
