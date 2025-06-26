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
          <IonRow
            className="post-header"
            style={{ alignItems: "center", justifyContent: "space-between" }}>
            <IonCol size="auto">
              <IonAvatar>
                <img src="/public/pic6.jpg" />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonLabel>
                <h2>party_arty_dk</h2>
              </IonLabel>
            </IonCol>
            <IonCol size="auto">
              <IonIcon icon={menu} />
            </IonCol>
          </IonRow>

          <IonImg src="/public/pic5.jpg" className="post-img" />

          <IonText className="post-caption">
            <p>
              Yesterday I've painted this picture to express my gratitude
              towards people... always like my posts.
            </p>

            {/* Comments + Likes */}
            <IonCardHeader className="post-footer">
              <div className="post-footer-left">
                <IonIcon icon={chatbox} />
                <IonText>20 comments</IonText>
              </div>
              <div className="post-footer-right">
                <IonText>You & 300 others</IonText>
                <IonIcon icon={heart} color="danger" />
              </div>
            </IonCardHeader>
          </IonText>
        </div>

        {/* Post1 */}
        <div className="post">
          <IonRow
            className="post-header"
            style={{ alignItems: "center", justifyContent: "space-between" }}>
            <IonCol size="auto">
              <IonAvatar>
                <img src="/public/pic10.jpg" />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonLabel>
                <h2>party_arty_dk</h2>
              </IonLabel>
            </IonCol>
            <IonCol size="auto">
              <IonIcon icon={menu} />
            </IonCol>
          </IonRow>

          <IonText>
            "When life gives you lemons, don't make lemonade. Make a lemon cake
            — it will make you happier."
          </IonText>

          <IonText className="post-caption">
            {/* Comments + Likes */}
            <IonCardHeader className="post-footer">
              <div className="post-footer-left">
                <IonIcon icon={chatbox} />
                <IonText>20 comments</IonText>
              </div>
              <div className="post-footer-right">
                <IonText>You & 300 others</IonText>
                <IonIcon icon={heart} color="danger" />
              </div>
            </IonCardHeader>
          </IonText>
        </div>

        {/*post2*/}
        <div className="post">
          <IonRow
            className="post-header"
            style={{ alignItems: "center", justifyContent: "space-between" }}>
            <IonCol size="auto">
              <IonAvatar>
                <img src="/public/pic9.jpg" />
              </IonAvatar>
            </IonCol>
            <IonCol>
              <IonLabel>
                <NavLink to="/signUp">
                  <h2>party_arty_dk</h2>
                </NavLink>
              </IonLabel>
            </IonCol>
            <IonCol size="auto">
              <IonIcon icon={menu} />
            </IonCol>
          </IonRow>

          <IonImg src="/public/pic8.jpg" className="post-img" />

          <IonText className="post-caption">
            <p>
              Yesterday I've painted this picture to express my gratitude
              towards people... always like my posts.
            </p>

            {/* Comments + Likes */}
            <IonCardHeader className="post-footer">
              <div className="post-footer-left">
                <IonIcon icon={chatbox} />
                <IonText>20 comments</IonText>
              </div>
              <div className="post-footer-right">
                <IonText>You & 300 others</IonText>
                <IonIcon icon={heart} color="danger" />
              </div>
            </IonCardHeader>
          </IonText>
        </div>
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
                <IonButton href="/chat">
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

export default Home;
