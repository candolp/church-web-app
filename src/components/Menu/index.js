import React, { useState } from "react";
import MenuCard from "./../MenuCard/index";
import "./style.css";
import AddMember from "../AddMemberModal/index";
import { Link } from "react-router-dom";
import CreateSessionn from "../CreateSessionModal/index";

function Menu() {
  const [showMember, setShowMember] = useState(false);
  const [showCreateSession, setCreateSession] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function handleShowMember(value) {
    setShowMember(value);
  }

  function handleCreateSession(value) {
    setCreateSession(value);
  }

  function handleShowButton(value) {
    setShowButton(value);
  }

  
  function CreateSession() {
    if (showButton === "CreateSession") {
      return "btn";
    } else {
      return "btn_cs active";
    }
  }

  // function Sessions() {
  //   if (showButton === "Sessions") {
  //     return "btn_cs active";
  //   } else {
  //     return "btn_cs";
  //   }
  // }

  return (
    <div className="container">
      <AddMember
        setShowMember={handleShowMember}
        handleShowMember={showMember}
      />
      <CreateSessionn
        setCreateSession={handleCreateSession}
        handleCreateSession={showCreateSession} 
      />
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
      {showButton ? (
        <button
          className={CreateSession()}
          onClick={() => {
            handleShowMember(true);
          }}
          name="Members"
          image={require("..//../Asseets/images/Icon ionic-ios-people.png")}
        >
          Register Member
          <span>
            <img
              className="addIcon"
              src={require("..//../Asseets/images/plusIcon.png")}
              alt="logo"
            />
          </span>
        </button>
      ) : (
        <button
          className={CreateSession()}
          onClick={() => {
            handleCreateSession(true);
          }}
          name="Members"
          image={require("..//../Asseets/images/Icon ionic-ios-people.png")}
        >
          Create Session
          <span>
            <img
              className="addIcon"
              src={require("..//../Asseets/images/plusIcon.png")}
              alt="logo"
            />
          </span>
        </button>
      )}
      <div className="middle">
        <div>
          <Link to="/ChurchInfo">
            <MenuCard
              name="Church Info"
              image={require("..//../Asseets/images/Icon awesome-church.png")}
            />
          </Link>
        </div>
        <div>
          <Link to="/Members">
            <MenuCard
              name="CreateSession"
              onClick={() => {
                handleShowButton(true);
              }}
              name="Members"
              image={require("..//../Asseets/images/Icon ionic-ios-people.png")}
            />
          </Link>
        </div>
        <div>
          <Link to="/Sessions">
            <MenuCard
              name="Sessions"
              onClick={() => {
                handleShowButton(false);
              }}
              image={require("..//../Asseets/images/sessionsIcon.png")}
            />
          </Link>
        </div>
      </div>

      <div className="bottom">
        <div>
          <Link to="/Settings">
            <MenuCard
              name="settings"
              image={require("..//../Asseets/images/Icon feather-settings.png")}
            />
          </Link>
        </div>
        <div>
          <Link to="/Logout">
            <MenuCard
              name="logout"
              image={require("..//../Asseets/images/Icon feather-power.png")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
