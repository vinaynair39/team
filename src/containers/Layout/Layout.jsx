import React from "react"
import "./Layout.scss"
import sizes from "react-sizes"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import DHeader from "../../components/DesktopHeader/Header"
import "animate.css/animate.min.css"
import Head from "../../components/Head/Head"

const Layout = ({ children, invert, desktop }) => {
  return (
    <>
      <Head />
      <div className="Layout">
        {desktop ? <DHeader invert={invert} /> : <Header invert={invert} />}
        {children}
      </div>
      <Footer />
    </>
  )
}

const mapSizesToProps = ({ width }) => ({
  desktop: !width || width > 768,
})

export default sizes(mapSizesToProps)(Layout)
