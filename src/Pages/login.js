import React, { Component} from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from "firebase";
import {AuthContext} from "../context/AuthContext";

import "../Asseets/styles/login.css";
import "./style.css"
import {Messages} from 'primereact/messages';
import {Message} from 'primereact/message';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import 'primeflex/primeflex.css';
import AddMember from "../components/Modal";

class Login extends Component {
    static contextType = AuthContext;

     constructor() {
         super();
         this.state = {
             firebaseUserPath : firebase.database().ref('/users/'),
             doneSetup: false,
             isSignIn: false,
         };
         this.showSuccess = this.showSuccess.bind(this);
         this.clear = this.clear.bind(this);
         this.showInfo = this.showInfo.bind(this);
         this.showWarn = this.showWarn.bind(this);
     }


      uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          // Avoid redirects after sign-in.
          signInSuccessWithAuthResult: () => false
        }
      };


    showSuccess(message) {
        this.messages.show({severity: 'success', summary: message, detail: 'Order submitted'});
    }

    showInfo(message) {
        this.messages.show({severity: 'info', summary: message, detail: 'PrimeReact rocks'});
    }

    showWarn(message) {
        this.messages.show({severity: 'warn', summary: message, detail: 'There are unsaved changes'});
    }
    clear() {
        this.messages.clear();
    }


     checkUserRegistration(userId, user){
         let [userData, setUserData] = this.context;
         this.setState( { isSignIn: true});
         this.showSuccess(`${user.phoneNumber} has successfully signed up. Kindly Register`);
            this.state.firebaseUserPath.child(`${userId}/userLogin`).ref.once('value', (userLoginSnapshot =>{
                if (userLoginSnapshot.val() != null) {
                    setUserData((prevState) => prevState.userLogin = userLoginSnapshot.val());
                    this.state.firebaseUserPath.child(`${userId}/userDetails`).once('value', userDetailSnapShot =>{
                        if (userDetailSnapShot.val() != null){
                            setUserData((prevState) => prevState.userDeDetails = userDetailSnapShot.val());
                            if (userDetailSnapShot.child('branch').val() === userData.globalConstants.defaultChurch){
                                this.setState({doneSetup : false});
                            }else{
                                this.setState({doneSetup : true});
                            }
                        }else {
                            this.setState({doneSetup : false});
                        }
                    })

                }else{
                    setUserData({
                       userLogin : {
                           uid : userId,
                            phone : user.phoneNumber,
                            lastLogin : new Date().getMilliseconds(),
                            password : userData.globalConstants.defaultPassword,
                            userType : userData.globalConstants.defaultUser,
                            photoURL: `${userId}.png`
                        }
                    });
                    this.showInfo(JSON.stringify(userData.userLogin));
                    this.state.firebaseUserPath.child(`${userId}/userLogin`).ref.set(userData.userLogin, userLoginSnapshot =>{
                        console.log(userLoginSnapshot);
                    }).then(err =>{
                        this.showWarn("Loading failed, check internet connectivity and try again");
                        console.log(err)
                    })

                }
            })).then(err=>
                console.log(err)
            )
     }


      // Listen to the Firebase Auth state and set the local state.
      componentDidMount() {

        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
                console.log(user);
                if (user){
                    this.checkUserRegistration(user.uid, user);
                    this.showInfo(JSON.stringify(user));
                    // Todo create a better login
                 console.log(user);
                }else{
                    //todo make sure you do something better with this
                    alert('LOGIN Error\n Try again')
                }
            }
        );
      }




      // Make sure we un-register Firebase observers when the component unmounts.
      componentWillUnmount() {
        this.unregisterAuthObserver();
      }
    render() {
        const [userData, setUserData] = this.context;
        if (!this.state.isSignIn) {
          return (
              <div>
                  <Messages ref={(el) => this.messages = el} />
              <div className="wrapper">
                  <div className="Authentication">
                      <div>
                          <h1>My App</h1>
                          <p>Please sign-in:</p>
                          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                      </div>
                  </div>

              </div>
              </div>

          );
        }else {
            return (
                    <AddMember/>
            );
        }
      }



}
 
export default Login;

