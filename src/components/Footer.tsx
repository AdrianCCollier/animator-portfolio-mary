import { personal } from '../data/personal'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} {personal.name} · All rights reserved
        </p>
        <div className="flex gap-6">
          {[
            { label: 'Vimeo', href: personal.social.vimeo },
            { label: 'ArtStation', href: personal.social.artstation },
            { label: 'LinkedIn', href: personal.social.linkedin },
            { label: 'Email', href: personal.social.email },
          ].filter(({ href }) => !!href).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
