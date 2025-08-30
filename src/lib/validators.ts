import { TimeOffType } from './types'
import { toDateOnlyISO } from './dateUtils'


export type ValidationError = { field: string; message: string }

export function validateNewRequest(input: {
  employeeName: string
  startDate: string
  endDate: string
  type: TimeOffType | ''
}): ValidationError[] {
  const errors: ValidationError[] = []

  if (!input.employeeName.trim()) {
    errors.push({ field: 'employeeName', message: 'Employee name is required.' })
  }

  if (!input.startDate) {
    errors.push({ field: 'startDate', message: 'Start date is required.' })
  }

  if (!input.endDate) {
    errors.push({ field: 'endDate', message: 'End date is required.' })
  }

  if (input.startDate && input.endDate) {
    const s = toDateOnlyISO(input.startDate).slice(0, 10) // "YYYY-MM-DD"
    const e = toDateOnlyISO(input.endDate).slice(0, 10)
    if (e < s) {
      errors.push({ field: 'dateRange', message: 'End date cannot be before start date.' })
    }
  }

  if (!input.type) {
    errors.push({ field: 'type', message: 'Time off type is required.' })
  }

  return errors
}
