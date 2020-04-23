import React from "react"
import Layout from "../containers/Layout/Layout"
import { Link } from "gatsby"
import "./NotFoundPage.scss"

const NotFoundPage = ({}) => {
  return (
    <Layout invert={true}>
      <div className="nf404">
        <h1>Oops! The site is still under construction. Checkout out our</h1>
        <Link to="blog/contentful">blog!</Link>
        <img
          className="animated fadeIn delay-1s"
          src="/construction.svg"
          alt=""
        />
      </div>
    </Layout>
  )
}

export default NotFoundPage
