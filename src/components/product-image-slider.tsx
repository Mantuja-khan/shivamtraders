import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import printedCorrugatedBoxImage from "@/assets/products/prinnted_coruugated_box.png";
import brownBOPPTapeImage from "@/assets/products/brown_bope_tap.png";
import plainBoxesImage from "@/assets/products/plain-corrugated-box.jpg";
import customPrintedBoxImage from "@/assets/products/custom_printed_box.png";
import ldpePolybagImage from "@/assets/products/ldpe_polybag.png";
import stretchImage from "@/assets/product-stretch.jpg";
import bubbleRollImage from "@/assets/products/bubble-roll.jpg";
import kraftPaperBagImage from "@/assets/products/kraft-paper-bag.png";
import industrialPaperBagImage from "@/assets/products/industrial-paper-bag.png";
import transparentBOPPTapeImage from "@/assets/products/transperent_bope_tape.png";

export const featuredProductsForSlider = [
  {
    name: "Printed Corrugated Boxes",
    category: "Boxes & Cartons",
    image: printedCorrugatedBoxImage,
  },
  {
    name: "Brown BOPP Packaging Tape",
    category: "Adhesive Tapes",
    image: brownBOPPTapeImage,
  },
  {
    name: "Custom Die-Cut Printed Box",
    category: "Custom Packaging",
    image: customPrintedBoxImage,
  },
  {
    name: "High-Yield Pallet Stretch Film",
    category: "Protective Wrap",
    image: stretchImage,
  },
  {
    name: "Kraft Paper Carry Bags",
    category: "Eco-Friendly Bags",
    image: kraftPaperBagImage,
  },
  {
    name: "Industrial Heavy Duty Paper Bag",
    category: "Industrial Packaging",
    image: industrialPaperBagImage,
  },
  {
    name: "LDPE Clear Polybags",
    category: "Polybags",
    image: ldpePolybagImage,
  },
  {
    name: "Air Bubble Cushioning Roll",
    category: "Protective Packaging",
    image: bubbleRollImage,
  },
  {
    name: "Transparent BOPP Tape",
    category: "Adhesive Tapes",
    image: transparentBOPPTapeImage,
  },
  {
    name: "Standard Plain Corrugated Box",
    category: "Boxes & Cartons",
    image: plainBoxesImage,
  },
];

export function ProductImageSlider({
  badgeText = "Our Products",
  className = "",
}: {
  badgeText?: string;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProductsForSlider.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProductsForSlider.length - 1 : prev - 1
    );
  }, []);

  // Automatic slide interval (every 3 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag handlers for desktop dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const current = featuredProductsForSlider[currentIndex];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-md select-none group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        isDragging.current = false;
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Slider viewport */}
      <div className="relative aspect-[4/3] w-full flex items-center justify-center p-6 bg-gradient-to-b from-[#faf8f5] to-white cursor-grab active:cursor-grabbing">
        {featuredProductsForSlider.map((product, idx) => (
          <div
            key={product.name}
            className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-700 ease-in-out ${
              idx === currentIndex
                ? "opacity-100 scale-100 z-10 translate-x-0"
                : idx < currentIndex
                ? "opacity-0 scale-95 z-0 -translate-x-8 pointer-events-none"
                : "opacity-0 scale-95 z-0 translate-x-8 pointer-events-none"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-navy/90 px-3.5 py-1 text-xs font-extrabold text-white shadow-md backdrop-blur-xs">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span>{badgeText}</span>
        </div>

        {/* Bottom Product Info Glass Bar */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-xl bg-white/95 backdrop-blur-md p-3 px-4 border border-border/80 shadow-lg">
          <div className="min-w-0 pr-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
              {current.category}
            </span>
            <p className="text-xs sm:text-sm font-extrabold text-navy truncate">
              {current.name}
            </p>
          </div>
          <span className="text-[11px] font-extrabold text-muted-foreground shrink-0 bg-muted/60 px-2 py-0.5 rounded-md">
            {currentIndex + 1} / {featuredProductsForSlider.length}
          </span>
        </div>

        {/* Left / Right Arrow Controls */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 size-9 rounded-full bg-white/90 shadow-md border border-border flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer"
          aria-label="Previous product"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 size-9 rounded-full bg-white/90 shadow-md border border-border flex items-center justify-center text-navy hover:bg-primary hover:text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer"
          aria-label="Next product"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Progress / Dot Indicators */}
      <div className="flex items-center justify-center gap-1.5 py-2.5 bg-muted/30 border-t border-border/50">
        {featuredProductsForSlider.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
