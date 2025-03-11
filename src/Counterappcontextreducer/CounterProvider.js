import React, {useState, createContext, useReducer} from 'react'
import {CounterReducer} from './CounterReducer'
import Counterapp from './Counterapp'

export const Countercontext = createContext()

const CounterProvider = () => {
    const [state, dispatch] = useReducer(CounterReducer, {count: 0})

    const handleIncrement = () => {
        dispatch({
            type: "increment",
            payload: 1
        })
    }

    const handleDecrement = () => {
        dispatch({
            type: "decrement",
            payload: 1
        })
    }

    return(
        <Countercontext.Provider value={{handleIncrement, handleDecrement, count: state.count }}>
            <h1>Counter App with Reducer and Context</h1>
            <Counterapp/>
        </Countercontext.Provider>
    )
}

export default CounterProvider