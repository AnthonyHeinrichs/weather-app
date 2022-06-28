import './weather.css'

const Weather = ({weatherData}) => {
  console.log(weatherData)
  return (
    <div>
      <p>{weatherData.name}</p>
      <p>{weatherData.weather[0].main}</p>
      <p>{weatherData.main.temp}</p>
    </div>
  )
}

export default Weather
