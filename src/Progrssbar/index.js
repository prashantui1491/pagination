import React, { useEffect, useState } from "react";
import './style.css'

const ProgressBarChild = ({progress}) => {

    const [animatedBar, setAnimatedbar] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setAnimatedbar(progress)
        }, 100)
    },[progress])

    return(
        <div className="outer" >
            <div className="inner" style={{
                
                //width: `${animatedBar}%`,
                transform: `translateX(${animatedBar-100}%)`
                
                }} >
                {progress}%
            </div>
        </div>
    )
}

const ProgressBar = () => {


    const bars = [5,10,20,30, 40,50,60,70, 80, 100]

    return(
        <div>
            <h2>Progress Bar component</h2>
            {
                bars.map((bar)=>  <ProgressBarChild progress = {bar} key={bar}/>)
            }
           
        </div>
    )
}

export default ProgressBar