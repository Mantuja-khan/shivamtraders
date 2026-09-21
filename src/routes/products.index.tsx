import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Box,
  ChevronDown,
  ChevronRight,
  Disc,
  Heart,
  Layers,
  LayoutGrid,
  Leaf,
  List,
  Package,
  Phone,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import packagingHeroImage from "@/assets/packaging-hero.jpg";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { allProducts, contact, productCategories, type ProductItem } from "@/lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | Shivam Traders Packaging & Supply Solutions" },
      { name: "description", content: "Explore our full catalog of 24 packaging products: boxes, polybags, tapes, stretch film, sanitary products and paper bags." },
      { property: "og:title", content: "Products | Shivam Traders" },
      { property: "og:description", content: "Explore our full catalog of 24 packaging products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || "",
      category: (search.category as string) || "all",
    };
  },
  component: ProductsPage,
});

const getCategoryIcon = (slug: string) => {
  switch (slug) {
    case "all":
      return LayoutGrid;
    case "printed-corrugated-boxes":
      return Box;
    case "polybags":
      return Package;
    case "bopp-tapes":
      return Disc;
    case "stretch-film-and-bubble-roll":
      return Layers;
    case "housekeeping-and-sanitary":
      return Sparkles;
    case "paper-bags":
      return ShoppingBag;
    default:
      return Box;
  }
};

