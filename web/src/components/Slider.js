import React from "react"
import Quote from "./Card"

const Slider = ({ slide }) => {
  const { titlePresentation, cardPrice } = slide
 

  return (
    <section>
      <h1> AQUI VA EL TITULO </h1>
      <article>
        {cardPrice.map(card => (
          <Quote key={card._key} card={card} />
        ))}
      </article>
      <div>AQUI VA LOS PUNTOS DEL SLIDE</div>
    </section>
  )
}

export default Slider
