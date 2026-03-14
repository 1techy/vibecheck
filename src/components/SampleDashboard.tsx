import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Shield,
  ChevronRight,
  GitBranch,
  Clock3,
  Filter,
  Rocket,
  PlayCircle,
  TerminalSquare,
} from "lucide-react"

const findings = [
  {
    severity: "HIGH",
    title: "SQL Injection Vulnerability in User Authentication",
    file: "src/auth/login.ts:42",
    age: "Found 2d ago",
  },
  {
    severity: "MED",
    title: "Cross-Site Scripting (XSS) in Comments Component",
    file: "src/components/comments.tsx:118",
    age: "Found 1d ago",
  },
  {
    severity: "LOW",
    title: "Use of hard-coded credentials",
    file: "src/config/secrets.ts:12",
    age: "Found 3d ago",
  },
]

export function SampleDashboard() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Security cockpit</p>
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold">
              <span>acme-corp</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-primary">main-backend</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <GitBranch className="h-4 w-4" />
              branch: main
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary ml-2">Passing</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="border-accent/40 text-accent hover:bg-accent/10">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              <Rocket className="h-4 w-4 mr-1" />
              Configure
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <PlayCircle className="h-4 w-4 mr-1" />
              Run Scan
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="xl:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Vulnerabilities", value: "24", delta: "+12%", icon: AlertTriangle, tone: "text-red-400" },
              { label: "Critical Issues", value: "3", delta: "-2", icon: Shield, tone: "text-yellow-400" },
              { label: "Scan Coverage", value: "98%", delta: "codebase", icon: CheckCircle2, tone: "text-primary" },
            ].map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + idx * 0.08 }}
                  className="retro-panel p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{card.label}</p>
                    <Icon className={`h-4 w-4 ${card.tone}`} />
                  </div>
                  <p className="text-3xl font-semibold">{card.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{card.delta}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="xl:col-span-3 retro-panel p-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-3">Security score</p>
              <div className="h-24 w-24 mx-auto rounded-full border-8 border-primary/25 border-t-primary flex items-center justify-center animate-spin [animation-duration:7s]">
                <span className="text-2xl font-semibold text-primary">B+</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">82/100 resilience grade</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="xl:col-span-8 retro-panel"
          >
            <div className="px-5 py-4 border-b border-border/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-accent" />
                <p className="font-medium">Recent Findings</p>
              </div>
              <Button variant="ghost" className="text-xs h-8">Export</Button>
            </div>
            <div className="divide-y divide-border/60">
              {findings.map((item) => (
                <div key={item.title} className="px-5 py-4 hover:bg-muted/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="font-medium">{item.title}</p>
                    <Badge
                      variant="outline"
                      className={
                        item.severity === "HIGH"
                          ? "border-red-400/50 bg-red-400/10 text-red-300"
                          : item.severity === "MED"
                            ? "border-yellow-400/50 bg-yellow-400/10 text-yellow-300"
                            : "border-accent/40 bg-accent/10 text-accent"
                      }
                    >
                      {item.severity}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{item.file}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 className="h-3 w-3" />
                      {item.age}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.33 }}
            className="xl:col-span-4 space-y-4"
          >
            <div className="retro-panel p-5">
              <p className="text-sm text-muted-foreground mb-3">Environment</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between"><span>Node</span><span className="text-muted-foreground">v18.x</span></div>
                <div className="flex items-center justify-between"><span>Framework</span><span className="text-muted-foreground">express</span></div>
                <div className="flex items-center justify-between"><span>Last scanned</span><span className="text-muted-foreground">13:46</span></div>
              </div>
            </div>
            <div className="retro-panel p-5">
              <p className="text-sm text-muted-foreground mb-2">Vulnerability trend</p>
              <div className="h-24 rounded-md border border-border/60 bg-muted/20 flex items-end gap-1 px-2 pb-2">
                {[40, 38, 35, 31, 29, 24].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary/80 to-accent/80" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="retro-panel overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TerminalSquare className="h-4 w-4 text-primary" />
              <p className="font-medium">Fix suggestions</p>
            </div>
            <Badge variant="outline" className="border-red-400/40 text-red-300 bg-red-500/10">High risk file</Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-5 border-b lg:border-b-0 lg:border-r border-border/60">
              <p className="text-xs text-muted-foreground mb-2">Before</p>
              <pre className="text-xs rounded-md bg-black/35 border border-border/60 p-3 overflow-auto leading-relaxed text-red-300">
                {"const query = \"SELECT * FROM users WHERE username='${username}' AND password='${password}'\""}
              </pre>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground mb-2">Suggested fix</p>
              <pre className="text-xs rounded-md bg-black/35 border border-border/60 p-3 overflow-auto leading-relaxed text-primary">
                {"const query = \"SELECT * FROM users WHERE username=$1 AND password=$2\"\nconst result = await db.execute(query, [username, password])"}
              </pre>
              <Button className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground">Apply Fix</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
