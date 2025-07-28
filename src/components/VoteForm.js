import {React,useState} from "react";
import Button from "./../UI/Button";
import classes from "./VoteForm.module.css"
import Modal from "../UI/Modal";
const VoteForm=(props)=>{
    const[name,setName]=useState("");
   const nameHandler=(event)=>{
    setName(event.target.value);
   }
   const submitHandler=(event)=>{
  event.preventDefault();
   }
    return(
       <Modal>
        <form onSubmit={submitHandler} className={classes.form}>
            <span>
            <label htmlFor="name">Student Name:</label>
            <input id="name" type="text"onChange={nameHandler}></input>
            </span>
            <span>
               <label htmlFor="name">Student Name:</label>
               <select
               id="selection"
               >
               <option value="Suresh">Suresh</option> 
               <option value="Abhijeet">Abhijeet</option> 
               <option value="Ishan">Ishan</option> 
               </select> 
            </span>
            <span>
            <button type="submit">Vote</button>
            </span>
            <span>
            <button type="cancel">✖</button>
            </span>
            </form>
            
        </Modal>
    )
}
export default VoteForm;