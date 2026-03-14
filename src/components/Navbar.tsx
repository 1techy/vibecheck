import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Menu, Shield } from "lucide-react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useConfetti } from "@/hooks/useConfetti"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { triggerConfetti } = useConfetti()

  const jumpTo = (id: string) => {
    if (location.pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileOpen(false)
      return
    }

    navigate(`/${id}`)
    setMobileOpen(false)
  }

  const handleGetStarted = () => {
    triggerConfetti()
    navigate('/getting-started')
    setMobileOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <div className="h-8 w-8 rounded-md border border-primary/50 bg-primary/15 flex items-center justify-center">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <span className="text-lg font-semibold tracking-tight hidden sm:inline">
              vibe<span className="text-primary">check</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center rounded-full border border-border/80 bg-card/70 px-5 py-2 gap-6">
            <button type="button" onClick={() => navigate("/")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button type="button" onClick={() => jumpTo("#features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </button>
            <button type="button" onClick={() => jumpTo("#how-it-works")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </button>
            <button type="button" onClick={() => jumpTo("#pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </button>
            <button type="button" onClick={() => navigate("/about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={handleGetStarted}
            >
              Launch Scan
            </Button>
            <ModeToggle />
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent/20 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <button type="button" onClick={() => navigate("/")} className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button type="button" onClick={() => jumpTo("#features")} className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </button>
            <button type="button" onClick={() => jumpTo("#how-it-works")} className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </button>
            <button type="button" onClick={() => jumpTo("#pricing")} className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </button>
            <button type="button" onClick={() => navigate("/about")} className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={handleGetStarted}
            >
              Launch Scan
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
