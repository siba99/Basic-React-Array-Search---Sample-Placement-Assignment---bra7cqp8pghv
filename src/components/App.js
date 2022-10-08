import React, { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
          const [searchinput,setSearchinput]=useState("");
          const handle=(e)=>{
                e.preventDefault();
                setSearchinput(e.target.value);   //h
          }
         
  
  return (
    <div id="main">
      <input id="search-input" onChange={handle} value={searchinput}/>
      <h1>Result</h1>
      <ul>
      {searchArray.filter((item)=>{
        if(searchinput==""){
          return ;
        }else if(item.toLowerCase().includes(searchinput.toLowerCase())){
          return item;
        }
      }).map((item,index)=> <li>{item}</li>)}
      </ul>
    </div>
  )
}


export default App;
