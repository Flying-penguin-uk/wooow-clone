import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-burgundy-light py-24 text-primary-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-gold/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blush/50 blur-3xl" />
      </div>

      <div className="container relative text-center">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-gold-light">
            Sale, was £200, now £99
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
            Ready to build something worth screenshotting?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-primary-foreground/80">
            Pay once, open your dashboard immediately, and have something you are happy with before
            the evening is out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/order?plan=vip" className="btn-gold w-full sm:w-auto">
              Get VIP access, £99
            </Link>
            <Link
              to="/#pricing"
              className="btn w-full border border-primary-foreground/30 px-8 py-3.5 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              Compare packages
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
