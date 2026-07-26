import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Send } from 'lucide-react'
import { BRAND, FOOTER_LINKS } from '../../data/site'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <footer className="border-t border-border/70 bg-cream-dark/50">
      <div className="container grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">
              W
            </span>
            <span className="font-display text-2xl leading-none">
              Wooow<span className="gold-text"> Invites</span>
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Animated digital invitations with guest tracking built in. Choose a theme, add your
            details, send one link. No subscription, no per guest fee, and it stays yours after the
            day is over.
          </p>

          <p className="mt-4 font-script text-2xl text-primary/70">
            Beautiful invitations for the moments that matter
          </p>

          <div className="mt-6 flex items-center gap-2.5">
            <a
              href={`mailto:${BRAND.email}`}
              aria-label="Email us"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Send size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="eyebrow">Quick links</h4>
          <ul className="mt-5 space-y-3">
            {FOOTER_LINKS.quick.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-muted-foreground transition hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="eyebrow">More</h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
            {FOOTER_LINKS.legal.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-muted-foreground transition hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border/70 bg-card p-5">
            <p className="font-serif text-base text-foreground">See new themes first</p>
            <p className="mt-1 text-xs text-muted-foreground">
              A short note when we add designs worth looking at.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="mt-3.5 flex flex-col gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
              />
              <button type="submit" className="btn-primary w-full py-2.5 text-[13px]">
                {sent ? 'Thanks, you are on the list' : 'Get early access'}
              </button>
            </form>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              No spam. Unsubscribe whenever you like.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Wooow Invites. All rights reserved.</p>
          <p>Structural study build, not affiliated with any live service.</p>
        </div>
      </div>
    </footer>
  )
}
