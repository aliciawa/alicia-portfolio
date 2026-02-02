import Link from "next/link";
import { site } from "@/lib/site-data";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mt-5 text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" aria-hidden />
            <div className="leading-tight">
              <div className="font-semibold">{site.name}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{site.title}</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-indigo-600" href="#about">
              About
            </a>
            <a className="hover:text-indigo-600" href="#skills">
              Skills
            </a>
            <a className="hover:text-indigo-600" href="#projects">
              Projects
            </a>
            <a className="hover:text-indigo-600" href="#experience">
              Experience
            </a>
            <a className="hover:text-indigo-600" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-14">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{site.location}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{site.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">{site.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              href="#contact"
            >
              Contact me
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="leading-relaxed">{site.summary}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {site.skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {site.projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.org}</p>
                  </div>
                  {p.link ? (
                    <Link
                      href={p.link}
                      target="_blank"
                      className="text-sm font-semibold text-indigo-600 hover:underline"
                    >
                      View
                    </Link>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {site.experience.map((e) => (
              <div key={e.role + e.company} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.company}</div>
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.period}</div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Email</p>
            <a className="mt-1 block text-base font-semibold hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">LinkedIn</p>
            <a className="mt-1 inline-block text-base font-semibold text-indigo-600 hover:underline" href={site.linkedin}>
              {site.linkedin}
            </a>
          </div>
        </Section>

        <footer className="py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
