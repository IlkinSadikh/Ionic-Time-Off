import { useState } from 'react'
import {
  IonButton, IonInput, IonItem, IonLabel, IonList,
  IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal
} from '@ionic/react'
import { TimeOffType, TimeOffRequest } from '../../lib/types'
import { validateNewRequest, ValidationError } from '../../lib/validators'
import { toDateOnlyISO, addDaysISO } from '../../lib/dateUtils'


export default function RequestForm({ onSubmit }: { onSubmit: (req: TimeOffRequest) => void }) {
  const todayISO = toDateOnlyISO(new Date())
  const tomorrowISO = addDaysISO(todayISO, 1)

  const [startDate, setStartDate] = useState(todayISO)
  const [endDate, setEndDate] = useState(tomorrowISO)
  const [employeeName, setEmployeeName] = useState('Alice Employee')
  const [type, setType] = useState<TimeOffType | ''>('')
  const [notes, setNotes] = useState('')
  const [errors, setErrors] = useState<ValidationError[]>([])

  function submit() {
    const errs = validateNewRequest({ employeeName, startDate, endDate, type })
    setErrors(errs)
    if (errs.length > 0) return

    const req: TimeOffRequest = {
      id: crypto.randomUUID(),
      employeeName,
      startDate,
      endDate,
      type: type as TimeOffType,
      notes: notes || undefined,
      status: 'Pending',
      createdAt: new Date().toISOString()
    }
    onSubmit(req)
    // reset
    setEndDate(tomorrowISO)
    setNotes('')
  }

  const errorFor = (field: string) => errors.find(e => e.field === field)?.message

  return (
    <IonList inset>
      <IonItem>
        <IonLabel position="stacked">Employee Name</IonLabel>
        <IonInput
          value={employeeName}
          onIonChange={e => setEmployeeName(e.detail.value ?? '')}
          required
          aria-invalid={!!errorFor('employeeName')}
        />
      </IonItem>
      {errorFor('employeeName') && <p role="alert" className="p-2 text-red-600">{errorFor('employeeName')}</p>}

      {/* Start Date */}
      <IonItem>
        <IonLabel position="stacked">Start Date</IonLabel>
        <IonDatetimeButton className='mb-2' datetime="start-date" />
      </IonItem>
      <IonModal keepContentsMounted>
        <IonDatetime
          id="start-date"
          presentation="date"
          value={startDate}
          onIonChange={(e) => {
            const nextStart = toDateOnlyISO(e.detail.value as string)
            setStartDate(nextStart)
            // ensure end >= start
            if (new Date(endDate) < new Date(nextStart)) {
              setEndDate(nextStart)
            }
          }}
        />
      </IonModal>

      {/* End Date */}
      <IonItem>
        <IonLabel position="stacked">End Date</IonLabel>
        <IonDatetimeButton className='mb-2' datetime="end-date" />
      </IonItem>
      <IonModal keepContentsMounted>
        <IonDatetime
          id="end-date"
          presentation="date"
          value={endDate}
          min={startDate} // disallow selecting before start
          onIonChange={(e) => setEndDate(toDateOnlyISO(e.detail.value as string))}
        />
      </IonModal>

      {errorFor('endDate') && <p role="alert" className="p-2 text-red-600">{errorFor('endDate')}</p>}
      {errorFor('dateRange') && <p role="alert" className="p-2 text-red-600">{errorFor('dateRange')}</p>}

      {/* Time Off Type */}
      <IonItem>
        <IonLabel position="stacked">Time Off Type</IonLabel>
        <IonSelect
          value={type}
          onIonChange={e => setType((e.detail.value || '') as TimeOffType | '')}
          interface="action-sheet"
          placeholder="Select type"
        >
          <IonSelectOption value="Vacation">Vacation</IonSelectOption>
          <IonSelectOption value="Sick">Sick</IonSelectOption>
          <IonSelectOption value="Personal">Personal</IonSelectOption>
          <IonSelectOption value="Other">Other</IonSelectOption>
        </IonSelect>
      </IonItem>
      {errorFor('type') && <p role="alert" className="p-2 text-red-600">{errorFor('type')}</p>}

      {/* Notes */}
      <IonItem>
        <IonLabel position="stacked">Notes (optional)</IonLabel>
        <IonInput value={notes} onIonChange={e => setNotes(e.detail.value ?? '')} placeholder="Optional notes" />
      </IonItem>

      <div className="p-3">
        <IonButton
          data-testid="submit-request"
          expand="block"
          size="large"
          onClick={submit}
          aria-label="Submit Request"
        >
          Submit Request
        </IonButton>
      </div>
    </IonList>
  )
}
