export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Pay and get straight in',
    body: 'There is no waiting list and no onboarding call. One payment opens your dashboard and you can start building the same minute you check out.',
  },
  {
    step: '02',
    title: 'Build without limits',
    body: 'Nothing is locked to a theme. Swap layouts, animations, fonts, colours, music, envelopes and content blocks as often as you like until it looks like the two of you.',
  },
  {
    step: '03',
    title: 'Share it and watch it land',
    body: 'Send one link. Replies land in your dashboard as they come in, so you can chase the stragglers, manage the guest list and stop keeping score in a spreadsheet.',
  },
]

/** The horizontal swipe rail on the homepage. */
export const FEATURE_RAIL = [
  {
    key: 'envelope',
    title: 'Personalised envelope',
    sub: 'with your initials on the seal',
    kind: 'envelope' as const,
  },
  {
    key: 'opening',
    title: 'Opening animation',
    sub: 'the first thing every guest sees',
    kind: 'opening' as const,
  },
  {
    key: 'themes',
    title: '50+ curated themes',
    sub: 'or bring your own photo or film',
    kind: 'themes' as const,
  },
  {
    key: 'share',
    title: 'Share anywhere, instantly',
    sub: 'one link, any app',
    kind: 'chat' as const,
  },
  {
    key: 'rsvp',
    title: 'Live RSVP tracking',
    sub: 'ask any question you want',
    kind: 'rsvp' as const,
  },
  {
    key: 'categories',
    title: 'Categories and tracked links',
    sub: 'day guests and evening guests, one click apart',
    kind: 'categories' as const,
    exclusive: true,
  },
  {
    key: 'plusone',
    title: 'Smart plus one control',
    sub: 'decide who gets to bring someone',
    kind: 'plusone' as const,
    exclusive: true,
  },
]

export const ALSO_INCLUDED = [
  { icon: 'Music', label: 'Custom music' },
  { icon: 'Languages', label: 'Any language' },
  { icon: 'ClipboardList', label: 'Planning tools' },
  { icon: 'Armchair', label: 'Seating map' },
  { icon: 'Images', label: 'Photo album' },
  { icon: 'SlidersHorizontal', label: 'Customise every detail' },
  { icon: 'RefreshCw', label: 'Update anytime' },
  { icon: 'MessageCircleQuestion', label: 'Custom RSVP questions' },
]

export const INFO_BLOCKS = [
  { name: 'Countdown', icon: 'Timer' },
  { name: 'Venue and Map', icon: 'MapPin' },
  { name: 'Our Story', icon: 'Heart' },
  { name: 'Timeline', icon: 'Clock' },
  { name: 'Dress Code', icon: 'Shirt' },
  { name: 'Menu', icon: 'UtensilsCrossed' },
  { name: 'Transport', icon: 'Bus' },
  { name: 'Hotels', icon: 'BedDouble' },
  { name: 'Gift Registry', icon: 'Gift' },
  { name: 'FAQ', icon: 'HelpCircle' },
  { name: 'Photo Gallery', icon: 'Images' },
  { name: 'Boarding Pass', icon: 'Plane' },
  { name: 'Destination', icon: 'Compass' },
  { name: 'Things To Do', icon: 'Ticket' },
  { name: 'Custom Text', icon: 'Type' },
]

export const PAPER_VS_DIGITAL = [
  { feature: 'Cost', paper: '£300 to £1,000+', digital: 'From £89 one off' },
  { feature: 'Time to create', paper: '4 to 8 weeks', digital: 'Ready in minutes' },
  { feature: 'Guest tracking and RSVP', paper: 'Manual spreadsheets', digital: 'Automatic dashboard' },
  { feature: 'Languages', paper: 'One per print run', digital: 'Multiple languages' },
  { feature: 'Updates and changes', paper: 'Reprint everything', digital: 'Update in real time' },
  { feature: 'Delivery', paper: 'Postal service', digital: 'Instant via link' },
  { feature: 'Mobile friendly', paper: 'Not applicable', digital: 'Built for phones first' },
  { feature: 'Environmental cost', paper: 'Paper, ink and postage', digital: 'Nothing to throw away' },
]

