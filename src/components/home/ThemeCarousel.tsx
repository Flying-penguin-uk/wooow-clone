import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { THEMES } from '../../data/themes'
import Reveal from '../ui/Reveal'
import ThemeCard from '../ui/ThemeCard'

const SHOWCASE = THEMES.slice(0, 12)

export default function ThemeCarousel() {
  const rail = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <section className="section overflow-hidden">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">Beautiful themes</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Pick a starting point</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Every feature works with every theme, so choosing one now does not lock you out of
            anything later. Swap it as many times as you like.
          </p>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous themes"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={17} />
          </button>
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
            Swipe
          </p>
          <button
            onClick={() => scroll(1)}
            aria-label="More themes"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div
        ref={rail}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pb-6"
      >
        {SHOWCASE.map((t, i) => (
          <div key={t.slug} className="w-[15rem] shrink-0 snap-start sm:w-[16.5rem]">
            <ThemeCard theme={t} index={i} />
          </div>
        ))}
      </div>

      <div className="container mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link to="/themes" className="btn-outline">
          View all {THEMES.length} themes
        </Link>
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary hover:underline"
        >
          Loved by couples <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}
