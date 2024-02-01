import React from 'react'

function Input(props) {
  return (
    <label className='sidebar-label-container'>
    <input onChange={props.handleChange} value={props.value} type="radio" name={props.name} />
    <span className='checkmark' style={{backgroundColor : props.color}}> </span>{props.title}
    </label>
  )
}

export default Input