import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Box,
  CheckCircle2,
  Clock3,
  Headphones,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { allProducts, contact } from "@/lib/site-data";

export const Route = createFileRoute("/contact-us")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      product: (search.product as string) || "",
    };
  },
  head: () => ({
    meta: [
      { title: "Contact Us | Shivam Traders Bhiwadi" },
      {
        name: "description",
        content:
          "Contact Shivam Traders in Bhiwadi, Rajasthan for custom packaging, safety, and sanitation supplies. ISO 9001:2015 certified family-run business established in 1998.",
      },
      { property: "og:title", content: "Contact Us | Shivam Traders" },
      {
        property: "og:description",
        content:
          "Get in touch with Shivam Traders for bulk quotes, custom packaging materials, and fast delivery in under 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const searchParams = Route.useSearch();
  // Form State matching requirements
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(searchParams.product || "");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.product) {
      setSelectedProduct(searchParams.product);
    }
  }, [searchParams.product]);

  // Construct structured message for WhatsApp / Email
  const constructMessage = () => {
    let msg = `*Packaging & Supply Inquiry - Shivam Traders*\n\n`;
    msg += `*Name:* ${name || "Customer"}\n`;
    msg += `*Phone:* ${phone}\n`;
    if (email) msg += `*Email:* ${email}\n`;
    if (city) msg += `*City to Deliver:* ${city}\n`;
    if (selectedProduct) msg += `*Product of Interest:* ${selectedProduct}\n`;
    if (message) msg += `*Message / Requirements:* ${message}\n`;
    return msg;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    const text = encodeURIComponent(constructMessage());
    const cleanPhone = contact.phone.replace(/[^0-9]/g, "");
    window.open(`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${text}`, "_blank");
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    const subject = encodeURIComponent(`Product Inquiry from ${name} - Shivam Traders`);
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      {/* 1. STANDARD PAGE HERO (Matching Other Pages) */}
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Stronger Together"
        copy="Have a question, need a quote, or looking for a custom packaging solution? We're here to help. Get in touch with Shivam Traders and our team will assist you promptly."
      />

      {/* 2. 4 CONTACT INFO CARDS ROW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Call Us */}
          <a
            href={contact.phoneHref}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="size-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call Us</h3>
              <p className="text-sm font-extrabold text-navy mt-0.5">{contact.phone}</p>
              <p className="text-[11px] text-muted-foreground">Mon – Sat, 9:00 AM – 6:00 PM</p>
            </div>
          </a>

          {/* Card 2: Email Us */}
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="size-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Us</h3>
              <p className="text-sm font-extrabold text-navy mt-0.5 truncate max-w-[150px] sm:max-w-none">{contact.email}</p>
              <p className="text-[11px] text-muted-foreground">We reply within 24 hours</p>
            </div>
          </a>

          {/* Card 3: Visit Us */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Visit Us</h3>
              <p className="text-xs font-bold text-navy mt-0.5 leading-snug">
                132 KVA Power House, Neelam Chowk,
                <br />
                Near BB Mall, Bhiwadi - 301019
              </p>
            </div>
          </div>

          {/* Card 4: Need Help? */}
          <a
            href={`https://api.whatsapp.com/send?phone=${contact.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Headphones className="size-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Need Help?</h3>
              <p className="text-sm font-extrabold text-navy mt-0.5">Talk to Our Team</p>
              <span className="text-[11px] font-bold text-primary flex items-center gap-1 group-hover:underline">
                Chat on WhatsApp &rarr;
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* 3. MAIN 2-COLUMN SECTION: FORM (LEFT) & LOCATION MAP (RIGHT) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* LEFT COLUMN: SEND US A MESSAGE FORM */}
          <div className="lg:col-span-6 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy">Send Us a Message</h2>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitted && (
              <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-900 flex items-center gap-3">
                <CheckCircle2 className="size-5 text-green-600 shrink-0" />
                <p className="text-xs font-bold">Thank you! Your inquiry has been sent to Shivam Traders.</p>
              </div>
            )}

            <form onSubmit={handleWhatsAppSend} className="mt-6 space-y-4">
              {/* Row 1: Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & City to Deliver */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                    City to Deliver <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bhiwadi, Delhi NCR, Jaipur"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Product Dropdown (Requested: Easy to pick product by name) */}
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                  Select Product (Optional)
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-xs sm:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer text-navy"
                >
                  <option value="">-- Choose a Product from Catalog --</option>
                  {allProducts.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} ({p.categoryTitle || "Packaging"})
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5 uppercase tracking-wide">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message or custom requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background p-3.5 text-xs sm:text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto font-extrabold uppercase tracking-wider text-xs shadow-md gap-2"
                >
                  <MessageCircle className="size-4" /> Send Message via WhatsApp
                </Button>
                <Button
                  type="button"
                  onClick={handleEmailSubmit}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-bold uppercase tracking-wider text-xs border-navy/30 text-navy hover:bg-muted gap-2"
                >
                  <Send className="size-4 text-primary" /> Send via Email
                </Button>
              </div>

              {/* Security Privacy Notice */}
              <div className="pt-2 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <Lock className="size-3.5 text-muted-foreground/70" />
                <span>We respect your privacy. Your information is safe with us.</span>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: OUR LOCATION & MAP (Matching Design Image) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy">Our Location</h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Visit our office or warehouse to explore our products and discuss your requirements.
              </p>

              {/* Interactive Google Map Embed */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-border/80 aspect-[16/9] w-full bg-muted shadow-2xs relative">
                <iframe
                  title="Shivam Traders Bhiwadi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14054.436928811776!2d76.8407421!3d28.2104523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d30c000000001%3A0x1c67d12f6c888e0!2sBhiwadi%2C%20Rajasthan%20301019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* 2 Info Cards below map */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Address Box */}
                <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary mt-0.5">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy">Address</h3>
                    <p className="text-xs font-semibold text-navy/80 mt-1 leading-relaxed">
                      <strong>Shivam Traders</strong>
                      <br />
                      132 KVA Power House, Neelam Chowk,
                      <br />
                      Near BB Mall, Bhiwadi, Rajasthan - 301019
                    </p>
                  </div>
                </div>

                {/* Business Hours Box */}
                <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary mt-0.5">
                    <Clock3 className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy">Business Hours</h3>
                    <p className="text-xs font-semibold text-navy/80 mt-1 leading-relaxed">
                      Monday – Saturday
                      <br />
                      <span className="text-primary font-bold">9:00 AM – 6:00 PM</span>
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4 FEATURE BADGES STRIP */}
      <section className="border-t border-border/70 bg-card py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* 1. Fast Response */}
            <div className="flex flex-col items-center">
              <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-3">
                <Truck className="size-6" />
              </div>
              <h3 className="text-sm font-extrabold text-navy uppercase tracking-wide">Fast Response</h3>
              <p className="text-xs text-muted-foreground mt-1">Turn Around Time &lt;24 hours</p>
            </div>

            {/* 2. Reliable Service */}
            <div className="flex flex-col items-center">
              <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-3">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-sm font-extrabold text-navy uppercase tracking-wide">Reliable Service</h3>
              <p className="text-xs text-muted-foreground mt-1">ISO 9001:2015 Certified</p>
            </div>

            {/* 3. Wide Product Range */}
            <div className="flex flex-col items-center">
              <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-3">
                <Box className="size-6" />
              </div>
              <h3 className="text-sm font-extrabold text-navy uppercase tracking-wide">Wide Product Range</h3>
              <p className="text-xs text-muted-foreground mt-1">All packaging &amp; safety under one roof</p>
            </div>

            {/* 4. Customer Focused */}
            <div className="flex flex-col items-center">
              <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary mb-3">
                <Users className="size-6" />
              </div>
              <h3 className="text-sm font-extrabold text-navy uppercase tracking-wide">Customer Focused</h3>
              <p className="text-xs text-muted-foreground mt-1">Certified family run since 1998</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA SECTION */}
      <CTASection
        eyebrow="Direct Factory Supply"
        title="Looking for Factory Direct Pricing &amp; Bulk Orders?"
        copy="Contact our sales team in Bhiwadi for material samples, custom box sizes, or annual rate contracts."
        primaryText="Call Us Now"
        primaryHref={contact.phoneHref}
        secondaryText="Explore Products"
        secondaryHref="/products"
        curveColor="fill-navy-deep"
      />
    </SiteLayout>
  );
}
