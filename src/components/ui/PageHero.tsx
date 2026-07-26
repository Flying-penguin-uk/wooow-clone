import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-blush/45 blur-3xl" />
        <div className="absolute -right-24 top-24 h-[24rem] w-[24rem] rounded-full bg-accent/45 blur-3xl" />
      </div>

      <div className="container text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="mx-auto mt-4 max-w-3xl text-4xl leading-[1.1] md:text-6xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground"
          >
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
