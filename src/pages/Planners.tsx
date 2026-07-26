import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { Check } from 'lucide-react'
import { PLANNER_BENEFITS } from '../data/content'
import { PLANNER_PLANS } from '../data/pricing'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

export default function Planners() {
  return (
    <>
      <PageHero
        eyebrow="For wedding and event planners"
        title="Give every client something they have not seen before"
        lead="Printed stationery takes weeks and looks like everyone else's. This gives you an animated invitation per client, built in an afternoon, with the guest tracking already attached."
      >
        <Link to="#planner-pricing" className="btn-gold">
          See planner pricing
        </Link>
      </PageHero>

      <section className="pb-8">
        <div className="container grid gap-6 md:grid-cols-3">
          {PLANNER_BENEFITS.map((b, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[b.icon] ?? Icons.Check
            return (
              <Reveal key={b.title} delay={i * 0.1}>
                <article className="h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-5 font-serif text-xl">{b.title}</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{b.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="planner-pricing" className="section">
        <div className="container">
          <Reveal className="text-center">
            <h2 className="text-4xl md:text-5xl">Planner pricing</h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-muted-foreground">
              Billed yearly. Cancel and your existing client invitations stay live.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {PLANNER_PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <article
                  className={`flex h-full flex-col rounded-3xl p-8 shadow-soft transition hover:shadow-card ${
                    p.featured
                      ? 'border-2 border-gold bg-card shadow-lift'
                      : 'border border-border/70 bg-card'
                  }`}
                >
                  {p.featured && (
                    <span className="mb-3 self-start rounded-full bg-gold px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-[hsl(350_40%_20%)]">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-3xl font-normal">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-5xl leading-none text-primary">
                      £{p.price}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-eyebrow text-muted-foreground">
                      {p.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px]">
                        <Check size={14} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-7 w-full ${p.featured ? 'btn-gold' : 'btn-outline'}`}
                  >
                    {p.cta}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-dark/40">
        <div className="container">
          <Reveal className="text-center">
            <h2 className="text-4xl">Your own planner dashboard</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-muted-foreground">
              Every event in one table, with the RSVP position visible without opening anything.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card">
              <div className="grid grid-cols-4 gap-2 border-b border-border/70 bg-secondary/60 px-6 py-3.5 font-sans text-[10px] font-bold uppercase tracking-eyebrow text-muted-foreground">
                <span className="col-span-2">Client</span>
                <span>Date</span>
                <span>Replied</span>
              </div>
              {[
                ['Ferguson wedding', 'Chatsworth', '14 Sep 2026', '82%'],
                ['Okafor wedding', 'Hackney Town Hall', '02 Nov 2026', '47%'],
                ['Ward 40th', 'The Glasshouse', '22 Nov 2026', '96%'],
                ['Bianchi wedding', 'Lake Como', '19 Mar 2027', '12%'],
                ['Nakamura engagement', 'Soho Farmhouse', '04 Apr 2027', '61%'],
              ].map(([name, venue, date, pct], i) => (
                <div
                  key={name}
                  className={`grid grid-cols-4 items-center gap-2 px-6 py-3.5 text-[13px] ${
                    i % 2 ? 'bg-secondary/25' : ''
                  }`}
                >
                  <span className="col-span-2">
                    <span className="font-medium">{name}</span>
                    <span className="block text-[11px] text-muted-foreground">{venue}</span>
                  </span>
                  <span className="text-muted-foreground">{date}</span>
                  <span className="font-sans font-semibold text-primary">{pct}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 text-center">
            <h2 className="font-display text-3xl font-normal">Ready to show your clients?</h2>
            <Link to="/contact" className="btn-primary mt-6">
              Talk to us about trade pricing
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
