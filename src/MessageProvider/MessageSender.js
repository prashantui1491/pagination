import React, {useState, useContext} from "react";
import {MessageContextProvider} from './MessageProvider'
import MessageList from "./Messagelist";

const MessageSender = () => {

    const [message, setMessage] = useState("")
    const [editIndex, setEditIndex] = useState(null)
    const {sendMessages, editMessage} = useContext(MessageContextProvider)

    const handleOnchange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!message.trim()) return

        if(editIndex !== null){

            editMessage(editIndex,message)
            setEditIndex(null)
            
        }

        else{
            sendMessages(message)
        }
     
        setMessage("")
    }

    const handleEdit = (messageToEdit,index) => {
        setEditIndex(index)
        setMessage(messageToEdit)
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter message" onChange={handleOnchange} value={message} />
            <button disabled = {!message.trim()} type="submit">{editIndex === null ? "Submit" : "Update"}</button>
        </form>
        <MessageList onEditClick= {handleEdit} />
        </div>
    )
}

export default MessageSender