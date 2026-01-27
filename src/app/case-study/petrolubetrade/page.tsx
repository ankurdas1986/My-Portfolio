"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, Smartphone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PetrolubeTradeCaseStudy() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Petrolube Trade - Global Trading Platform",
        "author": { "@type": "Person", "name": "Ankur Das" },
        "description": "A secure, responsive trading platform for the petrochemical industry."
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold mb-4">Petrolube Trade</h1>
                        <p className="text-xl text-gray-600">Connecting global markets with a seamless, secure trading interface.</p>
                        <div className="mt-8">
                            <a href="https://petrolubetrade.com/" target="_blank" className="text-accent hover:underline inline-flex items-center font-semibold">
                                Visit Live Website <ExternalLink size={16} className="ml-1" />
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <Globe className="mb-4 text-blue-500" size={32} />
                            <h3 className="font-bold text-lg">Global Reach</h3>
                            <p className="text-gray-600 text-sm">Implemented multi-currency support and localization features.</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <Smartphone className="mb-4 text-green-500" size={32} />
                            <h3 className="font-bold text-lg">Mobile First</h3>
                            <p className="text-gray-600 text-sm">Designed with a &quot;Mobile First&quot; philosophy to cater to traders on the go.</p>
                        </div>
                        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                            <ShieldCheck className="mb-4 text-purple-500" size={32} />
                            <h3 className="font-bold text-lg">AI Security</h3>
                            <p className="text-gray-600 text-sm">Explored AI pattern matching for detecting potential fraudulent leads on the platform.</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
