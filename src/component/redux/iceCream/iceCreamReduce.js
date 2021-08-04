import { ICE_CREAM } from "./iceCreamType";

const initialState = {
    numOfIce: 25
}

const iceCreamReducer = (state=initialState, action) => {
    switch(action.type){
        case ICE_CREAM: 
            return {
                ...state,
                numOfIce: state.numOfIce - 1
            }
        default: return state
    }
}
export default iceCreamReducer