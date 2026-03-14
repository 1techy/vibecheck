import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { AlertTriangle, Brain, Zap, Lock, BarChart3, GitBranch } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Behavior-aware AI detection",
    description: "Models tuned for generated code patterns and risky behavior signatures.",
  },
  {
    icon: Zap,
    title: "Fast, low-friction scans",
    description: "Analyze thousands of files with low-noise outputs developers keep coming back to.",
  },
  {
    icon: AlertTriangle,
    title: "Critical-first prioritization",
    description: "Surface highest-impact vulnerabilities first and suppress churn-heavy noise.",
  },
  {
    icon: Lock,
    title: "Privacy-first posture",
    description: "Encrypted scans and policy controls designed for modern security teams.",
  },
  {
    icon: BarChart3,
    title: "Retention intelligence",
    description: "Usage and fix trend signals that show who is adopting and where they drop off.",
  },
  {
    icon: GitBranch,
    title: "CI/CD native workflow",
    description: "Drop-in integrations for GitHub, GitLab, and pipelines without process rewrites.",
  },
]

export function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 28,
      },
    },
  }

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Built for <span className="text-primary">repeat engagement</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature nudges teams toward faster fixes and stronger daily usage habits.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="h-full rounded-xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur-sm hover:border-primary/70 hover:shadow-lg hover:shadow-accent/20 transition-all">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
