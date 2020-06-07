import React, {useState} from "react";
import "./App.css";
import Header from "./components/header";
import TopNavBar from "./components/TopNavBar/index";
import Menu from "./components/Menu/index";
import Table from "./components/Table/index";
import Thead from './components/TableHeader/index';
import AddMember from "./components/Modal";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  function showModal(value) {
    setShowDialog(value);}
  
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="sideNavBar">
        <Menu />
      </div>
      <div className="topNavBar">
        <TopNavBar />
      </div>  

      <div className='tableHead'>
        <Thead/>
      </div>
      <div className="contentDisplay">       
        <Table />
        <AddMember setShowDialog={showModal} showModal={showDialog}/>
      </div>
    </div>
  );
}

export default App;
