"use client"

import { useRef, useEffect } from "react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "R"],
    highlight: true,
  },
  {
    title: "Libraries & Tools",
    skills: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "Streamlit"],
    highlight: false,
  },
  {
    title: "Core CS",
    skills: ["DBMS", "Data Structures", "Machine Learning"],
    highlight: false,
  },
  {
    title: "Development",
    skills: ["Git", "GitHub", "VS Code", "React", "TypeScript"],
    highlight: false,
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".skill-card")
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        ;(card as HTMLElement).style.setProperty("--mouse-x", `${x}px`)
        ;(card as HTMLElement).style.setProperty("--mouse-y", `${y}px`)
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading
          label="Skills"
          title="My toolkit"
          description="Technologies and concepts I work with to build real-world applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`skill-card spotlight-card group rounded-xl border bg-card/50 p-5 transition-all duration-500 hover:-translate-y-1 ${
                category.highlight
                  ? "border-primary/30"
                  : "border-border/60"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                    {category.title}
                  </h3>
                  <span className="rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {category.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/50 bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-all hover:border-primary/30 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
