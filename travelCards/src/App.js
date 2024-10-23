import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {
  const [toursData,settoursData] = useState(data);

  function removeTourHandler(id){
    const newTour = toursData.filter((tour)=> tour.id!==id);
    settoursData(newTour);
  }

  //if all tours removed 
  if(toursData.length===0)
  {
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        {/* //when we click on refresh then all tours comes back and gets displayed on UI , so using setTourData re-set the toursData with 'data '  */}
        <button onClick={()=> settoursData(data)}>Refresh</button>
      </div>
    );
  }

  return(
    <div className="container">
      <h1 className="title">Plan with Peoush</h1>
      <Tours obj={toursData} removeTour={removeTourHandler}></Tours> 
    </div>
  )
};

export default App;
