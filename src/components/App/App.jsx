import React, { useState } from 'react';
import Meteo from '../Meteo/Meteo';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

import { meteoRequest } from '../../requests/meteoRequests';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [showData, setShowData] = useState(false)
  const [weather, setWeather] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault()
  }
  return (
    <div className="app">
      <div className='app-searchbar'>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={onSubmit}
          setShowData={setShowData}
          weather={weather}
          setWeather={setWeather}
          temperature={temperature}
          setTemperature={setTemperature}
          city={city}
          setCity={setCity}
        />
      </div>
      <div className='app-data'>
        <Meteo
          cityname={'paris'}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={onSubmit}
          showData={showData}
          setShowData={setShowData}
          weather={weather}
          setWeather={setWeather}
          temperature={temperature}
          setTemperature={setTemperature}
          city={city}
          setCity={setCity}
        />
        {/* <Meteo cityname={'suresnes'} />
        <Meteo cityname={'toulouse'} />
        <Meteo cityname={'londres'} />
        <Meteo cityname={'Dakar'} /> */}
        {/* <Meteo zipCode={75000} />
      <Meteo zipCode={62600} />
      <Meteo zipCode={65000} /> */}
      </div>
    </div>
  );
}

export default App;
