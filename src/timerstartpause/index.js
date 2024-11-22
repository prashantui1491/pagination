import React, {useState} from 'react'

const Timerstartpause = () =>{

    const [time, setTime] = useState(0)
    const [intervalId, setIntervalId] = useState(null)

    const handleStart = () => {
        if(!intervalId){
            const id = setInterval(()=>{
                setTime((time)=> time +1)
            },1000)

            setIntervalId(id)
        }
    }

    console.log(intervalId, "intervalId")

    const handleStop = () => {
        if(intervalId){
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    const handleReset = () =>{
        clearInterval(intervalId)
        setTime(0)
        setIntervalId(null)
    }

    return(
        <div>
            <span>Timer:{time} </span>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Timerstartpause;