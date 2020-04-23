import React from "react"
import "./Hero.scss"

const Hero = ({}) => {
  return (
    <div className="Hero animated fadeIn">
      <h1>
        <span>Instant </span>
        collaboration for remote teams
      </h1>
      <p>
        All in one place for your remote team to chat, collaborate and track
        project progress
      </p>
      <div className="Hero__input">
        <input type="text" placeholder="Get early access" />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Hero
