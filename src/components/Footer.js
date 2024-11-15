import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Footer.css"

export default function Navbar() {
  return (
    <nav className="footer">
      <ul>
        <CustomLink to="/contact">Contact Us</CustomLink>
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
