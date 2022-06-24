import './weather.css'

const Weather = ({weatherData}) => {

  return (
    <div className='main'>
      <h2 className='location'>{weatherData.data.location}</h2>
      <h2 className='temp'>{weatherData.data.temp} C</h2>
      <h2 className='weather'>{weatherData.data.weather}</h2>
    </div>
  )
}

export default Weather
