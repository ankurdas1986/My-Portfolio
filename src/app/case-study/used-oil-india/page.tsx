"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
    Leaf,
    Smartphone,
    Users,
    MapPin,
    RefreshCcw,
    TrendingUp,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
    id: "used-oil-india",
    title: "Used Oil India",
    subtitle:
        "Building India's first digital marketplace for used oil recycling, connecting generators and collectors for sustainable waste management.",
    category: "Environmental Technology",
    liveUrl: "https://usedoilindia.com/",
    heroImage: "/images/project-used-oil.png",

    role: "UI/UX Design Lead + AI Development",
    roleType: "ai-development",
    timeline: "2024",
    teamSize: "Solo + AI Tools",

    aboutProject: `Used Oil India is a groundbreaking digital platform that addresses a critical environmental challenge: the proper collection and recycling of used oil in India. The platform connects oil generators (workshops, factories, transport companies) with certified collectors and recyclers, creating a transparent marketplace that promotes responsible oil disposal. As Design Lead and AI Developer, I was responsible for creating an intuitive platform that simplifies a traditionally complex and opaque process, making sustainability accessible to businesses of all sizes while ensuring regulatory compliance.`,

    clientRequest: `India generates millions of liters of used oil annually, but most of it ends up polluting the environment due to lack of proper collection infrastructure. We want to build a digital marketplace that makes it easy for any business to sell their used oil to certified recyclers. The platform needs to be simple enough for a small workshop owner to use, yet robust enough to handle enterprise-level transactions. Mobile accessibility is crucial since most of our users will access it from their workplaces.`,

    challenges: [
        "Designing for a user base with varying levels of digital literacy, from tech-savvy corporate procurement teams to small workshop owners.",
        "Creating trust in a new marketplace model where users are skeptical about pricing transparency and payment reliability.",
        "Simplifying complex regulatory requirements around used oil handling into user-friendly workflows.",
        "Building a mobile-first experience that works reliably across India's diverse network conditions.",
        "Balancing the needs of two distinct user groups (generators and collectors) within a single coherent platform.",
    ],

    approach: [
        "Started with extensive user research to understand the pain points of both oil generators and collectors in the current manual system.",
        "Designed a dual-portal architecture that provides tailored experiences for generators and collectors while maintaining unified marketplace functionality.",
        "Used AI development tools to rapidly prototype and iterate on the user interface, testing multiple design variations in a fraction of the usual time.",
        "Implemented a clean, illustration-based design language that communicates sustainability without jargon, making the platform approachable.",
        "Created progressive disclosure patterns that present complex information (pricing, compliance, logistics) only when users need it.",
        "Built comprehensive mobile optimization with offline-capable features for users in areas with unreliable connectivity.",
    ],

    interestingFacts: [
        "The platform's color scheme (blue, white, and orange) was carefully chosen to represent trust, cleanliness, and energy—key values in the recycling industry.",
        "The illustration style was developed specifically to appeal to Indian SMB owners, using culturally relevant visual metaphors.",
        "Early user testing revealed that showing real-time statistics (liters collected, money paid) dramatically increased user trust and engagement.",
        "The mobile app concept was designed alongside the web platform to ensure seamless cross-platform experience from day one.",
    ],

    summary: `Used Oil India represents a meaningful application of technology for environmental good. As the Design Lead and AI Developer, I created a digital platform that makes sustainable practices accessible and profitable for businesses across India. The project demonstrates my ability to handle complex marketplace design challenges, balance the needs of multiple user groups, and leverage AI tools to accelerate development without compromising on user experience quality. The platform has the potential to significantly impact India's used oil recycling rates, turning an environmental liability into an economic opportunity.`,

    tools: [
        "Next.js",
        "v0 AI",
        "React",
        "Tailwind CSS",
        "Figma",
        "Mobile-First Design",
    ],

    coreFeatures: [
        {
            title: "Dual User Portals",
            description:
                "Separate, tailored interfaces for oil generators and certified collectors with role-specific features and dashboards.",
            icon: Users,
        },
        {
            title: "Real-Time Tracking",
            description:
                "Live statistics showing collection volumes, payments processed, and environmental impact metrics.",
            icon: TrendingUp,
        },
        {
            title: "Mobile-First Platform",
            description:
                "Fully responsive design optimized for smartphone users in field locations with varying connectivity.",
            icon: Smartphone,
        },
        {
            title: "Location-Based Matching",
            description:
                "Intelligent matching system connecting generators with nearby collectors for efficient logistics.",
            icon: MapPin,
        },
        {
            title: "Sustainability Dashboard",
            description:
                "Visual representation of environmental impact, showing liters recycled and pollution prevented.",
            icon: Leaf,
        },
        {
            title: "Circular Economy Focus",
            description:
                "Educational content and workflows that promote the circular economy model for used oil.",
            icon: RefreshCcw,
        },
    ],

    results: [
        {
            value: "₹15L+",
            metric: "Potential Earnings",
            description: "Displayed for user trust",
        },
        {
            value: "99%",
            metric: "Payment Rate",
            description: "On-time payment tracking",
        },
        {
            value: "8,500+",
            metric: "Collection Points",
            description: "Mapped across India",
        },
    ],

    prevProject: { title: "NexG Petrolube", slug: "nexg-petrolube" },
    nextProject: { title: "Mumbai Cancer", slug: "mumbai-cancer" },
};

export default function UsedOilIndiaCaseStudy() {
    return <CaseStudyTemplate data={caseStudyData} />;
}
