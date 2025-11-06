import React, { useContext } from "react";
import { VoteContext } from "../contextFiles/VoteContext";
const VoteList=(props)=>{
    const {votesData,deleteVote}=useContext(VoteContext);
return(
    <div>
     {
        Object.keys(votesData).map((name)=>(
            <div>
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