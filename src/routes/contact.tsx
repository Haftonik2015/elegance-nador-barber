import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, LocationBlock } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { copy } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact & itinéraire — Élégance Barber Nador" }, { name: "description", content: "Retrouvez Élégance Barber au 5 Rue Marrakech à Nador. Ouvert tous les jours de 10h à 23h. Téléphone : +212 681 718 600." }, { property: "og:title", content: "Contact — Élégance Barber Nador" }, { property: "og:description", content: "Adresse, téléphone, horaires et itinéraire vers notre barbershop à Nador." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/contact" }] }),
  component: ContactPage,
});
function ContactPage(){const {locale}=useLocale();const t=copy[locale];return <><PageIntro eyebrow={locale==="fr"?"CONTACT":"اتصل بنا"} title={t.locationTitle} text={t.address}/><LocationBlock/><FinalCta/></>}