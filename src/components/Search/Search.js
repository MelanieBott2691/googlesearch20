import React from 'react'
import './Search.css'

const Search = props => {
  return (
    <div className='search'>
      <form onSubmit={props.searchBook} action=''>
        <input
          onChange={props.handleSearch}
          type='text'
          placeholder='Enter book to search...'
        />
        <button id='submit-btn' type='submit' className='submit-button'>
          Search
        </button>
      </form>
    </div>
  )
}
export default Search
