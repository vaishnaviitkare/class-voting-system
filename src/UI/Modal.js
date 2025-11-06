import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { UIContext } from "../contextFiles/UIContext";
import classes from "./Modal.module.css";
    const Backdrop=(props)=>{
        const {closeModal}=useContext(UIContext);
        return(
     <div className={classes.backdrop} onClick={closeModal}>

     </div>
        )
    }
    const ModalOverlay=(props)=>{
        return(
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
        )
    }
    const element=document.getElementById("overlay");
const Modal=(props)=>{
return(
    <div>
    {ReactDOM.createPortal(<Backdrop/>,element)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,element)}
    </div>
)
}
export default Modal;