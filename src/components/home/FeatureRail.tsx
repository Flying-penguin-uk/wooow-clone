import { useRef } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ALSO_INCLUDED, FEATURE_RAIL } from '../../data/content'
import Reveal from '../ui/Reveal'
import WaxSeal from '../ui/WaxSeal'

export default function FeatureRail() {
  const rail = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    rail.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="dashboard-showcase" className="section overflow-hidden">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">Everything you get</p>
          <h2 className="mt-4 text-4xl md:text-5xl">A design studio in your dashboard</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-muted-foreground">
            Everything below is included. Nothing is an add on and nothing is metered.
          </p>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={17} />
          </button>
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
            Swipe to see every feature
          </p>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
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
        {FEATURE_RAIL.map((f, i) => (
          <motion.article
            key={f.key}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.06, 0.3) }}
            className="relative w-[17rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition hover:shadow-card sm:w-[19rem]"
          >
            {f.exclusive && (
              <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 font-sans text-[8px] font-bold uppercase tracking-eyebrow text-primary-foreground">
                Only here
              </span>
            )}
            <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-secondary to-cream-dark">
              <FeatureVisual kind={f.kind} />
            </div>
            <div className="p-5">
              <h3 className="text-lg leading-snug">{f.title}</h3>
              <p className="mt-1 text-[13px] text-muted-foreground">{f.sub}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="container">
        <Reveal className="mt-12 text-center">
          <p className="eyebrow">Also included</p>
          <h3 className="mt-3 font-display text-3xl font-normal">Everything else you will use</h3>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {ALSO_INCLUDED.map((a, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[a.icon] ?? Icons.Check
            return (
              <Reveal key={a.label} delay={i * 0.05}>
                <div className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-border/60 bg-card px-3 py-6 text-center transition hover:-translate-y-1 hover:shadow-soft">
                  <Icon size={20} className="text-gold" strokeWidth={1.6} />
                  <span className="font-sans text-[12px] font-medium leading-tight text-foreground/85">
                    {a.label}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeatureVisual({ kind }: { kind: string }) {
  if (kind === 'envelope') return <WaxSeal size={104} />

  if (kind === 'chat')
    return (
      <div className="w-full space-y-2 px-6">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-[11px] text-primary-foreground shadow-soft">
          wooowinvites.com/lisa-and-jo
        </div>
        <div className="max-w-[70%] rounded-2xl rounded-bl-sm bg-card px-3.5 py-2 text-[11px] shadow-soft">
          Omg 😍 how did you do that?
        </div>
      </div>
    )

  if (kind === 'rsvp')
    return (
      <div className="w-full space-y-1.5 px-6">
        {[
          ['Aunt Marie', 'Attending', 'bg-sage'],
          ['Tom & Zoe', 'Attending +1', 'bg-sage'],
          ['Chris B.', 'Awaiting reply', 'bg-gold'],
        ].map(([n, s, c]) => (
          <div
            key={n}
            className="flex items-center justify-between rounded-xl bg-card px-3 py-2 shadow-soft"
          >
            <span className="text-[11px] font-medium">{n}</span>
            <span className="flex items-center gap-1.5 text-[9px] text-muted-foreground">
              <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
              {s}
            </span>
          </div>
        ))}
      </div>
    )

  if (kind === 'categories')
    return (
      <div className="flex gap-2.5 px-6">
        {['Day', 'Evening'].map((t, i) => (
          <div key={t} className="rounded-xl bg-card px-4 py-3 text-center shadow-soft">
            <p className="font-sans text-[9px] uppercase tracking-eyebrow text-muted-foreground">
              {t}
            </p>
            <p className="mt-1 font-display text-2xl text-primary">{i === 0 ? 64 : 112}</p>
          </div>
        ))}
      </div>
    )

  if (kind === 'plusone')
    return (
      <div className="w-full space-y-1.5 px-6">
        {[
          ['Sam W.', true],
          ['Priya N.', false],
        ].map(([n, on]) => (
          <div
            key={String(n)}
            className="flex items-center justify-between rounded-xl bg-card px-3 py-2 shadow-soft"
          >
            <span className="text-[11px] font-medium">{n as string}</span>
            <span
              className={`flex h-4 w-8 items-center rounded-full px-0.5 ${
                on ? 'justify-end bg-sage' : 'justify-start bg-muted-foreground/30'
              }`}
            >
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
          </div>
        ))}
      </div>
    )

  if (kind === 'themes')
    return (
      <div className="grid grid-cols-3 gap-1.5 px-6">
        {['#c9a227', '#7a2c3c', '#6d8570', '#2b3a5c', '#8a7fa6', '#b07a3c'].map((c) => (
          <span
            key={c}
            className="aspect-[3/4] w-12 rounded-md shadow-soft"
            style={{ background: `linear-gradient(150deg, ${c}, ${c}55)` }}
          />
        ))}
      </div>
    )

  return (
    <div className="relative grid h-24 w-24 place-items-center">
      <span className="absolute inset-0 animate-pulse-ring rounded-full" />
      <span className="grid h-16 w-16 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">
        W
      </span>
    </div>
  )
}
