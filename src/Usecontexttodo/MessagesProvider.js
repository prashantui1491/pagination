import React, {useReducer, useContext, createContext} from "react";
import { messageReducer } from "./messageReducer";
import MessageSender from "./MessageSender";
import MessageList from "./MessageList";

export const MessagesContext = createContext({})


const MessagesProvider = () => {
    const [state, dispatch] = useReducer(messageReducer, {messages: []})

    const sendMessages = (messages) => {
        dispatch({
            name: "send-messages",
            payload: messages
        })
    }

    const deleteMessages = (index) => {
        dispatch({
            name: "delete-messages",
            payload: index
        })
    }

    return(
        <MessagesContext.Provider value={{sendMessages, deleteMessages }}>
            <h1>Dummy chat</h1>
            <MessageSender/>
            <MessageList messages={state.messages}/>

        </MessagesContext.Provider>
    )
}

export default MessagesProvider

