"use client";

import Image from "next/image";
import { ExternalLink, Github, Figma } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      id: "divine-homestead",
      title: "Divine Homestead Design",
      category: "Architecture/Real Estate",
      description:
        "Custom home planning website with modern design and AI-assisted development",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Figma", "VO AI", "Next.js", "Responsive Design"],
      role: "UI Designer + AI Development Lead",
      link: "https://www.divinehomesteaddesign.com/",
      caseStudyLink: "/case-study/divine-homestead",
      highlights: [
        "Clean modern architecture-focused design",
        "AI-assisted development workflow",
        "Professional consultation booking system",
      ],
    },
    {
      id: "mumbai-cancer",
      title: "Mumbai Cancer",
      category: "Healthcare/Medical",
      description:
        "Comprehensive oncology information portal with specialist services",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Figma", "React", "HTML/CSS", "Medical UI"],
      role: "UI Designer + Frontend Developer",
      link: "https://mumbaicancer.in/",
      caseStudyLink: "/case-study/mumbai-cancer",
      highlights: [
        "Healthcare-focused user interface",
        "Medical information architecture",
        "Accessible design for patients",
      ],
    },
    {
      id: "premium-transfer",
      title: "Premium Transfer",
      category: "Web & Mobile UI",
      description:
        "Comprehensive transfer service platform with mobile app integration",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["HTML5", "Mobile UI", "Responsive Design"],
      role: "UI/UX Designer + Developer",
      link: "https://www.premiumtransfers.co.uk/",
      caseStudyLink: "/case-study/premium-transfer",
      link: "https://www.premiumtransfers.co.uk/",
      highlights: [
        "Cross-platform design consistency",
        "Mobile-first approach",
        "Transfer service optimization",
      ],
    },
    {
      id: "finomatic",
      title: "Finomatic",
      category: "Web UI & Gaming",
      description: "Innovative board game UI development with web integration",
      image: "/images/finomatic-thumb.jpg",
      technologies: ["Web UI", "Board Game UI", "Interactive Design"],
      role: "UI Designer + Game UI Developer",
      link: "https://finomatic.in/",
      caseStudyLink: "/case-study/finomatic",
      link: "https://finomatic.in/",
      highlights: [
        "Gaming interface design",
        "Interactive user experience",
        "Web-to-game integration",
      ],
    },
    {
      id: "now-it-yours",
      title: "Now It Yours",
      category: "Web UI/UX",
      description:
        "E-commerce platform with focus on user experience and conversion",
      image: "/images/now-it-yours-thumb.jpg",
      technologies: ["Web UI/UX", "E-commerce", "Conversion Optimization"],
      role: "UI/UX Designer",
      link: "https://nowitsyoursth.com/",
      caseStudyLink: "/case-study/now-it-yours",
      link: "https://nowitsyoursth.com/",
      highlights: [
        "E-commerce user experience",
        "Conversion-focused design",
        "User journey optimization",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-black mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my work across different industries, demonstrating
            expertise in UI/UX design, frontend development, and team
            leadership.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <motion.div
                className="relative h-64 bg-gray-50 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Project Content */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <motion.span
                    className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.category}
                  </motion.span>
                  <div className="flex gap-2">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-accent transition-colors"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <motion.h3
                  className="text-xl font-bold text-black mb-2"
                  whileHover={{ color: "#00A2FF" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-black mb-1">
                    Role:
                  </div>
                  <div className="text-sm text-gray-700">{project.role}</div>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-black mb-2">
                    Key Highlights:
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <span className="text-gray-600 mr-2">•</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-accent hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={project.caseStudyLink}
                    className="group inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors relative overflow-hidden"
                  >
                    <span className="relative z-10">View Case Study →</span>
                    <motion.div
                      className="absolute inset-0 bg-accent/10 rounded-md -mx-2 -my-1"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Interested in working together?
          </motion.p>
          <motion.a
            href="#contact"
            className="group bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 inline-flex items-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Discuss Your Project</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
