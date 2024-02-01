import React from "react"
import logo from "./logoR.png";
import './nav.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FaceIcon from '@mui/icons-material/Face';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



function Nav(props) {
  return (
   <nav>
     <div className="logo-container"> 
     <img src={logo} alt="logo"/>
    
    </div>
    <div className="searchbar">
    <input onChange={props.changeMethod} type="text" className="searchbar" placeholder="What are you looking for...." value={props.searchQuery}/>
    
    </div>
    <div className="icons"> 
    
    <FavoriteBorderIcon className="navicon" fontSize="large"/>

  <ShoppingCartOutlinedIcon className="navicon"  fontSize="large"/>

     <FaceIcon className="navicon" fontSize="large"/>
  
    </div>
   </nav>
  )
}

export default Nav
