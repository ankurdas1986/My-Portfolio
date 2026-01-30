"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
  Car,
  Clock,
  Star,
  MapPin,
  CreditCard,
  HeadphonesIcon,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
  id: "premium-transfer",
  title: "Premium Transfers UK",
  subtitle:
    "Designing a luxury chauffeur service platform that delivers a seamless booking experience matching the premium service quality clients expect.",
  category: "Transportation & Travel",
  liveUrl: "https://www.premiumtransfers.co.uk/",
  heroImage: "/images/premium-transfer-thumb.jpg",

  role: "UI/UX Design Lead + Frontend Developer",
  roleType: "design-lead",
  timeline: "2023",

  aboutProject: `Premium Transfers UK provides luxury chauffeur and airport transfer services across the United Kingdom. Their clientele includes business executives, high-net-worth individuals, and premium travelers who expect exceptional service at every touchpoint. As UI/UX Design Lead and Frontend Developer, I created a digital booking experience that matches the premium quality of their physical service—elegant, efficient, and reassuring. The platform needed to convey luxury while remaining functionally simple enough for quick bookings.`,

  clientRequest: `Our chauffeurs provide five-star service, but our website doesn't reflect that quality. Clients expect seamlessness from the moment they first interact with us online. We need a website that looks premium, makes booking incredibly easy, and reassures clients that they're choosing a trusted, professional service. Many bookings happen on mobile, often at airports or hotels, so speed and simplicity are critical.`,

  challenges: [
    "Communicating luxury and premium quality through web design without appearing gaudy or trying too hard.",
    "Creating a booking flow that's fast enough for time-pressed travelers while capturing necessary journey details.",
    "Building trust for a high-value service where clients are often providing personal travel details.",
    "Designing for mobile-first scenarios where users may be booking transfers while traveling with poor connectivity.",
    "Differentiating from cheaper transfer services and ride-sharing apps through design quality.",
  ],

  approach: [
    "Researched luxury travel and hospitality websites to understand visual languages that communicate premium service.",
    "Designed a sophisticated color palette (black, gold accents, white space) that immediately signals premium positioning.",
    "Created a streamlined 3-step booking process: pick-up, destination, confirm—optimized for speed and mobile interaction.",
    "Implemented high-quality imagery of vehicles and chauffeurs to establish tangible service expectations.",
    "Designed clear pricing displays that build trust, showing transparent fares before commitment.",
    "Built the frontend with performance as priority, ensuring fast loading even on mobile networks.",
  ],

  interestingFacts: [
    "User testing showed that showing actual chauffeur photos increased booking completion by significantly more than vehicle photos alone.",
    "The booking form uses smart defaults based on popular routes, reducing input time for common airport transfers.",
    "Gold accent colors were specifically chosen to align with premium/luxury industry standards across hospitality.",
    "The mobile booking flow was tested specifically in low-signal conditions simulating airport environments.",
  ],

  summary: `Premium Transfers UK demonstrates my expertise in designing for luxury service industries where digital experience must match physical service quality. As Design Lead and Frontend Developer, I created a platform that positions Premium Transfers as a truly premium choice in a competitive market. The project showcases my ability to communicate luxury through design, optimize booking flows for conversion, and build mobile-first experiences that perform under real-world conditions.`,

  tools: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Figma",
    "Mobile-First",
  ],

  coreFeatures: [
    {
      title: "Luxury Aesthetics",
      description:
        "Premium visual design with elegant typography, sophisticated colors, and quality imagery.",
      icon: Star,
    },
    {
      title: "Quick Booking Flow",
      description:
        "Streamlined 3-step booking process optimized for fast completions on any device.",
      icon: Clock,
    },
    {
      title: "Route Selection",
      description:
        "Easy pick-up and destination selection with popular routes highlighted for quick booking.",
      icon: MapPin,
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear fare displays showing complete pricing before booking confirmation.",
      icon: CreditCard,
    },
    {
      title: "Vehicle Showcase",
      description:
        "High-quality presentation of the luxury vehicle fleet with specifications and capacity.",
      icon: Car,
    },
    {
      title: "24/7 Support Info",
      description:
        "Prominent contact information and support availability for traveler peace of mind.",
      icon: HeadphonesIcon,
    },
  ],

  results: [
    {
      value: "3-Step",
      metric: "Booking Flow",
      description: "Optimized for speed",
    },
    {
      value: "Premium",
      metric: "Brand Perception",
      description: "Luxury market positioning",
    },
    {
      value: "Mobile",
      metric: "First Design",
      description: "Optimized for travelers",
    },
  ],

  prevProject: { title: "Divine Homestead", slug: "divine-homestead" },
  nextProject: { title: "Finomatic", slug: "finomatic" },
};

export default function PremiumTransferCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />;
}
