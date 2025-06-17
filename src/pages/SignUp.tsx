import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import CSignUp from "../components/auth/CSignUp";

const SignUp: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          {/* <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar> */}
        </IonHeader>
        <CSignUp />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
