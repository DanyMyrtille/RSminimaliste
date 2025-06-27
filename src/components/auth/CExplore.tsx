import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonIcon,
  IonButtons,
  IonButton,
} from "@ionic/react";

import {
  homeOutline,
  search,
  addCircleOutline,
  chatboxOutline,
  personOutline,
} from "ionicons/icons";

const CExplore: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Explore</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding">
        {/* Searchbar */}
        <IonSearchbar placeholder="Search here" />

        {/* Tabs */}
        <IonSegment value="top" scrollable>
          <IonSegmentButton value="top">
            <IonLabel>Top</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="users">
            <IonLabel>Users</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hashtags">
            <IonLabel>Hashtags</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="posts">
            <IonLabel>Posts</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="events">
            <IonLabel>Events</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Image Grid */}
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonImg src="/public/pic14.jpg" />
            </IonCol>
            <IonCol size="6">
              <IonImg src="/public/pic12.jpg" />
            </IonCol>
          </IonRow>

          {/* Quote card */}
          <IonRow>
            <IonCol size="12">
              <IonCard>
                <IonCardContent>
                  <strong>daily.quotes333</strong>
                  <p>
                    "When life gives you lemons, don’t make lemonade. Make a
                    lemon cake – it will make you happier."
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* More images */}
          <IonRow>
            <IonCol size="6">
              <IonImg src="/public/pic13.jpg" />
            </IonCol>
            <IonCol size="6">
              <IonImg src="/public/pic11.jpg" />
            </IonCol>
          </IonRow>
        </IonGrid>
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
            <IonIcon icon={chatboxOutline} />
          </IonButton>
          <IonButton href="/account">
            <IonIcon icon={personOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonPage>
  );
};

export default CExplore;
