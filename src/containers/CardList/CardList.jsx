import React, { useState, useEffect } from "react"
import { data } from "./data"
import sizes from "react-sizes"

import ScrollAnimation from "react-animate-on-scroll"

import "./CardList.scss"
import Card from "../../components/Card/Card"

let numOfCards = 1

const CardList = ({ windowWidth }) => {
  const [sequence, setSequence] = useState({
    minValue: 0,
    maxValue: numOfCards,
  })

  useEffect(() => {
    if (windowWidth < 800) {
      numOfCards = 1
    } else if (windowWidth >= 1100 && windowWidth < 1400) {
      numOfCards = 3
    } else if (windowWidth >= 800 && windowWidth < 1120) {
      numOfCards = 2
    } else {
      numOfCards = 4
    }
    setSequence({ ...sequence, maxValue: numOfCards })
  }, [windowWidth])

  const handleNext = () => {
    if (!(sequence.maxValue == data.length)) {
      setSequence({
        minValue: sequence.minValue + 1,
        maxValue:
          sequence.maxValue + 1 < data.length
            ? sequence.maxValue + 1
            : data.length - 1,
      })
    }
  }

  const handlePrevious = () => {
    if (!(sequence.minValue == 0)) {
      setSequence({
        minValue: sequence.minValue - 1 > 0 ? sequence.minValue - 1 : 0,
        maxValue: sequence.maxValue - 1,
      })
    }
  }

  console.log(sequence)
  return (
    <ScrollAnimation animateIn={"fadeIn"} duration={1}>
      <div className="CardList">
        <div className="CardList__text">
          <h1>What people say about the team</h1>
        </div>
        <div className="CardList__items animated">
          {data.slice(sequence.minValue, sequence.maxValue).map(x => (
            <Card key={x.comment} {...x} />
          ))}
        </div>
        {/* <div className="CardList__arrows">
        <img src="/arrow-left.svg" alt="" onClick={handlePrevious} />
        <img src="/arrow-right.svg" alt="" onClick={handleNext} />
      </div> */}
      </div>
    </ScrollAnimation>
  )
}

const mapSizesToProps = ({ width }) => ({
  windowWidth: !width || width,
})

export default sizes(mapSizesToProps)(CardList)
