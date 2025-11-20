import {useState,useEffect } from "react";
import React from "react";
export const VoteContext=React.createContext();
export const ADProvider = (props) => {
  const defaultData = {
    Suresh: [],
    Abhijeet: [],
    Ishan: [],
  };

  const [votesData, setVotesData] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("votesData"));
    return stored ? (stored) : defaultData;
  });


  useEffect(() => {
    localStorage.setItem("votesData", JSON.stringify(votesData));
  }, [votesData]);

  const addVote = (stdName, monitorName) => {
    setVotesData((prev) => ({
      ...prev,
      [monitorName]: [...prev[monitorName], stdName],
    }));
  };

  const deleteVote = (monitorName, stdName) => {
    setVotesData((prev) => ({
      ...prev,
      [monitorName]: prev[monitorName].filter((name) => name !== stdName),
    }));
  };

  return (
    <VoteContext.Provider value={{ votesData, addVote, deleteVote }}>
      {props.children}
    </VoteContext.Provider>
  );
};