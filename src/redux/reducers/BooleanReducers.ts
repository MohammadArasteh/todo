import { SHOW_DIALOG, SHOW_INPUT } from "../actions/Actions"
import { BooleansActionType } from "../actions/BooleanStatesAction"


type BooleansState = {
    showDialog: boolean,
    showInput: boolean
}
const initState = {
    showDialog: false,
    showInput: false
}
export const BooleanStateReducer = (state : BooleansState = initState, action: BooleansActionType) => {
    switch(action.type) {
        case SHOW_DIALOG :
            return {...state, showDialog : action.value}
        case SHOW_INPUT :
            return {...state, showInput : action.value}
        default : return state
    }
}