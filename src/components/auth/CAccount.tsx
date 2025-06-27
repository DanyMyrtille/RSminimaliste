import {
  IonContent,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonPage,
  IonTitle,
  IonItem,
  IonToolbar,
  IonAvatar,
  IonLabel,
  IonText,
  IonIcon,
  IonImg,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  addCircleOutline,
  homeOutline,
  personOutline,
  notificationsOutline,
  heart,
  chatbox,
  menu,
  menuOutline,
  search,
} from "ionicons/icons";
import "../../pages/Home.css";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const CAccount: React.FC = () => {
  const stories = [
    { username: "mariii05", image: "/public/Pic1.jpg" },
    { username: "lea.98", image: "/public/pic3.jpg" },
    { username: "loco_cafe", image: "/public/pic2.jpg" },
    { username: "gabriel.g", image: "/public/pic4.jpg" },
  ];

  const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Connected</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
    </Box>
      </IonContent>

      {/* Bottom Navigation */}
      <IonToolbar>
              <IonButtons className="ion-justify-content-around">
                <IonButton href="/home">
                  <IonIcon icon={homeOutline} />
                </IonButton>
                <IonButton href="/explore">
                  <IonIcon icon={search} />
                </IonButton>
                <IonButton href="/add">
                  <IonIcon icon={addCircleOutline} />
                </IonButton>
                <IonButton href="/inbox">
                  <IonIcon icon={chatbox} />
                </IonButton>
                <IonButton href="/account">
                  <IonIcon icon={personOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonPage>
  );
};

export default CAccount;
