import React, {useContext} from 'react'
import {Countercontext} from './CounterProvider'

const Counterapp = () => {

    const {count, handleIncrement, handleDecrement, handleRseset} = useContext(Countercontext)
    return(
        <div>
            <p>Count:{count} </p>
            <button onClick={handleIncrement}>Increment</button>
            <button disabled={count === 0} onClick={handleDecrement}>Decrement</button>
            <button disabled={count === 0} onClick={handleRseset}>Reset</button>
        </div>
    )
}

export default Counterapp