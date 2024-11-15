// export default function Child({ onIncrement }) {  
//     return <button onClick={onIncrement}>Increment</button>; 
// }

import {useState, useMemo} from "react"

const ExpensiveCalculationComponent = ({number}) =>{
    const squaredNumber = useMemo(()=>number * number, [number])

    return(
        <p>squaredNumber: {squaredNumber}</p>
    )
}

export default ExpensiveCalculationComponent;

