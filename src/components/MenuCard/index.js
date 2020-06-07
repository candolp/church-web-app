import React, { Component } from "react";
import "./style.css";

class MenuCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="logo" src={this.props.image} alt="logo" />
        <div className="floatText">{this.props.name}</div>
      </div>
    );
  }
}

export default MenuCard;
