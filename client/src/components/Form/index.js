import React from 'react'

function Form (props) {
  return (
    <div className='container'>
      <form>
        <div className='form-group'>
          <label htmlFor='serach'>
            <h2>Search for Books</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name='search'
            type='test'
            className='form-control'
            placeholder='Search Books'
            id='search'
          />
          <button
            onClick={props.handleFormSubmit}
            className='btn btn-dark mt-3 mb-5'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
export default Form
