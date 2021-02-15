import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Priority } from '../../Utils'
import NewTask from '../AddTaskPanel/NewTask'
import Task, {TaskType} from '../Task/Task'
import './Card.css'

export type CardType = {
    title : string,
    id : number,
    onDelete? : () => void,
    tasksCount? : number,
    tasks? : TaskType[]
}
type NewTaskType = {
    isAddingNewTask:boolean,
    event:React.MouseEvent<HTMLButtonElement, MouseEvent> | null
}

const Card : React.FC<CardType> = ({title, id, onDelete}) => {

    const [tasks, setTasks] = useState([] as TaskType[])
    const [allTasks, setAllTasks] = useState(0)
    const [checkedTasks, setCheckedTasks] = useState(0)
    const [taskID, setTaskID] = useState(0)
    const [runTimeTitle, setRuntimeTitle] = useState<string | undefined>(title)
    const [inputWidth, setInputWidth] = useState(title.length * 15)

    const [newTaskStae, setNewTaskState] = useState<NewTaskType>({isAddingNewTask:false,event:null})


    const inputRef = useRef<HTMLInputElement>(null)

    const inputOnChange = () => {
        const newValue = inputRef.current?.value.replace(' ','')
        if(newValue && newValue?.length > 13) return
        setRuntimeTitle(newValue)
        setInputWidth(newValue ? newValue.length*15 : 15)
    }


    const onAddTask = (task_title:string) => {
        setTasks([...tasks,{title:task_title, id:taskID, isDone:false,priority:Priority.NORMAL}])
        setNewTaskState({isAddingNewTask:false,event:null})
        setAllTasks(allTasks + 1)
        setTaskID(taskID + 1)
    }

    const onCheckTask = (id:number) => {
        const newArr = tasks.reduce((acc,current) => current.id === id ? [...acc,{...current,isDone:true}] : [...acc,current], [] as TaskType[])
        setTasks(sortTasks(newArr))
    }
    const onUncheckTask = (id:number) => {
        const newArr = tasks.reduce((acc,current) => current.id === id ? [...acc,{...current,isDone:false}] : [...acc,current], [] as TaskType[])
        setTasks(sortTasks(newArr))
       }
    
    const onRemoveTask = (id:number) => {
        setTasks(prev => prev.reduce((acc,current) => current.id === id ? acc : [...acc, current], [] as TaskType[]))
    }

    const onChangePriority = (id:number, priority:Priority) => {
        const newArr = tasks.reduce((acc, current) => {
            if(current.id === id)
                return [...acc, {...current, priority:priority}]
            else return [...acc, current]
        }, [] as TaskType[]) 
        setTasks(sortTasks(newArr))
    }
    const sortTasks = (newArr : TaskType[]) : TaskType[] => {
        const sorted = newArr.sort((a,b) => a.priority - b.priority - 1)
        const checkedSortedTasks = sorted.sort((a,b) => a.isDone && b.isDone ? 0 : a.isDone ? 1 : -1)
        return checkedSortedTasks
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <input className='card-title' style={{width:inputWidth}} ref={inputRef} value={runTimeTitle} onChange={inputOnChange}/>
                <button className='delete-card' onClick={onDelete}>Delete</button>
            </div>

            {tasks.map(task => <Task title={task.title} 
                                     id={task.id} 
                                     key={task.id} 
                                     isDone={task.isDone} 
                                     onRemove={onRemoveTask}
                                     onCheck={onCheckTask}
                                     onUncheck={onUncheckTask}
                                     onChangePriority={onChangePriority}/>)}

            <button className='add-task' onClick={(e) => setNewTaskState({isAddingNewTask:true,event:e})}>Add Task</button>
            {newTaskStae.isAddingNewTask && <NewTask event={newTaskStae.event} cancel={setNewTaskState} add={onAddTask}/>}
        </div>
    )
}

export default Card