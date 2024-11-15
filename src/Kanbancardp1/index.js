import React, { useState } from "react"
import './index.css'

const KanbanBoard1 = () => {

    const [userInput, setUserInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [searchText, setSearchText] = useState("")

    const handleChange = (e) => {
        setUserInput(e.target.value)
        console.log(e.target.value)
    }

    const kanbanCells = ["To Do", "In Progress", "Review", "Done"]

    const handleAddTask = () =>{
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                name: userInput,
                completed: false,
                kanbanIndex: 0
            }
        ])
        setUserInput("")
    }

    const handleDelete = (id) =>{
        const updatedTasks = tasks.filter((item)=>item.id !== id)
        setTasks(updatedTasks)
    }

    const handleCheckbox = (id) =>{
        const updatedTasks = tasks.map((item)=>{
            if(item.id === id){
                return {
                    ...item,
                    completed: !item.completed
    
                }
            }
            return item
            
        })
        setTasks(updatedTasks)
    }

    const handleMoveTask = (id, direction) => {
        const updatedTasks = tasks.map((item)=>{
            if(item.id === id){
                return {
                    ...item,
                    kanbanIndex: item?.kanbanIndex + direction,
                    completed: false
                }
            }

            return item
        })

        setTasks(updatedTasks)
    }

    const handleSearch = (e) =>{
        setSearchText(e.target.value)
    
    }
    
    const filteredTasks = tasks.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()))

    const renderTasks = (index) => 
        filteredTasks.filter((item)=> item.kanbanIndex === index)
       .map((item)=>(
        <div className="task">
            {/* <input type="checkbox" onChange={()=>handleCheckbox(item.id)}/> */}
            <span>{item.name}</span>
            <button onClick={()=>handleDelete(item.id)}>{"Delete"}</button>
            <button onClick={()=>handleMoveTask(item.id, -1)}  disabled={index === 0} >{"Back"}</button>
            <button onClick={()=>handleMoveTask(item.id, 1)} disabled ={index > 2 } >{"Forward"}</button>
        </div>
       ))
console.log(tasks, "tasks")



console.log(filteredTasks)

    return (
        <div className="kanban-board">

            {/* Input Kanban details */}
            <div className="add-task">
                <input
                    type="text"
                    onChange={handleChange}
                    value={userInput}
                />
                <button onClick={handleAddTask}>{"Add"}</button>
            </div>
            <input

            type="text"
            onChange={handleSearch}
            value={searchText}

            
            />

            <div className="kanban-columns">
                {kanbanCells.map((title, index) => {
                    return (
                        <div key={index} className="kanban-column">
                            <h3 >{title}</h3>
                            {renderTasks(index)}

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default KanbanBoard1