import React from "react";
import "./style.css";

function AddMember() {
  const show = this.props.showModal ? "showModal" : "closeModal";

  return (
    <div>
      <div id="my-modal" class={show}>
        <div class="modal-content">
          <div class="modal-header">
            <span
              class="close"
              onClick={() => {
                // this.props.setShowDialog(false);
              }}
            >
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div class="modal-body">
            <p>This is my modal</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repellendus nisi, sunt consectetur ipsa velit repudiandae aperiam
              modi quisquam nihil nam asperiores doloremque mollitia dolor
              deleniti quibusdam nemo commodi ab.
            </p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
