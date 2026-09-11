'use client'

import React from 'react'

interface BookingButtonProps {
  variant?: 'header' | 'hero' | 'mobile' | 'footer'
}

const BookingButton: React.FC<BookingButtonProps> = ({ variant = 'hero' }) => {
  const phoneNumber = '0612345678'
  const phoneUrl = `tel:${phoneNumber}`

  const handleClick = () => {
    // Pour l'instant, déclenche un appel/SMS vers le numéro
    // Facilement remplaçable plus tard par un widget Planity/Fresha/Calendly
    window.open(phoneUrl, '_blank')
  }

  // Styles selon la variante
  const baseStyles = "inline-flex items-center justify-center font-cormorant font-semibold tracking-wide transition-all duration-500 ease-out transform hover:scale-102 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-dore focus:ring-opacity-50"

  const variantStyles = {
    header: "px-4 py-2 text-sm bg-transparent border border-dore text-dore hover:bg-dore/15 rounded-lg hover:border-dore-clair",
    hero: "px-8 py-4 text-lg bg-dore text-noir-profond hover:bg-dore-clair rounded-lg shadow-lg hover:shadow-2xl hover:shadow-dore/25",
    mobile: "w-full px-6 py-3 bg-dore text-noir-profond hover:bg-dore-clair rounded-lg shadow-md hover:shadow-lg",
    footer: "px-6 py-3 bg-transparent border border-dore text-dore hover:bg-dore/15 rounded-lg hover:border-dore-clair",
  }

  const iconSize = {
    header: "w-4 h-4",
    hero: "w-5 h-5",
    mobile: "w-5 h-5",
    footer: "w-4 h-4",
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      aria-label="Prendre rendez-vous par téléphone"
    >
      <svg
        className={`${iconSize[variant]} mr-2`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
      Prendre rendez-vous
    </button>
  )
}

export default BookingButton