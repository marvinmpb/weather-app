import React from 'react'
import PropTypes from 'prop-types'
import { meteoRequest } from '../../requests/meteoRequests';

import './searchbar.scss'

function SearchBar({ inputValue, setInputValue, onSubmit, setShowData, setWeather, setTemperature, setCity }) {
  const handleChange = (event) => {
    setInputValue(event.target.value)
    setShowData(false)
  }

  const callRequest = async () => {
    const response = await meteoRequest(inputValue);
    try {
      // verifier response.status

      setTemperature(response.data.main.temp);
      setCity(response.data.name);
      setWeather(response.data.weather[0]);
      setShowData(true)

    } catch (err) {

    }

  };


  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input type="search" name="search" pattern=".*\S.*" required onChange={handleChange} />
      <button className="search-btn" type="submit" onClick={callRequest}>
        <span>Search</span>
      </button>
    </form>
  )
}

SearchBar.propTypes = {}

export default SearchBar
