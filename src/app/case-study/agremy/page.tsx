"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
    Leaf,
    ShoppingBag,
    MapPin,
    Award,
    TreeDeciduous,
    Package,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
    id: "agremy",
    title: "Agremy",
    subtitle:
        "Crafting a premium e-commerce experience for an agroforestry initiative that connects Kolli Hills farmers directly with conscious consumers worldwide.",
    category: "Sustainable Agriculture & E-commerce",
    liveUrl: "https://agremy.com/",
    heroImage: "/images/project-agremy.png",

    role: "UI/UX Design Lead + Frontend Developer",
    roleType: "design-lead",
    timeline: "2024",

    aboutProject: `Agremy is a pioneering agroforestry initiative based in the Kolli Hills of Tamil Nadu, India. They work directly with local tribal farmers to cultivate and market premium organic products including specialty coffee (Berry & Bean), pepper, and essential oils. The platform needed to tell a compelling story of sustainability, traceability, and community impact while functioning as a seamless e-commerce experience. As Design Lead and Frontend Developer, I created a digital storefront that honors the origin story of each product while driving conversions through thoughtful UX design.`,

    clientRequest: `We are farmers first, tech entrepreneurs second. Our products come from generations of traditional knowledge in the Kolli Hills, and we want our website to reflect that heritage. But we also need to compete with premium brands online. We need a website that tells our story—who we are, where our products come from, the faces behind every package—while making it easy for customers in cities to buy from us. The design should feel natural, premium, and trustworthy.`,

    challenges: [
        "Balancing storytelling about traditional farming with modern e-commerce conversion optimization.",
        "Creating a premium brand perception for products from a lesser-known region that competes with established artisanal brands.",
        "Designing for traceability—helping customers understand the journey from Kolli Hills to their homes.",
        "Building trust with urban consumers who can't physically verify product quality before purchase.",
        "Optimizing for Indian payment methods and shipping considerations while maintaining global appeal.",
    ],

    approach: [
        "Immersed myself in the brand story through extensive discussions with the founders, understanding the cultural significance of Kolli Hills farming traditions.",
        "Developed an earthy, organic color palette (forest greens, warm browns, clean whites) that immediately communicates sustainability and nature.",
        "Created a visual hierarchy that leads with storytelling—farmers, landscape, process—before introducing products, building emotional connection first.",
        "Designed product pages that prominently feature origin information, farmer stories, and cultivation methods alongside standard e-commerce elements.",
        "Implemented smooth scroll animations and high-quality imagery that create a premium browsing experience befitting artisanal products.",
        "Built a responsive design that works beautifully on mobile devices, recognizing that most Indian e-commerce happens on smartphones.",
    ],

    interestingFacts: [
        "The 'Berry & Bean' coffee brand name became a central design element, with custom typography treatments that reflect the dual nature of the product.",
        "High-resolution photos of actual Kolli Hills farmers replace stock imagery throughout the site, creating authentic connection.",
        "The green color palette was specifically sampled from photos of the Kolli Hills forests to ensure authentic regional representation.",
        "User testing revealed that customers spent 3x more time on pages featuring farmer stories compared to standard product listings.",
    ],

    summary: `Agremy demonstrates how thoughtful design can amplify a brand's mission while driving business results. As Design Lead and Frontend Developer, I created an e-commerce experience that doesn't just sell products—it sells a vision of sustainable agriculture and community empowerment. The project showcases my ability to translate complex brand narratives into intuitive digital experiences, balance storytelling with conversion optimization, and create designs that feel both premium and authentic. Agremy's online presence now matches the quality of their products, enabling them to compete with established brands while staying true to their roots.`,

    tools: [
        "Next.js",
        "React",
        "E-commerce Platform",
        "Figma",
        "CSS Animations",
        "Responsive Design",
    ],

    coreFeatures: [
        {
            title: "Origin Storytelling",
            description:
                "Immersive sections that tell the story of Kolli Hills, the farmers, and the traditional cultivation methods.",
            icon: TreeDeciduous,
        },
        {
            title: "Product Traceability",
            description:
                "Detailed origin information for each product, connecting customers with the specific farmers who grew their purchase.",
            icon: MapPin,
        },
        {
            title: "E-commerce Integration",
            description:
                "Seamless shopping experience with cart, checkout, and payment integration for smooth conversions.",
            icon: ShoppingBag,
        },
        {
            title: "Sustainability Metrics",
            description:
                "Visual representation of environmental impact and community benefits from each purchase.",
            icon: Leaf,
        },
        {
            title: "Quality Certifications",
            description:
                "Prominent display of organic certifications and quality standards to build consumer trust.",
            icon: Award,
        },
        {
            title: "Product Showcase",
            description:
                "Beautiful product photography and detailed descriptions for coffee, pepper, and essential oils.",
            icon: Package,
        },
    ],

    results: [
        {
            value: "3x",
            metric: "Time on Farmer Stories",
            description: "vs. standard product pages",
        },
        {
            value: "Premium",
            metric: "Brand Perception",
            description: "Competing with established brands",
        },
        {
            value: "100%",
            metric: "Mobile Optimized",
            description: "For Indian market needs",
        },
    ],

    prevProject: { title: "Mumbai Cancer", slug: "mumbai-cancer" },
    nextProject: { title: "Aquarious Technology USA", slug: "aquarious-usa" },
};

export default function AgremyCaseStudy() {
    return <CaseStudyTemplate data={caseStudyData} />;
}
