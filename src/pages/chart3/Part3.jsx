import React from 'react'
import Counter from '../../components/counter/Counter'
import Topic from '../../components/topic/Topic'
import Navbar from '../../components/navbar/Navbar'

function Part3({data}) {
  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem", background:"#E1EBEE" ,width:"100vw",height:"100vh"}}>
    <div><Navbar/></div>
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem",marginTop:"8%"}} >
        <div ><Counter data={data}/></div>
        <div ><Topic data={data}/></div>
    </div>
    </div>
  )
}

export default Part3