import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">MyCompany</a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu navbar-end">
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
    </nav>
  );
}