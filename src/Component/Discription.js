import React from 'react'
 import {FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
 import {BiHappy} from "react-icons/bi"
 import {MdCompress, MdOutlineWaterDrop} from "react-icons/md"

function Discription({weather,units}) {
const tempUnit = units==="metric" ? "\u00B0 C": "\u00B0 F"
const windUnit = units==="metric" ? "m/s": "m/h"

  const card=[
    {
      id:1,
      icon:<FaArrowDown/>,
      title:"min",
      data:weather.temp_min.toFixed(),
      unit:tempUnit,
    },
    {
      id:2,
      icon:<FaArrowUp/>,
      title:"max",
      data:weather.temp_max.toFixed(),
      unit:tempUnit,
    },
    {
      id:3,
      icon:<BiHappy/>,
      title:"feels like",
      data:weather.feels_like.toFixed(),
      unit:tempUnit,
    },
    {
      id:4,
      icon:<MdCompress/>,
      title:"pressure",
      data:weather.pressure,
      unit:"hpa",
    },
    {
      id:5,
      icon:<MdOutlineWaterDrop/>,
      title:"humidity",
      data:weather.humidity,
      unit:"%",
    },
    {
      id:6,
      icon:<FaWind/>,
      title:"wind speed",
      data:weather.speed,
      unit:windUnit,
    },

  ]
  return (
    
      <div className="section section__discription">
      {card.map(({id,icon,title,data,unit})=>(
        <div  key={id}className="card">
          <div className="discription__card-icon">
          {icon}
            
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
        ))}
        </div>
       
    

    
  )
}

export default Discription
