import { SHOW_DIALOG, SHOW_INPUT } from "./Actions"

export type BooleansActionType = {
    type : string,
    value: boolean
} 
export const ShowDialog = (value : boolean) => ({
    type : SHOW_DIALOG,
    value
})

export const ShowInput = (value : boolean) => ({
    type : SHOW_INPUT,
    value
})