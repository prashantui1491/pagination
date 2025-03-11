export const CounterReducer = (state, action) => {
    console.log(action, "reducer called")
    switch(action.type){
        case "increment": return{
            count: state.count + action.payload
        }

        case "decrement": return {
            count: state.count - action.payload
        }

        default: return state
    }
}