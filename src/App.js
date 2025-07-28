import React, { useState } from "react";
import './App.css';
import Vote from "./components/Vote";
import TotalVotes from "./components/TotalVotes";
function App() {
  const[formShow,showFormHandler]=useState(false);
  const addHandler=(event)=>{
     showFormHandler(true);
  }
  return (
    <div className="App">
      <div>
        <h1 style={{textAlign:'center'}}>Class Monitor Vote</h1>
      </div>
      <TotalVotes/>
      <button type="button" onClick={addHandler}>Add New Vote</button>
      {formShow && <Vote/>}
    </div>
  );
}

export default App;
