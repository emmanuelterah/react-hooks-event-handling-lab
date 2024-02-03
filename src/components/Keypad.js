// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(e) {
        e.preventDefault();
        console.log("Entering password...")
    }

    return (
        <div>
            <input onChange={handleChange}type="password"></input>
        </div>
    )
}

export default Keypad;