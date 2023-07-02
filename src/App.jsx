import './App.css'
import axios from "axios"
import { useEffect, useState } from 'react'
import Card from './components/card'
import Loader from './components/Loader'

function App() {

  const [ubi, setUbi] = useState()
  const [start, isStart] = useState()
  const [isLoader, setIsLoader] = useState(true)
  const [unit, setUnit] = useState(true)
  const [text, setText] = useState(true)

  useEffect(() => {

    function success(pos) {

      const location = [pos.coords.latitude, pos.coords.longitude,]
      setUbi(location)

    }

    navigator.geolocation.getCurrentPosition(success)

  }, [])

  useEffect(() => {

    if (ubi) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${ubi[0]}&lon=${ubi[1]}&appid=78e0f91bb9cf07fcc534e4c7161efae4`)
        .then((resp) => {

          isStart(resp.data)

          setTimeout(() => {
            setIsLoader(!true)
          }, 1000)

        })
        .catch((error) => console.log(error))
    }
  }, [ubi])

  let icon = ""

  if (start?.weather[0].main === "Clear sky") {
    icon = "/icon/1.svg"
  } else if (start?.weather[0].main === "Few clouds") {
    icon = "/icon/2.svg"
  } else if (start?.weather[0].main === "Scattered clouds") {
    icon = "/icon/3.svg"
  } else if (start?.weather[0].main === "Clouds") {
    icon ="/icon/4.svg"
  } else if (start?.weather[0].main === "Shower rain") {
    icon = "/icon/5.svg"
  } else if (start?.weather[0].main === "Rain") {
    icon = "/icon/6.svg"
  } else if (start?.weather[0].main === "Thunderstorm") {
    icon = "/icon/7.svg"
  } else if (start?.weather[0].main === "Snow") {
    icon = "/icon/8.svg"
  } else if (start?.weather[0].main === "Mist") {
    icon = "/icon/mist"
  }

  const changeInfo = () => {
    setUnit(!unit)
    setText(!text)
  }

  return (
    <>
    {isLoader && <Loader/>}

    <h1 className='app'>Weather app</h1>

    <Card  
    temp = {unit === true? Math.floor(start?.main.temp - 273.15) + " °": Math.floor(start?.main.temp - 273.15 * 1.8 + 32)  + " °"}
    icon = {icon}
    wind = {start?.wind.speed + " m/s"}
    cloud = {start?.clouds.all + " %"}
    pre = {start?.main.pressure + " hPa"}
    name = {start?.name}
    sys = {start?.sys.country}
    wea = {start?.weather[0].main}
    />

    <div className='btn'>
      <button onClick={changeInfo}>{text === true? "Cambiar a F°": "Cambiar a C°"}</button>
    </div>
    </>
  )
}

export default App