import { useState } from 'react'
import './weather.css'

const Weather = ({weatherData}) => {
  const [temp, setTemp] = useState('celsius')

  return (
    <div className='main'>
      <h1 className='location'>{weatherData.name}</h1>
      <p className='weather'>{weatherData.weather[0].main}</p>
      <div className='temp'>
        <p>{parseInt(weatherData.main.temp)}</p>
        <button className='btn' onClick={handleClick}>{ temp === 'celcius' ? '°C' : '°F' }</button>
      </div>
      <img className='icon' src={weatherData.weather[0].icon} alt='weather-icon' />
    </div>
  )
}

export default Weather
