import React, { useRef, useState } from 'react'
import './InputProvider.css'

type InputProviderProps = {
    text:string,
    addList:(listName:string)=>void
}
const InputProvider: React.FC<InputProviderProps> = ({text,addList}) => {
    const [inputValue, setInputValue] = useState<string | undefined>("")

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        if(newValue && newValue?.length > 13) return
        setInputValue(newValue)
    }

    return (
        <div className="input-container">
            <form className="input-elements" onSubmit={(event) => { event.preventDefault()
                                                                    addList(inputValue===undefined?"":inputValue)}}>
                <h3 className="input-text">{text}</h3>
                <input autoFocus value={inputValue} className="input-field" onChange={(e) => inputOnChange(e)}/>
                <button type="submit" className="input-button">Ok</button>
            </form>
        </div>
    )
}
export default InputProvider