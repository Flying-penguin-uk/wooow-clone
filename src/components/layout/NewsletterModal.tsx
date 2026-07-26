import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const BENEFITS = [
  'New themes before they go on the site',
  'Real weddings and styling ideas worth stealing',
  'Free checklists and a timeline template',
]

/** Delayed newsletter popup, dismissible and remembered for the session. */
export default function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('nl-dismissed')) return
    const t = setTimeout(() => setOpen(true), 22000)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    sessionStorage.setItem('nl-dismissed', '1')
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/45 p-5 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 26, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Newsletter signup"
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-lift"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-primary"
            >
              <X size={16} />
            </button>

            <div className="mb-1 flex justify-center gap-1.5 text-xl">
              <span>💍</span>
              <span>💐</span>
              <span>✨</span>
              <span>🤍</span>
            </div>

            <h3 className="text-center font-display text-3xl leading-tight text-foreground">
              See new themes first
            </h3>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              We add designs most months. This is how you hear about them.
            </p>

            <ul className="mt-6 space-y-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="mt-6 space-y-2.5"
            >
              <label htmlFor="nl-email" className="sr-only">
                Email address
              </label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
              <button type="submit" className="btn-gold w-full">
                {sent ? 'You are on the list' : 'Get early access'}
              </button>
            </form>

            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              2,400+ couples subscribed. Unsubscribe whenever.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
