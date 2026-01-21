import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function GettingStarted() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-600"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <h1 className="text-5xl font-bold">Getting Started</h1>
            <p className="text-xl text-muted-foreground">
              Welcome to vibecheck! Let's get your AI code security scanning set up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-500">1. Install</h2>
              <p className="text-muted-foreground mb-4">
                Install vibecheck CLI tool for your development environment.
              </p>
              <code className="bg-black/40 p-3 rounded text-green-500 block font-mono text-sm">
                npm install -g vibecheck
              </code>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-500">2. Configure</h2>
              <p className="text-muted-foreground mb-4">
                Set up your repository and configure scanning rules.
              </p>
              <code className="bg-black/40 p-3 rounded text-green-500 block font-mono text-sm">
                vibecheck init
              </code>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-500">3. Scan</h2>
              <p className="text-muted-foreground mb-4">
                Run your first scan to detect AI-generated vulnerabilities.
              </p>
              <code className="bg-black/40 p-3 rounded text-green-500 block font-mono text-sm">
                vibecheck scan .
              </code>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-500">4. Integrate</h2>
              <p className="text-muted-foreground mb-4">
                Add vibecheck to your CI/CD pipeline for automated scanning.
              </p>
              <code className="bg-black/40 p-3 rounded text-green-500 block font-mono text-sm">
                See docs for CI/CD
              </code>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-8 border border-green-500/20 rounded-lg bg-green-500/5"
          >
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              Check out our documentation or reach out to our support team for assistance.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
              View Documentation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
