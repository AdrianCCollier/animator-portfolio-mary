import { motion } from 'framer-motion'
import { personal } from '../data/personal'

function VimeoEmbed({ id }: { id: string }) {
  return (
    <div className="vimeo-wrapper shadow-2xl">
      <iframe
        src={`https://player.vimeo.com/video/${id}?autoplay=0&title=0&byline=0&portrait=0&color=b8621a`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Demo Reel"
      />
    </div>
  )
}

export function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >
            3D Animator — Available for hire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-semibold text-[var(--text-primary)] mb-5 leading-[1.1]"
          >
            {personal.name.split(' ')[0]}{' '}
            <span className="italic text-[var(--accent)]">
              {personal.name.split(' ')[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed"
          >
            {personal.tagline} — crafting visuals that move people,
            from nuanced character performances to large-scale destruction and
            photorealistic environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex gap-4 mt-8"
          >
            <button
              onClick={scrollToWork}
              className="px-7 py-2.5 bg-[var(--accent)] text-white text-sm rounded hover:bg-[var(--accent-light)] transition-colors"
            >
              View Work
            </button>
            <a
              href={`mailto:${personal.email}`}
              className="px-7 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] text-sm rounded hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Reel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-label">Demo Reel 2024</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
            {personal.social.vimeo && (
              <a
                href={personal.social.vimeo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                View on Vimeo ↗
              </a>
            )}
          </div>
          {personal.reelVimeoId ? (
            <VimeoEmbed id={personal.reelVimeoId} />
          ) : (
            <div className="vimeo-wrapper shadow-xl flex items-center justify-center bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg">
              <div className="text-center py-16 px-8">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[var(--border)] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-muted)]">
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <p className="font-display text-lg text-[var(--text-secondary)] mb-1">Demo reel coming soon</p>
                <p className="text-sm text-[var(--text-muted)]">Check back shortly — currently in post-production</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
