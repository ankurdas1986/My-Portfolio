"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    User,
    Heart,
    Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

export default function MadihaOrthoCaseStudy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Madiha Ortho - Healthcare UI/UX with AI Efficiency",
        "author": {
            "@type": "Person",
            "name": "Ankur Das",
            "jobTitle": "UI/UX Lead & AI Developer"
        },
        "description": "Building a patient-first orthopedic website using v0 AI for rapid UI prototyping.",
        "keywords": "Healthcare Web Design, v0 AI, Accessibility, UI/UX"
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
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
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
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div {...fadeInUp}>
                            <motion.h1
                                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Madiha Ortho & Rehab
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                A patient-centric digital experience designed with empathy and built with AI-powered efficiency.
                            </motion.p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center">
                                    <User size={20} className="text-gray-700 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-600">Role</div>
                                        <div className="font-semibold text-gray-900">Lead UI/UX & AI Dev</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Cpu size={20} className="text-gray-700 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-600">Approach</div>
                                        <div className="font-semibold text-gray-900">AI-First Design</div>
                                    </div>
                                </div>
                            </div>

                            <motion.a
                                href="https://v0-madiha-ortho-kc.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink size={20} className="mr-2" />
                                View Prototype
                            </motion.a>
                        </motion.div>

                        {/* Placeholder Image */}
                        <motion.div
                            className="aspect-video bg-green-50 rounded-xl flex items-center justify-center shadow-lg"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Heart size={64} className="text-green-500 opacity-80" />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Challenge / Solution */}
            <motion.section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">The AI Advantage</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Fast-Tracked UI</h3>
                            <p className="text-gray-600">
                                Using <strong>v0 by Vercel</strong>, I generated accessible UI components for patient forms and appointment booking 5x faster than traditional coding.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Hands-on Refinement</h3>
                            <p className="text-gray-600">
                                While AI built the shell, I manually refined the UX to ensure high contrast and ease of use for elderly patients, proving the value of <strong>Human-in-the-Loop</strong> AI development.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
