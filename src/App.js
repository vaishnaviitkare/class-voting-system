import React, { useContext, useState } from "react";
import {UIContext} from './contextFiles/UI-context';
import { VoteContext } from "./contextFiles/AD-context";
import './App.css';
function App() {
  const {openModal,openForm}=useContext(UIContext);
  const{votesData}=useContext(VoteContext);
  const totalData=Object.values(votesData).reduce((total,arr)=>{
      total=total+arr.length;
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
