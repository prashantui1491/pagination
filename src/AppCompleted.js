//const Dummy_URL = "https://dummyjson.com/todos?limit=5";

import React, { useState, useEffect } from "react";

const ToggleTodo = () => {

    const [data, setData] = useState(null)

    const Dummy_URL = "https://dummyjson.com/todos?limit=10";

    useEffect(() => {
        fetch(Dummy_URL).then((response) => {
            if (!response.ok) {
                throw new Error("Network calls not okaay")
            }

            return response.json()
        })
            .then((json) => {
                console.log(json, "jsonnnn")
                setData(json)
            })
            .catch((error) => console.log("Error Found", error))
    }, [])

    //console.log(data, "originalData")

    const completedTodo = data && data.todos.filter((item) => item.completed === true)
    const notCompletedTodo = data && data.todos.filter((item) => item.completed === false)

    // console.log(completedTodo, "completedTodo")
    // console.log(notCompletedTodo, "notCompletedTodo")

    const toggleCompletion = (id) => {

        const updatedTodo = data && data.todos.map((item)=>{
            if(item.id === id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }

            return item
        })

        setData({...data, todos: updatedTodo})

    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
            {/* Completed todo Box */}
            <div style={{marginRight: "2px", border: "1px solid black", width: "50%", marginLeft:"10px", backgroundColor: "lightblue" }}>
                <p style={{textAlign: "center"}}>{"Completed todo"}</p>
                <ul>
                    {completedTodo?.length > 0 ? completedTodo && completedTodo.map((item, index)=>{

                        return (
                            <li key={item.id} style={{listStyle: "none"}}>
                               {index + 1 + "."} {item.todo}
                               <input type="checkbox" checked={item.completed} onChange={()=>toggleCompletion(item.id)}></input>
                            </li>
                        )

                    }) : "No Data Found"}
                </ul>

            </div>

            {"<=====>"}

            {/* Not Completed todo Box */}
            <div style={{border: "1px solid black", width: "50%", marginRight: "10px", backgroundColor: "lightblue"  }}>
                <p style={{textAlign: "center"}}>{"Not Completed toto"}</p>
                <ul>
                    {
                        notCompletedTodo?.length>0 ? notCompletedTodo && notCompletedTodo.map((item, index)=>{
                            return (
                                <li key={item?.id} style={{listStyle: "none"}}>
                                    {index+1 + "."} {item.todo}
                                    <input type="checkbox" checked={item?.completed} onChange={()=>toggleCompletion(item.id)}></input>
                                </li>
                            )
                        }) : "No Data Found"
                    }
                </ul>
            </div>


        </div>
    )
}

export default ToggleTodo