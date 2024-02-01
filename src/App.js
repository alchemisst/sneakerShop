import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended"
import Sidebar from "./components/Sidebar/Sidebar"

//DataBase
import data from './sneakerDB/data'


function App() {


  const[selectedCategory,setSelectedCategory] =useState(null)

  //Handling Search Query
  // const [filter,setFilter] = useState(data);
  const[query,setQuery] = useState("")

  
  const handleInputChange = event =>
  setQuery(event.target.value);


  // Filtering
  const filteredItems = data.filter(product => { 
   return product.title.toLowerCase().indexOf(query.toLowerCase())!==-1
    
  })

  // Radio Filters

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //Button Filters
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  } 

  

  function filteredData(data,selected,query){
    let filteredProducts = data;

    //filtering input items
    if(query){
      filteredProducts = filteredItems
    }

    //Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter( ({category,color,company,newPrice,title}) => 
        { return category===selected || color===selected || newPrice===selected || company===selected || title===selected})

    }

    return filteredProducts;
  }

  const resultData = filteredData(data,selectedCategory,query);


  return (<>
        <Nav seachQueryText={query} changeMethod={handleInputChange}/>
        <Sidebar handleChange={handleChange} /> 
        <Recommended handleClick={handleClick}/>
       <Products data={resultData}/>
       
      
            
  </>
  );
}

export default App;
