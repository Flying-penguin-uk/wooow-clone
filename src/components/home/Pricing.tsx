import { Link } from 'react-router-dom'
import { Check, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { PLANS } from '../../data/pricing'
import { CountdownBlocks } from '../ui/Countdown'
import Reveal from '../ui/Reveal'
import Stars from '../ui/Stars'

export default function Pricing() {
  const vip = PLANS.find((p) => p.featured)!
  const rest = PLANS.filter((p) => !p.featured)

  return (
    <section id="pricing" className="section bg-cream-dark/40">
      <div className="container">
        <Reveal className="text-center">
          <h2 className="text-4xl md:text-5xl">Simple pricing</h2>
          <p className="mt-4 text-[15px] text-muted-foreground">
            One payment. No subscription, no per guest charge, no upsell later.
          </p>
          <div className="mt-5 inline-flex items-center gap-2.5">
            <Stars />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-primary/80">
              4.9 from 2,400+ couples
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-3 rounded-2xl border border-destructive/25 bg-destructive/[0.05] px-6 py-5 text-center">
            <p className="font-sans text-[11px] font-bold uppercase tracking-eyebrow text-destructive">
              Sale, save £101
            </p>
            <CountdownBlocks />
            <p className="text-xs text-muted-foreground">
              Buy at the sale price and edit it whenever you like afterwards. The invitation stays
              yours either way.
            </p>
          </div>
        </Reveal>

        {/* Featured plan */}
        <Reveal delay={0.15}>
          <article className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border-2 border-gold bg-card shadow-lift">
            <div className="bg-gold py-2 text-center font-sans text-[10px] font-bold uppercase tracking-eyebrow text-[hsl(350_40%_20%)]">
              <Sparkles size={12} className="mr-1.5 inline" />
              {vip.badge}
            </div>

            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
              <div>
                <h3 className="font-display text-4xl font-normal">{vip.name}</h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-6xl leading-none text-primary">
                    £{vip.price}
                  </span>
                  <span className="font-sans text-2xl text-muted-foreground line-through">
                    £{vip.wasPrice}
                  </span>
                </div>
                <p className="mt-1 font-sans text-xs uppercase tracking-eyebrow text-muted-foreground">
                  One time payment
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{vip.blurb}</p>

                <Link to="/order?plan=vip" className="btn-gold mt-7 w-full">
                  {vip.cta}, £{vip.price}
                </Link>

                {vip.bonus && (
                  <div className="mt-5 rounded-2xl border border-dashed border-gold/60 bg-gold/[0.08] p-4 text-center">
                    <p className="font-sans text-[9px] font-bold uppercase tracking-eyebrow text-[hsl(42_80%_28%)]">
                      {vip.bonus.label}
                    </p>
                    <p className="mt-1.5 font-serif text-lg">{vip.bonus.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      <span className="font-semibold text-sage">Free</span>, normally £
                      {vip.bonus.normally}
                    </p>
                  </div>
                )}
              </div>

              <ul className="space-y-2.5">
                {vip.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <Check size={15} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
                <li className="!mt-6 space-y-1.5 border-t border-border/70 pt-4">
                  {vip.footnotes?.map((n) => (
                    <p
                      key={n}
                      className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground"
                    >
                      <ShieldCheck size={12} className="text-sage" />
                      {n}
                    </p>
                  ))}
                </li>
              </ul>
            </div>
          </article>
        </Reveal>

        {/* Other plans */}
        <div className="mx-auto mt-6 grid max-w-3xl gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={0.2 + i * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-soft transition hover:shadow-card">
                {p.badge && (
                  <span className="mb-3 self-start rounded-full bg-secondary px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-primary">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display text-3xl font-normal">{p.name}</h3>
                <p className="mt-3 font-display text-5xl leading-none text-primary">£{p.price}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-eyebrow text-muted-foreground">
                  One time payment
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                <ul className="mt-6 flex-1 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <Check size={14} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/order?plan=${p.id}`} className="btn-outline mt-7 w-full">
                  {p.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: ShieldCheck, label: '30 day money back guarantee' },
              { icon: Zap, label: 'Dashboard opens the moment you pay' },
              { icon: Sparkles, label: '2,400+ couples so far' },
            ].map(({ icon: Icon, label }) => (
              <p
                key={label}
                className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-eyebrow text-muted-foreground"
              >
                <Icon size={14} className="text-sage" />
                {label}
              </p>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-lg text-center text-sm text-muted-foreground">
            Do not have all the details yet? Start anyway. Half the people who buy do not have a
            final venue, and everything is editable afterwards.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
