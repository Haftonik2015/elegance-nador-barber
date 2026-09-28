import { Link } from "@tanstack/react-router";
import { Check, Clock3, MapPin, Phone } from "lucide-react";

import heroImage from "@/assets/barber-hero.jpg";
import chairImage from "@/assets/barber-detail-chair.jpg";
import toolsImage from "@/assets/barber-detail-tools.jpg";
import mirrorImage from "@/assets/barber-detail-mirror.jpg";
import { Button } from "@/components/ui/button";
import { ActionLink, RatingMark, useLocale } from "@/components/site-shell";
import { copy, mapsUrl, phoneDisplay, phoneHref } from "@/lib/site-content";

export const galleryImages = [
  { src: chairImage, width: 1280, height: 1600 },
  { src: toolsImage, width: 1280, height: 1600 },
  { src: mirrorImage, width: 1600, height: 1200 },
];

export function Hero() {
  const { locale } = useLocale(); const t = copy[locale];
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-background sm:min-h-[780px]">
      <img src={heroImage} alt="Intérieur de barber shop sombre et raffiné — visuel d’ambiance" width={1920} height={1280} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-end px-5 pb-16 pt-28 sm:min-h-[780px] sm:px-8 sm:pb-20 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase text-gold [letter-spacing:.18em]"><span className="h-px w-10 bg-gold" />{t.open}</div>
          <h1 className="max-w-4xl font-display text-[3.6rem] leading-[.9] text-foreground sm:text-7xl lg:text-[7.4rem]">{t.heroTitle}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg">{t.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={phoneHref}>{t.book}</ActionLink>
            <ActionLink href={mapsUrl} secondary>{t.find}</ActionLink>
            <ActionLink href={phoneHref} secondary>{t.call}</ActionLink>
          </div>
        </div>
      </div>
      <p className="absolute bottom-5 end-5 text-[.58rem] uppercase text-foreground/45 [letter-spacing:.18em] sm:end-8">{t.galleryLabel}</p>
    </section>
  );
}

export function Introduction() {
  const { locale } = useLocale(); const t = copy[locale];
  return (
    <section className="bg-canvas px-5 py-20 text-canvas-foreground sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <p className="text-xs font-bold uppercase text-canvas-muted [letter-spacing:.22em]">01 — {locale === "fr" ? "NOTRE SIGNATURE" : "بصمتنا"}</p>
        <div><h2 className="font-display text-5xl leading-[1.02] sm:text-7xl">{t.detailTitle}</h2><p className="mt-8 max-w-2xl text-base leading-8 text-canvas-muted sm:text-lg">{t.detailText}</p><Button asChild variant="link" className="mt-7 h-auto rounded-none p-0 text-xs font-bold uppercase text-canvas-foreground [letter-spacing:.14em]"><Link to="/salon">{locale === "fr" ? "Découvrir le salon" : "اكتشف الصالون"} →</Link></Button></div>
      </div>
    </section>
  );
}

export function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const { locale } = useLocale(); const t = copy[locale];
  return (
    <section className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-2"><h2 className="font-display text-5xl leading-none sm:text-7xl">{t.servicesTitle}</h2><p className="max-w-md self-end text-muted-foreground">{t.servicesIntro}</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, index) => <article key={service} className="group border-b border-border px-0 py-8 transition-colors sm:px-7 sm:[&:nth-child(odd)]:border-e lg:[&:not(:nth-child(3n))]:border-e lg:[&:nth-child(odd)]:border-e-0"><div className="mb-12 flex items-center justify-between"><span className="text-xs text-gold">0{index + 1}</span><Check className="size-4 text-muted-foreground transition-colors group-hover:text-gold" /></div><h3 className="font-display text-3xl">{service}</h3></article>)}
        </div>
        {preview && <Button asChild variant="outline" className="mt-10 h-11 rounded-none border-border bg-transparent text-foreground"><Link to="/prestations">{locale === "fr" ? "Toutes les prestations" : "جميع الخدمات"}</Link></Button>}
      </div>
    </section>
  );
}

