import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: "AIzaSyAfHQeUySANTW8QYfbW0xUNQ1JsE8cdeT4",
  authDomain: "ghana-church-app.firebaseapp.com",
  databaseURL: "https://ghana-church-app.firebaseio.com",
  projectId: "ghana-church-app",
  storageBucket: "ghana-church-app.appspot.com",
  messagingSenderId: "184463688443",
  appId: "1:184463688443:web:824547e55a7ebdf8e2e65e",
  measurementId: "G-P3K3D07VFS",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
