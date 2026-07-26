import { useCallback, useRef, useState } from 'react'

type Props = {
  leftLabel: string
  rightLabel: string
  left: React.ReactNode
  right: React.ReactNode
}

/** Draggable split comparison. Pointer, touch and keyboard driven. */
export default function BeforeAfter({ leftLabel, rightLabel, left, right }: Props) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const next = ((clientX - r.left) / r.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-border/70 shadow-card"
      onPointerDown={(e) => {
        dragging.current = true
        e.currentTarget.setPointerCapture(e.pointerId)
        setFromClientX(e.clientX)
      }}
      onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <div className="absolute inset-0">{right}</div>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="absolute inset-0" style={{ width: ref.current?.clientWidth ?? '100%' }}>
          {left}
        </div>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-eyebrow text-white backdrop-blur">
        {leftLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-eyebrow text-white backdrop-blur">
        {rightLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      >
        <div className="pointer-events-auto absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`Slide to compare ${leftLabel} with ${rightLabel}`}
            className="peer absolute inset-0 h-11 w-11 cursor-ew-resize opacity-0"
          />
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-primary shadow-lift peer-focus-visible:ring-2 peer-focus-visible:ring-gold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/40 px-3 py-1 font-sans text-[10px] uppercase tracking-eyebrow text-white backdrop-blur">
        Drag to compare
      </span>
    </div>
  )
}
