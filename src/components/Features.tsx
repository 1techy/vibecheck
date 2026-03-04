import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { AlertTriangle, Brain, Zap, Lock, BarChart3, GitBranch } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-trained detection",
    description: "Models tuned to spot AI-generated patterns and subtle security smells in your code.",
  },
  {
    icon: Zap,
    title: "Lightning-fast scans",
    description: "Analyze thousands of files in seconds with a low-noise, developer-friendly output.",
  },
  {
    icon: AlertTriangle,
    title: "Critical issue focus",
    description: "Surface the riskiest vulnerabilities first so you fix what matters most.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    description: "Encrypted scans, private by design, aligned with modern security standards.",
  },
  {
    icon: BarChart3,
    title: "Clear reporting",
    description: "Concise dashboards and trends that your team and security leads can actually use.",
  },
  {
    icon: GitBranch,
    title: "CI/CD native",
    description: "Drop-in integrations for GitHub, GitLab, and your existing pipelines.",
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
            Powerful, <span className="text-green-500">practical features</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A focused toolkit for keeping AI-generated code safe in real-world teams.
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
                <div className="h-full rounded-xl border border-border/60 bg-background/60 p-6 shadow-sm backdrop-blur-sm hover:border-green-500/70 hover:shadow-lg hover:shadow-green-500/20 transition-all">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
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
