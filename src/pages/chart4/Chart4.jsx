import React from 'react'
import Region from  "../../components/region/Region"
import Navbar from '../../components/navbar/Navbar'

function chart4({data}) {
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem", background:"#E1EBEE" ,width:"100vw",height:"100vh"}}>
    <div><Navbar/></div>
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem",marginTop:"8%"}} >
    <div ><Region data={data}/></div>
    </div>
    </div>
    
  )
}

export default chart4