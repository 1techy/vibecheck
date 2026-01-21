import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "@/components/ui/theme-provider"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Update local state when theme changes
    const checkTheme = () => {
      const hasDarkClass = document.documentElement.classList.contains('dark')
      setIsDark(hasDarkClass)
    }
    
    checkTheme()
    
    // Watch for class changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [theme])

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        <motion.div
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.8,
            opacity: isDark ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-4 w-4 text-green-500 group-hover:text-green-400" />
        </motion.div>
        <motion.div
          animate={{
            rotate: isDark ? -180 : 0,
            scale: isDark ? 0.8 : 1,
            opacity: isDark ? 0.5 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-4 w-4 text-green-500 group-hover:text-green-400" />
        </motion.div>
      </div>
    </motion.button>
  )
}