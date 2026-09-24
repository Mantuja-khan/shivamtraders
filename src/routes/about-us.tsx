import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Box, CheckCircle2, Clock3, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { CTASection } from "@/components/cta-section";
import buildingImage from "@/assets/company-building.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Shivam Traders" },
      { name: "description", content: "Shivam Traders supplies durable, cost-effective packaging and hygiene products to businesses across sectors." },
      { property: "og:title", content: "About Us | Shivam Traders" },
      { property: "og:description", content: "Shivam Traders supplies durable, cost-effective packaging and hygiene products to businesses across sectors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: AboutPage,
});
const values = [
  "Wide range of packaging & hygiene products",
  "Competitive pricing on bulk orders",
  "Consistent, tested quality",
  "On-time delivery you can plan around",
  "Dedicated customer support",
  "Eco-friendly and recyclable options",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Shivam Traders" title="Packaging Today for a Better Tomorrow"
        copy="A trusted name in the packaging and supply industry, serving businesses with reliable products and dependable service." />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="fade-in-view relative overflow-hidden rounded-xl">
          <img src={buildingImage} alt="Shivam Traders distribution facility" loading="lazy" width={1200} height={850} className="aspect-[4/3] w-full object-cover" />
          <div className="absolute bottom-5 right-5 rounded-lg bg-navy p-5 text-xl font-extrabold leading-tight text-secondary-foreground">Your<br />Packaging<br />Partner</div>
        </div>
        <div>
          <h2 className="reveal-heading text-2xl font-extrabold text-navy sm:text-3xl">Who We Are</h2>
          <p className="fade-in-view mt-4 leading-7 text-muted-foreground">
            From our distribution facility in Bhiwadi, Rajasthan, Shivam Traders has grown into an ISO 9001:2015 certified family-run supplier of packaging materials, industrial safety goods, and housekeeping consumables since 1998. We keep fast-moving stock ready, quote transparently, and deliver with turn-around times of under 24 hours.
          </p>
          <p className="fade-in-view mt-4 leading-7 text-muted-foreground">
            Our team works closely with manufacturers, retailers, food brands and facility managers to match the right material to each job — no over-specifying, no surprises.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="fade-in-view flex items-start gap-2 text-sm font-semibold text-navy"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{v}</li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="mt-7" asChild>
            <Link to="/contact-us">Talk to Our Team <ArrowRight /></Link></Button>
        </div>
      </section>

      <section className="bg-navy-deep py-7 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 lg:grid-cols-4">
          {[[Users, "500+", "Happy Clients"], [Box, "1000+", "Products Supplied"], [Truck, "95%", "On-Time Delivery"], [Clock3, "10+", "Years of Experience"]].map(([Icon, num, label]) => {
            const StatIcon = Icon as typeof Users;
            return <div key={label as string} className="fade-in-view flex items-center justify-center gap-4"><StatIcon className="size-10 text-secondary-foreground/80" /><p><strong className="block text-2xl">{num as string}</strong><span className="text-xs text-secondary-foreground/75">{label as string}</span></p></div>;
          })}
        </div>
      </section>

      {/* Bottom CTA Section with Curved Bottom */}
      <CTASection
        eyebrow="Work With Us"
        title="Looking for a Long-Term Packaging Partner?"
        copy="Shivam Traders offers transparent bulk pricing, tested product quality, and reliable doorstep dispatch across India."
        primaryText="Request a Quote"
        primaryHref="/contact-us"
        secondaryText="View Products"
        secondaryHref="/products"
        curveColor="fill-navy-deep"
      />
    </SiteLayout>
  );
}
