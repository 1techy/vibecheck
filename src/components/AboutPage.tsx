import { motion } from "framer-motion"
import { ShieldCheck, Users, Sparkles, Gauge, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const values = [
  {
    icon: ShieldCheck,
    title: "Security without friction",
    description: "We remove noisy findings so teams focus on the few fixes that materially reduce risk.",
  },
  {
    icon: Users,
    title: "Built for adoption",
    description: "Clear language and guided workflows help non-security teams stay engaged week after week.",
  },
  {
    icon: Sparkles,
    title: "Crafted experience",
    description: "Retro-tech visuals and clean hierarchy keep the interface captivating without sacrificing clarity.",
  },
  {
    icon: Gauge,
    title: "Measured outcomes",
    description: "Dashboards track remediation speed, re-scan behavior, and user retention signals over time.",
  },
]

export function AboutPage() {
  const navigate = useNavigate()

  return (
    <section className="relative py-20 overflow-hidden min-h-[calc(100vh-64px)]">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <p className="retro-pill mx-auto w-fit">About vibecheck</p>
          <h1 className="retro-heading">
            A retention-focused security experience for AI-era engineering teams
          </h1>
          <p className="retro-subtle max-w-3xl mx-auto text-lg">
            We built vibecheck to make secure coding habits feel fast, visible, and rewarding. Teams that see progress stay engaged, and engaged teams fix more issues.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Repos monitored", value: "15k+" },
            { label: "Avg first fix", value: "11 min" },
            { label: "Weekly return rate", value: "84%" },
            { label: "Critical issue drop", value: "43%" },
          ].map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="retro-panel p-4"
            >
              <p className="text-2xl font-semibold text-primary">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.08 }}
                className="retro-panel p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold mb-2">{value.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="retro-panel p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <p className="text-lg font-semibold">Ready to explore the full product flow?</p>
            <p className="text-sm text-muted-foreground mt-1">Go from onboarding to sample cockpit in under a minute.</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => navigate("/getting-started")}>
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
