"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Leaf, BarChart3, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function UsedOilIndiaCaseStudy() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Used Oil India - Sustainable Tech Solutions",
        "author": { "@type": "Person", "name": "Ankur Das" },
        "description": "Connecting the waste oil recycling industry through a high-performance digital marketplace built with AI assistance."
    };

    return (
        <div className="min-h-screen bg-white font-['Figtree']">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link href="/#projects" className="inline-flex items-center text-gray-600 hover:text-gray-900 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>
            </motion.div>

            <motion.section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl font-bold mb-6">Used Oil India</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            A digital platform driving sustainability in the oil sector, powered by data-driven design and AI development.
                        </p>

                        <a href="https://usedoilindia.com/" target="_blank" className="btn-primary inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90">
                            <ExternalLink size={18} className="mr-2" /> Visit Live Platform
                        </a>
                    </motion.div>

                    <div className="bg-green-50 rounded-xl aspect-video flex items-center justify-center">
                        <Leaf size={64} className="text-green-600" />
                    </div>
                </div>
            </motion.section>

            <section className="py-16 bg-white border-t">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">The Tech Stack & My Role</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-blue-100 p-3 rounded-full"><Database size={24} className="text-blue-600" /></div>
                            <div>
                                <h3 className="text-xl font-bold">Full Stack Logic</h3>
                                <p className="text-gray-600">I handled the frontend integration with the backend APIs, ensuring smooth data flow for the marketplace listings.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-full"><BarChart3 size={24} className="text-purple-600" /></div>
                            <div>
                                <h3 className="text-xl font-bold">AI Analytics</h3>
                                <p className="text-gray-600">Leveraged AI tools to analyze user behavior data during the beta phase, optimizing the UI for higher conversion rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
