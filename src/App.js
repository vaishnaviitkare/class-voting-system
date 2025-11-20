import React, { useContext } from "react";
import {UIContext} from './contextFiles/UIContext';
import VoteForm from "./components/VoteForm";
import './App.css';
import VoteList from "./components/VoteList";
import Header from "./Layout/Header";
function App() {
  const {openForm}=useContext(UIContext);
  return (
    <div className="App">
      <Header/>
      <div className="bg-section">
      {openForm && <VoteForm/>}
      <VoteList/>
      </div>
    </div>
  );
}

export default App;
