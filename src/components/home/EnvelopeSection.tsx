import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { WAX_SEAL_COLOURS } from '../../data/site'
import Reveal from '../ui/Reveal'
import WaxSeal from '../ui/WaxSeal'

export default function EnvelopeSection() {
  const [colour, setColour] = useState(WAX_SEAL_COLOURS[0])
  const [initials, setInitials] = useState('L&J')

  return (
    <section className="section bg-cream-dark/40">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Included with VIP</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            A digital envelope, sealed in wax
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Before anyone reads a word, they get an envelope in your colour with your initials
            pressed into the seal. It breaks open when they tap it. Small thing, but it is the moment
            people remember.
          </p>

          <div className="mt-8">
            <p className="eyebrow">Seal colour</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {WAX_SEAL_COLOURS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColour(c)}
                  aria-label={c.name}
                  aria-pressed={c.name === colour.name}
                  className="grid h-10 w-10 place-items-center rounded-full ring-offset-2 ring-offset-background transition hover:scale-110"
                  style={{
                    background: c.hex,
                    boxShadow: c.name === colour.name ? `0 0 0 2px ${c.hex}` : undefined,
                  }}
                >
                  {c.name === colour.name && <Check size={15} className="text-white" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 max-w-[13rem]">
            <label htmlFor="initials" className="eyebrow">
              Your initials
            </label>
            <input
              id="initials"
              value={initials}
              maxLength={5}
              onChange={(e) => setInitials(e.target.value.toUpperCase())}
              className="mt-3 w-full rounded-full border border-input bg-background px-5 py-2.5 text-center font-display text-lg tracking-widest outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex justify-center">
          <motion.div
            whileHover={{ rotateY: 8, rotateX: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="relative aspect-[4/3] w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-2xl bg-[hsl(35_35%_92%)] shadow-lift" />
            <div
              className="absolute inset-x-0 top-0 h-1/2 origin-top rounded-t-2xl"
              style={{
                background: 'linear-gradient(170deg, hsl(35 32% 89%), hsl(35 28% 84%))',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            />
            <div className="absolute inset-x-8 bottom-8 top-1/3 rounded-lg bg-card px-6 py-5 text-center shadow-soft">
              <p className="font-sans text-[8px] uppercase tracking-eyebrow text-muted-foreground">
                You are invited
              </p>
              <p className="mt-2 font-script text-3xl text-primary">{initials || 'L&J'}</p>
              <p className="mt-2 font-cinzel text-[9px] tracking-[0.25em] text-muted-foreground">
                14 . 09 . 2027
              </p>
            </div>

            <div className="absolute left-1/2 top-[46%] -translate-x-1/2">
              <motion.div
                key={colour.hex}
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 15 }}
              >
                <WaxSeal colour={colour.hex} initials={initials || 'L&J'} size={104} />
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
