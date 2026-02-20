"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20 lg:px-12"
    >
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--muted-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Text content */}
          <div>
            <div
              className={`transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">
                  Open to Internships
                </span>
              </div>
            </div>

            <h1
              className={`text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl transition-all duration-700 delay-100 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {"Hi, I'm "}
              <span className="text-primary">Bhuvan</span>
              <span className="text-primary">.</span>
            </h1>

            <p
              className={`mt-4 text-xl font-light leading-relaxed text-muted-foreground sm:text-2xl transition-all duration-700 delay-200 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              I build data-driven applications.
            </p>

            <p
              className={`mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              B.Tech CSE student specializing in{" "}
              <span className="text-foreground">Python</span>,{" "}
              <span className="text-foreground">Machine Learning</span>, and{" "}
              <span className="text-foreground">modern web technologies</span>.
              Focused on building practical, impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
              >
                View Projects
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="https://drive.google.com/file/d/14R_zhKaMSKc5lLHRrf-FeghsGO5Aivo3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className={`mt-10 flex items-center gap-4 transition-all duration-700 delay-500 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="h-px w-8 bg-border" />
              {[
                { href: "https://github.com/Bhuvan-B05", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/bhuvan-bikkavolu-03997b33a", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:bikkavolubhuvan05@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground transition-all hover:text-primary hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Visual element */}
          <div
            className={`hidden lg:flex lg:items-center lg:justify-center transition-all duration-1000 delay-300 ${
              mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Abstract code block visualization */}
              <div className="relative w-full max-w-md rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/40" />
                  <div className="h-3 w-3 rounded-full bg-primary/30" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/30" />
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground/60">portfolio.py</span>
                </div>
                <pre className="font-mono text-xs leading-6 text-muted-foreground">
                  <code>
                    <span className="text-primary/80">class</span>{" "}
                    <span className="text-foreground">Developer</span>:
                    {"\n"}{"  "}name = <span className="text-primary">{'"Bikkavolu Bhuvan"'}</span>
                    {"\n"}{"  "}role = <span className="text-primary">{'"CSE Student"'}</span>
                    {"\n"}
                    {"\n"}{"  "}skills = [
                    {"\n"}{"    "}<span className="text-primary">{'"Python"'}</span>,{" "}
                    <span className="text-primary">{'"ML"'}</span>,
                    {"\n"}{"    "}<span className="text-primary">{'"React"'}</span>,{" "}
                    <span className="text-primary">{'"SQL"'}</span>
                    {"\n"}{"  "}]
                    {"\n"}
                    {"\n"}{"  "}<span className="text-primary/80">def</span>{" "}
                    <span className="text-foreground">build</span>(self):
                    {"\n"}{"    "}<span className="text-primary/80">return</span>{" "}
                    <span className="text-primary">{'"something great"'}</span>
                  </code>
                </pre>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-px flex-1 bg-border/50" />
                  <span className="animate-pulse text-xs text-primary/60">_</span>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-12 -top-6 rounded-lg border border-border/50 bg-card/80 px-3 py-2 backdrop-blur-sm animate-float">
                <p className="font-mono text-lg font-bold text-primary">9.1+</p>
                <p className="text-[10px] text-muted-foreground">CGPA</p>
              </div>
              <div className="absolute -bottom-4 -right-8 rounded-lg border border-border/50 bg-card/80 px-3 py-2 backdrop-blur-sm animate-float animation-delay-300">
                <p className="font-mono text-lg font-bold text-primary">3+</p>
                <p className="text-[10px] text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Explore</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
