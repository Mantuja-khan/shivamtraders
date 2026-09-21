import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { customerLogos } from "@/lib/customer-logos";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Shivam Traders Packaging & Supplies" },
      { name: "description", content: "Discover the 500+ businesses and leading brands that trust Shivam Traders for their packaging and hygiene solutions." },
      { property: "og:title", content: "Our Clients | Shivam Traders" },
      { property: "og:description", content: "Discover the businesses that trust Shivam Traders for quality packaging." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Valued Clients"
        title="Trusted by 500+ Businesses Across India"
        copy="From large manufacturing plants to fast-growing retail brands, businesses trust Shivam Traders for reliable, high-grade packaging materials and timely supply."
      />

      {/* Client Logos Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
            OUR CLIENT PORTFOLIO
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-navy">
            Brands That Rely on Our Packaging
          </h2>
          <div className="w-14 h-1 bg-primary rounded-full mx-auto mt-2.5" />
          <p className="mt-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            We take pride in building long-lasting partnerships through tested product consistency and dependable dispatch schedules.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
          {customerLogos.map((item) => (
            <div
              key={item.id}
              className="fade-in-view group aspect-square flex items-center justify-center rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Partnership Highlights */}
      <section className="bg-muted/40 border-y border-border/60 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
                WHY BUSINESSES CHOOSE US
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight">
                Consistent Quality &amp; On-Time Supply Schedules
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you need standardized shipping cartons, heavy-duty stretch film, or custom printed bags, Shivam Traders offers factory-direct bulk pricing with seamless order replenishment.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Tested bursting strength and ply durability on all corrugated boxes",
                  "Guaranteed micron thickness and high puncture resistance on stretch films",
                  "Transparent volume discounts and tailored annual rate contracts",
                  "Dedicated dispatch tracking and doorstep delivery across India",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-navy">
                    <CheckCircle2 className="size-4 sm:size-5 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="uppercase tracking-wider font-extrabold text-xs" asChild>
                  <Link to="/contact-us">
                    Become a Client <ArrowRight className="size-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="font-bold text-xs" asChild>
                  <Link to="/products">Explore Products</Link>
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                [Users, "500+", "Active Corporate & Retail Clients"],
                [ShieldCheck, "100%", "Quality Inspected Shipments"],
                [Truck, "95%+", "On-Time Dispatch Record"],
                [Clock3, "10+", "Years of Packaging Expertise"],
              ].map(([Icon, num, label]) => {
                const StatIcon = Icon as typeof Users;
                return (
                  <div
                    key={label as string}
                    className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/80 bg-card shadow-xs transition-all hover:shadow-md"
                  >
                    <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary mb-3">
                      <StatIcon className="size-6 text-navy" />
                    </div>
                    <strong className="text-2xl sm:text-3xl font-black text-navy">{num as string}</strong>
                    <span className="mt-1 text-xs text-muted-foreground font-medium">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <div className="rounded-3xl bg-navy p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
              <Sparkles className="size-3.5 text-primary" /> Start a Partnership
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Streamline Your Packaging Supply Chain?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Contact our sales specialists for material samples, bulk price sheets, or custom carton specifications.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="uppercase tracking-wider font-extrabold text-xs" asChild>
                <Link to="/contact-us">Request Client Proposal <ArrowRight className="size-4 ml-1" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
