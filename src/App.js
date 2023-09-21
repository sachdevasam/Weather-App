import React, { useEffect, useState } from "react";
import coldBG from "./assets/cold1.jpg";
import hotBG from "./assets/hot.jpg";
import "./index.css";
import "./App.css";
import Discription from "./Component/Discription";
import { getData } from "./WeatherApi";
import Time from "./Component/Time";

const App = () => {
  const [city, setCity] = useState("Rohtak");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [Bg, setBg] = useState(hotBG);

  useEffect(() => {
    const fatchdata = async () => {
      const data = await getData(city, units);
      // console.log(data);
      setWeather(data);

      const threshold = units === "metric" ? "20" : "60";
      if (data.temp <= threshold) setBg(coldBG);
      else setBg(hotBG);
    };
    fatchdata();
  }, [units, city]);
  // const handleunitclick = (e) => {
  //   const button1 = e.currentTarget;
  //   const currentunit = button1.innerText.slice(1);

  //   console.log(currentunit)
  //   const iscelsius = currentunit === "\u00B0 C";
  //   button1.innerText = iscelsius ? "\u00B0 F" : "\u00B0 C";
  //   setUnits (iscelsius ? "metric" : "imperial");
  // };
  const enterkeypressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <>

      <div className="app" style={{ backgroundImage: `url(${Bg})` }}>
    
        <div className="overlay">
          {weather && (
            <div className="container">
              <div className="section section__inputs">
                <input
                  onKeyDown={enterkeypressed}
                  type="text"
                  name="city"
                  placeholder="Enter city name"
                />
                {/* <button onClick={(e) => handleunitclick(e)}>&deg;F</button> */}
                {/* <button  onClick={(e)=>clicktosearch(e)}type="submit" className="fa fa-search"></button> */}
              </div>
              <Time/>
              <div className="section section__temp">
                <div className="icon">
                  <h2>{`${weather.name} , ${weather.country}`}</h2>
                  <br />
                  {/* <img src={img1} style={{height:"20%" , width:"15%"}} alt="weather icon"/> */}
                  <img src={weather.iconURL} alt="weather icon" />
                  <h2>{weather.description}</h2>
                </div>
                <div className="temp">
                  <h2>{`${weather.temp.toFixed()} \u00B0 C
                   `}</h2>
                </div>
              </div>
              <Discription weather={weather} units={units} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default App;


