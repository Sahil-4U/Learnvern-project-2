import React from "react";


const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={props.ref} type={props.type} id={props.id} placeholder={props.label.toLowerCase()} required />
        </div>
    )
}
export default Input;