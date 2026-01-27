"use client";

import { Building, Calendar, MapPin } from "lucide-react";

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
        "Leading UI/UX and HTML development teams, managing project timelines, and ensuring quality deliverables. Responsible for technical decisions, team mentoring, and client communication.",
      responsibilities: [
        "Lead a team of 5+ designers and developers",
        "Manage project timelines and resource allocation",
        "Technical decision making and architecture planning",
        "Client communication and requirement gathering",
        "Code reviews and quality assurance",
        "Team mentoring and skill development",
      ],
      technologies: [
        "Team Leadership",
        "HTML5",
        "React",
        "Figma",
        "Adobe XD",
        "Jira",
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
        "Senior-level development and design work, preparing for leadership responsibilities. Focused on advanced UI/UX design and frontend development.",
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
        "Focused on frontend development with emphasis on modern web technologies and responsive design principles.",
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
        "Healthcare-focused frontend development with emphasis on user experience and accessibility in medical applications.",
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
        "Long-term role that established my industry foundation. Grew from developer to senior designer, handling comprehensive web projects and graphic design work.",
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey from educator to industry expert to team leader,
            showcasing continuous growth and expanding responsibilities.
          </p>
        </div>

        {/* Main Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Industry Experience (2012 - Present)
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Company & Position */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.position}
                        </h4>
                        <div className="flex items-center text-accent font-medium mb-2">
                          <Building size={16} className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                          <Calendar size={14} className="mr-2" />
                          {exp.duration} • {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                          <MapPin size={14} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === "Current Role"
                            ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {exp.responsibilities && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Key Responsibilities:
                        </h5>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent mr-2 mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies & Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Early Career Summary */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Educational Foundation (2007 - 2012)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlyCareer.map((career, index) => (
              <div key={index} className="text-center">
                <div className="font-semibold text-gray-900 mb-1">
                  {career.position}
                </div>
                <div className="text-accent text-sm mb-1">{career.company}</div>
                <div className="text-gray-600 text-xs mb-2">
                  {career.duration} • {career.period}
                </div>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  {career.type}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            My educational background provided a strong foundation in teaching
            and mentoring, skills that continue to benefit my current leadership
            role.
          </p>
        </div>
      </div>
    </section>
  );
}
