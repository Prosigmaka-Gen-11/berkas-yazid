import React from "react";

export default function Counter(){
    const [count, setCount] = React.useState(0);

    function incrementHandler(){
        setCount(count + 1);
    }

    function decrementHandler(){
        setCount(count - 1);
    }

    return(
        <div className="container my-2 mx-auto p-4 rounded-lg bg-sky-700 flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl">Counter</h1>
            <p className="text-white text-sm mb-3">Press increment / decrement to change value</p>
            <h1 className="text-4xl text-white font-bold">{count}</h1>
            <div className="flex w-full justify-evenly">
            <button className="p-2 my-2 bg-zinc-300 rounded-lg font-bold" onClick={incrementHandler}>Increment+</button>
            <button className="p-2 my-2 bg-zinc-300 rounded-lg font-bold" onClick={() => decrementHandler()}>Decrement-</button>
            </div>
        </div>
    )
}