import React, {createContext, useReducer, useState} from "react";
import {MessageReducer} from './MessageReducer'
import MessageSender from './MessageSender'
import MessageList from "./Messagelist";

export const MessageContextProvider = createContext({})

const MessageProvider = () => {

    const [state, dispatch] = useReducer(MessageReducer, {messages: []})

    const sendMessages = (messages) => {
        dispatch({
            type: "send-messages",
            payload: messages
        })
    }

    const deleteMessages = (index) => {
        dispatch({
            type: "delete-messages",
            payload: index
        })
    }

    const editMessage = (index, newMessage) => {
        dispatch({
            type: "edit-message",
            payload: { index, newMessage }
        })
    }
    

    return(
        <MessageContextProvider.Provider value={{sendMessages, deleteMessages, editMessage, messages: state.messages }}>
            <h1>Message Sender Component</h1>
            <MessageSender />
        </MessageContextProvider.Provider>
    )
}

export default MessageProvider