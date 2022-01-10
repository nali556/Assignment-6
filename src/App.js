import React, { useEffect, useState } from "react";
import axios from 'axios'


function App() {

  const [posts, setPosts] = useState([])

  // call API
  const fetchPost = async (e) => {
    e.preventDefault()
    console.log(e.target.zip.value)
    const response = await axios("http://ctp-zip-api.herokuapp.com/zip/" + e.target.zip.value)
    console.log(response.data)
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App">
      <form onSubmit={fetchPost}>
        <label for="zip">Zip Code</label>
        <input type="text" id="zip" name="zip"></input> <br></br>
        <input type="submit" value="Submit"></input>
      </form>
      <p>{posts.map(element => {
        console.log(element.City)
        return(
          <p>{element.City}</p>
        )
      })}</p>
      
      <button>Click to get a random zip code</button>
    </div>
  );
}

export default App;