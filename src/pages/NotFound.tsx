import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 py-32 text-center">
      <div>
        <p className="font-script text-6xl text-gold">Oh dear</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">This page is not here</h1>
        <p className="mx-auto mt-4 max-w-sm text-[15px] text-muted-foreground">
          The link may be old, or we may have moved something. Either way, the good bits are still
          where you left them.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/themes" className="btn-outline">
            Browse themes
          </Link>
        </div>
      </div>
    </section>
  )
}
