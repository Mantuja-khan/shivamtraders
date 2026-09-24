import boxesImage from "@/assets/product-boxes.jpg";
import polybagsImage from "@/assets/product-polybags.jpg";
import tapesImage from "@/assets/product-tapes.jpg";
import stretchImage from "@/assets/product-stretch.jpg";
import cleaningImage from "@/assets/product-cleaning.jpg";
import bagsImage from "@/assets/product-bags.jpg";

import plainBoxesImage from "@/assets/products/plain-corrugated-box.jpg";
import printedCorrugatedBoxImage from "@/assets/products/prinnted_coruugated_box.png";
import customPrintedBoxImage from "@/assets/products/custom_printed_box.png";
import cornerProtectorsImage from "@/assets/products/corner_protector.png";
import pizzaBoxImage from "@/assets/products/pizza-box.jpg";
import ldpePolybagImage from "@/assets/products/ldpe_polybag.png";
import courierPolybagImage from "@/assets/products/courier-polybag.jpg";
import garbageBagsImage from "@/assets/products/garbage-bags.jpg";
import zipperPolybagImage from "@/assets/products/zipper-polybag.jpg";
import coloredTapeImage from "@/assets/products/colored-tape.jpg";
import bubbleRollImage from "@/assets/products/bubble-roll.jpg";
import cleaningChemicalsImage from "@/assets/products/cleaning-chemicals.jpg";
import mopSetImage from "@/assets/products/mop-set.jpg";
import whitePaperBagImage from "@/assets/products/white-paper-bag.jpg";
import dcutPaperBagImage from "@/assets/products/dcut-paper-bag.jpg";
import kraftPaperBagImage from "@/assets/products/kraft-paper-bag.png";
import kraftGroceryBagImage from "@/assets/products/kraft-grocery-bag.png";
import industrialPaperBagImage from "@/assets/products/industrial-paper-bag.png";
import industrialKraftBagImage from "@/assets/products/industrial-kraft-bag.png";
import corrugatedSheetsImage from "@/assets/products/corrugated-sheets.jpg";
import foamRollImage from "@/assets/products/foam-roll.jpg";
import brownBOPPTapeImage from "@/assets/products/brown_bope_tap.png";
import transparentBOPPTapeImage from "@/assets/products/transperent_bope_tape.png";
import printedBOPPTapeImage from "@/assets/products/printed_bope_tape.png";
import ppStrappingRollImage from "@/assets/products/pp_steping_roll.webp";
import kraftFoodContainerLidImage from "@/assets/products/kraft-food-container-lid.jpg";
import kraftFoodTrayImage from "@/assets/products/kraft-food-tray.jpg";
import kraftRoundBowlImage from "@/assets/products/kraft-round-bowl.jpg";
import woodenRoundSticksImage from "@/assets/products/wooden-round-sticks.jpg";
import woodenIceCreamSticksImage from "@/assets/products/wooden-ice-cream-sticks.jpg";
import woodenForksCutleryImage from "@/assets/products/wooden-forks-cutlery.jpg";

import {
  Building2, Factory, HeartPulse, ShoppingCart, Truck, Utensils, Warehouse,
} from "lucide-react";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Products", to: "/products" },
  { label: "Clients", to: "/clients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact-us" },
] as const;

