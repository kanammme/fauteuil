
import type { Metadata } from 'next'
import React from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import BookingButton from '@/components/BookingButton'
import DemoAction from '@/components/DemoAction'

export const metadata: Metadata = {
  title: 'Contact — Fauteuil | Coiffeur Démo Nancy',
  description: "Prenez rendez-vous avec Fauteuil, salon de coiffure de démonstration à Nancy. Adresse, téléphone, horaires et plan d'accès.",
  openGraph: {
    title: 'Contact — Fauteuil | Coiffeur Démo Nancy',
    description: "Prenez rendez-vous avec Fauteuil, salon de coiffure de démonstration à Nancy. Adresse, téléphone, horaires et plan d'accès.",
    images: [
      {
        url: '/images/interior/action-coupe-profil.png',
        width: 1200,
        height: 630,
        alt: 'Coiffeur en plein geste de coupe au salon Fauteuil',
      },
    ],
  },
}

const ContactPage = () => {
  const horaires = [
    { jour: 'Mardi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Jeudi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Vendredi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Samedi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Dimanche', heures: 'Fermé' },
    { jour: 'Lundi', heures: 'Fermé' },
    { jour: 'Mercredi', heures: 'Fermé' },
  ]

  const adresseEncoded = encodeURIComponent('Nancy, France')
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10460.936!2d6.1748!3d48.6921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794890b9b70d6d9%3A0x40a0f868adaee80!2sNancy!5e0!3m2!1sfr!2sfr`

  return (
    <>
      <Header />

      {/* Hero de page */}
      <PageHero
        title="Contact"
        subtitle="Prenons rendez-vous, en toute discrétion"
        backgroundImage="/images/interior/action-coupe-profil.png"
        backgroundAlt="Coiffeur en plein geste de coupe"
      />

      {/* Contenu principal */}
      <section className="py-12 md:py-20 bg-noir-profond">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Colonne gauche : Coordonnées */}
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="font-cinzel text-2xl md:text-3xl text-dore mb-4">
                  Rencontrons-nous
                </h2>
                <p className='font-cormorant text-blanc-casse/80 text-lg leading-relaxed'>
                  {"Au cœur de Nancy, dans une ambiance confidentielle, notre salon vous accueille pour une consultation personnalisée. Prenez rendez-vous pour découvrir notre univers et discuter de votre projet capillaire."}
                </p>
              </div>

              {/* Bloc coordonnées */}
              <div className="bg-bleu-nuit/30 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border border-dore/10">
                <h3 className="font-cinzel text-xl text-dore mb-6">Coordonnées</h3>

                <div className="space-y-6">
                  {/* Adresse */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-dore"
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
                    </div>
                    <div>
                      <h4 className='font-cormorant text-blanc-casse mb-1'>Adresse</h4>
                      <p className='font-cormorant text-blanc-casse/80'>
                        12 rue des Artisans<br />
                        Nancy, 54000
                      </p>
                      <a
                        href={`https://maps.google.com/?q=${adresseEncoded}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='font-cormorant text-dore hover:text-dore-clair transition-colors duration-300 text-sm inline-block mt-2'
                      >
                        Voir sur Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-dore"
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
                    </div>
                    <div>
                      <h4 className='font-cormorant text-blanc-casse mb-1'>Téléphone</h4>
                      <DemoAction kind="appeler"
                        className='font-cormorant text-blanc-casse/80 hover:text-dore transition-colors duration-300 text-lg block'
                      >
                        Appeler le salon
                      </DemoAction>
                      <p className='font-cormorant text-blanc-casse/60 text-sm mt-1'>
                        Sur réservation uniquement
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-dore"
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
                    </div>
                    <div>
                      <h4 className='font-cormorant text-blanc-casse mb-1'>Email</h4>
                      <DemoAction kind="ecrire"
                        className='font-cormorant text-blanc-casse/80 hover:text-dore transition-colors duration-300 text-lg block'
                      >
                        Écrire au salon
                      </DemoAction>
                    </div>
                  </div>
                </div>

                {/* CTA principal */}
                <div className="mt-8 pt-6 border-t border-dore/20">
                  <div className="text-center">
                    <BookingButton variant="hero" />
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-bleu-nuit/20 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border border-dore/10">
                <h3 className="font-cinzel text-xl text-dore mb-6">Horaires d'ouverture</h3>
                <div className="space-y-3">
                  {horaires.map((horaire) => (
                    <div key={horaire.jour} className="flex justify-between items-center">
                      <span className='font-cormorant text-blanc-casse/80'>{horaire.jour}</span>
                      <span className={`font-cormorant ${horaire.heures === 'Fermé' ? 'text-blanc-casse/50' : 'text-dore'}`}>
                        {horaire.heures}
                      </span>
                    </div>
                  ))}
                </div>
                <p className='font-cormorant text-blanc-casse/60 text-sm mt-6 text-center'>
                  {"Nous vous conseillons de réserver à l'avance pour garantir votre créneau."}
                </p>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-bleu-nuit/10 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border border-dore/10">
                <h3 className="font-cinzel text-xl text-dore mb-6">Suivez-nous</h3>
                <p className='font-cormorant text-blanc-casse/80'>
                  Réseaux sociaux à venir.
                </p>
              </div>
            </div>

            {/* Colonne droite : Carte */}
            <div className="space-y-8">
              {/* Carte Google Maps */}
              <div className="bg-bleu-nuit/20 backdrop-blur-sm rounded-lg p-6 border border-dore/10">
                <h3 className="font-cinzel text-xl text-dore mb-6">Nous trouver</h3>
                <div className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden group">
                  <iframe
                    src={mapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-filter duration-500 group-hover:filter-none"
                    title="Carte Google Maps - Nancy centre-ville"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-dore/20 rounded-lg group-hover:border-dore/40 transition-all duration-500" />
                </div>
                <div className="mt-6">
                  <p className='font-cormorant text-blanc-casse/80 text-center'>
                    Situé dans le centre de Nancy, à deux pas du marché central.
                    <br />
                    <span className='text-blanc-casse/60 text-sm'>
                      Parking public disponible à proximité.
                    </span>
                  </p>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="bg-bleu-nuit/30 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 border border-dore/10">
                <h3 className="font-cinzel text-xl text-dore mb-6">Informations pratiques</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className='font-cormorant text-blanc-casse mb-2'>Première visite ?</h4>
                    <p className='font-cormorant text-blanc-casse/80 text-sm'>
                      Nous vous conseillons de prévoir 15 minutes supplémentaires pour votre première
                      visite afin de discuter de vos envies et établir un diagnostic capillaire personnalisé.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-cormorant text-blanc-casse mb-2'>Accessibilité</h4>
                    <p className='font-cormorant text-blanc-casse/80 text-sm'>
                      {"Le salon est accessible aux personnes à mobilité réduite. N'hésitez pas à nous contacter pour toute question spécifique."}
                    </p>
                  </div>
                  <div>
                    <h4 className='font-cormorant text-blanc-casse mb-2'>Moyens de paiement</h4>
                    <p className='font-cormorant text-blanc-casse/80 text-sm'>
                      Cartes bancaires, espèces et virements acceptés.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message final */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-dore/10 via-transparent to-dore/10 p-4 md:p-6 lg:p-8 rounded-lg border border-dore/20">
              <h3 className="font-cinzel text-2xl text-dore mb-4">À bientôt</h3>
              <p className='font-cormorant text-blanc-casse/80 text-lg leading-relaxed'>
                {"L'équipe Fauteuil vous attend pour partager un moment hors du temps, dans le respect de votre confidentialité et de vos attentes."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
