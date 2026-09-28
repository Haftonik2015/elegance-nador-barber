import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, ReviewsBlock } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { copy } from "@/lib/site-content";

export const Route = createFileRoute("/avis")({
  head: () => ({ meta: [{ title: "Avis Google — Élégance Barber Nador" }, { name: "description", content: "Élégance Barber à Nador est noté 4,8 sur 5 sur la base de 83 avis Google." }, { property: "og:title", content: "Avis Google — Élégance Barber Nador" }, { property: "og:description", content: "4,8 sur 5 et 83 avis Google pour notre barber shop à Nador." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/avis" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/avis" }] }),
  component: ReviewsPage,
});
function ReviewsPage(){const {locale}=useLocale();const t=copy[locale];return <><PageIntro eyebrow="GOOGLE" title={t.reviewsTitle} text={locale==="fr"?"Une note vérifiée, présentée sans témoignages inventés.":"تقييم موثّق، معروض دون اختلاق آراء العملاء."}/><ReviewsBlock/><FinalCta/></>}