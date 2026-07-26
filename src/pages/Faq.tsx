import { Link } from 'react-router-dom'
import { FAQS } from '../data/content'
import Accordion from '../components/ui/Accordion'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Frequently asked questions"
        lead="The things people ask before buying, answered properly. If yours is not here, send it over and we will add it."
      />

      <section className="pb-24">
        <div className="container max-w-3xl">
          <Accordion items={FAQS} />

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-3xl border border-border/70 bg-card p-10 text-center shadow-soft">
              <h2 className="font-display text-3xl font-normal">Still not sure?</h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Ask us anything, including the awkward questions about whether this is right for your
                day. We would rather tell you no than take the money.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Contact us
                </Link>
                <Link to="/#pricing" className="btn-outline">
                  View plans
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
