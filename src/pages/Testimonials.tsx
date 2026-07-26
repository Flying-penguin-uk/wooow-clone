import { Link } from 'react-router-dom'
import { Quote, ShieldCheck } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Stars from '../components/ui/Stars'

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Loved by couples"
        title="What people said afterwards"
        lead="Reviews from couples who have already had their day. We have not tidied up the wording."
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="inline-flex items-center gap-2.5">
            <Stars />
            <span className="font-display text-2xl leading-none text-primary">4.9</span>
            <span className="font-sans text-[11px] uppercase tracking-eyebrow text-muted-foreground">
              from 2,400+ couples
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-eyebrow text-sage">
            <ShieldCheck size={13} /> 30 day money back
          </span>
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container">
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={Math.min(i * 0.07, 0.35)} className="mb-6 break-inside-avoid">
                <figure className="rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                  <Quote size={24} className="text-gold/40" />
                  <blockquote className="mt-4 text-[14px] leading-relaxed text-foreground/85">
                    {t.body}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border/70 pt-4">
                    <p className="font-serif text-base">{t.name}</p>
                    <p className="mt-0.5 font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
                      {t.tag}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary to-burgundy-light p-10 text-center text-primary-foreground shadow-card">
              <h2 className="font-display text-3xl font-normal">Want one of your own?</h2>
              <Link
                to="/order?plan=vip"
                className="btn mt-6 bg-primary-foreground px-8 py-3.5 text-primary hover:bg-white"
              >
                Get VIP access, £99
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
