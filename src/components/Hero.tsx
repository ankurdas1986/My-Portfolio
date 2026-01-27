"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.4 },
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
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden -mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[40rem] h-[40rem] bg-purple-400/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] -right-[10%] w-[35rem] h-[35rem] bg-blue-400/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[20%] left-[20%] w-[45rem] h-[45rem] bg-pink-400/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div className="text-center lg:text-left" {...fadeInLeft}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-black bg-gradient-to-r from-accent to-blue-600 bg-clip-text text-transparent animate-pulse">
                Ankur Das
              </span>
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              UI/UX Design Lead & AI-Powered Frontend Developer
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-gray-900 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting seamless, user-focused digital experiences with{" "}
              <span className="font-bold text-black text-3xl">15+ years</span> of
              industry expertise. Leading teams and building exceptional web
              applications with{" "}
              <span className="font-semibold text-purple-600">
                AI-powered development
              </span>{" "}
              workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href="#projects"
                className="group bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 relative overflow-hidden"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="group border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 relative overflow-hidden"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href="https://www.linkedin.com/in/ankur-das-uidesigner-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-gray-800 transform hover:scale-110 hover:-translate-y-1"
                variants={staggerItem}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-gray-800 transform hover:scale-110 hover:-translate-y-1"
                variants={staggerItem}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="mailto:ankurdas1986@gmail.com"
                className="group p-3 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-gray-800 transform hover:scale-110 hover:-translate-y-1"
                variants={staggerItem}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            {...fadeInRight}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full leading-none">
                <Image
                  src="/images/Ankur-Das.png"
                  alt="Ankur Das - UI/UX Designer & Team Leader"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover block transition-transform duration-300 hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
            <ArrowDown size={24} className="text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
