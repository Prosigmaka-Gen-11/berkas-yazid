import React from "react";

export default function Register(){
    const [text, setText] = React.useState("Your input here");

    function onChangeHandler(event){
        setText(event.target.value)
    }


    return(
        <div className="container my-2 mx-auto p-4 rounded-lg bg-sky-700 flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl">Register</h1>
            <p className="text-white text-sm mb-3">Type something to register it to the screen</p>
            
            <input type="text" onChange={(e) => onChangeHandler(e)} />
            <p className="font-semibold text-white text-md my-3">{text}</p>
        </div>
    )
}