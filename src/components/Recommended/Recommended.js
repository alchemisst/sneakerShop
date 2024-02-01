import React from 'react'
import "./recommended.css"

function Recommended() {
  return <>
    <div className='recommended-section'>
      <h3 className='recommended-title'>Recommended</h3>
      <div className="recommended-flex">
        <button   className='btns'>All Products</button>
        <button   className='btns'>Nike</button> 
        <button   className='btns'>Puma</button>
         <button   className='btns'>Vans</button>
      </div>
    </div>
  </>
}

export default Recommended