import './weather.css'

const Weather = ({weatherData}) => {

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <h1>{weatherData.main}</h1>
    </div>
  )
}

export default Weather
