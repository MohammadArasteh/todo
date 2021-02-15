import React, { useRef, useState } from 'react'
import { SetStateAction } from 'react'
import './NewTask.css'

type NewTaskWindowProps = {
    event:React.MouseEvent<HTMLButtonElement, MouseEvent> | null, 
    cancel : any
    add : (title:string) => void
}
const NewTask : React.FC<NewTaskWindowProps> = ({event, cancel,add}) => {
    let xPos = 0
    let yPos = 0
    if(event) {
        xPos = event?.clientX
        yPos = event?.clientY
    }

    const [inputValue, setInputValue] = useState("")

    return (
    <div className="new-task-container" onClick={()=>cancel({isAddingNewTask:false,event:null})}>
        <div className="new-task" style={{left:xPos, top:yPos}} onClick={(e)=>e.stopPropagation()}>
            <h3>new task</h3>
            <input className="new-task-input" autoFocus onChange={e => setInputValue(e.currentTarget.value)}/>
            <div className="new-task-btns">
                 <button className="new-task-cancel new-task-btn" onClick={()=>cancel({isAddingNewTask:false,event:null})}>Cancel</button>
                 <button className="new-task-add new-task-btn" onClick={() => add(inputValue)}>Add</button>
            </div>
        </div>
    </div>
    )
}
export default NewTask