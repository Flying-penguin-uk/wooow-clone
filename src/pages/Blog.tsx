import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { formatDate } from '../lib/format'

const COVERS = [
  '1519741497674-611481863552',
  '1511285560929-80b456fea0bc',
  '1465495976277-4387d4b0e4a6',
  '1470229722913-7ea0d1a0a2e4',
  '1519671482749-fd09be7ccebf',
  '1464366400600-7168b8af9bc3',
]

export default function Blog() {
  const [lead, ...rest] = BLOG_POSTS

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on planning the thing"
        lead="Practical pieces on invitations, guest lists and budgets. No listicles about the ten most romantic destinations."
      />

      <section className="pb-24">
        <div className="container">
          <Reveal>
            <Link
              to={`/blog/${lead.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition hover:shadow-card md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <img
                  src={`https://images.unsplash.com/photo-${COVERS[0]}?w=900&auto=format&fit=crop&q=70`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="self-start rounded-full bg-secondary px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-primary">
                  {lead.category}
                </span>
                <h2 className="mt-4 font-display text-3xl font-normal leading-tight md:text-4xl">
                  {lead.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {lead.excerpt}
                </p>
                <p className="mt-5 font-sans text-[11px] uppercase tracking-eyebrow text-muted-foreground">
                  {formatDate(lead.date)} · {lead.readMins} min read
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-primary">
                  Read it <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${COVERS[(i + 1) % COVERS.length]}?w=600&auto=format&fit=crop&q=70`}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="self-start rounded-full bg-secondary px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-primary">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-serif text-lg leading-snug">{p.title}</h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <p className="mt-4 font-sans text-[10px] uppercase tracking-eyebrow text-muted-foreground">
                      {formatDate(p.date)} · {p.readMins} min
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
