import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import type { Theme } from '../../data/themes'

/**
 * Theme tile. The live product plays a short film here. This build uses a slow
 * Ken Burns still under an animated gradient wash so the motion reads the same.
 */
export default function ThemeCard({
  theme,
  onPlay,
  index = 0,
}: {
  theme: Theme
  onPlay?: (t: Theme) => void
  index?: number
}) {
  // Offset each card's drift so a grid of them never moves in lockstep.
  const drift = -(index % 6) * 3

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft hover:shadow-card"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={theme.photo}
          alt=""
          loading="lazy"
          style={{ animationDelay: `${drift}s` }}
          className="absolute inset-0 h-full w-full animate-kenburns object-cover will-change-transform"
        />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-70 transition-opacity duration-500 group-hover:opacity-55"
          style={{ backgroundImage: `linear-gradient(160deg, ${theme.grad[0]}, ${theme.grad[1]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* soft sheen sweep on hover, reads like a video scrubbing */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        {theme.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-eyebrow text-[hsl(350_40%_20%)]">
            Popular
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-sans text-[9px] font-semibold uppercase tracking-eyebrow text-white/70">
            {theme.category}
          </p>
          <h3 className="mt-1 font-display text-2xl leading-tight text-white">{theme.name}</h3>
          <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-white/80">{theme.blurb}</p>

          <button
            onClick={() => onPlay?.(theme)}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 font-sans text-[11px] font-semibold text-white backdrop-blur transition hover:bg-white/30"
          >
            <Play size={11} className="fill-white" />
            Watch example
          </button>
        </div>
      </div>
    </motion.article>
  )
}
