import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { FAQS } from '../data/content'
import Accordion from '../components/ui/Accordion'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import ThemeCard from '../components/ui/ThemeCard'
import { THEMES } from '../data/themes'

const REASONS = [
  {
    title: 'It arrives instantly',
    body: 'No print run, no proofing week, no postage. You finish it in the evening and people have it before they go to bed.',
  },
  {
    title: 'It corrects itself',
    body: 'Venue moved? Time changed? Edit it once. Everyone who opens the link afterwards sees the current version, including people who opened it last month.',
  },
  {
    title: 'It counts the replies for you',
    body: 'RSVPs land in a dashboard instead of on the back of envelopes, and the seating plan reads straight off that list.',
  },
  {
    title: 'It costs a fraction of print',
    body: 'A printed run for 100 guests lands somewhere between £300 and £1,000 once you count postage. This is £99 for as many guests as you like.',
  },
]

export default function DigitalWeddingInvite() {
  return (
    <>
      <PageHero
        eyebrow="Digital wedding invitations"
        title="A wedding invitation that does the admin for you"
        lead="Animated, personal and sent by link. It carries the details, the RSVP and the whole guest list in one place, so nothing needs printing and nothing needs chasing."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/order?plan=vip" className="btn-gold">
            Create yours, £99
          </Link>
          <Link to="/themes" className="btn-outline">
            Browse themes
          </Link>
        </div>
      </PageHero>

      <section className="pb-8">
        <div className="container grid max-w-4xl gap-6 md:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-border/70 bg-card p-7 shadow-soft">
                <h2 className="flex items-start gap-2.5 font-serif text-lg">
                  <Check size={17} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                  {r.title}
                </h2>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="text-center">
            <h2 className="text-4xl md:text-5xl">A few to start from</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {THEMES.slice(0, 4).map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.08}>
                <ThemeCard theme={t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/themes" className="btn-outline">
              See all {THEMES.length}
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-cream-dark/40">
        <div className="container max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-4xl md:text-5xl">Common questions</h2>
          </Reveal>
          <div className="mt-10">
            <Accordion items={FAQS.slice(0, 6)} />
          </div>
          <div className="mt-8 text-center">
            <Link to="/faq" className="btn-outline">
              Read all questions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
