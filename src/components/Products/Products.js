import React from 'react'
import "./products.css"
import Card from '../Card';

//Icons


function Products(props) {
  
  return <>

<section className='card-container'>
{console.log(props.data)}
  {props.data.map((x,index) => {
    return <Card key={index} title={x.title} reviews={x.reviews} img={x.img} newPrice={x.newPrice} prevPrice={x.prevPrice}/>
  })}

   </section>
  </>
}

export default Products;