import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
    const Backdrop=(props)=>{
        return(
     <div className={classes.backdrop}>

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