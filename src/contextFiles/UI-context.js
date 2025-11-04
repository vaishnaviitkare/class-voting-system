import React, { createContext, useState } from "react";
export const UIContext=React.createContext();
const UIProvider=(props)=>{
    const[openForm,setOpenForm]=useState(false);
    const openModal=()=>{
     setOpenForm(true);
    }
    const closeModal=()=>{
        setOpenForm(false);
    }
    return(
        <UIContext.Provider value={{openForm,openModal,closeModal}}>
         {props.children}
        </UIContext.Provider>
    )
}