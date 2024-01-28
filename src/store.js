import { combineReducers, createStore } from "redux";
import { setDriveData, pathSet } from "./reducer";

const rootReducer = combineReducers({
    setDriveData,
    pathSet,
})

export const store = createStore(rootReducer)