import React from "react"
import { Link } from "gatsby"
import "./Header.scss"

const Header = ({ invert = false }) => {
  return (
    <header>
      <div className="DHeader animated fadeIn">
        <div className="DHeader__logo">
          <Link to="/">
            <img
              src={invert ? "/logo-dark.svg" : "/logo-desktop.svg"}
              className={
                invert
                  ? "DHeader__img2 animated fadeIn"
                  : "DHeader__img animated fadeIn"
              }
              alt=""
            />
          </Link>
        </div>
        <ul className={invert ? " DHeader__navs2" : "DHeader__navs"}>
          <li className={invert ? "DHeader__nav-item2" : "DHeader__nav-item"}>
            <Link to="/blog/contentful">Blog</Link>
          </li>
          <li className={invert ? "DHeader__nav-item2" : "DHeader__nav-item"}>
            <Link to="/services">Services</Link>
          </li>
          <li className={invert ? "DHeader__nav-item2" : "DHeader__nav-item"}>
            <Link to="/contact">Contact</Link>
          </li>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </ul>
      </div>
    </header>
  )
}

export default Header
