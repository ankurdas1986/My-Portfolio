"use client";

import { Code, Palette, Users, Zap } from "lucide-react";

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
      icon: <Zap size={32} />,
      title: "Modern Technologies",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 95 },
        { name: "Responsive Design", level: 95 },
        { name: "VO AI Development", level: 80 },
        { name: "Vibe Coding", level: 75 },
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
  ];

  const tools = [
    "Microsoft Visual Studio Code",
    "Jira",
    "Git",
    "Vercel AI",
    "Cascading Style Sheets (CSS)",
    "Email Template Design",
    "Mobile Application Design",
    "User Experience (UX)",
    "Banner Designing",
    "Corporate Identity Design",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built over 10+ years of experience, covering
            design, development, and team leadership.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="text-accent mr-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-accent rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools & Technologies */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Additional Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="text-center mt-12">
          <div className="inline-block bg-accent text-white px-8 py-4 rounded-lg">
            <div className="text-2xl font-bold mb-1">10+</div>
            <div className="text-sm">Years of Industry Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
