"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function NowItYoursCaseStudy() {
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
                Now It Yours
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                E-commerce platform designed with conversion optimization focus
                and exceptional user experience journey
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
                      UI/UX Designer
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
                    <div className="font-semibold text-gray-900">Web UI/UX</div>
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
                  href="https://nowitsyoursth.com/"
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
                  <ShoppingCart size={48} className="mx-auto mb-4" />
                  <p>Hero Image Placeholder</p>
                  <p className="text-sm">(Now It Yours E-commerce)</p>
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
                Now It Yours needed an e-commerce platform that could
                effectively convert visitors into customers. The challenge was
                to design a user experience that reduces purchase friction while
                building trust and guiding users through an optimized conversion
                funnel from discovery to checkout.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600">
                As UI/UX Designer, I focused on conversion optimization and user
                journey mapping to create an intuitive e-commerce experience.
                The design emphasizes clear product presentation, streamlined
                checkout process, and strategic placement of trust signals
                throughout the user journey.
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
            Design & UX Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. E-commerce UX Research
              </h3>
              <p className="text-gray-600">
                Conducted comprehensive e-commerce user research to understand
                shopping behaviors, pain points, and conversion optimization
                opportunities specific to the target market.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Conversion Optimization
              </h3>
              <p className="text-gray-600">
                Designed conversion-focused interface elements including
                optimized product pages, streamlined checkout flow, and
                strategic call-to-action placement for maximum conversion rates.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. User Journey Optimization
              </h3>
              <p className="text-gray-600">
                Mapped and optimized the complete customer journey from initial
                product discovery through purchase completion, reducing friction
                and improving user satisfaction.
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
            Key Features & E-commerce Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce User Experience",
                description:
                  "Intuitive shopping interface designed to reduce purchase friction and enhance user satisfaction",
                image: "ecommerce-ux-placeholder",
              },
              {
                title: "Conversion-Focused Design",
                description:
                  "Strategic design elements optimized for maximum conversion rates and sales performance",
                image: "conversion-design-placeholder",
              },
              {
                title: "User Journey Optimization",
                description:
                  "Streamlined customer path from product discovery to purchase completion",
                image: "user-journey-placeholder",
              },
              {
                title: "Product Showcase",
                description:
                  "Engaging product presentation with high-quality imagery and detailed information architecture",
                image: "product-showcase-placeholder",
              },
              {
                title: "Trust Building Elements",
                description:
                  "Strategic placement of trust signals, reviews, and security indicators throughout the experience",
                image: "trust-elements-placeholder",
              },
              {
                title: "Mobile Commerce",
                description:
                  "Optimized mobile shopping experience with touch-friendly controls and fast checkout",
                image: "mobile-commerce-placeholder",
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
            {["Web UI/UX", "E-commerce", "Conversion Optimization"].map(
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
                  Optimized
                </div>
                <div className="text-gray-600">Conversion Funnel</div>
                <div className="text-sm text-gray-500">
                  Streamlined purchase journey
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  Enhanced
                </div>
                <div className="text-gray-600">User Experience</div>
                <div className="text-sm text-gray-500">
                  Improved shopping satisfaction
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-accent mb-2">
                  Professional
                </div>
                <div className="text-gray-600">E-commerce Platform</div>
                <div className="text-sm text-gray-500">
                  Modern shopping experience
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
                E-commerce Success
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • Created conversion-optimized e-commerce platform with
                  improved user journey flow
                </li>
                <li>
                  • Implemented strategic design elements that enhance trust and
                  reduce purchase friction
                </li>
                <li>
                  • Developed responsive shopping experience optimized for both
                  desktop and mobile users
                </li>
                <li>
                  • Established professional e-commerce presence with focus on
                  user satisfaction and conversion
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
              href="/case-study/finomatic"
              className="group text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">← Previous Project</span>
              <div className="text-lg font-semibold group-hover:-translate-x-1 transition-transform">
                Finomatic
              </div>
            </Link>

            <Link
              href="/case-study/divine-homestead"
              className="group text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="text-sm">Back to First Project</span>
              <div className="text-lg font-semibold group-hover:translate-x-1 transition-transform">
                Divine Homestead Design →
              </div>
            </Link>

            <motion.a
              href="https://nowitsyoursth.com/"
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
