import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Themes from './pages/Themes'
import HowItWorks from './pages/HowItWorks'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Planners from './pages/Planners'
import Quinceanera from './pages/Quinceanera'
import Memories from './pages/Memories'
import Testimonials from './pages/Testimonials'
import Affiliates from './pages/Affiliates'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import DigitalWeddingInvite from './pages/DigitalWeddingInvite'
import Order from './pages/Order'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding-planners" element={<Planners />} />
        <Route path="/quinceanera-invitation" element={<Quinceanera />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/digital-wedding-invite" element={<DigitalWeddingInvite />} />
        <Route path="/privacy" element={<Legal kind="privacy" />} />
        <Route path="/terms" element={<Legal kind="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Checkout and app screens run outside the marketing shell. */}
      <Route path="/order" element={<Order />} />
      <Route path="/order-save-the-date" element={<Order saveTheDate />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  )
}
