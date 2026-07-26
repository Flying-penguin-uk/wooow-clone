import Hero from '../components/home/Hero'
import EnvelopeSection from '../components/home/EnvelopeSection'
import HowItWorks from '../components/home/HowItWorks'
import FeatureRail from '../components/home/FeatureRail'
import InfoBlocks from '../components/home/InfoBlocks'
import ThemeCarousel from '../components/home/ThemeCarousel'
import Pricing from '../components/home/Pricing'
import SaveTheDate from '../components/home/SaveTheDate'
import MemoriesTeaser from '../components/home/MemoriesTeaser'
import AnyOccasion from '../components/home/AnyOccasion'
import PlannersBand from '../components/home/PlannersBand'
import PaperVsDigital from '../components/home/PaperVsDigital'
import PlanningTools from '../components/home/PlanningTools'
import DashboardStudio from '../components/home/DashboardStudio'
import TestimonialsSection from '../components/home/TestimonialsSection'
import FinalCTA from '../components/home/FinalCTA'

/** Section order mirrors the reference site top to bottom. */
export default function Home() {
  return (
    <>
      <Hero />
      <EnvelopeSection />
      <HowItWorks />
      <FeatureRail />
      <InfoBlocks />
      <ThemeCarousel />
      <Pricing />
      <SaveTheDate />
      <MemoriesTeaser />
      <AnyOccasion />
      <PlannersBand />
      <PaperVsDigital />
      <PlanningTools />
      <DashboardStudio />
      <TestimonialsSection />
      <FinalCTA />
    </>
  )
}
