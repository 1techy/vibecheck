import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/ui/theme-provider"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  // Derive local isDark state from the current theme + system preference
  useEffect(() => {
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches

    const effectiveTheme =
      theme === "system" ? (prefersDark ? "dark" : "light") : theme

    setIsDark(effectiveTheme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/60 rounded-full"
    >
      <motion.div
        className="relative flex h-8 w-14 items-center rounded-full px-1 shadow-sm border border-border/70"
        animate={{
          backgroundColor: isDark ? "rgba(34,197,94,0.18)" : "rgba(15,23,42,0.5)",
          borderColor: isDark ? "rgba(34,197,94,0.8)" : "rgba(148,163,184,0.7)",
        }}
        transition={{ duration: 0.22 }}
      >
        <motion.div
          layout
          className="flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-md"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          animate={{ x: isDark ? 20 : 0 }}
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-yellow-400" />
          )}
        </motion.div>
      </motion.div>
    </button>
  )
}