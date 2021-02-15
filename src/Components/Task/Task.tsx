import React from 'react'
import { Priority } from '../../Utils'
import deleteIcon from '../../images/delete.png'
import { useState } from 'react'
import './Task.css'

export type TaskType = {
    title:string,
    id:number,
    priority:Priority,
    isDone:boolean,
    legendColor?:string
}
type TaskProps = {
    title:string,
    id:number,
    isDone:boolean,
    onRemove:(id:number)=>void
    onCheck:(id:number)=>void,
    onUncheck:(id:number)=>void,
    onChangePriority:(id:number, priority:Priority)=>void
}

const Task : React.FC<TaskProps> = ({id, title, isDone ,onRemove, onCheck, onUncheck, onChangePriority}) => {

    const [priority, setPriority] = useState<Priority>(Priority.NORMAL)

    const changePriority = () => {
        let newPriority = Priority.NORMAL
        switch (priority) {
            case Priority.NORMAL : newPriority = Priority.HIGH
            break
            case Priority.HIGH : newPriority = Priority.HIGHEST
            break
            case Priority.HIGHEST : newPriority = Priority.LOWEST
            break
            case Priority.LOWEST : newPriority = Priority.LOW
            break
            case Priority.LOW : newPriority = Priority.NORMAL
            break
        }
        onChangePriority(id, newPriority)
        setPriority(newPriority)
    }

    return (
        <div className={`task-container`}>
            <div className={`${isDone?'task-done':''}`}>
                <p className="task-title unselectable" onClick={() => isDone ? onUncheck(id) : onCheck(id)} 
                style={{textDecoration:isDone?'line-through':'none'}}>
                    {title}
                </p>
                <p className={`task-priority unselectable ${Priority[priority]}`} onClick={changePriority}>{Priority[priority]}</p>
            </div>
            <img className="task-delete-btn" src={deleteIcon} onClick={()=>onRemove(id)}/>
        </div>
    )
}

export default Task