import { TimeOffRequest } from './types'

export function demoData(): TimeOffRequest[] {
  return [
    {
      id: 'r-001',
      employeeName: 'Alice Employee',
      startDate: '2025-09-02',
      endDate: '2025-09-05',
      type: 'Vacation',
      notes: 'Prague trip',
      status: 'Pending',
      createdAt: new Date('2025-08-20T10:00:00Z').toISOString()
    },
    {
      id: 'r-002',
      employeeName: 'Bob Builder',
      startDate: '2025-08-15',
      endDate: '2025-08-16',
      type: 'Sick',
      notes: 'Flu',
      status: 'Approved',
      supervisorNote: 'Get well soon',
      createdAt: new Date('2025-08-14T08:00:00Z').toISOString()
    }
  ]
}
