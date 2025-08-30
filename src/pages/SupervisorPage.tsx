import { IonList } from '@ionic/react'
import { useStore } from '../lib/store'
import RequestCard from '../components/timeoff/RequestCard'
import ApproveRejectBar from '../components/timeoff/ApproveRejectBar'

export default function SupervisorPage() {
  const { requests, dispatch } = useStore()

  return (
    <>
      <h2 className="section-title">Review Requests</h2>
      <IonList inset>
        {requests.map(r => (
          <div key={r.id}>
            <RequestCard req={r} />
            {r.status === 'Pending' && (
              <ApproveRejectBar
                onApprove={(note) => dispatch({ type: 'approve', id: r.id, note })}
                onReject={(note) => dispatch({ type: 'reject', id: r.id, note })}
              />
            )}
          </div>
        ))}
      </IonList>
    </>
  )
}
