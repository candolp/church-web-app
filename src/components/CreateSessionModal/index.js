import React, { useState } from "react";
import "./style.css";

function CreateSessionn(props) {
  const show = props.handleCreateSession ? "showModal" : "closeModal";

  return (
    <div className="AddContainer">
      <div id="my-modal" class={show}>
        <div class="modal-content">
          <div class="modal-header">
            <span
              class="close"
              onClick={() => {
                props.setCreateSession(false);
              }}
            >
              &times;
            </span>
            <h2>Create Session</h2>
          </div>
          <div class="modal-body">
            <div class="login-box">
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Time" />
                <input type="text" placeholder="Language" />
                <input type="text" placeholder="Theme" />
                <input on type="submit" name="submit" value="Create" />
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

export default CreateSessionn;
