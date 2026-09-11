
import React from 'react'

export default function SchemaData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lefauteuilnoir-demo.fr'

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${siteUrl}#hairsalon`,
    name: "Fauteuil",
    description: "Salon de coiffure créateur à Nancy. Coupe, coloration, balayage dans un cadre chic et confidentiel.",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    image: `${siteUrl}/images/interior/exterieur-facade-nuit.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 rue des Artisans",
      addressLocality: "Nancy",
      postalCode: "54000",
      addressCountry: "FR",
    },
    telephone: "+33612345678",
    email: "contact@lefauteuilnoir-demo.fr",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:00",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "14:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "14:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "14:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "14:30",
        closes: "19:00",
      },
    ],
    priceRange: "€€",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}
