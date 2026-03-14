import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  ExternalLink,
  GitFork,
  Github,
  LoaderCircle,
  LogOut,
  RefreshCcw,
  Star,
} from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

type GitHubUser = {
  id: number
  login: string
  name: string | null
  avatar_url: string
  html_url: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
}

type GitHubRepo = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  private: boolean
  stargazers_count: number
  forks_count: number
  language: string | null
  default_branch: string
  updated_at: string
}

const GITHUB_API_BASE = "https://api.github.com"

const getErrorMessage = async (response: Response) => {
  try {
    const payload = (await response.json()) as { message?: string }
    if (payload.message) {
      return payload.message
    }
  } catch {
    // Ignore JSON parsing errors and fall back to status text.
  }

  return `${response.status} ${response.statusText}`
}

const fetchGitHubUser = async (token: string) => {
  const response = await fetch(`${GITHUB_API_BASE}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (!response.ok) {
    throw new Error(`Unable to load GitHub profile: ${await getErrorMessage(response)}`)
  }

  return (await response.json()) as GitHubUser
}

const fetchAllGitHubRepos = async (token: string) => {
  const allRepos: GitHubRepo[] = []

  for (let page = 1; page <= 100; page += 1) {
    const response = await fetch(
      `${GITHUB_API_BASE}/user/repos?per_page=100&page=${page}&sort=updated&direction=desc`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Unable to load repositories: ${await getErrorMessage(response)}`)
    }

    const repos = (await response.json()) as GitHubRepo[]
    allRepos.push(...repos)

    if (repos.length < 100) {
      break
    }
  }

  return allRepos
}

export function GitHubDashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSigningOut, setIsSigningOut] = useState(false)

  const loadData = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      setError("Supabase is not configured. Please update your .env values.")
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    const { data, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
      setError(sessionError.message)
      setIsLoading(false)
      return
    }

    if (!data.session) {
      navigate("/getting-started", { replace: true })
      return
    }

    const providerToken = data.session.provider_token
    if (!providerToken) {
      setError("GitHub access token is missing in this session. Sign out and connect GitHub again.")
      setIsLoading(false)
      return
    }

    try {
      const [profile, repositories] = await Promise.all([
        fetchGitHubUser(providerToken),
        fetchAllGitHubRepos(providerToken),
      ])

      setUser(profile)
      setRepos(repositories)
    } catch (loadError) {
      const message = loadError instanceof Error ? loadError.message : "Failed to load GitHub data."
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }, [navigate])

  useEffect(() => {
    void loadData()
  }, [loadData])

  const handleSignOut = async () => {
    if (!supabase) {
      navigate("/getting-started")
      return
    }

    setIsSigningOut(true)
    await supabase.auth.signOut()
    setIsSigningOut(false)
    navigate("/getting-started", { replace: true })
  }

  if (isLoading) {
    return (
      <section className="relative py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="retro-panel p-8 sm:p-10 flex flex-col items-center gap-4 text-center">
            <LoaderCircle className="h-8 w-8 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground">Loading your GitHub profile and repositories...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="relative py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="retro-panel p-8 sm:p-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-red-300">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-medium">Could not load GitHub data</p>
            </div>
            <p className="text-sm text-muted-foreground break-words">{error}</p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => void loadData()} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <RefreshCcw className="h-4 w-4 mr-1" />
                Retry
              </Button>
              <Button variant="outline" onClick={() => navigate("/getting-started")}>
                Back to login
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!user) {
    return null
  }

  return (
    <section className="relative py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="retro-panel p-5 sm:p-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="h-14 w-14 rounded-full border border-border/80"
              />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">GitHub account</p>
                <h1 className="text-xl sm:text-2xl font-semibold">{user.name ?? user.login}</h1>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  @{user.login}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary">
                {repos.length} repos
              </Badge>
              <Badge variant="outline" className="border-accent/40 bg-accent/10 text-accent">
                {user.followers} followers
              </Badge>
              <Badge variant="outline" className="border-border/70 bg-muted/30 text-foreground">
                {user.following} following
              </Badge>
              <Button variant="outline" onClick={() => void loadData()}>
                <RefreshCcw className="h-4 w-4 mr-1" />
                Refresh
              </Button>
              <Button
                variant="destructive"
                onClick={() => void handleSignOut()}
                disabled={isSigningOut}
              >
                <LogOut className="h-4 w-4 mr-1" />
                {isSigningOut ? "Signing out..." : "Sign out"}
              </Button>
            </div>
          </div>

          {user.bio && <p className="mt-4 text-sm text-muted-foreground">{user.bio}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.45 }}
          className="retro-panel overflow-hidden"
        >
          <div className="px-5 py-4 border-b border-border/60 flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <Github className="h-4 w-4 text-primary" />
              <p className="font-medium">Repositories</p>
            </div>
            <p className="text-xs text-muted-foreground">Sorted by last update</p>
          </div>

          {repos.length === 0 ? (
            <div className="px-5 py-8 text-sm text-muted-foreground">No repositories found for this GitHub account.</div>
          ) : (
            <div className="divide-y divide-border/60">
              {repos.map((repo) => (
                <article key={repo.id} className="px-5 py-4 hover:bg-muted/20 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                    <div className="space-y-1">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium hover:text-primary transition-colors"
                      >
                        {repo.full_name}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      {repo.description && (
                        <p className="text-sm text-muted-foreground">{repo.description}</p>
                      )}

                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
                        <Badge
                          variant="outline"
                          className={repo.private
                            ? "border-yellow-400/40 bg-yellow-500/10 text-yellow-300"
                            : "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                          }
                        >
                          {repo.private ? "Private" : "Public"}
                        </Badge>
                        {repo.language && <span>{repo.language}</span>}
                        <span>branch: {repo.default_branch}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {repo.forks_count}
                      </span>
                      <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
