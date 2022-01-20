import { createStore,combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

export const ConfigStore=()=>{
    const myStore=createStore(
        combineReducers({ProductReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return myStore
}