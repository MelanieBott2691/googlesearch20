import React from 'react'
import './Search.css'

export function Input (props) {
  return (
    <div className='input-group input-group-lg'>
      <input
        className='form-control'
        type='text'
        {...props}
        placeholder='Enter book to search...'
      />
    </div>
  )
}
export function SearchButton ({
  type = 'default',
  className,
  children,
  onClick
}) {
  return (
    // <div className='search'>
    //   <form onSubmit={props.searchBook} action=''>
    // <input
    //   onChange={props.handleSearch}
    //   type='text'
    // placeholder='Enter book to search...'
    // />
    <button
      onClick={onClick}
      id='submit-btn'
      type='submit'
      className={['submit-button btn-lg', `btn-${type}`, className].join(' ')}
    >
      {children}
      {/* Search */}
    </button>
  )
}
// export default Search
