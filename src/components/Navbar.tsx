import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useConfetti } from "@/hooks/useConfetti"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const { triggerConfetti } = useConfetti()

  const handleGetStarted = () => {
    triggerConfetti()
    navigate('/getting-started')
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center">
              <span className="text-black font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-semibold tracking-tight hidden sm:inline">
              vibe<span className="text-green-500">check</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>

          {/* Right side CTA and Theme */}
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden sm:inline-flex bg-green-500 hover:bg-green-600 text-black font-semibold"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <ModeToggle />
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#about" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
