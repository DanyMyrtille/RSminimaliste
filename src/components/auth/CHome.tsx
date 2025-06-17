import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
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
} from "ionicons/icons";
import '../../pages/Home.css'

const Home: React.FC = () => {
  const stories = [
    { username: "mariii05", image: "/public/Pic1.jpg" },
    { username: "lea.98", image: "/public/pic3.jpg" },
    { username: "loco_cafe", image: "/public/pic2.jpg" },
    { username: "gabriel.g", image: "/public/pic4.jpg" },
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
        {/* Stories */}
        <IonRow
          className="stories"
          style={{ overflowX: "scroll", flexWrap: "nowrap" }}>
          <IonCol size="auto" className="story">
            <IonAvatar>
              <img src="/public/pic7.jpg" alt="You" />
            </IonAvatar>
            <IonText>You</IonText>
          </IonCol>

          {stories.map((story, index) => (
            <IonCol size="auto" className="story" key={index}>
              <IonAvatar>
                <img src={story.image} alt={story.username} />
              </IonAvatar>
              <IonText>{story.username}</IonText>
            </IonCol>
          ))}
        </IonRow>

        {/* Post */}
        <div className="post">
          <IonRow className="post-header">
            <IonAvatar>
              <img src="/public/pic6.jpg" />
            </IonAvatar>
            <IonLabel>
              <h2>party_arty_dk</h2>
            </IonLabel>
          </IonRow>

          <IonImg src="/public/pic5.jpg" className="post-img" />

          <IonText className="post-caption">
            <p>
              Yesterday I've painted this picture to express my gratitude
              towards people... always like my posts.
            </p>
          </IonText>
        </div>
      </IonContent>

      {/* Bottom Navigation */}
      <IonToolbar>
        <IonButtons className="ion-justify-content-around">
          <IonButton>
            <IonIcon icon={homeOutline} />
          </IonButton>
          <IonButton>
            <IonIcon icon={addCircleOutline} />
          </IonButton>
          <IonButton>
            <IonIcon icon={personOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonPage>
  );
};

export default Home;
