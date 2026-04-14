import type { HabitFrequency } from '@/types'

// ---------------------------------------------------------------------------
// habits
// ---------------------------------------------------------------------------

export type Habit = {
  id: string
  user_id: string
  name: string
  description: string | null
  icon: string | null        // emoji e.g. "🏃"
  color: string | null       // hex e.g. "#7c3aed"
  frequency: HabitFrequency
  frequency_days: number[] | null // ISO day numbers [1–7]; used when frequency = 'custom'
  category_id: string | null
  order: number
  archived: boolean
  deleted_at: string | null
  created_at: string
}

export type HabitInsert = Omit<Habit, 'id' | 'created_at'>
export type HabitUpdate = Partial<Omit<Habit, 'id' | 'user_id' | 'created_at'>>

// ---------------------------------------------------------------------------
// habit_categories
// ---------------------------------------------------------------------------

export type HabitCategory = {
  id: string
  user_id: string
  name: string
  color: string | null  // hex
  icon: string | null   // emoji
  order: number
  deleted_at: string | null
}

export type HabitCategoryInsert = Omit<HabitCategory, 'id'>
export type HabitCategoryUpdate = Partial<Omit<HabitCategory, 'id' | 'user_id'>>

// ---------------------------------------------------------------------------
// habit_logs
// ---------------------------------------------------------------------------

export type HabitLog = {
  id: string
  habit_id: string
  user_id: string
  completed_at: string  // ISO timestamp
  note: string | null
}

export type HabitLogInsert = Omit<HabitLog, 'id'>

// ---------------------------------------------------------------------------
// streaks  (computed / cached — updated server-side or via Edge Function)
// ---------------------------------------------------------------------------

export type Streak = {
  id: string
  habit_id: string
  user_id: string
  current_streak: number
  longest_streak: number
  last_completed_at: string | null
}

// TODO (Phase 3): add Supabase-generated Database type once tables are created,
// and replace these hand-written types with the generated ones for full type safety.
