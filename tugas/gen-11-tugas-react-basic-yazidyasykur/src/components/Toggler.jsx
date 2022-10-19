import React from "react";

export default function Toggler(){
    const [value, setValue] = React.useState(false);

    function togglerHandler(){
        setValue(!value);
    }

    return(
        <div className="container my-2 mx-auto p-4 rounded-lg bg-sky-700 flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl">Toggler</h1>
            <p className="mb-3 text-white text-sm">Press button to toggle</p>
            <h1 className="text-2xl text-white font-bold">{value ? "True" : "False"}</h1>
            
            <button className="p-2 mt-4 bg-zinc-300 rounded-lg font-bold" onClick={togglerHandler}>Toggle Value</button>
    
        </div>
    )
}