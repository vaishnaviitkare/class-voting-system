import { useContext,useMemo } from "react";
import React from "react";
import { VoteContext } from "../contextFiles/VoteContext";
import { UIContext } from "../contextFiles/UIContext";
import classes from "./Header.module.css";
const Header=(props)=>{
    const {openModal}=useContext(UIContext);
    const{votesData}=useContext(VoteContext);
  const totalData=useMemo(()=>Object.values(votesData).reduce((total,arr)=>{
      return total=total+arr.length;
  },0),[votesData])
    return(
       <header className={classes.head}>
        <h1>Class Monitor Vote</h1>
       <div className={classes.rightControls}>
        <h2>Total Votes: {totalData}</h2>
        <button onClick={openModal}>Add New Vote</button>
      </div>
       </header>
    );

}
export default Header;