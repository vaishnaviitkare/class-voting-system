import React, { useContext } from "react";
import {UIContext} from './contextFiles/UIContext';
import { VoteContext } from "./contextFiles/VoteContext";
import VoteForm from "./components/VoteForm";
import './App.css';
import VoteList from "./components/VoteList";
import Header from "./Layout/Header";
function App() {
  const {openModal,openForm}=useContext(UIContext);
  const{votesData}=useContext(VoteContext);
  const totalData=Object.values(votesData).reduce((total,arr)=>{
      return total=total+arr.length;
  },0)
  return (
    <div className="App">
      <Header/>
      <div className="bg-section">
        <div className="vote">
      <h2>Total Votes:{totalData}</h2>
      <button type="button" onClick={openModal}>Add New Vote</button>
      </div>
      {openForm && <VoteForm/>}
      <VoteList/>
      </div>
    </div>
  );
}

export default App;
