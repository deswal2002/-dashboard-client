import React, { useEffect, useState } from 'react'
import style from './LIvehood.module.css'
import {showFile} from '../../apis/showFile'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true; 

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "black";
function LIvehood({data}) {
    
    const [likelihoods,setlikelihoods]=useState();
    const [relevances,setrelevance]=useState()
    const [topics,settopics]=useState([])
    const [alltopic,setalltopic]=useState([])
    useEffect(()=>{
        apply()
    },[data])
    const apply=async ()=>{

        let topic = data.map(item => item.topic);
        let newtopic  = topic.filter((item, index) => topic.indexOf(item) === index);
        let likelihood = data.map(item => item.likelihood);
        let relevance = data.map(item => item.relevance);
    
        setlikelihoods(likelihood)
        setrelevance(relevance)
        setalltopic(newtopic)
        settopics(topic)
    }
    
    const selecttopic=async (selecttopic)=>{
        
        let newtopic  = data.filter((item) => item.topic=== selecttopic.target.value);
        settopics(newtopic)
        
        let topic = newtopic.map(item => item.topic);
        settopics(topic)
        let likelihood = newtopic.map(item => item.likelihood);
        let relevance = newtopic.map(item => item.relevance);
        setlikelihoods(likelihood)
        setrelevance(relevance)
        
    }
   
  return (
    <div className={style.box}>
        <select
            type="text"
            name="sector"
            className={style.input}
            onClick={selecttopic}
         >
            <option disabled selected>
                            Please select topic
            </option>
            {alltopic.map((element) => (
                            <option>{element}</option>
            ))}           
        </select>
        <Line
          data={{
            labels: topics,
            datasets: [
              {
                label: "Likelihood",
                data: likelihoods,
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Relevance",
                data: relevances,
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Likelihood & Relevance",
              },
            },
          }}
        />
    </div>
  )
}

export default LIvehood