import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import { Plugins } from '@capacitor/core';
const { SafeArea } = Plugins;

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  // const [safeArea, setSafeArea] = useState<{ top: number, bottom: number, left: number, right: number }>({ top: 0, bottom: 0, left: 0, right: 0 });

  // useEffect(() => {
  //   const getSafeAreaInsets = async () => {
  //     const { safeArea } = await SafeArea.getSafeAreaInsets();
  //     setSafeArea(safeArea);
  //   };

  //   getSafeAreaInsets();
  // }, []);

  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

  useEffect(() => {
    const calculateStatusBarHeight = () => {
      let calcHeight = 0;

      // Try to get status bar height from visualViewport, fallback to window.innerHeight
      if (window.visualViewport && window.visualViewport.offsetTop !== null) {
        calcHeight = window.visualViewport.offsetTop;
      } else {
        calcHeight = (window.innerHeight - document.documentElement.clientHeight) / 2;
      }

      setStatusBarHeight(calcHeight);
    };

    calculateStatusBarHeight();
  }, []);

  return (
    // <IonApp style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}>
    <IonApp style={{ paddingTop: statusBarHeight }}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/login">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
