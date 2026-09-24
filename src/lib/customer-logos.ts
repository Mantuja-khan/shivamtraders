import logo1 from "@/assets/logos/bellavita_logo.png";
import logo3 from "@/assets/logos/emiza_logo.png";
import logo4 from "@/assets/logos/gillete_logo.png";
import logo5 from "@/assets/logos/gnc_logo.png";
import logo6 from "@/assets/logos/mks_logo.png";
import logoPatanjali from "@/assets/logos/patanjali.png";
import logolote from "@/assets/logos/lote_chemical.png"

export interface CustomerLogo {
  id: number;
  src: string;
  alt: string;
}

export const customerLogos: CustomerLogo[] = [
  { id: 1, src: logo1, alt: "Client Partner 1" },
  { id: 3, src: logo3, alt: "Client Partner 3" },
  { id: 4, src: logo4, alt: "Client Partner 4" },
  { id: 5, src: logo5, alt: "Client Partner 5" },
  { id: 6, src: logo6, alt: "Client Partner 6" },
  { id: 7, src: logoPatanjali, alt: "Patanjali" },
  { id: 8, src: logolote, alt: "Lote Chemicals" },
];
