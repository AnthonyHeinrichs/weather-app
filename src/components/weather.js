import './weather.css'

const Weather = ({weatherData}) => {

  return (
    <div className='main'>
      <h2 className='location'>{weatherData.data.location}</h2>
      <h2>{weatherData.data.temp}</h2>
      <h2>{weatherData.data.weather}</h2>
    </div>
  )
}

export default Weather
