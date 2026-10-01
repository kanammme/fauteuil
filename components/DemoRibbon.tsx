// Bandeau fin en haut de page : signale le site de démonstration sans gâcher la démo.
export default function DemoRibbon() {
  return (
    <div className="bg-noir-profond text-blanc-casse/75 font-inter text-xs md:text-sm text-center px-4 py-2 border-b border-dore/20">
      Site de démonstration conçu par AL H · Digital Studio, salon fictif.{' '}
      <a
        href="https://al-h.fr/devis"
        className="text-dore underline underline-offset-2 hover:text-dore-clair whitespace-nowrap"
      >
        Le même pour votre salon ?
      </a>
    </div>
  )
}
