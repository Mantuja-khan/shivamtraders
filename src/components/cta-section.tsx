import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/text-reveal";
import ctaBannerImage from "@/assets/cta-banner.jpg";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  copy?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  curveColor?: string; // CSS fill class for the bottom curve, e.g. "fill-background" or "fill-navy-deep"
}

export function CTASection({
  eyebrow = "Get in touch",
  title = "Let’s Build a Cleaner, Safer & Better Tomorrow",
  copy = "Partner with Shivam Traders for reliable packaging and hygiene solutions tailored to your business needs.",
  primaryText = "Request a Quote",
  primaryHref = "/contact-us",
  secondaryText = "Explore Products",
  secondaryHref = "/products",
  curveColor = "fill-navy-deep",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-orange-soft py-20 sm:py-24">
      {/* Background Image with Translucent Blend */}
      <img
        src={ctaBannerImage}
        alt="Shivam Traders packaging products background"
        loading="lazy"
        width={1536}
        height={900}
        className="absolute inset-0 h-full w-full object-cover object-right opacity-75 sm:opacity-85 transition-transform duration-700 hover:scale-105"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-soft via-orange-soft/80 via-45% to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          <TextReveal
            as="p"
            text={eyebrow}
            delay={40}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-primary"
          />

          <TextReveal
            as="h2"
            text={title}
            delay={120}
            stagger={65}
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-navy"
          />

          <p className="fade-in-view mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-navy/85 font-medium">
            {copy}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button variant="hero" size="lg" className="shadow-md" asChild>
              <Link to={primaryHref}>
                {primaryText} <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
            {secondaryText && (
              <Button variant="heroOutline" size="lg" className="font-bold bg-white/70 backdrop-blur-xs" asChild>
                <Link to={secondaryHref}>{secondaryText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Smooth Curved Bottom Divider */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          className={`relative block w-full h-8 sm:h-12 md:h-16 ${curveColor}`}
        >
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,70 L0,70 Z"></path>
        </svg>
      </div>
    </section>
  );
}
