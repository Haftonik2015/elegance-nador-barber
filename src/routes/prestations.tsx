import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, ServicesGrid } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { copy } from "@/lib/site-content";

export const Route = createFileRoute("/prestations")({
  head: () => ({ meta: [{ title: "Prestations — Coiffeur homme & barbier à Nador" }, { name: "description", content: "Coupe homme, dégradé fade, barbe, contours et coiffure enfant chez Élégance Barber à Nador." }, { property: "og:title", content: "Prestations — Élégance Barber Nador" }, { property: "og:description", content: "Coupe homme, fade, barbe et finitions à Nador." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/prestations" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/prestations" }] }),
  component: ServicesPage,
});
function ServicesPage(){const {locale}=useLocale();const t=copy[locale];return <><PageIntro eyebrow={locale==="fr"?"PRESTATIONS":"الخدمات"} title={t.servicesTitle} text={t.servicesIntro}/><ServicesGrid/><FinalCta/></>}