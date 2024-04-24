import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import IframeContainer from '../components/IframeContainer';

const Home: React.FC = () => {
  return (
    <IonPage className='main-wrapper'>
      <IonContent fullscreen>
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
