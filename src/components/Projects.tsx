"use client";

import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      id: "aquarious-usa",
      title: "Aquarious Technology USA",
      category: "Technology/SaaS",
      description:
        "Enterprise software development & AI automation services landing page with modern glassmorphism design",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Next.js", "v0 AI", "Framer Motion", "Tailwind CSS"],
      role: "UI/UX Design Lead + AI Development",
      link: "https://usa.theaquarious.com/",
      caseStudyLink: "/case-study/aquarious-usa",
      aiDeveloped: true,
      highlights: [
        "AI-powered development workflow with v0",
        "Custom software solutions showcase",
        "Client testimonials & case studies integration",
      ],
    },
    {
      id: "madiha-ortho",
      title: "Madiha Ortho",
      category: "Healthcare/Manufacturing",
      description:
        "ISO 13485 certified orthopedic implants manufacturer website with product catalog and global export services",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Next.js", "v0 AI", "TypeScript", "Responsive Design"],
      role: "UI/UX Design Lead + AI Frontend Development",
      link: "https://v0-madiha-ortho-kc.vercel.app/",
      caseStudyLink: "/case-study/madiha-ortho",
      aiDeveloped: true,
      highlights: [
        "Medical device product catalog system",
        "Global distribution partner portal",
        "Certification & compliance showcase",
      ],
    },
    {
      id: "nexg-petrolube",
      title: "NexG Petrolube",
      category: "Energy/Petroleum",
      description:
        "B2B petroleum trading platform with digital marketplace and used oil recovery services",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Next.js", "v0 AI", "GSAP", "Modern CSS"],
      role: "UI/UX Design Lead + AI Development",
      link: "https://www.nexgpetrolube.com/",
      caseStudyLink: "/case-study/nexg-petrolube",
      aiDeveloped: true,
      highlights: [
        "Sustainability-focused design language",
        "Multi-service business showcase",
        "Client testimonials carousel",
      ],
    },
    {
      id: "used-oil-india",
      title: "Used Oil India",
      category: "Environmental Tech",
      description:
        "Used oil recycling marketplace connecting generators and collectors for sustainable waste management",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Next.js", "v0 AI", "React", "Mobile-First Design"],
      role: "UI/UX Design Lead + AI Development",
      link: "https://usedoilindia.com/",
      caseStudyLink: "/case-study/used-oil-india",
      aiDeveloped: true,
      highlights: [
        "Environmental sustainability focus",
        "Mobile app integration showcase",
        "Real-time statistics dashboard",
      ],
    },
    {
      id: "petrolube-trade",
      title: "Petrolube Trade",
      category: "B2B Marketplace",
      description:
        "B2B petrochemical trading platform enabling transparent transactions between buyers and sellers",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Next.js", "v0 AI", "TypeScript", "Modern UI"],
      role: "UI/UX Design Lead + AI Frontend Development",
      link: "https://petrolubetrade.com/",
      caseStudyLink: "/case-study/petrolube-trade",
      aiDeveloped: true,
      highlights: [
        "B2B marketplace design patterns",
        "Trading workflow optimization",
        "Secure transaction interface",
      ],
    },
    {
      id: "divine-homestead",
      title: "Divine Homestead Design",
      category: "Architecture/Real Estate",
      description:
        "Custom home planning website with modern design and AI-assisted development",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Figma", "v0 AI", "Next.js", "Responsive Design"],
      role: "UI/UX Design Lead + AI Development",
      link: "https://www.divinehomesteaddesign.com/",
      caseStudyLink: "/case-study/divine-homestead",
      aiDeveloped: true,
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
        "Comprehensive oncology information portal with specialist services and patient resources",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["Figma", "React", "HTML/CSS", "Medical UI"],
      role: "UI/UX Design Lead + Frontend Developer",
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
      title: "Premium Transfers UK",
      category: "Transportation/Travel",
      description:
        "Premium chauffeur service platform with seamless booking experience for UK travelers",
      image: "/images/premium-transfer-thumb.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      role: "UI/UX Design Lead + Frontend Developer",
      link: "https://www.premiumtransfers.co.uk/",
      caseStudyLink: "/case-study/premium-transfer",
      highlights: [
        "Luxury brand positioning",
        "Booking flow optimization",
        "Mobile-first responsive design",
      ],
    },
    {
      id: "finomatic",
      title: "Finomatic",
      category: "FinTech/Gaming",
      description:
        "Complete website design & development for innovative board game company with web integration",
      image: "/images/finomatic-thumb.jpg",
      technologies: ["Figma", "HTML5", "CSS3", "Interactive Design"],
      role: "UI/UX Design Lead + Full Development",
      link: "https://finomatic.in/",
      caseStudyLink: "/case-study/finomatic",
      fullDesign: true,
      highlights: [
        "End-to-end design ownership",
        "Gaming interface design",
        "Brand identity development",
      ],
    },
    {
      id: "now-it-yours",
      title: "Now It Yours",
      category: "E-commerce",
      description:
        "E-commerce platform with focus on user experience, conversion optimization, and seamless checkout",
      image: "/images/now-it-yours-thumb.jpg",
      technologies: ["Figma", "Web UI/UX", "E-commerce", "Conversion Design"],
      role: "UI/UX Design Lead",
      link: "https://nowitsyoursth.com/",
      caseStudyLink: "/case-study/now-it-yours",
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
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
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
          {projects.map((project) => (
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
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.span>
                    {"aiDeveloped" in project && project.aiDeveloped && (
                      <motion.span
                        className="text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full flex items-center gap-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Sparkles size={12} />
                        AI Built
                      </motion.span>
                    )}
                  </div>
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
                  className="text-xl font-bold text-gray-900 mb-2"
                  whileHover={{ color: "#00A2FF" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Role:
                  </div>
                  <div className="text-sm text-gray-700">{project.role}</div>
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Key Highlights:
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
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
            <span className="relative z-10">Let&apos;s Discuss Your Project</span>
            <motion.div
              className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              initial={{ x: "-150%" }}
              whileHover={{ x: "150%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
