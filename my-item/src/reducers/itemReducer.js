import {GET_ITEM} from "../actions/type"

const initialState = {
    item = {
        id:null,
        name:null,
        price:null,
    }
}

export default function (state = initialState, action){
    switch (action.type){
        case GET_ITEM:
            return{
                item:{
                    id:action.payload.id,
                    name:action.payload.name,
                    price:action.payload.price,
                }
            }
        default:
            return state;
    }
}