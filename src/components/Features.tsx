import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { AlertTriangle, Brain, Zap, Lock, BarChart3, GitBranch } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Trained Detection",
    description: "ML models specifically trained to identify AI-generated code patterns and vulnerabilities.",
    side: "left",
  },
  {
    icon: Zap,
    title: "Lightning Fast Scans",
    description: "Analyze thousands of files in seconds with our optimized scanning engine.",
    side: "right",
  },
  {
    icon: AlertTriangle,
    title: "Critical Alerts",
    description: "Get instant notifications for high-severity vulnerabilities in your codebase.",
    side: "left",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "End-to-end encrypted scans with GDPR and SOC2 compliance.",
    side: "right",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Comprehensive dashboards with actionable insights and metrics.",
    side: "left",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "Seamlessly integrate with GitHub, GitLab, and other CI/CD platforms.",
    side: "right",
  },
]

export function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Powerful <span className="text-green-500">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade security scanning built for developers
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isLeft = feature.side === "left"

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="space-y-4 p-6 rounded-lg border border-transparent group-hover:border-green-500/20 group-hover:bg-green-500/5 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 group-hover:border-green-500/50 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                      <Icon className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-green-500 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 h-64 rounded-lg border border-green-500/10 bg-gradient-to-br from-green-500/5 to-green-600/5 p-8 flex items-center justify-center group-hover:border-green-500/30 transition-all duration-300">
                  <div className="relative w-full h-full rounded-lg border border-green-500/20 bg-black/50 flex items-center justify-center overflow-hidden cursor-pointer group-hover:border-green-500/40 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Icon className="h-24 w-24 text-green-500/30 group-hover:text-green-500/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/20 group-hover:via-green-600/20 group-hover:to-green-500/0 rounded-lg transition-all duration-300"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
