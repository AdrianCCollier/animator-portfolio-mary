import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/personal'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.name.trim()) e.name = 'Please enter your name'
  if (!d.email.trim()) {
    e.email = 'Please enter your email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    e.email = 'Please enter a valid email'
  }
  if (!d.message.trim() || d.message.trim().length < 15) {
    e.message = 'Message must be at least 15 characters'
  }
  return e
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const update = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    const body = encodeURIComponent(`Hi Sofia,\n\nMy name is ${form.name}.\n\n${form.message}`)
    window.open(`mailto:${personal.email}?subject=Portfolio Enquiry&body=${body}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 text-sm bg-[var(--bg-alt)] border rounded text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all duration-200 ${
      errors[field]
        ? 'border-[rgba(255,45,107,0.6)] focus:border-[#ff2d6b]'
        : 'border-[var(--border)] focus:border-[var(--accent-light)]'
    }`

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-5 leading-tight">
              Open to new{' '}
              <span className="italic text-[var(--accent)]">opportunities</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Whether you're a studio looking for a character animator, a VFX house, or an
              architectural firm in need of visualisation work — I'd love to hear about your
              project.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="font-mono text-xs text-[var(--text-muted)] w-16 shrink-0">Email</span>
                {personal.email}
              </a>
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)] w-16 shrink-0">LinkedIn</span>
                  {personal.social.linkedin.replace('https://linkedin.com/in/', '/in/')}
                </a>
              )}
              {personal.social.artstation && (
                <a
                  href={personal.social.artstation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)] w-16 shrink-0">ArtStation</span>
                  {personal.social.artstation.replace('https://', '')}
                </a>
              )}
            </div>

            <div className="mt-8 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-[var(--text-primary)]">Available for hire</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Actively seeking full-time and freelance roles — responds within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="p-6 rounded-xl border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.06)] text-center">
                <div className="text-2xl mb-3 text-[var(--accent)]">✓</div>
                <p className="font-display text-lg font-medium text-[var(--text-primary)] mb-1">Message sent!</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Your email client should have opened with the message pre-filled. If not,
                  email Mary directly at{' '}
                  <a href={`mailto:${personal.email}`} className="text-[var(--accent)] underline">
                    {personal.email}
                  </a>
                </p>
                <button onClick={() => setSent(false)} className="mt-4 text-sm text-[var(--accent)] hover:underline">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {(['name', 'email'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={form[field]}
                      onChange={(e) => update(field, e.target.value)}
                      placeholder={field === 'email' ? 'your@email.com' : 'Your name'}
                      className={inputClass(field)}
                    />
                    {errors[field] && (
                      <p className="mt-1 text-xs text-[#ff2d6b]">{errors[field]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#ff2d6b]">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn-neon w-full py-3 bg-[var(--accent)] text-[var(--bg)] text-sm font-semibold rounded hover:bg-[var(--accent-light)] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
