import { ThemeProvider } from "@/components/ui/theme-provider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { Features } from "./components/Features"
import { SampleReport } from "./components/SampleReport"
import { Pricing } from "./components/Pricing"
import { GettingStarted } from "./components/GettingStarted"
import { AnimatedPixelGrid } from "./components/AnimatedPixelGrid"

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
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2026 vibecheck. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-green-500 transition-colors">Privacy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-green-500 transition-colors">Terms</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-green-500 transition-colors">Contact</a>
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
        <div className="relative min-h-screen bg-background text-foreground">
          <AnimatedPixelGrid />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/getting-started" element={
                <>
                  <Navbar />
                  <GettingStarted />
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
