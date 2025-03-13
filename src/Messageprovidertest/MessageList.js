import React, {useContext} from 'react'
import {MessageProviderContext} from './MessageProvider'

const MessageList = ({onEditClick}) => {
    const {messages, deleteMessages} = useContext(MessageProviderContext)

    console.log(messages, "messageinlists")

    return(
        <div>
            <span>Message List</span>
            <ul>
                {
                    messages && messages.map((item, index)=>(
                        <li>
                            {item}
                            <button onClick={()=>deleteMessages(index)}>Delete</button>
                            <button onClick={()=>onEditClick(index, item)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MessageList