import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Github, Gitlab, Code2, ArrowRight, Sparkles, TerminalSquare } from "lucide-react"
import { useConfetti } from "@/hooks/useConfetti"
import { useNavigate } from "react-router-dom"

export function Hero() {
  const { triggerConfetti } = useConfetti()
  const navigate = useNavigate()

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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

  const scanLineVariants: Variants = {
    animate: {
      y: [0, 330, 0],
      transition: {
        duration: 7,
        repeat: Infinity as number,
        ease: "linear",
      },
    },
  }

  return (
    <section className="relative min-h-screen pt-24 pb-14 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 left-[12%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-6 xl:col-span-7">
            <Badge variant="outline" className="retro-pill border-primary/40 bg-primary/10 text-primary">
              <Sparkles className="h-3 w-3" />
              Personal security cockpit
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
              Secure your personal code with a cleaner, faster
              <span className="text-primary"> scan workflow</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Scan AI-generated code in minutes, review actionable fixes, and keep your project protected without noisy dashboards.
            </p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline" className="bg-primary/10 border-primary/40 text-primary">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Badge>
              <Badge variant="outline" className="bg-primary/10 border-primary/40 text-primary">
                <Gitlab className="h-3 w-3 mr-1" />
                GitLab
              </Badge>
              <Badge variant="outline" className="bg-primary/10 border-primary/40 text-primary">
                <Code2 className="h-3 w-3 mr-1" />
                CI/CD
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30"
                onClick={() => {
                  triggerConfetti()
                  navigate('/getting-started')
                }}
              >
                Start free scan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/40 hover:bg-accent/10 text-accent"
                onClick={() => navigate("/sample-dashboard")}
              >
                View sample dashboard
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-2xl">
              {[
                { label: "Avg. setup", value: "7 min" },
                { label: "False positives", value: "-42%" },
                { label: "Issues auto-fixed", value: "68%" },
                { label: "Projects secured", value: "1+" },
              ].map((item) => (
                <div key={item.label} className="retro-panel p-3">
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="xl:col-span-5"
          >
            <div className="retro-panel overflow-hidden">
              <div className="border-b border-border/70 px-4 py-3 flex items-center gap-2 bg-secondary/40">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/90" />
                <div className="ml-2 text-sm text-muted-foreground inline-flex items-center gap-2">
                  <TerminalSquare className="h-4 w-4 text-accent" />
                  code_terminal.scan
                </div>
                <Badge variant="outline" className="ml-auto border-primary/40 text-primary bg-primary/10">
                  Active
                </Badge>
              </div>

              <div className="relative p-5 space-y-4 min-h-[360px] overflow-hidden">
                <motion.div
                  variants={scanLineVariants}
                  animate="animate"
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 pointer-events-none"
                />

                <p className="font-mono text-xs text-primary">$ vibecheck scan ./src --auto-fix --github</p>
                <p className="font-mono text-xs text-muted-foreground">Analyzing 1,247 files...</p>

                <div className="space-y-2 font-mono text-xs">
                  <p className="text-red-300">[HIGH] SQL Injection — src/auth/login.ts:42</p>
                  <p className="text-yellow-300">[MED] Weak hash usage — src/crypto/hash.ts:11</p>
                  <p className="text-primary">[FIXED] CORS policy hardened — src/middleware/cors.ts:5</p>
                </div>

                <div className="rounded-md border border-border/70 bg-black/35 p-3 space-y-2">
                  <p className="text-[11px] text-muted-foreground font-mono">before</p>
                  <pre className="text-[11px] text-red-300 leading-relaxed whitespace-pre-wrap break-words font-mono">
                    {"const query = \"SELECT * FROM users WHERE username='${username}' AND password='${password}'\""}
                  </pre>
                </div>

                <div className="rounded-md border border-primary/30 bg-primary/10 p-3 space-y-2">
                  <p className="text-[11px] text-primary font-mono">suggested fix</p>
                  <pre className="text-[11px] text-primary leading-relaxed whitespace-pre-wrap break-words font-mono">
                    {"const query = \"SELECT * FROM users WHERE username=$1 AND password=$2\"\nawait db.execute(query, [username, password])"}
                  </pre>
                </div>

                <div className="rounded-md border border-primary/40 bg-primary/10 p-3">
                  <p className="text-xs uppercase tracking-wider text-primary">Scan summary</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    3 vulnerabilities found · 1 fix applied · 2 patches ready.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 retro-divider"
        />
      </div>
    </section>
  )
}
