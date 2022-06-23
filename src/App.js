import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
  })

  const location = 'Berlin, Germany'

  return (
    <>
      <h1>Hello world!</h1>
      <p>Your location is {location}</p>
      <p>Your latitude is {lat}</p>
      <p>Your longitude is {long}</p>
    </>
  )
}

export default App;
