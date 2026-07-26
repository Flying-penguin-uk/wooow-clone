import * as Icons from 'lucide-react'
import { PLANNING_TOOLS } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function PlanningTools() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">Planning, all in one place</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Plan the whole thing without a spreadsheet</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            The budget, the checklist and the seating plan sit in the same dashboard as the
            invitation, so the guest list only has to exist once.
          </p>
          <p className="mt-4 font-sans text-[11px] uppercase tracking-eyebrow text-sage">
            Included with your invitation, nothing extra to pay
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANNING_TOOLS.map((t, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[t.icon] ?? Icons.Check
            return (
              <Reveal key={t.title} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-2xl">{t.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{t.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13px]">
                        <Icons.Check size={14} className="mt-0.5 shrink-0 text-sage" strokeWidth={2.5} />
                        <span className="text-foreground/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-gold/30 bg-gold/[0.07] p-7 text-center">
            <h3 className="font-serif text-xl">This tends to pay for itself</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
              Couples using the budget tracker report saving somewhere between £500 and £2,000,
              mostly by spotting a category running over before the deposit is paid rather than
              after.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
