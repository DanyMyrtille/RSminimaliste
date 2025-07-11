import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import Add from "./pages/Add";
import Inbox from "./pages/Inbox";
import Inbox2 from "./pages/Inbox2";
import Account from "./pages/Account";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/add" component={Add} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/inbox2" component={Inbox2} />
        <Route path="/account" component={Account} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
