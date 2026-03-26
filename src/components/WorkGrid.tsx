import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, type Category } from '../data/projects'

type Filter = 'All' | Category
const FILTERS: Filter[] = ['All', 'Character', 'VFX', 'Game Art', 'Arch Viz']

function categoryClass(cat: Category) {
  const map: Record<Category, string> = {
    Character: 'cat-character',
    VFX: 'cat-vfx',
    'Game Art': 'cat-game-art',
    'Arch Viz': 'cat-arch-viz',
  }
  return map[cat]
}

function PlayIcon() {
  return (
    <div className="w-14 h-14 rounded-full bg-[rgba(8,12,20,0.85)] border border-[rgba(0,212,255,0.5)] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 16px rgba(0,212,255,0.25)' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8 5.14v14l11-7-11-7z" fill="#00d4ff" />
      </svg>
    </div>
  )
}

interface CardProps {
  project: (typeof projects)[number]
  index: number
}

function ProjectCard({ project, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link to={`/project/${project.id}`} className="block project-card group">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-[var(--bg-alt)]">
          {project.thumbnailUrl ? (
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
          ) : null}
          {/* Placeholder when no image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--bg-alt)] to-[var(--bg)]">
            <span className="font-display text-4xl text-[var(--border)] select-none">
              {project.title[0]}
            </span>
          </div>
          <div className="overlay">
            <PlayIcon />
          </div>
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-[var(--accent)] text-white rounded">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className={`category-pill ${categoryClass(project.category)}`}>
              {project.category}
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)]">{project.year}</span>
          </div>
          <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.software.slice(0, 3).map((s) => (
              <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-muted)]">
                {s}
              </span>
            ))}
            {project.software.length > 3 && (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-muted)]">
                +{project.software.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--text-primary)]">
              Projects &amp; Breakdowns
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  filter === f
                    ? 'border-[var(--accent)] bg-[var(--accent-pale)] text-[var(--accent)]'
                    : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
