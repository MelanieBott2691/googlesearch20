import React from 'react';
import { Link } from 'react-router-dom';
// import Jumbotron from "../Jumbotron"
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <ul>
        <li className="navbar-brand">
          <Link to="https://play.google.com/store/books?utm_source=na_Med&utm_medium=hasem&utm_content=Jan0219&utm_campaign=Evergreen&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-bk-Evergreen-Jan0219-Text_Search_BKWS-id_100476_%7cEXA%7cONSEM_kwid_43700019968713270&gclid=Cj0KCQjwpZT5BRCdARIsAGEX0zmrErwzUXpvdL0UxjovL3BD5KzREMbcFKx2sVwapQlMQ_WWUW5iJHYaAj5BEALw_wcB&gclsrc=aw.ds">
            Google Books
          </Link>
        </li>
        <li className="navbar-brand">
          <Link to="/search">Search</Link>
        </li>
        <li className="navbar-brand">
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
