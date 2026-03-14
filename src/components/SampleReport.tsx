import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function SampleReport() {
  const navigate = useNavigate()

  const reportVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Preview the <span className="text-primary">retro-tech dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A clean, captivating command center designed to keep users engaged after onboarding.
          </p>
        </motion.div>

        <motion.div
          variants={reportVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="group relative"
        >
          <div className="bg-card/80 rounded-xl border border-border/60 overflow-hidden shadow-2xl hover:border-accent/50 transition-all backdrop-blur-sm">
            <div className="bg-secondary/45 px-6 py-5 border-b border-border/60 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Main Security Cockpit</h3>
                <p className="text-sm text-muted-foreground">Last scan: 2 minutes ago • 127 files analyzed</p>
              </div>
              <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10" onClick={() => navigate("/sample-dashboard")}>
                Open full sample
              </Button>
            </div>

            <div className="p-6 space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <motion.div 
                  className="p-4 rounded-lg bg-background/70 border border-border/60 hover:border-primary/70 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-primary">24</div>
                  <div className="text-sm text-muted-foreground mt-1">Open vulnerabilities</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-background/70 border border-border/60 hover:border-accent/70 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Scan coverage</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-background/70 border border-border/60 hover:border-primary/70 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-foreground">3</div>
                  <div className="text-sm text-muted-foreground mt-1">Critical issues</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-background/70 border border-border/60 hover:border-primary/70 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-primary">B+</div>
                  <div className="text-sm text-muted-foreground mt-1">Security score</div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Recent Findings</h4>
                
                <div className="space-y-3">
                  <motion.div 
                    className="p-4 rounded-lg bg-background/70 border border-border/60 border-l-4 border-l-primary hover:border-primary/80 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-primary">SQL Injection in User API</h5>
                        <p className="text-sm text-muted-foreground mt-1">Unsanitized user input in database query</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-semibold">
                        CRITICAL
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">src/api/users.ts:142</div>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-lg bg-background/70 border border-border/60 border-l-4 border-l-yellow-400/70 hover:border-yellow-400/80 hover:bg-yellow-500/5 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-yellow-400">Weak Encryption Algorithm</h5>
                        <p className="text-sm text-muted-foreground mt-1">Using deprecated MD5 for hashing passwords</p>
                      </div>
                      <span className="px-3 py-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-xs font-semibold">
                        HIGH
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">src/crypto/hash.ts:28</div>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-lg bg-background/70 border border-border/60 border-l-4 border-l-accent hover:border-accent/80 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-accent">Missing CORS Configuration</h5>
                        <p className="text-sm text-muted-foreground mt-1">API accepts requests from any origin</p>
                      </div>
                      <span className="px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold">
                        MEDIUM
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">src/middleware/cors.ts:5</div>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Fix Progress</span>
                  <span className="text-sm text-muted-foreground">21 / 24 issues fixed</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
