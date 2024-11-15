import React, {useState} from "react"

const TodoArrayOfObjects = () => { 

    const [inputText, setInputtext] = useState("")
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [searchText, setSearchText] = useState("")

    const handleOnchange = (e) =>{
        const enteredText = e.target.value
        setInputtext(enteredText)
    }
    //console.log(inputText, "inputText")

    const handleAddTodo = () =>{
        setTodos([...todos, {
            name: inputText,
            id: Date.now()
        }])

        setInputtext("")
    }

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todos.filter((item)=> item.id !== id)
        setTodos(updatedTodoList)
    }

    const handleEditTodo = (id) => {
        const findEditTodo = todos.find((item)=>item.id === id)

        // console.log(findEditTodo, "findEditTodo")

        setInputtext(findEditTodo?.name)
        setEditIndex(id)
    }

    //console.log(todos)

    const handleUpdateTodo = () => {
        const updatedTodoList = todos.map((item)=>{

            if(editIndex === item?.id){
                return {
                    ...item,
                    name: inputText
                }
            }
            return item

        })

        setTodos(updatedTodoList)
        setInputtext("")
        setEditIndex(null)
    }

    const handleSearch = (e) =>{
        setSearchText(e.target.value)
    }

    const filteredTodo = todos.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div 
        style={{left: "45%", position: "absolute", top: "5%"}}
        >
            <span>{"Todo Practice"}</span>
            <br/>
            <div style={{display: "flex"}}>
                <input placeholder="Add todo" value={inputText} onChange={handleOnchange}/>
                <button onClick={ editIndex !== null ? handleUpdateTodo : handleAddTodo}>{editIndex !== null ? "Update" : "Add"}</button>
            </div>
            <br/>
            <div>
                <input placeholder="Search Here" value={searchText} onChange={handleSearch} />
            </div>

            <ul>
                <p>{"List of Todos"}</p>
                {
                    filteredTodo?.length > 0 ? filteredTodo.map((item, index)=>{

                        return (
                            <div style={{display: "flex"}}>
                            <li key = {item.id} style={{listStyle: "none", marginRight: "10px"}}>
                                {index+1 + "."}{item.name}
                                    
                            </li>
                            <button onClick={()=>handleEditTodo(item?.id)} >{"Edit"}</button>
                            <button onClick={()=>handleDeleteTodo(item?.id)}>{"Delete"}</button>   
                            </div>
                        )

                    }) : "No Todo Found"
                }
            </ul>

        </div>
    )
}

export default TodoArrayOfObjects