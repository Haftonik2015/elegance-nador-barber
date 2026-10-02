import { createFileRoute } from "@tanstack/react-router";
import chairImage from "@/assets/barber-detail-chair.jpg";
import mirrorImage from "@/assets/barber-detail-mirror.jpg";
import { Experience, FinalCta } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { copy } from "@/lib/site-content";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/salon")({
  head: () =>
    createPageSeo({
      title: "Le salon — Elegance Barber Shop à Nador",
      description:
        "Découvrez Elegance Barber Shop à Nador : coupe, barbe, coloration et soins du visage.",
      path: "/salon",
    }),
  component: SalonPage,
});

function SalonPage() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <>
      <PageIntro eyebrow={t.salonEyebrow} title={t.salonTitle} text={t.salonBody} />
      <section className="bg-background px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-[560px] overflow-hidden">
            <img
              src={chairImage}
              alt={t.imageAlt[0]}
              width={1280}
              height={1600}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute bottom-4 start-4 bg-background/85 px-3 py-2 text-[.55rem] uppercase text-muted-foreground [letter-spacing:.16em]">
              {t.galleryLabel}
            </span>
          </div>
          <div className="flex min-h-[560px] flex-col justify-between bg-surface p-8 sm:p-12">
            <p className="font-display text-5xl leading-none sm:text-7xl">{t.salonNote}</p>
            <img
              src={mirrorImage}
              alt={t.imageAlt[2]}
              width={1600}
              height={1200}
              loading="lazy"
              className="mt-12 h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>
      <Experience />
      <FinalCta />
    </>
  );
}
