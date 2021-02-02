import React from 'react';
import '../styles/RestaurantListItem.css';
import {decideColor} from '../utils/decideColor';

export default function RestaurantItemBody(props) {
  return (
    <div>
      <span className="res_address">{props.name}</span><br></br>
     <span className='res_address'>{props.address}</span> <br></br>
     <span className='res_cusines'>{props.cusines}</span> <br></br>

      <span className={decideColor(props.rating)}>{props.rating}</span>
      <span> ({props.votes} votes)</span>
      <span className='res_review' >| &nbsp;&nbsp;   {props.reviews_count} reviews</span>
    </div>
  )
}
