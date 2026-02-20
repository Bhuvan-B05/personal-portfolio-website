"use client"

import { useRef, useEffect } from "react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { ExternalLink, Star, ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  features: string[]
  techStack: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Placement Prediction System",
    description:
      "A Machine Learning-based web application that predicts a student's placement probability based on CGPA, internships, projects, communication score, coding score, aptitude score, and backlogs. Provides actionable recommendations for improvement.",
    features: [
      "KNN classification model",
      "Feature engineering & preprocessing pipeline",
      "Probability-based output with actionable recommendations",
      "Interactive Streamlit frontend",
    ],
    techStack: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    featured: true,
  },
  {
    title: "Preplace.ai Dashboard",
    description:
      "A career-analysis dashboard interface that collects professional profile data, displays SWOT insights, and shows role-based recommendations. Designed with a modern UI approach for intuitive user experience.",
    features: [
      "Professional profile data collection",
      "SWOT analysis insights",
      "Role-based career recommendations",
      "Modern responsive UI",
    ],
    techStack: ["React", "TypeScript", "Vite"],
  },
  {
    title: "DBMS & SQL Practice System",
    description:
      "A structured academic resource containing SQL queries, viva questions, MCQs, notes, and query practice examples. Focused on strengthening database fundamentals and interview readiness.",
    features: [
      "Comprehensive SQL query collection",
      "Viva questions & MCQs",
      "Structured notes and practice examples",
      "Interview preparation focused",
    ],
    techStack: ["SQL", "DBMS", "Documentation"],
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".project-card")
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
      id="projects"
      ref={ref}
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="Real-world applications that demonstrate practical skills in ML, full-stack development, and data management."
        />

        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`project-card spotlight-card group relative rounded-xl border transition-all duration-600 hover:-translate-y-0.5 ${
        project.featured
          ? "border-primary/25 bg-primary/[0.03]"
          : "border-border/60 bg-card/50"
      } ${isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {project.featured && (
        <div className="flex items-center gap-2 border-b border-primary/15 px-6 py-2.5">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-primary">
            Featured Project
          </span>
        </div>
      )}

      <div className="relative z-10 p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                project.featured
                  ? "bg-primary/15 text-primary"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary lg:text-xl">
              {project.title}
            </h3>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-md p-2 text-muted-foreground transition-all hover:bg-secondary hover:text-primary"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[11px] font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
