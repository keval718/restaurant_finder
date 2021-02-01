import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/RestaurantListItem.css';
import '../styles/Details.css';
import RestaurantItemBody from '../Components/RestaurantItemBody';


const photo = require('./notAvailable.png');


const RestaurantListItem = (props)=> {
  return (
    
    
      <div className='media content content-container'>
        
          
            <div className='media-left'>
            <Link to={`/detail/${props.restaurant.id}`} ><img src={props.restaurant.thumb || photo} alt='thumbnail' className='media-left__image' /></Link>
            </div>  
            
            <div className='media-body'>
              <RestaurantItemBody  address={props.restaurant.location.address} rating={props.restaurant.user_rating.aggregate_rating} cusines={props.restaurant.cuisines} votes={props.restaurant.user_rating.votes} reviews_count={props.review.reviews_count}/>       
            </div>
      </div>
    
   
  )
}
export default RestaurantListItem;