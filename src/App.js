
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';




function App() {
  //what will be called when the page renders
  const[data,setData]=useState("")//display the data in the screen
  const[count,setCount]=useState(0)

  useEffect(()=>{
    
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((response)=>{   //grabbing what it returns
      setData(response.data[1].email);
      console.log("An API was called");
    })
  },[])

  

  
  return (
    <div className="App">
      <h1>hi {data}</h1>
      <h1>hi {count}</h1>
      <button
      onClick={()=>{setCount(count+2)}}
      
      > Click me</button>


    </div>
  );
}

export default App;
