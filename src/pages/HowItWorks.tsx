import { Link } from 'react-router-dom'
import {
  Blocks,
  Mail,
  MessageCircleQuestion,
  Music,
  Palette,
  Type,
  Users,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

const STEPS = [
  {
    icon: Palette,
    title: 'Pick your theme',
    body: 'Start from any of the 64 designs. The theme sets the opening animation and the mood, and nothing else is locked to it. Change your mind next week and the rest of your work stays exactly where it is.',
    points: ['64 themes across every occasion', 'Swap as often as you like', 'Or upload your own film or photo'],
  },
  {
    icon: Mail,
    title: 'Make your envelope',
    body: 'Choose the paper colour, the wax colour and the initials pressed into the seal. This is the first frame anyone sees, so it is worth two minutes.',
    points: ['Five seal colours', 'Your initials engraved', 'Breaks open on tap'],
  },
  {
    icon: Type,
    title: 'Personalise the details',
    body: 'Names, date, venue, the wording of every heading. Fonts and colours are yours as well, so a theme built for a castle can end up looking like a beach.',
    points: ['Every string is editable', 'Six font families', 'Palette applies across the whole invite'],
  },
  {
    icon: Blocks,
    title: 'Build with information blocks',
    body: 'Add the sections your day actually needs and leave the rest out. Timeline, hotels, transport, dress code, gift list, gallery, or a free text block when nothing else fits.',
    points: ['15 blocks to choose from', 'Drag to reorder', 'Hide a block without deleting it'],
  },
  {
    icon: MessageCircleQuestion,
    title: 'Set up your RSVP questions',
    body: 'Ask whatever you need. Attendance, meal choice, dietary requirements, song requests, whether they need a room. Answers arrive already sorted.',
    points: ['Unlimited custom questions', 'Required or optional', 'Export the lot to a spreadsheet'],
  },
  {
    icon: Users,
    title: 'Manage your guests',
    body: 'Import the list, split it into categories, and decide who is allowed a plus one. Each category gets its own link, so evening guests never see the ceremony details.',
    points: ['Categories with separate links', 'Plus one control per guest', 'Reminders to anyone who has not replied'],
  },
  {
    icon: Music,
    title: 'Choose the music',
    body: 'Pick something from the library or upload your own track. It never plays on its own, guests tap to start it.',
    points: ['Upload your own audio', 'Tap to play, never autoplay', 'Loops quietly under the invitation'],
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="The dashboard"
        title="Everything you get, step by step"
        lead="This is what the build actually looks like from the inside. Seven panels, no jargon, and nothing that needs a designer."
      />

      <section className="pb-24">
        <div className="container max-w-4xl space-y-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="grid gap-6 rounded-3xl border border-border/70 bg-card p-8 shadow-soft transition hover:shadow-card md:grid-cols-[auto_1fr] md:p-10">
                <div className="flex items-start gap-4 md:flex-col md:items-center">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <s.icon size={23} strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-4xl leading-none text-gold/40 md:mt-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-normal">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-sans text-[11px] text-foreground/75"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-gradient-to-br from-primary to-burgundy-light p-10 text-center text-primary-foreground shadow-card">
              <h2 className="font-display text-3xl font-normal">That is the whole thing</h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-primary-foreground/80">
                Most people are done in an evening. If you get stuck, message us and a person will
                answer.
              </p>
              <Link
                to="/order?plan=vip"
                className="btn mt-8 bg-primary-foreground px-8 py-3.5 text-primary hover:bg-white"
              >
                Start building, £99
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
