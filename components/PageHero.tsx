import React from 'react'
import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundAlt?: string
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt = 'Arrière-plan de la page'
}) => {
  // Hauteur approximative du header fixe (à ajuster si le header change)
  const headerHeight = 'pt-32' // Correspond à 8rem, même que le Hero principal

  return (
    <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden ${headerHeight}`}>
      {/* Image de fond optionnelle avec effets visuels */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover object-center animate-ken-burns"
            priority
            quality={80}
            sizes="100vw"
          />
          {/* Overlay sombre pour lisibilité */}
          <div className="absolute inset-0 bg-noir-profond/75" />
          {/* Dégradé radial pour éclaircir légèrement les bords et assombrir le centre */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-noir-profond/40 to-noir-profond/80" />
          {/* Overlay doré subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-dore/8 via-transparent to-transparent" />
        </div>
      )}

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        {/* Titre principal */}
        <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-blanc-casse mb-6 break-words overflow-hidden px-2">
          {title}
        </h1>

        {/* Sous-titre optionnel */}
        {subtitle && (
          <p className="font-cormorant italic text-xl md:text-2xl text-gris-chaud max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Élément décoratif */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-dore to-transparent"></div>
        </div>
      </div>

      {/* Indicateur de scroll (uniquement si pas d'image de fond) */}
      {!backgroundImage && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg
            className="w-6 h-6 text-dore animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      )}
    </section>
  )
}

export default PageHero