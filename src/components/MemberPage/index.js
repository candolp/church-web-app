import React from "react";
import "./style.css";
import TopNavBar from "../TopNavBar/index";
import Thead from "../TableHeader/index";
import Table from "./MemberTable";
function MemberPage() {
  return (
    <div>
      <div className="topNavBar">
        <TopNavBar/>
      </div>

      <div className="tableHead">
        <Thead
          Mb="member"
          Ct="Contact"
          Ss="Session"
          Tm="Time"
          Ssc="Session Code"
          Ad="Adults"
          Cd="Children"
        />
      </div>
      <div className="tbl">
        <Table />
      </div>
    </div>
  );
}

export default MemberPage;
