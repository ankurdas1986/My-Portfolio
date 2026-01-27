"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumTransferCaseStudy() {
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

  return (
    <div className="min-h-screen bg-white font-['Figtree']">
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
                Premium Transfer
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comprehensive transfer service platform with seamless mobile app
                integration and cross-platform consistency
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
                      UI/UX Designer + Developer
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
                      Web & Mobile UI
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
                  href="https://www.premiumtransfers.co.uk/"
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
                  <Globe size={48} className="mx-auto mb-4" />
                  <p>Hero Image Placeholder</p>
                  <p className="text-sm">(Premium Transfer Platform)</p>
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
                Premium Transfer needed a comprehensive digital platform that
                could serve customers across multiple touchpoints - web and
                mobile. The challenge was to create a unified design system that
                maintains consistency while optimizing for different platforms
                and user behaviors in the transfer service industry.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                As UI/UX Designer and Developer, I implemented a mobile-first
                design approach using HTML5 and responsive design principles.
                The solution ensures cross-platform design consistency while
                optimizing the transfer service workflow for maximum user
                efficiency and conversion.
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
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Started with mobile interface design to ensure optimal user
                experience on smaller screens, then progressively enhanced for
                larger devices with responsive breakpoints.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Cross-Platform Development
              </h3>
              <p className="text-gray-600">
                Implemented HTML5 and responsive design techniques to ensure
                consistent functionality and visual design across web browsers
                and mobile applications.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Service Optimization
              </h3>
              <p className="text-gray-600">
                Optimized the transfer service workflow through user journey
                mapping and conversion optimization techniques to maximize
                booking completion rates.
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
            Key Features & Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-Platform Consistency",
                description:
                  "Unified design system ensuring identical user experience across web and mobile platforms",
                image: "cross-platform-placeholder",
              },
              {
                title: "Mobile-First Approach",
                description:
                  "Optimized mobile interface design with touch-friendly controls and streamlined navigation",
                image: "mobile-first-placeholder",
              },
              {
                title: "Transfer Service Optimization",
                description:
                  "Streamlined booking flow with reduced friction and improved conversion rates",
                image: "service-optimization-placeholder",
              },
              {
                title: "Responsive Design",
                description:
                  "Fluid layout adaptation across all screen sizes and device orientations",
                image: "responsive-design-placeholder",
              },
              {
                title: "User Journey Mapping",
                description:
                  "Optimized customer flow from initial search to booking confirmation",
                image: "user-journey-placeholder",
              },
              {
                title: "Performance Optimization",
                description:
                  "Fast loading times and smooth interactions across all platforms and devices",
                image: "performance-placeholder",
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
            {["HTML5", "Mobile UI", "Responsive Design"].map((tech, index) => (
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
            ))}
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
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-gray-600">Cross-Platform</div>
                <div className="text-sm text-gray-500">
                  Design consistency achieved
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  Mobile
                </div>
                <div className="text-gray-600">Optimized Experience</div>
                <div className="text-sm text-gray-500">
                  Mobile-first design approach
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
                <div className="text-gray-600">User Journey</div>
                <div className="text-sm text-gray-500">
                  Streamlined booking flow
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
                Project Achievements
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Successfully implemented cross-platform design consistency
                  across web and mobile
                </li>
                <li>
                  • Created mobile-first responsive design that adapts
                  seamlessly to all screen sizes
                </li>
                <li>
                  • Optimized transfer service workflow resulting in improved
                  user engagement
                </li>
                <li>
                  • Established scalable design system for future platform
                  enhancements
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
              href="/case-study/mumbai-cancer"
              className="group text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">← Previous Project</span>
              <div className="text-lg font-semibold group-hover:-translate-x-1 transition-transform">
                Mumbai Cancer
              </div>
            </Link>

            <Link
              href="/case-study/finomatic"
              className="group text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">Next Project</span>
              <div className="text-lg font-semibold group-hover:translate-x-1 transition-transform">
                Finomatic →
              </div>
            </Link>

            <motion.a
              href="https://www.premiumtransfers.co.uk/"
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
