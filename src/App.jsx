import Dashbox from './pages/Dashbox/Dashbox'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Chart1 from './pages/chart1/Chart1';
import Part2 from './pages/chart2/Part2';
import Part3 from './pages/chart3/Part3';
import Chart4 from './pages/chart4/Chart4';
import {showFile} from './apis/showFile';
import React,{useState,useEffect} from 'react'
const apiUrl = __API_URL__;
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    apply()
  },[])
  const apply=async ()=>{
    const file=await showFile()
    setData(file)

  }
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashbox data={data}/>}/>
      <Route path='/Intensity' element={<Chart1 data={data}/>}/>
      <Route path='/Livelehood&Revelence' element={<Part2 data={data}/>}/>
      <Route path='/country' element={<Part3 data={data}/>}/>
      <Route path='/Region' element={<Chart4 data={data}/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