export type ProductItem = {
  id?: string;
  name: string;
  spec: string;
  image: string;
  categorySlug?: string;
  categoryTitle?: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  text: string;
  image: string;
  intro: string;
  items: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "printed-corrugated-boxes",
    title: "Printed Corrugated Boxes",
    text: "Strong, durable and customizable boxes for your brand.",
    image: printedCorrugatedBoxImage,
    intro:
      "Custom printed and plain corrugated boxes in 3-ply, 5-ply and 7-ply grades, made to your exact dimensions.",
    items: [
      {
        id: "box-printed",
        name: "Printed Corrugated Box",
        spec: "Custom branded multi-colour printed cartons.",
        image: printedCorrugatedBoxImage,
        categorySlug: "printed-corrugated-boxes",
        categoryTitle: "Printed Corrugated Boxes",
      },
      {
        id: "box-plain",
        name: "Plain Corrugated Box",
        spec: "Standard 3-ply and 5-ply shipping boxes.",
        image: plainBoxesImage,
        categorySlug: "printed-corrugated-boxes",
        categoryTitle: "Printed Corrugated Boxes",
      },
      {
        id: "box-custom",
        name: "Custom Printed Box",
        spec: "Die-cut neatly printed packaging boxes.",
        image: customPrintedBoxImage,
        categorySlug: "printed-corrugated-boxes",
        categoryTitle: "Printed Corrugated Boxes",
      },
      {
        id: "box-pizza",
        name: "Pizza Box",
        spec: "Food-grade board with grease-resistant lining.",
        image: pizzaBoxImage,
        categorySlug: "printed-corrugated-boxes",
        categoryTitle: "Printed Corrugated Boxes",
      },
      {
        id: "sheet-corrugated",
        name: "Corrugated Sheets",
        spec: "Multi-layer cushioning and partition corrugated boards.",
        image: corrugatedSheetsImage,
        categorySlug: "printed-corrugated-boxes",
        categoryTitle: "Printed Corrugated Boxes",
      },
      {
        id: "corner-protectors",
        name: "Corner Protectors",
        spec: "Rigid V-shaped edge and angle guards for secure strapping.",
        image: cornerProtectorsImage,
        categorySlug: "printed-corrugated-boxes",
        categoryTitle: "Printed Corrugated Boxes",
      },
    ],
  },
  {
    slug: "polybags",
    title: "Polybags",
    text: "Self adhesive polythene, grip seal bags, clean zip lock, and LDPE bags in all sizes.",
    image: ldpePolybagImage,
    intro: "High-grade polybags including self adhesive polythene, grip seal bags, clean polythene zip lock, and LDPE bags in all sizes.",
    items: [
      {
        id: "poly-ldpe",
        name: "LDPE Polybag",
        spec: "Clear, flexible bags available in all custom and standard sizes.",
        image: ldpePolybagImage,
        categorySlug: "polybags",
        categoryTitle: "Polybags",
      },
      {
        id: "poly-courier",
        name: "Courier Polybag",
        spec: "Tamper-proof with self-adhesive flap and POD pocket.",
        image: courierPolybagImage,
        categorySlug: "polybags",
        categoryTitle: "Polybags",
      },
      {
        id: "poly-garbage",
        name: "Garbage Bags",
        spec: "Durable roll of tear-resistant black waste bags.",
        image: garbageBagsImage,
        categorySlug: "polybags",
        categoryTitle: "Polybags",
      },
      {
        id: "poly-zipper",
        name: "Zipper Polybag",
        spec: "Crystal clear clean polythene zip lock pouch.",
        image: zipperPolybagImage,
        categorySlug: "polybags",
        categoryTitle: "Polybags",
      },
    ],
  },
  {
    slug: "bopp-tapes",
    title: "BOPP Tapes",
    text: "Strong adhesion tapes for secure packaging.",
    image: brownBOPPTapeImage,
    intro: "Self-adhesive tapes for carton sealing, bundling, masking and floor marking.",
    items: [
      {
        id: "tape-transparent",
        name: "Transparent BOPP Tape",
        spec: "High clarity adhesive tape in 48 mm and 72 mm widths.",
        image: transparentBOPPTapeImage,
        categorySlug: "bopp-tapes",
        categoryTitle: "BOPP Tapes",
      },
      {
        id: "tape-brown",
        name: "Brown BOPP Tape",
        spec: "High-tack carton sealing tape for heavy boxes.",
        image: brownBOPPTapeImage,
        categorySlug: "bopp-tapes",
        categoryTitle: "BOPP Tapes",
      },
      {
        id: "tape-printed",
        name: "Printed BOPP Tape",
        spec: "Fragile Handle With Care and custom branded packaging tape.",
        image: printedBOPPTapeImage,
        categorySlug: "bopp-tapes",
        categoryTitle: "BOPP Tapes",
      },
      {
        id: "tape-colored",
        name: "Colored Tape",
        spec: "Multi-color identification PVC and BOPP tape.",
        image: coloredTapeImage,
        categorySlug: "bopp-tapes",
        categoryTitle: "BOPP Tapes",
      },
      {
        id: "roll-strapping",
        name: "PP Strapping Roll",
        spec: "Durable embossed polypropylene strapping for cartons and pallets.",
        image: ppStrappingRollImage,
        categorySlug: "bopp-tapes",
        categoryTitle: "BOPP Tapes",
      },
    ],
  },
  {
    slug: "stretch-film-and-bubble-roll",
    title: "Stretch Film & Bubble Roll",
    text: "Protective packaging for safe and damage-free delivery.",
    image: stretchImage,
    intro: "Wrapping and cushioning materials that keep goods intact through transit.",
    items: [
      {
        id: "stretch-film",
        name: "Stretch Film",
        spec: "23 micron high-yield pallet stretch wrap in 500 mm rolls.",
        image: stretchImage,
        categorySlug: "stretch-film-and-bubble-roll",
        categoryTitle: "Stretch Film & Bubble Roll",
      },
      {
        id: "bubble-roll",
        name: "Bubble Roll",
        spec: "Air bubble wrap roll for cushioning fragile shipments.",
        image: bubbleRollImage,
        categorySlug: "stretch-film-and-bubble-roll",
        categoryTitle: "Stretch Film & Bubble Roll",
      },
      {
        id: "roll-foam",
        name: "Foam Roll",
        spec: "White expanded polyethylene EPE foam protective sheet.",
        image: foamRollImage,
        categorySlug: "stretch-film-and-bubble-roll",
        categoryTitle: "Stretch Film & Bubble Roll",
      },
    ],
  },
  {
    slug: "housekeeping-and-sanitary",
    title: "House Keeping & Sanitary",
    text: "Complete range of cleaning and hygiene products.",
    image: cleaningChemicalsImage,
    intro: "Everything your facility team needs to keep premises clean, safe and hygienic.",
    items: [
      {
        id: "clean-chemicals",
        name: "Cleaning Chemicals",
        spec: "Disinfectants, multi-surface cleaners & detergents.",
        image: cleaningChemicalsImage,
        categorySlug: "housekeeping-and-sanitary",
        categoryTitle: "House Keeping & Sanitary",
      },
      {
        id: "clean-mop",
        name: "Mop Set",
        spec: "Floor cleaning mops, wipers and dustpan sets.",
        image: mopSetImage,
        categorySlug: "housekeeping-and-sanitary",
        categoryTitle: "House Keeping & Sanitary",
      },
    ],
  },
  {
    slug: "paper-bags",
    title: "Paper Bags",
    text: "Eco-friendly and stylish paper bags for all business needs.",
    image: kraftPaperBagImage,
    intro: "Recyclable kraft and industrial paper bags for retail, food service, groceries, and industrial supply.",
    items: [
      {
        id: "bag-kraft",
        name: "Kraft Paper Bag",
        spec: "Durable brown kraft paper bags with twisted handles & flat-fold stock.",
        image: kraftPaperBagImage,
        categorySlug: "paper-bags",
        categoryTitle: "Paper Bags",
      },
      // {
      //   id: "bag-kraft-grocery",
      //   name: "Kraft Grocery Paper Bag",
      //   spec: "Eco-friendly heavy bottom brown grocery & food packaging paper bags.",
      //   image: kraftGroceryBagImage,
      //   categorySlug: "paper-bags",
      //   categoryTitle: "Paper Bags",
      // },
      {
        id: "bag-industrial",
        name: "Industrial Paper Bag",
        spec: "Heavy-duty industrial brown paper carry bag with reinforced flat handles.",
        image: industrialPaperBagImage,
        categorySlug: "paper-bags",
        categoryTitle: "Paper Bags",
      },
      {
        id: "bag-industrial-heavy",
        name: "Industrial Packaging Bag",
        spec: "High-strength brown kraft paper bags for bulk industrial parts & dispatch.",
        image: industrialKraftBagImage,
        categorySlug: "paper-bags",
        categoryTitle: "Paper Bags",
      },
      {
        id: "bag-white",
        name: "White Paper Bag",
        spec: "Premium bleached white shopping bags with rope handles.",
        image: whitePaperBagImage,
        categorySlug: "paper-bags",
        categoryTitle: "Paper Bags",
      },
      {
        id: "bag-dcut",
        name: "D Cut Paper Bag",
        spec: "Modern punch handle carry bags for retail outlets.",
        image: dcutPaperBagImage,
        categorySlug: "paper-bags",
        categoryTitle: "Paper Bags",
      },
    ],
  },
  {
    slug: "bio-products",
    title: "Bio Products",
    text: "Eco-friendly biodegradable food containers, bowls, trays and birchwood products.",
    image: kraftFoodContainerLidImage,
    intro: "100% certified eco-friendly, biodegradable and compostable packaging products designed for modern businesses, food service, takeaway and sustainable living.",
    items: [
      {
        id: "bio-kraft-container-lid",
        name: "Kraft Meal Box with Lid",
        spec: "Food-grade leak-resistant kraft meal container with clear snap-fit lid.",
        image: kraftFoodContainerLidImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
      {
        id: "bio-kraft-food-tray",
        name: "Octagonal Kraft Food Trays",
        spec: "Stackable eco-friendly kraft paper food & salad serving boats.",
        image: kraftFoodTrayImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
      {
        id: "bio-round-kraft-bowl",
        name: "Round Kraft Salad & Soup Bowl",
        spec: "Greaseproof round paper bowls with airtight transparent lids.",
        image: kraftRoundBowlImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
      {
        id: "bio-wooden-round-sticks",
        name: "Birchwood Round Sticks & Skewers",
        spec: "100% natural, smooth and splinter-free wooden sticks for food & crafts.",
        image: woodenRoundSticksImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
      {
        id: "bio-wooden-icecream-sticks",
        name: "Wooden Ice Cream & Cutlery Sticks",
        spec: "Eco-friendly biodegradable birchwood popsicle & dessert sticks.",
        image: woodenIceCreamSticksImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
      {
        id: "bio-wooden-forks",
        name: "Birchwood Cutlery Forks",
        spec: "Smooth biodegradable disposable wooden dinner & salad forks.",
        image: woodenForksCutleryImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
      {
        id: "bio-compostable-bags",
        name: "Eco Kraft Shopping Bags",
        spec: "High tear strength natural recyclable kraft paper carry bags.",
        image: kraftPaperBagImage,
        categorySlug: "bio-products",
        categoryTitle: "Bio Products",
      },
    ],
  },
];

// Exact 24 products in the order shown in the design image (4 rows x 6 columns)
export const allProducts: ProductItem[] = [
  // Row 1
  {
    id: "box-printed",
    name: "Printed Corrugated Box",
    spec: "Custom branded multi-colour printed cartons.",
    image: printedCorrugatedBoxImage,
    categorySlug: "printed-corrugated-boxes",
    categoryTitle: "Printed Corrugated Boxes",
  },
  {
    id: "box-plain",
    name: "Plain Corrugated Box",
    spec: "Standard 3-ply and 5-ply shipping boxes.",
    image: plainBoxesImage,
    categorySlug: "printed-corrugated-boxes",
    categoryTitle: "Printed Corrugated Boxes",
  },
  {
    id: "box-custom",
    name: "Custom Printed Box",
    spec: "Die-cut neatly printed packaging boxes.",
    image: customPrintedBoxImage,
    categorySlug: "printed-corrugated-boxes",
    categoryTitle: "Printed Corrugated Boxes",
  },
  {
    id: "box-pizza",
    name: "Pizza Box",
    spec: "Food-grade board with grease-resistant lining.",
    image: pizzaBoxImage,
    categorySlug: "printed-corrugated-boxes",
    categoryTitle: "Printed Corrugated Boxes",
  },
  {
    id: "poly-ldpe",
    name: "LDPE Polybag",
    spec: "Clear, flexible bags available in all custom and standard sizes.",
    image: ldpePolybagImage,
    categorySlug: "polybags",
    categoryTitle: "Polybags",
  },
  {
    id: "poly-courier",
    name: "Courier Polybag",
    spec: "Tamper-proof with self-adhesive flap and POD pocket.",
    image: courierPolybagImage,
    categorySlug: "polybags",
    categoryTitle: "Polybags",
  },
  // Row 2
  {
    id: "poly-garbage",
    name: "Garbage Bags",
    spec: "Durable roll of tear-resistant black waste bags.",
    image: garbageBagsImage,
    categorySlug: "polybags",
    categoryTitle: "Polybags",
  },
  {
    id: "poly-zipper",
    name: "Zipper Polybag",
    spec: "Crystal clear clean polythene zip lock pouch.",
    image: zipperPolybagImage,
    categorySlug: "polybags",
    categoryTitle: "Polybags",
  },
  {
    id: "tape-transparent",
    name: "Transparent BOPP Tape",
    spec: "High clarity adhesive tape in 48 mm and 72 mm widths.",
    image: transparentBOPPTapeImage,
    categorySlug: "bopp-tapes",
    categoryTitle: "BOPP Tapes",
  },
  {
    id: "tape-brown",
    name: "Brown BOPP Tape",
    spec: "High-tack carton sealing tape for heavy boxes.",
    image: brownBOPPTapeImage,
    categorySlug: "bopp-tapes",
    categoryTitle: "BOPP Tapes",
  },
  {
    id: "tape-printed",
    name: "Printed BOPP Tape",
    spec: "Fragile Handle With Care and custom branded packaging tape.",
    image: printedBOPPTapeImage,
    categorySlug: "bopp-tapes",
    categoryTitle: "BOPP Tapes",
  },
  {
    id: "tape-colored",
    name: "Colored Tape",
    spec: "Multi-color identification PVC and BOPP tape.",
    image: coloredTapeImage,
    categorySlug: "bopp-tapes",
    categoryTitle: "BOPP Tapes",
  },
  // Row 3
  {
    id: "stretch-film",
    name: "Stretch Film",
    spec: "23 micron high-yield pallet stretch wrap in 500 mm rolls.",
    image: stretchImage,
    categorySlug: "stretch-film-and-bubble-roll",
    categoryTitle: "Stretch Film & Bubble Roll",
  },
  {
    id: "bubble-roll",
    name: "Bubble Roll",
    spec: "Air bubble wrap roll for cushioning fragile shipments.",
    image: bubbleRollImage,
    categorySlug: "stretch-film-and-bubble-roll",
    categoryTitle: "Stretch Film & Bubble Roll",
  },
  {
    id: "clean-chemicals",
    name: "Cleaning Chemicals",
    spec: "Disinfectants, multi-surface cleaners & detergents.",
    image: cleaningChemicalsImage,
    categorySlug: "housekeeping-and-sanitary",
    categoryTitle: "House Keeping & Sanitary",
  },
  {
    id: "clean-mop",
    name: "Mop Set",
    spec: "Floor cleaning mops, wipers and dustpan sets.",
    image: mopSetImage,
    categorySlug: "housekeeping-and-sanitary",
    categoryTitle: "House Keeping & Sanitary",
  },
  {
    id: "bag-kraft",
    name: "Kraft Paper Bag",
    spec: "Durable brown kraft paper bags with twisted handles & flat-fold stock.",
    image: kraftPaperBagImage,
    categorySlug: "paper-bags",
    categoryTitle: "Paper Bags",
  },
  // {
  //   id: "bag-kraft-grocery",
  //   name: "Kraft Grocery Paper Bag",
  //   spec: "Eco-friendly heavy bottom brown grocery & food packaging paper bags.",
  //   image: kraftGroceryBagImage,
  //   categorySlug: "paper-bags",
  //   categoryTitle: "Paper Bags",
  // },
  // Row 4
  {
    id: "bag-industrial",
    name: "Industrial Paper Bag",
    spec: "Heavy-duty industrial brown paper carry bag with reinforced flat handles.",
    image: industrialPaperBagImage,
    categorySlug: "paper-bags",
    categoryTitle: "Paper Bags",
  },
  // {
  //   id: "bag-industrial-heavy",
  //   name: "Industrial Packaging Bag",
  //   spec: "High-strength brown kraft paper bags for bulk industrial parts & dispatch.",
  //   image: industrialKraftBagImage,
  //   categorySlug: "paper-bags",
  //   categoryTitle: "Paper Bags",
  // },
  {
    id: "sheet-corrugated",
    name: "Corrugated Sheets",
    spec: "Multi-layer cushioning and partition corrugated boards.",
    image: corrugatedSheetsImage,
    categorySlug: "printed-corrugated-boxes",
    categoryTitle: "Printed Corrugated Boxes",
  },
  {
    id: "roll-foam",
    name: "Foam Roll",
    spec: "White expanded polyethylene EPE foam protective sheet.",
    image: foamRollImage,
    categorySlug: "stretch-film-and-bubble-roll",
    categoryTitle: "Stretch Film & Bubble Roll",
  },
  {
    id: "corner-protectors",
    name: "Corner Protectors",
    spec: "Rigid V-shaped edge and angle guards for secure strapping.",
    image: cornerProtectorsImage,
    categorySlug: "printed-corrugated-boxes",
    categoryTitle: "Printed Corrugated Boxes",
  },
  {
    id: "roll-strapping",
    name: "PP Strapping Roll",
    spec: "Durable embossed polypropylene strapping for cartons and pallets.",
    image: ppStrappingRollImage,
    categorySlug: "bopp-tapes",
    categoryTitle: "BOPP Tapes",
  },
  // Bio Products
  {
    id: "bio-kraft-container-lid",
    name: "Kraft Meal Box with Lid",
    spec: "Food-grade leak-resistant kraft meal container with clear snap-fit lid.",
    image: kraftFoodContainerLidImage,
    categorySlug: "bio-products",
    categoryTitle: "Bio Products",
  },
  {
    id: "bio-kraft-food-tray",
    name: "Octagonal Kraft Food Trays",
    spec: "Stackable eco-friendly kraft paper food & salad serving boats.",
    image: kraftFoodTrayImage,
    categorySlug: "bio-products",
    categoryTitle: "Bio Products",
  },
  {
    id: "bio-round-kraft-bowl",
    name: "Round Kraft Salad & Soup Bowl",
    spec: "Greaseproof round paper bowls with airtight transparent lids.",
    image: kraftRoundBowlImage,
    categorySlug: "bio-products",
    categoryTitle: "Bio Products",
  },
  {
    id: "bio-wooden-round-sticks",
    name: "Birchwood Round Sticks & Skewers",
    spec: "100% natural, smooth and splinter-free wooden sticks for food & crafts.",
    image: woodenRoundSticksImage,
    categorySlug: "bio-products",
    categoryTitle: "Bio Products",
  },
  {
    id: "bio-wooden-icecream-sticks",
    name: "Wooden Ice Cream & Cutlery Sticks",
    spec: "Eco-friendly biodegradable birchwood popsicle & dessert sticks.",
    image: woodenIceCreamSticksImage,
    categorySlug: "bio-products",
    categoryTitle: "Bio Products",
  },
  {
    id: "bio-wooden-forks",
    name: "Birchwood Cutlery Forks",
    spec: "Smooth biodegradable disposable wooden dinner & salad forks.",
    image: woodenForksCutleryImage,
    categorySlug: "bio-products",
    categoryTitle: "Bio Products",
  },
];

export const industries = [
  { name: "Retail & FMCG", Icon: ShoppingCart, text: "Shelf-ready cartons, carry bags and printed tapes." },
  { name: "Manufacturing", Icon: Factory, text: "Bulk stretch film, strapping and heavy-duty boxes." },
  { name: "Logistics & Transport", Icon: Truck, text: "Courier bags, pallet wrap and protective cushioning." },
  { name: "Food & Beverage", Icon: Utensils, text: "Food-grade boxes, pouches and hygiene supplies." },
  { name: "Healthcare", Icon: HeartPulse, text: "Sanitary consumables, gloves and safe packaging." },
  { name: "Corporate & Offices", Icon: Building2, text: "Housekeeping, tissue and pantry essentials." },
  { name: "Residential & Others", Icon: Warehouse, text: "Cleaning products and moving-day packaging." },
];

export const contact = {
  phone: "+91 70153 23691",
  phoneHref: "tel:+917015323691",
  email: "info@shivamtraders.com",
  address: [
    "132 KVA Power House, Neelam Chowk,",
    "Near BB Mall, Bhiwadi, Rajasthan - 301019",
  ],
  established: "1998",
  iso: "ISO 9001:2015",
  location: "Bhiwadi, Rajasthan",
  turnaroundTime: "<24 hours",
};

export interface BioPackagingItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export const bioPackagingItems: BioPackagingItem[] = [
  {
    id: "bio-kraft-container-lid",
    title: "Kraft Meal Box with Lid",
    desc: "Food-grade leak-resistant kraft meal container with clear snap-fit lid.",
    image: kraftFoodContainerLidImage,
  },
  {
    id: "bio-kraft-food-tray",
    title: "Octagonal Kraft Food Trays",
    desc: "Stackable eco-friendly kraft paper food & salad serving boats.",
    image: kraftFoodTrayImage,
  },
  {
    id: "bio-round-kraft-bowl",
    title: "Round Kraft Salad & Soup Bowl",
    desc: "Greaseproof round paper bowls with airtight transparent lids.",
    image: kraftRoundBowlImage,
  },
  {
    id: "bio-wooden-round-sticks",
    title: "Birchwood Round Sticks & Skewers",
    desc: "100% natural, smooth and splinter-free wooden sticks for food & crafts.",
    image: woodenRoundSticksImage,
  },
  {
    id: "bio-wooden-icecream-sticks",
    title: "Wooden Ice Cream & Cutlery Sticks",
    desc: "Eco-friendly biodegradable birchwood popsicle & dessert sticks.",
    image: woodenIceCreamSticksImage,
  },
  {
    id: "bio-wooden-forks",
    title: "Birchwood Cutlery Forks",
    desc: "Smooth biodegradable disposable wooden dinner & salad forks.",
    image: woodenForksCutleryImage,
  },
  {
    id: "bio-compostable-bags",
    title: "Eco Kraft Shopping Bags",
    desc: "High tear strength natural recyclable kraft paper carry bags.",
    image: kraftPaperBagImage,
  },
];

