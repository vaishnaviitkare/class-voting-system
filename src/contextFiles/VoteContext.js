import {useState } from "react";
import React from "react";
export const VoteContext=React.createContext();
export const ADProvider=(props)=>{
const [votesData,setVotesData]=useState({
Suresh:[],
deepak:[],
Abhi:[],
});
const addVote=(stdName,monitorName)=>{
setVotesData((prev)=>({
...prev,
[monitorName]:[...prev[monitorName],stdName],
}))
};
const deleteVote=(monitorName,stdName)=>{
  setVotesData((prev)=>({
     ...prev,
     [monitorName]:prev[monitorName].filter((name)=>name!==stdName),
  }))
};

return(
<VoteContext.Provider value={{votesData,addVote,deleteVote}}>
{props.children}
</VoteContext.Provider>
)
}
