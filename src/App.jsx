import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("Boston")
  const [weather, setWeather] = useState({})
 const api = {
  key: "f2e45a3744c6e41e4c8d896e9e8453bb",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchPressed = () => {
  fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
.then(res => res.json())
.then((result) => {
setWeather(result)
})
}

  return (
  
    <div className='App'>
      <header className='App-header'>
   <h1>Weather App</h1>
   
   <div>
   <input type='text' placeholder='Enter city/town...'
   onChange = {(e) => setSearch(e.target.value)}
   >

   </input>
   <button onClick = {searchPressed}>Search</button>
</div>
{typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°F</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
</header>
    
    </div>
  )
}

export default App
