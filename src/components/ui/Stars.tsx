import { Star } from 'lucide-react'

export default function Stars({ value = 4.9, size = 14 }: { value?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(value) ? 'fill-gold text-gold' : 'text-gold/30'}
          strokeWidth={1.5}
        />
      ))}
    </span>
  )
}