function ProductsPage() {
  const searchParams = Route.useSearch();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.category || "all");
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.q || "");
  const [sortBy, setSortBy] = useState<string>("latest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  // Category title display
  const currentCategoryTitle = useMemo(() => {
    if (selectedCategory === "all") return "All Products";
    const found = productCategories.find((c) => c.slug === selectedCategory);
    return found ? found.title : "All Products";
  }, [selectedCategory]);

  // Filter and sort products
  const displayedProducts = useMemo(() => {
    let list = [...allProducts];

    // Category filter
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.spec && p.spec.toLowerCase().includes(q)) ||
          (p.categoryTitle && p.categoryTitle.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <SiteLayout>
      {/* 1. TOP HERO BANNER */}
      <section className="relative overflow-hidden border-b border-border/70 bg-gradient-to-r from-[#F2EFE7] via-[#F2EFE7]/90 to-[#C8DFDB]/50 py-8 sm:py-12 lg:py-14">
        {/* Background Decorative Image on Right - positioned upwards so products show clearly */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 lg:opacity-40 pointer-events-none mix-blend-multiply overflow-hidden">
          <img
            src={packagingHeroImage}
            alt="Packaging materials"
            className="w-full h-full object-cover object-[center_15%] -translate-y-6 sm:-translate-y-10 scale-105"
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground/60">&gt;</span>
            <span className="text-navy font-bold">Products</span>
            {selectedCategory !== "all" && (
              <>
                <span className="text-muted-foreground/60">&gt;</span>
                <span className="text-primary font-bold">{currentCategoryTitle}</span>
              </>
            )}
          </nav>

          {/* Heading */}
          <div className="mt-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-navy">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base font-semibold text-muted-foreground">
              Quality Packaging Solutions for a Better Tomorrow
            </p>

            {/* Feature Badges Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-navy">
              <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-2xs border border-border backdrop-blur-xs">
                <ShieldCheck className="size-4 text-primary" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-2xs border border-border backdrop-blur-xs">
                <Truck className="size-4 text-primary" />
                <span>Pan India Supply</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-2xs border border-border backdrop-blur-xs">
                <Leaf className="size-4 text-secondary" />
                <span>Eco Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 shadow-2xs border border-border backdrop-blur-xs">
                <Users className="size-4 text-primary" />
                <span>Trusted by 500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN CATALOG CONTAINER */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT SIDEBAR: FIXED / STICKY CATEGORIES ON DESKTOP */}
          <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto z-20">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              {/* Header */}
              <div className="bg-primary px-5 py-4 text-white font-extrabold text-sm uppercase tracking-wider flex items-center gap-2.5">
                <Layers className="size-4 text-accent" />
                <span>Categories</span>
              </div>

              {/* List */}
              <div className="divide-y divide-border/60">
                {/* All Products */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3.5 text-xs font-bold text-left transition-all cursor-pointer tracking-wide ${
                    selectedCategory === "all"
                      ? "border-l-4 border-l-primary bg-primary/10 text-primary shadow-2xs"
                      : "text-navy hover:bg-muted/50 hover:text-primary"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <LayoutGrid className="size-4 shrink-0" />
                    <span>All Products</span>
                  </div>
                  <ChevronRight
                    className={`size-4 shrink-0 ${
                      selectedCategory === "all" ? "text-primary" : "text-muted-foreground/60"
                    }`}
                  />
                </button>

                {/* Individual Categories */}
                {productCategories.map((c) => {
                  const isActive = selectedCategory === c.slug;
                  const IconComponent = getCategoryIcon(c.slug);
                  return (
                    <button
                      key={c.slug}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(c.slug);
                        setSearchQuery("");
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3.5 text-xs font-bold text-left transition-all cursor-pointer tracking-wide ${
                        isActive
                          ? "border-l-4 border-l-primary bg-primary/10 text-primary shadow-2xs"
                          : "text-navy hover:bg-muted/50 hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate pr-2">
                        <IconComponent className="size-4 shrink-0" />
                        <span className="truncate">{c.title}</span>
                      </div>
                      <ChevronRight
                        className={`size-4 shrink-0 ${
                          isActive ? "text-primary" : "text-muted-foreground/60"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Promo Card: Sustainable Packaging Solutions */}
            <div
              onClick={() => {
                setSelectedCategory("paper-bags");
                setSearchQuery("");
              }}
              className="mt-4 rounded-2xl bg-gradient-to-br from-card to-accent/30 p-4 border border-border flex items-center justify-between gap-3 shadow-2xs cursor-pointer hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Leaf className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy leading-tight">
                    Sustainable
                  </p>
                  <p className="text-xs font-bold text-navy leading-tight">
                    Packaging Solutions
                  </p>
                </div>
              </div>
              <div className="size-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-secondary group-hover:scale-105 transition-all">
                <ChevronRight className="size-4" />
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT: PRODUCTS GRID */}
          <main className="flex-1 min-w-0 w-full">
            {/* Top Title & Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                {/* Small Screen Button at Left Side to Open Categories */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMobileDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 font-bold text-xs border-navy/30 text-navy hover:bg-muted shadow-2xs"
                  aria-label="Open Categories Drawer"
                >
                  <SlidersHorizontal className="size-3.5 text-primary" />
                  <span>Categories</span>
                </Button>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
                    {currentCategoryTitle}
                  </h2>
                  {/* Orange underline indicator bar */}
                  <div className="w-12 h-1 bg-primary rounded-full mt-2" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 self-start sm:self-end">
                <span className="text-xs sm:text-sm text-muted-foreground font-semibold">
                  Showing {displayedProducts.length} products
                </span>

                {/* Sort Dropdown */}
                <div className="relative">
                  <div className="flex items-center rounded-xl border border-border/80 bg-card py-1.5 pl-3 pr-8 shadow-2xs">
                    <SlidersHorizontal className="size-3.5 text-primary mr-1.5" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-transparent text-xs sm:text-sm font-bold text-navy focus:outline-none cursor-pointer"
                    >
                      <option value="latest">Sort by: Latest</option>
                      <option value="name-asc">Sort by: Name (A-Z)</option>
                      <option value="name-desc">Sort by: Name (Z-A)</option>
                    </select>
                  </div>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                </div>

                {/* Grid / List View Toggle */}
                <div className="hidden sm:flex items-center gap-1.5 border border-border rounded-xl p-1 bg-card shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-primary text-white shadow-2xs"
                        : "text-muted-foreground hover:text-navy"
                    }`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-primary text-white shadow-2xs"
                        : "text-muted-foreground hover:text-navy"
                    }`}
                    aria-label="List view"
                  >
                    <List className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active search filter tag if any */}
            {searchQuery && (
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-md w-fit">
                <span>Filtering by: &quot;{searchQuery}&quot;</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="hover:text-primary transition-colors text-muted-foreground"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            )}

            {/* Product Grid: Exactly 3 products per row on large screens */}
            {displayedProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 mt-6"
                    : "flex flex-col gap-4 mt-6"
                }
              >
                {displayedProducts.map((product) => (
                  <article
                    key={product.id || product.name}
                    className="group relative flex flex-col justify-between rounded-xl bg-card p-4 shadow-sm border border-border/70 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image Area with pure white background */}
                    <div
                      onClick={() => setActiveModalProduct(product)}
                      className="relative aspect-[4/3] sm:aspect-square w-full rounded-lg bg-white p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/15 rounded-lg">
                        <span className="rounded-full bg-navy/90 px-3 py-1 text-[11px] font-bold text-white opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                          Quick View
                        </span>
                      </div>
                    </div>

                    {/* Product Title & Spec */}
                    <div className="mt-3 w-full text-left flex-1 flex flex-col justify-start">
                      <h3
                        onClick={() => setActiveModalProduct(product)}
                        className="text-sm sm:text-base font-extrabold text-navy transition-colors group-hover:text-primary line-clamp-1 cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2 min-h-[32px]">
                        {product.spec}
                      </p>
                    </div>

                    {/* Animated Direct Inquiry Button */}
                    <div className="mt-3.5 w-full">
                      <Button
                        variant="hero"
                        size="sm"
                        className="w-full text-xs font-bold uppercase tracking-wider py-2.5 h-10 rounded-lg shadow-sm group/btn hover:shadow-md transition-all duration-300 active:scale-[0.98]"
                        asChild
                      >
                        <Link to="/contact-us" search={{ product: product.name }}>
                          <span>INQUIRE NOW</span>
                          <ArrowRight className="size-3.5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-12 rounded-2xl border border-border bg-card p-10 text-center">
                <p className="text-base font-bold text-navy">No products found</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Try clearing your search query or selecting a different category.
                </p>
                <Button
                  variant="hero"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  Show All Products
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* MOBILE SLIDE-OVER CATEGORIES DRAWER */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex bg-black/60 backdrop-blur-xs lg:hidden animate-in fade-in-0"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="relative w-80 max-w-[85vw] bg-card h-full shadow-2xl flex flex-col animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="bg-primary px-5 py-4 text-white flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider">Categories</span>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close categories drawer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Category List */}
            <div className="flex-1 overflow-y-auto divide-y divide-border/60">
              {/* All Products */}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setMobileDrawerOpen(false);
                }}
                className={`w-full flex items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-wide text-left transition-all ${
                  selectedCategory === "all"
                    ? "border-l-4 border-l-primary bg-primary/10 text-primary"
                    : "text-navy hover:bg-muted/50"
                }`}
              >
                <span>All Products</span>
                <ChevronRight
                  className={`size-4 ${
                    selectedCategory === "all" ? "text-primary" : "text-muted-foreground/60"
                  }`}
                />
              </button>

              {/* Individual Categories */}
              {productCategories.map((c) => {
                const isActive = selectedCategory === c.slug;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(c.slug);
                      setSearchQuery("");
                      setMobileDrawerOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-wide text-left transition-all ${
                      isActive
                        ? "border-l-4 border-l-primary bg-primary/10 text-primary"
                        : "text-navy hover:bg-muted/50"
                    }`}
                  >
                    <span className="truncate pr-2">{c.title}</span>
                    <ChevronRight
                      className={`size-4 shrink-0 ${
                        isActive ? "text-primary" : "text-muted-foreground/60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT QUICK VIEW / INQUIRY MODAL */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-navy transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start pt-2">
              <div className="aspect-square w-40 shrink-0 rounded-xl bg-white p-3 border border-border/80 flex items-center justify-center shadow-xs">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex-1 space-y-2 text-center sm:text-left">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  {activeModalProduct.categoryTitle}
                </span>
                <h3 className="text-xl font-extrabold text-navy leading-snug">
                  {activeModalProduct.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {activeModalProduct.spec}
                </p>

                <div className="pt-2 flex flex-col gap-2">
                  <Button variant="hero" size="sm" className="w-full font-bold uppercase tracking-wider text-xs" asChild>
                    <Link
                      to="/contact-us"
                      search={{ product: activeModalProduct.name }}
                      onClick={() => setActiveModalProduct(null)}
                    >
                      Request Bulk Quote <ArrowRight className="size-3.5 ml-1" />
                    </Link>
                  </Button>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border py-2 text-xs font-bold text-navy hover:bg-muted transition-colors"
                  >
                    <Phone className="size-3.5 text-primary" /> Call {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
