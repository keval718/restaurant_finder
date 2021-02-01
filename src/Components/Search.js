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
     
         {/* // <input type="text" name="text"/> */}
          {/* <input type="button" name="seactButton" onClick={findData}>Search</input> */}
      {/* <div className='button-container'>
        {
          props.city.map((item, index)=>{
            return <button key={index} 
              onClick={(e)=>{
              console.log(e.target.innerText);
              props.dispatch(resetState());
              props.dispatch(setCity(e.target.innerText));
              props.dispatch(thunkRestaurants(e.target.innerText, 1));
              props.dispatch(setLike());
              props.history.push('/listing');
            }} >{item}</button>
          })
        }
      </div> */}
      <form onSubmit={findData}>
  <label>
    Name:
    <input type="text" name="name" onChange={(e)=>setstate(e.target.value)}/>
  </label>
  <input type="submit" value="Submit" />
</form>
      
    </div>
  )
}

Search.defaultProps={
  city: ['Pune', 'Bangalore', 'Delhi', 'Chennai']
}

export default connect()(Search);