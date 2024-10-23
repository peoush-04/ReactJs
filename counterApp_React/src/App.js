import "./App.css";
import React, { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
  function decrease(){
    setCount(count-1);
  }
  function increase(){
    setCount(count+1);
  }
  function reset(){
    setCount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] text-2xl">Increment && Decreament</div>
      <div className="flex align-center bg-white rounded-sm gap-12 py-3">
        <button onClick={decrease} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <button onClick={increase} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick={reset} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
   </div>
  );
}

export default App;
