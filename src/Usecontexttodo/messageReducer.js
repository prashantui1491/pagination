export const messageReducer = (state, action) => {
    switch(action.name){
        case "send-messages": return{
            ...state,
            messages: [...state.messages, action.payload]
        }

        case "delete-messages": return{
            ...state,
            messages: state.messages.filter((_, i)=> i!== action.payload)
        }

        default: return state
    }
}