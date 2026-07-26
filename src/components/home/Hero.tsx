import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { BRAND, HERO_WORDS } from '../../data/site'
import { CountdownInline } from '../ui/Countdown'
import WaxSeal from '../ui/WaxSeal'
import Stars from '../ui/Stars'

export default function Hero() {
  const [word, setWord] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % HERO_WORDS.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* soft light wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(42_70%_55%/0.16),transparent)] blur-2xl" />
        <div className="absolute -left-32 top-64 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,hsl(350_40%_35%/0.10),transparent)] blur-2xl" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-border/70 bg-card/70 px-4 py-1.5 backdrop-blur"
        >
          <Stars value={BRAND.rating} />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-primary/75">
            {BRAND.rating} from {BRAND.couples.toLocaleString()}+ couples
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="mx-auto mt-7 max-w-4xl text-center text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl"
        >
          An invitation as good as the day itself
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 font-serif text-xl italic text-muted-foreground md:text-2xl"
        >
          <span>designed to</span>
          <span className="relative inline-grid h-9 min-w-[13ch] place-items-center overflow-hidden md:h-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={HERO_WORDS[word]}
                initial={{ y: 26, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -26, opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="absolute whitespace-nowrap font-display not-italic text-primary"
              >
                {HERO_WORDS[word]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
          className="mx-auto mt-7 max-w-xl text-center text-[15px] leading-relaxed text-muted-foreground"
        >
          Guests open a link and get an animated invitation, every detail of your day, and one place
          to reply. You get the whole guest list updating itself while you get on with everything
          else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="mt-9 flex flex-col items-center gap-4"
        >
          <span className="rounded-full border border-primary/20 bg-secondary/60 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-primary/80">
            RSVP built in, guest tracking that keeps itself up to date
          </span>

          <Link to="/order" className="btn-gold text-base">
            Create yours now
          </Link>

          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-4xl text-primary">£99</span>
            <span className="font-sans text-lg text-muted-foreground line-through">£200</span>
          </div>
          <p className="text-xs text-muted-foreground">
            One payment, your whole event, unlimited guests
          </p>

          <p className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-primary/70">
            Sale ends in <CountdownInline className="text-primary" />
          </p>

          <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck size={13} className="text-sage" />
            30 day money back guarantee
          </p>
        </motion.div>
      </div>

      {/* animated invitation preview */}
      <div className="container mt-16 md:mt-20">
        <PhonePreview />
      </div>
    </section>
  )
}

function PhonePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[19rem]"
    >
      <div className="animate-float">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2.6rem] border-[10px] border-[hsl(350_20%_18%)] bg-[hsl(350_20%_18%)] shadow-lift">
          <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[hsl(350_20%_18%)]" />

          <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&auto=format&fit=crop&q=70"
              alt="Invitation preview"
              className="absolute inset-0 h-full w-full scale-110 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />

            <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
              <p className="font-sans text-[9px] uppercase tracking-eyebrow text-white/70">
                Together with their families
              </p>
              <h3 className="mt-3 font-script text-4xl leading-tight">Lisa &amp; Jo</h3>
              <div className="my-4 h-px w-16 bg-white/40" />
              <p className="font-cinzel text-[11px] tracking-[0.3em] text-white/85">14 . 09 . 2027</p>
              <p className="mt-1 font-sans text-[10px] text-white/60">Castello di Vincigliata</p>

              <div className="mt-7 grid w-full grid-cols-4 gap-1.5">
                {[
                  ['128', 'days'],
                  ['06', 'hrs'],
                  ['42', 'min'],
                  ['19', 'sec'],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-lg bg-white/12 py-2 backdrop-blur">
                    <p className="font-sans text-sm font-semibold leading-none">{n}</p>
                    <p className="mt-1 font-sans text-[7px] uppercase tracking-widest text-white/60">
                      {l}
                    </p>
                  </div>
                ))}
              </div>

              <span className="mt-6 w-full rounded-full bg-white/95 py-2.5 font-sans text-[11px] font-semibold text-[hsl(350_40%_25%)]">
                RSVP
              </span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -22 }}
        animate={{ opacity: 1, scale: 1, rotate: -10 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 180, damping: 14 }}
        className="absolute -bottom-6 -left-6"
      >
        <WaxSeal size={92} initials="L&J" />
      </motion.div>
    </motion.div>
  )
}
