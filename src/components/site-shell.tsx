import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Menu, Phone, Star } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { copy, mapsUrl, phoneDisplay, phoneHref, type Locale } from "@/lib/site-content";

const LocaleContext = createContext({ locale: "fr" as Locale, setLocale: (_: Locale) => {} });

export function useLocale() {
  return useContext(LocaleContext);
}

function Brand() {
  return (
    <Link to="/" className="group inline-flex shrink-0 flex-col leading-none" aria-label="Élégance — Accueil">
      <span className="font-display text-2xl font-semibold uppercase text-foreground transition-colors group-hover:text-gold sm:text-[1.7rem]">
        Élégance
      </span>
      <span className="mt-1 text-[0.54rem] font-semibold uppercase text-muted-foreground [letter-spacing:.28em]">
        Barber <span className="text-gold">•</span> Coiffure
      </span>
    </Link>
  );
}

function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="flex shrink-0 items-center border border-border bg-surface/60 p-0.5 text-xs" aria-label="Langue">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLocale("fr")}
        className={locale === "fr" ? "h-7 rounded-none bg-foreground px-2.5 text-background hover:bg-foreground hover:text-background" : "h-7 rounded-none px-2.5 text-muted-foreground"}
      >
        FR
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLocale("ar")}
        className={locale === "ar" ? "h-7 rounded-none bg-foreground px-2.5 text-background hover:bg-foreground hover:text-background" : "h-7 rounded-none px-2.5 text-muted-foreground"}
      >
        العربية
      </Button>
    </div>
  );
}

function Header() {
  const { locale } = useLocale();
  const t = copy[locale];
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-12">
        <Brand />
        <nav className="hidden min-w-0 items-center justify-center gap-6 lg:flex" aria-label="Navigation principale">
          {t.nav.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className={`relative py-2 text-[0.68rem] font-semibold uppercase [letter-spacing:.14em] transition-colors hover:text-gold ${pathname === href ? "text-gold after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-gold" : "text-muted-foreground"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center justify-end gap-3 lg:flex">
          <LanguageToggle />
          <Button asChild className="h-10 rounded-none bg-gold px-5 text-[0.68rem] font-bold uppercase text-gold-foreground [letter-spacing:.12em] hover:bg-gold/90">
            <a href={phoneHref}>{t.book}</a>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-none border-border bg-transparent" aria-label={t.menu}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === "ar" ? "left" : "right"} className="w-[86%] border-border bg-background px-7 py-8 sm:max-w-sm">
              <SheetTitle className="sr-only">{t.menu}</SheetTitle>
              <SheetDescription className="sr-only">Navigation</SheetDescription>
              <div className="mb-12"><Brand /></div>
              <nav className="flex flex-col" aria-label="Navigation mobile">
                {t.nav.map(([label, href], index) => (
                  <SheetClose asChild key={href}>
                    <Link to={href} className={`border-b border-border py-4 font-display text-3xl ${pathname === href ? "text-gold" : "text-foreground"}`}>
                      <span className="me-4 font-body text-xs text-gold">0{index + 1}</span>{label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild className="mt-10 h-12 w-full rounded-none bg-gold text-gold-foreground">
                <a href={phoneHref}><Phone />{t.book}</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function ActionLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return (
    <Button asChild variant={secondary ? "outline" : "default"} className={`h-12 rounded-none px-6 text-xs font-bold uppercase [letter-spacing:.12em] ${secondary ? "border-foreground/30 bg-transparent text-foreground hover:border-gold hover:bg-transparent hover:text-gold" : "bg-gold text-gold-foreground hover:bg-gold/90"}`}>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}<ArrowUpRight className="size-4" />
      </a>
    </Button>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="border-b border-border bg-surface px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-7 text-xs font-semibold uppercase text-gold [letter-spacing:.26em]">{eyebrow}</p>
        <h1 className="max-w-5xl font-display text-5xl leading-[.98] text-foreground sm:text-7xl lg:text-8xl">{title}</h1>
        {text && <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{text}</p>}
      </div>
    </section>
  );
}

function MobileBar() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-[4.25rem] grid-cols-3 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a href={phoneHref} className="flex flex-col items-center justify-center gap-1 border-e border-border text-[.62rem] font-semibold uppercase [letter-spacing:.08em]"><Phone className="size-4 text-gold" />{t.call}</a>
      <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-1 border-e border-border text-[.62rem] font-semibold uppercase [letter-spacing:.08em]"><MapPin className="size-4 text-gold" />{t.direction}</a>
      <a href={phoneHref} className="flex flex-col items-center justify-center gap-1 bg-gold text-[.62rem] font-bold uppercase text-gold-foreground [letter-spacing:.06em]"><CalendarDays className="size-4" />{locale === "fr" ? "Rendez-vous" : "موعد"}</a>
    </div>
  );
}

function Footer() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <footer className="border-t border-border bg-background px-5 pb-28 pt-14 sm:px-8 lg:px-12 lg:pb-10">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div><Brand /><p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">{t.detailText}</p></div>
        <div>
          <p className="mb-5 text-xs uppercase text-gold [letter-spacing:.2em]">Nador</p>
          <address className="not-italic text-sm leading-7 text-muted-foreground">{t.address}<br /><a href={phoneHref} className="text-foreground hover:text-gold">{phoneDisplay}</a><br />{t.hours}</address>
        </div>
        <nav className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted-foreground" aria-label="Navigation du pied de page">
          {t.nav.map(([label, href]) => <Link key={href} to={href} className="hover:text-gold">{label}</Link>)}
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] border-t border-border pt-5 text-[.65rem] uppercase text-muted-foreground [letter-spacing:.13em]">© 2026 Élégance — Barber • Coiffure</div>
    </footer>
  );
}

export function RatingMark() {
  return <div className="flex gap-1 text-gold" aria-label="5 étoiles">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div className={locale === "ar" ? "font-arabic" : "font-body"} dir={locale === "ar" ? "rtl" : "ltr"}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </div>
    </LocaleContext.Provider>
  );
}