import { createFileRoute } from "@tanstack/react-router";
import { Experience, FinalCta, GalleryPreview, Hero, Introduction, LocationBlock, ReviewsBlock, ServicesGrid } from "@/components/site-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Élégance Barber — Barbier & coiffeur homme à Nador" },
      { name: "description", content: "Coiffeure Elégance, barber shop à Nador. Coupe homme, fade, barbe et finitions, ouvert tous les jours de 10h à 23h." },
      { property: "og:title", content: "Élégance Barber — Barbier à Nador" },
      { property: "og:description", content: "Coiffure homme, barbe et finitions à Nador. Ouvert 7j/7 de 10h à 23h." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BarberShop", name: "Coiffeure Elégance Barbier Barbershop", alternateName: "حلاقة الأناقة", address: { "@type": "PostalAddress", streetAddress: "5 Rue Marrakech", addressLocality: "Nador", postalCode: "62000", addressCountry: "MA" }, telephone: "+212681718600", openingHours: "Mo-Su 10:00-23:00", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "83" } }) }],
  }),
  component: HomePage,
});

function HomePage() {
  return <><Hero /><Introduction /><ServicesGrid preview /><Experience /><GalleryPreview /><ReviewsBlock /><LocationBlock /><FinalCta /></>;
}