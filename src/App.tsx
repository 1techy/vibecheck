import { ThemeProvider } from "@/components/ui/theme-provider"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { Features } from "./components/Features"
import { SampleReport } from "./components/SampleReport"
import { Pricing } from "./components/Pricing"
import { GettingStarted } from "./components/GettingStarted"
import { AnimatedPixelGrid } from "./components/AnimatedPixelGrid"
import { AboutPage } from "./components/AboutPage"
import { SampleDashboard } from "./components/SampleDashboard"
import { GitHubDashboard } from "./components/GitHubDashboard"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // OAuth callbacks can include hash fragments like #error=... which are not valid CSS selectors.
    const isAnchorHash = /^#[A-Za-z][\w:-]*$/.test(location.hash)
    if (!isAnchorHash) {
      return
    }

    const element = document.getElementById(location.hash.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [location.pathname, location.hash])

  return null
}

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Features />
        <SampleReport />
        <Pricing />
        
        {/* Simplified Footer */}
        <footer className="border-t border-border/40 bg-background/90 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2026 Atharva Khairnar All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</a>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ScrollToHash />
        <div className="relative min-h-screen bg-background text-foreground">
          <AnimatedPixelGrid />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={
                <>
                  <Navbar />
                  <AboutPage />
                </>
              } />
              <Route path="/getting-started" element={
                <>
                  <Navbar />
                  <GettingStarted />
                </>
              } />
              <Route path="/sample-dashboard" element={
                <>
                  <Navbar />
                  <SampleDashboard />
                </>
              } />
              <Route path="/dashboard" element={
                <>
                  <Navbar />
                  <GitHubDashboard />
                </>
              } />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
