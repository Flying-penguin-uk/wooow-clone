import { Link } from 'react-router-dom'
import { Check, Play } from 'lucide-react'
import { SAVE_THE_DATE_PRICE } from '../../data/pricing'
import Reveal from '../ui/Reveal'

const INCLUDED = [
  '40+ animated themes, the full set',
  'An envelope made for you',
  'Live countdown to the day',
  'Background music',
  'Interactive destination map',
  'Multiple languages',
]

const MINI_THEMES = ['Vintage Photobooth', 'Riva Boat', 'Boarding Pass']

export default function SaveTheDate() {
  return (
    <section id="save-the-date" className="section">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">New product</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Save the Date</h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Lock the date in people's diaries long before the full invitation is ready. Same themes,
            same quality, a fraction of the work. Guests get the date and the place, and nothing else
            to worry about yet.
          </p>

          <ul className="mt-7 space-y-2.5">
            {INCLUDED.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14px]">
                <Check size={15} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-serif text-lg">Save the Date</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  One purchase, yours forever, no subscription
                </p>
              </div>
              <p className="font-display text-5xl leading-none text-primary">
                £{SAVE_THE_DATE_PRICE}
              </p>
            </div>
            <Link to="/order-save-the-date" className="btn-primary mt-5 w-full">
              Get your Save the Date
            </Link>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Upgrade to a full invitation later and pay only the difference
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-lift">
              <div className="relative aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=70"
                  alt="Save the Date preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/70" />
                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">
                  <p className="font-sans text-[9px] uppercase tracking-eyebrow text-white/70">
                    We are getting married
                  </p>
                  <h3 className="mt-4 font-script text-5xl leading-tight">Gregory &amp; Hannah</h3>
                  <div className="my-5 h-px w-20 bg-white/40" />
                  <p className="font-sans text-[10px] uppercase tracking-eyebrow text-white/75">
                    Save the date
                  </p>
                  <p className="mt-2 font-cinzel text-2xl tracking-[0.22em]">06 . 12 . 2027</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {MINI_THEMES.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 font-sans text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <button className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-sans text-[12px] font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
              <Play size={12} className="fill-current" />
              Watch example
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
