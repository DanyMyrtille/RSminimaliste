import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonImg,
  IonIcon,
  IonLabel,
  IonRow,
  IonCol,
  IonButton,
  IonRange,
} from "@ionic/react";
import {
  sunnyOutline,
  contrastOutline,
  thermometerOutline,
  colorWandOutline,
} from "ionicons/icons";

import { useState } from "react";
const CAdd: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("exposure");
  const [value, setValue] = useState(50);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle className="ion-text-center">Make a post</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Photo */}
        <div className="image-container">
          <IonImg src="/public/pic15.jpg" className="post-image" />
        </div>

        {/* Filters */}
        <IonRow className="ion-justify-content-around ion-padding-vertical">
          <IonCol
            size="3"
            className="filter-option"
            onClick={() => setSelectedFilter("exposure")}>
            <IonIcon icon={sunnyOutline} />
            <IonLabel
              color={selectedFilter === "exposure" ? "primary" : "medium"}>
              Exposure
            </IonLabel>
          </IonCol>
          <IonCol
            size="3"
            className="filter-option"
            onClick={() => setSelectedFilter("contrast")}>
            <IonIcon icon={contrastOutline} />
            <IonLabel
              color={selectedFilter === "contrast" ? "primary" : "medium"}>
              Contrast
            </IonLabel>
          </IonCol>
          <IonCol
            size="3"
            className="filter-option"
            onClick={() => setSelectedFilter("warmth")}>
            <IonIcon icon={thermometerOutline} />
            <IonLabel
              color={selectedFilter === "warmth" ? "primary" : "medium"}>
              Warmth
            </IonLabel>
          </IonCol>
          <IonCol
            size="3"
            className="filter-option"
            onClick={() => setSelectedFilter("highlights")}>
            <IonIcon icon={colorWandOutline} />
            <IonLabel
              color={selectedFilter === "highlights" ? "primary" : "medium"}>
              Highlights
            </IonLabel>
          </IonCol>
        </IonRow>

        {/* Slider */}
        <IonRange
          min={0}
          max={100}
          value={value}
          onIonChange={(e) => setValue(e.detail.value as number)}></IonRange>

        {/* Continue button */}
        <IonButton expand="block" className="ion-margin-top" color="primary">
          Continue
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CAdd;
