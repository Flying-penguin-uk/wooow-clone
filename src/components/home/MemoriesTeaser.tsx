import { Link } from 'react-router-dom'
import { ArrowRight, QrCode } from 'lucide-react'
import Reveal from '../ui/Reveal'

const POINTS = [
  'One QR code for the whole room',
  'The free version holds 50 photos',
  'Stays online for 90 days after the event',
]

export default function MemoriesTeaser() {
  return (
    <section className="section bg-cream-dark/40">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">New, already in your dashboard</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Wooow Memories</h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            A shared album that fills itself while the party is still going. Guests scan one code,
            upload what they have taken and leave a message. No app, no account, no chasing people
            for photos three weeks later.
          </p>

          <ul className="mt-7 space-y-2.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[14px]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/memories"
            className="mt-7 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary hover:underline"
          >
            See how Memories works <ArrowRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-lift">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-destructive">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />
                    Live
                  </span>
                  <p className="mt-2 font-serif text-lg">Sarah &amp; Tom</p>
                </div>
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-primary">
                  <QrCode size={26} strokeWidth={1.4} />
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-1.5">
                {[
                  '1519741497674-611481863552',
                  '1511285560929-80b456fea0bc',
                  '1465495976277-4387d4b0e4a6',
                  '1470229722913-7ea0d1a0a2e4',
                  '1519671482749-fd09be7ccebf',
                  '1464366400600-7168b8af9bc3',
                ].map((id, i) => (
                  <img
                    key={id}
                    src={`https://images.unsplash.com/photo-${id}?w=260&auto=format&fit=crop&q=70`}
                    alt=""
                    loading="lazy"
                    className="aspect-square w-full rounded-lg object-cover"
                    style={{ animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-secondary/70 px-3.5 py-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary font-sans text-[10px] font-bold text-primary-foreground">
                  E
                </span>
                <p className="text-[12px] text-foreground/85">
                  <span className="font-semibold">Emma</span> added 3 photos
                  <span className="text-muted-foreground"> · just now</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
