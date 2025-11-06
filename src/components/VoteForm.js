import {React,useContext,useState} from "react";
import classes from "./VoteForm.module.css"
import Modal from "../UI/Modal";
import { VoteContext } from "../contextFiles/VoteContext";
import { UIContext } from "../contextFiles/UIContext";
const VoteForm=(props)=>{
    const[votername,setName]=useState("");
    const[selectvalue,setSelectValue]=useState("Suresh");
    const{addVote}=useContext(VoteContext);
    const{closeModal}=useContext(UIContext);
   const nameHandler=(event)=>{
    setName(event.target.value);
   }
   const selectHandler=(event)=>{
     setSelectValue(event.target.value);
   }
   const submitHandler=(event)=>{
  event.preventDefault();
  addVote(votername,selectvalue);
  setName("");
  closeModal();
   }
    return(
       <Modal>
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="name">Student Name:</label>
            <input id="name" type="text" value={votername} onChange={nameHandler}/>
            &nbsp;&nbsp;
            <label htmlFor="name">Student Name:</label>
               <select
               id="selection"
               value={selectvalue}
               onChange={selectHandler}
               >
               <option value="Suresh">Suresh</option> 
               <option value="Abhijeet">Abhijeet</option> 
               <option value="Ishan">Ishan</option> 
               </select> 
            &nbsp;
            <button type="submit">Vote</button>
            &nbsp;
            <button type="cancel">✖</button>
        </form>    
        </Modal>
    )
}
export default VoteForm;