import { useState } from 'react'
import { Banknote, LinkIcon, Users } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

const STEPS = [
  { icon: LinkIcon, title: 'Get your link', body: 'Sign up and you get a tracked link straight away. No approval queue.' },
  { icon: Users, title: 'Share it', body: 'Send it to couples, post it, or put it in your supplier pack. Cookie lasts 90 days.' },
  { icon: Banknote, title: 'Get paid', body: '30% of every sale, paid monthly once you clear £50.' },
]

export default function Affiliates() {
  const [referrals, setReferrals] = useState(10)
  const commission = Math.round(referrals * 99 * 0.3)

  return (
    <>
      <PageHero
        eyebrow="Affiliate programme"
        title="Earn 30% on every invitation"
        lead="For photographers, venues, planners and anyone else couples already trust. One link, 90 day cookie, paid monthly."
      />

      <section className="pb-8">
        <div className="container grid max-w-4xl gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="h-full rounded-2xl border border-border/70 bg-card p-7 text-center shadow-soft">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
                  <s.icon size={20} strokeWidth={1.6} />
                </span>
                <h2 className="mt-4 font-serif text-lg">{s.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container max-w-2xl">
          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-card p-10 shadow-card">
              <h2 className="text-center font-display text-3xl font-normal">
                What that looks like in money
              </h2>

              <div className="mt-8">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="ref" className="eyebrow">
                    Referrals per month
                  </label>
                  <span className="font-display text-2xl text-primary">{referrals}</span>
                </div>
                <input
                  id="ref"
                  type="range"
                  min={1}
                  max={50}
                  value={referrals}
                  onChange={(e) => setReferrals(Number(e.target.value))}
                  className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[hsl(var(--primary))]"
                />
              </div>

              <div className="mt-8 rounded-2xl bg-secondary/50 p-7 text-center">
                <p className="eyebrow">Your monthly commission</p>
                <p className="mt-2 font-display text-6xl leading-none text-primary">£{commission}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Based on the £99 VIP package at 30%. Deluxe referrals pay considerably more.
                </p>
              </div>

              <button className="btn-primary mt-8 w-full">Apply to join</button>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Demo build, the application form is not wired up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
