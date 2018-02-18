let nextTodoId = 1;

export function addTodo(text) {
    console.log(nextTodoId)
    return {
        type:"ADD",
        id:nextTodoId++,
        text,
    }
}

export function toggleTodo(id) {
    return {
        type:"TOGGLE",
        id
    }
}

export function setVisibleType(visibleType){
    return {
        type:"SET",
        visibleType
    }
}


