"use client"

import { useRef } from "react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, BookOpen } from "lucide-react"

const focusAreas = [
  "DBMS",
  "Data Structures",
  "Python",
  "Machine Learning",
  "SQL",
  "Data Processing",
]

export function EducationSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section
      id="education"
      ref={ref}
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading label="Education" title="Academic background" />

        <div className="spotlight-card group rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 lg:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
              <GraduationCap className="h-7 w-7" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    3rd Year (Ongoing)
                  </p>
                </div>
                <div className="animate-pulse-glow self-start rounded-lg border border-primary/30 bg-primary/10 px-4 py-2">
                  <span className="font-mono text-sm font-bold text-primary">
                    CGPA: ~9.1+
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                  Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-md border border-border/50 bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
