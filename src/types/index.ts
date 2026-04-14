/** Days of the week (ISO: 1 = Monday … 7 = Sunday) */
export type DayNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7

/** Short day abbreviations for display */
export type DayAbbr = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'

/** How often a habit repeats */
export type HabitFrequency = 'daily' | 'weekly' | 'custom'

/**
 * Preset colours available in the habit colour picker.
 * Extend this list to add more options.
 */
export type HabitColor =
  | '#7c3aed' // purple  (default accent)
  | '#2563eb' // blue
  | '#059669' // green
  | '#d97706' // amber
  | '#dc2626' // red
  | '#db2777' // pink
  | '#0891b2' // cyan
  | '#65a30d' // lime
