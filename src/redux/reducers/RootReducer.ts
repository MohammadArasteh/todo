import {combineReducers} from 'redux'
import {CounterReducer} from './CounterReducer'
import {ListReducer} from './ListReducer'
import {BooleanStateReducer} from './BooleanReducers'

export const RootReducer = combineReducers({
    Counters:CounterReducer,
    CardsList:ListReducer,
    Booleans:BooleanStateReducer
})