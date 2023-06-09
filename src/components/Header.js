import './Header.sass';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {

  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="container">

        <div className="navbar-brand">
          <a className="navbar-item">MyCompany</a>
          <a role="button" className={`navbar-burger  ${menuActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={() => setMenuActive(prev => !prev)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu navbar-end has-text-right ${menuActive ? 'is-active' : ''}`}>
          <Link to="/" className="navbar-item r-item">Home</Link>
          <Link to="/faq" className="navbar-item r-item">Features</Link>
          <Link to="/faq" className="navbar-item r-item">About</Link>
          <Link to="/faq" className="navbar-item r-item">FAQ</Link>

          <div className="navbar-item">
            <p className="control">
              <a className="button is-warning is-outlined">
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}