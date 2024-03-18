import React,{useEffect, useState} from 'react'
import style from "./Counter.module.css"
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";

function Counter({data}) {
    const [country,setcountry]=useState([])
    const [count,setcount]=useState([])
    useEffect(()=>{
        apply()
    },[data])
    const apply=()=>{
        let topic = data.map(item => item.country);
        let newtopic  = topic.filter((item, index) => topic.indexOf(item) === index);
        let array=[]
        for(let i=0;i<newtopic.length;i++){
            let newdata=topic.filter(item => item===newtopic[i]);
            array[i]=newdata.length
            if(newtopic[i]===""){
                newtopic[i]="Other"
            }
        }
        setcount(array)
        setcountry(newtopic)
    }
    
  return (
    <div className={style.box}>
        <Doughnut
          data={{
            labels: country,
            datasets: [
              {
                label: "Count",
                data: count,
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                  '#7CFC00', 
                  '#ffff00', 
                   '#FF7415', 
                   '#FF0000', 
                   "rgb(255,228,196)",
                   "rgb(165,42,42)",
                   "rgb(0,100,0)",
                   "rgb(255,140,0)",
                   "rgb(60,179,113)",
                   "rgb(128,0,0)"
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Country Chart",
              },
            },
          }}
          />
    </div>
  )
}

export default Counter