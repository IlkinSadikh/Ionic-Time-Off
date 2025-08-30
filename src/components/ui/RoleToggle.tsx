import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react'

export type Role = 'employee' | 'supervisor'

export default function RoleToggle({ role, onChange }: { role: Role, onChange: (r: Role) => void }) {
  return (
    <IonSegment value={role} onIonChange={(e) => onChange((e.detail.value as Role) ?? 'employee')}>
      <IonSegmentButton value="employee" aria-label="Employee view">
        <IonLabel>Employee</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="supervisor" aria-label="Supervisor view">
        <IonLabel>Supervisor</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  )
}
