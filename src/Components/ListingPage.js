import React, { Component } from 'react';
import {connect} from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import InfiniteScroll from "react-infinite-scroll-component";
import {thunkRestaurants} from '../actions/restaurant';
import '../styles/Summary.css';
import LoadingComponent from './LoadingComponent';

class ListingPage extends Component {

  constructor(props){
    super(props);
    this.state={
      start : 1,
      data:[],
      filteredData:null
    }

    this.onScroll=this.onScroll.bind(this);
    this.searchClickevent = this.searchClickevent.bind(this);
 
  }
  // componentDidMount()
  // {
  //   console.log(this.props)
  //   this.setState({
  //     data:this.props
  //   },()=>{
  //     this.state.data.restaurants.filter(eachrestaurant=>{
  //       console.log(eachrestaurant)
  //     })
  //   })
  // }

  onScroll(){
  
    var start= this.state.start +5;
    this.setState((state)=>({
      start: state.start+5,
  }));
  console.log(this.props.city+" props here");

    this.props.dispatch(thunkRestaurants(this.props.city, start));
  

    
  };
  searchClickevent(e) {
console.log(e.target.value)
if(e.target.value === "")
{
  this.setState(prevState=>{
    return{
      ...prevState,
      filteredData:null
    }
  },()=>{
    console.log(this.state)
  })
}
else{

  let data = this.props.restaurants.filter((eachrestaurant) => {

    return (
      eachrestaurant.restaurant.cuisines.toLowerCase().includes(e.target.value) ||
      eachrestaurant.restaurant.location.address.toLowerCase().includes(e.target.value) ||
      eachrestaurant.restaurant.name.toLowerCase().includes(e.target.value)
      );
    });
    // console.log(data)
    this.setState(prevState=>{
      return{
        ...prevState,
        filteredData:data
      }
    },()=>{
      console.log(this.state)
    })
}
  }







  render() {
    const error=this.props.error;
    return (
      <div>
        {this.state.filteredData === null ?
        (<> 
       {error ?<p>{error}</p>:
        <div className="media content content-container">
          <input
          type="text"
          onChange={this.searchClickevent}
          placeholder="Search By Address,Name,Cuisines"
        ></input>
          <div className='content-container outline page-header'>
            <h2 className="page-header__title"><small>Showing restaurants in </small>"<strong>{this.props.city}</strong>"</h2>
          </div>
          
          <InfiniteScroll
              dataLength={this.props.restaurants.length}
              next={this.onScroll}
              hasMore={true}
              loader={<LoadingComponent />}>
              {
              
                this.props.restaurants.map((rest, index) =>{
                  return <RestaurantListItem key={index} {...rest}   {...this.props}/>
                })
              }
          </InfiniteScroll> 
        </div>
        }
        </>)
        :
        (
          <>
           {error ?<p>{error}</p>:
        <div className="media content content-container">
          <input
          type="text"
          onChange={this.searchClickevent}
          placeholder="Search By Address,Name,Cuisines"
        ></input>
      

          <div className='content-container outline page-header'>
            <h2 className="page-header__title"><small>Showing restaurants in </small>"<strong>{this.props.city}</strong>"</h2>
          </div>

      {console.log(this.state.filteredData)}    
       
            {
              
              this.state.filteredData.map((rest, index) =>{
                return <RestaurantListItem key={index} {...rest}   {...this.state.filteredData}/>
              })
            }
        </div>
        }
          </>
        )
        }

      
      </div>
    )
  }
};

const mapStateToProps =({restaurants, city, error, likes}, props)=>({
    restaurants,
    city,
    error,
    likes
})

export default connect(mapStateToProps)(ListingPage);