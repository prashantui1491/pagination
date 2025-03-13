import React, {useState, useContext} from "react";
import {MessageProviderContext} from './MessageProvider'
import MessageList from './MessageList'

const MessageSender = () => {
    const [message, setMessages] = useState("")

    const [editIndex, setEditIndex] = useState(null)

    const {sendMessages, editMessages} = useContext(MessageProviderContext)

    const handleOnchangeMessages = (e) => {
        setMessages(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editIndex !== null){
            editMessages(editIndex, message)
            setEditIndex(null)
        }

        else{
            sendMessages(message)
        }
       
        setMessages("")
    }

    const handleEdit = (index, item) => {
        setMessages(item)
        setEditIndex(index)
    }

    console.log(editIndex, "editIndex")

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type= "text" value={message} onChange={handleOnchangeMessages} placeholder="Enter message"/>
                <button type="submit">Submit</button>
            </form>
            <MessageList onEditClick = {handleEdit} />
        </div>
    )
}

export default MessageSender