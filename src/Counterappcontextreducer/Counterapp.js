import React, {useContext} from 'react'
import {Countercontext} from './CounterProvider'

const Counterapp = () => {

    const {count, handleIncrement, handleDecrement} = useContext(Countercontext)
    return(
        <div>
            <p>Count:{count} </p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counterapp