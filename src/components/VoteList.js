import React, { useContext } from "react";
import { VoteContext } from "../contextFiles/VoteContext";
import classes from "./VoteList.module.css";
const VoteList=(props)=>{
    const {votesData,deleteVote}=useContext(VoteContext);
return(
    <div className={classes.list}>
     {
        Object.keys(votesData).map((name,index)=>(
            <div className={classes.sublist} key={index}>
            <h2>{name}</h2>
            <h3>Total {votesData[name].length}</h3>
            {votesData[name].map((stdName,index)=>(
                <div className={classes.l1} key={index}>
               <span style={{fontWeight:"bold"}}>{stdName}</span>
               &nbsp;
               <button onClick={()=>deleteVote(name,stdName)}>Delete</button>
               </div>
            ))}
            </div>
        ))
     }

    </div>
)
}
export default VoteList;