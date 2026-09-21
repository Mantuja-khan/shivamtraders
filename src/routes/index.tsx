import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Box, CheckCircle2, Clock3, ShieldCheck, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard, SectionTitle, SiteLayout } from "@/components/site-layout";
import { TextReveal, RevealBlock } from "@/components/text-reveal";
import { customerLogos } from "@/lib/customer-logos";
import { industries, productCategories } from "@/lib/site-data";
import ctaBannerImage from "@/assets/cta-banner.jpg";
import heroImage from "@/assets/packaging-hero.jpg";
import buildingImage from "@/assets/company-building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Traders | Packaging & Supply Solutions" },
      { name: "description", content: "Complete packaging materials and hygiene supplies with consistent quality and timely delivery." },
      { property: "og:title", content: "Shivam Traders | Packaging & Supply Solutions" },
      { property: "og:description", content: "Complete packaging materials and hygiene supplies with consistent quality and timely delivery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative min-h-[540px] sm:min-h-[620px] bg-orange-soft overflow-hidden">
        <img
          src={ctaBannerImage}
          alt="Shivam Traders complete packaging solutions"
          width={1536}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-right opacity-80 sm:opacity-90"
        />
        {/* Soft gradient to keep left text clear and crisp while showing right side image */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-soft via-orange-soft/80 via-40% to-transparent pointer-events-none" />
        <div className="relative mx-auto flex min-h-[540px] sm:min-h-[620px] max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-[620px]">
            {/* Eyebrow badge with text-by-text reveal */}
            <TextReveal
              as="p"
              text="Quality packaging for a better tomorrow"
              delay={40}
              stagger={50}
              className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-primary"
            />

            {/* Hero Main Headline with text-by-text reveal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-navy">
              <TextReveal as="span" text="COMPLETE" delay={120} stagger={60} className="block" />
              <TextReveal as="span" text="PACKAGING &" delay={260} stagger={60} className="block" />
              <TextReveal as="span" text="SUPPLY SOLUTIONS" delay={420} stagger={60} className="block text-primary" />
            </h1>

            {/* Subtitle with text-by-text reveal */}
            <TextReveal
              as="p"
              text="At Shivam Traders, we provide high-quality packaging materials and hygiene products to keep your business moving forward."
              delay={600}
              stagger={25}
              className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base font-medium leading-relaxed text-navy/85"
            />

            {/* CTA Buttons - Side-by-side on small screens */}
            <RevealBlock delay={750} className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto shadow-md text-xs sm:text-sm px-3 sm:px-7 h-11 sm:h-12" asChild>
                <Link to="/products" className="inline-flex items-center justify-center">
                  <span>Explore Products</span>
                  <ArrowRight className="ml-1 size-3.5 sm:size-4 shrink-0" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto font-bold text-xs sm:text-sm px-3 sm:px-7 h-11 sm:h-12" asChild>
                <Link to="/contact-us">Contact Us</Link>
              </Button>
            </RevealBlock>

            {/* Trust Badges */}
            <RevealBlock delay={900} className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                [ShieldCheck, "High Quality", "Products"],
                [Truck, "Timely", "Delivery"],
                [Users, "Trusted by", "Businesses"],
              ].map(([Icon, a, b]) => {
                const FeatureIcon = Icon as typeof ShieldCheck;
                return (
                  <div key={a as string} className="flex flex-col items-center text-center text-navy p-2 sm:p-2.5 rounded-lg bg-white/60 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none border border-border/40 sm:border-0 shadow-xs sm:shadow-none">
                    <FeatureIcon className="mb-1.5 size-7 sm:size-9 text-primary" />
                    <p className="text-[10px] sm:text-xs font-extrabold leading-tight">
                      {a as string}<br />
                      <span className="font-semibold text-navy/75">{b as string}</span>
                    </p>
                  </div>
                );
              })}
            </RevealBlock>
          </div>
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

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <SectionTitle
          eyebrow="Our products"
          title="Wide Range of Products for Every Business"
          copy="From packaging materials to hygiene solutions, we offer everything you need under one roof."
        />
        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p) => (
            <ProductCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* Customer Logos Showcase */}
      <section className="border-y border-border/70 bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Customers"
            title="Trusted by Leading Businesses"
            copy="Proudly partnering with brands across diverse sectors for packaging and supplies."
          />
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
            {customerLogos.map((item) => (
              <div
                key={item.id}
                className="fade-in-view aspect-square flex items-center justify-center rounded-xl border border-border/60 bg-background/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-muted/60 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="fade-in-view relative overflow-hidden rounded-lg">
            <img src={buildingImage} alt="Modern Shivam Traders distribution facility" loading="lazy" width={1200} height={850} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <TextReveal as="p" text="About Shivam Traders" delay={40} className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary" />
            <TextReveal as="h2" text="Packaging Today for a Better Tomorrow" delay={120} stagger={65} className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-navy" />
            <p className="fade-in-view mt-4 leading-7 text-muted-foreground">
              Shivam Traders is a trusted name in the packaging and supply industry, offering high-quality products and reliable service to businesses across various sectors.
            </p>
            <ul className="mt-5 space-y-2">
              {["Wide range of packaging & hygiene products", "Competitive pricing", "Consistent quality", "On-time delivery", "Dedicated customer support"].map((x) => (
                <li key={x} className="fade-in-view flex items-center gap-2 text-sm font-semibold"><CheckCircle2 className="size-5 fill-navy text-background" />{x}</li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-7" asChild><Link to="/about-us">Read More About Us <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* Numbers / Stats Counter Section */}
      <section className="bg-navy-deep py-7 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-4 sm:px-6 lg:px-8 lg:grid-cols-4">
          {[[Users, "500+", "Happy Clients"], [Box, "1000+", "Products Supplied"], [Truck, "95%", "On-Time Delivery"], [Clock3, "10+", "Years of Experience"]].map(([Icon, num, label]) => {
            const StatIcon = Icon as typeof Users;
            return <div key={label as string} className="fade-in-view flex items-center justify-center gap-4"><StatIcon className="size-10 text-secondary-foreground/80" /><p><strong className="block text-2xl">{num as string}</strong><span className="text-xs text-secondary-foreground/75">{label as string}</span></p></div>;
          })}
        </div>
      </section>

      {/* Industries Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <SectionTitle eyebrow="Industries we serve" title="Packaging Solutions for Every Industry" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {industries.map(({ name, Icon }) => (
            <div key={name} className="fade-in-view flex min-h-32 flex-col items-center justify-center rounded-lg border border-border bg-card p-3 text-center shadow-sm">
              <Icon className="mb-3 size-10 text-navy" /><span className="text-xs font-bold text-navy">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
