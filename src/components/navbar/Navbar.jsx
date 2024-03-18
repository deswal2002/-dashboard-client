import React, { useState } from 'react';
import {
    FaBars,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"All Chart",
            
        },
        {
            path:"/Intensity",
            name:"Intensity Chart",
            
        },
        {
            path:"/Livelehood&Revelence",
            name:"Livelehood&Revelence Chart",
            
        },
        {
            path:"/country",
            name:"Country & Topic Chart",
           
        },
        {
            path:"/Region",
            name:"Region Chart",
            
        },
        
    ]
    return (
        <div className={style.container}>
           <h1 className={style.logo}>Dashboard</h1>
           <div className={isOpen?style.link: style.link_text}>
           {
                   menuItem.map((item, index)=>(
                       
                        <div onClick={()=>navigate(`${item.path}`)} >{item.name}</div>
                       
                   ))
               }
           </div>
           <div className={style.icon} onClick={()=>setIsOpen(!isOpen)}>
            <FaBars/>
           </div>
        </div>
    );
};

export default Navbar