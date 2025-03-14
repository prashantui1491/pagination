import React, { useState } from "react";

const defects = [
    {
        id: 1,
        defectDescription: "Cutting",
        selectionStatus: false
    },
    {
        id: 2,
        defectDescription: "Haming",
        selectionStatus: false
    },
    {
        id: 3,
        defectDescription: "Curing",
        selectionStatus: false
    },
    {
        id: 4,
        defectDescription: "Panting",
        selectionStatus: false
    },
    {
        id: 5,
        defectDescription: "Denting",
        selectionStatus: false
    },
    {
        id: 6,
        defectDescription: "Charming",
        selectionStatus: false
    },
]

const QCGDefectselection = () => {
    const [defectData, setDefectData] = useState(defects)

    const [selectDefects, setSelectedDefects] = useState([])

    const [buttonSelection, setButtonSelection] = useState(null)

    //console.log(defectData)

    const handleDefectSelection = (e, defect) => {
        const isChecked = e.target.checked
       setSelectedDefects((prevSelected)=>

        isChecked ? [...prevSelected, {...defect, selectionStatus: true}] : prevSelected.filter((item)=> item.id !== defect.id)
    
    )
    
    }

    const handleReworkRecutSelection = (reworkRecut) => {
        const updatedDefetcStatus = selectDefects.map((item)=>{
            return{
                ...item,
                reworkRecutStatus: reworkRecut,
            }
        })

        setSelectedDefects(updatedDefetcStatus)
        setButtonSelection(reworkRecut)

    }

    const handleLogDefects = () => {
        alert("Defect logged")
        console.log("Defect logged", selectDefects)
        setSelectedDefects([])
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2>Select below defects</h2>

            {/* Defects list */}

                <ul>
                    {
                        defectData.map((item) => (
                            <li style={{listStyle: "none"}}>
                                <input type="checkbox" checked = {selectDefects.some((d)=>d.id === item.id)} onChange={(e)=>handleDefectSelection(e, item)} />
                                {item.defectDescription}
                            </li>
                        ))
                    }
                </ul>
                <div style={{display: "flex", gap: "20px"}}>

               <button style={{backgroundColor: buttonSelection === "Rework" ? "Red" : "" }} onClick={()=>handleReworkRecutSelection("Rework")}>Rework</button>
               <button style={{backgroundColor: buttonSelection === "Recut" ? "Red" : "" }} onClick={()=>handleReworkRecutSelection("Recut")}>Recut</button>
               </div>
               <button  style={{width: "200px", marginTop: "20px", backgroundColor: "greenyellow"}} onClick={handleLogDefects}>Log defects</button>

            
        </div>
    )
}

export default QCGDefectselection