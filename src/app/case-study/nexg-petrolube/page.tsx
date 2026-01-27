"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, User, Droplets, Zap, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function NexGPetrolubeCaseStudy() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "NexG Petrolube - Industrial Web Solution",
        "author": { "@type": "Person", "name": "Ankur Das" },
        "description": "Modernizing industrial web presence with AI-generated content strategies and robust frontend architecture."
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
                        <h1 className="text-4xl font-bold mb-6">NexG Petrolube</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Redefining industrial digital presence through clean, authoritative design and AI-optimized content structure.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <div className="px-4 py-2 bg-gray-100 rounded-lg">
                                <span className="block text-xs text-gray-500">Role</span>
                                <span className="font-semibold">Lead Developer</span>
                            </div>
                            <div className="px-4 py-2 bg-purple-50 rounded-lg">
                                <span className="block text-xs text-purple-600">Tech</span>
                                <span className="font-semibold text-purple-700">AI + Next.js</span>
                            </div>
                        </div>

                        <a href="https://www.nexgpetrolube.com/" target="_blank" className="btn-primary inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90">
                            <ExternalLink size={18} className="mr-2" /> Visit Site
                        </a>
                    </motion.div>

                    <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                        <Droplets size={64} className="text-gray-400" />
                    </div>
                </div>
            </motion.section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">My Impact</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <Zap className="mx-auto mb-4 text-orange-500" />
                            <h3 className="font-bold mb-2">Technical Leadership</h3>
                            <p className="text-sm text-gray-600">Led the complete frontend overhaul, ensuring 95+ PageSpeed scores.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <User className="mx-auto mb-4 text-blue-500" />
                            <h3 className="font-bold mb-2">Client Success</h3>
                            <p className="text-sm text-gray-600">Directly managed client expectations and delivered 2 weeks ahead of schedule.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm">
                            <Code className="mx-auto mb-4 text-purple-500" />
                            <h3 className="font-bold mb-2">AI Implementation</h3>
                            <p className="text-sm text-gray-600">Used AI to auto-generate technical product descriptions, saving ~40 hours of manual entry.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
