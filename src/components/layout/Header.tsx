import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { LANGUAGES, MORE_NAV, NAV } from '../../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [more, setMore] = useState(false)
  const [lang, setLang] = useState(false)
  const [current, setCurrent] = useState(LANGUAGES[0])
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobile(false)
    setMore(false)
    setLang(false)
  }, [pathname])

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
          ? 'border-b border-border/70 bg-background/85 py-2.5 shadow-soft backdrop-blur-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
            W
          </span>
          <span className="hidden font-display text-2xl leading-none tracking-tight sm:block">
            Wooow<span className="gold-text"> Invites</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) => (
            <NavItem key={item.label} to={item.to} label={item.label} />
          ))}

          <div className="relative" onMouseLeave={() => setMore(false)}>
            <button
              onMouseEnter={() => setMore(true)}
              onClick={() => setMore((v) => !v)}
              aria-expanded={more}
              className="flex items-center gap-1 rounded-full px-3 py-2 font-sans text-[13px] font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary"
            >
              More
              <span className="rounded-full bg-gold px-1.5 py-px font-sans text-[8px] font-bold uppercase tracking-wide text-[hsl(350_40%_20%)]">
                New
              </span>
              <ChevronDown size={13} className={`transition-transform ${more ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {more && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-60 overflow-hidden rounded-2xl border border-border/70 bg-card p-1.5 shadow-lift"
                >
                  {MORE_NAV.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="flex items-center justify-between rounded-xl px-3.5 py-2.5 font-sans text-[13px] text-foreground/80 transition hover:bg-secondary hover:text-primary"
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

        <div className="flex items-center gap-1.5">
          <div className="relative">
            <button
              onClick={() => setLang((v) => !v)}
              aria-label="Change language"
              aria-expanded={lang}
              className="rounded-full px-2 py-1.5 text-lg transition hover:bg-secondary"
            >
              {current.flag}
            </button>
            <AnimatePresence>
              {lang && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full z-50 mt-1 max-h-72 w-48 overflow-y-auto rounded-2xl border border-border/70 bg-card p-1.5 shadow-lift"
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setCurrent(l)
                        setLang(false)
                      }}
                      className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left font-sans text-[13px] transition hover:bg-secondary ${
                        l.code === current.code ? 'text-primary font-semibold' : 'text-foreground/80'
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/auth"
            className="hidden rounded-full px-4 py-2 font-sans text-[13px] font-medium text-foreground/80 transition hover:text-primary sm:block"
          >
            Log In
          </Link>

          <Link to="/#pricing" className="btn-primary hidden px-5 py-2.5 text-[13px] sm:inline-flex">
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

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background xl:hidden"
          >
            <div className="container flex items-center justify-between py-4">
              <span className="font-display text-2xl">
                Wooow<span className="gold-text"> Invites</span>
              </span>
              <button
                onClick={() => setMobile(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-secondary"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="container flex h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto pb-10">
              {[...NAV, ...MORE_NAV].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <Link
                    to={item.to}
                    className="block border-b border-border/50 py-3.5 font-display text-2xl text-foreground/90"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-2.5">
                <Link to="/auth" className="btn-outline w-full">
                  Log In
                </Link>
                <Link to="/#pricing" className="btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="rounded-full px-3 py-2 font-sans text-[13px] font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary"
    >
      {label}
    </Link>
  )
}
