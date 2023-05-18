import React from 'react'
import './index.css'

const Slide = props => {
  const {slide, handleActiveSlide, slidesList} = props
  const {id, heading, description, slideNumber} = slide

  const handleClick = () => {
    handleActiveSlide(id)
  }

  return (
    <li
      onClick={handleClick}
      className="slideItem"
      testid={`slideTab${slideNumber}`}
    >
      <p>{slideNumber}</p>
      <h1 className="slideHeading">{heading}</h1>
      <p className="slideDescription">{description}</p>
    </li>
  )
}

export default Slide
