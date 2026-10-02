import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/barber-hero.jpg";
import chairImage from "@/assets/barber-detail-chair.jpg";
import toolsImage from "@/assets/barber-detail-tools.jpg";
import mirrorImage from "@/assets/barber-detail-mirror.jpg";
import { Button } from "@/components/ui/button";
import { ActionLink, RatingMark, useLocale } from "@/components/site-shell";
import { copy, mapsUrl, phoneDisplay, phoneHref, whatsappHref } from "@/lib/site-content";
import { serviceCatalog, serviceCategories } from "@/lib/services";

export const galleryImages = [
  { src: chairImage, width: 1280, height: 1600, caption: 0 },
  { src: toolsImage, width: 1280, height: 1600, caption: 1 },
  { src: mirrorImage, width: 1600, height: 1200, caption: 2 },
  { src: serviceCatalog[0].image, width: 900, height: 900, caption: 3 },
  { src: serviceCatalog[4].image, width: 900, height: 900, caption: 4 },
  { src: serviceCatalog[13].image, width: 900, height: 900, caption: 5 },
];

export function Hero() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section className="hero-section relative min-h-[calc(100svh-5rem)] overflow-hidden bg-background sm:min-h-[780px]">
      <img
        src={heroImage}
        alt="Intérieur de barber shop sombre et raffiné — visuel d’ambiance"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="hero-image absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] items-center px-5 pb-20 pt-24 sm:min-h-[780px] sm:px-8 sm:pb-24 lg:px-12">
        <div className="hero-copy max-w-[62rem]">
          <div className="mb-7 flex items-center gap-3 text-[.62rem] font-semibold uppercase text-gold [letter-spacing:.2em]">
            <span className="h-px w-10 bg-gold" />
            {t.open}
            {locale === "ar" && (
              <bdi dir="ltr" className="ms-1">
                10:00–23:00
              </bdi>
            )}
          </div>
          <h1 className="max-w-[62rem] font-display text-[3.55rem] leading-[.88] text-white sm:text-7xl lg:text-[6.2rem] xl:text-[7.1rem]">
            {t.heroTitle}
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            {t.heroText}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={whatsappHref(t.whatsappAppointment)}>{t.book}</ActionLink>
            <ActionLink href={mapsUrl} secondary light>
              {t.find}
            </ActionLink>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs text-white/75">
            <span
              className="flex items-center gap-1 text-gold"
              aria-label={locale === "fr" ? "Note de 4,8 sur 5" : "التقييم 4.8 من 5"}
            >
              <Star className="size-3.5 fill-current" />
              <span className="font-semibold">4,8/5</span>
            </span>
            <span className="h-3 w-px bg-white/25" aria-hidden="true" />
            <span>{t.reviewsCount}</span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="ms-1 underline decoration-white/30 underline-offset-4 transition-colors hover:text-gold"
            >
              {t.reviewsButton}
            </a>
          </div>
        </div>
      </div>
      <div
        className="hero-index hidden items-center gap-4 text-[.58rem] uppercase text-white/65 [letter-spacing:.18em] lg:flex"
        aria-hidden="true"
      >
        <span className="hero-index-ring" />
        <span>Nador · Maroc</span>
      </div>
      <a
        href="#signature"
        className="hero-scroll hidden items-center gap-3 text-[.56rem] uppercase text-white/65 [letter-spacing:.16em] sm:flex"
        aria-label={locale === "fr" ? "Défiler vers la présentation" : "انتقل إلى التعريف"}
      >
        <span>{locale === "fr" ? "Découvrir" : "اكتشف"}</span>
        <ArrowDown className="size-3.5" />
      </a>
      <p className="absolute bottom-5 end-5 text-[.55rem] uppercase text-white/50 [letter-spacing:.17em] sm:end-8">
        {t.galleryLabel}
      </p>
    </section>
  );
}

