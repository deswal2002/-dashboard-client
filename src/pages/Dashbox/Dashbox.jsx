import Intensity from '../../components/intensity/Intensity'
import Region from  "../../components/region/Region"
import LIvehood from '../../components/livehood/LIvehood'
import Counter from '../../components/counter/Counter'
import Topic from '../../components/topic/Topic'
import Navbar from '../../components/navbar/Navbar'
import style from "./Dashbox.module.css"

function Dashbox({data}) {
  return (
    <>
    
    <div style={{display:'flex',flexWrap:"wrap",gap:"2rem", background:"#E1EBEE"}}>
      <div><Navbar/></div>
        <div ><Intensity data={data}/></div>
        <div ><LIvehood data={data}/></div>
        <div ><Counter data={data}/></div>
        <div ><Topic data={data}/></div>
        <div ><Region data={data}/></div>
    </div>
    </>
  )
}

export default Dashbox