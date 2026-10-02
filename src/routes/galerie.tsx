import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Expand } from "lucide-react";
import { galleryImages } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { copy } from "@/lib/site-content";
import { createPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/galerie")({
  head: () =>
    createPageSeo({
      title: "Galerie — Elegance Barber Shop à Nador",
      description: "Découvrez l’univers visuel d’Élégance, barber shop et coiffeur homme à Nador.",
      path: "/galerie",
    }),
  component: GalleryPage,
});

function GalleryPage() {
  const { locale } = useLocale();
  const t = copy[locale];
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? undefined : galleryImages[selected];
  return (
    <>
      <PageIntro
        eyebrow={locale === "fr" ? "GALERIE" : "المعرض"}
        title={t.galleryTitle}
        text={t.galleryIntro}
      />
      <section className="bg-background px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className={`group relative overflow-hidden ${index === 0 || index === 5 ? "md:col-span-2 h-[430px] sm:h-[560px]" : "h-[380px] sm:h-[480px]"}`}
            >
              <img
                src={image.src}
                alt={t.imageAlt[index]}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-image-caption px-4 py-4">
                <span className="font-display text-xl text-foreground sm:text-2xl">
                  {t.galleryCaptions[image.caption]}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-none text-foreground hover:bg-foreground/10"
                  onClick={() => setSelected(index)}
                  aria-label={`${locale === "fr" ? "Agrandir" : "تكبير"} ${t.imageAlt[index]}`}
                >
                  <Expand />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl border-border bg-background p-2">
          <DialogTitle className="sr-only">{t.imageAlt[selected ?? 0]}</DialogTitle>
          <DialogDescription className="sr-only">{t.galleryLabel}</DialogDescription>
          {current && (
            <img
              src={current.src}
              alt={t.imageAlt[selected ?? 0]}
              width={current.width}
              height={current.height}
              className="max-h-[88vh] w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
