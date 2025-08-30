// Ionic base CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/display.css';
import '../src/styles/theme.css';

import React from 'react';
import { setupIonicReact, IonApp, IonPage, IonContent } from '@ionic/react';

setupIonicReact({ mode: 'ios' });

// Small centered container so cards don’t hug the edges
const containerStyle = {
  maxWidth: '560px',
  margin: '2rem auto',
  padding: '1rem',
};

export const decorators = [
  (Story) => (
    <IonApp>
      <IonPage>
        <IonContent className="ion-padding">
          <div style={containerStyle}>
            <Story />
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  ),
];

export default {
  parameters: {
    layout: 'fullscreen',
  },
};
