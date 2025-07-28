import React from "react";
const button=(props)=>{
    return(
        <div>
            <button type={props.type} id={props.id} onClick={props.OnClick}>
                {props.children}
            </button>

        </div>
    )
}
export default button;