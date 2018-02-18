//"ALL","COMPLETED","UNCOMPLETED"
const initState = {
    visibleType:"ALL",
    todos:[{id:0,text:"eat",completed:true},
]}

export function reducer(state=initState,action){
    switch (action.type){
        case "ADD":
            console.log(state)
            return {visibleType:state.visibleType,
                todos:[...state.todos,
                    {
                        text:action.text,
                        id:action.id,
                        completed:false
                    }
            ]}
        case "TOGGLE":
            for(i in state.todos){
                if(i.id == action.id){
                    i.completed = !i.complete()
                }
            }
            return state
        case "SET":
            state.visibleType=action.visibleType
            return state

        default:
            return state
    }
}
