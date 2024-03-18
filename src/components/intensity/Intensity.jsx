import React, { useEffect, useState } from 'react'
import style from './Intensity.module.css'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true; 

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";

function Intensity({data}) {
    const [sectors,setsectors]=useState([])
    const [intensitys,setintensitys]=useState([])
    
    useEffect(()=>{
        apply()
    },[data])
    const getColor = (value) => {
        const colors = [
          '#7CFC00', // Green
          '#ffff00', // Yellow
          '#FF7415', // Orange
          '#FF0000', // Red
        
        ];
        const threshold = Math.max(...intensitys) / 10;
        if (value < threshold) {
          return colors[0];
        } else if (value < threshold * 2) {
          return colors[1];
        } else if (value < threshold * 3) {
          return colors[2];
        } else {
          return colors[3];
        }
      };
    const apply=async ()=>{
        
        let sector = data.map(item => item.sector);
        sector = sector.filter((item, index) => sector.indexOf(item) === index);
        const intensity=[];
        for(let i=0;i<sector.length;i++){
            let intensityData = data.filter(item => item.sector===sector[i]);
            intensityData = intensityData.map(item => item.intensity);
            const sum = intensityData.reduce((acc, curr) => acc + curr, 0);
            const avg = sum / intensityData.length;
            intensity[i]=avg
            if(sector[i]===""){
                sector[i]="Other"
            }
        }
        setintensitys(intensity)
        setsectors(sector)
        
    }
    
    
    
      
  return (
    <div className={style.box}>
        <Bar
          data={{
            labels: sectors,
            datasets: [
              {
                label: "Intensity",
                data: intensitys,
                backgroundColor: intensitys.map((value) => getColor(value)),
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Intensity Chart",
              },
            },
          }}
        />
    </div>
  )
}

export default Intensity