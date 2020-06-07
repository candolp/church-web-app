import React from "react";
import "./style.css";

function AddMember() {
  // const show = this.props.showModal ? "showModal" : "closeModal"

  return (
    <div>
      <div id="my-modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Register Member</h2>
          </div>
          <div class="modal-body">
            <div class="login-box">
              {/* <img
                class="avatar"
                src={require("..//../Asseets/images/avatar.png")}
                alt="logo"
              /> */}
              {/* <h1>Login Here</h1> */}
              <form>
                {/* <p>Username</p> */}
                <input type="text" placeholder="Fullname" />
                {/* <p>Password</p> */}
                <input type="text" placeholder="Contact" />
                <input type="text" placeholder="Language" />
                <input type="text" placeholder="Location" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Gender" />
                <input on type="submit" name="submit" value="Submit" />
                {/* <a href="#">Forget Password</a> */}
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
