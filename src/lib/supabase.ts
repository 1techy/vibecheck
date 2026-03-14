import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isPopulated = (value: string | undefined) => typeof value === "string" && value.trim().length > 0

// Prevent common placeholder values from being treated as valid configuration.
//const isPlaceholder = (value: string | undefined) =>
 // typeof value === "string" && /your-project-id|your-supabase-anon-key/i.test(value)

export const isSupabaseConfigured =
  isPopulated(supabaseUrl) &&
  isPopulated(supabaseAnonKey)
 // !isPlaceholder(supabaseUrl) &&
 // !isPlaceholder(supabaseAnonKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createSupabaseClient(supabaseUrl, supabaseAnonKey)
  : null

export { createSupabaseClient as createClient }
