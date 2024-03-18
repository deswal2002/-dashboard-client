import React from 'react'
import LIvehood from '../../components/livehood/LIvehood'
import Navbar from '../../components/navbar/Navbar'

function Part2({data}) {
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem", background:"#E1EBEE" ,width:"100vw",height:"100vh"}}>
    <div><Navbar/></div>
    <div style={{marginTop:"8%"}} ><LIvehood data={data}/></div>
    </div>
    
  )
}

export default Part2