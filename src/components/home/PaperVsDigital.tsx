import { Check, X } from 'lucide-react'
import { PAPER_VS_DIGITAL } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function PaperVsDigital() {
  return (
    <section className="section bg-cream-dark/40">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">Paper against digital</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Why bother going digital</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Print is lovely and we are not going to pretend otherwise. It is also slow, expensive and
            impossible to correct once it is in the post.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-border/70 bg-card shadow-card">
            <div className="grid grid-cols-3 gap-2 border-b border-border/70 bg-secondary/60 px-5 py-4 font-sans text-[10px] font-bold uppercase tracking-eyebrow md:px-8">
              <span className="text-muted-foreground">Feature</span>
              <span className="text-muted-foreground">Paper invitation</span>
              <span className="text-primary">Wooow digital</span>
            </div>

            {PAPER_VS_DIGITAL.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 items-center gap-2 px-5 py-4 text-[13px] md:px-8 md:text-sm ${
                  i % 2 ? 'bg-secondary/25' : ''
                }`}
              >
                <span className="font-medium text-foreground/90">{row.feature}</span>
                <span className="flex items-start gap-1.5 text-muted-foreground">
                  <X size={13} className="mt-0.5 shrink-0 text-destructive/60" />
                  {row.paper}
                </span>
                <span className="flex items-start gap-1.5 font-medium text-foreground/90">
                  <Check size={13} className="mt-0.5 shrink-0 text-sage" strokeWidth={2.5} />
                  {row.digital}
                </span>
              </div>
            ))}

            <div className="border-t border-border/70 bg-sage/[0.08] px-5 py-5 text-center md:px-8">
              <p className="font-serif text-lg text-foreground">
                Most couples save somewhere near £900 against a printed run
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
