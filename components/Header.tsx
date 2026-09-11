'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import BookingButton from './BookingButton'

const Header: React.FC = () => {
  const navItems = [
    { label: 'Services', href: '/#services' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
  ]

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Gestion du scroll pour masquer/afficher le header sur mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { // Mobile uniquement
        const currentScrollY = window.scrollY

        if (currentScrollY === 0) {
          // En haut de page : header visible
          setIsHeaderVisible(true)
        } else if (currentScrollY > lastScrollY) {
          // Scroll vers le bas : masquer le header (même légèrement)
          setIsHeaderVisible(false)
        } else if (currentScrollY < lastScrollY) {
          // Scroll vers le haut : afficher le header (même légèrement)
          setIsHeaderVisible(true)
        }

        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Header principal */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-noir-profond/90 backdrop-blur-md border-b border-dore/20 transition-transform duration-300 md:translate-y-0 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Logo variant="horizontal" className="hover:scale-105 transition-transform duration-300" />
              </Link>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-cormorant text-blanc-casse hover:text-dore transition-all duration-500 text-lg relative group overflow-hidden"
                >
                  {item.label}
                  {/* Animation de soulignement doré qui se dessine de gauche à droite */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-dore to-dore-clair group-hover:w-full transition-all duration-700 ease-out origin-left" />
                  {/* Effet de brillance supplémentaire */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dore/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left delay-75" />
                </a>
              ))}
            </nav>

            {/* CTA et Navigation Mobile */}
            <div className="flex items-center space-x-4">
              {/* Bouton RDV Desktop */}
              <div className="hidden md:block">
                <BookingButton variant="header" />
              </div>

              {/* Menu Mobile */}
              <button
                className="md:hidden text-dore p-2 hover:bg-dore/10 rounded-lg transition-colors"
                aria-label="Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Mobile (à déplier) */}
          <div className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-cormorant text-blanc-casse hover:text-dore transition-colors duration-300 text-lg py-2 border-b border-dore/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <BookingButton variant="mobile" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Barre sticky en bas pour mobile avec bouton RDV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-noir-profond/95 backdrop-blur-lg border-t border-dore/20 py-3 px-4 shadow-lg">
        <div className="container mx-auto">
          <BookingButton variant="mobile" />
        </div>
      </div>

      {/* Espace pour la barre sticky mobile */}
      <div className="md:hidden h-16" />
    </>
  )
}

export default Header