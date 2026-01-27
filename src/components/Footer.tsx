"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 border-t border-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">Ankur Das</h3>
                        <p className="text-gray-400">UI/UX Design Lead & AI-Powered Frontend Developer</p>
                    </div>

                    <div className="flex gap-4">
                        <motion.a
                            href="https://github.com/ankurdas1986"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900 rounded-full shadow-sm text-gray-400 hover:text-[#00A2FF] transition-colors border border-gray-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/ankur-das-uidesigner-developer/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900 rounded-full shadow-sm text-gray-400 hover:text-[#00A2FF] transition-colors border border-gray-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                            href="mailto:ankurdas1986@gmail.com"
                            className="p-2 bg-gray-900 rounded-full shadow-sm text-gray-400 hover:text-[#00A2FF] transition-colors border border-gray-800"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} />
                        </motion.a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-600">
                    <p>© {currentYear} Ankur Das. All rights reserved.</p>
                    <p className="mt-2">Designed & Developed with ❤️ using Next.js, Tailwind CSS & AI</p>
                </div>
            </div>
        </footer>
    );
}
