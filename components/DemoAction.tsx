'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Site de démonstration : les boutons de contact n'appellent aucun numéro et
// n'écrivent à aucune adresse. Ils expliquent ce que ferait le bouton sur un vrai site.
const MESSAGES = {
  reserver: {
    title: 'Ici, votre prise de rendez-vous',
    text: 'Sur votre site, ce bouton ouvre votre agenda en ligne (Planity, Calendly ou un formulaire sur mesure) ou appelle directement votre salon.',
  },
  appeler: {
    title: 'Ici, votre numéro',
    text: 'Sur votre site, ce bouton appelle directement votre salon en un geste depuis le téléphone du client.',
  },
  ecrire: {
    title: 'Ici, votre adresse e-mail',
    text: 'Sur votre site, ce lien ouvre un e-mail prêt à vous être envoyé, ou un formulaire de contact qui arrive dans votre boîte.',
  },
}

type Props = {
  kind?: keyof typeof MESSAGES
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}

export default function DemoAction({ kind = 'reserver', className, ariaLabel, children }: Props) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const { title, text } = MESSAGES[kind]

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={ariaLabel}
        onClick={(e) => {
          e.stopPropagation()
          setOpen(true)
        }}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-noir-profond/80 backdrop-blur-sm p-4"
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-action-title"
              className="w-full max-w-md rounded-lg bg-noir-profond p-6 md:p-8 text-left shadow-2xl border border-dore/30"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-inter text-xs uppercase tracking-[0.2em] text-dore mb-3">Site de démonstration</p>
              <h2 id="demo-action-title" className="font-cinzel text-2xl text-blanc-casse mb-3">
                {title}
              </h2>
              <p className="font-cormorant text-lg text-blanc-casse/85 leading-relaxed mb-3">{text}</p>
              <p className="font-inter text-sm text-blanc-casse/60 leading-relaxed mb-6">
                Fauteuil est un salon fictif : aucun appel, aucun e-mail et aucune réservation ne sont transmis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://al-h.fr/devis"
                  className="flex-1 text-center rounded-lg bg-dore text-noir-profond font-cormorant font-semibold text-lg px-5 py-3 hover:bg-dore-clair transition-colors"
                >
                  Le même pour mon salon
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg border border-dore/40 text-dore font-cormorant font-semibold text-lg px-5 py-3 hover:bg-dore/10 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
