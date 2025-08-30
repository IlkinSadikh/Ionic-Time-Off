import { useState } from 'react'
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from '@ionic/react'
import { checkmarkCircle, closeCircle } from 'ionicons/icons'

export default function ApproveRejectBar({
  onApprove,
  onReject,
}: {
  onApprove: (note?: string) => void
  onReject: (note?: string) => void
}) {
  const [note, setNote] = useState('')

  return (
    <>
      <IonItem lines="full" className="ion-margin-top">
        <IonLabel position="stacked">Optional note</IonLabel>
        <IonInput
          placeholder="Reason / comment"
          value={note}
          onIonChange={(e) => setNote(e.detail.value ?? '')}
        />
      </IonItem>

      <IonGrid className="ion-padding-top">
        <IonRow className="ion-align-items-center ion-justify-content-between">
          <IonCol size="6">
            <IonButton
              expand="block"
              className="success"
              shape="round"
              size="default"
              onClick={() => onApprove(note || undefined)}
            >
              <IonIcon slot="start" icon={checkmarkCircle} />
              Approve
            </IonButton>
          </IonCol>
          <IonCol size="6">
            <IonButton
              expand="block"
              color="danger"
              shape="round"
              fill="outline"
              onClick={() => onReject(note || undefined)}
            >
              <IonIcon slot="start" icon={closeCircle} />
              Reject
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  )
}
