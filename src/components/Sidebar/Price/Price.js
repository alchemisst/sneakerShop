import React from 'react'
import './price.css'
import Input from '../../Input'
function Price(props) {
  return (
    <div className='price-box'> 
    <h2 className='price-title'>Price</h2>
    <label className='sidebar-label-container'>
    <input onChange={props.handleChange} value="" type="radio" name="test2" />
    <span className='checkmark' ></span>All
    </label>
    <Input handleChange={props.handleChange} value={50} title="$0 - 50" name="test2" />
    <Input handleChange={props.handleChange} value={100} title="$50 - 100" name="test2" />
    <Input handleChange={props.handleChange} value={150} title="$100 - 150" name="test2" />
    <Input handleChange={props.handleChange} value={200} title="$150 - 200" name="test2" />
    
  
    </div>
  )
}

export default Price