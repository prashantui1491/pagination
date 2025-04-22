import React, { useState } from "react";

const KanbanTest = () => {

    const [userInput, setuserInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [searchTask, setSearchTask] = useState("")

    const kanbanStatus = ["Todo", "In Progress", "InReview", "Done"]

    const handleAddTask = () => {

        setTasks([...tasks, {
            id: Date.now(),
            name: userInput,
            completed: false,
            kanbanIndex: 0
        }])

        setuserInput("")
    }


    const handleMove = (id, direction) => {
        const updatedTasks = tasks.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    kanbanIndex: item?.kanbanIndex + direction,
                    completed: "false"
                }
            }

            return item
        })

        setTasks(updatedTasks)
    }

    const handleDelete = (id) => {

        const updatedData = tasks.filter((item) => item.id !== id)
        setTasks(updatedData)

    }

    const filteredtext = tasks && tasks.filter((item) => item.name.toLowerCase().includes(searchTask.toLowerCase()))

    const renderTask = (index) => filteredtext.filter((item) => item.kanbanIndex === index).map((item) => (
        <div style={{ overflow: "auto", maxHeight: "100px" }}>
            {item.name}
            <button onClick={() => handleMove(item.id, -1)} disabled={item.kanbanIndex === 0} >{"<--"}</button>
            <button onClick={() => handleDelete(item.id)}>X</button>
            <button onClick={() => handleMove(item.id, 1)} disabled={item.kanbanIndex === kanbanStatus.length - 1}>{"-->"}</button>
        </div>
    ))




    return (
        <div>
            <input type="text" placeholder="Enter task..." value={userInput} onChange={(e) => setuserInput(e.target.value)} />
            <button onClick={handleAddTask}>Add task</button>
            <input type="text" value={searchTask} onChange={(e) => setSearchTask(e.target.value)} />

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                {
                    kanbanStatus.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                width: "200px",
                                border: "1px solid black",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                style={{
                                    textAlign: "center",
                                    position: "sticky",
                                    top: 0,
                                    backgroundColor: "white",
                                    zIndex: 1,
                                    padding: "10px",
                                    borderBottom: "1px solid #ccc"
                                }}
                            >
                                {item}
                            </h3>

                            <div
                                style={{
                                    overflowY: "auto",
                                    maxHeight: "200px",
                                    padding: "10px"
                                }}
                            >
                                {renderTask(index)}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default KanbanTest