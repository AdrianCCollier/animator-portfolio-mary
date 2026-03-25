import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function VimeoEmbed({ id, caption }: { id: string; caption: string }) {
  return (
    <figure>
      <div className="vimeo-wrapper">
        <iframe
          src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&color=b8621a`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={caption}
        />
      </div>
      <figcaption className="mt-2 text-sm text-[var(--text-muted)] text-center">{caption}</figcaption>
    </figure>
  )
}

function BreakdownImage({ src, caption }: { src: string; caption: string }) {
  return (
    <figure>
      <div className="relative aspect-video rounded-lg border border-[var(--border)] bg-[var(--bg-alt)] overflow-hidden">
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.currentTarget
            el.style.display = 'none'
            const parent = el.parentElement
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-[var(--text-muted)] text-sm font-mono">[ ${caption} ]</div>`
            }
          }}
        />
      </div>
      <figcaption className="mt-2 text-sm text-[var(--text-muted)]">{caption}</figcaption>
    </figure>
  )
}

function categoryClass(cat: string) {
  const map: Record<string, string> = {
    Character: 'cat-character',
    VFX: 'cat-vfx',
    'Game Art': 'cat-game-art',
    'Arch Viz': 'cat-arch-viz',
  }
  return map[cat] ?? ''
}

export function ProjectBreakdown() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) return <Navigate to="/" replace />

  const currentIndex = projects.findIndex((p) => p.id === id)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-10"
          >
            ← Back to Work
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`category-pill ${categoryClass(project.category)}`}>
              {project.category}
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)]">{project.year}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-5">
            {project.title}
          </h1>

          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mb-6">
            {project.fullDescription}
          </p>

          {/* Software */}
          <div>
            <p className="section-label mb-3">Software Used</p>
            <div className="flex flex-wrap gap-2">
              {project.software.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-secondary)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="divider mb-12" />

        {/* Main clip */}
        {project.vimeoId && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-14"
          >
            <p className="section-label mb-4">Final Piece</p>
            <div className="vimeo-wrapper shadow-xl">
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=b8621a`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            </div>
          </motion.div>
        )}

        {/* Breakdown */}
        {project.breakdown.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-label mb-6">Process Breakdown</p>
            <div className="grid md:grid-cols-2 gap-8">
              {project.breakdown.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {item.type === 'vimeo' ? (
                    <VimeoEmbed id={item.src} caption={item.caption} />
                  ) : (
                    <BreakdownImage src={item.src} caption={item.caption} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Prev / Next */}
        <div className="divider mt-16 mb-10" />
        <div className="flex justify-between gap-4">
          {prev ? (
            <Link
              to={`/project/${prev.id}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-xs text-[var(--text-muted)]">← Previous</span>
              <span className="font-display text-base font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to={`/project/${next.id}`}
              className="group flex flex-col gap-1 text-right"
            >
              <span className="text-xs text-[var(--text-muted)]">Next →</span>
              <span className="font-display text-base font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {next.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
