import React, {Component} from "react";
import "./style.css";

import 'primeflex/primeflex.css';
import {AuthContext} from "../../context/AuthContext";
import {ListBox} from "primereact/listbox";
import {MultiSelect} from 'primereact/multiselect';
import Login from "../../Pages/login";
import {Lightbox} from "primereact/lightbox";
import {Dropdown} from "primereact/dropdown";
import {InputSwitch} from "primereact/inputswitch";
import {Checkbox} from "primereact/checkbox";
import {InputText} from "primereact/inputtext";

class  AddMember extends  Component {
  constructor(props) {
    super();

    this.state = {
      selectedCities: null,
      selectedLanguage: null,
      selectedFamilyRole: null,
      isFamilyHead:false,
      headFamilyNumber: '',
      selectedGender: {name: 'Feale', value: 1},
      genderList: [{name: 'Male', value: 0}, {name: 'Female', value:1}]
    };


  }

  loadAllLanguage(data){
    // let [userData, setUserData] = this.context;
    // setUserData(prevState =>{console.log(prevState)});
    console.log(data);
    alert(JSON.stringify(data));
    // this.setState(prev =>{prev.systemLanguages = userData.systemLanguages});
  }


  // const show = this.props.showModal ? "showModal" : "closeModal"
  render() {

    return (
        <AuthContext.Consumer>
          {([userData, setUserData]) => (
        <div>
          <div id="my-modal">
            <div className="modal-content">
              <div className="modal-header">
                <span className="close">&times;</span>
                <h2>Register Member</h2>
              </div>
              <div className="modal-body">
                <div className="login-box">
                  {/* <img
                class="avatar"
                src={require("..//../Asseets/images/avatar.png")}
                alt="logo"
              /> */}
                  {/* <h1>Login Here</h1> */}
                  <form>
                    {/* <p>Username</p> */}
                    <input type="text" placeholder="Fullname"/>
                    {/* <p>Password</p> */}
                    <input type="text" placeholder="Contact"/>
                    <input type="text" placeholder="Location"/>
                    <input type="text" placeholder="Age"/>
                    <label htmlFor="gender-select" className="badge-light"> Select Gender</label>
                    <ListBox id="gender-select" value={this.state.selectedGender} options={this.state.genderList}  onChange={(e) => this.setState({selectedGender: e.value})} optionLabel="name"/><br/>
                    <label htmlFor="lang-select" className="badge-light"> Select language</label> <br/>
                    <MultiSelect id="lang-select" value={this.state.selectedLanguage} options={userData.systemLanguages}  onChange={(e) => this.setState({selectedLanguage: e.value})} optionLabel="name"/><br/>
                    <label htmlFor="family-select" className="badge-light">Role in Family</label> <br/>
                    <Dropdown id="family-select" value={this.state.selectedFamilyRole} options={userData.familyRoles}  onChange={(e) => this.setState({selectedFamilyRole: e.value})} optionLabel="name"/><br/>
                    <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={this.state.isFamilyHead} onChange={(e) => {
                                  this.setState({
                                    isFamilyHead: !this.state.isFamilyHead});
                                this.setState({headFamilyNumber: this.state.isFamilyHead ? userData.userLogin.phone: ''})
                                }} />
                            </span>
                      <input type="text" placeholder="check the the box if you're the family head" value={this.state.headFamilyNumber} disabled={this.state.isFamilyHead}/>
                    </div>
                    <input type="submit" name="submit" value="Submit"/>
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

          )}
        </AuthContext.Consumer>
    );
  }
}

export default AddMember;
