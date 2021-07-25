import { BUY_LOLIPOP } from "./lilopopType"

const initialState = {
    numOfLolipop: 30
}

const lolipopReducer = (state = initialState, action)=> {
    switch(action.type){
        case BUY_LOLIPOP: return {
            ...state,
            numOfLolipop: state.numOfLolipop - 1
        }
        default: return state
    }
}

export default lolipopReducer;