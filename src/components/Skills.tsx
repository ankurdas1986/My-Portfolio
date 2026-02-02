"use client";

import { Code, Palette, Users, Zap, Bot, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      icon: <Palette size={32} />,
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Adobe Photoshop", level: 85 },
        { name: "Canva", level: 90 },
        { name: "Prototyping", level: 90 },
      ],
    },
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3/SCSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      icon: <Bot size={32} />,
      title: "AI-Powered Development",
      skills: [
        { name: "v0 by Vercel", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "Cursor AI", level: 80 },
        { name: "GitHub Copilot", level: 85 },
        { name: "AI Workflow Design", level: 85 },
      ],
    },
    {
      icon: <Zap size={32} />,
      title: "Modern Technologies",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 85 },
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Leadership & Process",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "UX Research", level: 80 },
        { name: "Wireframing", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Mentoring", level: 90 },
      ],
    },
    {
      icon: <Globe size={32} />,
      title: "Workflow & Ecosystem",
      skills: [
        { name: "Git & Version Control", level: 95 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "SEO Optimization", level: 90 },
        { name: "Web Accessibility (A11y)", level: 95 },
        { name: "Cross-Browser Testing", level: 95 },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Jira",
    "Git",
    "Vercel",
    "GitHub",
    "Notion",
    "Slack",
    "Linear",
    "Zeplin",
    "Storybook",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    }),
  };

  const toolVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
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
            className="text-3xl sm:text-4xl font-medium text-foreground mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive toolkit built over{" "}
            <span className="font-semibold text-accent">10+ years</span> of
            experience, now enhanced with{" "}
            <span className="font-semibold text-purple-400">
              AI-powered development
            </span>{" "}
            capabilities.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-accent mr-4 p-2 bg-accent/10 rounded-lg"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-medium text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-foreground text-sm font-medium">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-gray-500 text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-accent to-blue-500 rounded-full h-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                        variants={skillBarVariants}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tools & Technologies */}
        <motion.div
          className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-medium text-foreground mb-6 text-center">
            Tools & Workflow
          </h3>
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                className="bg-background text-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-gray-200 hover:border-accent hover:text-accent cursor-pointer transition-colors duration-200"
                variants={toolVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Projects Delivered" },
            { value: "20+", label: "AI-Built Projects" },
            { value: "10+", label: "Team Members Led" },
            { value: "25+", label: "Global Clients" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl font-bold text-accent mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
