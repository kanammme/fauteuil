import React from 'react'
import Link from 'next/link'

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Forfait coiffage',
      description: 'Shampoing, coupe et coiffage sur-mesure, décliné selon la longueur (courts, mi-longs, longs). Une prestation complète pour une mise en beauté personnalisée.'
    },
    {
      id: 2,
      title: 'Services techniques',
      description: 'Coloration, décoloration, soin et permanente réalisés avec des produits professionnels haut de gamme. Expertise technique au service de votre beauté.'
    },
    {
      id: 3,
      title: 'Mèches papier / balayage',
      description: 'Technique artisanale pour un résultat naturel et lumineux, cheveu par cheveu. Effets subtils ou plus marqués selon vos envies.'
    },
    {
      id: 4,
      title: 'Ombré hair / tie and dye',
      description: 'Effets dégradés modernes et colorations créatives pour une chevelure unique. Des transitions harmonieuses qui subliment votre nature.'
    },
    {
      id: 5,
      title: 'Hommes',
      description: 'Coupe, barbe et coloration masculine travaillées avec précision. Dans une ambiance confidentielle et dédiée aux hommes.'
    },
    {
      id: 6,
      title: 'Étudiant(e)s',
      description: 'Tarifs adaptés pour les étudiants, déclinés selon le genre et la longueur. La même exigence de qualité et de temps consacré.'
    },
    {
      id: 7,
      title: 'Enfants',
      description: 'Première coupe, Baby Girls, coupe fille ou garçon. Un cadre rassurant et bienveillant pour les plus jeunes.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-noir-profond">
      <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-blanc-casse mb-6">
            Nos prestations
          </h2>
          <p className="font-cormorant text-xl text-gris-chaud max-w-2xl mx-auto">
            Des services sur-mesure réalisés avec l'exigence et la créativité qui caractérisent notre salon.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              // Dernière carte seule sur sa ligne (7 cartes) : centrée au lieu d'être collée à gauche
              className={`${index === services.length - 1 && services.length % 3 === 1 ? 'lg:col-start-2' : ''} ${index === services.length - 1 && services.length % 2 === 1 ? 'md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:max-w-none' : ''} group bg-bleu-nuit/30 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border border-dore/10 hover:border-dore/30 transition-all duration-500 hover:transform hover:scale-[1.02]`}
            >
              <h3 className="font-cinzel text-2xl text-dore mb-4 group-hover:text-dore-clair transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-cormorant text-blanc-casse/80">
                {service.description}
              </p>
              {/* Décoration subtile */}
              <div className="mt-6 pt-4 border-t border-dore/10 group-hover:border-dore/30 transition-colors duration-300">
                <div className="w-12 h-0.5 bg-gradient-to-r from-dore to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton de contact */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="font-cormorant text-blanc-casse/80 mb-6 max-w-lg">
              Chaque prestation est pensée individuellement.
              Contactez-nous pour un devis personnalisé adapté à vos besoins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-dore text-dore hover:bg-dore/15 hover:text-dore-clair rounded-lg transition-all duration-500 transform hover:scale-102 hover:shadow-glow font-cormorant font-semibold tracking-wide"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Nous contacter pour un devis personnalisé
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection