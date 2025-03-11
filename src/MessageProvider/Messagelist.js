import React, {useContext} from 'react'
import {MessageContextProvider} from './MessageProvider'

const MessageList = ({onEditClick}) => {

    const {messages, deleteMessages} = useContext(MessageContextProvider)

    return(
        <ul>
            {
                messages && messages.map((item, index)=>(
                    <li>
                        {item}
                        <button onClick={()=>deleteMessages(index)}>Delete</button>
                        <button onClick={()=>onEditClick(item, index)}>Edit</button>
                    </li>
                ))
            }
        </ul>
    )

}

export default MessageList