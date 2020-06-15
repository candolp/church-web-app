import React from "react";
import SessionTable from "./SessionTable";
import TopNavBar from "./../TopNavBar/index";
import "./style.css";

function SessionPage() {
  return (
    <div>
      <div className="topNavBar">
        <TopNavBar />
      </div>
      <div className="tableHead">
        <div className="SessionThead">
          <tr>
            <th className="memberr">Session Name </th>
            <th className="contactt">Leader</th>
            <th className="sessionn">Session</th>
            <th className="timee">Time</th>
            <th className="scc">Session Code</th>
            <th className="adultss">Adults</th>
            <th className="childrenn">Children</th>
          </tr>
        </div>
      </div>
      <div className="tbl">
        <SessionTable />
      </div>
    </div>
  );
}

export default SessionPage;
