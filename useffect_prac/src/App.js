import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  //cleaning up
  useEffect(() => {
    console.log("added");
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
  console.log("added2");

  return () =>{
    console.log("removed"); 
    clearTimeout(timer);
  }
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}


export default App;
