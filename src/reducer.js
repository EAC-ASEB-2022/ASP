export function setDriveData(state = [], action) {
    switch (action.type){
        case "addData":
            return [...state, action.payload.data]
        case "removeData":
            state.pop()
            return state
        default:
            return state
    }
}

export function pathSet(state = {routeStack: [], pathname: "EAC 22-26 / "}, action){
    switch (action.type){
        case 'setPath':
            state.routeStack.push(action.payload.data)
            let tempPath = "EAC 22-26 / "
            for (let i = 0; i<state.routeStack.length; ++i){
                tempPath += state.routeStack[i] + " / "
            }
            return {...state, pathname: tempPath}
        case 'removePath':
            state.routeStack.pop()
            let tempPath1 = "EAC 22-26 / "
            for (let i = 0; i<state.routeStack.length; ++i){
                tempPath1 += state.routeStack[i] + " / "
            }
            return {...state, pathname: tempPath1}
        default:
            return state
    }
}