import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'

const TABS = ['Theme', 'Envelope', 'Blocks', 'Guests', 'Music']

export default function DashboardStudio() {
  return (
    <section className="section">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Your own design studio</p>
          <h2 className="mt-4 text-4xl md:text-5xl">You are the one in control</h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            No designer to brief and no developer to wait on. Everything is a panel in your
            dashboard, and every change is live the moment you save it. If you change your mind three
            weeks after sending, change it. The link stays the same.
          </p>
          <p className="mt-5 font-script text-2xl text-primary/70">
            If you can send a photo, you can build one of these
          </p>

          <Link
            to="/how-it-works"
            className="mt-7 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary hover:underline"
          >
            See how the dashboard works <ArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lift">
            <div className="flex items-center gap-1.5 border-b border-border/70 bg-secondary/50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-sage/60" />
              <span className="ml-3 font-sans text-[10px] text-muted-foreground">
                Your invitation, editing
              </span>
            </div>

            <div className="flex gap-1 overflow-x-auto border-b border-border/70 px-3 py-2">
              {TABS.map((t, i) => (
                <span
                  key={t}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 font-sans text-[11px] font-medium ${
                    i === 0 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2">
              <div className="space-y-3">
                <div>
                  <p className="eyebrow">Palette</p>
                  <div className="mt-2 flex gap-1.5">
                    {['#7a2c3c', '#c9a227', '#6d8570', '#2b3a5c', '#8a7fa6'].map((c) => (
                      <span
                        key={c}
                        className="h-7 w-7 rounded-full ring-2 ring-offset-2 ring-offset-card"
                        style={{ background: c, boxShadow: `0 0 0 1px ${c}30` }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="eyebrow">Heading font</p>
                  <div className="mt-2 space-y-1.5">
                    {[
                      ['Cormorant', 'font-display'],
                      ['Playfair', 'font-serif'],
                      ['Great Vibes', 'font-script'],
                    ].map(([label, cls], i) => (
                      <div
                        key={label}
                        className={`rounded-lg border px-3 py-1.5 text-lg ${cls} ${
                          i === 0 ? 'border-primary/40 bg-secondary/60' : 'border-border/60'
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=70"
                  alt="Live preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/65" />
                <div className="relative flex h-full min-h-[13rem] flex-col items-center justify-center px-4 text-center text-white">
                  <p className="font-sans text-[8px] uppercase tracking-eyebrow text-white/70">
                    Live preview
                  </p>
                  <p className="mt-2 font-script text-3xl">Lisa &amp; Jo</p>
                  <div className="my-3 h-px w-12 bg-white/40" />
                  <p className="font-cinzel text-[9px] tracking-[0.3em] text-white/85">
                    14 . 09 . 2027
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
