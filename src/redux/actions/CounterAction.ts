import { DECREASE_COUNT, INCREASE_COUNT, SET_TEMP_ID } from "./Actions"

export const CountIncrease = (value : number) => ({
    type : INCREASE_COUNT,
    value : value
})

export const CountDecrease = (value : number) => ({
    type : DECREASE_COUNT,
    value : value
})

export const SetTempID = (value : number) => ({
    type : SET_TEMP_ID,
    value
})