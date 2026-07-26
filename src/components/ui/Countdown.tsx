import { useEffect, useState } from 'react'

/** Rolling sale timer. Resets on a fixed cycle so the demo never shows zero. */
function useCountdown(cycleHours = 8) {
  const [left, setLeft] = useState(() => secondsLeft(cycleHours))

  useEffect(() => {
    const id = setInterval(() => setLeft(secondsLeft(cycleHours)), 1000)
    return () => clearInterval(id)
  }, [cycleHours])

  const h = Math.floor(left / 3600)
  const m = Math.floor((left % 3600) / 60)
  const s = left % 60
  return { h, m, s, pad: (n: number) => String(n).padStart(2, '0') }
}

function secondsLeft(cycleHours: number) {
  const cycle = cycleHours * 3600
  const now = Math.floor(Date.now() / 1000)
  return cycle - (now % cycle)
}

export function CountdownInline({ className = '' }: { className?: string }) {
  const { h, m, s, pad } = useCountdown()
  return (
    <span className={`font-sans tabular-nums tracking-wide ${className}`}>
      {pad(h)}:{pad(m)}:{pad(s)}
    </span>
  )
}

export function CountdownBlocks() {
  const { h, m, s, pad } = useCountdown()
  const cells = [pad(h), pad(m), pad(s)]
  return (
    <div className="flex items-center gap-1.5">
      {cells.map((cell, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="rounded-lg bg-primary px-2.5 py-1.5 font-sans text-lg font-semibold tabular-nums text-primary-foreground shadow-soft">
            {cell}
          </span>
          {i < cells.length - 1 && <span className="text-primary/50">:</span>}
        </span>
      ))}
    </div>
  )
}

