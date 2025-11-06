import React, { useContext } from "react";
import {UIContext} from './contextFiles/UIContext';
import { VoteContext } from "./contextFiles/VoteContext";
import VoteForm from "./components/VoteForm";
import './App.css';
function App() {
  const {openModal,openForm}=useContext(UIContext);
  const{votesData}=useContext(VoteContext);
  const totalData=Object.values(votesData).reduce((total,arr)=>{
      return total=total+arr.length;
  },0)
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Class Monitor Vote</h1>
      <p>Total Votes:{totalData}</p>
      <button type="button" onClick={openModal}>Add New Vote</button>
      {openForm && <VoteForm/>}
    </div>
  );
}

export default App;
