import React from 'react'
import Input from '../../Input'
import './category.css'
function Category(props) {
  return(<div className='category-box'>
    <h2 className='category-title'>Category</h2>
    

    <label className='sidebar-label-container'>
    <input onChange={props.handleChange} value="" type="radio" name="test"/>
    <span className='checkmark' ></span>All
    </label>
    <Input handleChange={props.handleChange} value="sneakers" title="Sneakers" name="test" />
    <Input handleChange={props.handleChange} value="flats" title="Flats" name="test"  />
    <Input handleChange={props.handleChange} value="vans" title="Vans" name="test" />
    <Input handleChange={props.handleChange} value="sandals" title="Sandals" name="test" />
    <Input handleChange={props.handleChange} value="heels" title="Heels" name="test" />
  </div>







  )
}

export default Category