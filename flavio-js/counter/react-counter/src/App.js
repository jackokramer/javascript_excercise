
//import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';
import Button from './components/button.js'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount =  (increment) =>{
    setCount(count+increment)
  }
  return (
    <div className="App">
      <Button increment={1} onClick={incrementCount}/>
      <Button increment={10} onClick={incrementCount}/>
      <Button increment={100} onClick={incrementCount}/>
      <Button increment={1000} onClick={incrementCount}/>
      <span>{count}</span>
    </div>
  );
}

export default App;
