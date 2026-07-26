import { ShieldCheck } from 'lucide-react'
import { HOW_IT_WORKS } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Three steps, then it is yours</h2>
          <div className="rule mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <div className="group relative h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <span className="font-display text-6xl leading-none text-gold/35 transition-colors duration-500 group-hover:text-gold/60">
                  {s.step}
                </span>
                <h3 className="mt-5 text-2xl">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 flex max-w-2xl items-start gap-4 rounded-2xl border border-sage/25 bg-sage/[0.06] p-6">
            <ShieldCheck size={22} className="mt-0.5 shrink-0 text-sage" />
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Sixteen people out of more than two thousand have ever asked for the money back
              guarantee. We would rather tell you the number than tell you it is risk free.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
