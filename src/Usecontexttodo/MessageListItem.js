import React from "react";
import { useContext } from "react";
import { MessagesContext } from "./MessagesProvider";

const MessageListItem = ({message, index}) => {
    const {deleteMessages} = useContext(MessagesContext)

    return(
        <li>
            {message}
            <button onClick={()=>deleteMessages(index)}>Delete</button>
        </li>
    )
}

export default MessageListItem