export function Experience() {
  const { locale } = useLocale(); const t = copy[locale];
  return <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1400px]"><h2 className="max-w-3xl font-display text-5xl leading-none sm:text-7xl">{t.experienceTitle}</h2><div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{t.experience.map(([title, text], i) => <div key={title} className="min-h-56 bg-surface p-7"><span className="text-xs text-gold">0{i+1}</span><h3 className="mt-14 font-display text-3xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>;
}

export function GalleryPreview() {
  const { locale } = useLocale(); const t = copy[locale];
  return <section className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1400px]"><div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-5 text-xs uppercase text-gold [letter-spacing:.2em]">{locale === "fr" ? "GALERIE" : "المعرض"}</p><h2 className="font-display text-5xl sm:text-7xl">{t.galleryTitle}</h2></div><Button asChild variant="link" className="justify-start p-0 text-foreground"><Link to="/galerie">{locale === "fr" ? "Voir la galerie" : "عرض المعرض"} →</Link></Button></div><div className="grid gap-3 md:grid-cols-[.8fr_1.2fr]">{galleryImages.slice(0,2).map((image,i)=><div key={image.src} className="relative h-[420px] overflow-hidden"><img src={image.src} alt={t.imageAlt[i]} width={image.width} height={image.height} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"/><span className="absolute bottom-4 start-4 bg-background/85 px-3 py-2 text-[.55rem] uppercase text-muted-foreground [letter-spacing:.16em]">{t.galleryLabel}</span></div>)}</div></div></section>;
}

export function ReviewsBlock() {
  const { locale } = useLocale(); const t = copy[locale];
  return <section className="border-y border-border bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:items-end"><div><p className="mb-5 text-xs uppercase text-gold [letter-spacing:.2em]">GOOGLE</p><h2 className="max-w-2xl font-display text-5xl leading-none sm:text-7xl">{t.reviewsTitle}</h2></div><div className="lg:justify-self-end"><div className="flex items-end gap-4"><span className="font-display text-8xl leading-none text-gold">4,8</span><span className="mb-2 text-muted-foreground">/ 5</span></div><div className="mt-4 flex items-center gap-4"><RatingMark/><span className="text-sm text-muted-foreground">{t.reviewsCount}</span></div><ActionLink href={mapsUrl} secondary>{t.reviewsButton}</ActionLink></div></div></section>;
}

export function LocationBlock() {
  const { locale } = useLocale(); const t = copy[locale];
  return <section className="bg-canvas px-5 py-20 text-canvas-foreground sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_.8fr]"><div><p className="mb-5 text-xs uppercase text-canvas-muted [letter-spacing:.2em]">NADOR • MAROC</p><h2 className="font-display text-5xl leading-none sm:text-7xl">{t.locationTitle}</h2><div className="mt-10 h-px bg-canvas-border"/></div><div className="space-y-6 text-base"><div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-gold"/><p><strong className="block text-canvas-foreground">Coiffeure Elégance Barbier Barbershop</strong><span className="text-canvas-muted">{t.address}</span></p></div><div className="flex gap-4"><Phone className="size-5 shrink-0 text-gold"/><a href={phoneHref}>{phoneDisplay}</a></div><div className="flex gap-4"><Clock3 className="size-5 shrink-0 text-gold"/><p>{t.hours}</p></div><ActionLink href={mapsUrl}>{t.getDirection}</ActionLink></div></div></section>;
}

export function FinalCta() {
  const { locale } = useLocale(); const t = copy[locale];
  return <section className="relative overflow-hidden bg-background px-5 py-24 text-center sm:px-8 sm:py-32"><span className="absolute start-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gold"/><p className="text-xs uppercase text-gold [letter-spacing:.24em]">ÉLÉGANCE • NADOR</p><h2 className="mx-auto mt-7 max-w-4xl font-display text-5xl leading-[.96] sm:text-8xl">{t.cta}</h2><div className="mt-10 flex flex-wrap justify-center gap-3"><ActionLink href={phoneHref}>{t.callNow}</ActionLink><ActionLink href={mapsUrl} secondary>{t.viewDirection}</ActionLink><ActionLink href={phoneHref} secondary>{t.book}</ActionLink></div></section>;
}