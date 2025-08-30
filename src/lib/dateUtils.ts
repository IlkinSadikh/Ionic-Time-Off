import { format } from 'date-fns'

export function formatDate(iso: string): string {
    if (!iso) return ''
    return format(new Date(iso), 'MMM d, yyyy')
  }

/**
 * Normalize a Date or ISO string to midnight UTC ("date-only").
 * Ensures comparison is consistent and ignores time of day.
 */
export const toDateOnlyISO = (input: Date | string): string => {
    const d = typeof input === 'string' ? new Date(input) : input
    const only = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    return only.toISOString()
  }
  
  /**
   * Add days to an ISO string date and return a new ISO (date-only).
   */
  export const addDaysISO = (iso: string, days: number): string => {
    const d = new Date(iso)
    const next = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + days))
    return next.toISOString()
  }
  