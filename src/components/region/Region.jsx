import React, { useEffect, useState } from 'react'
import style from './Region.module.css'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true; 

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";

function Region({data}) {
    const [region,setregion]=useState([])
    const [intensitys,setintensitys]=useState([])
    const [rel,setrel]=useState([])
    
  
    
    useEffect(()=>{
        apply()
    },[data])
    
    const apply=async ()=>{
        
        let Region = data.map(item => item.region);
        Region = Region.filter((item, index) => Region.indexOf(item) === index);
        const intensity=[];
        const rel=[]
        for(let i=0;i<Region.length;i++){
            let intensityData = data.filter(item => item.region===Region[i]);
            let relevance= intensityData.map(item => item.relevance);
            intensityData = intensityData.map(item => item.intensity);
            const sum = intensityData.reduce((acc, curr) => acc + curr, 0);
            const avg = sum / intensityData.length;
            const sum1 = relevance.reduce((acc, curr) => acc + curr, 0);
            const avg1 = sum1 / relevance.length;
            intensity[i]=avg
            rel[i]=avg1
            if(Region[i]===""){
                Region[i]="Other"
            }
        }
        setintensitys(intensity)
        setregion(Region)
        setrel(rel)
        
    }
    
  return (
    <div className={style.box}>
        
        <Line
          data={{
            labels: region,
            datasets: [
              {
                label: "Relevance",
                type:'line',
                data: rel,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: "rgba(75,192,192,1)",
              },
              {
                label: "Intensity",
                type: 'bar', 
                data:intensitys,
                backgroundColor:'#002D62',
                borderRadius: 5,
                borderColor: "rgb(94.1%,97.7%,100%)",
                

              }
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Region Chart",
              },
            },
          }}
        />
    </div>
  )
}

export default Region