import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Menu, MessageCircle, Phone, Star } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  copy,
  mapsUrl,
  phoneDisplay,
  phoneHref,
  whatsappHref,
  type Locale,
} from "@/lib/site-content";
import brandLogo from "@/assets/elegance-logo.png";

const LocaleContext = createContext({ locale: "fr" as Locale, setLocale: (_: Locale) => {} });

export function useLocale() {
  return useContext(LocaleContext);
}

function Brand() {
  return (
    <Link
      to="/"
      className="group inline-flex shrink-0 items-center gap-3 leading-none sm:gap-3.5"
      aria-label="Élégance Barber Shop — Accueil"
    >
      <span className="brand-logo-wrap">
        <img src={brandLogo} alt="" className="brand-logo" />
      </span>
      <span className="flex flex-col">
        <span className="font-display text-[1.15rem] font-semibold uppercase tracking-[.12em] text-foreground transition-colors group-hover:text-gold sm:text-[1.45rem]">
          Elegance
        </span>
        <span className="mt-1 text-[.48rem] font-semibold uppercase text-muted-foreground [letter-spacing:.17em] sm:text-[.54rem] sm:[letter-spacing:.24em]">
          Barber Shop <span className="text-gold">·</span> Nador
        </span>
      </span>
    </Link>
  );
}

function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div
      className="flex shrink-0 items-center border border-border bg-surface/60 p-0.5 text-xs"
      aria-label="Langue"
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLocale("fr")}
        className={
          locale === "fr"
            ? "h-7 rounded-none bg-gold px-2.5 text-gold-foreground hover:bg-gold hover:text-gold-foreground"
            : "h-7 rounded-none px-2.5 text-muted-foreground"
        }
      >
        FR
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLocale("ar")}
        className={
          locale === "ar"
            ? "h-7 rounded-none bg-gold px-2.5 text-gold-foreground hover:bg-gold hover:text-gold-foreground"
            : "h-7 rounded-none px-2.5 text-muted-foreground"
        }
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
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return (
    <header className="site-header relative sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 sm:gap-4 sm:px-8 2xl:grid-cols-[auto_minmax(0,1fr)_auto] 2xl:px-8">
        <Brand />
        <nav
          className="hidden min-w-0 items-center justify-center gap-3 2xl:flex"
          aria-label="Navigation principale"
        >
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
        <div className="hidden items-center justify-end gap-2 2xl:flex">
          <LanguageToggle />
          <Button
            asChild
            className="h-10 rounded-sm bg-gold px-4 text-[0.68rem] font-bold uppercase text-gold-foreground shadow-sm shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-gold/90 [letter-spacing:.1em]"
          >
            <a href={whatsappHref(t.whatsappAppointment)} target="_blank" rel="noreferrer">
              {t.book}
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-1 2xl:hidden sm:gap-2">
          <LanguageToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-sm border-border bg-transparent transition-colors hover:border-gold hover:bg-gold/10"
                aria-label={t.menu}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={locale === "ar" ? "left" : "right"}
              className="w-[86%] border-border bg-background px-7 py-8 sm:max-w-sm"
            >
              <SheetTitle className="sr-only">{t.menu}</SheetTitle>
              <SheetDescription className="sr-only">Navigation</SheetDescription>
              <div className="mb-12">
                <Brand />
              </div>
              <nav className="flex flex-col" aria-label="Navigation mobile">
                {t.nav.map(([label, href], index) => (
                  <SheetClose asChild key={href}>
                    <Link
                      to={href}
                      className={`border-b border-border py-4 font-display text-3xl ${pathname === href ? "text-gold" : "text-foreground"}`}
                    >
                      <span className="me-4 font-body text-xs text-gold">0{index + 1}</span>
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button
                asChild
                className="mt-10 h-12 w-full rounded-none bg-gold text-gold-foreground"
              >
                <a href={whatsappHref(t.whatsappAppointment)} target="_blank" rel="noreferrer">
                  <Phone />
                  {t.book}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <span aria-hidden="true" className="header-progress">
        <span ref={progressRef} />
      </span>
    </header>
  );
}

export function ActionLink({
  href,
  children,
  secondary = false,
  light = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
}) {
  return (
    <Button
      asChild
      variant={secondary ? "outline" : "default"}
      className={`h-12 rounded-sm px-6 text-xs font-bold uppercase shadow-sm shadow-black/20 transition-transform hover:-translate-y-0.5 [letter-spacing:.12em] ${secondary ? (light ? "border-white/45 bg-white/5 text-white hover:border-gold hover:bg-white/10 hover:text-white" : "border-foreground/30 bg-transparent text-foreground hover:border-gold hover:bg-transparent hover:text-gold") : "bg-gold text-gold-foreground hover:bg-gold/90"}`}
    >
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
        <ArrowUpRight className="size-4" />
      </a>
    </Button>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section
      data-reveal
      className="page-intro border-b border-border bg-surface px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <p className="section-rule mb-7 text-xs font-semibold uppercase text-gold [letter-spacing:.26em]">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl font-display text-5xl leading-[.98] text-foreground sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {text && (
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}

function MobileBar() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-[4.25rem] grid-cols-3 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a
        href={whatsappHref(t.whatsappQuestion)}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-e border-border text-[.62rem] font-semibold uppercase [letter-spacing:.08em]"
      >
        <MessageCircle className="size-4 text-gold" />
        {t.call}
      </a>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-e border-border text-[.62rem] font-semibold uppercase [letter-spacing:.08em]"
      >
        <MapPin className="size-4 text-gold" />
        {t.direction}
      </a>
      <a
        href={whatsappHref(t.whatsappAppointment)}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-gold text-[.62rem] font-bold uppercase text-gold-foreground [letter-spacing:.06em]"
      >
        <CalendarDays className="size-4" />
        {locale === "fr" ? "Rendez-vous" : "موعد"}
      </a>
    </div>
  );
}

function Footer() {
  const { locale } = useLocale();
  const t = copy[locale];
  return (
    <footer className="border-t border-border bg-background px-5 pb-28 pt-14 sm:px-8 lg:px-12 lg:pb-10">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">{t.detailText}</p>
        </div>
        <div>
          <p className="mb-5 text-xs uppercase text-gold [letter-spacing:.2em]">Nador</p>
          <address className="not-italic text-sm leading-7 text-muted-foreground">
            {t.address}
            <br />
            <a href={phoneHref} className="text-foreground hover:text-gold">
              {phoneDisplay}
            </a>
            <br />
            {t.hours}
          </address>
        </div>
        <nav
          className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted-foreground"
          aria-label="Navigation du pied de page"
        >
          {t.nav.map(([label, href]) => (
            <Link key={href} to={href} className="hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-[1400px] border-t border-border pt-5 text-[.65rem] uppercase text-muted-foreground [letter-spacing:.13em]">
        © 2026 Elegance Barber Shop · Nador
      </div>
    </footer>
  );
}

export function RatingMark() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.add("has-reveal");
    window.scrollTo(0, 0);

    const revealPassedSections = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight + 80) {
          section.setAttribute("data-visible", "true");
        }
      });
    };

    const frame = window.requestAnimationFrame(revealPassedSections);
    window.addEventListener("scroll", revealPassedSections, { passive: true });
    window.addEventListener("resize", revealPassedSections);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", revealPassedSections);
      window.removeEventListener("resize", revealPassedSections);
    };
  }, [pathname]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <div
        className={locale === "ar" ? "font-arabic" : "font-body"}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </div>
    </LocaleContext.Provider>
  );
}
