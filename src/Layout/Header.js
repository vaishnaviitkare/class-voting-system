import React from "react";
import logo from "../assets/class.avif"
import classes from "./Header.module.css";
const Header=(props)=>{
    return(
        <React.Fragment>
       <header className={classes.head}>
        <h1>Class Monitor Vote</h1>
        </header>
       </React.Fragment>
    );

}
export default Header;