
import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: "L'histoire — Fauteuil | Coiffeur Démo Nancy",
  description: "Découvrez l'histoire du projet Fauteuil, un salon de coiffure fictif à Nancy, entre élégance et esprit rock.",
  openGraph: {
    title: "L'histoire — Fauteuil | Coiffeur Démo Nancy",
    description: "Découvrez l'histoire du projet Fauteuil, un salon de coiffure fictif à Nancy, entre élégance et esprit rock.",
    images: [
      {
        url: '/images/interior/interior-mur-rock-chic.jpg', // Nouvelle image
        width: 1200,
        height: 630,
        alt: 'Ambiance bar du salon Fauteuil - projet de démonstration',
      },
    ],
  },
}

const AProposPage = () => {
  return (
    <>
      <Header />

      {/* Hero de page */}
      <PageHero
        title="L'histoire"
        subtitle="De l'esprit rock à l'élégance : bienvenue dans votre espace"
        backgroundImage="/images/interior/interior-mur-rock-chic.jpg" // Nouvelle image
        backgroundAlt="Client se relaxant dans l'espace bar du salon"
      />

      {/* Contenu principal */}
      <section className="py-12 md:py-20 bg-noir-profond">
        <div className="container mx-auto px-4">
          {/* Photo d'introduction */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-lg">
              <Image
                src="/images/interior/interior-salle-vue-large.png"
                alt="Vue d'ensemble du salon Fauteuil"
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/40 to-transparent" />
            </div>
          </div>

          {/* Texte principal */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-bleu-nuit/20 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-dore/10">
              <div className="space-y-8">
                {/* Premier paragraphe avec image à droite */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-2/3">
                    <p className='font-cormorant text-blanc-casse text-lg md:text-xl leading-relaxed'>
                      Fauteuil n'est pas un salon comme les autres.
                    </p>
                    <p className='font-cormorant text-blanc-casse/90 text-lg leading-relaxed mt-4'>
                      Ici, le style côtoie l'élégance, le fauteuil vintage répond au geste
                      précis du créateur. Chaque coupe, chaque couleur est pensée comme
                      une pièce unique.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/interior/portrait-accueil-serviette.png"
                        alt="Application d'une serviette chaude sur le visage d'un client"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                      />
                    </div>
                  </div>
                </div>

                {/* Deuxième paragraphe avec image à gauche */}
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/3 order-2 md:order-1">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/images/interior/detail-produits-plan-travail.png"
                        alt="Outils et produits de coiffure professionnels"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 order-1 md:order-2">
                    <p className='font-cormorant text-blanc-casse/90 text-lg leading-relaxed'>
                      Dans un cadre confidentiel, loin de l'agitation, l'équipe Fauteuil
                      prend le temps. Celui d'écouter, de comprendre, de révéler.
                    </p>
                  </div>
                </div>

                {/* Citation finale */}
                <div className="pt-8 border-t border-dore/20">
                  <div className="text-center">
                    <p className="font-cinzel text-2xl md:text-3xl text-dore italic mb-4">
                      "Bienvenue dans votre espace."
                    </p>
                    <p className='font-cormorant text-blanc-casse/80'>
                      — L'équipe Fauteuil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note de personnalisation */}
            <div className="mt-12 p-6 bg-dore/5 border border-dore/20 rounded-lg">
              <p className='font-cormorant text-blanc-casse/80 text-center'>
                <span className="text-dore font-semibold">Note pour le portfolio :</span> {"Ce texte est une base fictive. Il peut être remplacé par l'histoire réelle d'un projet, le parcours d'un créateur, ou les motivations derrière une réalisation."}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center space-y-6">
                <p className='font-cormorant text-blanc-casse/80 text-lg max-w-2xl'>
                  Curieux de découvrir ce projet plus en détail ?
                  Contactez-moi pour une démonstration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-dore text-dore hover:bg-dore/15 hover:text-dore-clair rounded-lg transition-all duration-500 font-cormorant font-semibold tracking-wide"
                  >
                    Me contacter
                  </a>
                  <a
                    href="tel:+33612345678"
                    className="inline-flex items-center justify-center px-8 py-3 bg-dore/10 border border-dore/30 text-dore hover:bg-dore/20 hover:text-dore-clair rounded-lg transition-all duration-500 font-cormorant font-semibold"
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
          </div>
        </div>
      </section>
    </>
  )
}

export default AProposPage
