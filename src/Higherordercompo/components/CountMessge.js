import React from "react";

const CountMessage = ({text, count, handleIncrement}) =>{

    return(
        <div>
            <span>Message: {text}</span>
            <span>Count: {count}</span>
            <button onClick={handleIncrement}>Click</button>
        </div>
    )
}

export default CountMessage