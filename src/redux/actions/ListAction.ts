import { CardType } from '../../Components/Card/Card'
import { ADD_LIST, REMOVE_LIST } from './Actions'


export function addList(card : CardType) {
    return {
        type : ADD_LIST,
        card
    }   
}

export function deleteList(card : CardType) {
    return {
        type : REMOVE_LIST,
        card
    }
}

