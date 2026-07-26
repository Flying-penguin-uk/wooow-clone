import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { THEMES } from '../data/themes'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import ThemeCard from '../components/ui/ThemeCard'

const QUINCE_THEMES = THEMES.filter((t) => t.slug.startsWith('quinceanera'))

const INCLUDED = [
  'Ballroom themes in four colourways',
  'Court of honour listed on the invitation',
  'Padrinos and madrinas section',
  'Ceremony and reception timings',
  'RSVP with meal choice',
  'Spanish and English on one link',
]

export default function Quinceanera() {
  return (
    <>
      <PageHero
        eyebrow="Quinceañera"
        title="An invitation worth the year of planning"
        lead="A quinceañera is not a birthday party with extra chairs. The invitation should say so before anyone reads the date."
      >
        <Link to="/order?plan=vip" className="btn-gold">
          Start yours, £99
        </Link>
      </PageHero>

      <section className="pb-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {QUINCE_THEMES.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.08}>
                <ThemeCard theme={t} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl md:text-5xl">Built for the way the day actually runs</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Mass, photos, entrance, waltz, then the party. Guests need to know which parts they are
              invited to and when to be there, and the ones travelling need it in the language they
              read.
            </p>
            <ul className="mt-7 space-y-2.5">
              {INCLUDED.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px]">
                  <Check size={15} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto w-full max-w-[17rem] overflow-hidden rounded-3xl border border-border/70 shadow-lift">
              <div className="relative aspect-[9/16]">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&auto=format&fit=crop&q=70"
                  alt="Quinceañera invitation preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#a34f80]/45 to-black/75" />
                <div className="relative flex h-full flex-col items-center justify-center px-7 text-center text-white">
                  <p className="font-sans text-[9px] uppercase tracking-eyebrow text-white/70">
                    Mis quince años
                  </p>
                  <h3 className="mt-4 font-script text-5xl leading-tight">Camila</h3>
                  <div className="my-5 h-px w-16 bg-white/40" />
                  <p className="font-cinzel text-sm tracking-[0.28em] text-white/85">08 . 05 . 2027</p>
                  <p className="mt-2 font-sans text-[10px] text-white/60">
                    Salón Real, 18:00
                  </p>
                  <button className="mt-8 w-full rounded-full bg-white/95 py-2.5 font-sans text-[11px] font-semibold text-[hsl(320_40%_28%)]">
                    Confirmar asistencia
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
