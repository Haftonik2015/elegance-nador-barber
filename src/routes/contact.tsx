import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, LocationBlock } from "@/components/site-sections";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    createPageSeo({
      title: "Contact et itinéraire — Elegance Barber Shop à Nador",
      description:
        "Contactez Elegance Barber Shop au 5 Rue Marrakech à Nador pour vos questions et réservations. Ouvert chaque jour de 10h à 23h.",
      path: "/contact",
    }),
  component: ContactPage,
});
function ContactPage() {
  return (
    <>
      <LocationBlock page />
      <FinalCta />
    </>
  );
}
