import { Link } from 'react-router-dom'
import { Quote, ShieldCheck } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'
import Reveal from '../ui/Reveal'
import Stars from '../ui/Stars'

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">Loved by couples</p>
          <h2 className="mt-4 text-4xl md:text-5xl">What people said afterwards</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
                <Quote size={26} className="text-gold/40" />
                <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-foreground/85">
                  {t.body}
                </blockquote>
                <figcaption className="mt-6 border-t border-border/70 pt-4">
                  <p className="font-serif text-base">{t.name}</p>
                  <p className="mt-0.5 font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
                    {t.tag}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-10 text-center">
          <Link to="/testimonials" className="btn-outline">
            Read all reviews
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
