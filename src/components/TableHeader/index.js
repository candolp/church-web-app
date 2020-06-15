import React from "react";
import "./style.css";

function Thead({ Mb, Ct, Ss, Tm, Ssc, Ad, Cd }) {
  return (
    <div className="tHead">
      <tr>
        <th className="member">{Mb}</th>
        <th className="contact">{Ct}</th>
        <th className="session">{Ss}</th>
        <th className="time">{Tm}</th>
        <th className="sc">{Ssc}</th>
        <th className="adults">{Ad}</th>
        <th className="children">{Cd}</th>
      </tr>
    </div>
  );
}

export default Thead;
