import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Armchair,
  Blocks,
  Check,
  ExternalLink,
  Home,
  ListChecks,
  Palette,
  PiggyBank,
  Users,
} from 'lucide-react'
import { INFO_BLOCKS } from '../data/content'
import { THEMES } from '../data/themes'
import { WAX_SEAL_COLOURS } from '../data/site'
import {
  ACTIVE_BLOCKS,
  BUDGET,
  CHECKLIST,
  GUESTS,
  TABLES,
  type Guest,
} from '../data/mockDashboard'
import WaxSeal from '../components/ui/WaxSeal'

type View = 'overview' | 'design' | 'blocks' | 'guests' | 'seating' | 'budget' | 'checklist'

const MENU: { id: View; label: string; icon: typeof Home }[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'blocks', label: 'Blocks', icon: Blocks },
  { id: 'guests', label: 'Guests and RSVP', icon: Users },
  { id: 'seating', label: 'Seating', icon: Armchair },
  { id: 'budget', label: 'Budget', icon: PiggyBank },
  { id: 'checklist', label: 'Checklist', icon: ListChecks },
]

export default function Dashboard() {
  const [view, setView] = useState<View>('overview')
  const [guests, setGuests] = useState<Guest[]>(GUESTS)
  const [theme, setTheme] = useState(THEMES[0])
  const [seal, setSeal] = useState(WAX_SEAL_COLOURS[0])
  const [blocks, setBlocks] = useState<string[]>(ACTIVE_BLOCKS)
  const [checks, setChecks] = useState(CHECKLIST)

  const stats = useMemo(() => {
    const yes = guests.filter((g) => g.rsvp === 'yes')
    const plusOnes = yes.filter((g) => g.plusOneName).length
    return {
      invited: guests.length,
      attending: yes.length + plusOnes,
      pending: guests.filter((g) => g.rsvp === 'pending').length,
      declined: guests.filter((g) => g.rsvp === 'no').length,
      rate: Math.round(((guests.length - guests.filter((g) => g.rsvp === 'pending').length) / guests.length) * 100),
    }
  }, [guests])

  return (
    <div className="min-h-screen bg-cream-dark/30">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
              W
            </span>
            <span className="hidden font-display text-xl leading-none sm:block">
              Wooow<span className="gold-text"> Invites</span>
            </span>
          </Link>

          <div className="flex items-center gap-2.5">
            <span className="hidden rounded-full bg-gold/20 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-eyebrow text-[hsl(42_80%_28%)] sm:block">
              VIP
            </span>
            <button className="btn-primary px-5 py-2.5 text-[13px]">
              View invitation <ExternalLink size={13} />
            </button>
          </div>
        </div>
      </header>

      <div className="container flex gap-8 py-8">
        <nav className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24 space-y-1">
            {MENU.map((m) => (
              <button
                key={m.id}
                onClick={() => setView(m.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left font-sans text-[13px] font-medium transition ${
                  view === m.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'text-foreground/75 hover:bg-secondary'
                }`}
              >
                <m.icon size={16} strokeWidth={1.7} />
                {m.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="min-w-0 flex-1">
          <h1 className="sr-only">
            Your invitation dashboard, {MENU.find((m) => m.id === view)?.label}
          </h1>

          {/* mobile tabs */}
          <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto lg:hidden">
            {MENU.map((m) => (
              <button
                key={m.id}
                onClick={() => setView(m.id)}
                className={`shrink-0 rounded-full px-4 py-2 font-sans text-[12px] font-medium transition ${
                  view === m.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground/75'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

            <motion.div
              key={view}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
            >
              {view === 'overview' && <Overview stats={stats} theme={theme} seal={seal} />}
              {view === 'design' && (
                <Design theme={theme} setTheme={setTheme} seal={seal} setSeal={setSeal} />
              )}
              {view === 'blocks' && <BlocksView blocks={blocks} setBlocks={setBlocks} />}
              {view === 'guests' && <GuestsView guests={guests} setGuests={setGuests} />}
              {view === 'seating' && <Seating guests={guests} />}
              {view === 'budget' && <Budget />}
              {view === 'checklist' && <Checklist checks={checks} setChecks={setChecks} />}
            </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ---------- panels ---------- */

function Panel({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft md:p-8">
      <h2 className="font-display text-2xl font-normal">{title}</h2>
      {sub && <p className="mt-1.5 text-[13px] text-muted-foreground">{sub}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Overview({
  stats,
  theme,
  seal,
}: {
  stats: { invited: number; attending: number; pending: number; declined: number; rate: number }
  theme: (typeof THEMES)[number]
  seal: { name: string; hex: string }
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Invited', stats.invited, 'text-primary'],
          ['Attending', stats.attending, 'text-sage'],
          ['Awaiting reply', stats.pending, 'text-gold'],
          ['Cannot make it', stats.declined, 'text-destructive'],
        ].map(([label, value, colour]) => (
          <div key={label as string} className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
            <p className="eyebrow">{label}</p>
            <p className={`mt-2 font-display text-5xl leading-none ${colour}`}>{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Panel title="Replies so far" sub={`${stats.rate}% of your list has answered`}>
          <div className="h-3 overflow-hidden rounded-full bg-secondary">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.rate}%` }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-sage to-[hsl(140_25%_55%)]"
            />
          </div>

          <div className="mt-6 space-y-2.5">
            {[
              ['Sent 14 March', 'Invitations went out to 12 households'],
              ['First reply in 4 minutes', 'Marie Fletcher, attending with Alan'],
              ['3 still to answer', 'A reminder goes out automatically on Friday'],
            ].map(([t, s]) => (
              <div key={t} className="flex items-start gap-3 rounded-xl bg-secondary/40 px-4 py-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="text-[13px] font-medium">{t}</p>
                  <p className="text-[12px] text-muted-foreground">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Your invitation">
          <div className="relative aspect-[9/14] overflow-hidden rounded-2xl">
            <img src={theme.photo} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-0 opacity-70 mix-blend-multiply"
              style={{ backgroundImage: `linear-gradient(160deg, ${theme.grad[0]}, ${theme.grad[1]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
            <div className="relative flex h-full flex-col items-center justify-center px-5 text-center text-white">
              <p className="font-script text-3xl">Lisa &amp; Jo</p>
              <div className="my-3 h-px w-12 bg-white/40" />
              <p className="font-cinzel text-[9px] tracking-[0.3em] text-white/85">14 . 09 . 2027</p>
              <div className="mt-5">
                <WaxSeal size={54} colour={seal.hex} initials="L&J" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center font-sans text-[11px] text-muted-foreground">
            {theme.name} · {seal.name} seal
          </p>
        </Panel>
      </div>
    </div>
  )
}

function Design({
  theme,
  setTheme,
  seal,
  setSeal,
}: {
  theme: (typeof THEMES)[number]
  setTheme: (t: (typeof THEMES)[number]) => void
  seal: { name: string; hex: string }
  setSeal: (s: { name: string; hex: string }) => void
}) {
  return (
    <div className="space-y-6">
      <Panel title="Theme" sub="Change it as often as you like. Nothing else you have set is affected.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {THEMES.slice(0, 15).map((t) => (
            <button
              key={t.slug}
              onClick={() => setTheme(t)}
              className={`group relative overflow-hidden rounded-xl border-2 transition ${
                theme.slug === t.slug ? 'border-gold shadow-gold' : 'border-transparent hover:border-border'
              }`}
            >
              <div className="relative aspect-[3/4]">
                <img src={t.photo} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div
                  className="absolute inset-0 opacity-70 mix-blend-multiply"
                  style={{ backgroundImage: `linear-gradient(160deg, ${t.grad[0]}, ${t.grad[1]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {theme.slug === t.slug && (
                  <span className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-gold text-[hsl(350_40%_20%)]">
                    <Check size={11} strokeWidth={3} />
                  </span>
                )}
                <p className="absolute inset-x-1.5 bottom-1.5 truncate font-sans text-[10px] font-medium text-white">
                  {t.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Panel>

      <Panel title="Envelope and seal" sub="What guests see before anything else.">
        <div className="flex flex-wrap items-center gap-8">
          <WaxSeal size={128} colour={seal.hex} initials="L&J" />
          <div>
            <p className="eyebrow">Seal colour</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {WAX_SEAL_COLOURS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSeal(c)}
                  aria-label={c.name}
                  className="grid h-10 w-10 place-items-center rounded-full transition hover:scale-110"
                  style={{
                    background: c.hex,
                    boxShadow: c.name === seal.name ? `0 0 0 2px ${c.hex}` : undefined,
                  }}
                >
                  {c.name === seal.name && <Check size={15} className="text-white" strokeWidth={3} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </div>
  )
}

function BlocksView({
  blocks,
  setBlocks,
}: {
  blocks: string[]
  setBlocks: (b: string[]) => void
}) {
  const toggle = (name: string) =>
    setBlocks(blocks.includes(name) ? blocks.filter((b) => b !== name) : [...blocks, name])

  return (
    <Panel
      title="Information blocks"
      sub={`${blocks.length} of ${INFO_BLOCKS.length} added. Tap to add or remove.`}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {INFO_BLOCKS.map((b) => {
          const on = blocks.includes(b.name)
          return (
            <button
              key={b.name}
              onClick={() => toggle(b.name)}
              className={`relative rounded-2xl border p-5 text-center transition ${
                on
                  ? 'border-primary/40 bg-primary/[0.06] shadow-soft'
                  : 'border-border/70 bg-card hover:border-primary/30'
              }`}
            >
              {on && (
                <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check size={11} strokeWidth={3} />
                </span>
              )}
              <p className="font-sans text-[12px] font-medium">{b.name}</p>
            </button>
          )
        })}
      </div>
    </Panel>
  )
}

function GuestsView({
  guests,
  setGuests,
}: {
  guests: Guest[]
  setGuests: (g: Guest[]) => void
}) {
  const [filter, setFilter] = useState<'All' | Guest['category']>('All')

  const shown = filter === 'All' ? guests : guests.filter((g) => g.category === filter)

  const setRsvp = (id: string, rsvp: Guest['rsvp']) =>
    setGuests(guests.map((g) => (g.id === id ? { ...g, rsvp } : g)))

  const togglePlusOne = (id: string) =>
    setGuests(guests.map((g) => (g.id === id ? { ...g, plusOneAllowed: !g.plusOneAllowed } : g)))

  return (
    <Panel title="Guests and RSVP" sub="Categories get their own link, so each group sees only what applies to them.">
      <div className="mb-5 flex flex-wrap gap-2">
        {(['All', 'Day', 'Evening', 'Ceremony only'] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 font-sans text-[12px] font-medium transition ${
              filter === c
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-foreground/75 hover:border-primary/30'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[42rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-border/70 font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
              <th className="pb-3 pr-4 font-bold">Guest</th>
              <th className="pb-3 pr-4 font-bold">Category</th>
              <th className="pb-3 pr-4 font-bold">RSVP</th>
              <th className="pb-3 pr-4 font-bold">Plus one</th>
              <th className="pb-3 font-bold">Meal</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((g) => (
              <tr key={g.id} className="border-b border-border/50 last:border-0">
                <td className="py-3.5 pr-4">
                  <p className="text-[13px] font-medium">{g.name}</p>
                  {g.plusOneName && (
                    <p className="text-[11px] text-muted-foreground">with {g.plusOneName}</p>
                  )}
                </td>
                <td className="py-3.5 pr-4">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-sans text-[10px] text-foreground/75">
                    {g.category}
                  </span>
                </td>
                <td className="py-3.5 pr-4">
                  <div className="flex gap-1">
                    {(['yes', 'pending', 'no'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setRsvp(g.id, r)}
                        className={`rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold capitalize transition ${
                          g.rsvp === r
                            ? r === 'yes'
                              ? 'bg-sage text-white'
                              : r === 'no'
                                ? 'bg-destructive text-white'
                                : 'bg-gold text-[hsl(350_40%_20%)]'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary/70'
                        }`}
                      >
                        {r === 'pending' ? 'waiting' : r}
                      </button>
                    ))}
                  </div>
                </td>
                <td className="py-3.5 pr-4">
                  <button
                    onClick={() => togglePlusOne(g.id)}
                    aria-label={`Toggle plus one for ${g.name}`}
                    className={`flex h-5 w-9 items-center rounded-full px-0.5 transition ${
                      g.plusOneAllowed ? 'justify-end bg-sage' : 'justify-start bg-muted-foreground/30'
                    }`}
                  >
                    <span className="h-4 w-4 rounded-full bg-white shadow" />
                  </button>
                </td>
                <td className="py-3.5 text-[12px] text-muted-foreground">{g.meal ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  )
}

function Seating({ guests }: { guests: Guest[] }) {
  const seated = guests.filter((g) => g.table)
  const unassigned = guests.filter((g) => g.rsvp === 'yes' && !g.table)

  return (
    <div className="space-y-6">
      <Panel title="Seating plan" sub="Confirmed guests appear here automatically, ready to be placed.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TABLES.map((t) => {
            const at = seated.filter((g) => g.table === t.name)
            return (
              <div key={t.id} className="rounded-2xl border border-border/70 bg-secondary/30 p-5">
                <div className="flex items-center justify-between">
                  <p className="font-serif text-base">{t.name}</p>
                  <span className="font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
                    {at.length}/{t.seats}
                  </span>
                </div>

                <div
                  className={`mx-auto my-4 grid place-items-center border-2 border-dashed border-border bg-card ${
                    t.shape === 'round' ? 'h-20 w-20 rounded-full' : 'h-16 w-28 rounded-lg'
                  }`}
                >
                  <span className="font-sans text-[10px] text-muted-foreground">{t.shape}</span>
                </div>

                <div className="space-y-1">
                  {at.length === 0 && (
                    <p className="text-center text-[11px] text-muted-foreground">Nobody placed yet</p>
                  )}
                  {at.map((g) => (
                    <p key={g.id} className="rounded-lg bg-card px-2.5 py-1.5 text-[11px]">
                      {g.name}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Panel>

      <Panel title="Not yet seated" sub={`${unassigned.length} confirmed guests still to place`}>
        <div className="flex flex-wrap gap-2">
          {unassigned.map((g) => (
            <span
              key={g.id}
              className="cursor-grab rounded-full border border-border bg-card px-3.5 py-1.5 font-sans text-[12px] shadow-soft active:cursor-grabbing"
            >
              {g.name}
            </span>
          ))}
          {unassigned.length === 0 && (
            <p className="text-[13px] text-muted-foreground">Everyone confirmed has a table.</p>
          )}
        </div>
      </Panel>
    </div>
  )
}

function Budget() {
  const target = 26000
  const estimated = BUDGET.reduce((s, b) => s + b.estimated, 0)
  const actual = BUDGET.reduce((s, b) => s + b.actual, 0)
  const diff = actual - estimated

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ['Target', `£${target.toLocaleString()}`, 'text-primary'],
          ['Estimated', `£${estimated.toLocaleString()}`, 'text-foreground'],
          [diff > 0 ? 'Over by' : 'Under by', `£${Math.abs(diff).toLocaleString()}`, diff > 0 ? 'text-destructive' : 'text-sage'],
        ].map(([l, v, c]) => (
          <div key={l as string} className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
            <p className="eyebrow">{l}</p>
            <p className={`mt-2 font-display text-4xl leading-none ${c}`}>{v}</p>
          </div>
        ))}
      </div>

      <Panel title="Where the money goes" sub="Estimated against what you have actually committed.">
        <div className="space-y-3.5">
          {BUDGET.map((b) => {
            const over = b.actual > b.estimated
            const pct = Math.min(100, Math.round((b.actual / b.estimated) * 100))
            return (
              <div key={b.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[13px] font-medium">{b.category}</p>
                  <p className="font-sans text-[12px] tabular-nums">
                    <span className={over ? 'text-destructive' : 'text-sage'}>
                      £{b.actual.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground"> of £{b.estimated.toLocaleString()}</span>
                  </p>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full ${over ? 'bg-destructive' : 'bg-sage'}`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Panel>
    </div>
  )
}

function Checklist({
  checks,
  setChecks,
}: {
  checks: typeof CHECKLIST
  setChecks: (c: typeof CHECKLIST) => void
}) {
  const done = checks.filter((c) => c.done).length
  const pct = Math.round((done / checks.length) * 100)

  const groups = [...new Set(checks.map((c) => c.group))]

  return (
    <Panel title="Checklist" sub={`${done} of ${checks.length} done, ${pct}% complete`}>
      <div className="mb-7 h-3 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-[hsl(42_75%_45%)]"
        />
      </div>

      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g}>
            <p className="eyebrow">{g}</p>
            <div className="mt-3 space-y-1.5">
              {checks
                .filter((c) => c.group === g)
                .map((c) => (
                  <button
                    key={c.id}
                    onClick={() =>
                      setChecks(checks.map((x) => (x.id === c.id ? { ...x, done: !x.done } : x)))
                    }
                    className="flex w-full items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 text-left transition hover:border-primary/30"
                  >
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border transition ${
                        c.done ? 'border-sage bg-sage text-white' : 'border-border'
                      }`}
                    >
                      {c.done && <Check size={12} strokeWidth={3} />}
                    </span>
                    <span
                      className={`text-[13px] ${
                        c.done ? 'text-muted-foreground line-through' : 'text-foreground/85'
                      }`}
                    >
                      {c.task}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}
