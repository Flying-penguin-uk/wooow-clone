import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, X } from 'lucide-react'
import { THEMES, THEME_CATEGORIES, type Theme, type ThemeCategory } from '../data/themes'
import PageHero from '../components/ui/PageHero'
import ThemeCard from '../components/ui/ThemeCard'

export default function Themes() {
  const [filter, setFilter] = useState<ThemeCategory | 'All'>('All')
  const [preview, setPreview] = useState<Theme | null>(null)

  const shown = useMemo(
    () => (filter === 'All' ? THEMES : THEMES.filter((t) => t.category === filter)),
    [filter],
  )

  return (
    <>
      <div className="container pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-sans text-[13px] text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>

      <PageHero
        eyebrow={`${THEMES.length}+ beautiful themes`}
        title={
          <>
            Find your{' '}
            <br />
            <span className="font-script text-5xl text-primary md:text-7xl">perfect theme</span>
          </>
        }
        lead="This is the opening your guests get when the envelope breaks. Every word, colour and detail on top of it is yours to change, and you can swap the theme underneath as many times as you like once you have an account."
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {['Custom colours and fonts', 'Edit every word', 'Multiple languages'].map((f) => (
            <span
              key={f}
              className="font-sans text-[11px] uppercase tracking-eyebrow text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container">
          <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-2">
            {THEME_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 snap-start rounded-full px-5 py-2.5 font-sans text-[13px] font-medium transition ${
                  filter === c
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'border border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The categories are only a starting point. Any theme works for any occasion once you
            change the wording and the palette, so browse on looks rather than labels.
          </p>

          <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {shown.map((t) => (
                <motion.div
                  key={t.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.28 }}
                >
                  <ThemeCard theme={t} onPlay={setPreview} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-10 text-center font-sans text-[12px] text-muted-foreground">
            Showing {shown.length} of {THEMES.length} themes
          </p>
        </div>
      </section>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${preview.name} preview`}
              className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lift"
            >
              <button
                onClick={() => setPreview(null)}
                aria-label="Close preview"
                className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
              >
                <X size={16} />
              </button>

              <div className="relative aspect-[9/16]">
                <img src={preview.photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-70"
                  style={{
                    backgroundImage: `linear-gradient(160deg, ${preview.grad[0]}, ${preview.grad[1]})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/70" />

                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">
                  <p className="font-sans text-[9px] uppercase tracking-eyebrow text-white/70">
                    {preview.category}
                  </p>
                  <h3 className="mt-4 font-script text-5xl leading-tight">Lisa &amp; Jo</h3>
                  <div className="my-5 h-px w-16 bg-white/40" />
                  <p className="font-cinzel text-sm tracking-[0.3em] text-white/85">14 . 09 . 2027</p>
                  <p className="mt-8 font-serif text-lg">{preview.name}</p>
                  <p className="mt-1.5 text-[12px] text-white/70">{preview.blurb}</p>
                  <Link to="/order?plan=vip" className="btn-gold mt-7 w-full py-3 text-[13px]">
                    Use this theme
                  </Link>
                  <p className="mt-3 text-[10px] text-white/50">
                    Preview stand in. The live product plays a short film here.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
