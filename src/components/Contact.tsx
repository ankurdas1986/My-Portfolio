"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStatus, setShowStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowStatus({
          type: 'success',
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setShowStatus({
        type: 'error',
        message: "Something went wrong. Please try again later or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
      // Auto-hide notification after 6 seconds
      setTimeout(() => setShowStatus(null), 6000);
    }
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
      color: "text-gray-600 dark:text-gray-200",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com",
      color: "text-gray-800 dark:text-white",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:ankurdas1986@gmail.com",
      color: "text-gray-600 dark:text-gray-200",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-20 bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 opacity-40 pointer-events-none"
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
            "radial-gradient(circle at center, rgba(30, 58, 95, 0.03) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Status Notification Toast */}
        <AnimatePresence>
          {showStatus && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 50, x: "-50%" }}
              className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border ${showStatus.type === 'success'
                ? 'bg-white/90 border-green-200 text-green-800'
                : 'bg-white/90 border-red-200 text-red-800'
                }`}
            >
              {showStatus.type === 'success' ? (
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
              ) : (
                <div className="p-2 bg-red-100 rounded-full">
                  <AlertCircle size={24} className="text-red-600" />
                </div>
              )}
              <div className="flex-1">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">
                  {showStatus.type === 'success' ? 'Success' : 'Error'}
                </h4>
                <p className="text-sm font-medium opacity-90">{showStatus.message}</p>
              </div>
              <button
                onClick={() => setShowStatus(null)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring your next project to life? I&apos;d love to hear about
            your ideas and discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re looking for a UI/UX designer, a frontend developer,
              or a team leader for your next project, I&apos;m here to help. Let&apos;s
              discuss your requirements and create something exceptional.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-accent mr-4">{item.icon}</div>
                  <div>
                    <div className="font-medium text-foreground">
                      {item.label}
                    </div>
                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-gray-600">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 text-gray-600 hover:text-accent hover:scale-110`}
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
            <div className="mt-8 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">
                Current Availability
              </h4>
              <p className="text-gray-600 text-sm">
                I&apos;m currently available for new projects and collaborations.
                Typical response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white text-foreground placeholder-gray-400 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white text-foreground placeholder-gray-400 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white text-foreground placeholder-gray-400 focus:bg-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white text-foreground placeholder-gray-400 focus:bg-white"
                  placeholder="Tell me about your project... (Optional)"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-accent text-white px-6 py-3 rounded-2xl font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
              >
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    initial={{ x: "-150%" }}
                    whileHover={{ x: "150%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
