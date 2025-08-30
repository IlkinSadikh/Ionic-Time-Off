// tests/store.test.ts
import { TimeOffRequest } from '../src/lib/types'

// reducer copy as before...
type Action =
  | { type: 'add'; payload: TimeOffRequest }
  | { type: 'approve'; id: string; note?: string }
  | { type: 'reject'; id: string; note?: string }

  // Simple pure reducer copy to test logic deterministically
function reducer(state: TimeOffRequest[], action: Action): TimeOffRequest[] {
  switch (action.type) {
    case 'add':
      return [action.payload, ...state]
    case 'approve':
      return state.map(r => r.id === action.id ? { ...r, status: 'Approved', supervisorNote: action.note } : r)
    case 'reject':
      return state.map(r => r.id === action.id ? { ...r, status: 'Rejected', supervisorNote: action.note } : r)
    default:
      return state
  }
}

describe('store reducer', () => {
  const base: TimeOffRequest = {
    id: '1', employeeName: 'Alice', startDate: '2025-09-01', endDate: '2025-09-02', type: 'Vacation', status: 'Pending', createdAt: '2025-08-01T00:00:00Z'
  }
  test('adds a request to the front', () => {
    const state = reducer([], { type: 'add', payload: base })
    expect(state[0].id).toBe('1')
  })
  test('approves a request and records note', () => {
    const state = reducer([base], { type: 'approve', id: '1', note: 'ok' })
    expect(state[0].status).toBe('Approved')
    expect(state[0].supervisorNote).toBe('ok')
  })
  test('rejects a request and records note', () => {
    const state = reducer([base], { type: 'reject', id: '1', note: 'busy' })
    expect(state[0].status).toBe('Rejected')
    expect(state[0].supervisorNote).toBe('busy')
  })
})
