import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { Check, QrCode } from 'lucide-react'
import { MEMORIES_FEATURES, MEMORIES_STEPS } from '../data/content'
import { MEMORIES_PLANS } from '../data/pricing'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

export default function Memories() {
  return (
    <>
      <PageHero
        eyebrow="New, included in your dashboard"
        title={
          <>
            Wooow Memories,{' '}
            <br />
            <span className="font-script text-5xl text-primary md:text-7xl">
              the album that fills itself
            </span>
          </>
        }
        lead="Every guest is holding a better camera than the one you hired. This is the shared album they can reach in one scan, with no app and no account."
      >
        <Link to="/order?plan=vip" className="btn-gold">
          Get it with your invitation
        </Link>
      </PageHero>

      <section className="pb-8">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-border/70 bg-card p-10 text-center shadow-soft">
              <h2 className="font-display text-3xl font-normal">
                Hashtags never worked, and disposables were worse
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Half the photos went to an account nobody checked and the other half came back from
                the lab blurred. This puts everything in one place, at full resolution, while people
                are still at the bar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {MEMORIES_FEATURES.map((f, i) => {
              const Icon =
                (Icons as unknown as Record<string, Icons.LucideIcon>)[f.icon] ?? Icons.Camera
              return (
                <Reveal key={f.title} delay={i * 0.07}>
                  <article className="h-full rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 font-serif text-lg">{f.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{f.body}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-cream-dark/40">
        <div className="container">
          <Reveal className="text-center">
            <h2 className="text-4xl md:text-5xl">Three steps, zero downloads</h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {MEMORIES_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-xl">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <div className="mx-auto mt-14 flex max-w-lg flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
              <span className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <QrCode size={48} strokeWidth={1.2} />
              </span>
              <div>
                <h3 className="font-serif text-lg">A table card people will actually scan</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  Print ready cards come with your album, sized for a place setting, with the code
                  and one line of instruction. That is all it takes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="text-center">
            <h2 className="text-4xl md:text-5xl">Simple, honest pricing</h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-muted-foreground">
              The free version is genuinely usable. Upgrade only if fifty photos will not cover it.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {MEMORIES_PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <article
                  className={`flex h-full flex-col rounded-3xl p-8 shadow-soft ${
                    p.featured ? 'border-2 border-gold bg-card shadow-lift' : 'border border-border/70 bg-card'
                  }`}
                >
                  <h3 className="font-display text-3xl font-normal">{p.name}</h3>
                  <p className="mt-3 font-display text-5xl leading-none text-primary">
                    {p.price === 0 ? 'Free' : `£${p.price}`}
                  </p>
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
                    to="/order?plan=vip"
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
    </>
  )
}
