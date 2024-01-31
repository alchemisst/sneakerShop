import React from "react"
import logo from "./logoR.png";
import './nav.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FaceIcon from '@mui/icons-material/Face';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Nav() {
  return (
   <nav>
     <div className="logo-container"> 
     <img src={logo} alt="logo"/>
    
    </div>
    <div className="searchbar">
    <input type="text" className="searchbar"placeholder="What are you looking for...." />
    </div>

    <div className="icons"> 
    
    <a href="#"> <FavoriteBorderIcon className="navicon" fontSize="large"/></a>

    <a href="#"> <ShoppingCartOutlinedIcon className="navicon"  fontSize="large"/></a>

    <a href="#"> <FaceIcon className="navicon" fontSize="large"/></a>
  
    </div>
   </nav>
  )
}

export default Nav