import React from "react"
import "./Layout.scss"
import windowSize from "react-window-size"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import DHeader from "../../components/DesktopHeader/Header"
import "animate.css/animate.min.css"
import Head from "../../components/Head/Head"

const Layout = ({ children, invert, windowWidth }) => {
  return (
    <>
      <Head />
      <div className="Layout">
        {windowWidth > 768 ? (
          <DHeader invert={invert} />
        ) : (
          <Header invert={invert} />
        )}
        {children}
      </div>
      <Footer />
    </>
  )
}

export default windowSize(Layout)
