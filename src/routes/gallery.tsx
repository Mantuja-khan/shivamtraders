import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { CTASection } from "@/components/cta-section";
import { productCategories } from "@/lib/site-data";
import heroImage from "@/assets/packaging-hero.jpg";
import buildingImage from "@/assets/company-building.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Shivam Traders Packaging Products" },
      { name: "description", content: "A look at our packaging materials, hygiene supplies and distribution facility in Bhiwadi." },
      { property: "og:title", content: "Gallery | Shivam Traders Packaging Products" },
      { property: "og:description", content: "A look at our packaging materials, hygiene supplies and distribution facility in Bhiwadi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const shots = [
  { src: heroImage, alt: "Packaging materials arranged in the warehouse" },
  ...productCategories.map((c) => ({ src: c.image, alt: c.title })),
  { src: buildingImage, alt: "Shivam Traders distribution facility" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Inside Our Range &amp; Facility"
        copy="Real product shots and a glimpse of the warehouse that keeps your orders moving."
      />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <figure key={i} className="fade-in-view overflow-hidden rounded-xl border border-border shadow-sm">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">Explore Products <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      {/* Bottom CTA Section with Curved Bottom */}
      <CTASection
        eyebrow="Custom Packaging Inquiries"
        title="Need Custom Samples or Material Testing?"
        copy="Contact our technical sales team for sample packs, specification sheets, and trial batch dispatches."
        primaryText="Request Free Samples"
        primaryHref="/contact-us"
        secondaryText="View Products"
        secondaryHref="/products"
        curveColor="fill-navy-deep"
      />
    </SiteLayout>
  );
}
