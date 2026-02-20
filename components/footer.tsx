import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary">
            B
          </span>
          <div>
            <p className="text-xs font-medium text-foreground">
              Bikkavolu Bhuvan
            </p>
            <p className="text-[10px] text-muted-foreground/60">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
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
              className="text-muted-foreground/50 transition-colors hover:text-primary"
              aria-label={social.label}
            >
              <social.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
