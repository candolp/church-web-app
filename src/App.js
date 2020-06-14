import React, { useState } from "react";
import "./App.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "firebase/auth";
import Login from './Pages/login';
import {AuthProvider} from "./context/AuthContext";

function App() {
  // const [showDialog, setShowDialog] = useState(false);

  // function showModal(value) {
  //   setShowDialog(value);
  // }

  return (
<AuthProvider>
    <div className="App">
      <Login/>
    </div>
</AuthProvider>
  );
}

export default App;
