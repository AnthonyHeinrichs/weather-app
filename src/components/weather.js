import { useState } from 'react'
import './weather.css'

const Weather = ({weatherData}) => {
  const temperature = parseInt(weatherData.main.temp)
  const [celsius, setCelsius] = useState(true)

  const handleClick = () => {
    setCelsius(originalValue => !originalValue)
  }



  return (
    <div className='main'>
      <h1 className='location'>{weatherData.name}</h1>
      <p className='weather'>{weatherData.weather[0].main}</p>
      <div className='temp'>
        <p>{celsius ? temperature : temperature*1.8+32}</p>
        <button className='btn' onClick={handleClick}>{ celsius ? '°C' : '°F' }</button>
      </div>
      <img className='icon' src={weatherData.weather[0].icon} alt='weather-icon' />
    </div>
  )
}

export default Weather
