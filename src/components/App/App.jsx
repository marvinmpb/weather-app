import React from 'react';
import Meteo from '../Meteo/Meteo';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='app-searchbar'>
        <SearchBar />
      </div>
      <div className='app-data'>
        <Meteo cityname={'paris'} />
        <Meteo cityname={'suresnes'} />
        <Meteo cityname={'toulouse'} />
        <Meteo cityname={'londres'} />
        <Meteo cityname={'Dakar'} />
        {/* <Meteo zipCode={75000} />
      <Meteo zipCode={62600} />
      <Meteo zipCode={65000} /> */}
      </div>
    </div>
  );
}

export default App;
