import React from "react";
import "./style.css"

function TopNavBar() {
  return (
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
  );
}

export default TopNavBar;
