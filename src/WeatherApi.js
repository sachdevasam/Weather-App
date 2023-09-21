// const API_key = "f108f4adb253faa49fe23d5f3cbdf504";
// const api_key = "b14425a6554d189a2d7dc18a8e7d7263";
const API_key = "c0d573b18729da9019711dcbacf8458d";
const makeiconURL=(iconId)=>`http://openweathermap.org/img/wn/${iconId}@2x.png`
const getData = async (city, units = "metric") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`;

  const data = await fetch(url)
  .then ((res)  => res.json())
  .then ((data) => data);
   console.log(data);

const{ weather,
main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
wind:{speed},
sys:{country},name,

}=data;
const {description,icon}=weather[0];
return{
  description,iconURL:makeiconURL(icon),
  temp,feels_like,temp_min,temp_max,pressure,humidity,speed,country,name
  
}
};
export {getData}