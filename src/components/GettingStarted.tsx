import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, LayoutDashboard } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"

type OAuthError = { description: string | null; code: string | null }

const getOAuthErrorFromUrl = (): OAuthError => {
  const searchParams = new URLSearchParams(window.location.search)
  const hash = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash
  const hashParams = new URLSearchParams(hash)

  const description =
    searchParams.get("error_description") ?? hashParams.get("error_description")
  const code =
    searchParams.get("error_code") ?? hashParams.get("error_code")

  return { description, code }
}

export function GettingStarted() {
  const navigate = useNavigate()
  const [authError, setAuthError] = useState<string | null>(null)
  const [isProviderError, setIsProviderError] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const oauthRedirectUrl =
    import.meta.env.VITE_SUPABASE_AUTH_REDIRECT_URL?.trim() ||
    `${window.location.origin}/getting-started`
  const supabaseCallbackUrl = import.meta.env.VITE_SUPABASE_URL
    ? `${import.meta.env.VITE_SUPABASE_URL}/auth/v1/callback`
    : "https://<your-project-id>.supabase.co/auth/v1/callback"

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      return
    }

    const { description, code } = getOAuthErrorFromUrl()
    if (description) {
      setAuthError(description)
      if (code === "unexpected_failure" || description.toLowerCase().includes("user profile")) {
        setIsProviderError(true)
      }
    }

    let isMounted = true

    void supabase.auth.getSession().then(({ data, error }) => {
      if (!isMounted) {
        return
      }

      if (error) {
        setAuthError(error.message)
        return
      }

      if (data.session) {
        navigate("/dashboard", { replace: true })
      }
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/dashboard", { replace: true })
      }
    })

    return () => {
      isMounted = false
      authListener.subscription.unsubscribe()
    }
  }, [navigate])

  const handleGithubLogin = async () => {
    setAuthError(null)

    if (!isSupabaseConfigured || !supabase) {
      setAuthError("Supabase is not configured yet. Add real VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values.")
      return
    }

    setIsRedirecting(true)
    console.log("[Auth] Initiating GitHub OAuth — redirectTo:", oauthRedirectUrl)

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: oauthRedirectUrl,
        scopes: "read:user user:email repo",
        skipBrowserRedirect: true,
      },
    })

    console.log("[Auth] signInWithOAuth result:", { url: data?.url, error })

    if (error) {
      setAuthError(error.message)
      setIsRedirecting(false)
      return
    }

    if (data?.url) {
      window.location.href = data.url
    } else {
      setAuthError("Could not get OAuth URL from Supabase. Check your Supabase URL and anon key in .env.")
      setIsRedirecting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.25 }}
            className="rounded-2xl border border-border/70 bg-card/85 shadow-xl shadow-black/40 backdrop-blur-sm p-8 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Log <span className="text-primary">in</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Connect GitHub to activate your scanning workspace and ship secure code faster.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 py-5 text-sm sm:text-base"
                onClick={handleGithubLogin}
                disabled={isRedirecting}
              >
                <Github className="h-5 w-5" />
                {isRedirecting ? "Redirecting..." : "Continue with GitHub"}
              </Button>

              <Button
                variant="outline"
                className="w-full border-accent/40 text-accent hover:bg-accent/10 py-5 text-sm sm:text-base"
                onClick={() => navigate("/sample-dashboard")}
              >
                <LayoutDashboard className="h-5 w-5 mr-2" />
                View Sample Dashboard
              </Button>

              <p className="text-xs text-muted-foreground leading-relaxed">
                We request read access to your GitHub profile and repositories so your dashboard can list account details and projects.
                Access can be revoked any time from GitHub settings.
              </p>

              {authError && !isProviderError && (
                <p className="text-xs text-red-100 border border-red-300/45 bg-red-500/20 rounded-md px-3 py-2">
                  {authError}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
