import { useState } from 'react'
import { Clock, Mail, MessageCircle, Send } from 'lucide-react'
import { BRAND } from '../data/site'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'

const CHANNELS = [
  { icon: Mail, title: 'Email', body: BRAND.email, note: 'Usually answered the same day' },
  { icon: MessageCircle, title: 'WhatsApp', body: 'Message us directly', note: 'Fastest option before you buy' },
  { icon: Clock, title: 'Hours', body: 'Monday to Saturday', note: '09:00 to 18:00 UK time' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'General question', message: '' })

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a person"
        lead="No ticket numbers and no chatbot. Send this and one of us reads it."
      />

      <section className="pb-24">
        <div className="container grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-4">
              {CHANNELS.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <c.icon size={19} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="font-serif text-base">{c.title}</p>
                    <p className="mt-0.5 text-sm text-foreground/85">{c.body}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-sage/25 bg-sage/[0.06] p-6">
                <p className="font-serif text-base">Already a customer?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Include the email address you bought with and we can look at your invitation while
                  we reply.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="rounded-3xl border border-border/70 bg-card p-8 shadow-soft md:p-10"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage/15 text-sage">
                    <Send size={22} />
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-normal">Message sent</h2>
                  <p className="mx-auto mt-3 max-w-sm text-[15px] text-muted-foreground">
                    Thanks {form.name.split(' ')[0] || 'very much'}. We will come back to you at{' '}
                    {form.email || 'your email'} shortly.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-7">
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl font-normal">Send us a message</h2>

                  <div className="mt-7 space-y-5">
                    <Field label="Your name" id="name">
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Fletcher"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="Email address" id="email">
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@example.com"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="What is it about?" id="subject">
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={update('subject')}
                        className={inputCls}
                      >
                        {[
                          'General question',
                          'Before I buy',
                          'Help with my invitation',
                          'Deluxe, built for me',
                          'Planners and trade',
                          'Refund or billing',
                        ].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Message" id="message">
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us what you need."
                        className={`${inputCls} resize-y rounded-2xl`}
                      />
                    </Field>
                  </div>

                  <button type="submit" className="btn-primary mt-7 w-full">
                    Send message <Send size={15} />
                  </button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    Demo build, nothing is actually sent anywhere.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

const inputCls =
  'w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/20'

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  )
}
