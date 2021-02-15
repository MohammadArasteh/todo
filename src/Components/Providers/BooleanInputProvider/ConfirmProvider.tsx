import React from 'react'
import './Confirm.css'
type ConfirmProviderProps = {
    title:string,
    text:string,
    yes: () => void,
    no: () => void
}
const ConfirmProvider: React.FC<ConfirmProviderProps> = ({title,text,yes,no}) => {
    return (
            <div className='confirm-container'>
                <h3 className='confirm-title'>{title}</h3>
                <p className='confirm-text'>{text}</p>
                <div className='confirm-buttons'>
                    <button onClick={yes} className='yes-btn confirm-btn'>Yes</button>
                    <button onClick={no} className='no-btn confirm-btn'>No</button>
                </div>
            </div>
    )
}

export default ConfirmProvider