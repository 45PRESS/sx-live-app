import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import IframeContainer from '../components/IframeContainer';
import { chevronDownCircleOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const [refresh, setRefresh] = useState(0);

  function handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      setRefresh((prevCount) => prevCount + 1); // Incrementing refresh count to trigger rerender
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonPage className={'main-wrapper'}>
      <IonContent fullscreen scrollY={false}>
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} mode='md' onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          ></IonRefresherContent>
        </IonRefresher>
        <IframeContainer
          key={refresh} // Re-render the IframeContainer whenever refresh changes
          src="https://storage.googleapis.com/supercross-live-timing-leaderboard-dev/index.html"
          title="Supercross Live Timing Leaderboard"
          width="100%"
          height="100%"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
