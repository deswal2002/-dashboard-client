import React from 'react'
import Intensity from '../../components/intensity/Intensity'
import Navbar from '../../components/navbar/Navbar'

function Chart1({data}) {
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem", background:"#E1EBEE" ,width:"100vw",height:"100vh"}}>
    <div><Navbar/></div>
    <div ><Intensity data={data}/></div>
    </div>
  )
}

export default Chart1