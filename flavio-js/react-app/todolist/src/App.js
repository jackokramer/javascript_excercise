import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'React'

function App() {
  return (
    <div className="App">
      <h1>A header</h1>
      <p> a paragraph. lorem lorem ipsum dolor</p>
    </div>
  );
}

const Counter = () =>{
  const[count, setCount]= useState(0)
    return (
      <div>
        <p>You clicked{count} times</p>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
      </div>
    )
}

ReactDom.render(<Counter/>, document.getElementById('app'))

//export default App;
