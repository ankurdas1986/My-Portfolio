"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
  Gamepad2,
  Paintbrush,
  Code,
  Sparkles,
  Users,
  BookOpen,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
  id: "finomatic",
  title: "Finomatic",
  subtitle:
    "Complete website design and development for an innovative financial education board game company, delivering end-to-end creative direction.",
  category: "FinTech & Gaming",
  liveUrl: "https://finomatic.in/",
  heroImage: "/images/finomatic-thumb.jpg",

  role: "UI/UX Design Lead + Full Development",
  roleType: "full-stack",
  timeline: "2023",

  aboutProject: `Finomatic is an innovative company that creates board games designed to teach financial literacy in an engaging, memorable way. Their flagship products make complex financial concepts accessible through gameplay, targeting schools, families, and corporate training programs. As the sole designer and developer on this project, I was responsible for everything from brand identity to website development—a true end-to-end creative project. The website needed to communicate the fun of gaming while establishing credibility as an educational tool.`,

  clientRequest: `We've created board games that teach people about money, investing, and financial decision-making. Our products are used in schools and companies. We need a complete web presence—nothing exists yet. We need you to handle everything: understand our brand, design a website that sells our games, and build it. The design should feel playful and approachable but also professional enough for corporate buyers. We're a startup, so we need this done efficiently.`,

  challenges: [
    "Creating a cohesive brand presence from scratch with no existing visual assets or style guidelines.",
    "Balancing playful gaming aesthetics with educational credibility for school and corporate buyers.",
    "Designing a product presentation that works for both B2C (families) and B2B (schools, companies) audiences.",
    "Building an entire website solo while maintaining quality across design, content, and development.",
    "Communicating complex game mechanics and educational benefits in visually engaging ways.",
  ],

  approach: [
    "Began with brand discovery sessions to understand Finomatic's mission, values, and target audiences thoroughly.",
    "Developed a visual identity that combines playful gaming elements (bright colors, dynamic shapes) with professional typography.",
    "Created distinct sections addressing different buyer personas: parents, educators, and corporate trainers.",
    "Designed interactive product showcases that demonstrate game mechanics and learning outcomes clearly.",
    "Built the complete frontend using HTML5, CSS3, and JavaScript, ensuring fast loading and cross-browser compatibility.",
    "Implemented responsive design that works seamlessly across desktop and mobile devices.",
  ],

  interestingFacts: [
    "This was a true end-to-end project where I owned everything from initial concept sketches to final deployment.",
    "The color palette was specifically chosen to be engaging for young learners while remaining professional for educators.",
    "Product photography styling recommendations were also provided to ensure consistent visual presentation.",
    "The website serves as the company's primary sales tool, directly impacting business development conversations.",
  ],

  summary: `Finomatic represents the breadth of my capabilities when given complete creative ownership. As the sole designer and developer, I delivered a comprehensive digital presence that positions Finomatic as a leader in financial education games. This project showcases my ability to handle end-to-end creative projects, develop cohesive brand identities, and balance diverse audience needs within a single design. It demonstrates that I can wear multiple hats effectively and deliver quality across all aspects of a digital product.`,

  tools: [
    "Figma",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Interactive Design",
    "Brand Identity",
  ],

  coreFeatures: [
    {
      title: "Brand Identity",
      description:
        "Complete visual identity designed from scratch including colors, typography, and design language.",
      icon: Paintbrush,
    },
    {
      title: "Game Showcase",
      description:
        "Interactive product presentations demonstrating game mechanics and educational benefits.",
      icon: Gamepad2,
    },
    {
      title: "Audience Segmentation",
      description:
        "Distinct content sections addressing parents, educators, and corporate training buyers.",
      icon: Users,
    },
    {
      title: "Educational Content",
      description:
        "Clear communication of learning outcomes and financial literacy benefits.",
      icon: BookOpen,
    },
    {
      title: "Full Development",
      description:
        "Complete frontend build with HTML, CSS, and JavaScript for cross-browser compatibility.",
      icon: Code,
    },
    {
      title: "Engaging Design",
      description:
        "Playful aesthetics that capture the fun of gaming while maintaining professionalism.",
      icon: Sparkles,
    },
  ],

  results: [
    {
      value: "End-to-End",
      metric: "Ownership",
      description: "Design to deployment",
    },
    {
      value: "Brand",
      metric: "Identity Created",
      description: "From scratch",
    },
    {
      value: "Multi-Audience",
      metric: "Design",
      description: "B2C and B2B ready",
    },
  ],

  prevProject: { title: "Premium Transfers UK", slug: "premium-transfer" },
  nextProject: { title: "Now It Yours", slug: "now-it-yours" },
};

export default function FinomaticCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />;
}
