import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Expand } from "lucide-react";
import { galleryImages } from "@/components/site-sections";
import { PageIntro, useLocale } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { copy } from "@/lib/site-content";

export const Route = createFileRoute("/galerie")({
  head: () => ({ meta: [{ title: "Galerie — Élégance Barber Nador" }, { name: "description", content: "Découvrez l’univers visuel d’Élégance, barber shop et coiffeur homme à Nador." }, { property: "og:title", content: "Galerie — Élégance Barber Nador" }, { property: "og:description", content: "L’univers élégant et précis de notre barbershop à Nador." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/galerie" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/galerie" }] }),
  component: GalleryPage,
});

function GalleryPage() {
  const { locale } = useLocale(); const t = copy[locale];
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? undefined : galleryImages[selected];
  return <><PageIntro eyebrow={locale === "fr" ? "GALERIE" : "المعرض"} title={t.galleryTitle} text={t.galleryIntro}/><section className="bg-background px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">{galleryImages.map((image,index)=><article key={image.src} className={`group relative overflow-hidden ${index===2?"md:col-span-2 md:h-[650px]":"h-[560px]"}`}><img src={image.src} alt={t.imageAlt[index]} width={image.width} height={image.height} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"/><div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-image-caption px-4 py-4"><span className="text-[.6rem] uppercase text-foreground/70 [letter-spacing:.15em]">{t.galleryLabel}</span><Button type="button" variant="ghost" size="icon" className="rounded-none text-foreground hover:bg-foreground/10" onClick={()=>setSelected(index)} aria-label={`${locale==="fr"?"Agrandir":"تكبير"} ${t.imageAlt[index]}`}><Expand/></Button></div></article>)}</div></section><Dialog open={selected!==null} onOpenChange={(open)=>!open&&setSelected(null)}><DialogContent className="max-h-[92vh] max-w-5xl border-border bg-background p-2"><DialogTitle className="sr-only">{t.imageAlt[selected ?? 0]}</DialogTitle><DialogDescription className="sr-only">{t.galleryLabel}</DialogDescription>{current&&<img src={current.src} alt={t.imageAlt[selected ?? 0]} width={current.width} height={current.height} className="max-h-[88vh] w-full object-contain"/>}</DialogContent></Dialog></>;
}