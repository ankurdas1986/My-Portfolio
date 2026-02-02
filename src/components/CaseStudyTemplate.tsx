"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ExternalLink,
    Lightbulb,
    Target,
    Zap,
    CheckCircle2,
    Sparkles,
    type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export interface CaseStudyData {
    // Meta
    id: string;
    title: string;
    subtitle: string;
    category: string;
    liveUrl: string;
    heroImage: string;

    // Role & Context
    role: string;
    roleType: "design-lead" | "ai-development" | "full-stack" | "design-only";
    timeline: string;
    teamSize?: string;

    // Sections
    aboutProject: string;
    clientRequest: string;
    challenges: string[];
    approach: string[];
    interestingFacts: string[];
    summary: string;

    // Tools & Features
    tools: string[];
    coreFeatures: {
        title: string;
        description: string;
        icon?: LucideIcon;
    }[];

    // Results (optional metrics)
    results?: {
        metric: string;
        value: string;
        description: string;
    }[];

    // Navigation
    prevProject?: { title: string; slug: string };
    nextProject?: { title: string; slug: string };
}

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

function getRoleBadgeStyle(roleType: CaseStudyData["roleType"]) {
    switch (roleType) {
        case "ai-development":
            return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
        case "design-lead":
            return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
        case "full-stack":
            return "bg-gradient-to-r from-green-500 to-emerald-500 text-white";
        case "design-only":
            return "bg-gradient-to-r from-orange-500 to-amber-500 text-white";
        default:
            return "bg-gray-100 text-gray-800";
    }
}

function getRoleLabel(roleType: CaseStudyData["roleType"]) {
    switch (roleType) {
        case "ai-development":
            return "AI-Powered Development";
        case "design-lead":
            return "Design & UI Lead";
        case "full-stack":
            return "Full Stack Development";
        case "design-only":
            return "UI/UX Design";
        default:
            return "Development";
    }
}

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${data.title} - Case Study by Ankur Das`,
        author: {
            "@type": "Person",
            name: "Ankur Das",
            jobTitle: "UI/UX Design Lead & AI-Powered Frontend Developer",
        },
        description: data.aboutProject,
        keywords: data.tools.join(", "),
    };

    return (
        <div className="min-h-screen bg-white font-['Figtree']">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Back Button */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-gray-600 hover:text-accent transition-colors group"
                >
                    <ArrowLeft
                        size={20}
                        className="mr-2 group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Projects
                </Link>
            </motion.div>

            {/* Hero Section */}
            <motion.section
                className="py-12 md:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div {...fadeInUp}>
                            {/* Category & Role Badges */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                    {data.category}
                                </span>
                                <span
                                    className={`text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1.5 ${getRoleBadgeStyle(data.roleType)}`}
                                >
                                    {data.roleType === "ai-development" && <Sparkles size={14} />}
                                    {getRoleLabel(data.roleType)}
                                </span>
                            </div>

                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {data.title}
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {data.subtitle}
                            </motion.p>

                            {/* Meta Info */}
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.div
                                    variants={staggerItem}
                                    className="bg-gray-50 p-4 rounded-xl"
                                >
                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                                        Role
                                    </div>
                                    <div className="font-semibold text-gray-900 text-sm">
                                        {data.role}
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={staggerItem}
                                    className="bg-gray-50 p-4 rounded-xl"
                                >
                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                                        Timeline
                                    </div>
                                    <div className="font-semibold text-gray-900 text-sm">
                                        {data.timeline}
                                    </div>
                                </motion.div>
                                {data.teamSize && (
                                    <motion.div
                                        variants={staggerItem}
                                        className="bg-gray-50 p-4 rounded-xl"
                                    >
                                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                                            Team
                                        </div>
                                        <div className="font-semibold text-gray-900 text-sm">
                                            {data.teamSize}
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* CTA */}
                            <motion.a
                                href={data.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg shadow-accent/25"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink size={20} className="mr-2" />
                                View Live Site
                            </motion.a>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 60, rotateY: -10 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                                <Image
                                    src={data.heroImage}
                                    alt={data.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* About Project */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Overview
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                            About the Project
                        </h2>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {data.aboutProject}
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Client Request */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            The Brief
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Client Request
                        </h2>
                    </motion.div>

                    <motion.div
                        className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-6 left-6 text-6xl text-white/20 font-serif">
                            &ldquo;
                        </div>
                        <p className="text-lg leading-relaxed relative z-10 pl-8">
                            {data.clientRequest}
                        </p>
                        <div className="absolute bottom-6 right-6 text-6xl text-white/20 font-serif">
                            &rdquo;
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Problem Space
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Key Challenges
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.challenges.map((challenge, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                                        <Target size={20} className="text-red-500" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Approach */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            My Approach
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-pink-500 hidden md:block" />

                        {data.approach.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={`md:w-1/2 ${index % 2 === 0 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}
                                >
                                    <div
                                        className={`bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? "" : "md:ml-auto"}`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <Zap size={18} className="text-accent" />
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-left">
                                            {step}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Core Features */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Deliverables
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Core Features
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.coreFeatures.map((feature, index) => {
                            const IconComponent = feature.icon || CheckCircle2;
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                        <IconComponent
                                            size={24}
                                            className="text-accent group-hover:text-white transition-colors"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Interesting Facts */}
            <motion.section
                className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Behind the Scenes
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Interesting Facts
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.interestingFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Lightbulb size={20} className="text-white" />
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">{fact}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Tools */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Tech Stack
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Tools & Technologies
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {data.tools.map((tool, index) => (
                            <motion.span
                                key={tool}
                                className="bg-gray-100 hover:bg-accent hover:text-white px-6 py-3 rounded-full text-gray-700 font-medium transition-all duration-300 cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Results */}
            {data.results && data.results.length > 0 && (
                <motion.section
                    className="py-16 bg-gray-50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                                Impact
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                                Results Achieved
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {data.results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                        {result.value}
                                    </div>
                                    <div className="font-semibold text-gray-900 mb-1">
                                        {result.metric}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {result.description}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Summary */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                            Conclusion
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Project Summary
                        </h2>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-br from-accent/5 to-purple-50 p-8 md:p-12 rounded-2xl border border-accent/10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {data.summary}
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Navigation */}
            <motion.section
                className="py-12 bg-gray-50 border-t"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {data.prevProject ? (
                            <Link
                                href={`/case-study/${data.prevProject.slug}`}
                                className="group text-left hover:translate-x-[-4px] transition-transform"
                            >
                                <span className="text-sm text-gray-500 flex items-center">
                                    <ArrowLeft size={14} className="mr-1" /> Previous Project
                                </span>
                                <div className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                                    {data.prevProject.title}
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        <motion.a
                            href={data.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-white px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center shadow-lg shadow-accent/25"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={18} className="mr-2" />
                            View Live Site
                        </motion.a>

                        {data.nextProject ? (
                            <Link
                                href={`/case-study/${data.nextProject.slug}`}
                                className="group text-right hover:translate-x-[4px] transition-transform"
                            >
                                <span className="text-sm text-gray-500 flex items-center justify-end">
                                    Next Project <ArrowLeft size={14} className="ml-1 rotate-180" />
                                </span>
                                <div className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                                    {data.nextProject.title}
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
