import React from 'react'
import './Validation.css'

const validation = (props) => {
    return (
        <div className="Align" >
            {
             props.inputLength > 5 ?
             <p> Text too long! </p> : <p> Text too short! </p>
            }
        </div> 
    )
}

export default validation 