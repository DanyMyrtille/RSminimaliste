import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import CLogin from "../components/auth/CLogin";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CLogin />
      </IonContent>
    </IonPage>
  );
};

export default Login;
