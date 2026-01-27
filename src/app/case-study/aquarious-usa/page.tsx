"use client";

import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    Calendar,
    User,
    Layout,
    Cpu,
    Users,
    Code,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AquariousUSACaseStudy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Aquarious Technology USA - AI & Frontend Development Case Study",
        "author": {
            "@type": "Person",
            "name": "Ankur Das",
            "jobTitle": "Team Leader & UI/UX Designer"
        },
        "description": "Leading the development of Aquarious Technology's US presence using Next.js and AI-driven workflows.",
        "keywords": "Next.js, React, Team Leadership, AI Development, Frontend Architecture"
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
                                Aquarious Technology USA
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Leading the digital expansion into the US market with a high-performance, AI-integrated web platform.
                            </motion.p>

                            {/* Project Meta */}
                            <motion.div
                                className="grid grid-cols-2 gap-6 mb-8"
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.div
                                    variants={staggerItem}
                                    className="flex items-center"
                                >
                                    <User size={20} className="text-gray-700 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-600">Role</div>
                                        <div className="font-semibold text-gray-900">
                                            Team Lead & Lead Developer
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={staggerItem}
                                    className="flex items-center"
                                >
                                    <Calendar size={20} className="text-gray-700 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-600">Timeline</div>
                                        <div className="font-semibold text-gray-900">
                                            2023 - Present
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={staggerItem}
                                    className="flex items-center"
                                >
                                    <Users size={20} className="text-gray-700 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-600">Team Size</div>
                                        <div className="font-semibold text-gray-900">
                                            5 Members
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    variants={staggerItem}
                                    className="flex items-center"
                                >
                                    <Cpu size={20} className="text-gray-700 mr-3" />
                                    <div>
                                        <div className="text-sm text-gray-600">Tech Stack</div>
                                        <div className="font-semibold text-gray-900">
                                            Next.js, AI Tools
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={staggerContainer}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.a
                                    href="https://usa.theaquarious.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                                    variants={staggerItem}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ExternalLink size={20} className="mr-2" />
                                    View Live Site
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Hero Image Placeholder */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="aspect-video bg-gray-100 rounded-lg shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                                <div className="text-center text-gray-500">
                                    <Layout size={48} className="mx-auto mb-4 text-accent" />
                                    <p className="font-semibold">Aquarious USA Platform</p>
                                    <p className="text-sm mt-2">High-Performance Next.js Architecture</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Project Overview */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-8 text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        Project Overview
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.02, rotateY: 2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                The Challenge
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Aquarious Technology needed to establish a strong digital presence in the competitive US market. The challenge was to build a platform that not only showcased technical capability but also adhered to strict US web standards for accessibility, speed, and SEO. As **Team Lead**, I was responsible for the entire delivery pipeline, from architecture to deployment.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.02, rotateY: -2 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                            <p className="text-gray-600 leading-relaxed">
                                I architected a **Next.js** solution leveraging Server Side Rendering (SSR) for optimal SEO. I led a team of 5, implementing a component-based design system that accelerated development by 40%. We utilized **AI tools** for rapid prototyping and code optimization, ensuring we met aggressive deadlines without compromising on quality.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Leadership & Tech Role */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-12 text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        My Double-Role Impact
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users size={28} className="text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Team Leadership
                            </h3>
                            <p className="text-gray-600">
                                Managed sprint planning, code reviews, and resource allocation for a 5-member team. Mentored junior developers on React patterns and clean code principles.
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Code size={28} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Hands-on Development
                            </h3>
                            <p className="text-gray-600">
                                Personally coded the core layout engine and complex interactive components. Implemented the responsive grid system and global state management.
                            </p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cpu size={28} className="text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                AI Integration
                            </h3>
                            <p className="text-gray-600">
                                Integrated AI-driven content generation and image optimization workflows, reducing content population time by 60% and improving site performance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Tech Stack */}
            <motion.section
                className="py-16 bg-gray-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-gray-900 mb-8 text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        Technologies Used
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "Typescript", "Vercel Deployment", "AI Tools"].map(
                            (tech, index) => (
                                <motion.span
                                    key={tech}
                                    className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-sm border border-gray-200"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: "#00A2FF", color: "#00A2FF" }}
                                >
                                    {tech}
                                </motion.span>
                            )
                        )}
                    </div>
                </div>
            </motion.section>

            {/* Results */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Project Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                                <div className="text-blue-100">Faster Delivery</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">99/100</div>
                                <div className="text-blue-100">Performance Score</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                                <div className="text-blue-100">Team Members Led</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
