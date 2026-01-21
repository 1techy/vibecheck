import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Github, Gitlab, Code2, ArrowRight } from "lucide-react"
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
      y: [0, 320, 0],
      transition: {
        duration: 8,
        repeat: Infinity as any,
        ease: "linear",
      },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background gradient effect - subtle */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Heading spread horizontally */}
        <motion.div
          className="space-y-8 mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight max-w-6xl mx-auto">
              Secure Your AI-Generated{" "}
              <span className="text-green-500">Code</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Automatically scan and fix security vulnerabilities in AI-generated code. Integrate seamlessly with your CI/CD pipeline.
            </p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center pt-4">
              <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-500">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-500">
                <Gitlab className="h-3 w-3 mr-1" />
                GitLab
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-500">
                <Code2 className="h-3 w-3 mr-1" />
                CI/CD
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => {
                  triggerConfetti()
                  navigate('/getting-started')
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500/30 hover:bg-green-500/10 text-green-500"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Scanning Animation (centered, not full width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            delay: 0.3,
          }}
          className="flex justify-center"
        >
          <div className="w-full max-w-2xl">
            <div className="bg-black/40 border border-green-500/20 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm hover:border-green-500/40 transition-colors">
              {/* Header */}
              <div className="bg-black/60 px-6 py-3 border-b border-green-500/10 flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/60"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/30"></div>
                <span className="ml-4 text-sm text-green-500/60 font-mono">$ vibecheck scan</span>
              </div>

              {/* Content with Scan Line */}
              <div className="relative p-6 space-y-4 h-80 overflow-hidden">
                <motion.div
                  variants={scanLineVariants}
                  animate="animate"
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-75 pointer-events-none"
                />

                <div className="space-y-4 font-mono text-sm">
                  <div className="text-green-500">
                    $ vibecheck scan . --ai-code
                  </div>
                  <div className="text-white/50">Analyzing 1,247 files...</div>

                  <div className="pt-4 space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-500">✗</span>
                      <div>
                        <div className="text-red-400">SQL Injection Risk</div>
                        <div className="text-xs text-white/30">src/api.ts:42</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-yellow-500">⚠</span>
                      <div>
                        <div className="text-yellow-400">Weak Encryption</div>
                        <div className="text-xs text-white/30">src/crypto.ts:15</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-500">✓</span>
                      <div>
                        <div className="text-green-400">No XSS Vulnerabilities</div>
                        <div className="text-xs text-white/30">100% safe</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 text-white/50">
                    [FIXED] 2 critical issues resolved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
