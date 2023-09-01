import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Add,Remove,Multi } from './Action';

function App() {
  let count =useSelector((count) => count)
  let dispatch =useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(Add(10))}>Add</button>
      <button onClick={()=>dispatch(Remove(5))}>Remove</button>
      <button onClick={()=>dispatch(Multi(5))}>Multipal</button>



    
    </div>
  );
}

export default App;