export function LocalProofBand() {
  const { locale } = useLocale();
  const items =
    locale === "fr"
      ? [
          { icon: Star, value: "4,8 / 5", label: "83 avis Google" },
          { icon: Clock3, value: "10h — 23h", label: "Tous les jours" },
          { icon: MapPin, value: "Nador", label: "5 Rue Marrakech" },
        ]
      : [
          { icon: Star, value: "4.8 / 5", label: "83 تقييماً على Google" },
          { icon: Clock3, value: "10:00 — 23:00", label: "كل يوم" },
          { icon: MapPin, value: "الناظور", label: "5 شارع مراكش" },
        ];

  return (
    <section
      aria-label={locale === "fr" ? "Informations pratiques" : "معلومات عملية"}
      className="border-b border-border bg-background px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse">
        {items.map(({ icon: Icon, value, label }, index) => (
          <div key={value} className="flex min-h-[104px] items-center gap-4 py-5 sm:px-6 lg:px-9">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/25 text-gold">
              <Icon className="size-4" />
            </span>
            <div>
              <p className="font-display text-2xl leading-none text-foreground sm:text-[1.7rem]">
                <bdi dir={locale === "ar" && index === 1 ? "ltr" : undefined}>{value}</bdi>
              </p>
              <p className="mt-1.5 text-[.62rem] uppercase text-muted-foreground [letter-spacing:.1em]">
                {label}
              </p>
            </div>
            <span className="ms-auto self-start pt-1 text-[.58rem] text-gold/70">0{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Introduction() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section
      id="signature"
      data-reveal
      className="bg-canvas px-5 py-20 text-canvas-foreground sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <p className="text-xs font-bold uppercase text-canvas-muted [letter-spacing:.22em]">
          01 — {locale === "fr" ? "NOTRE SIGNATURE" : "بصمتنا"}
        </p>
        <div>
          <h2 className="font-display text-5xl leading-[1.02] sm:text-7xl">{t.detailTitle}</h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-canvas-muted sm:text-lg">
            {t.detailText}
          </p>
          <Button
            asChild
            variant="link"
            className="mt-7 h-auto rounded-none p-0 text-xs font-bold uppercase text-canvas-foreground [letter-spacing:.14em]"
          >
            <Link to="/salon">{locale === "fr" ? "Découvrir le salon" : "اكتشف الصالون"} →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const { locale } = useLocale();
  const t = copy[locale];
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof serviceCategories)[number]["id"]>("all");
  const visibleServices = preview
    ? serviceCatalog.slice(0, 6)
    : serviceCatalog.filter(
        (service) => selectedCategory === "all" || service.category === selectedCategory,
      );

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(locale === "ar" ? "ar-MA" : "fr-MA", {
      style: "currency",
      currency: "MAD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  return (
    <section data-reveal className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1.15fr_.85fr]">
          <h2 className="max-w-3xl font-display text-5xl leading-[.94] sm:text-7xl">
            {t.servicesTitle}
          </h2>
          <p className="max-w-md self-end text-sm leading-7 text-muted-foreground sm:text-base">
            {t.servicesIntro}
          </p>
        </div>
        {!preview && (
          <div
            role="group"
            className="mt-7 flex gap-2 overflow-x-auto pb-2"
            aria-label={locale === "fr" ? "Filtrer les prestations" : "تصفية الخدمات"}
          >
            {serviceCategories.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedCategory(id)}
                aria-pressed={selectedCategory === id}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${selectedCategory === id ? "border-gold bg-gold text-gold-foreground" : "border-border bg-transparent text-muted-foreground hover:border-gold hover:text-foreground"}`}
              >
                {id === "all" ? t.allServices : label[locale]}
              </button>
            ))}
            <span
              className="ms-auto hidden self-center whitespace-nowrap text-xs text-muted-foreground sm:block"
              aria-live="polite"
            >
              {visibleServices.length} {t.servicesCount}
            </span>
          </div>
        )}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {visibleServices.map((service, index) => (
            <article
              key={service.id}
              className="service-card group overflow-hidden border border-border bg-card transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-30px_oklch(0.2_0.06_250_/_0.55)]"
            >
              <div className="service-card-image relative aspect-[4/3] overflow-hidden bg-canvas">
                <img
                  src={service.image}
                  alt={
                    locale === "fr"
                      ? `${service.name.fr} — service chez Elegance Barber Shop à Nador`
                      : `${service.name.ar} — خدمة في إليغانس باربر شوب بالناظور`
                  }
                  width={900}
                  height={900}
                  loading={preview && index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute start-3 top-3 rounded-full border border-white/25 bg-canvas/90 px-3 py-1 text-[.6rem] font-semibold uppercase tracking-[.16em] text-canvas-foreground">
                  {serviceCategories.find(({ id }) => id === service.category)?.label[locale]}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex min-h-14 items-start justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                    {service.name[locale]}
                  </h3>
                  <span className="shrink-0 font-display text-xl font-semibold text-gold">
                    {formatPrice(service.price)}
                  </span>
                </div>
                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {service.description[locale]}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="size-3.5 text-gold" />
                    {t.serviceTime}
                  </span>
                  <bdi dir="ltr" className="font-semibold text-foreground">
                    {service.minutes} {locale === "fr" ? "min" : "دقيقة"}
                  </bdi>
                </div>
                {!preview && (
                  <a
                    href={whatsappHref(`${t.whatsappService} ${service.name[locale]}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-foreground transition-colors hover:text-gold"
                  >
                    <MessageCircle className="size-3.5" />
                    {t.serviceCall}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {preview && (
          <Button
            asChild
            variant="outline"
            className="mt-10 h-11 rounded-none border-border bg-transparent text-foreground"
          >
            <Link to="/prestations">
              {locale === "fr" ? "Voir toute la carte" : "عرض قائمة الخدمات"}
            </Link>
          </Button>
        )}
        {!preview && (
          <section className="mt-20">
            <h2 className="mb-8 font-display text-4xl text-foreground sm:text-6xl">
              {t.processTitle}
            </h2>
            <div className="grid gap-px bg-canvas-border sm:grid-cols-3">
              {t.process.map(([title, text], index) => (
                <div key={title} className="bg-canvas p-7 text-canvas-foreground sm:p-8">
                  <span className="font-display text-4xl text-gold/80">0{index + 1}</span>
                  <h3 className="mt-8 font-display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-canvas-muted">{text}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export function Experience() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section
      data-reveal
      className="experience-section relative overflow-hidden bg-canvas px-5 py-20 text-canvas-foreground sm:py-28 lg:px-12"
    >
      <div className="experience-orbit" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
        <div className="experience-intro">
          <p className="section-rule mb-7 text-xs font-semibold uppercase text-gold [letter-spacing:.22em]">
            {t.experienceEyebrow}
          </p>
          <h2 className="max-w-xl font-display text-5xl leading-[.96] sm:text-7xl">
            {t.experienceTitle}
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-canvas-muted sm:text-base sm:leading-8">
            {t.experienceIntro}
          </p>
          <Link
            to="/salon"
            className="mt-8 inline-flex items-center gap-3 border-b border-gold/50 pb-2 text-xs font-semibold uppercase text-canvas-foreground transition-colors hover:border-gold hover:text-gold [letter-spacing:.12em]"
          >
            {locale === "fr" ? "Découvrir le salon" : "اكتشف الصالون"}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="experience-grid grid gap-3 sm:grid-cols-2">
          {t.experience.map(([title, text], i) => {
            const Icon = [MessageCircle, Scissors, Sparkles, Clock3][i];
            return (
              <article
                key={title}
                className="experience-card group relative flex min-h-64 flex-col border border-canvas-border bg-background/45 p-6 transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-background/80 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-gold/70">0{i + 1}</span>
                  <span className="flex size-11 items-center justify-center rounded-full border border-gold/25 text-gold transition duration-500 group-hover:rotate-[-8deg] group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl sm:text-4xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-canvas-muted">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section data-reveal className="bg-background px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs uppercase text-gold [letter-spacing:.2em]">
              {locale === "fr" ? "GALERIE" : "المعرض"}
            </p>
            <h2 className="font-display text-5xl sm:text-7xl">{t.galleryTitle}</h2>
          </div>
          <Button asChild variant="link" className="justify-start p-0 text-foreground">
            <Link to="/galerie">{locale === "fr" ? "Voir la galerie" : "عرض المعرض"} →</Link>
          </Button>
        </div>
        <div className="grid gap-3 md:grid-cols-[1.08fr_.92fr]">
          {galleryImages.slice(0, 3).map((image, i) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden ${i === 0 ? "h-[440px] md:row-span-2 md:h-[600px]" : "h-[300px] md:h-[294px]"}`}
            >
              <img
                src={image.src}
                alt={t.imageAlt[i]}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <span className="absolute bottom-4 start-4 bg-background/85 px-3 py-2 text-[.55rem] uppercase text-muted-foreground [letter-spacing:.16em]">
                {t.galleryCaptions[image.caption]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsBlock({ page = false }: { page?: boolean }) {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section
      data-reveal
      className="reviews-section border-y border-border bg-surface px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20">
        <div className="reviews-copy">
          <p className="section-rule mb-7 text-xs font-semibold uppercase text-gold [letter-spacing:.22em]">
            GOOGLE · NADOR
          </p>
          {page ? (
            <h1 className="max-w-2xl font-display text-5xl leading-[.98] sm:text-7xl">
              {t.reviewsTitle}
            </h1>
          ) : (
            <h2 className="max-w-2xl font-display text-5xl leading-[.98] sm:text-7xl">
              {t.reviewsTitle}
            </h2>
          )}
          <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {t.reviewsIntro}
          </p>
        </div>
        <div className="reviews-panel relative overflow-hidden border border-border bg-background p-7 sm:p-10">
          <span className="reviews-panel-accent" aria-hidden="true" />
          <div className="relative">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-end gap-3">
                <span className="font-display text-8xl leading-[.8] text-gold sm:text-9xl">
                  4,8
                </span>
                <span className="mb-1 text-sm text-muted-foreground">/ 5</span>
              </div>
              <span className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground [letter-spacing:.14em]">
                <Star className="size-4 fill-gold text-gold" aria-hidden="true" /> Google
              </span>
            </div>
            <div className="mt-7 flex items-center justify-between gap-4 border-t border-border pt-6">
              <RatingMark />
              <span className="text-sm font-semibold text-foreground">{t.reviewsCount}</span>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground">
              {t.reviewsPrompt}
            </p>
            <ActionLink href={mapsUrl} secondary>
              {t.reviewsButton}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationBlock({ page = false }: { page?: boolean }) {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section
      data-reveal
      className="bg-canvas px-5 py-20 text-canvas-foreground sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div className="contact-copy">
          <p className="mb-5 text-xs uppercase text-canvas-muted [letter-spacing:.2em]">
            NADOR • MAROC
          </p>
          {page ? (
            <h1 className="font-display text-5xl leading-none sm:text-7xl">{t.locationTitle}</h1>
          ) : (
            <h2 className="font-display text-5xl leading-none sm:text-7xl">{t.locationTitle}</h2>
          )}
          <p className="mt-7 max-w-xl text-sm leading-7 text-canvas-muted sm:text-base sm:leading-8">
            {t.contactIntro}
          </p>
          <div className="mt-10 h-px bg-canvas-border" />
        </div>
        <div className="location-panel space-y-6 border border-canvas-border p-6 text-base sm:p-8">
          <div className="flex gap-4">
            <MapPin className="mt-1 size-5 shrink-0 text-gold" />
            <p>
              <strong className="block text-canvas-foreground">Elegance Barber Shop</strong>
              <span className="text-canvas-muted">{t.address}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Phone className="size-5 shrink-0 text-gold" />
            <a href={phoneHref}>{phoneDisplay}</a>
          </div>
          <div className="flex gap-4">
            <Clock3 className="size-5 shrink-0 text-gold" />
            <p>{t.hours}</p>
          </div>
          <p className="border-t border-canvas-border pt-5 text-xs leading-5 text-canvas-muted">
            {t.contactHint}
          </p>
          <div className="flex flex-wrap gap-3">
            <ActionLink href={whatsappHref(t.whatsappQuestion)}>{t.contactWhatsApp}</ActionLink>
            <ActionLink href={mapsUrl} secondary>
              {t.getDirection}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <section
      data-reveal
      className="final-cta relative overflow-hidden bg-background px-5 py-24 text-center sm:px-8 sm:py-32"
    >
      <span className="absolute start-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gold" />
      <p className="text-xs uppercase text-gold [letter-spacing:.24em]">ÉLÉGANCE • NADOR</p>
      <h2 className="mx-auto mt-7 max-w-4xl font-display text-5xl leading-[.96] sm:text-8xl">
        {t.cta}
      </h2>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ActionLink href={whatsappHref(t.whatsappQuestion)}>{t.callNow}</ActionLink>
        <ActionLink href={mapsUrl} secondary>
          {t.viewDirection}
        </ActionLink>
        <ActionLink href={whatsappHref(t.whatsappAppointment)} secondary>
          {t.book}
        </ActionLink>
      </div>
    </section>
  );
}
