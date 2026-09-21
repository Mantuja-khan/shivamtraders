import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { CTASection } from "@/components/cta-section";
import { customerLogos } from "@/lib/customer-logos";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers | Shivam Traders" },
      { name: "description", content: "The businesses and brand partners we proudly supply with quality packaging materials." },
      { property: "og:title", content: "Customers | Shivam Traders" },
      { property: "og:description", content: "The businesses and brand partners we proudly supply with quality packaging materials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Customers"
        title="Trusted by 500+ Businesses"
        copy="Proudly partnering with leading industry brands for reliable packaging and hygiene supplies."
      />

      {/* Customer Logos Showcase - Show only logo images */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {customerLogos.map((item) => (
            <div
              key={item.id}
              className="fade-in-view group aspect-square flex items-center justify-center rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/50"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-24 sm:max-h-28 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 text-center">
          <Button variant="hero" size="lg" className="shadow-md" asChild>
            <Link to="/contact-us">
              Become a Customer <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Bottom CTA Section with Curved Bottom */}
      <CTASection
        eyebrow="Partner With Us"
        title="Join Over 500+ Satisfied Corporate & Retail Clients"
        copy="Experience dependable supply schedules, competitive bulk pricing, and top-tier packaging products."
        primaryText="Get a Partner Quote"
        primaryHref="/contact-us"
        secondaryText="View Product Range"
        secondaryHref="/products"
        curveColor="fill-navy-deep"
      />
    </SiteLayout>
  );
}
