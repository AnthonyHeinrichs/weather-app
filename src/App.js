import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [lat, setLat] = useState()
  const [lon, setLong] = useState()
  const [weatherData, setWeatherData] = useState()


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })

    axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
    .then((response) => {
      console.log('second')
      setWeatherData(response.data)
    })
  }, [lat, lon])

  return (
    <>
      <h1>{weatherData ? weatherData.name : ''}</h1>
    </>
  )
}

export default App;