export const PLANNING_TOOLS = [
  {
    title: 'Smart checklist',
    body: 'A wedding checklist that already knows what comes next, from booking the venue down to the final fitting. Reorder it, rename it, or ignore half of it.',
    points: [
      'Comes loaded with 30+ essential tasks',
      'Grouped by venue, attire, decor and more',
      'Progress tracked as a percentage so you can see the end',
    ],
    icon: 'ListChecks',
  },
  {
    title: 'Budget tracker',
    body: 'Set the number you are willing to spend, get a sensible split across categories, then log what you actually spend against it. The gap between those two is where the arguments live.',
    points: [
      'Set a target and compare estimated against actual',
      'Standard percentage split per category to start from',
      'Saving notes on the categories that usually run over',
    ],
    icon: 'PiggyBank',
  },
  {
    title: 'Seating plan',
    body: 'Build your tables, set how many fit, then drag guests across from the RSVP list. Anyone who has confirmed is already waiting to be placed.',
    points: [
      'Pulls straight from your confirmed guest list',
      'Unassigned guests visible at a glance',
      'Round or rectangular tables, mixed in one room',
    ],
    icon: 'Armchair',
  },
]

export const FAQS = [
  {
    q: 'Can I use one of these for a birthday?',
    a: 'Yes. Every theme works for any occasion. Pick whichever design you like, change the wording and the colours, and it becomes a birthday, an anniversary, a christening or anything else. Nothing is restricted to weddings.',
  },
  {
    q: 'What actually is a digital invitation?',
    a: 'It is a private web page of your own, opened by a link. Guests tap it and get an animated opening, all your event details and an RSVP form, without downloading anything or making an account.',
  },
  {
    q: 'How does it work?',
    a: 'You pay once, your dashboard opens immediately, and you build the invitation by choosing a theme and dropping in the information blocks you need. When it is ready you share one link.',
  },
  {
    q: 'How do I share it?',
    a: 'Copy your link and send it however you already talk to people. WhatsApp, email, text, a QR code on a printed card. It opens the same way everywhere.',
  },
  {
    q: 'Can I still make changes after I have sent it?',
    a: 'Yes, and this is the main advantage over print. The link never changes, so edit anything you like and every guest sees the current version next time they open it.',
  },
  {
    q: 'Can it be in more than one language?',
    a: 'Yes. Add the languages you need and guests get a switcher on the invitation. Useful when one side of the family is abroad.',
  },
  {
    q: 'How long does it take to build?',
    a: 'Most people have something they are happy with inside an hour. If you do not have every detail yet, publish what you have and fill the rest in later.',
  },
  {
    q: 'Can I customise the design?',
    a: 'Every part of it. Fonts, colours, wording, music, the envelope, the seal, the order of the sections. Start from a theme and take it wherever you want.',
  },
  {
    q: 'How does RSVP tracking work?',
    a: 'Guests reply on the invitation itself. Answers appear in your dashboard straight away with names, numbers, dietary notes and anything else you asked. Export it whenever you need to.',
  },
  {
    q: 'Can I add background music?',
    a: 'Yes. Choose from the library or upload your own track. It waits for the guest to tap play, so nobody gets ambushed on a quiet train.',
  },
  {
    q: 'Is there a limit on guests?',
    a: 'Not on VIP or Deluxe. Basic tracks up to 30 guests. Everyone above that can still open the invitation, they just are not tracked individually.',
  },
  {
    q: 'What if I get stuck?',
    a: 'Message us and a person answers, usually the same day. Deluxe customers get a direct line and a design consultation.',
  },
  {
    q: 'Can I send different information to different guests?',
    a: 'Yes. Build categories such as day guests and evening guests, then give each category its own link. The invitation adjusts itself to whoever opens it.',
  },
  {
    q: 'How does plus one management work?',
    a: 'You decide who is allowed to bring someone, either per guest or across a whole category. Guests without a plus one never see the option, so nobody has to be told no.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Priya R.',
    tag: 'Wedding, verified',
    body: 'We were dreading the invitation stage and it ended up being the easiest part of the whole wedding. Built ours over a weekend, sent one link, and had 80 replies by the Wednesday. Being able to add our own blocks for the travel details saved us a separate website entirely.',
  },
  {
    name: 'Katie T.',
    tag: 'Wedding, verified',
    body: 'The thing I did not expect was how much people would talk about it. Half our guests replied to say they had never seen an invitation do that. The team also tweaked the colours to match our venue without being asked.',
  },
  {
    name: 'Naomi G.',
    tag: 'Wedding',
    body: 'Everything our guests needed was in one place, so we stopped fielding the same three questions on WhatsApp. Tracking RSVPs as they came in was worth the money on its own, and we got our first dance song playing on the invite.',
  },
  {
    name: 'Dan and Josh',
    tag: 'Wedding, verified',
    body: 'We have family in three countries and the language switcher quietly solved a problem we had been arguing about for weeks. Worth it for that alone.',
  },
  {
    name: 'Ellie M.',
    tag: 'Birthday',
    body: 'Used a wedding theme for a 40th and nobody could tell. Changed the wording, changed the colours, done in an evening.',
  },
  {
    name: 'Sofia L.',
    tag: 'Quinceañera',
    body: 'My daughter picked the theme herself and then kept changing her mind. Being able to swap it as many times as she liked without paying again was the whole reason we stayed.',
  },
]

