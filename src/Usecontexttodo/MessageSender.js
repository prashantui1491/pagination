import React, { useState } from "react";
import { useContext } from "react";
import { MessagesContext } from "./MessagesProvider";

const MessageSender = () => {

    const [messages, setMessages] = useState("")
    const { sendMessages } = useContext(MessagesContext)

    const handleMessageChange = (event) => {
        setMessages(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!messages.trim()) return
        sendMessages(messages)
        setMessages("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={messages} onChange={handleMessageChange} placeholder="Enter message" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default MessageSender