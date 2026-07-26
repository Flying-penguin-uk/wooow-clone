import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, CreditCard, Lock, ShieldCheck, Sparkles } from 'lucide-react'
import { PLANS, SAVE_THE_DATE_PRICE } from '../data/pricing'
import { CountdownInline } from '../components/ui/Countdown'
import WaxSeal from '../components/ui/WaxSeal'

type Step = 'details' | 'payment' | 'done'

export default function Order({ saveTheDate = false }: { saveTheDate?: boolean }) {
  const [params] = useSearchParams()
  const planId = params.get('plan') ?? 'vip'

  const plan = useMemo(() => {
    if (saveTheDate) {
      return {
        id: 'std' as const,
        name: 'Save the Date',
        price: SAVE_THE_DATE_PRICE,
        wasPrice: undefined as number | undefined,
        blurb: 'One animated Save the Date, upgradeable to a full invitation later.',
        features: [
          '40+ animated themes',
          'Custom envelope',
          'Live countdown',
          'Background music',
          'Destination map',
          'Multiple languages',
        ],
      }
    }
    const p = PLANS.find((x) => x.id === planId) ?? PLANS[0]
    return { ...p }
  }, [planId, saveTheDate])

  const [step, setStep] = useState<Step>('details')
  const [form, setForm] = useState({ name: '', email: '', updates: true })

  return (
    <div className="min-h-screen bg-cream-dark/30">
      <header className="border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
              W
            </span>
            <span className="font-display text-xl leading-none">
              Wooow<span className="gold-text"> Invites</span>
            </span>
          </Link>
          <p className="flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-eyebrow text-muted-foreground">
            <Lock size={12} /> Secure checkout
          </p>
        </div>
      </header>

      <div className="container max-w-5xl py-10 md:py-16">
        <Link
          to="/#pricing"
          className="inline-flex items-center gap-1.5 font-sans text-[13px] text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft size={14} /> Back to pricing
        </Link>

        <Steps step={step} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-soft md:p-10">
              {step === 'details' && (
                <Pane key="details">
                  <h1 className="font-display text-3xl font-normal">Where should we send access?</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your dashboard opens the second the payment clears, and the link goes to this
                    address.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setStep('payment')
                    }}
                    className="mt-8 space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="eyebrow">
                        Your name
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Fletcher"
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="eyebrow">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className={inputCls}
                      />
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                      <input
                        type="checkbox"
                        checked={form.updates}
                        onChange={(e) => setForm({ ...form, updates: e.target.checked })}
                        className="mt-0.5 h-4 w-4 accent-[hsl(var(--primary))]"
                      />
                      <span className="text-[13px] leading-relaxed text-foreground/80">
                        Keep me posted on my order and new features. No marketing beyond that.
                      </span>
                    </label>

                    <button type="submit" className="btn-gold w-full">
                      Continue to payment
                    </button>
                  </form>
                </Pane>
              )}

              {step === 'payment' && (
                <Pane key="payment">
                  <h1 className="font-display text-3xl font-normal">Payment</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This is a demonstration build. No card details are collected, transmitted or
                    stored, and nothing is charged.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-dashed border-border bg-secondary/30 p-8 text-center">
                      <CreditCard size={30} className="mx-auto text-muted-foreground" strokeWidth={1.4} />
                      <p className="mt-4 font-serif text-lg">Card form goes here</p>
                      <p className="mx-auto mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                        In production this is the payment provider's own hosted field set, so card
                        data never touches the app.
                      </p>
                    </div>

                    <button onClick={() => setStep('done')} className="btn-gold w-full">
                      Simulate successful payment, £{plan.price}
                    </button>
                    <button
                      onClick={() => setStep('details')}
                      className="btn-ghost w-full justify-center"
                    >
                      Back
                    </button>
                  </div>
                </Pane>
              )}

              {step === 'done' && (
                <Pane key="done">
                  <div className="py-6 text-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="mx-auto"
                    >
                      <WaxSeal size={96} initials="✓" />
                    </motion.div>

                    <h1 className="mt-6 font-display text-3xl font-normal">You are in</h1>
                    <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                      Thanks {form.name.split(' ')[0] || 'very much'}. Your dashboard is open and a
                      confirmation would land at {form.email || 'your email'} in the live product.
                    </p>

                    <Link to="/dashboard" className="btn-gold mt-8 w-full">
                      Open my dashboard
                    </Link>
                    <Link to="/" className="btn-ghost mt-2 w-full justify-center">
                      Back to the site
                    </Link>
                  </div>
                </Pane>
              )}
          </div>

          {/* Order summary */}
          <aside className="h-fit rounded-3xl border border-border/70 bg-card p-8 shadow-soft lg:sticky lg:top-8">
            <h2 className="font-display text-2xl font-normal">{plan.name} package</h2>

            <div className="mt-4 flex items-baseline gap-2.5">
              <span className="font-display text-5xl leading-none text-primary">£{plan.price}</span>
              {'wasPrice' in plan && plan.wasPrice && (
                <span className="font-sans text-xl text-muted-foreground line-through">
                  £{plan.wasPrice}
                </span>
              )}
            </div>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
              One time payment
            </p>

            {'wasPrice' in plan && plan.wasPrice && (
              <p className="mt-4 rounded-xl bg-destructive/[0.07] px-4 py-2.5 text-center font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-destructive">
                Sale ends in <CountdownInline />
              </p>
            )}

            <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground">{plan.blurb}</p>

            <ul className="mt-6 space-y-2 border-t border-border/70 pt-5">
              {plan.features.slice(0, 8).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13px]">
                  <Check size={14} className="mt-1 shrink-0 text-sage" strokeWidth={2.5} />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>

            {!saveTheDate && planId === 'vip' && (
              <div className="mt-5 rounded-2xl border border-dashed border-gold/60 bg-gold/[0.08] p-4 text-center">
                <p className="font-sans text-[9px] font-bold uppercase tracking-eyebrow text-[hsl(42_80%_28%)]">
                  <Sparkles size={11} className="mr-1 inline" />
                  Included free
                </p>
                <p className="mt-1.5 font-serif text-base">Save the Date, normally £49</p>
              </div>
            )}

            <div className="mt-6 space-y-2 border-t border-border/70 pt-5">
              {['30 day money back guarantee', 'Instant access after payment', 'No subscription'].map(
                (n) => (
                  <p
                    key={n}
                    className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-wide text-muted-foreground"
                  >
                    <ShieldCheck size={12} className="text-sage" />
                    {n}
                  </p>
                ),
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  'mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/20'

function Pane({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.28 }}
    >
      {children}
    </motion.div>
  )
}

function Steps({ step }: { step: Step }) {
  const order: Step[] = ['details', 'payment', 'done']
  const idx = order.indexOf(step)
  const labels = ['Your details', 'Payment', 'Done']

  return (
    <ol className="mt-8 flex items-center gap-3">
      {labels.map((l, i) => (
        <li key={l} className="flex flex-1 items-center gap-3">
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-sans text-[12px] font-semibold transition ${
              i <= idx ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
            }`}
          >
            {i < idx ? <Check size={14} strokeWidth={3} /> : i + 1}
          </span>
          <span
            className={`hidden font-sans text-[12px] font-medium sm:block ${
              i <= idx ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {l}
          </span>
          {i < labels.length - 1 && (
            <span
              className={`h-px flex-1 transition ${i < idx ? 'bg-primary' : 'bg-border'}`}
            />
          )}
        </li>
      ))}
    </ol>
  )
}
