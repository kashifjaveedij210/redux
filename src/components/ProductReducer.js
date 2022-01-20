export const ProductReducer=(state={Products:[],ProductDetails:[]},action)=>{
    if(action.type==="ADD-PRODUCTS"){
        return{...state,Products:[...action.data]}
    }
if(action.type==="PRODUCT-DETAILS"){
    return {...state,ProductDetails:[action.data]}
    
}
return state
}