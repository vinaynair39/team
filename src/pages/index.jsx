import React from "react"
import windowSize from "react-window-size"
import "./index.scss"
import Hero from "../components/Hero/Hero"
import Header from "../components/Header/Header"
import DHeader from "../components/DesktopHeader/Header"
import "animate.css/animate.min.css"

import Footer from "../components/Footer/Footer"

import TPI from "../components/TPI/TPI"
import Card from "../components/Card/Card"
import CardList from "../containers/CardList/CardList"

const index = ({ windowWidth }) => {
  return (
    <div>
      <div className="index-main">
        {windowWidth > 768 ? <DHeader /> : <Header />}
        <Hero />
      </div>
      <div className="index-others">
        <TPI
          animationStyle={"fadeIn"}
          title={"Your hub for teamwork"}
          paragraph={
            "Project dicussions, important documents, free food announcements; they all live tidily together in Team. With your team and information in one easily  searchable place, collaborating online is as easy as collaborating in person "
          }
          imageUrl={windowWidth > 768 ? "/dashboard2.jpg" : "/dashboard.jpg"}
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
          imageUrl={windowWidth > 768 ? "/asset3.jpg" : "/asset1.jpg"}
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
          imageUrl={windowWidth > 768 ? "/asset4.jpg" : "/asset2.jpg"}
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

export default windowSize(index)
