import React from "react"

const Prices = ({ prices }) => {
  console.log("dataaaa", prices)
  return (
    <div className="Priser">
      <article className="priser box">
        <h1 className="box container--green t-center"> {prices.headPrice} </h1>
        <div className="t-center">{prices.subtitle}</div>

        <div className="container box__priser">
          {prices.cardPrice.map(element => (
            <div className="priser container--green" key={element._key}>
              <h1>{element.heading}</h1>
              <div>{element.body}</div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default Prices
