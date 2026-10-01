
import type { Metadata } from 'next'
import React from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Mentions légales — Fauteuil',
  description: 'Mentions légales du site de démonstration Fauteuil.',
  openGraph: {
    title: 'Mentions légales — Fauteuil',
    description: 'Mentions légales du site de démonstration Fauteuil.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

const MentionsLegalesPage = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Header />

      {/* Hero de page */}
      <PageHero
        title="Mentions légales"
        subtitle="Informations légales et conditions d'utilisation du site"
      />

      {/* Contenu principal */}
      <section className="py-12 md:py-20 bg-noir-profond">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Encadré de transparence */}
            <div className="mb-12 p-6 bg-dore/10 border border-dore/30 rounded-lg text-center">
              <p className='font-cormorant text-dore/90 text-lg'>
                Ce site est un projet de démonstration réalisé à des fins de portfolio. Il ne représente aucun établissement réel et n'a aucune vocation commerciale.
              </p>
            </div>

            <div className="bg-bleu-nuit/20 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-dore/10">
              <div className="space-y-8">

                {/* 1. Éditeur du site */}
                <div className="space-y-4">
                  <h2 className="font-cinzel text-2xl text-dore">1. Éditeur du site</h2>
                  <div className="space-y-2 font-cormorant text-blanc-casse/90">
                    <p><strong>Projet :</strong> Fauteuil (Site de démonstration)</p>
                    <p><strong>Éditeur :</strong> Mohamed AL ACHICHI, AL H · Digital Studio (micro-entrepreneur)</p>
                    <p><strong>SIRET :</strong> 884 857 715 00012</p>
                    <p><strong>Adresse du siège :</strong> 5 boulevard de Baudricourt, 54600 Villers-lès-Nancy</p>
                    <p><strong>Email :</strong> contact@al-h.fr</p>
                    <p><strong>Directeur de la publication :</strong> Mohamed AL ACHICHI</p>
                    <p>L&apos;adresse du salon (12 rue des Artisans) et ses coordonnées affichées sur le site sont fictives.</p>
                  </div>
                </div>

                {/* 2. Hébergement */}
                <div className="space-y-4">
                  <h2 className="font-cinzel text-2xl text-dore">2. Hébergement</h2>
                  <div className="space-y-2 font-cormorant text-blanc-casse/90">
                    <p>Ce site est hébergé par Netlify, Inc.</p>
                    <p><strong>Adresse :</strong> 101 2nd Street, San Francisco, CA 94105, États-Unis</p>
                  </div>
                </div>

                {/* 3. Propriété intellectuelle */}
                <div className="space-y-4">
                  <h2 className="font-cinzel text-2xl text-dore">3. Propriété intellectuelle</h2>
                  <div className="space-y-3 font-cormorant text-blanc-casse/90">
                    <p>Le code source de ce projet est la propriété intellectuelle de son auteur. Les textes et la mise en page sont créés pour ce projet de démonstration.</p>
                    <p>Les photographies de ce projet ont été générées par intelligence artificielle pour ce portfolio. Toute reproduction est interdite sans autorisation.</p>
                  </div>
                </div>

                {/* 4. Données personnelles */}
                <div className="space-y-4">
                  <h2 className="font-cinzel text-2xl text-dore">4. Données personnelles</h2>
                  <div className="space-y-3 font-cormorant text-blanc-casse/90">
                    <p>Ce site de démonstration ne collecte aucune donnée personnelle des visiteurs. Aucun formulaire de contact n'est actif et aucun cookie de suivi n'est utilisé.</p>
                    <p>Les boutons d&apos;appel et de prise de rendez-vous n&apos;appellent aucun numéro : ils expliquent leur fonctionnement sur un vrai site.</p>
                  </div>
                </div>

                {/* 5. Responsabilité */}
                <div className="space-y-4">
                  <h2 className="font-cinzel text-2xl text-dore">5. Responsabilité</h2>
                  <div className="space-y-2 font-cormorant text-blanc-casse/90">
                    <p>Ce site est un projet de portfolio et ne représente aucun établissement commercial réel. Les informations présentées sont fictives et à des fins de démonstration uniquement.</p>
                    <p>L'auteur décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations présentes sur le site.</p>
                  </div>
                </div>

                {/* Date de mise à jour */}
                <div className="pt-8 border-t border-dore/20">
                  <p className="font-cormorant text-blanc-casse/70 text-sm text-center">
                    Dernière mise à jour : septembre {currentYear}
                  </p>
                </div>
              </div>
            </div>

            {/* Retour à l'accueil */}
            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-dore text-dore hover:bg-dore/15 hover:text-dore-clair rounded-lg transition-all duration-500 font-cormorant font-semibold"
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Retour à l'accueil
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MentionsLegalesPage
