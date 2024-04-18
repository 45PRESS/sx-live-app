import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import IframeContainer from '../components/IframeContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IframeContainer
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
