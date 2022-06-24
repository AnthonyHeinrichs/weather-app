import { useState, useEffect } from 'react'
import Weather from './components/weather'
import './App.css';

function App() {
  const [lat, setLat] = useState()
  const [lon, setLong] = useState()
  const [weatherData, setWeatherData] = useState()

  setWeatherData( {
    location: 'Berlin',
    weather: 'Sunny',
    temp: 20
  })


  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setLat(position.coords.latitude)
  //       setLong(position.coords.longitude)
  //     })

  //     await fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //       setWeatherData(result.data)
  //     })
  //   }
  //   fetchData()
  // }, [lat,lon])

  return (
    <>
     {weatherData ? <Weather weatherData={weatherData} /> : (<div></div>)  }
    </>
  )
}

export default App;
