import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
} from "@ionic/react";
import CInbox from "../components/auth/CInbox";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./Home.css";
const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle class="ion-text-center">Inbox</IonTitle>
        </IonToolbar>
         
      </IonHeader>
      
      <IonContent fullscreen>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CInbox />
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
