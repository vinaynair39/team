import React, { useState } from "react"
import { Link } from "gatsby"
import { Twirl as Hamburger } from "hamburger-react"
import "./Header.scss"

const Header = ({ invert }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header>
      <div className="Header">
        <div className="Header__logo">
          <Link to="/">
            {invert ? (
              <img
                className="Header__img-invert animated fadeIn"
                src="/logo-dark.svg"
                alt=""
              />
            ) : (
              <img
                className="Header__img animated fadeIn"
                src={"/logo-desktop.svg"}
                alt=""
              />
            )}
          </Link>
          {/* <img src="/logo.png" alt="" /> */}
        </div>
        <div className="Header__burger">
          <Hamburger
            color={invert ? "#2f3e4d" : "#fff"}
            rounded
            size={25}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <nav
        className={isOpen ? "Header__nav Header__menu-open" : "Header__nav"}
        onClick={() => setOpen(false)}
      >
        <ul
          onClick={() => setOpen(false)}
          className={
            isOpen ? "Header__nav-menu Header__menu-open" : "Header__nav-menu"
          }
        >
          <li
            className={
              isOpen ? "Header__nav-item Header__menu-open" : "Header__nav-item"
            }
          >
            <Link to="/blog/contentful">Blog</Link>
          </li>
          <li
            className={
              isOpen ? "Header__nav-item Header__menu-open" : "Header__nav-item"
            }
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className={
              isOpen ? "Header__nav-item Header__menu-open" : "Header__nav-item"
            }
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className={
              isOpen ? "Header__nav-item Header__menu-open" : "Header__nav-item"
            }
          >
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
