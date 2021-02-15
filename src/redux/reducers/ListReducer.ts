import { ADD_LIST, REMOVE_LIST } from "../actions/Actions";
import {AppState} from '../../App'
import { CardType } from "../../Components/Card/Card";

export type CardAction = {
    type : string,
    card : CardType
}

export const ListReducer = (state : CardType[] = [], action : CardAction) => {
    switch(action.type) {
        case ADD_LIST : 
            if(action.card.title == null || action.card.title.match("^\\s+$") || action.card.title == '') return state
            return [...state, {title:action.card.title, id:action.card.id}]
        case REMOVE_LIST :
            return state.reduce((acc, current) => (current.id === action.card.id) ? [...acc] : [...acc,current], [] as CardType[])
    }
    return state
}