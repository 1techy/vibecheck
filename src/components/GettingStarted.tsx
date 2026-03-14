import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, LayoutDashboard } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function GettingStarted() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.25 }}
            className="rounded-2xl border border-border/70 bg-card/85 shadow-xl shadow-black/40 backdrop-blur-sm p-8 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Log <span className="text-primary">in</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Connect GitHub to activate your scanning workspace and ship secure code faster.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 py-5 text-sm sm:text-base"
                onClick={() => {
                  window.location.href = "/auth/github"
                }}
              >
                <Github className="h-5 w-5" />
                Continue with GitHub
              </Button>

              <Button
                variant="outline"
                className="w-full border-accent/40 text-accent hover:bg-accent/10 py-5 text-sm sm:text-base"
                onClick={() => navigate("/sample-dashboard")}
              >
                <LayoutDashboard className="h-5 w-5 mr-2" />
                View Sample Dashboard
              </Button>

              <p className="text-xs text-muted-foreground leading-relaxed">
                We request read access to repository metadata and pull requests to identify generated changes and run security checks.
                Access can be revoked any time from GitHub settings.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
