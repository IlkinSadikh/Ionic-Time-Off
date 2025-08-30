import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { TimeOffRequest } from './types'
import { loadRequests, saveRequests } from './storage'

/**
 * Action types for the time-off request reducer
 * - seed: Initialize the store with an array of requests (typically from storage)
 * - add: Add a new time-off request to the store
 * - approve: Approve a request by ID with optional supervisor note
 * - reject: Reject a request by ID with optional supervisor note
 */
type Action =
  | { type: 'seed'; payload: TimeOffRequest[] }
  | { type: 'add'; payload: TimeOffRequest }
  | { type: 'approve'; id: string; note?: string }
  | { type: 'reject'; id: string; note?: string }

/**
 * Reducer function that handles state updates for time-off requests
 * @param state - Current array of time-off requests
 * @param action - Action to perform on the state
 * @returns Updated state array
 */
function reducer(state: TimeOffRequest[], action: Action): TimeOffRequest[] {
  switch (action.type) {
    case 'seed':
      // Replace entire state with provided payload (used for initial load)
      return action.payload
    case 'add':
      // Add new request to the beginning of the array (most recent first)
      return [action.payload, ...state]
    case 'approve':
      // Find request by ID and update status to 'Approved' with optional note
      return state.map(r => r.id === action.id ? { ...r, status: 'Approved', supervisorNote: action.note } : r)
    case 'reject':
      // Find request by ID and update status to 'Rejected' with optional note
      return state.map(r => r.id === action.id ? { ...r, status: 'Rejected', supervisorNote: action.note } : r)
    default:
      return state
  }
}

/**
 * React Context for sharing time-off request state and dispatch function
 * throughout the component tree
 */
const StoreContext = createContext<{
  requests: TimeOffRequest[]
  dispatch: React.Dispatch<Action>
} | null>(null)

/**
 * Provider component that wraps the app and provides time-off request state
 * Handles loading from and saving to localStorage automatically
 * @param children - Child components that will have access to the store
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, [], () => loadRequests())

  useEffect(() => {
    saveRequests(state)
  }, [state])

  const value = useMemo(() => ({ requests: state, dispatch }), [state])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

/**
 * Hook to access the time-off request store
 * Must be used within a StoreProvider component
 * @returns Object containing requests array and dispatch function
 * @throws Error if used outside of StoreProvider
 */
export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
