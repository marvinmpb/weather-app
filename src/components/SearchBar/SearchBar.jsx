import React from 'react'
import PropTypes from 'prop-types'

import './searchbar.scss'

function SearchBar(props) {
  const onSubmit = (event) => {
    event.preventDefault()
    console.log('tu submit')
  }
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input type="search" name="search" pattern=".*\S.*" required />
      <button className="search-btn" type="submit">
        <span>Search</span>
      </button>
    </form>
  )
}

SearchBar.propTypes = {}

export default SearchBar
