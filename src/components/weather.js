import './weather.css'

const Weather = ({weatherData}) => {
  console.log(weatherData)
  return (
    <div className='main'>
      <h1 className='location'>{weatherData.name}</h1>
      <p className='weather'>{weatherData.weather[0].main}</p>
      <p className='temp'>{parseInt(weatherData.main.temp)} °C</p>
      <img className='icon' src={weatherData.weather[0].icon} alt='weather-icon' />
    </div>
  )
}

export default Weather
