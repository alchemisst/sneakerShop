import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended"
import Sidebar from "./components/Sidebar/Sidebar"

//DataBase
import data from './sneakerDB/data'


function App() {


  // const[selectedCategory,setSelectedCategory] =useState(null)

  //Handling Search Query
  const [filter,setFilter] = useState(data);
  const[query,setQuery] = useState("")

  
  const handleInputChange = event =>
  {console.log("done")
  setQuery(event.target.value);
}

  //Filtering
  // const filtered = data.filter(product => { 
  //   console.log("workedasd")
  //  return product.title.toLowerCase().indexOf(query.toLowerCase())!==-1
    
  // })

  const handleSearchClick = () => {
     const filtered = data.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase())!==-1);

    setFilter(filtered);


  }
  


  return (<>
        <Nav seachQueryText={query} changeMethod={handleInputChange} searchClicked={handleSearchClick}/>
        <Sidebar /> 
        <Recommended/>
       <Products data={filter}/>
       
      
            
  </>
  );
}

export default App;
