"use client"

import { useRef, useState, type FormEvent } from "react"
import { SectionHeading } from "./section-heading"
import { useInView } from "@/hooks/use-in-view"
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "bikkavolubhuvan05@gmail.com",
    href: "mailto:bikkavolubhuvan05@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/b-bhuvan",
    href: "https://github.com/b-bhuvan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bhuvan-bikkavolu-03997b33a",
    href: "https://linkedin.com/in/bhuvan-bikkavolu-03997b33a",
  },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 py-24 lg:px-12 lg:py-32"
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Currently looking for internship opportunities. Feel free to reach out if you have a position or just want to say hello."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                Send a message
              </h3>

              <div className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      suppressHydrationWarning
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-border/60 bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      suppressHydrationWarning
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border/60 bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                      placeholder="your@email.com"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    suppressHydrationWarning
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border/60 bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                {/* Button */}
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitted}
                  className="flex items-center justify-center gap-2 self-start rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
                >
                  {isSubmitted ? "Sent!" : (
                    <>
                      Send Message
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}