"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (for now, just log to console)
    console.log("Form submitted:", formData);
    // You can integrate with your preferred email service here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "ankurdas1986@gmail.com",
      href: "mailto:ankurdas1986@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 9062844330",
      href: "tel:+919062844330",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Kolkata, West Bengal, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ankur-das-uidesigner-developer/",
      color: "text-gray-600",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com",
      color: "text-gray-800",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:ankurdas1986@gmail.com",
      color: "text-gray-600",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
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
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring your next project to life? I'd love to hear about
            your ideas and discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you're looking for a UI/UX designer, a frontend developer,
              or a team leader for your next project, I'm here to help. Let's
              discuss your requirements and create something exceptional.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-accent mr-4">{item.icon}</div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {item.label}
                    </div>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-gray-600 dark:text-gray-300">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 ${social.color} hover:scale-110`}
                    title={social.label}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Current Availability
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I'm currently available for new projects and collaborations.
                Typical response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="group w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={20} />
                  Send Message
                </span>
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Ankur Das. Designed & Developed with ❤️ using Next.js
          </p>
        </div>
      </div>
    </motion.section>
  );
}
