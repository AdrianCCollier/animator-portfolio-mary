import { motion } from 'framer-motion'
import { personal } from '../data/personal'

function VimeoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 12.21C4.52 9.623 3.64 8.328 2.66 8.328c-.19 0-.757.252-1.75.757L0 7.886c1.105-.971 2.19-1.942 3.219-2.914C4.68 3.719 5.806 2.96 6.563 2.89c1.749-.169 2.819.985 3.243 3.485.44 2.7.743 4.382.927 5.001.516 2.346 1.08 3.518 1.692 3.518.477 0 1.193-.754 2.146-2.263.952-1.509 1.463-2.652 1.509-3.424.133-1.296-.375-1.946-1.509-1.946-.537 0-1.09.123-1.671.367 1.11-3.646 3.235-5.42 6.317-5.309 2.305.089 3.39 1.57 3.26 4.097z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ArtstationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.315-.547.482-1.166.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
    </svg>
  )
}

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[var(--bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-14 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative max-w-xs mx-auto md:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-display text-7xl font-semibold text-[var(--border)] italic mb-3">
                    {personal.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <p className="font-mono text-xs text-[var(--text-muted)]">// photo placeholder</p>
                </div>
              </div>
              {/* Decorative offset box */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[var(--accent)] opacity-20 -z-10"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-6 leading-tight">
              Bringing worlds{' '}
              <span className="italic text-[var(--accent)]">to life</span>
            </h2>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              {personal.bio}
            </p>

            <p className="text-sm text-[var(--text-muted)] mb-8">
              {personal.education}
            </p>

            {/* Software */}
            <div className="mb-8">
              <p className="section-label mb-3">Software</p>
              <div className="flex flex-wrap gap-2">
                {personal.software.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Social + CV */}
            <div className="flex items-center gap-4 flex-wrap">
              {[
                { href: personal.social.vimeo, icon: <VimeoIcon />, label: 'Vimeo' },
                { href: personal.social.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
                { href: personal.social.artstation, icon: <ArtstationIcon />, label: 'ArtStation' },
              ].filter(({ href }) => !!href).map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {icon}
                </a>
              ))}
              {(personal.social.vimeo || personal.social.linkedin || personal.social.artstation) && (
                <div className="h-4 w-px bg-[var(--border)]" />
              )}
              <a
                href={personal.cvUrl}
                download
                className="text-sm text-[var(--accent)] hover:underline"
              >
                Download CV ↓
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
