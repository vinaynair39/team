import React from "react"
import "./Footer.scss"

const Footer = ({}) => {
  return (
    <footer>
      <div className="Footer">
        <div className="Footer__title">
          <div className="Footer__title-logo">
            <img src={"/footer-logo.png"} alt="" />
          </div>
          <div className="Footer__title-others">
            <h4>Features</h4>
            <h4>Company</h4>
            <h4>Contact Us</h4>
          </div>
        </div>
        <div className="Footer__content">
          <div className="Footer__content-logo">
            <h4>collaborating platform of the teams</h4>
          </div>
          <div className="Footer__content-others">
            <div>
              <h4>video calls</h4>
              <h4>voice calls</h4>
              <h4>chat</h4>
            </div>
            <div>
              <h4>about us</h4>
              <h4>careers</h4>
              <h4>job openings</h4>
            </div>
            <div>
              <h4>9326515133</h4>
            </div>
          </div>
        </div>
        <div className="Footer__copy">
          <div className="Footer__copyright">&copy; copyright Team inc.</div>
          <div className="Footer__copy-subscribe">
            <input type="text" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
