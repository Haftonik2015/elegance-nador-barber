import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, ServicesGrid } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { copy } from "@/lib/site-content";
import { createPageSeo, getSiteUrl } from "@/lib/seo";
import { serviceCatalog } from "@/lib/services";

export const Route = createFileRoute("/prestations")({
  head: () => ({
    ...createPageSeo({
      title: "Prestations et tarifs — Elegance Barber Shop à Nador",
      description:
        "Découvrez les tarifs des coupes, services barbier, colorations et soins du visage chez Elegance Barber Shop à Nador.",
      path: "/prestations",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Prestations et tarifs — Elegance Barber Shop Nador",
          url: getSiteUrl("/prestations"),
          itemListElement: serviceCatalog.map((service) => ({
            "@type": "Offer",
            priceCurrency: "MAD",
            price: service.price,
            itemOffered: {
              "@type": "Service",
              name: service.name.fr,
              description: service.description.fr,
              provider: {
                "@type": "BarberShop",
                name: "Elegance Barber Shop",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "5 Rue Marrakech",
                  addressLocality: "Nador",
                  postalCode: "62000",
                  addressCountry: "MA",
                },
              },
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});
function ServicesPage() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <>
      <PageIntro
        eyebrow={locale === "fr" ? "PRESTATIONS" : "الخدمات"}
        title={t.servicesPageTitle}
        text={t.servicesIntro}
      />
      <ServicesGrid />
      <FinalCta />
    </>
  );
}
