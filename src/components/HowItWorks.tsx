import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { CheckCircle2, Code2, Shield } from "lucide-react"

const steps = [
  {
    icon: Code2,
    title: "Connect your repo",
    description: "Link GitHub in one click and target only active repositories for instant value.",
  },
  {
    icon: Shield,
    title: "Run prioritized scans",
    description: "Retro-tech dashboards surface high-impact vulnerabilities first so you stay focused.",
  },
  {
    icon: CheckCircle2,
    title: "Ship fast remediations",
    description: "Generate fixes, review changes, and close the loop with measurable retention outcomes.",
  },
]

export function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            How <span className="text-primary">vibecheck</span> keeps you moving
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three focused steps built for momentum and repeat usage.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="h-full p-7 border-border/60 bg-card/75 hover:border-primary/70 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group backdrop-blur-md">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground group-hover:border-primary/60 group-hover:text-primary">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
