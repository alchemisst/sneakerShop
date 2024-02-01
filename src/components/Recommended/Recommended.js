import React from 'react'
import "./recommended.css"

function Recommended(props) {
  return <>
    <div className='recommended-section'>
      <h3 className='recommended-title'>Recommended</h3>
      <div className="recommended-flex">
        <button  onClick={props.handleClick} value="" className='btns'>All Products</button>
        <button  onClick={props.handleClick} value="Nike" className='btns'>Nike</button> 
        <button  onClick={props.handleClick} value="Puma" className='btns'>Puma</button>
         <button onClick={props.handleClick}  value="Vans" className='btns'>Vans</button>
      </div>
    </div>
  </>
}

export default Recommended