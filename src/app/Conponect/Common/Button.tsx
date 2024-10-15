import React from 'react'
import './button.css'

interface allbutton{
    commonButton : string
}

const Button: React.FC<allbutton> = ({commonButton}) => {
    return (
        <>
       
            <button className="button11">
                <div className="display">
                    <div id="msg">{commonButton}</div>
                </div>

                <span></span>
                <span></span>
            </button>
        </>
    )
}

export default Button
