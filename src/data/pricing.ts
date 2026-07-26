export type Plan = {
  id: 'basic' | 'vip' | 'deluxe'
  name: string
  badge?: string
  price: number
  wasPrice?: number
  blurb: string
  cta: string
  featured?: boolean
  features: string[]
  bonus?: { label: string; title: string; normally: number }
  footnotes?: string[]
}

export const PLANS: Plan[] = [
  {
    id: 'vip',
    name: 'VIP',
    badge: 'Most popular, best value',
    price: 99,
    wasPrice: 200,
    blurb: 'Full access to everything you need for the perfect invitation.',
    cta: 'Get VIP Access',
    featured: true,
    bonus: { label: 'Limited-time bonus', title: 'Save the Date included', normally: 49 },
    features: [
      'All information blocks',
      '40+ animated themes',
      'Unlimited guests',
      'RSVP tracking',
      '3 languages',
      'Custom envelope',
      'Custom music',
      'Save the Date link included',
      'Planning tools (budget, checklist, seating)',
      'Fully customisable',
      'Priority support',
    ],
    footnotes: ['2,400+ couples chose VIP', '30 day money back guarantee'],
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 89,
    blurb: 'Perfect for a simple, elegant digital invitation.',
    cta: 'Get Started',
    features: [
      '5 basic themes',
      '2 information blocks',
      '30 guests tracking',
      'RSVP tracking',
      '1 language',
      'Custom envelope',
      'Custom audio',
      'Priority support',
    ],
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    badge: 'Premium',
    price: 599,
    blurb: 'We build the whole invitation for you. Send your details and we handle the rest.',
    cta: 'Go Deluxe',
    features: [
      'Everything in VIP',
      'We design your entire invitation',
      'Custom hand drawn portraits of you, fully animated',
      'Custom opening animation',
      'Personal design consultation',
      'Planning tools included',
      'Revisions until you are happy with it',
      'Just send your details, we do the rest',
    ],
    footnotes: ['30 day money back guarantee'],
  },
]

export const SAVE_THE_DATE_PRICE = 49

export const PLANNER_PLANS = [
  {
    name: 'Planner',
    price: 249,
    period: 'per year',
    blurb: 'For planners running a handful of events at a time.',
    features: [
      'Up to 10 client invitations per year',
      'One dashboard for every event',
      'RSVP, budget and seating per client',
      'All 64 themes',
      'Priority support',
    ],
    cta: 'Buy Now',
  },
  {
    name: 'Planner Pro',
    price: 599,
    period: 'per year',
    blurb: 'For studios and agencies who want it under their own name.',
    featured: true,
    features: [
      'Unlimited client invitations',
      'White label, your brand on every invite',
      'Custom domain support',
      'Team logins',
      'Dedicated account manager',
      'Early access to new themes',
    ],
    cta: 'Buy Now',
  },
]

export const MEMORIES_PLANS = [
  {
    name: 'Included',
    price: 0,
    blurb: 'Comes with every invitation, nothing extra to pay.',
    features: ['50 photos', 'One QR code for all guests', 'Live gallery', '90 days online'],
    cta: 'Already yours',
  },
  {
    name: 'Memories Plus',
    price: 29,
    blurb: 'For events where fifty photos will never be enough.',
    featured: true,
    features: [
      'Unlimited photos and videos',
      'Voice notes from guests',
      'Host moderation',
      'Full resolution download of everything',
      '12 months online',
      'Printable QR table cards',
    ],
    cta: 'Upgrade Memories',
  },
]
