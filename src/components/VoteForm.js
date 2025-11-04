import {React,useState} from "react";
import classes from "./VoteForm.module.css"
import Modal from "../UI/Modal";
const VoteForm=(props)=>{
    const[votername,setName]=useState("");
    const[selectvalue,setSelectValue]=useState(Suresh);
   const nameHandler=(event)=>{
    setName(event.target.value);
   }
   const selectHandler=(event)=>{
     setSelectV
     alue(event.target.value);
   }
   const submitHandler=(event)=>{
  event.preventDefault();
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