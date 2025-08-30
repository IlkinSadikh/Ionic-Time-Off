import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './styles/theme.css'

import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useEffect, useState } from 'react'
import { StoreProvider } from './lib/store'
import { demoData } from './lib/mock'
import RoleToggle, { Role } from './components/ui/RoleToggle'
import EmployeePage from './pages/EmployeePage'
import SupervisorPage from './pages/SupervisorPage'

export default function App() {
  const [role, setRole] = useState<Role>('employee')

  // Seed only once when storage empty
  useEffect(() => {
    const key = 'timeoff:requests:v1'
    const raw = localStorage.getItem(key)
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(demoData()))
    }
  }, [])

  return (
    <IonApp>
      <StoreProvider>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle className="text-center">Ionic Time Off</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className="container">
              <div className="p-4">
                <RoleToggle role={role} onChange={setRole} />
              </div>

              {role === 'employee' ? <EmployeePage /> : <SupervisorPage />}
            </div>
          </IonContent>

        </IonPage>
      </StoreProvider>
    </IonApp>
  )
}
