import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { CTASection } from "@/components/cta-section";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Shivam Traders" },
      { name: "description", content: "Packaging and hygiene supplies for retail, manufacturing, logistics, food, healthcare and corporate facilities." },
      { property: "og:title", content: "Industries We Serve | Shivam Traders" },
      { property: "og:description", content: "Packaging and hygiene supplies for retail, manufacturing, logistics, food, healthcare and corporate facilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries we serve"
        title="Packaging Solutions for Every Industry"
        copy="We tailor material, size and print to the way each sector moves its goods."
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ name, Icon, text }) => (
            <article key={name} className="fade-in-view rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Icon className="size-10 text-navy" />
              <h2 className="mt-4 text-lg font-extrabold text-navy">{name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact-us">Discuss Your Requirement <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      {/* Bottom CTA Section with Curved Bottom */}
      <CTASection
        eyebrow="Industry-Specific Packaging"
        title="Need Customized Material for Your Production Line?"
        copy="We provide tailored carton strengths, barrier films, and certified food-grade packaging."
        primaryText="Speak to a Specialist"
        primaryHref="/contact-us"
        secondaryText="View Products"
        secondaryHref="/products"
        curveColor="fill-navy-deep"
      />
    </SiteLayout>
  );
}
