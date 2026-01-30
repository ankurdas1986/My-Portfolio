"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
    Users,
    Cpu,
    Globe,
    Zap,
    Code,
    LayoutGrid,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
    id: "aquarious-usa",
    title: "Aquarious Technology USA",
    subtitle:
        "Leading the digital expansion into the US market with a high-performance Next.js platform, demonstrating team leadership and AI-integrated development workflows.",
    category: "Technology & SaaS",
    liveUrl: "https://usa.theaquarious.com/",
    heroImage: "/images/premium-transfer-thumb.jpg",

    role: "Team Lead + UI/UX Design Lead",
    roleType: "ai-development",
    timeline: "2023 - Present",
    teamSize: "5 Members",

    aboutProject: `Aquarious Technology USA represents the company's strategic expansion into the American market. As a software development and AI automation services company, they needed a digital presence that would resonate with US enterprise clients while showcasing their technical capabilities. I led a team of 5 developers as both Team Lead and UI/UX Design Lead, architecting a high-performance Next.js solution that achieves near-perfect performance scores while maintaining sophisticated design aesthetics. This project demonstrates my dual capability in technical leadership and design execution.`,

    clientRequest: `We're expanding to the United States and need a website that can compete with established US tech companies. The site needs to load incredibly fast, rank well in Google, and immediately communicate that we're serious enterprise technology partners. We have a team of developers who need direction, and we want to use AI tools to accelerate our development. You'll need to lead the team while also ensuring the design is world-class.`,

    challenges: [
        "Establishing credibility in the competitive US tech market where visitors make quick judgments about company legitimacy.",
        "Leading a team of 5 developers remotely while maintaining code quality and meeting aggressive deadlines.",
        "Architecting a solution that achieves 99+ performance scores while incorporating rich animations and interactive elements.",
        "Integrating AI tools into the development workflow effectively, training team members on new methodologies.",
        "Creating a design system that could be maintained and extended by the team after initial development.",
    ],

    approach: [
        "Established sprint planning and code review processes to ensure team alignment and consistent quality across all contributions.",
        "Designed a component-based architecture that allowed parallel development, with team members working on isolated components simultaneously.",
        "Leveraged Server Side Rendering (SSR) in Next.js for optimal SEO performance, critical for competing in US search rankings.",
        "Integrated AI tools (v0, Cursor) into the development workflow, reducing component development time by approximately 60%.",
        "Created comprehensive design tokens and a component library that ensured visual consistency and enabled efficient handoffs.",
        "Implemented Framer Motion animations with performance optimization techniques to maintain smooth 60fps interactions.",
    ],

    interestingFacts: [
        "The team achieved 40% faster delivery compared to our typical project timeline, directly attributable to AI-assisted development.",
        "The website consistently scores 99/100 on Google PageSpeed Insights, placing it in the top percentile of tech company websites.",
        "I mentored two junior developers on the team in advanced React patterns, contributing to their professional growth.",
        "The glassmorphism design language was chosen specifically to signal modern, forward-thinking technology capabilities.",
    ],

    summary: `Aquarious Technology USA showcases the full range of my capabilities as a tech leader. Beyond design and development, this project required me to manage a team, set technical standards, and integrate emerging AI technologies into our workflow. The result is a platform that successfully positions Aquarious in the competitive US tech market with a website that performs at the highest standards. This case study demonstrates my leadership skills, technical architecture abilities, and talent for driving team productivity through innovative tools and processes.`,

    tools: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "v0 AI",
        "Vercel",
        "Figma",
    ],

    coreFeatures: [
        {
            title: "Team Leadership",
            description:
                "Managed sprint planning, code reviews, and mentored 5 developers to deliver a cohesive product.",
            icon: Users,
        },
        {
            title: "AI Development Workflow",
            description:
                "Integrated AI tools to accelerate development velocity by 60% while maintaining code quality.",
            icon: Cpu,
        },
        {
            title: "Performance Optimized",
            description:
                "Achieved 99/100 PageSpeed score through SSR, optimized assets, and efficient code splitting.",
            icon: Zap,
        },
        {
            title: "Component Architecture",
            description:
                "Built a scalable design system with reusable components for long-term maintainability.",
            icon: LayoutGrid,
        },
        {
            title: "SEO Excellence",
            description:
                "Server-side rendering and metadata optimization for strong US search engine rankings.",
            icon: Globe,
        },
        {
            title: "Clean Codebase",
            description:
                "TypeScript-first approach with comprehensive documentation for team handoff.",
            icon: Code,
        },
    ],

    results: [
        {
            value: "99/100",
            metric: "PageSpeed Score",
            description: "Google performance rating",
        },
        {
            value: "40%",
            metric: "Faster Delivery",
            description: "vs. traditional timeline",
        },
        {
            value: "5+",
            metric: "Team Members",
            description: "Successfully led and mentored",
        },
    ],

    prevProject: { title: "Agremy", slug: "agremy" },
    nextProject: { title: "Madiha Ortho", slug: "madiha-ortho" },
};

export default function AquariousUSACaseStudy() {
    return <CaseStudyTemplate data={caseStudyData} />;
}
