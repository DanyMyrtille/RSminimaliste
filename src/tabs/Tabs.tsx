// src/tabs/Tabs.tsx
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { home, person } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/home" component={Home} />
      <Redirect exact from="/" to="/home" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={person} />
        <IonLabel>Accueil</IonLabel>
      </IonTabButton>
      <IonTabButton tab="login" href="/login">
        <IonIcon icon={person} />
        <IonLabel>Profil</IonLabel>
      </IonTabButton>
      <IonTabButton tab="inbox" href="/inbox">
        <IonIcon icon={person} />
        <IonLabel>Inbox</IonLabel>
      </IonTabButton>
      <IonTabButton tab="account" href="/account">
        <IonIcon icon={person} />
        <IonLabel>Account</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
