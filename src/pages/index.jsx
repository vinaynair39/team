import React from "react"
import "./index.scss"
import sizes from "react-sizes"

import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import DHeader from "../components/DesktopHeader/Header"
import "animate.css/animate.min.css"
import Footer from "../components/Footer/Footer"

import TPI from "../components/TPI/TPI"
import CardList from "../containers/CardList/CardList"
import Head from "../components/Head/Head"

const index = ({ desktop }) => {
  return (
    <div>
      <Head />
      <div className="index-main">
        {desktop ? <DHeader /> : <Header />}
        <Hero />
      </div>
      <div className="index-others">
        <TPI
          animationStyle={"fadeIn"}
          title={"Your hub for teamwork"}
          paragraph={
            "Project dicussions, important documents, free food announcements; they all live tidily together in Team. With your team and information in one easily  searchable place, collaborating online is as easy as collaborating in person "
          }
          imageUrl={!desktop ? "/dashboard.jpg" : "/dashboard2.jpg"}
          link={true}
          linkTo={"/features"}
          cut={true}
        />
        <TPI
          animationStyle={"fadeIn"}
          style={{
            marginTop: 0,
            flexDirection: "row-reverse",
          }}
          title={"Single task management"}
          paragraph={
            "Project dicussions, important documents, free food announcements; they all live tidily together in Team. With your team and information in one easily  searchable place, collaborating online is as easy as collaborating in person "
          }
          imageUrl={desktop ? "/asset3.jpg" : "/asset1.jpg"}
          link={true}
          pMobile={false}
          linkTo={"/features"}
        />
        <TPI
          animationStyle={"fadeIn"}
          title={"Scheduling that actually works!"}
          paragraph={
            "Project dicussions, important documents, free food announcements; they all live tidily together in Team. With your team and information in one easily  searchable place, collaborating online is as easy as collaborating in person "
          }
          imageUrl={desktop ? "/asset4.jpg" : "/asset2.jpg"}
          link={true}
          linkTo={"/features"}
          pMobile={false}
        />
        <CardList />
      </div>
      <Footer />
    </div>
  )
}
const mapSizesToProps = ({ width }) => ({
  desktop: !width || width > 768,
})
export default sizes(mapSizesToProps)(index)
