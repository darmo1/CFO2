import React from "react"

const Quote = ({ card }) => {
  return (
    <div className="t-center">
      <p>{card.quote}</p>
      <p> {card.bodyquote}</p>
    </div>
  )
}

export default Quote
