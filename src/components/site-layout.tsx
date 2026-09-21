import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight, Box, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Sparkles, X, Youtube,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { contact, navItems } from "@/lib/site-data";
import { TextReveal } from "@/components/text-reveal";
import ctaBannerImage from "@/assets/cta-banner.jpg";

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" aria-label="Shivam Traders home" className="flex items-center gap-3">
      <span className={`grid size-12 place-items-center border-[3px] ${inverse ? "border-white" : "border-navy"} rotate-30 transition-colors`}>
        <Box className={`size-7 -rotate-30 ${inverse ? "text-white" : "text-primary"}`} />
      </span>
      <span className="leading-none">
        <strong className={`block text-2xl font-extrabold tracking-tight ${inverse ? "text-white" : "text-navy"}`}>SHIVAM</strong>
        <span className="block text-[11px] font-extrabold tracking-[0.32em] text-primary">TRADERS</span>
      </span>
    </Link>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-navy-deep text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:px-5 py-2 text-[11px] sm:text-xs">
          {/* Mobile Only: Phone on left corner */}
          <a
            href={contact.phoneHref}
            className="flex sm:hidden items-center gap-1.5 text-secondary-foreground/90 hover:text-white transition-colors"
          >
            <Phone className="size-3.5 text-primary shrink-0" />
            <span>{contact.phone}</span>
          </a>

          {/* Large Screen: Tagline on left */}
          <span className="hidden sm:block font-medium">
            Your Trusted Packaging &amp; Supply Partner
          </span>

          {/* Right Corner: Email on mobile | Email & Phone on desktop */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 text-secondary-foreground/90 hover:text-white transition-colors"
            >
              <Mail className="size-3.5 text-primary shrink-0" />
              <span>{contact.email}</span>
            </a>
            <a
              href={contact.phoneHref}
              className="hidden sm:flex items-center gap-1.5 text-secondary-foreground/90 hover:text-white transition-colors"
            >
              <Phone className="size-3.5 text-primary shrink-0" />
              <span>{contact.phone}</span>
            </a>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled || menuOpen
          ? "border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent shadow-none"
          }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Logo />
          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeProps={{ className: "text-primary font-bold border-b-2 border-primary pb-0.5" }}
                inactiveProps={{ className: "text-navy hover:text-primary pb-0.5 border-b-2 border-transparent" }}
                className="text-xs font-bold transition-all uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button variant="hero" size="lg" className="hidden xl:inline-flex uppercase tracking-wider font-extrabold text-xs shadow-sm" asChild>
            <Link to="/contact-us">GET A QUOTE <ArrowRight className="size-4 ml-1" /></Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden text-navy hover:bg-muted/50"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 xl:hidden shadow-lg animate-in fade-in-0 slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 text-xs font-extrabold uppercase tracking-wider text-navy hover:text-primary transition-colors last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-2">
              <Button variant="hero" className="w-full uppercase tracking-wider font-extrabold text-xs" asChild>
                <Link to="/contact-us" onClick={() => setMenuOpen(false)}>GET A QUOTE <ArrowRight className="size-4 ml-1" /></Link>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr_.7fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 text-xs leading-6 text-secondary-foreground/65">Your Trusted Partner in Packaging &amp; Supplies</p>
        </div>
        <div>
          <h3 className="reveal-heading font-bold uppercase tracking-wider text-sm">Quick Links</h3>
          <div className="mt-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="block text-xs uppercase tracking-wider font-semibold text-secondary-foreground/70 transition-colors hover:text-primary">
                → &nbsp;{item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="reveal-heading font-bold uppercase tracking-wider text-sm">Contact Us</h3>
          <div className="mt-4 space-y-3 text-sm text-secondary-foreground/75">
            <a href={contact.phoneHref} className="flex gap-3"><Phone className="size-4 shrink-0" />{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="flex gap-3"><Mail className="size-4 shrink-0" />{contact.email}</a>
            <p className="flex gap-3"><MapPin className="size-4 shrink-0" /><span>{contact.address[0]}<br />{contact.address[1]}</span></p>
          </div>
        </div>
        <div>
          <h3 className="reveal-heading font-bold uppercase tracking-wider text-sm">Follow Us</h3>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href={`mailto:${contact.email}`} aria-label="Social media" className="grid size-8 place-items-center rounded-full bg-background text-navy transition-transform hover:scale-105">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <p className="mt-7 flex items-center gap-2 text-xs font-semibold text-secondary-foreground">
            <Sparkles className="size-8 text-primary" />
            <span><strong className="block uppercase">Go Green</strong><small className="text-secondary-foreground/60">Choose Sustainable<br />Packaging</small></span>
          </p>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/20">
        <div className="mx-auto grid max-w-7xl items-center gap-3 px-5 py-5 text-center text-xs text-secondary-foreground/55 sm:grid-cols-3 sm:text-left">

          <span>© 2026 Shivam Traders. All Rights Reserved.</span>

          <span className="font-script text-lg text-secondary-foreground/80 sm:text-center">
            Packaging Today for a Better Tomorrow.
          </span>

          <span className="sm:text-right">
            Designed by{" "}
            <a
              href="https://vmsolutiions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary transition-colors duration-200 hover:text-white"
            >
              VM Solutiions
            </a>
          </span>

        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <section className="relative overflow-hidden bg-orange-soft py-16 sm:py-24 border-b border-border/40">
      {/* Background Image with Overlay */}
      <img
        src={ctaBannerImage}
        alt="Shivam Traders packaging supplies banner"
        width={1536}
        height={900}
        className="absolute inset-0 h-full w-full object-cover object-right opacity-70 sm:opacity-85"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-soft via-orange-soft/80 via-40% to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <TextReveal
          as="p"
          text={eyebrow}
          delay={40}
          className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-primary"
        />
        <TextReveal
          as="h1"
          text={title}
          delay={120}
          stagger={70}
          className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-navy"
        />
        {copy && (
          <TextReveal
            as="p"
            text={copy}
            delay={260}
            stagger={25}
            className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-navy/85 font-medium"
          />
        )}
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative block w-full h-6 sm:h-10 text-background fill-current"
        >
          <path d="M0,0 C480,55 960,55 1440,0 L1440,60 L0,60 Z"></path>
        </svg>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center px-4">
      <TextReveal
        as="p"
        text={eyebrow}
        delay={40}
        className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-primary"
      />
      <TextReveal
        as="h2"
        text={title}
        delay={120}
        stagger={70}
        className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy"
      />
      {copy && (
        <TextReveal
          as="p"
          text={copy}
          delay={260}
          stagger={25}
          className="mt-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed"
        />
      )}
    </div>
  );
}

export function ProductCard({
  slug,
  title,
  text,
  image,
  onSelect,
}: {
  slug: string;
  title: string;
  text: string;
  image: string;
  onSelect?: () => void;
}) {
  return (
    <article
      onClick={onSelect}
      className={`fade-in-view group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${onSelect ? "cursor-pointer" : ""
        }`}
    >
      <Link to="/products/$slug" params={{ slug }} className="relative flex aspect-square items-center justify-center overflow-hidden bg-white p-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={880}
          height={752}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/15">
          <span className="rounded-full bg-navy/95 px-3.5 py-1.5 text-xs font-bold text-white opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
            View Products →
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5 text-center">
        <h3 className="text-base font-extrabold text-navy sm:text-lg">{title}</h3>
        <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">{text}</p>
        <div className="mt-4 sm:mt-5">
          <Button
            variant="hero"
            size="sm"
            className="w-full font-bold uppercase tracking-wider text-xs shadow-xs group/btn hover:shadow-md transition-all duration-300"
            asChild
          >
            <Link to="/contact-us">
              Inquire Now{" "}
              <ArrowRight className="ml-1 size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
