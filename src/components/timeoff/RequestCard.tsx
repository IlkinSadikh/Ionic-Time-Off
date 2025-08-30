import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel } from '@ionic/react'
import { TimeOffRequest } from '../../lib/types'
import StatusBadge from '../ui/StatusBadge'
import { formatDate } from '../../lib/dateUtils'

type RequestCardProps = {
  req: TimeOffRequest
}

export default function RequestCard({ req }: RequestCardProps) {
  
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle className="flex items-center justify-between">
          <span>{req.employeeName}</span>
          <StatusBadge status={req.status} />
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem lines="none">
          <IonLabel>
            <p><strong>Type:</strong> {req.type}</p>
            <p><strong>From:</strong> {formatDate(req.startDate)}</p>
            <p><strong>To:</strong> {formatDate(req.endDate)}</p>
            {req.notes && <p><strong>Notes:</strong> {req.notes}</p>}
            {req.supervisorNote && <p><strong>Supervisor note:</strong> {req.supervisorNote}</p>}
          </IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  )
}
