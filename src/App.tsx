import React, { useEffect, useState } from 'react'
import Card, {CardType} from './Components/Card/Card'
import './App.css'
import ConfirmProvider from './Components/Providers/BooleanInputProvider/ConfirmProvider'
import InputProvider from './Components/Providers/StringProvider/InputProvider'

import {addList, deleteList} from './redux/actions/ListAction'
import { useDispatch, useSelector } from 'react-redux'
import { CountIncrease } from './redux/actions/CounterAction'
import { ShowDialog, ShowInput } from './redux/actions/BooleanStatesAction'
import { SetTempID } from './redux/actions/CounterAction'

export type AppState = {
    currentCardId : number,
    CardsList : CardType[],
    passedId : number,
    Counters: any
    Booleans: any
}

const App = () => {

    const List = useSelector<AppState, CardType[]>(state => state.CardsList)
    const CardID = useSelector<AppState, number>(state => state.Counters.currentCardId)
    const tempID = useSelector<AppState, number>(state => state.Counters.tempID)
    const showDialog = useSelector<AppState, boolean>(state => state.Booleans.showDialog)
    const showInput = useSelector<AppState, boolean>(state => state.Booleans.showInput)
    
    const dispatch = useDispatch()

    const addNewCard = (cardTitle:string) => {
        dispatch(ShowInput(false))
        dispatch(addList({title:cardTitle, id:CardID}))
        dispatch(CountIncrease(1))
    }
    const confirmRemoving = (id : number) => {
        dispatch(ShowDialog(true))
        dispatch(SetTempID(id))
    }
    const removeCard =(id : number) => 
        dispatch(deleteList({title:'',id:id}))
    
    return (
        <div className='container'>
            {List.map(card => <Card key={card.id} title={card.title} id={card.id} onDelete={() => confirmRemoving(card.id)}/>)}
            <button className='add-card-button' onClick={()=>dispatch(ShowInput(true))}>Add new card</button>
            {showDialog && <ConfirmProvider
                            title='deleting list' 
                            text='are you sure ?'
                            yes={() => {removeCard(tempID)
                                        dispatch(ShowDialog(false))}}
                            no={() => { dispatch(ShowDialog(false))}}/>}
            {showInput && <InputProvider text='enter list name' addList={addNewCard}/>}
        </div>
    )
}

export default App