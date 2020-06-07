import React, { useState } from "react";
import MenuCard from "./../MenuCard/index";
import "./style.css";

function Menu() {
  
  return (
    <div className="container">
      <div className="churchLogo">
        <div className="churchLogoImage">
          <img
            src={require("..//../Asseets/images/Icon awesome-church.png")}
            alt="logo"
          />
        </div>

        <h4>Pleasant Palace Church</h4>
        <h5>Your Plan: Basic</h5>
      </div>
      <button className="btn" onClick={()=>{this.props.showModal(true)}}>
        Register Member
        <span>
          <img
            className="addIcon"
            src={require("..//../Asseets/images/plusIcon.png")}
            alt="logo"
          />
        </span>
      </button>
      <div className="middle">
        <MenuCard
          name="Church Info"
          image={require("..//../Asseets/images/Icon awesome-church.png")}
        />

        <MenuCard
          name="Members"
          image={require("..//../Asseets/images/Icon ionic-ios-people.png")}
        />

        <MenuCard
          name="Sessions"
          image={require("..//../Asseets/images/sessionsIcon.png")}
        />
      </div>

      <div className="bottom">
        <MenuCard
          name="settings"
          image={require("..//../Asseets/images/Icon feather-settings.png")}
        />

        <MenuCard
          name="logout"
          image={require("..//../Asseets/images/Icon feather-power.png")}
        />
      </div>
    </div>
  );
}

export default Menu;
