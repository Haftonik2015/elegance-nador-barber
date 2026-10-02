import { createFileRoute } from "@tanstack/react-router";
import {
  Experience,
  FinalCta,
  GalleryPreview,
  Hero,
  Introduction,
  LocalProofBand,
  LocationBlock,
  ReviewsBlock,
  ServicesGrid,
} from "@/components/site-sections";
import { getSiteUrl, createPageSeo } from "@/lib/seo";
import { mapsUrl } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    ...createPageSeo({
      title: "Elegance Barber Shop à Nador — Coupe, barbe et soins",
      description:
        "Elegance Barber Shop à Nador : coupes, brushing, barbe, colorations et soins du visage. Ouvert tous les jours de 10h à 23h.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          "@id": getSiteUrl("/") ? `${getSiteUrl("/")}#barbershop` : undefined,
          url: getSiteUrl("/"),
          name: "Elegance Barber Shop",
          alternateName: "حلاقة الأناقة",
          address: {
            "@type": "PostalAddress",
            streetAddress: "5 Rue Marrakech",
            addressLocality: "Nador",
            postalCode: "62000",
            addressCountry: "MA",
          },
          telephone: "+212681718600",
          hasMap: mapsUrl,
          areaServed: { "@type": "City", name: "Nador" },
          openingHours: "Mo-Su 10:00-23:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "83" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <LocalProofBand />
      <Introduction />
      <ServicesGrid preview />
      <Experience />
      <GalleryPreview />
      <ReviewsBlock />
      <LocationBlock />
      <FinalCta />
    </>
  );
}
