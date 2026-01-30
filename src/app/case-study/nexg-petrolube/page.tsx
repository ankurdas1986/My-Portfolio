"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import { Globe, Zap, Leaf, BarChart3, Shield, Smartphone } from "lucide-react";

const caseStudyData: CaseStudyData = {
    id: "nexg-petrolube",
    title: "NexG Petrolube",
    subtitle:
        "Redefining the digital presence of a B2B petroleum trading platform through clean, modern design and AI-powered development workflow.",
    category: "Energy & Petroleum",
    liveUrl: "https://www.nexgpetrolube.com/",
    heroImage: "/images/project-nexg.png",

    role: "UI/UX Design Lead + AI Development",
    roleType: "ai-development",
    timeline: "2024",
    teamSize: "Solo + AI Tools",

    aboutProject: `NexG Petrolube is a pioneering B2B petroleum trading platform that bridges the gap between oil suppliers, refineries, and industrial buyers. The company operates in the used oil recovery and recycling space, promoting sustainable practices in the petroleum industry. My role was to completely reimagine their digital presence from the ground up, creating a website that communicates their industrial capability while maintaining a modern, trustworthy aesthetic that appeals to enterprise clients. Using AI-powered development tools, I was able to deliver a production-ready website in record time without compromising on quality or attention to detail.`,

    clientRequest: `We need a website that establishes NexG Petrolube as a leader in sustainable petroleum trading. The current site doesn't reflect our scale of operations or our commitment to environmental responsibility. We want something modern, professional, and that clearly communicates our three main service areas: petroleum trading, used oil collection, and recycling services. It needs to work flawlessly on mobile as many of our clients access it from field locations.`,

    challenges: [
        "Balancing industrial/corporate aesthetics with modern web design trends while maintaining credibility with B2B buyers.",
        "Presenting three distinct service verticals (trading, collection, recycling) without overwhelming users or creating navigation confusion.",
        "Communicating sustainability messaging effectively without appearing as greenwashing to skeptical industrial clients.",
        "Optimizing for both desktop corporate users and mobile field workers with varying connection speeds.",
        "Creating compelling content that explains complex petroleum trading processes in accessible language.",
    ],

    approach: [
        "Conducted competitive analysis of leading industrial and commodity trading websites to establish design benchmarks and identify opportunities for differentiation.",
        "Designed a visual hierarchy that prioritizes NexG's sustainability mission while showcasing their full service portfolio through strategic section layouts.",
        "Leveraged v0 AI and Next.js to rapidly prototype and iterate on designs, reducing development time by approximately 60% compared to traditional methods.",
        "Implemented GSAP animations for smooth scroll interactions and micro-animations that add polish without impacting performance.",
        "Created a mobile-first responsive design with optimized images and lazy loading to ensure fast load times even on slower connections.",
        "Built a modular component system that allows the client to easily update content and expand sections as their business grows.",
    ],

    interestingFacts: [
        "The entire website was designed and developed in under 2 weeks using AI-assisted development tools, a process that would typically take 6-8 weeks.",
        "The dark blue color palette was chosen specifically to convey reliability and professionalism, colors strongly associated with the petroleum industry.",
        "The sustainability section uses real statistics from NexG's operations, processed through AI to create compelling data visualizations.",
        "Mobile traffic accounts for 45% of visits, validating our mobile-first approach to development.",
    ],

    summary: `The NexG Petrolube project demonstrates how AI-powered development workflows can dramatically accelerate delivery timelines without sacrificing design quality. By combining my expertise in UI/UX design leadership with cutting-edge AI tools, I delivered a complete website that positions NexG as a forward-thinking leader in sustainable petroleum trading. The project showcases my ability to handle industrial B2B design challenges while leveraging modern technology to maximize efficiency. The client now has a digital presence that truly reflects their operational scale and environmental commitment.`,

    tools: [
        "Next.js",
        "v0 AI",
        "GSAP",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
        "Vercel",
    ],

    coreFeatures: [
        {
            title: "Service Portfolio Showcase",
            description:
                "Clear presentation of trading, collection, and recycling services with dedicated sections and intuitive navigation.",
            icon: Globe,
        },
        {
            title: "Sustainability Dashboard",
            description:
                "Interactive section highlighting environmental impact metrics and NexG's commitment to responsible oil management.",
            icon: Leaf,
        },
        {
            title: "Mobile-First Design",
            description:
                "Fully responsive layout optimized for field workers accessing the site from mobile devices in various conditions.",
            icon: Smartphone,
        },
        {
            title: "Performance Optimized",
            description:
                "Lightning-fast load times achieved through modern optimization techniques and efficient asset delivery.",
            icon: Zap,
        },
        {
            title: "Trust Indicators",
            description:
                "Strategic placement of certifications, client testimonials, and industry credentials to build B2B confidence.",
            icon: Shield,
        },
        {
            title: "Analytics Ready",
            description:
                "Integrated tracking and analytics foundation for measuring engagement and conversion opportunities.",
            icon: BarChart3,
        },
    ],

    results: [
        {
            value: "95+",
            metric: "PageSpeed Score",
            description: "Lighthouse performance rating",
        },
        {
            value: "60%",
            metric: "Faster Delivery",
            description: "vs. traditional development",
        },
        {
            value: "100%",
            metric: "Mobile Responsive",
            description: "All device compatibility",
        },
    ],

    prevProject: undefined,
    nextProject: { title: "Used Oil India", slug: "used-oil-india" },
};

export default function NexGPetrolubeCaseStudy() {
    return <CaseStudyTemplate data={caseStudyData} />;
}
