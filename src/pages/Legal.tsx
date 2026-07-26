import PageHero from '../components/ui/PageHero'

const COPY = {
  privacy: {
    title: 'Privacy policy',
    lead: 'What this build would collect, why, and how long it would keep it.',
    sections: [
      {
        h: 'What we collect',
        p: 'Your name and email when you buy, the content you put into your invitation, and the RSVP answers your guests submit. Payment card details are handled by the payment provider and never reach our servers.',
      },
      {
        h: 'Why we collect it',
        p: 'To give you access to your dashboard, to show your invitation to the people you send it to, and to email you about your own order. Nothing here is sold on.',
      },
      {
        h: 'Guest data',
        p: 'Guest names and RSVP answers belong to you. You can export or delete them at any point, and they are removed with the invitation when you close the account.',
      },
      {
        h: 'How long we keep it',
        p: 'Invitations stay live until you delete them. Order records are kept for six years because tax law requires it. Everything else goes when you ask.',
      },
      {
        h: 'Your rights',
        p: 'You can ask for a copy of what we hold, ask for it to be corrected, or ask for it to be deleted. Requests are answered inside 30 days.',
      },
    ],
  },
  terms: {
    title: 'Terms of service',
    lead: 'The agreement between you and us, written to be read.',
    sections: [
      {
        h: 'What you are buying',
        p: 'A one off licence to build and host one invitation for one event, on the package you paid for. There is no recurring charge and no per guest fee.',
      },
      {
        h: 'The money back guarantee',
        p: 'Ask within 30 days of purchase and you get a full refund, no explanation needed. After 30 days we look at it case by case.',
      },
      {
        h: 'What you can put in it',
        p: 'Your own photos, music you have the right to use, and your own words. Anything unlawful or designed to harass someone gets removed.',
      },
      {
        h: 'Availability',
        p: 'We aim to keep invitations reachable at all times but cannot promise perfection. If your invitation is down on the day of your event, tell us and we will make it right.',
      },
      {
        h: 'Changes',
        p: 'If these terms change we will email you before the change takes effect, not afterwards.',
      },
    ],
  },
}

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const c = COPY[kind]

  return (
    <>
      <PageHero title={c.title} lead={c.lead} />
      <section className="pb-24">
        <div className="container max-w-2xl space-y-8">
          {c.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl font-normal">{s.h}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
          <p className="border-t border-border/70 pt-6 text-xs text-muted-foreground">
            This is a demonstration build. These pages are placeholders and are not legal advice.
          </p>
        </div>
      </section>
    </>
  )
}
