import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Login.css';
import firebase from '../firebase/firebase';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';


const Login: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await (firebase as any).auth().signInWithEmailAndPassword(email, password);
      // Login successful
      console.log('Login successful');
    } catch (error) {
      // Handle login errors
      console.error('Login error:', error);
    }
  };
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>Email</IonLabel>
          <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />

          <IonLabel>Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />

          <IonButton onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
