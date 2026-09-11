
import React from 'react'

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'monochrome'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = '' }) => {
  // Configuration des couleurs selon la variante
  const colors = {
    primary: variant === 'monochrome' ? '#F5F1EA' : '#C6A052', // blanc-casse ou doré
    secondary: variant === 'monochrome' ? '#F5F1EA' : '#D4AF6A', // blanc-casse ou doré clair
    frame: variant === 'monochrome' ? '#F5F1EA' : '#C6A052', // blanc-casse ou doré
  }

  // Composant SVG pour le cadre ornemental avec coins à volutes (inspiré de l'enseigne réelle)
  const OrnamentalFrame = () => (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cadre principal avec coins arrondis */}
      <rect
        x="15"
        y="15"
        width="170"
        height="70"
        rx="10"
        stroke={colors.frame}
        strokeWidth="1.8"
        strokeOpacity="0.85"
        fill="none"
      />

      {/* Volute supérieure gauche - forme classique d'enseigne */}
      <path
        d="M15,30 C10,25 10,20 15,15 C20,10 25,10 30,15"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />
      <path
        d="M15,50 C10,55 10,60 15,65 C20,70 25,70 30,65"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* Volute supérieure droite - symétrique */}
      <path
        d="M185,30 C190,25 190,20 185,15 C180,10 175,10 170,15"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />
      <path
        d="M185,50 C190,55 190,60 185,65 C180,70 175,70 170,65"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* Volute inférieure gauche */}
      <path
        d="M15,70 C10,65 10,60 15,55 C20,50 25,50 30,55"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />
      <path
        d="M15,90 C10,85 10,80 15,75 C20,70 25,70 30,75"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* Volute inférieure droite */}
      <path
        d="M185,70 C190,65 190,60 185,55 C180,50 175,50 170,55"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />
      <path
        d="M185,90 C190,85 190,80 185,75 C180,70 175,70 170,75"
        stroke={colors.frame}
        strokeWidth="1.2"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* Points décoratifs aux intersections des volutes */}
      <circle cx="30" cy="30" r="1.5" fill={colors.frame} fillOpacity="0.8" />
      <circle cx="30" cy="70" r="1.5" fill={colors.frame} fillOpacity="0.8" />
      <circle cx="170" cy="30" r="1.5" fill={colors.frame} fillOpacity="0.8" />
      <circle cx="170" cy="70" r="1.5" fill={colors.frame} fillOpacity="0.8" />

      {/* Lignes de séparation décoratives */}
      <line
        x1="40"
        y1="25"
        x2="160"
        y2="25"
        stroke={colors.frame}
        strokeWidth="0.6"
        strokeOpacity="0.5"
        strokeDasharray="3,2"
      />
      <line
        x1="40"
        y1="75"
        x2="160"
        y2="75"
        stroke={colors.frame}
        strokeWidth="0.6"
        strokeOpacity="0.5"
        strokeDasharray="3,2"
      />
    </svg>
  )

  // Version horizontale (pour header)
  if (variant === 'horizontal') {
    return (
      <div className={`relative flex items-center ${className}`}>
        <div className="relative px-8 py-4">
          <OrnamentalFrame />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="font-cinzel text-2xl md:text-3xl font-bold tracking-widest uppercase leading-tight" style={{ color: colors.primary }}>
              Fauteuil
            </h1>
            <p className="font-cormorant italic text-sm md:text-base mt-1 tracking-wide" style={{ color: colors.secondary }}>
              Coiffeur Créateur
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Version empilée/badge (pour favicon, réseaux sociaux, footer)
  if (variant === 'stacked') {
    return (
      <div className={`relative flex flex-col items-center justify-center ${className}`}>
        <div className="relative w-40 h-40"> {/* Agrandi légèrement le conteneur */}
          <div className="absolute inset-0 flex items-center justify-center">
            <OrnamentalFrame />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
            <h2 className="font-cinzel text-xl font-bold tracking-wider uppercase text-center leading-tight" style={{ color: colors.primary }}>
              Fauteuil
            </h2>
            <p className="font-cormorant italic text-xs mt-1 tracking-wide text-center leading-tight" style={{ color: colors.secondary }}>
              Coiffeur Créateur {/* Maintenant sur une seule ligne */}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Version monochrome (pour fonds très sombres)
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative px-8 py-4">
        <OrnamentalFrame />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="font-cinzel text-2xl md:text-3xl font-bold tracking-widest uppercase leading-tight" style={{ color: colors.primary }}>
            Fauteuil
          </h1>
          <p className="font-cormorant italic text-sm md:text-base mt-1 tracking-wide" style={{ color: colors.primary }}>
            Coiffeur Créateur
          </p>
        </div>
      </div>
    </div>
  )
}

export default Logo
