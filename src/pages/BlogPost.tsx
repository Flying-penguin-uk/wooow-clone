import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { BLOG_POSTS } from '../data/content'
import Reveal from '../components/ui/Reveal'
import { formatDate } from '../lib/format'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="container py-40 text-center">
        <h1 className="font-display text-4xl">Post not found</h1>
        <Link to="/blog" className="btn-outline mt-8">
          Back to the blog
        </Link>
      </div>
    )
  }

  return (
    <article className="pb-24 pt-32">
      <div className="container max-w-2xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 font-sans text-[13px] text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft size={14} /> All posts
        </Link>

        <Reveal>
          <span className="mt-8 inline-block rounded-full bg-secondary px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-normal leading-[1.15] md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 font-sans text-[11px] uppercase tracking-eyebrow text-muted-foreground">
            {formatDate(post.date)} · {post.readMins} min read
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&auto=format&fit=crop&q=70"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 space-y-5 text-[16px] leading-[1.75] text-foreground/85">
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>

            <p>
              This is placeholder body copy for the structural build. The layout, type scale, measure
              and rhythm are what matter here, so the article template can be dropped straight onto
              real writing later without anything shifting.
            </p>

            <h2 className="pt-4 font-display text-3xl font-normal">The part people get wrong</h2>
            <p>
              Most of the friction in this stage comes from doing things in the wrong order. Decide
              the guest list before the design, and the design before the wording, and almost every
              later decision makes itself.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-primary">
              The invitation is the only part of the wedding every single guest experiences.
            </blockquote>

            <h2 className="pt-4 font-display text-3xl font-normal">What to do instead</h2>
            <p>
              Work out what your guests genuinely need to know, put that in, and resist adding the
              rest. Anything you leave out can be added to the invitation later, which is the whole
              advantage of not printing it.
            </p>

            <ul className="space-y-2 pl-5">
              {['Send earlier than feels necessary', 'Ask fewer RSVP questions than you want to', 'Give people one link, not three'].map(
                (li) => (
                  <li key={li} className="list-disc marker:text-gold">
                    {li}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-3xl bg-gradient-to-br from-primary to-burgundy-light p-10 text-center text-primary-foreground">
            <h2 className="font-display text-3xl font-normal">Build yours this week</h2>
            <p className="mx-auto mt-3 max-w-sm text-[15px] text-primary-foreground/80">
              One payment, unlimited guests, editable right up to the day.
            </p>
            <Link
              to="/order?plan=vip"
              className="btn mt-7 bg-primary-foreground px-8 py-3.5 text-primary hover:bg-white"
            >
              Get VIP access, £99
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
