import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home"> Home Page</Link>
          </li>
          <li>
            <Link to="/portfolio"> Portfolio</Link>
          </li>
          <li>
            <Link to="/about"> Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
