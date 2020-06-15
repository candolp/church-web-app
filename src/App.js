import React, { useState } from "react";
import "./App.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "./components/header";
import Menu from "./components/Menu/index";
// import AddMember from "./components/Modal";
import Login from "./Pages/login";
import LoginBG from "./Pages/loginBackground/index";
import MemberPage from "./components/MemberPage/index";
import SessionPage from "./components/SessionPage/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TemporaryDrawer from "./components/Drawer/Drawer";

function App() {
  // const [showDialog, setShowDialog] = useState(false);

  // function showModal(value) {
  //   setShowDialog(value);
  // }

  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>

        <div className="sideNavBar">
          <Menu />
        </div>
        <Switch>
          <div className="contentDisplay">
            <Route path="/Sessions">
              <SessionPage />
            </Route>
            <Route path="/Members">
              <MemberPage />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
