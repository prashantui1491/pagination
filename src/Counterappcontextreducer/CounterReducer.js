export const CounterReducer = (state, action) => {
    console.log(action, "reducer called")
    switch(action.type){
        case "increment": return{
            count: state.count + action.payload
        }

        case "decrement": return state.count > 0 ?  {
            count: state.count - action.payload
        } : state

        case "reset": return {
            count: 0
        }

        default: return state
    }
}