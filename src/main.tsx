import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { setupIonicReact } from '@ionic/react'

// Initializing Ionic (IOS look is cleaner for mobile comps)
setupIonicReact({ mode: 'ios' })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
