import React,{useState} from "react";
import "./App.css"

function App() {
  const [count , setCount] = useState(0)
  return (
    <div className="App">
      
      <header>
            <h1>Counter App</h1>
      </header>
      <h2>present count is {count}</h2>
     
      <button onClick={() => setCount(0)}>reset count</button>
      
      <button onClick={() => setCount(count+1)}>increase count</button>
      
      <button onClick={() => (count === 0 ? setCount(0): setCount(count-1))}>decrease count</button>
    </div>
  );
}

export default App;
