import React, {createContext, useReducer} from "react";
import {MessageReducer} from './MessageReducer'
import MessageSender from './MessageSender'
import { type } from "@testing-library/user-event/dist/type";


export const MessageProviderContext = createContext()

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

    const editMessages = (index, newMessage) => {
        dispatch({
            type: "edit-messages",
            payload: {index, newMessage}
        })
    }

    console.log(state.messages, "messages")

    return(
        <MessageProviderContext.Provider value={{sendMessages, deleteMessages, editMessages, messages: state.messages}}>
            <h2>Message Sender details</h2>
            <MessageSender/>
        </MessageProviderContext.Provider>
    )
}

export default MessageProvider