1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

- It took me around 4-5 hours for completing this coding assignment. So far because of shortage of time I have added search functionality where user can enter the city and it will retrieve all the restaurant’s name, image, address, rating, reviews from five from the Zomato API, Also I have added advance search functionality where user can search the restaurants by name, address, cuisines. I would further like to add like functionality and details functionality in which user can click on the image of the restaurant and it will open the detail page in which I would like to display images, name, address, cost for two, Reviews and ratings
Process
1)	I will create the detail component in which using props I will retrieve all the restaurant data 
2)	I will pass the restaurant Id with the link here is the demo <link to={`/detail/${props.restaurant.id’}

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

 searchClickevent(e) {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            filteredData: null,
          };
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
      let data = this.props.restaurants.filter((eachrestaurant) => {
        return (
          eachrestaurant.restaurant.cuisines
            .toLowerCase()
            .includes(e.target.value) ||
          eachrestaurant.restaurant.location.address
            .toLowerCase()
            .includes(e.target.value) ||
          eachrestaurant.restaurant.name.toLowerCase().includes(e.target.value)
        );
      });
      // console.log(data)
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            filteredData: data,
          };
        },
        () => {
          console.log(this.state);
        }
      );
    }

 
3.	How would you track down a performance issue in production? Have you ever had to do this?

There are lot of factors affecting slowdown
Overload server
Slow web request
Network Issue
Code execution

Yes I have done it by implementing worker threads in app which runs parallel


4.	How would you improve the API that you just used?
•	By using JSON serializer  eg protobuf-net
•	By using compression techniques to compress the data that is transmitted over the wire
•	By using faster data access strategies by not using using to much ORMs
•	Use caching so that multiple request to API are eliminated
•	Use Asynchronous methods

5.	Please describe yourself using JSON.
{
“name”:”keval”,
“lastname”:”shah”,
“age”:”23”,
“resident”:”Canada”,
“passion”:[
“programming”,
Vlogging],
“interest”:[
“stockmarket”,
“cricket]
}
6) Avaibility for Interview
  Monday: After 12PM
   Tuesday: After 12PM,  
Wednesday: After 12PM
    Thursday: After 12PM,
   Friday :11Am to 2.00Pm




