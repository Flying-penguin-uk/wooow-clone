import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { LANGUAGES, MORE_NAV, NAV } from '../../data/site'

type NavItem = { label: string; to: string; badge?: string }

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [more, setMore] = useState(false)
  const [lang, setLang] = useState(false)
  const [current, setCurrent] = useState(LANGUAGES[0])
  const { pathname } = useLocation()

  const moreRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on navigation.
  useEffect(() => {
    setMobile(false)
    setMore(false)
    setLang(false)
  }, [pathname])

  // Click outside and Escape close the dropdowns.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (moreRef.current && !moreRef.current.contains(t)) setMore(false)
      if (langRef.current && !langRef.current.contains(t)) setLang(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMore(false)
      setLang(false)
      setMobile(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobile])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/70 bg-background/90 py-2 shadow-soft backdrop-blur-xl'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="container flex items-center justify-between gap-3">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            W
          </span>
          <span className="hidden whitespace-nowrap font-display text-xl leading-none tracking-tight sm:block lg:text-[22px]">
            Wooow<span className="gold-text"> Invites</span>
          </span>
        </Link>

        <nav className="hidden items-center xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="whitespace-nowrap rounded-full px-2.5 py-2 font-sans text-[12.5px] font-medium leading-none text-foreground/80 transition hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <div ref={moreRef} className="relative">
            <button
              onClick={() => {
                setMore((v) => !v)
                setLang(false)
              }}
              aria-expanded={more}
              aria-haspopup="true"
              className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 font-sans text-[12.5px] font-medium leading-none text-foreground/80 transition hover:bg-secondary hover:text-primary"
            >
              More
              <span className="rounded-full bg-gold px-1.5 py-px font-sans text-[8px] font-bold uppercase leading-normal tracking-wide text-[hsl(350_40%_20%)]">
                New
              </span>
              <ChevronDown size={13} className={`transition-transform ${more ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {more && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 top-[calc(100%+6px)] w-60 overflow-hidden rounded-2xl border border-border/70 bg-card p-1.5 shadow-lift"
                >
                  {MORE_NAV.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="flex items-center justify-between whitespace-nowrap rounded-xl px-3.5 py-2.5 font-sans text-[13px] text-foreground/80 transition hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                      {item.badge && (
                        <span className="rounded-full bg-gold/25 px-1.5 py-px font-sans text-[8px] font-bold uppercase tracking-wide text-[hsl(42_80%_28%)]">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          {/* Language. Flag emoji do not render on Windows, so we show the code. */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setLang((v) => !v)
                setMore(false)
              }}
              aria-label="Change language"
              aria-expanded={lang}
              className="flex items-center gap-1 rounded-full border border-border/70 px-2.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-wide text-foreground/75 transition hover:border-primary/40 hover:text-primary"
            >
              {current.code}
              <ChevronDown size={11} className={`transition-transform ${lang ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {lang && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 top-[calc(100%+6px)] z-50 max-h-80 w-48 overflow-y-auto rounded-2xl border border-border/70 bg-card p-1.5 shadow-lift"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrent(l)
                        setLang(false)
                      }}
                      className={`flex w-full items-center gap-2.5 whitespace-nowrap rounded-xl px-3 py-2 text-left font-sans text-[13px] transition hover:bg-secondary ${
                        l.code === current.code ? 'font-semibold text-primary' : 'text-foreground/80'
                      }`}
                    >
                      <span className="w-6 shrink-0 font-semibold uppercase text-muted-foreground">
                        {l.code}
                      </span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/auth"
            className="hidden whitespace-nowrap rounded-full px-3 py-2 font-sans text-[12.5px] font-medium text-foreground/80 transition hover:text-primary lg:block"
          >
            Log In
          </Link>

          <Link
            to="/#pricing"
            className="btn-primary hidden whitespace-nowrap px-4 py-2.5 text-[12.5px] sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            onClick={() => setMobile(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-secondary xl:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <MobileDrawer open={mobile} onClose={() => setMobile(false)} />
    </header>
  )
}

/**
 * Rendered through a portal on purpose. The header uses backdrop-blur when
 * scrolled, and a backdrop-filter makes an element a containing block for its
 * fixed-position descendants. Left inside the header, this drawer's inset-0
 * resolved against the ~72px header box, so its background covered only the
 * header strip while the links spilled over the page.
 */
function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-background xl:hidden"
        >
          <div className="container flex shrink-0 items-center justify-between py-3.5">
            <span className="font-display text-xl leading-none">
              Wooow<span className="gold-text"> Invites</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-secondary"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="container flex-1 overflow-y-auto overscroll-contain pb-6">
            {([...NAV, ...MORE_NAV] as NavItem[]).map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.02 * i, duration: 0.25 }}
              >
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="flex items-center justify-between border-b border-border/50 py-2.5 font-display text-[22px] text-foreground/90"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-gold/25 px-2 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wide text-[hsl(42_80%_28%)]">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="container flex shrink-0 flex-col gap-2.5 border-t border-border/70 py-4">
            <Link to="/auth" onClick={onClose} className="btn-outline w-full py-3">
              Log In
            </Link>
            <Link to="/#pricing" onClick={onClose} className="btn-primary w-full py-3">
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
