import React from 'react'
import Colors from "./Colors/Colors"
import Category from "./Category/Category"
import Price from "./Price/Price"

import "./sidebar.css"

function Sidebar() {
  return <>
<section className="sidebar">
<Category />
<Price/>
<Colors/>

</section>
 


  </>
}

export default Sidebar