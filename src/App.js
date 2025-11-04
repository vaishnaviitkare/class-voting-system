import React, { useState } from "react";
import './App.css';
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
      {formShow && <VoteForm/>}
    </div>
  );
}

export default App;
