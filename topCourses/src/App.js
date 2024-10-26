import React from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData,apiUrl } from "./data";
import {useState,useEffect} from "react";
import { toast } from "react-toastify";
import Loading from "./components/Loading";

const App = () => {
  //see api call or fetching any data is done in app.js and we pass the data as props to the required component
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const res= await fetch(apiUrl);
      const obj = await res.json();
      setCourses(obj.data);
    }
    catch(err)
    {
      toast.error("Something went wrong.");
    }
    setLoading(false);
  }

  //entire Ui will be rendered , then after that useEffect will get executed
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="flex flex-col min-h-screen gap-4 bg-bgDark2">
      <Navbar></Navbar>
      <Filter filterData={filterData}></Filter>
      <div>
        {
          loading ? <Loading></Loading> : <Cards courses={courses}></Cards>
        }
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
};

export default App;
