
import React from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec overlay et effet Ken Burns (zoom avant très lent) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/interior/exterieur-facade-nuit.png"
          alt="Façade du salon Fauteuil de nuit, enseigne dorée éclairée"
          fill
          className="object-cover object-center animate-ken-burns"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay sombre pour estomper les détails et améliorer la lisibilité */}
        <div className="absolute inset-0 bg-noir-profond/75" />
        {/* Dégradé radial pour éclaircir légèrement les bords (lanternes) et assombrir le centre (texte) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-noir-profond/40 to-noir-profond/80" />
        {/* Overlay doré subtil */}
        <div className="absolute inset-0 bg-gradient-to-t from-dore/8 via-transparent to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
        {/* Badge de localisation */}
        <div className="inline-flex items-center justify-center mb-8 px-4 py-2 bg-dore/10 backdrop-blur-sm rounded-full border border-dore/30">
          <svg
            className="w-4 h-4 mr-2 text-dore"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-cormorant text-dore text-sm">
            12 rue des Artisans • Nancy
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase text-blanc-casse mb-6">
          <span className="block">UN SALON</span>
          <span className="block text-dore mt-2">HORS DU TEMPS</span>
        </h1>

        {/* Sous-titre */}
        <p className='font-cormorant italic text-xl md:text-2xl text-blanc-casse/90 max-w-2xl mx-auto mb-10 leading-relaxed'>
          Coiffeur créateur — Nancy, sur rendez-vous
        </p>

        {/* Bouton CTA */}
        <div className="mb-12">
          <BookingButton variant="hero" />
        </div>

        {/* Informations de contact */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-blanc-casse/80">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-dore"
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
            <span className="font-inter">06 12 34 56 78</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-dore"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-inter">contact@lefauteuilnoir-demo.fr</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-dore"
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
      </div>
    </section>
  )
}

export default Hero
