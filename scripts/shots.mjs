/**
 * Screenshot harness. The embedded browser pane has no layout viewport in this
 * environment, so headless Chromium is the only way to actually see the build.
 *
 *   node scripts/shots.mjs [baseUrl] [outDir]
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const BASE = process.argv[2] ?? 'http://localhost:5173'
const OUT = resolve(process.argv[3] ?? 'shots')
mkdirSync(OUT, { recursive: true })

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  laptop: { width: 1280, height: 800 },
  tablet: { width: 900, height: 1000 },
  mobile: { width: 390, height: 844 },
}

const shots = [
  { name: 'home-hero', path: '/', vp: 'desktop', clip: { x: 0, y: 0, width: 1440, height: 1000 } },
  { name: 'home-hero-laptop', path: '/', vp: 'laptop', clip: { x: 0, y: 0, width: 1280, height: 900 } },
  { name: 'home-hero-tablet', path: '/', vp: 'tablet', clip: { x: 0, y: 0, width: 900, height: 900 } },
  { name: 'home-hero-mobile', path: '/', vp: 'mobile', clip: { x: 0, y: 0, width: 390, height: 844 } },
  { name: 'home-full', path: '/', vp: 'desktop', full: true },
  { name: 'themes', path: '/themes', vp: 'desktop', clip: { x: 0, y: 0, width: 1440, height: 1400 } },
  { name: 'pricing', path: '/', vp: 'desktop', scrollTo: '#pricing' },
  { name: 'dashboard', path: '/dashboard', vp: 'desktop', clip: { x: 0, y: 0, width: 1440, height: 900 } },
  { name: 'order', path: '/order?plan=vip', vp: 'desktop', clip: { x: 0, y: 0, width: 1440, height: 900 } },
]

const browser = await chromium.launch()

for (const s of shots) {
  const page = await browser.newPage({ viewport: VIEWPORTS[s.vp], deviceScaleFactor: 1 })
  await page.goto(BASE + s.path, { waitUntil: 'networkidle' })
  if (s.scrollTo) {
    await page.locator(s.scrollTo).scrollIntoViewIfNeeded()
    await page.waitForTimeout(900)
  }
  await page.waitForTimeout(1400) // let entrance animations settle
  await page.screenshot({
    path: `${OUT}/${s.name}.png`,
    fullPage: !!s.full,
    ...(s.clip && !s.full ? { clip: s.clip } : {}),
  })
  console.log('shot', s.name)
  await page.close()
}

/* --- menu states, the thing actually under suspicion --- */

// Desktop nav, scrolled (header gets its blurred/condensed treatment)
{
  const page = await browser.newPage({ viewport: VIEWPORTS.desktop })
  await page.goto(BASE + '/', { waitUntil: 'networkidle' })
  await page.mouse.wheel(0, 700)
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/menu-desktop-scrolled.png`, clip: { x: 0, y: 0, width: 1440, height: 260 } })
  console.log('shot menu-desktop-scrolled')

  // open the More dropdown
  await page.getByRole('button', { name: /More/i }).first().click()
  await page.waitForTimeout(600)
  await page.screenshot({ path: `${OUT}/menu-more-open.png`, clip: { x: 0, y: 0, width: 1440, height: 500 } })
  console.log('shot menu-more-open')
  await page.close()
}

// Mobile drawer, at top of page and after scrolling
for (const [label, scroll] of [['top', 0], ['scrolled', 700]]) {
  const page = await browser.newPage({ viewport: VIEWPORTS.mobile })
  await page.goto(BASE + '/', { waitUntil: 'networkidle' })
  if (scroll) {
    await page.mouse.wheel(0, scroll)
    await page.waitForTimeout(700)
  }
  await page.getByRole('button', { name: /open menu/i }).click()
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/menu-mobile-${label}.png` })
  console.log('shot menu-mobile-' + label)
  await page.close()
}

await browser.close()
console.log('\nAll shots written to', OUT)
