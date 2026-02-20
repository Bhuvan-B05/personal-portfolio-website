"use client"

import { useRef } from "react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { MapPin, GraduationCap, Target, Sparkles } from "lucide-react"

const quickFacts = [
  { icon: MapPin, label: "Location", value: "India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE, 3rd Year" },
  { icon: Target, label: "Focus", value: "SDE / ML / Data" },
  { icon: Sparkles, label: "Status", value: "Open to Internships" },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading
          label="About"
          title="A bit about me"
          description="Self-driven CSE student with a growth mindset and a passion for building real-world solutions."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Bio text - takes 2 columns */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              I am a third-year Computer Science Engineering student with strong
              foundations in{" "}
              <span className="font-medium text-foreground">Python</span>,{" "}
              <span className="font-medium text-foreground">SQL</span>,{" "}
              <span className="font-medium text-foreground">Database Management Systems</span>,{" "}
              and{" "}
              <span className="font-medium text-foreground">Machine Learning fundamentals</span>.
              I enjoy building real-world, data-driven applications that solve practical problems.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am consistent, self-reflective, and growth-oriented. I identify
              weaknesses early and work actively to improve them -- turning
              self-criticism into structured growth. This approach has helped me
              maintain a strong academic record while building meaningful projects.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Currently exploring{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">frontend development</span>,{" "}
              <span className="font-medium text-foreground">advanced Machine Learning</span>,{" "}
              feature engineering, and model improvement techniques.
            </p>
          </div>

          {/* Quick facts card */}
          <div className="lg:col-span-1">
            <div className="spotlight-card rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                Quick Facts
              </h3>
              <ul className="flex flex-col gap-4">
                {quickFacts.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-md bg-primary/5 px-3 py-2.5 text-center">
                <p className="font-mono text-2xl font-bold text-primary">~9.1+</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Current CGPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
