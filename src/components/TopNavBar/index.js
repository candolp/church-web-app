import React from "react";
import "./style.css";

function TopNavBar() {
  return (
    <div className='logContainer'>
      <div className="topNavBarr">
        <ul>
          <li>
            <a href="#">Members</a>
          </li>
          <li>
            <a href="#">Session 1</a>
          </li>
          <li>
            <a href="#">Session 2</a>
          </li>
          <li>
            <a href="#">Session 3</a>
          </li>
        </ul>
      </div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search............."
          />
          <button type="submit" className="searchButton">
          <img 
          className='searchIcon'
            src={require("..//../Asseets/images/search.png")}
            alt="logo"
          />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
