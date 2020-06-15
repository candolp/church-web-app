import React, { useState } from "react";
import "./style.css";

function AddMember(props) {
  const show = props.handleShowMember ? "showModal" : "closeModal";

  return (
    <div className="AddContainer">
      <div id="my-modal" class={show}>
        <div class="modal-content">
          <div class="modal-header">
            <span
              class="close"
              onClick={() => {
                props.setShowMember(false);
              }}
            >
              &times;
            </span>
            <h2>Register Member</h2>
          </div>
          <div class="modal-body">
            <div class="login-box">
              <form>
                <input type="text" placeholder="Fullname" />
                <input type="text" placeholder="Contact" />
                <input type="text" placeholder="Language" />
                <input type="text" placeholder="Location" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Gender" />
                <input on type="submit" name="submit" value="Submit" />
              </form>
            </div>
          </div>
          {/* <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddMember;
