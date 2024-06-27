import React from 'react'
import './Button.css';

const Button = ({faIconName, text, onClick}) => {
  return (
    <div onClick={onClick} className="Button">
        <i className={faIconName}></i>
         {' '}
        {text}
    </div>
  )
}

export default Button
