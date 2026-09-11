
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ]

  const horaires = [
    { jour: 'Mardi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Jeudi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Vendredi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Samedi', heures: '9h–12h30 / 14h30–19h' },
    { jour: 'Dimanche', heures: 'Fermé' },
    { jour: 'Lundi', heures: 'Fermé' },
    { jour: 'Mercredi', heures: 'Fermé' },
  ]

  return (
    <footer className="bg-noir-profond border-t border-dore/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo variant="stacked" className="mx-auto md:mx-0" />
            </div>
            <p className='font-cormorant text-blanc-casse/80 text-center md:text-left max-w-xs'>
              Salon de coiffure créateur à Nancy. Coupe, coloration, balayage dans un cadre chic et confidentiel.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="font-cinzel text-xl text-dore mb-6 text-center md:text-left">Navigation</h3>
            <ul className="space-y-3 text-center md:text-left">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className='font-cormorant text-blanc-casse/80 hover:text-dore transition-colors duration-300 inline-block'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div className="md:col-span-1">
            <h3 className="font-cinzel text-xl text-dore mb-6 text-center md:text-left">Horaires</h3>
            <ul className="space-y-2 text-center md:text-left">
              {horaires.map((horaire) => (
                <li key={horaire.jour} className='font-cormorant text-blanc-casse/80'>
                  <span className='inline-block w-20 md:w-28'>{horaire.jour}</span>
                  <span className='text-dore/90 text-sm md:text-base'>{horaire.heures}</span>
                </li>
              ))}
            </ul>
            <p className='font-cormorant text-sm text-blanc-casse/60 mt-4 text-center md:text-left'>
              Sur réservation : 06 12 34 56 78
            </p>
          </div>

          {/* Coordonnées et réseaux */}
          <div className="md:col-span-1">
            <h3 className="font-cinzel text-xl text-dore mb-6 text-center md:text-left">Contact</h3>
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h4 className='font-cormorant text-blanc-casse mb-2'>Adresse</h4>
                <p className='font-cormorant text-blanc-casse/80'>
                  12 rue des Artisans<br />
                  Nancy, 54000
                </p>
              </div>

              <div>
                <h4 className='font-cormorant text-blanc-casse mb-2'>Téléphone</h4>
                <a
                  href="tel:+33612345678"
                  className='font-cormorant text-blanc-casse/80 hover:text-dore transition-colors duration-300 inline-block'
                >
                  06 12 34 56 78
                </a>
              </div>

              <div>
                <h4 className='font-cormorant text-blanc-casse mb-2'>Email</h4>
                <a
                  href="mailto:contact@lefauteuilnoir-demo.fr"
                  className='font-cormorant text-blanc-casse/80 hover:text-dore transition-colors duration-300 inline-block'
                >
                  contact@lefauteuilnoir-demo.fr
                </a>
              </div>

              <div>
                <h4 className='font-cormorant text-blanc-casse mb-2'>Réseaux sociaux</h4>
                <p className='font-cormorant text-blanc-casse/80'>
                  Réseaux sociaux à venir
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dore/20 mt-12 pt-6 text-center">
          <p className='font-cormorant text-blanc-casse/60'>
            © {currentYear} Fauteuil — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
