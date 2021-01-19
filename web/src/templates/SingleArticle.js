import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Share from "../components/Share"
import "../style/singleArticle.css"

const SingleArticle = ({ pageContext }) => {
  const { title, mainImage, body, publishedAt: date } = pageContext

  let allText
  body.map(element =>
    element?.children?.map(node => (allText += ` ${node?.text}`))
  )

  return (
      <>
      <Header />
    <section className="container single-article flex-column">
      <div className="single-article__date ">{date}</div>
      <h1 className="single-article__heading mb-2">{title}</h1>
      <div className="co">
        <img src={mainImage.asset.url} />
      </div>
      <div className="single-article__content">{allText}</div>
    <Share />
    </section>
    <Footer />
    </>
  )
}

export default SingleArticle
