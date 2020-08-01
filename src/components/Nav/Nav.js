import React from 'react'
import { Link } from 'react-router-dom'
// import Jumbotron from "../Jumbotron"
import './Nav.css'

function Nav () {
  return (
    <nav className='navbar navbar-expand-lg text-light'>
      <ul>
        <li className='navbar-brand'>
          <Link to='/'>Google Books</Link>
        </li>
        <li className='navbar-brand'>
          <Link to='/search'>Search</Link>
        </li>
        <li className='navbar-brand'>
          <Link to='/saved'>Saved</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
