import { IonList } from '@ionic/react'
import { useStore } from '../lib/store'
import RequestForm from '../components/timeoff/RequestForm'
import RequestCard from '../components/timeoff/RequestCard'
import { TimeOffRequest } from '../lib/types'

export default function EmployeePage() {
  const { requests, dispatch } = useStore()

  function add(req: TimeOffRequest) {
    dispatch({ type: 'add', payload: req })
  }

  return (
    <>
      <h2 className="section-title">Request Time Off</h2>
      <RequestForm onSubmit={add} />
      <IonList inset>
        {requests.map(r => <RequestCard key={r.id} req={r} />)}
      </IonList>
    </>
  )
}
