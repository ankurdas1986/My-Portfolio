"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
  ShoppingCart,
  CreditCard,
  Search,
  Heart,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
  id: "now-it-yours",
  title: "Now It Yours",
  subtitle:
    "Designing an e-commerce experience focused on user journey optimization and conversion, turning browsers into buyers.",
  category: "E-commerce",
  liveUrl: "https://nowitsyoursth.com/",
  heroImage: "/images/now-it-yours-thumb.jpg",

  role: "UI/UX Design Lead",
  roleType: "design-only",
  timeline: "2023",

  aboutProject: `Now It Yours is an e-commerce platform requiring a complete UX overhaul to improve conversion rates and customer experience. The project focused on understanding the customer journey, identifying friction points, and redesigning the path from product discovery to purchase completion. As UI/UX Design Lead, I was responsible for research, wireframing, prototyping, and final visual design—handing off comprehensive design assets to the development team for implementation.`,

  clientRequest: `Our e-commerce store has good products and decent traffic, but our conversion rate is disappointing. Visitors browse but don't buy. We need someone to analyze our current experience, identify what's wrong, and design a much better shopping experience. We want designs that will actually increase sales—not just look pretty. We have developers who will build it, so we need comprehensive design documentation.`,

  challenges: [
    "Diagnosing conversion blockers in the existing e-commerce experience through analysis and user research.",
    "Designing for a wide product catalog that needs to remain browsable without overwhelming users.",
    "Creating a checkout flow that minimizes abandonment while collecting necessary shipping and payment information.",
    "Balancing visual appeal with e-commerce best practices that prioritize conversion over aesthetics.",
    "Delivering comprehensive design documentation that enables development team implementation without ambiguity.",
  ],

  approach: [
    "Conducted heuristic evaluation of the existing site to identify UX issues and conversion barriers systematically.",
    "Mapped the current customer journey to pinpoint specific moments where users abandon the purchase funnel.",
    "Redesigned product discovery with improved search, filtering, and category navigation for efficient browsing.",
    "Created a streamlined checkout with progress indicators, guest checkout option, and trust signals at key points.",
    "Designed wishlist and save-for-later features to capture intent from users not ready to purchase immediately.",
    "Delivered comprehensive Figma files with component library, interaction specifications, and responsive breakpoints.",
  ],

  interestingFacts: [
    "Analysis revealed that 60% of cart abandonments happened at the shipping cost reveal—we redesigned to show estimates earlier.",
    "The new product card design increased click-through rates in user testing by surfacing key info (size, price, availability) upfront.",
    "Mobile-first redesign was critical as analytics showed 70% of traffic came from smartphones.",
    "The design system created for this project was structured for easy extension as the catalog grows.",
  ],

  summary: `Now It Yours demonstrates my expertise in e-commerce UX design where measurable business outcomes matter. As UI/UX Design Lead, I delivered a comprehensive redesign focused on conversion optimization, addressing real user pain points identified through research. The project showcases my ability to approach design strategically, think about the full customer journey, and deliver documentation that enables smooth development handoff. It represents the pure design leadership side of my skillset, independent of development work.`,

  tools: [
    "Figma",
    "Web UI/UX",
    "E-commerce Patterns",
    "User Research",
    "Conversion Design",
    "Prototyping",
  ],

  coreFeatures: [
    {
      title: "Conversion Focus",
      description:
        "Every design decision evaluated against impact on purchase completion rates.",
      icon: TrendingUp,
    },
    {
      title: "Streamlined Checkout",
      description:
        "Optimized purchase flow with progress indicators, guest checkout, and trust signals.",
      icon: CreditCard,
    },
    {
      title: "Product Discovery",
      description:
        "Improved search, filtering, and category navigation for efficient browsing.",
      icon: Search,
    },
    {
      title: "Mobile-First Design",
      description:
        "Prioritized smartphone experience for the 70% of users browsing on mobile.",
      icon: Smartphone,
    },
    {
      title: "Wishlist Feature",
      description:
        "Save-for-later functionality capturing purchase intent from undecided browsers.",
      icon: Heart,
    },
    {
      title: "Shopping Experience",
      description:
        "Intuitive cart management and product comparison tools for confident purchasing.",
      icon: ShoppingCart,
    },
  ],

  results: [
    {
      value: "Conversion",
      metric: "Focused Design",
      description: "Business outcome driven",
    },
    {
      value: "Mobile",
      metric: "First Priority",
      description: "70% traffic optimization",
    },
    {
      value: "Complete",
      metric: "Design System",
      description: "Ready for development",
    },
  ],

  prevProject: { title: "Finomatic", slug: "finomatic" },
  nextProject: undefined,
};

export default function NowItYoursCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />;
}
