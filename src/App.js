import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {

  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      await fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,lon])

  return (
    <div className="app">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <h1 className='main-header'>Please provide your location...</h1>
      )}
    </div>
  );
}
