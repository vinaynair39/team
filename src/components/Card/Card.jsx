import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import "./Card.scss"

const Card = ({ rating, comment, imageUrl, name, position }) => {
  const ref = useRef(null)
  useEffect(() => {
    return () => {
      ref.current.classList.add("fadeIn")
    }
  }, [])
  const stars = n => {
    let images = []
    let i = 1
    while (i <= 5) {
      if (i <= n) {
        i++
        images.push(<img src="/star.svg" alt="" />)
      } else {
        i++
        images.push(<img src="/star-empty.svg" alt="" />)
      }
    }
    return images
  }
  return (
    <div ref={ref} className="Card animated">
      <div className="Card__stars">{stars(rating).map(image => image)}</div>
      <p>{comment}</p>
      <div className="Card__author">
        <div className="Card__author-data">
          <img src={imageUrl} alt="" />
          <div className="Card__author-name">
            <h5>{name}</h5>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  rating: PropTypes.number,
  comment: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
}

export default Card
