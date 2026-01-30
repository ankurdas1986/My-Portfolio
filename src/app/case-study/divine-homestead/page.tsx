"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
  Home,
  Ruler,
  CalendarCheck,
  Image,
  MessageSquare,
  Palette,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
  id: "divine-homestead",
  title: "Divine Homestead Design",
  subtitle:
    "Creating an elegant digital presence for a custom home planning company that showcases architectural expertise and facilitates client consultations.",
  category: "Architecture & Real Estate",
  liveUrl: "https://www.divinehomesteaddesign.com/",
  heroImage: "/images/premium-transfer-thumb.jpg",

  role: "UI/UX Design Lead + AI Development",
  roleType: "ai-development",
  timeline: "2024",
  teamSize: "Solo + AI Tools",

  aboutProject: `Divine Homestead Design specializes in custom home planning and architectural design services. They help clients transform their dream homes from concept to detailed blueprints, working closely with families to create personalized living spaces. As Design Lead and AI Developer, I created a website that reflects the elegance and attention to detail that characterizes their architectural work while making it easy for prospective clients to understand their services and book consultations.`,

  clientRequest: `We design beautiful homes for families, and our website should reflect that same level of craftsmanship. We need to showcase our portfolio in a way that helps potential clients envision their own projects. The site should be welcoming—we work with families making significant life decisions, so it needs to feel trustworthy and approachable. Most importantly, we need an easy way for clients to schedule consultations with us.`,

  challenges: [
    "Presenting architectural work in a way that appeals to a broad audience, from first-time homebuilders to renovation clients.",
    "Creating a design that feels premium without being intimidating to clients with modest budgets.",
    "Showcasing a portfolio while respecting that many projects contain personal/private family information.",
    "Building trust for a service that involves significant financial and emotional investment from clients.",
    "Designing an intuitive consultation booking flow for users unfamiliar with architectural processes.",
  ],

  approach: [
    "Studied residential architecture websites to understand visual patterns that communicate quality and attention to detail.",
    "Designed a clean, modern aesthetic with warm accents that feels welcoming and professional simultaneously.",
    "Created a portfolio presentation system that highlights design principles and outcomes without overwhelming with technical details.",
    "Used AI development tools to rapidly build an elegant, responsive site that matches the craftsmanship of architectural work.",
    "Implemented a streamlined consultation booking system that captures project requirements upfront.",
    "Designed clear service explanations that demystify the home planning process for first-time clients.",
  ],

  interestingFacts: [
    "The warm color accents were chosen to evoke the feeling of home and family, differentiating from cold corporate architecture sites.",
    "Portfolio images were carefully selected to show diverse project types, helping visitors find relevance to their situation.",
    "The consultation form asks about lot details upfront, allowing the architects to prepare more effectively for initial meetings.",
    "Mobile optimization was prioritized as many users browse home services on their phones during commutes.",
  ],

  summary: `Divine Homestead Design demonstrates my ability to create websites for service businesses where trust and portfolio presentation are equally important. As Design Lead and AI Developer, I delivered a platform that reflects the elegance of architectural design while making the complex process of custom home planning feel accessible. The project showcases expertise in service-oriented UX design and the strategic use of AI tools to deliver premium results efficiently.`,

  tools: [
    "Figma",
    "v0 AI",
    "Next.js",
    "Responsive Design",
    "CSS3",
    "Modern Typography",
  ],

  coreFeatures: [
    {
      title: "Portfolio Showcase",
      description:
        "Elegant presentation of completed projects highlighting design principles and architectural details.",
      icon: Image,
    },
    {
      title: "Service Explanations",
      description:
        "Clear breakdowns of home planning services from initial consultation to final blueprints.",
      icon: Ruler,
    },
    {
      title: "Consultation Booking",
      description:
        "Streamlined scheduling system that captures project requirements for productive first meetings.",
      icon: CalendarCheck,
    },
    {
      title: "Design Philosophy",
      description:
        "Content sections that communicate the company's approach to personalized home design.",
      icon: Palette,
    },
    {
      title: "Client Testimonials",
      description:
        "Trust-building social proof from families who have built their dream homes with Divine.",
      icon: MessageSquare,
    },
    {
      title: "Welcoming Aesthetic",
      description:
        "Warm, inviting design that makes families feel comfortable beginning their home journey.",
      icon: Home,
    },
  ],

  results: [
    {
      value: "Clean",
      metric: "Modern Design",
      description: "Architecture-inspired aesthetics",
    },
    {
      value: "Easy",
      metric: "Booking Flow",
      description: "Streamlined consultations",
    },
    {
      value: "100%",
      metric: "Responsive",
      description: "Mobile-optimized experience",
    },
  ],

  prevProject: { title: "Petrolube Trade", slug: "petrolube-trade" },
  nextProject: { title: "Premium Transfers UK", slug: "premium-transfer" },
};

export default function DivineHomesteadCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />;
}
