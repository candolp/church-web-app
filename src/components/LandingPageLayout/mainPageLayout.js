import React, { Component} from "react";
import "./layout.css"
import * as firebase from "firebase";


class MainPageLayout extends Component{

    constructor() {
        super();
        this.state = {
            firebaseUserPath : firebase.database().ref('/users/'),
        }
    }




    render() {

        <div>


        </div>
    }
}
