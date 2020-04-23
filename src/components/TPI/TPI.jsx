import React from "react"
import windowSize from "react-window-size"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import "./TPI.scss"

const TPI = ({
  title,
  paragraph,
  imageUrl,
  link = false,
  style,
  pMobile,
  animationStyle,
  windowWidth,
  cut = false,
  linkTo = "",
}) => {
  return (
    <ScrollAnimation animateIn={animationStyle} duration={1}>
      <div className="TPI" style={{ ...style }}>
        <div className="TPI__text">
          <h1>{title}</h1>
          {pMobile || (windowWidth >= 768 && <p>{paragraph}</p>)}
          {windowWidth >= 768 && link && (
            <Link className={"TPI__link2"} to={linkTo}>
              <img src="/learn more.svg" alt="" />
            </Link>
          )}
        </div>
        <img className={cut ? "TPI__cut" : ""} src={imageUrl} alt="" />
        {windowWidth < 768 && link && (
          <Link className={cut ? "TPI__link" : "TPI__link2"} to={linkTo}>
            <img src="/learn more.jpg" alt="" />
          </Link>
        )}
      </div>
    </ScrollAnimation>
  )
}

TPI.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.bool,
  cut: PropTypes.bool,
  animationStyle: PropTypes.string,
  pMobile: PropTypes.bool,
  linkTo: PropTypes.string,
}

export default windowSize(TPI)
