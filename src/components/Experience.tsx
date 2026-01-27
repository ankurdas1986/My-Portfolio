"use client";

import { Building, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      company: "Aquarious Technology Pvt. Ltd.",
      position: "Team Leader - UI/UX and HTML Development",
      duration: "Jan 2022 - Present",
      location: "Kolkata",
      period: "3+ years",
      type: "Current Role",
      description:
        "In this dual-role leadership capacity, I bridge the gap between creative vision and technical execution. Beyond hands-on development of high-performance Next.js applications and intricate UI/UX design, I orchestrate the entire delivery lifecycle for our most critical clients. I actively mentor a cross-functional team, fostering a culture of code quality and design excellence, while implementing scalable frontend architectures that have significantly reduced load times. My role involves strategic decision-making in technology selection, ensuring our solutions are not only visually stunning but also robust, accessible, and future-proof suitable for modern web standards.",
      responsibilities: [
        "Hands-on creation of UI/UX designs, wireframes, and prototypes for major clients",
        "Direct development of complex React/Next.js frontend modules and AI integrations",
        "Lead and mentor a cross-functional team of 5+ designers and developers",
        "Manage end-to-end project lifecycles, resource allocation, and timelines",
        "Spearhead technical decision-making and frontend architecture planning",
        "Direct client engagement for requirement gathering and progress delivery",
      ],
      technologies: [
        "Hands-on Coding",
        "UI/UX Design",
        "Team Leadership",
        "Client Management",
        "Next.js/React",
        "Figma",
      ],
    },
    {
      company: "Aquarious Technology Pvt. Ltd.",
      position: "Senior HTML Developer and UI/UX Designer",
      duration: "Jan 2021 - Feb 2022",
      location: "Kolkata, West Bengal, India",
      period: "1+ years",
      type: "Industry Role",
      description:
        "As a Senior Developer, I played a pivotal role in elevating the agency's design standards and technical capabilities. I focused on crafting pixel-perfect, responsive interfaces that functioned seamlessly across all devices and browsers. My responsibilities extended to creating comprehensive design systems that streamlined the development process for the entire team. I championed the adoption of modern CSS methodologies and established best practices for UI consistency, effectively preparing me for the leadership challenges that followed.",
      responsibilities: [
        "Advanced UI/UX design and prototyping",
        "Senior-level HTML/CSS development",
        "Cross-browser compatibility and responsiveness",
        "Mentoring junior developers",
        "Technical documentation and best practices",
      ],
      technologies: ["Canva", "Prototyping", "Advanced CSS", "UI/UX Design"],
    },
    {
      company: "Xode Technology Private Limited",
      position: "HTML/CSS Developer",
      duration: "Jan 2020 - Apr 2021",
      location: "Kolkata, West Bengal, India",
      period: "1+ years",
      type: "Industry Role",
      description:
        "Specialized in translating complex design concepts into clean, semantic, and performant code. I was responsible for the frontend architecture of multiple client websites, ensuring rapid load times and optimal user engagement. My work emphasized the implementation of modern JavaScript frameworks and responsive design principles, delivering robust solutions that met diverse business requirements while maintaining strict adherence to W3C standards.",
      responsibilities: [
        "Frontend development using modern frameworks",
        "Responsive web design implementation",
        "Cross-platform compatibility",
        "Performance optimization",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      company: "Healimpilo",
      position: "Sr. Front-End Developer",
      duration: "Aug 2020 - Feb 2021",
      location: "Bengaluru, Karnataka, India",
      period: "7 months",
      type: "Industry Role",
      description:
        "Spearheaded the frontend development of critical healthcare applications where precision and reliability were paramount. I focused deeply on User Experience (UX) to ensure medical professionals could navigate complex data workflows intuitively. A key part of my role involved implementing strict accessibility compliance (WCAG) to serve a diverse user base, while also integrating secure data visualization tools to present patient information clearly and effectively.",
      responsibilities: [
        "Healthcare application UI development",
        "User experience optimization for medical workflows",
        "Accessibility compliance for healthcare applications",
        "Integration with medical data systems",
      ],
      technologies: [
        "Healthcare UI",
        "Accessibility",
        "User Experience Design",
      ],
    },
    {
      company: "AMBRINO TECHNOLOGY",
      position: "Senior Web Graphic Designer, HTML CSS Developer",
      duration: "Jul 2012 - Dec 2020",
      location: "Kolkata Area, India",
      period: "8+ years",
      type: "Industry Foundation",
      description:
        "This foundational period of my career defined my trajectory from a graphic designer to a full-stack frontend specialist. Over eight years, I mastered the art of visual communication through graphic design before seamlessly transitioning into code. I handled end-to-end web projects, from initial concept and branding to final deployment, gaining invaluable insight into the complete digital product lifecycle and client relationship management.",
      responsibilities: [
        "Web graphic design and branding",
        "HTML/CSS development and maintenance",
        "Client communication and project management",
        "Design system creation and documentation",
        "Training and mentoring new team members",
      ],
      technologies: [
        "Graphic Design",
        "Web Development",
        "Adobe Creative Suite",
        "Client Management",
      ],
    },
  ];

  const earlyCareer = [
    {
      company: "Creationet Infosystems PVT. LTD.",
      position: "Web Designer & Html Coder",
      duration: "Mar 2010 - Jun 2012",
      period: "2+ years",
      type: "Transition Period",
    },
    {
      company: "CMC LTD",
      position: "Web & Graphics, Multimedia faculty",
      duration: "Dec 2007 - Dec 2010",
      period: "3+ years",
      type: "Educational Foundation",
    },
    {
      company: "Youth Computer Training Centre",
      position: "Web design Faculty",
      duration: "Apr 2009 - Dec 2009",
      period: "9 months",
      type: "Educational Foundation",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="relative py-20 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Purple Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(168, 85, 247, 0.4) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(45deg, rgba(233, 213, 255, 0.5), rgba(243, 232, 255, 0.5), rgba(224, 231, 255, 0.5))",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Professional Experience
          </motion.h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A journey from educator to industry expert to team leader,
            showcasing continuous growth and expanding responsibilities.
          </p>
        </motion.div>

        {/* Main Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Industry Experience (2012 - Present)
          </h3>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="sticky top-28 bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 relative overflow-hidden group"
                style={{ zIndex: index + 10 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-blue-200/30" />
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                  {/* Left Block (60%) */}
                  <div className="lg:col-span-3 flex flex-col lg:pr-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {exp.position}
                        </h4>
                        <div className="flex items-center text-blue-600 font-medium mb-2">
                          <Building size={16} className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <Calendar size={14} className="mr-2" />
                          {exp.duration} • {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={14} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${exp.type === "Current Role"
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                          : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
                          }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-800 font-medium leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right Block (40%) */}
                  <div className="lg:col-span-2 flex flex-col gap-6 lg:border-l lg:border-blue-100 lg:pl-8">
                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 border-b border-blue-100 pb-2 inline-block">
                        Technologies & Skills:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Responsibilities (Moved here) */}
                    {exp.responsibilities && (
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 border-b border-blue-100 pb-2 inline-block">
                          Key Responsibilities:
                        </h5>
                        <ul className="text-sm text-gray-700 space-y-2 font-medium">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <span className="text-blue-500 mr-2 mt-1 group-hover/item:text-blue-600 transition-colors">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Early Career Summary */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-xl p-8 border border-purple-100 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Educational Foundation (2007 - 2012)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlyCareer.map((career, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-purple-50/50"
                whileHover={{ y: -5 }}
              >
                <div className="font-bold text-gray-900 mb-2 text-lg">
                  {career.position}
                </div>
                <div className="text-purple-600 font-medium text-sm mb-2">
                  {career.company}
                </div>
                <div className="text-gray-500 text-xs mb-3 font-medium bg-white/80 inline-block px-3 py-1 rounded-full">
                  {career.duration} • {career.period}
                </div>
                <div>
                  <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {career.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm max-w-2xl mx-auto italic">
            "My educational background provided a strong foundation in teaching
            and mentoring, skills that continue to benefit my current leadership
            role."
          </p>
        </div>
      </div>
    </motion.section >
  );
}
