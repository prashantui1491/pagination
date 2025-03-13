export const MessageReducer = (state, action) => {
    switch(action.type){
        case "send-messages": return{
            ...state,
            messages: [...state.messages, action.payload]
        }

        case "delete-messages": return{
            ...state,
            messages: state.messages.filter((_,i)=> i!== action.payload)
        }

        case "edit-messages": 

        const {index, newMessage} = action.payload
        
        return{
            ...state,
            messages: state.messages.map((message, i)=> i === index ? newMessage : message)
        }
    }

}