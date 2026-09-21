import logo1 from "@/assets/logos/image.png";
import logo2 from "@/assets/logos/image copy.png";
import logo3 from "@/assets/logos/image copy 2.png";
import logo4 from "@/assets/logos/image copy 3.png";
import logo5 from "@/assets/logos/image copy 4.png";
import logo6 from "@/assets/logos/image copy 5.png";
import logoPatanjali from "@/assets/logos/patanjali.png";

export interface CustomerLogo {
  id: number;
  src: string;
  alt: string;
}

export const customerLogos: CustomerLogo[] = [
  { id: 1, src: logo1, alt: "Client Partner 1" },
  { id: 2, src: logo2, alt: "Client Partner 2" },
  { id: 3, src: logo3, alt: "Client Partner 3" },
  { id: 4, src: logo4, alt: "Client Partner 4" },
  { id: 5, src: logo5, alt: "Client Partner 5" },
  { id: 6, src: logo6, alt: "Client Partner 6" },
  { id: 7, src: logoPatanjali, alt: "Patanjali" },
];
