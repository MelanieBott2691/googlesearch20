import React from 'react'
// import { Link } from 'react-router-dom'
// import Jumbotron from "../Jumbotron"
import './style.css'

function Nav () {
  return (
    <nav className='navbar navbar-expand-lg text-light'>
      <ul>
        <a className='navbar-brand' href='/'>
          Google Books
        </a>
        <a className='navbar-brand search' href='/'>
          Search
        </a>
        <a className='navbar-brand saved' href='/saved'>
          Saved
        </a>
      </ul>
    </nav>
  )

  //   <nav className='navbar navbar-expand-lg text-light'>
  //     <div className='container'>
  //       <Link className='navbar-brand' to='/'>
  //         Google Books
  //       </Link>
  //       <ul className='navbar-nav'>
  //         <li className='nav-item'>
  //           <Link
  //             to='/search'
  //             className={
  //               window.location.pathname === '/search'
  //                 ? 'nav-link active'
  //                 : 'nav-link'
  //             }
  //           >
  //             Search
  //           </Link>
  //         </li>
  //         <li className='nav-item'>
  //           <Link
  //             to='/saved'
  //             className={
  //               window.location.pathname === '/saved'
  //                 ? 'nav-link-active'
  //                 : 'nav-link'
  //             }
  //           >
  //             Saved
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>

  //   <Jumbotron/>
  // )
}
export default Nav
