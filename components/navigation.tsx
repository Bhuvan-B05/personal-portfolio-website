"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      let current = ""
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="group flex items-center gap-3 text-foreground transition-all"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-foreground transition-transform group-hover:scale-110">
            B
          </span>
          <span className="text-sm font-semibold tracking-wide">
            Bhuvan
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 text-foreground md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-light tracking-wide text-foreground transition-all duration-500 hover:text-primary ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
