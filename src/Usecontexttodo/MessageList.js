import React from 'react'

import MessageListItem from './MessageListItem'

const MessageList = ({messages}) => {

    return(
        <ul>
            {messages.map((item, index)=>(
                <MessageListItem key={index} message={item} index={index}/>
            ))}
        </ul>
    )

}

export default MessageList