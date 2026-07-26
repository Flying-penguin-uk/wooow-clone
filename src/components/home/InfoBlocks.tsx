import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { INFO_BLOCKS } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function InfoBlocks() {
  return (
    <section className="section bg-cream-dark/40">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow">Build your invitation</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Fifteen blocks to build it from</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Drag in the sections you need and fill in the details. Leave out the ones you do not.
            Nothing here is compulsory and you can reorder the lot at any point.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INFO_BLOCKS.map((b, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[b.icon] ?? Icons.Square
            return (
              <Reveal key={b.name} delay={Math.min(i * 0.04, 0.4)}>
                <div className="group flex h-full cursor-grab flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card px-3 py-7 text-center shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-card active:cursor-grabbing">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary transition group-hover:bg-gold/20 group-hover:text-[hsl(42_80%_30%)]">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="font-sans text-[12px] font-medium leading-tight">{b.name}</span>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary to-burgundy-light p-10 text-center text-primary-foreground shadow-card md:p-14">
            <h3 className="font-display text-3xl font-normal leading-tight md:text-4xl">
              The invitation and the wedding website, in one link
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-primary-foreground/80">
              Venue, timeline, hotels, travel, gift list, gallery and RSVP all live inside the
              invitation. There is no second site to build and no second site to keep current.
            </p>
            <Link
              to="/order"
              className="btn mt-8 bg-primary-foreground px-8 py-3.5 text-primary hover:bg-white"
            >
              Get started
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
