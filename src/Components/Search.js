import React from 'react';
import {connect} from 'react-redux';
import {setCity} from '../actions/city';
import { resetState } from '../actions/city';
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
import {useState} from 'react';

 
const Search = (props) => {
    const [state, setstate] = useState("")


    const findData = (e)=>{
  
        e.preventDefault()
        console.log(state);
        props.dispatch(setCity(state));
              props.dispatch(thunkRestaurants(state, 1));
              props.history.push('/listing');

    }

  return (
    <div className='content-container content'>
      <div className='page-header'>
        <h2 className="page-header__title">Enter city</h2>
      </div>
      <div className="button-container">
      <form onSubmit={findData}>
  <label>
    <input type="text" name="name" placeholder="Please Enter City Here.." onChange={(e)=>setstate(e.target.value)}/>
  </label>
  <input type="submit" value="Submit" />
</form>
</div>
      
    </div>
  )
}



export default connect()(Search);