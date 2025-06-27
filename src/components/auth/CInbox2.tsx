import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonButton, IonIcon, IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet, IonImg } from '@ionic/react';
import { add, chatbubbleEllipses, call,videocam, person } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import {ellipsisHorizontal} from 'ionicons/icons';
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
import './Inbox.css';

const users = [
  { id: 1, username: 'mariiio5', img: "/public/Pic1.jpg" , online: true },
  { id: 2, username: 'lea.98', img: "/public/pic3.jpg", online: false },
  { id: 3, username: 'loco_cafe', img: "/public/pic2.jpg", online: true },
  { id: 4, username: 'gabriel.g', img: "/public/pic4.jpg", online: false }
];
import { createOutline } from "ionicons/icons";
const chatList = [
  {
    user: 'mariiio5',
    message: 'You owe me money! Respond!',
    time: 'Just now',
    img: "/public/Pic1.jpg"
  },
  {
    user: 'lea.98',
    message: "You: I'm afraid he will sue me for that but wh...",
    time: '12 min.',
    img: "/public/pic3.jpg"
  },
  {
    user: 'gabriel.g',
    message: "Hello, can you answer? What's wrong with",
    time: '1d.',
    img: "/public/pic4.jpg"
  }
];


const Inbox2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
          <IonButtons slot="end">
            <IonButton><IonIcon icon={person} /></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      

      <IonContent className="inbox-content">
        <IonSearchbar placeholder="Search here" />

        <div className="user-stories">
          <div className="story new">
            <IonButton shape="round" fill="clear">
              <IonIcon icon={add} />
            </IonButton>
            <span>New</span>
          </div>
          {users.map(user => (
            <div key={user.id} className="story">
              <div className={`avatar ${user.online ? 'online' : ''}`}> 
                <img src={user.img} alt={user.username} />
              </div>
              <span>{user.username}</span>
            </div>
          ))}
        </div>

        <div className="tab-buttons">
          <button className="tab active"> <a href='/inbox'>Messages</a></button>
          <button className="tab"> Calls </button>
        </div>

        {chatList.map((chat, index) => (
          <div key={index} className="chat-item">
            <img src={chat.img} alt={chat.user} className="chat-avatar" />
            <div className="chat-info">
              <div className="chat-top">
                <span className="chat-user">{chat.user}</span>
                <span className="chat-time">{chat.time}</span>
              </div>
              <div className="chat-message">{chat.message}</div>
            </div>
            <div className="chat-icon">
              <IonIcon icon={call} />
                  <IonIcon icon={videocam} />
            </div>
          </div>
        ))}
      
      </IonContent>

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

export default Inbox2;
