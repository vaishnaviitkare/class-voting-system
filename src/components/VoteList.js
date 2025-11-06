import React, { useContext } from "react";
import { VoteContext } from "../contextFiles/VoteContext";
import classes from "./VoteList.module.css";
const VoteList=(props)=>{
    const {votesData,deleteVote}=useContext(VoteContext);
return(
    <div className={classes.list}>
     {
        Object.keys(votesData).map((name)=>(
            <div className={classes.sublist}>
            <h2>{name}</h2>
            <p>Total {votesData[name].length}</p>
            {votesData[name].map((stdName)=>(
                <div>
               <span>{stdName}</span>
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