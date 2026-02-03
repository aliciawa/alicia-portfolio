"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/site-data";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 py-12 min-w-[1024px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-semibold tracking-tight text-center text-zinc-100">
        {title}
      </h2>
      <div className="mt-5 text-zinc-300">{children}</div>
    </motion.section>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'} relative overflow-hidden`}>
      {/* Digital background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500"></div>
        <div className="absolute inset-0 text-green-400 font-mono text-xs leading-none whitespace-nowrap overflow-hidden">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="animate-pulse">
              01234567890123456789012345678901234567890123456789012345678901234567890123456789
            </div>
          ))}
        </div>
      </div>

      {/* Top nav */}
      <header className="relative z-10 sticky top-0 border-b border-green-500/20 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-linear-to-br from-green-400 to-blue-500"></div>
            <div className="leading-tight">
              <div className="font-semibold">{site.name}</div>
                <div className="text-sm text-green-400">{site.title}</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-green-400 transition-colors" href="#about">
              About
            </a>
            <a className="hover:text-green-400 transition-colors" href="#projects">
              Projects
            </a>
            <a className="hover:text-green-400 transition-colors" href="#contact">
              Contact
            </a>
            <button onClick={toggleTheme} className={`px-3 py-1 rounded ${isDark ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
              {isDark ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 min-w-[1024px] mx-auto">
        {/* Hero */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hello, I'm <span className="text-green-400">{site.name.split(' ')[0]}</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">{site.title}</p>
              <div className="flex gap-4 justify-center mb-8">
                <a
                  className="px-6 py-3 rounded-lg font-semibold transition-colors bg-green-500 hover:bg-green-600"
                  href="#contact"
                >
                  Hire Me
                </a>
                <a
                  className="border border-green-500 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold transition-colors"
                  href="#"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 opacity-5 text-green-400 font-mono text-xs leading-none whitespace-nowrap overflow-hidden">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i}>01234567890123456789012345678901234567890123456789012345678901234567890123456789</div>
            ))}
          </div>
          <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(site.stats).map(([key, value]) => (
              <motion.div
                key={key}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2 text-green-400">{value}+</div>
                <div className="text-gray-300">{key}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="max-w-2xl mx-auto text-center">
            <p className="leading-relaxed mb-6 text-gray-300">{site.summary}</p>
            <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {site.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400"
                >
                  {s}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Education</h3>
            <ul className="mb-6 text-center">
              {site.education.map((e) => (
                <li className="text-gray-300">
                  {e.degree} - {e.school}
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Certifications</h3>
            <ul className="text-center">
              {site.certifications.map((c) => (
                <li className="text-gray-300">
                  • {c}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="projects" title="My Projects">
          <div className="max-w-2xl mx-auto space-y-6">
            {site.projects.map((p, index) => (
              <motion.div
                key={p.name}
                className="p-6 rounded-lg hover:transition-colors text-center bg-gray-800 hover:bg-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-green-400">{p.name}</h3>
                <p className="mb-2 text-green-300">##### {p.subtitle}</p>
                <p className="mb-4 text-gray-300">{p.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let's Connect">
          <div className="max-w-2xl mx-auto">
            <p className="mb-8 text-gray-300">
              I'm currently looking for new opportunities, my inbox is always open. Whether
              you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-800 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-800 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-gray-800 border border-green-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" className="text-green-400 hover:text-green-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </Section>

        <footer className="py-10 text-center text-gray-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
