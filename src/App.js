import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Add,Remove,Multi } from './Action';
import { useState } from 'react';

function App() {
  let[number,setNumber]=useState(0)
  let count =useSelector((count) => count)
  let dispatch =useDispatch();
  const HandleCount =()=>{
    dispatch(Add(number))

  }
  return (
    <div>
      <input type='number' placeholder='Add Number' onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={HandleCount}>Add By Input</button>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(Add(10))}>Add-10</button>
      <button onClick={()=>dispatch(Remove(5))}>Remove-5</button>
      <button onClick={()=>dispatch(Multi(5))}>Multipal-5</button>



    
    </div>
  );
}

export default App;
