import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/personal'

// ── Cinematic placeholder thumbnail ───────────────────────────────────────────
function PlaceholderThumbnail({ initials, year }: { initials: string; year: string }) {
  return (
    <svg
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="reel-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="reel-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#04070f" />
          <stop offset="100%" stopColor="#0d1220" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#reel-bg)" />
      <rect width="800" height="450" fill="url(#reel-glow)" />

      {/* Grid */}
      {Array.from({ length: 7 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={(i + 1) * 56} x2="800" y2={(i + 1) * 56}
          stroke="#00d4ff" strokeWidth="0.5" strokeOpacity="0.07" />
      ))}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`v${i}`} x1={(i + 1) * 80} y1="0" x2={(i + 1) * 80} y2="450"
          stroke="#00d4ff" strokeWidth="0.5" strokeOpacity="0.07" />
      ))}

      {/* Film-frame corner brackets */}
      <path d="M24,24 L24,52 M24,24 L52,24" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />
      <path d="M776,24 L776,52 M776,24 L748,24" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />
      <path d="M24,426 L24,398 M24,426 L52,426" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />
      <path d="M776,426 L776,398 M776,426 L748,426" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />

      {/* Watermark initials */}
      <text x="400" y="240" textAnchor="middle" dominantBaseline="middle"
        fontFamily="Space Grotesk, system-ui" fontSize="160" fontWeight="700"
        fill="#00d4ff" fillOpacity="0.04" letterSpacing="16">
        {initials}
      </text>

      {/* Centre labels */}
      <text x="400" y="196" textAnchor="middle"
        fontFamily="monospace" fontSize="9" fill="#00d4ff" fillOpacity="0.55" letterSpacing="7">
        ▶  DEMO REEL
      </text>
      <text x="400" y="234" textAnchor="middle"
        fontFamily="Space Grotesk, system-ui" fontSize="40" fontWeight="700"
        fill="#e8f0fe" fillOpacity="0.16" letterSpacing="8">
        {initials}
      </text>
      <text x="400" y="264" textAnchor="middle"
        fontFamily="monospace" fontSize="10" fill="#344f72" letterSpacing="5">
        {year}
      </text>

      {/* Scanlines */}
      {Array.from({ length: 45 }, (_, i) => (
        <line key={`s${i}`} x1="0" y1={i * 10} x2="800" y2={i * 10}
          stroke="#000000" strokeWidth="1" strokeOpacity="0.07" />
      ))}
    </svg>
  )
}

// ── Compact reel card ──────────────────────────────────────────────────────────
function ReelCard({ onPlay }: { onPlay: () => void }) {
  const { reel } = personal
  const initials = personal.name.split(' ').map((n) => n[0]).join('')

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="rounded-xl overflow-hidden border border-[var(--border)] cursor-pointer group hover:border-[rgba(0,212,255,0.4)] transition-all duration-300"
      style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.45)' }}
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <PlaceholderThumbnail initials={initials} year={reel.year} />

        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(8,12,20,0.45)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-16 h-16 rounded-full border-2 border-[var(--accent)] flex items-center justify-center"
            style={{ boxShadow: '0 0 28px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v14l11-7-11-7z" fill="#00d4ff" />
            </svg>
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="font-mono text-[10px] text-[var(--text-secondary)] px-2 py-0.5 rounded bg-[rgba(8,12,20,0.78)] border border-[var(--border)]">
            {reel.duration}
          </span>
        </div>

        {/* Pulsing play indicator */}
        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2 py-1 rounded bg-[rgba(8,12,20,0.82)] border border-[rgba(0,212,255,0.25)]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"
            style={{ boxShadow: '0 0 5px rgba(0,212,255,0.9)' }}
          />
          <span className="font-mono text-[9px] text-[var(--accent)] tracking-widest">PLAY</span>
        </div>
      </div>

      {/* Metadata bar */}
      <div className="p-3.5 bg-[var(--bg-alt)] border-t border-[var(--border)]">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div>
            <p className="font-display text-sm font-semibold text-[var(--text-primary)] leading-tight">
              {reel.title}
            </p>
            <p className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">{reel.description}</p>
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)] shrink-0 mt-0.5">{reel.year}</span>
        </div>

        {/* Software tags */}
        <div className="flex flex-wrap gap-1">
          {reel.software.map((s) => (
            <span
              key={s}
              className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Full-screen modal player ───────────────────────────────────────────────────
function ReelModal({ onClose }: { onClose: () => void }) {
  const { reel } = personal

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(4,7,15,0.97)] backdrop-blur-sm" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-9 right-0 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
        >
          <span className="opacity-50">ESC</span>
          <span>✕ Close</span>
        </button>

        <div
          className="rounded-xl overflow-hidden border border-[rgba(0,212,255,0.2)]"
          style={{ boxShadow: '0 0 60px rgba(0,212,255,0.12)' }}
        >
          {reel.vimeoId ? (
            <div className="vimeo-wrapper">
              <iframe
                src={`https://player.vimeo.com/video/${reel.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&color=00d4ff`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={reel.title}
              />
            </div>
          ) : (
            <div className="aspect-video bg-[var(--bg-alt)] flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="font-mono text-xs text-[var(--accent)]">// reel not yet uploaded</p>
                <p className="text-sm text-[var(--text-muted)]">
                  Set <code className="font-mono text-[var(--accent)]">personal.reel.vimeoId</code> to enable playback
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────────
export function Hero() {
  const [reelOpen, setReelOpen] = useState(false)

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setReelOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="hero-section pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_460px] gap-10 lg:gap-14 items-center">

          {/* Left: intro */}
          <div>
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
              className="text-5xl md:text-6xl font-display font-semibold text-[var(--text-primary)] mb-5 leading-[1.1]"
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
              className="text-[var(--text-secondary)] max-w-md leading-relaxed mb-8"
            >
              {personal.tagline} — crafting visuals that move people,
              from nuanced character performances to large-scale destruction and
              photorealistic environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex gap-4"
            >
              <button
                onClick={scrollToWork}
                className="btn-neon px-7 py-2.5 bg-[var(--accent)] text-[var(--bg)] text-sm font-semibold rounded hover:bg-[var(--accent-light)] transition-colors"
              >
                Watch Reels
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="px-7 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] text-sm rounded hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: reel card */}
          <ReelCard onPlay={() => setReelOpen(true)} />
        </div>
      </div>

      <AnimatePresence>
        {reelOpen && <ReelModal onClose={() => setReelOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}
