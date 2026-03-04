import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export function SampleReport() {
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
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
            See Your <span className="text-green-500">Security Report</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive vulnerability analysis with actionable recommendations
          </p>
        </motion.div>

        <motion.div
          variants={reportVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="group relative"
        >
          <div className="bg-black/40 rounded-xl border border-border/60 overflow-hidden shadow-2xl hover:border-green-500/50 transition-all backdrop-blur-sm">
            <div className="bg-gradient-to-r from-black/70 to-black/40 px-8 py-6 border-b border-border/60">
              <h3 className="text-lg font-semibold text-white mb-2">Security Report - Project Dashboard</h3>
              <p className="text-sm text-slate-400">Last scan: 2 minutes ago • 127 files analyzed</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <motion.div 
                  className="p-4 rounded-lg bg-black/30 border border-border/60 hover:border-green-500/60 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-green-500">12</div>
                  <div className="text-sm text-slate-400 mt-1">Critical Issues</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-black/30 border border-border/60 hover:border-green-500/60 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-yellow-400">28</div>
                  <div className="text-sm text-slate-400 mt-1">Warnings</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-black/30 border border-border/60 hover:border-green-500/60 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-blue-400">156</div>
                  <div className="text-sm text-slate-400 mt-1">Info Items</div>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-black/30 border border-border/60 hover:border-green-500/60 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl font-bold text-green-500">98%</div>
                  <div className="text-sm text-slate-400 mt-1">Fixed Rate</div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg">Recent Vulnerabilities</h4>
                
                <div className="space-y-3">
                  <motion.div 
                    className="p-4 rounded-lg bg-black/30 border border-border/60 border-l-4 border-l-green-500/70 hover:border-green-500/80 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-green-400">SQL Injection in User API</h5>
                        <p className="text-sm text-slate-400 mt-1">Unsanitized user input in database query</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 text-xs font-semibold">
                        CRITICAL
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">📍 src/api/users.ts:142</div>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-lg bg-black/30 border border-border/60 border-l-4 border-l-yellow-400/70 hover:border-yellow-400/80 hover:bg-yellow-500/5 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-yellow-400">Weak Encryption Algorithm</h5>
                        <p className="text-sm text-slate-400 mt-1">Using deprecated MD5 for hashing passwords</p>
                      </div>
                      <span className="px-3 py-1 rounded-full border border-yellow-500/40 bg-black/40 text-yellow-400 text-xs font-semibold">
                        HIGH
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">📍 src/crypto/hash.ts:28</div>
                  </motion.div>

                  <motion.div 
                    className="p-4 rounded-lg bg-black/30 border border-border/60 border-l-4 border-l-blue-400/70 hover:border-blue-400/80 hover:bg-blue-500/5 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-blue-400">Missing CORS Configuration</h5>
                        <p className="text-sm text-slate-400 mt-1">API accepts requests from any origin</p>
                      </div>
                      <span className="px-3 py-1 rounded-full border border-blue-500/40 bg-black/40 text-blue-400 text-xs font-semibold">
                        MEDIUM
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2">📍 src/middleware/cors.ts:5</div>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Fix Progress</span>
                  <span className="text-sm text-slate-400">12 / 12 issues fixed</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-600/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
