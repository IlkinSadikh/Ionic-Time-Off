import { TimeOffRequest } from './types'

const KEY = 'timeoff:requests:v1'

/**
 * Loads time-off requests from localStorage
 * @returns Array of TimeOffRequest objects, or empty array if none exist or parsing fails
 */
export function loadRequests(): TimeOffRequest[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    return JSON.parse(raw) as TimeOffRequest[]
  } catch {
    return []
  }
}

/**
 * Saves time-off requests to localStorage
 * @param requests - Array of TimeOffRequest objects to persist
 */
export function saveRequests(requests: TimeOffRequest[]) {
  localStorage.setItem(KEY, JSON.stringify(requests))
}
