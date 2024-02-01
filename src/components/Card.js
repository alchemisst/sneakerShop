import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


function Card(props) {
  return (
    <section className='card'>
    <img src={props.img} alt='shoeIMG' className='card-img'></img>
     <div className='card-details'>
     <h3 className='card-title'>
    {props.title}
     </h3>
     <section className='card-review'> 
     <StarRateRoundedIcon fontSize='small' className='rating-star' />
     <StarRateRoundedIcon fontSize='small' className='rating-star'/>
     <StarRateRoundedIcon fontSize='small' className='rating-star'/>
     <span className="total-reviews">{props.reviews}</span>
     </section>
     <section className='card-price'>
     <div className="price">
       <del>{props.prevPrice}</del> {props.newPrice}
     </div>
     <div className="bag"><LocalMallOutlinedIcon className='bag-icon'/></div>
     
     </section>
     
     </div>
     </section>
  )
}

export default Card