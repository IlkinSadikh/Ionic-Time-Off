import { IonBadge } from '@ionic/react'
import { RequestStatus } from '../../lib/types'

export default function StatusBadge({ status }: { status: RequestStatus }) {
  const color = status === 'Approved' ? 'success' : status === 'Rejected' ? 'danger' : 'medium'
  return <IonBadge className="status-badge" color={color} aria-label={`Status: ${status}`}>{status}</IonBadge>
}