export const MEMORIES_FEATURES = [
  { title: 'One QR for everyone', body: 'A single code on the tables. Guests scan it and they are in, no app and no login.', icon: 'QrCode' },
  { title: 'Personal messages', body: 'Guests can leave a note with their photos, which is usually the part you keep.', icon: 'MessageSquareHeart' },
  { title: 'Live shared gallery', body: 'Photos appear as they are taken, so the album fills up while the night is still going.', icon: 'Images' },
  { title: 'Stays up for 90 days', body: 'Plenty of time for everyone to upload and for you to download the lot.', icon: 'CalendarClock' },
  { title: 'Host moderation', body: 'You can remove anything you would rather was not in there. Your album, your call.', icon: 'ShieldCheck' },
  { title: 'Voice notes as well', body: 'Guests can record a message instead of writing one. These are the ones that get replayed.', icon: 'Mic' },
]

export const MEMORIES_STEPS = [
  { title: 'Set up your album', body: 'It is already in your dashboard. Name it, choose a cover, done.' },
  { title: 'Put the QR out on the day', body: 'Print the table cards or show the code on a screen. Guests do the rest.' },
  { title: 'Watch it fill up', body: 'Photos and messages land live. Download everything at full resolution whenever you want.' },
]

export const PLANNER_BENEFITS = [
  {
    title: 'A different invitation for every client',
    body: 'No house style to work around. Each event gets its own theme, colours and voice, so nothing you send out looks like the last one.',
    icon: 'Palette',
  },
  {
    title: 'Every event in one place',
    body: 'All your weddings under one login, each with its own RSVP list, budget and seating plan. Stop signing in and out of client accounts.',
    icon: 'LayoutGrid',
  },
  {
    title: 'White label on Pro',
    body: 'Your brand on the invitation and on the dashboard your clients see. As far as they know, you built it.',
    icon: 'BadgeCheck',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'digital-save-the-date',
    title: 'Sending a save the date digitally, and when to do it',
    excerpt:
      'Twelve months out for a destination wedding, six for anything closer to home. Here is what to put on it and what to leave for the invitation itself.',
    date: '2026-07-14',
    readMins: 6,
    category: 'Planning',
  },
  {
    slug: 'rsvp-chasing',
    title: 'How to chase an RSVP without falling out with anyone',
    excerpt:
      'Roughly a third of your guest list will not reply the first time. A short, unbothered reminder at the right moment fixes most of it.',
    date: '2026-07-02',
    readMins: 5,
    category: 'Guests',
  },
  {
    slug: 'wedding-website-or-invite',
    title: 'Do you still need a wedding website?',
    excerpt:
      'If your invitation already carries the venue, the timeline, the hotels and the gift list, a second site is just another thing to keep up to date.',
    date: '2026-06-21',
    readMins: 7,
    category: 'Planning',
  },
  {
    slug: 'day-and-evening-guests',
    title: 'Splitting day guests and evening guests without awkwardness',
    excerpt:
      'The trick is that nobody should ever see the invitation meant for someone else. Categories and separate links do this quietly.',
    date: '2026-06-09',
    readMins: 4,
    category: 'Guests',
  },
  {
    slug: 'wedding-budget-split',
    title: 'Where the money actually goes on a wedding',
    excerpt:
      'Venue and catering take around half of most budgets. Knowing that early stops the small decisions eating the big ones.',
    date: '2026-05-28',
    readMins: 8,
    category: 'Budget',
  },
  {
    slug: 'wedding-memory-book',
    title: 'Wedding memory books, and the version that fills itself',
    excerpt:
      'Disposable cameras were a lovely idea with a terrible hit rate. A shared album your guests can reach in one scan works far better.',
    date: '2026-05-15',
    readMins: 5,
    category: 'Memories',
  },
]
