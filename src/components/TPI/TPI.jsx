import React from "react"
import PropTypes from "prop-types"
import sizes from "react-sizes"

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
  desktop,
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
          {pMobile || (desktop && <p>{paragraph}</p>)}
          {desktop && link && (
            <Link className={"TPI__link2"} to={linkTo}>
              <img src="/learn more.svg" alt="" />
            </Link>
          )}
        </div>
        <img className={cut ? "TPI__cut" : ""} src={imageUrl} alt="" />
        {desktop && link && (
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

const mapSizesToProps = ({ width }) => ({
  desktop: !width || width > 768,
})

export default sizes(mapSizesToProps)(TPI)
