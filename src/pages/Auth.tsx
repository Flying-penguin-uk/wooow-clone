import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import WaxSeal from '../components/ui/WaxSeal'

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'reset'>('login')
  const navigate = useNavigate()

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-16 sm:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft size={14} /> Back to the site
          </Link>

          <Link to="/" className="mt-8 flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">
              W
            </span>
            <span className="font-display text-2xl leading-none">
              Wooow<span className="gold-text"> Invites</span>
            </span>
          </Link>

          <h1 className="mt-10 font-display text-4xl font-normal">
            {mode === 'login' ? 'Welcome back' : 'Reset your password'}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === 'login'
              ? 'Sign in to carry on building.'
              : 'Enter your email and we will send a reset link.'}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              navigate('/dashboard')
            }}
            className="mt-8 space-y-4"
          >
            <div>
              <label htmlFor="login-email" className="eyebrow">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputCls}
              />
            </div>

            {mode === 'login' && (
              <div>
                <label htmlFor="login-pass" className="eyebrow">
                  Password
                </label>
                <input
                  id="login-pass"
                  type="password"
                  required
                  placeholder="••••••••"
                  className={inputCls}
                />
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              {mode === 'login' ? 'Sign in' : 'Send reset link'}
            </button>
          </form>

          <button
            onClick={() => setMode(mode === 'login' ? 'reset' : 'login')}
            className="mt-4 w-full text-center font-sans text-[13px] text-muted-foreground transition hover:text-primary"
          >
            {mode === 'login' ? 'Forgotten your password?' : 'Back to sign in'}
          </button>

          <p className="mt-8 border-t border-border/70 pt-6 text-center text-sm text-muted-foreground">
            No account yet?{' '}
            <Link to="/#pricing" className="font-semibold text-primary hover:underline">
              See the packages
            </Link>
          </p>

          <p className="mt-6 text-center text-[11px] text-muted-foreground">
            Demo build. Any details take you to the sample dashboard.
          </p>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=70"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-[hsl(350_45%_22%)]/90" />
        <div className="relative flex h-full flex-col items-center justify-center px-12 text-center text-primary-foreground">
          <WaxSeal size={120} colour="#c9a227" initials="W" />
          <h2 className="mt-8 font-display text-4xl leading-tight">
            Everything you have built is exactly where you left it
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-primary-foreground/75">
            Themes, guests, RSVPs, seating and budget. All of it saved, all of it editable, right up
            to the morning of the day.
          </p>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  'mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-ring/20'
