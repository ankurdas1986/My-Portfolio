"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
    Bone,
    Globe,
    Award,
    Package,
    FileText,
    Building2,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
    id: "madiha-ortho",
    title: "Madiha Ortho",
    subtitle:
        "Designing a professional B2B platform for an ISO-certified orthopedic implants manufacturer, showcasing medical device expertise to global buyers.",
    category: "Healthcare Manufacturing",
    liveUrl: "https://v0-madiha-ortho-kc.vercel.app/",
    heroImage: "/images/premium-transfer-thumb.jpg",

    role: "UI/UX Design Lead + AI Frontend Developer",
    roleType: "ai-development",
    timeline: "2024",
    teamSize: "Solo + AI Tools",

    aboutProject: `Madiha Ortho is an ISO 13485 certified manufacturer of orthopedic implants and surgical instruments based in India, serving hospitals and distributors globally. They offer a comprehensive range of products including trauma implants, spine systems, and surgical tools. As the Design Lead and AI Developer, I was tasked with creating a digital presence that establishes credibility with international medical device buyers—a notoriously demanding audience that requires absolute professionalism and compliance transparency. Using AI-assisted development, I delivered a complete platform that showcases their manufacturing capabilities and extensive product catalog.`,

    clientRequest: `We manufacture orthopedic implants that are used in surgeries worldwide. Our buyers are hospital procurement teams and medical device distributors—very serious people who need to trust our quality before placing large orders. We need a website that looks as professional as our ISO certifications demand. The product catalog is extensive and needs to be organized clearly. Buyers should be able to find specific implants quickly and request quotations easily.`,

    challenges: [
        "Creating B2B credibility for a medical device manufacturer where quality perception directly impacts purchasing decisions.",
        "Organizing an extensive catalog of orthopedic products (trauma, spine, joints) in a navigable, intuitive structure.",
        "Communicating complex medical specifications in a way that's useful for both technical and procurement audiences.",
        "Balancing the need for comprehensive product information with clean design that doesn't overwhelm visitors.",
        "Building trust indicators (certifications, compliance, manufacturing capabilities) without cluttering the interface.",
    ],

    approach: [
        "Researched leading orthopedic device manufacturers' websites to understand industry standards and buyer expectations.",
        "Designed a clean, clinical aesthetic that immediately signals medical-grade professionalism through typography and color choices.",
        "Created a hierarchical product catalog with clear category navigation, allowing buyers to quickly locate specific implant types.",
        "Leveraged AI development tools to rapidly build product listing components with consistent presentation across all categories.",
        "Implemented prominent certification badges and manufacturing credentials on key pages to build immediate trust.",
        "Designed streamlined quote request forms that capture necessary specifications while respecting buyers' time.",
    ],

    interestingFacts: [
        "Medical device buyers typically visit 5-7 manufacturer websites before making contact—our design aimed to make Madiha memorable.",
        "The product photography guidelines I created ensure consistent, clinical presentation across 100+ product SKUs.",
        "The certification section was designed to be printable, as buyers often need to attach supplier credentials to procurement documents.",
        "Load time optimization was crucial as buyers in emerging markets often have limited bandwidth.",
    ],

    summary: `Madiha Ortho demonstrates my capability to design for highly specialized B2B audiences where credibility is paramount. As Design Lead and AI Developer, I created a platform that positions this Indian manufacturer competitively against global orthopedic brands. The project showcases my ability to handle complex product catalog design, understand B2B buyer journeys, and leverage AI tools for efficient delivery. The result is a digital presence that inspires confidence in medical procurement professionals worldwide, opening doors for global distribution partnerships.`,

    tools: [
        "Next.js",
        "v0 AI",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "Figma",
    ],

    coreFeatures: [
        {
            title: "Product Catalog System",
            description:
                "Organized catalog of trauma, spine, and joint implants with detailed specifications and imagery.",
            icon: Package,
        },
        {
            title: "Certification Showcase",
            description:
                "Prominent display of ISO 13485 and other quality certifications for B2B buyer confidence.",
            icon: Award,
        },
        {
            title: "Global Distribution Info",
            description:
                "Clear information about export capabilities and international partnership opportunities.",
            icon: Globe,
        },
        {
            title: "Quote Request System",
            description:
                "Streamlined forms for buyers to request pricing on specific products with quantity details.",
            icon: FileText,
        },
        {
            title: "Manufacturing Capabilities",
            description:
                "Detailed presentation of production facilities, capacity, and quality control processes.",
            icon: Building2,
        },
        {
            title: "Product Specifications",
            description:
                "Technical details for each implant type, including materials, sizes, and surgical applications.",
            icon: Bone,
        },
    ],

    results: [
        {
            value: "100+",
            metric: "Products Listed",
            description: "Comprehensive catalog",
        },
        {
            value: "ISO 13485",
            metric: "Certified",
            description: "Quality management standard",
        },
        {
            value: "Global",
            metric: "Distribution Ready",
            description: "Export documentation included",
        },
    ],

    prevProject: { title: "Aquarious Technology USA", slug: "aquarious-usa" },
    nextProject: { title: "Petrolube Trade", slug: "petrolube-trade" },
};

export default function MadihaOrthoCaseStudy() {
    return <CaseStudyTemplate data={caseStudyData} />;
}
