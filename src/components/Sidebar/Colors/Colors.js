import React from 'react'
import './colors.css'
import Input from '../../Input'

function Colors(props) {
  return (
<div className='colors-box'> 
    <h2 className='colors-title'>Colors</h2>
    <label className='sidebar-label-container'>
    <input onChange={props.handleChange} value="" type="radio"  name="test3" />
    <span className='checkmark' ></span>All
    </label>
    <Input handleChange={props.handleChange} value="black" title="Black" name="test3" color="black"/>
    <Input handleChange={props.handleChange} value="blue" title="Blue" name="test3" color="blue"/>
    <Input handleChange={props.handleChange} value="red" title="Red" name="test3" color="red"  />
    <Input handleChange={props.handleChange} value="green" title="Green" name="test3" color="green"/>
    <label className='sidebar-label-container'>
    <input onChange={props.handleChange} value="white" type="radio"/>
    <span className='checkmark' style={{background:"white", border:"2px solid black"}}></span>White
    </label>

    </div>
  )
}

export default Colors