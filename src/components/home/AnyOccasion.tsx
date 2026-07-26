import BeforeAfter from '../ui/BeforeAfter'
import Reveal from '../ui/Reveal'

function Panel({
  photo,
  overlay,
  eyebrow,
  names,
  date,
  sub,
}: {
  photo: string
  overlay: string
  eyebrow: string
  names: string
  date: string
  sub: string
}) {
  return (
    <div className="relative h-full w-full">
      <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: overlay }} />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="font-sans text-[9px] uppercase tracking-eyebrow text-white/70">{eyebrow}</p>
        <h3 className="mt-3 font-script text-4xl leading-tight sm:text-5xl">{names}</h3>
        <div className="my-4 h-px w-16 bg-white/40" />
        <p className="font-cinzel text-[11px] tracking-[0.3em] text-white/85 sm:text-sm">{date}</p>
        <p className="mt-1.5 font-sans text-[10px] text-white/60">{sub}</p>
      </div>
    </div>
  )
}

export default function AnyOccasion() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">One theme, any occasion</p>
          <h2 className="mt-4 text-4xl md:text-5xl">The same design, a different event</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Nothing is tied to weddings. Drag the handle and watch one design become a birthday
            invitation without changing anything but the words and the colours.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-12 max-w-3xl">
          <BeforeAfter
            leftLabel="Wedding"
            rightLabel="Birthday"
            left={
              <Panel
                photo="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=70"
                overlay="linear-gradient(180deg, rgba(0,0,0,.3), rgba(122,44,60,.6))"
                eyebrow="Together with their families"
                names="Lisa & Jo"
                date="14 . 09 . 2027"
                sub="Castello di Vincigliata"
              />
            }
            right={
              <Panel
                photo="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&auto=format&fit=crop&q=70"
                overlay="linear-gradient(180deg, rgba(0,0,0,.3), rgba(42,60,110,.6))"
                eyebrow="Please join us to celebrate"
                names="Maya turns 40"
                date="22 . 11 . 2026"
                sub="The Glasshouse, Sheffield"
              />
            }
          />
        </Reveal>
      </div>
    </section>
  )
}
