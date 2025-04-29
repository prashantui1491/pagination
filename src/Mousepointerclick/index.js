import React, {useState} from "react";

const MousePointerClick = () => {

    const [points, setPoints] = useState([])
    const [ques, setQues] = useState([])
    

    const handleClick = (e) => {

        setPoints((prevPoints=>[
            ...prevPoints,
            [e.clientX, e.clientY]
        ]))
    }

    const handleUndo = (e) => {
        e?.stopPropagation()
        const newPoints = points.slice(0, points.length-1)
        setPoints(newPoints)

        const lastCircle = points[points?.length-1]

        setQues([...ques, lastCircle])
    }

    const handleRedo = (e) => {
        e?.stopPropagation()
        const firstCicle = ques[0]
        setPoints([...points, firstCicle])
        setQues([...ques?.splice(1)])
    }

    return(

        <div>

            <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

            <h2>Mouse Pointer Click</h2>
             <button onClick={handleUndo}>Undo</button>
             <button disabled={points.length === 0} onClick={handleRedo}>Redo</button>

            </div>
            
        <div style={{width: "100vw", height: "100vh"}} onClick={handleClick}>
       

        {
            points.map((point)=>
            <div style={{position: "absolute",backgroundColor: "black", borderRadius: "100%", width:"20px", height: "20px", top: point[1], left: point[0]}}>
            </div>)
        }

        </div>
        </div>
    )
}

export default MousePointerClick