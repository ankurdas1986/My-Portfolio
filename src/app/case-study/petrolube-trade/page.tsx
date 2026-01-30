"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
    BarChart3,
    Shield,
    Users,
    ArrowRightLeft,
    FileCheck,
    Building2,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
    id: "petrolube-trade",
    title: "Petrolube Trade",
    subtitle:
        "Designing a B2B marketplace that enables transparent petroleum product trading between refineries, distributors, and industrial buyers.",
    category: "B2B Marketplace",
    liveUrl: "https://petrolubetrade.com/",
    heroImage: "/images/premium-transfer-thumb.jpg",

    role: "UI/UX Design Lead + AI Frontend Developer",
    roleType: "ai-development",
    timeline: "2024",
    teamSize: "Solo + AI Tools",

    aboutProject: `Petrolube Trade is a B2B digital marketplace designed to bring transparency and efficiency to petroleum product trading. The platform connects petroleum refineries and suppliers with industrial buyers and distributors, facilitating large-volume transactions with verified parties. As Design Lead and AI Developer, I created a trading platform that instills confidence in high-value B2B transactions while simplifying complex procurement workflows. The design needed to balance institutional trustworthiness with modern user experience standards.`,

    clientRequest: `The petroleum trading industry is still heavily reliant on phone calls, faxes, and personal relationships. We want to digitize this process but we need to be careful—our users are cautious business owners who handle transactions worth lakhs of rupees. The platform needs to feel like a secure, professional trading environment. Users should be able to list products, search for buyers/sellers, and initiate transactions with confidence that they're dealing with verified parties.`,

    challenges: [
        "Building trust for high-value B2B transactions where buyers and sellers have never met face-to-face.",
        "Designing for an industry with low digital adoption, where users expect familiar patterns from traditional trading.",
        "Creating verification workflows that establish legitimacy without creating excessive friction in the user journey.",
        "Balancing comprehensive product specifications with quick scanning and comparison for busy procurement professionals.",
        "Designing a neutral marketplace that serves both buyers and sellers without appearing to favor either party.",
    ],

    approach: [
        "Studied successful B2B marketplaces (Alibaba, IndiaMART) to understand trust-building patterns that resonate with Indian B2B users.",
        "Designed a verification badge system that prominently displays verified sellers, building immediate confidence in listings.",
        "Created separate dashboard experiences for buyers and sellers, each optimized for their specific workflow needs.",
        "Used AI development tools to rapidly prototype trading workflows, testing multiple interaction patterns efficiently.",
        "Implemented clear transaction state indicators so users always know where they stand in the buying/selling process.",
        "Designed a clean, corporate aesthetic that signals seriousness and professionalism befitting large financial transactions.",
    ],

    interestingFacts: [
        "User research revealed that showing company registration numbers and GST details dramatically increased seller credibility scores.",
        "The 'Request for Quote' workflow went through 5 iterations to find the right balance of information collection without form abandonment.",
        "Trading volume indicators were added after testing showed buyers preferred sellers with proven transaction history.",
        "The platform's neutral color scheme (avoiding both buyer or seller brand colors) was intentional for marketplace neutrality.",
    ],

    summary: `Petrolube Trade showcases my ability to design for complex B2B marketplace environments where trust and usability must work hand-in-hand. As Design Lead and AI Developer, I created a platform that digitizes traditional trading relationships while respecting the caution and professionalism that high-value transactions demand. The project demonstrates expertise in B2B UX patterns, verification design, and the application of AI tools to accelerate development of sophisticated trading interfaces.`,

    tools: [
        "Next.js",
        "v0 AI",
        "TypeScript",
        "Tailwind CSS",
        "Modern UI",
        "Figma",
    ],

    coreFeatures: [
        {
            title: "Verified Seller Badges",
            description:
                "Trust indicators showing verified business credentials, GST registration, and transaction history.",
            icon: Shield,
        },
        {
            title: "Trading Dashboard",
            description:
                "Separate, optimized interfaces for buyers and sellers to manage listings and transactions.",
            icon: BarChart3,
        },
        {
            title: "RFQ System",
            description:
                "Streamlined Request for Quote workflow connecting buyers with multiple sellers efficiently.",
            icon: FileCheck,
        },
        {
            title: "Transaction Flow",
            description:
                "Clear status indicators and milestone tracking for ongoing trades and negotiations.",
            icon: ArrowRightLeft,
        },
        {
            title: "Company Profiles",
            description:
                "Comprehensive business profiles showcasing credentials, capacity, and trading history.",
            icon: Building2,
        },
        {
            title: "Buyer-Seller Matching",
            description:
                "Intelligent matching system connecting compatible trading partners based on requirements.",
            icon: Users,
        },
    ],

    results: [
        {
            value: "B2B",
            metric: "Transaction Ready",
            description: "Enterprise-grade security",
        },
        {
            value: "Verified",
            metric: "Seller System",
            description: "Building marketplace trust",
        },
        {
            value: "5+",
            metric: "Workflow Iterations",
            description: "User-tested RFQ process",
        },
    ],

    prevProject: { title: "Madiha Ortho", slug: "madiha-ortho" },
    nextProject: { title: "Divine Homestead", slug: "divine-homestead" },
};

export default function PetrolubeTradeCaseStudy() {
    return <CaseStudyTemplate data={caseStudyData} />;
}
