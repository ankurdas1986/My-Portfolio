"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Gamepad2,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FinomaticCaseStudy() {
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
    "headline": "Finomatic - Interactive Board Game UI",
    "author": { "@type": "Person", "name": "Ankur Das" },
    "description": "Innovative board game UI development with seamless web integration and interactive gaming experience.",
    "keywords": "Game UI, Board Game, Web Development, Interactive Design"
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
                Finomatic
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Innovative board game UI development with seamless web
                integration and interactive gaming experience
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
                      UI Designer + Game UI Developer
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={staggerItem}
                  className="flex items-center"
                >
                  <Calendar size={20} className="text-gray-700 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Industry</div>
                    <div className="font-semibold text-gray-900">
                      Web UI & Gaming
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
                  href="https://finomatic.in/"
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
              <div className="aspect-video bg-gray-100 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Gamepad2 size={48} className="mx-auto mb-4" />
                  <p>Hero Image Placeholder</p>
                  <p className="text-sm">(Finomatic Gaming Platform)</p>
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
                Challenge
              </h3>
              <p className="text-gray-600">
                Finomatic required a unique approach to board game UI
                development that could seamlessly integrate with web platforms.
                The challenge was to create an engaging gaming interface that
                maintains the traditional board game feel while leveraging
                modern web technologies for enhanced user interaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                As UI Designer and Game UI Developer, I created an innovative
                gaming interface that bridges traditional board game mechanics
                with modern web interactions. The solution combines interactive
                design principles with web-to-game integration for a seamless
                user experience.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Design Process */}
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
            Design & Development Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Gaming Interface Design
              </h3>
              <p className="text-gray-600">
                Researched board game UI patterns and created innovative
                interface designs that combine traditional gaming elements with
                modern digital interaction principles.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Web Integration Development
              </h3>
              <p className="text-gray-600">
                Developed seamless web-to-game integration using modern web
                technologies, ensuring smooth transitions between web interface
                and gaming experience.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Interactive Experience
              </h3>
              <p className="text-gray-600">
                Implemented interactive design elements that enhance user
                engagement while maintaining the authentic board game experience
                through digital medium.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="py-16 bg-gray-50"
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
            Key Features & Gaming Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gaming Interface Design",
                description:
                  "Intuitive board game UI that combines traditional gaming elements with modern digital design",
                image: "gaming-interface-placeholder",
              },
              {
                title: "Interactive User Experience",
                description:
                  "Engaging interactions that enhance gameplay while maintaining ease of use and accessibility",
                image: "interactive-ux-placeholder",
              },
              {
                title: "Web-to-Game Integration",
                description:
                  "Seamless bridge between web platform and gaming environment with smooth transitions",
                image: "web-integration-placeholder",
              },
              {
                title: "Board Game Mechanics",
                description:
                  "Digital implementation of traditional board game rules and mechanics with visual feedback",
                image: "game-mechanics-placeholder",
              },
              {
                title: "Real-time Interactions",
                description:
                  "Live gaming features with real-time updates and responsive user interface elements",
                image: "realtime-placeholder",
              },
              {
                title: "Cross-Platform Gaming",
                description:
                  "Consistent gaming experience across different devices and web browsers",
                image: "cross-platform-placeholder",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-sm">Feature Image</div>
                    <div className="text-xs">({feature.image})</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Used */}
      <motion.section
        className="py-16 bg-white"
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
            Technologies & Tools
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Web UI", "Board Game UI", "Interactive Design"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-accent hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                >
                  <div className="text-lg font-semibold">{tech}</div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* Results & Impact */}
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
            Results & Impact
          </motion.h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  Innovative
                </div>
                <div className="text-gray-600">Gaming Interface</div>
                <div className="text-sm text-gray-500">
                  Unique board game UI design
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  Seamless
                </div>
                <div className="text-gray-600">Web Integration</div>
                <div className="text-sm text-gray-500">
                  Smooth web-to-game experience
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  Enhanced
                </div>
                <div className="text-gray-600">User Engagement</div>
                <div className="text-sm text-gray-500">
                  Interactive gaming experience
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Gaming Innovation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Created innovative board game UI that bridges traditional
                  and digital gaming experiences
                </li>
                <li>
                  • Developed seamless web-to-game integration with smooth user
                  transitions
                </li>
                <li>
                  • Implemented interactive design elements that enhance user
                  engagement and gameplay
                </li>
                <li>
                  • Established new standards for board game digital interface
                  design
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.section
        className="py-12 bg-white border-t"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/case-study/premium-transfer"
              className="group text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">← Previous Project</span>
              <div className="text-lg font-semibold group-hover:-translate-x-1 transition-transform">
                Premium Transfer
              </div>
            </Link>

            <Link
              href="/case-study/now-it-yours"
              className="group text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">Next Project</span>
              <div className="text-lg font-semibold group-hover:translate-x-1 transition-transform">
                Now It Yours →
              </div>
            </Link>

            <motion.a
              href="https://finomatic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} className="mr-2" />
              View Live Site
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
