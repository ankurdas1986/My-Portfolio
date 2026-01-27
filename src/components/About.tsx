"use client";

import { Users, Award, Code, Palette } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const highlights = [
    {
      icon: <Users size={32} />,
      title: "Team Leadership",
      description:
        "3+ years leading UI/UX and development teams at Aquarious Technology",
    },
    {
      icon: <Code size={32} />,
      title: "Frontend Expertise",
      description:
        "10+ years of hands-on experience in HTML5, React, SCSS, and modern frameworks",
    },
    {
      icon: <Palette size={32} />,
      title: "Design Mastery",
      description:
        "Expert in Figma, Adobe XD, and creating comprehensive design systems",
    },
    {
      icon: <Award size={32} />,
      title: "Industry Versatility",
      description:
        "Successfully delivered projects across healthcare, real estate, and web applications",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From educator to industry expert to team leader - my journey in
            design and development spans over a decade of continuous learning
            and innovation.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              My Journey in Design & Development
            </motion.h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I began my career in the{" "}
                <strong>educational field (2007-2012)</strong>, teaching web
                design and multimedia to aspiring developers. This foundation in
                education gave me a unique perspective on breaking down complex
                concepts and mentoring others.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Since <strong>2012</strong>, I've been immersed in the industry,
                growing from a web designer to a senior developer, and now
                serving as a <strong>Team Leader</strong> at Aquarious
                Technology. My experience spans traditional development, modern
                frameworks, and even AI-assisted development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I specialize in creating <strong>user-centered designs</strong>{" "}
                that not only look beautiful but solve real business problems.
                My approach combines strategic thinking, technical expertise,
                and team leadership to deliver exceptional digital experiences.
              </motion.p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career Timeline Summary */}
        <motion.div
          className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3
            className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Career Progression
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2"
                whileHover={{ scale: 1.1, color: "#00A2FF" }}
                transition={{ duration: 0.3 }}
              >
                2007-2012
              </motion.div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                Educational Foundation
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Teaching & Training in Web Design
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div
                className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2"
                whileHover={{ scale: 1.1, color: "#00A2FF" }}
                transition={{ duration: 0.3 }}
              >
                2012-2022
              </motion.div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                Industry Growth
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Senior Developer & Designer
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.div
                className="text-2xl font-bold text-accent mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                  color: ["#00A2FF", "#0088cc", "#00A2FF"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2022-Present
              </motion.div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                Leadership Role
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Team Leader & Technical Lead
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
