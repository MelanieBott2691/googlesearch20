import React from 'react'
import './Jumbotron.css'
import Search from '../Search/Search'
function Jumbotron () {
  return (
    <div className='jumbotron text-center'>
      <h1>Google Book Search</h1>
      <Search />
    </div>
  )
}
export default Jumbotron
