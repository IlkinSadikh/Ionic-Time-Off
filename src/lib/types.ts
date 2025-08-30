export type TimeOffType = 'Vacation' | 'Sick' | 'Personal' | 'Other'
export type RequestStatus = 'Pending' | 'Approved' | 'Rejected'

export interface TimeOffRequest {
  id: string
  employeeName: string
  startDate: string // ISO date (YYYY-MM-DD)
  endDate: string   // ISO date (YYYY-MM-DD)
  type: TimeOffType
  notes?: string
  status: RequestStatus
  supervisorNote?: string
  createdAt: string // ISO datetime
}
