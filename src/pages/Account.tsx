import React from 'react';
import './Account.css';
import { IonIcon } from '@ionic/react';
import { call, camera, home, person, chatbubble, add } from 'ionicons/icons';
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
//import './Inbox.css';
import { IonToolbar,IonButton,IonButtons } from '@ionic/react';


const Account = () => {
  return (
    <div className="profile-container">
      {/* Entête */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/public/Pic15.jpg" alt="avatar" />
        </div>
        <div className="profile-info">
          <h2>Nara Berry</h2>
          <p>@best_wizard421</p>
          <div className="tags">
            <span>#art</span>
            <span>#music</span>
            <span>#uidesign</span>
          </div>
          <div className="edit-row">
            <input type="text" readOnly value="Edit profile" />
            <IonIcon icon={camera} />
          </div>
          <div className="stats">
            <div><strong>200</strong><br />posts</div>
            <div><strong>25k</strong><br />followers</div>
            <div><strong>500</strong><br />following</div>
          </div>
        </div>
      </div>

      {/* Galerie */}
      <div className="gallery-section">
        <div className="gallery-header">
          <h3>Photos</h3>
          <span>›</span>
        </div>
        <div className="gallery-custom">
        <div className="column tall">
          <img src="/public/Pic13.jpg" alt="1" />
        </div>
          <div className="column split">
          <img src="/public/pic14.jpg" alt="2" />
          <img src="/public/pic11.jpg" alt="3" />
          </div>
        <div className="column split">
          <img src="/public/pic12.jpg" alt="4" />
          <img src="/public/pic10.jpg" alt="3" />
        </div>
          <div className="overlay-number">+49</div>
          
        </div>
      </div>
      
      

      {/* Menu Bas */}
      <div className="bottom-menu">
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
      </div>
    </div>
  );
};

export default Account;
