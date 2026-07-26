type Props = {
  colour?: string
  initials?: string
  size?: number
  className?: string
}

/** Wax seal drawn as SVG so the colour and initials are live-editable. */
export default function WaxSeal({
  colour = '#7a2c3c',
  initials = 'L&J',
  size = 116,
  className = '',
}: Props) {
  const id = `seal-${colour.replace('#', '')}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={`Wax seal with the initials ${initials}`}
    >
      <defs>
        <radialGradient id={`${id}-g`} cx="38%" cy="32%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.42" />
          <stop offset="45%" stopColor={colour} />
          <stop offset="100%" stopColor="#000" stopOpacity="0.42" />
        </radialGradient>
        <filter id={`${id}-s`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.32" />
        </filter>
      </defs>

      {/* irregular wax edge */}
      <path
        filter={`url(#${id}-s)`}
        fill={`url(#${id}-g)`}
        d="M60 6c9 0 13 7 21 9s16-3 22 4 1 15 5 22 12 11 12 20-8 13-10 21 3 16-3 22-15 2-22 6-11 10-20 10-14-7-22-9-16 3-22-4 0-15-4-22-13-11-13-20 8-13 10-21-3-16 3-22 15-1 22-5S51 6 60 6z"
      />
      {/* pressed rim */}
      <circle cx="60" cy="60" r="37" fill="none" stroke="#000" strokeOpacity="0.16" strokeWidth="2" />
      <circle cx="60" cy="60" r="41" fill="none" stroke="#fff" strokeOpacity="0.14" strokeWidth="1" />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="30"
        fill="#fff"
        fillOpacity="0.9"
        letterSpacing="1"
      >
        {initials}
      </text>
    </svg>
  )
}
