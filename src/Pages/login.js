import React, { Component } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from "firebase";

import "../Asseets/styles/login.css";
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';

// const Login = () => {
//   return (
//     <div className="wrapper">
//       <div className="p-fluid loginForm">
//         <div className="p-field p-float-label">
//           <InputText id="number" type="text" placeholder="Number" />
//         </div>
//         <div className="p-field">
//           <InputText id="passwword" type="text" placeholder="Password" />
//         </div>
//       </div>
//     </div>
//   );
// };
class Login extends Component {
    state = {
        isSignedIn: false // Local signed-in state.
      };

      uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          // Avoid redirects after sign-in.
          signInSuccessWithAuthResult: () => false
        }
      };
    
      // Listen to the Firebase Auth state and set the local state.
      componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
      }
      
      // Make sure we un-register Firebase observers when the component unmounts.
      componentWillUnmount() {
        this.unregisterAuthObserver();
      }
    render() {
        if (!this.state.isSignedIn) {
          return (
            <div>
              <h1>My App</h1>
              <p>Please sign-in:</p>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          );
        }
        return (
          <div>
            <h1>My App</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
          </div>
        );
      }
    
}
 
export default Login;

