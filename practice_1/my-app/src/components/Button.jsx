// import React from 'react'
import './Button.css';


const Button = ({ classes, onClickHandel, textBtn, buttonId,active, ...props }) => {

    return (
        <button onClick={(buttonId) => onClickHandel(buttonId)} className={`button ${classes} ${active}`}>
            {textBtn}
        </button>
    )
}

export default Button;