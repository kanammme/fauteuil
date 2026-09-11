
import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: "Galerie — Fauteuil | Coiffeur Démo Nancy",
  description: "Découvrez l'ambiance chic et confidentielle du projet Fauteuil à Nancy à travers notre galerie photos.",
  openGraph: {
    title: "Galerie — Fauteuil | Coiffeur Démo Nancy",
    description: "Découvrez l'ambiance chic et confidentielle du projet Fauteuil à Nancy à travers notre galerie photos.",
    images: [
      {
        url: '/images/interior/interior-fauteuil-vintage.jpg', // Nouvelle image
        width: 1200,
        height: 630,
        alt: 'Ambiance bar du salon Fauteuil',
      },
    ],
  },
}

const GaleriePage = () => {
  const images = [
    {
      src: '/images/interior/exterieur-facade-nuit.png',
      alt: "Façade du salon Fauteuil de nuit, enseigne dorée éclairée.",
      title: 'Façade'
    },
    {
      src: '/images/interior/interior-salle-vue-large.png',
      alt: "Vue d'ensemble de la salle du salon Fauteuil.",
      title: 'La Salle'
    },
    {
      src: '/images/interior/action-coupe-profil.png',
      alt: "Coiffeur en plein geste de coupe sur un client.",
      title: 'Le Geste'
    },
    {
      src: '/images/interior/portrait-accueil-serviette.png',
      alt: "Client détendu, serviette chaude sur le visage.",
      title: 'L\'Accueil'
    },
    {
      src: '/images/interior/detail-produits-plan-travail.png',
      alt: "Outils et produits de coiffure professionnels sur plan de travail.",
      title: 'Les Produits'
    },
    {
      src: '/images/interior/interior-fauteuil-vintage.jpg',
      alt: "Fauteuil de barbier vintage en cuir noir dans un salon de coiffure.",
      title: 'Fauteuil Vintage'
    },
    {
      src: '/images/interior/interior-miroir-accessoires.jpg',
      alt: "Miroir de barbier avec des accessoires de coiffure professionnels posés devant.",
      title: 'Accessoires du Barbier'
    },
    {
      src: '/images/interior/interior-miroir-soleil.jpg',
      alt: "Grand miroir soleil doré accroché sur un mur sombre.",
      title: 'Miroir Soleil'
    },
    {
      src: '/images/interior/interior-mur-rock-chic.jpg',
      alt: "Mur décoré avec des cadres de photos et illustrations dans un style rock et chic.",
      title: 'Mur Rock & Chic'
    }
  ]

  return (
    <>
      <Header />

      {/* Hero de page */}
      <PageHero
        title="Galerie"
        subtitle="Découvrez l'ambiance confidentielle et l'univers unique du projet Fauteuil"
        backgroundImage="/images/interior/interior-fauteuil-vintage.jpg" // Nouvelle image
        backgroundAlt="Fauteuil de barbier vintage"
      />

      {/* Grille des images */}
      <section className="py-12 md:py-20 bg-noir-profond">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={85}
                  />
                  {/* Overlay sombre au survol */}
                  <div className="absolute inset-0 bg-noir-profond/0 group-hover:bg-noir-profond/30 transition-all duration-500" />
                </div>
                {/* Légende au survol */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-noir-profond/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className='font-cormorant text-blanc-casse text-lg'>{image.title}</h3>
                </div>
                {/* Effet de bordure dorée au survol */}
                <div className="absolute inset-0 border border-transparent group-hover:border-dore/30 transition-all duration-500 rounded-lg" />
              </div>
            ))}
          </div>

          {/* Texte descriptif */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className='font-cormorant text-blanc-casse/80 text-lg leading-relaxed'>
              Chaque détail du projet a été pensé pour créer une atmosphère unique où
              le chic parisien rencontre l'esprit rock vintage. Des fauteuils Belmont
              aux miroirs Sunburst, chaque élément raconte une histoire.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-dore text-dore hover:bg-dore/15 hover:text-dore-clair rounded-lg transition-all duration-500 font-cormorant font-semibold"
              >
                Découvrir le projet
              </a>
              <a
                href="tel:+33612345678"
                className="inline-flex items-center justify-center px-6 py-3 bg-dore/10 border border-dore/30 text-dore hover:bg-dore/20 hover:text-dore-clair rounded-lg transition-all duration-500 font-cormorant font-semibold"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                06 12 34 56 78
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GaleriePage
