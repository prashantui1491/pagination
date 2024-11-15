import React, { useState } from "react"


const TodoPracticetest = () => {

    const [inputText, setInputtext] = useState("")
    const [todo, setTodo] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [searchText, setSearchText] = useState("")

    const handleOnchange = (e) => {
        const enteredText = e.target.value
        setInputtext(enteredText)
        //console.log(inputText, "inputText")
    }

    const handleAddTodo = () => {
        setTodo([
            ...todo, inputText
        ])

        setInputtext("")
    }

    const handleDeleteTodo = (id) =>{
        const updatedTodoList = todo && todo.filter((item, index)=> index !=id)
        //console.log(updatedTodoList)
        setTodo(updatedTodoList)
    }

    const handleEditTodo = (id) =>{
        setEditIndex(id)

        const findTodo = todo.find((item, index)=> index === id)
        // let editText = todo[id]
        setInputtext(findTodo)
    }

    const handleUpdateTodo = () => {
        const updatedTodoList = todo && todo.map((item, index)=>{
            if(editIndex === index){
                return inputText
            }
            return item
        })

        setTodo(updatedTodoList)
        setInputtext("")
        setEditIndex(null)
    }

    const handleSearch = (e) =>{
        setSearchText(e.target.value)
    }

    const filteredTodo = todo.filter((item)=>item.toLowerCase().includes(searchText.toLowerCase()))

    console.log(filteredTodo, "filteredtodo")
    console.log(todo, "todo")



    return (
        <div style={{
            left: "50%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <input placeholder="Write Todo Here" value={inputText} onChange={handleOnchange} />
            <button onClick={editIndex == null ? handleAddTodo : handleUpdateTodo}>{editIndex == null ? "Add" : "Update" }</button>
            <br/>
            <br/>
            <input placeholder="Search here" onChange={handleSearch} value={searchText}/>
            <ul>

                {
                    filteredTodo.map((item, index) => {
                        return (
                            <div style={{display: "flex"}}>
                                <li style={{marginRight: "20px"}}>{item}</li>
                                <button onClick={()=>handleEditTodo(index)}>Edit</button>
                                <button onClick={()=>handleDeleteTodo(index)}>Delete</button>
                            </div>
                        )

                    })
                }

            </ul>
        </div>
    )
}

export default TodoPracticetest