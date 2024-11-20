//Hooks

// import React, {useState, useEffect} from "react"

// const Timer = () =>{
//     const [count, setCount] = useState(0)

//   useEffect(()=>{
//     const timer = setInterval(()=>setCount(c=>c+1),1000)

//     return ()=> clearInterval(timer)
//   }, [])

//     return(
//         <div>
//             Timer: {count}
//         </div>
//     )
// }

// export default Timer

// import React, {useRef} from "react"

// const FocusInput = () => {

//     const inpputRef = useRef(null)

//     const buttonClick = () => {
//         inpputRef.current.focus()
//         console.log("clicked")
//     }

   

//     return (
//         <div>
//             <input ref={inpputRef} />
//             <button onClick={buttonClick}>{"Focusinput"}</button>
//         </div>
//     )
// }

// export default FocusInput

// import React, { useRef, useState } from 'react';

// function CounterComponent() {
//   // useRef to hold the mutable count value
//   const countRef = useRef(0);
  
//   // useState to trigger a render and show the current count on the UI
//   const [renderCount, setRenderCount] = useState(0);

//   const incrementCount = () => {
//     // Update the mutable value held by the ref
//     countRef.current += 1;
//     console.log("Mutable count (doesn't cause re-render):", countRef.current);
//   };

//   const renderToDisplay = () => {
//     // Update the state to trigger a render and show the updated count on the UI
//     setRenderCount(countRef.current);
//   };

//   return (
//     <div>
//       <p>Count (tracked with useRef, doesn’t cause re-render): {countRef.current}</p>
//       <button onClick={incrementCount}>Increment Count</button>
//       <button onClick={renderToDisplay}>Show Count in UI</button>
//     </div>
//   );
// }

// export default CounterComponent;

// import React, {useReducer} from "react"

// const reducer = (state, action) => {
//     switch(action.type){
//         case "increment" : return {count: state.count+1}
//         case "decrement" : return {count: state.count-1}
//         default: return state
//     }
// }

// const CounterReducer = () => {
//     const [state, dispatch] = useReducer(reducer, {count: 0})

//     return (
//         <div>
//             <span>Count : {state.count}</span>
//             <br/>
//             <button onClick={()=>dispatch({type: "increment"})}>"Increment"</button>
//             <button onClick={()=>dispatch({type:"decrement"})}>"Decrement"</button>
//         </div>
//     )
// }

// export default CounterReducer

// import React, { useState, useCallback } from "react";
// import Child from "./Child";

// const ParentComponent = () => {
//     const [count, setCount] = useState(0);

//     const increment = useCallback(() => setCount(count => count + 1), []);

//     return (
//         <div>
//             {count}
//             <Child onIncrement={increment} />
//         </div>
//     );
// };

// export default ParentComponent;

import React from "react";
import ExpensiveCalculationComponent from '../Customhook/Child'

function App(){
    return (
        <div>

        <ExpensiveCalculationComponent number={4}/>

        </div>
    )
}

export default App



