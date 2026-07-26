import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../ui/Reveal'

const POINTS = [
  'Every client managed from one login',
  'RSVPs, budgets and seating tracked per event',
  'White label available on Pro',
]

export default function PlannersBand() {
  return (
    <section className="section bg-cream-dark/40">
      <div className="container">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card">
            <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="eyebrow">For wedding and event planners</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                  A dashboard built for people running twenty of these at once
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  Build a different invitation for every client and keep the whole book of business
                  behind one login. Priority support, trade pricing and white label options come with
                  it.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px]">
                      <Check size={15} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/wedding-planners" className="btn-primary mt-8">
                  Explore planner plans <ArrowRight size={15} />
                </Link>
              </div>

              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5">
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <p className="font-serif text-sm">Your events</p>
                  <span className="rounded-full bg-card px-2.5 py-1 font-sans text-[9px] uppercase tracking-eyebrow text-muted-foreground">
                    12 active
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    ['Ferguson wedding', '14 Sep', 82, 'bg-sage'],
                    ['Okafor wedding', '02 Nov', 47, 'bg-gold'],
                    ['Ward 40th', '22 Nov', 96, 'bg-sage'],
                    ['Bianchi wedding', '19 Mar', 12, 'bg-destructive'],
                  ].map(([name, date, pct, colour]) => (
                    <div key={name as string} className="rounded-xl bg-card px-3.5 py-3 shadow-soft">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-medium">{name}</span>
                        <span className="font-sans text-[10px] text-muted-foreground">{date}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div
                            className={`h-full rounded-full ${colour}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="font-sans text-[10px] text-muted-foreground">
                          {pct}% replied
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
