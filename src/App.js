import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const WeatherAPI_endpoint = 'https://api.openweathermap.org/data/2.5/weather?'
const API_key = '82401161e4362bdbac9573f0b61d3f82'

function App() {
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const [responseData, setResponseData] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })

    axios.get(`${WeatherAPI_endpoint}lat=${lat}&lon=${long}&appid=${API_key}`)
    .then((response) => {
      setResponseData(response.data)
    })

    console.log(responseData)

  }, [lat, long])

  return (
    <>
      <h1>Hello world!</h1>
      <h2>{responseData.name}</h2>
      <p>{responseData.weather[0].main}</p>
    </>
  )
}

export default App;
