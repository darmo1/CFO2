import React from "react"

const Services = ({ services }) => {
  const { body, titleServices } = services

  return (
    <section className="front-page-section__tjenester">
      <article className="box">
        <h1 className="box container--green t-center"> {titleServices} </h1>
        <div>
          {body.map( service => (
            <>
              <h1>{service.heading}</h1>
              <ul>
                {service.body.map( (item, index) => (
                <li key={index}> {item.children[0]?.text} </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Services
