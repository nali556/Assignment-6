import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./App.css"


function App() {

  const [posts, setPosts] = useState([])
  const [postsCity, setPostsCity] = useState([])
  // call API
  const fetchPost = async (e) => {
    e.preventDefault()
    const response = await axios("http://ctp-zip-api.herokuapp.com/zip/" + e.target.zip.value)
    setPosts(response.data)
  }
  const fetchPostCity = async (e) => {
    e.preventDefault()
    const response = await axios("http://ctp-zip-api.herokuapp.com/city/" + e.target.city.value)
    setPostsCity(response.data)
    console.log(postsCity)
  }


  return (
    <div className="App">
      <form onSubmit={fetchPost}>
        <label for="zip">Zip Code</label>
        <input type="text" id="zip" name="zip"></input> <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      {posts.map((element,key) => {
        return(
          <p key={key}>{element.City}</p>
        )
      })}

      <form onSubmit={fetchPostCity}>
        <label for="city">City Name</label>
        <input type="text" id="city" name="city"></input> <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      
      {postsCity.map((element,key) => {
        return(
          <p key={key}>{element}</p>
        )
      })}
      
      <button>Click to get a random zip code</button>
    </div>
  );
}

export default App;