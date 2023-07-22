import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../images/logo.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="logo" draggable="false"></img>
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
