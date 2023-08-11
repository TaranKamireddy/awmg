import logo from '../images/logo.svg'
import './Navbar.css'

export default function Navbar() {
  return (
        <div className="navbar">
          <div className="navbarcontainer">
            <a className="navbar-text" href="/">
              <img className="logo-icon" src={logo} alt="logo" draggable="false"></img>
            </a>
            <div className="navbar-menu">
              <div className="navbar-link">
                <a className="navbar-text" href="/news">News</a>
              </div>
              <div className="navbar-link">
                <a className="navbar-text" href="/services">Services</a>
              </div>
              <div className="navbar-link">
                <a className="navbar-text" href="/resources">Resources</a>
              </div>
              <div className="navbar-link">
                <a className="navbar-text" href="/about">About</a>
              </div>
              <div className="navbar-button">
                <a className="navbar-button-text" href="/contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
  )
 }
