import React from 'react'
import Colors from "./Colors/Colors"
import Category from "./Category/Category"
import Price from "./Price/Price"

import "./sidebar.css"

function Sidebar(props) {
  return <>
<section className="sidebar">
<Category  handleChange={props.handleChange}/>
<Price handleChange={props.handleChange}/>
<Colors handleChange={props.handleChange}/>

</section>
 


  </>
}

export default Sidebar