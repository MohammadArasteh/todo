import { DECREASE_COUNT, INCREASE_COUNT, SET_TEMP_ID } from "../actions/Actions"


type CountActionType = {
    type : string,
    value : number
}
type CounterStateType = {
    currentCardId: number,
    tempID: number
}
const initState = {
    currentCardId: 0,
    tempID: 0
}
export const CounterReducer = (state : CounterStateType = initState, action : CountActionType) => {
    switch(action.type) {
        case INCREASE_COUNT :
            return {...state, currentCardId : state.currentCardId + action.value}

        case DECREASE_COUNT : 
            return {...state, currentCardId : state.currentCardId - action.value}

        case SET_TEMP_ID :
            return {...state, tempID: action.value}

    }
    return state
}