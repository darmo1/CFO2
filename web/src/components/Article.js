import React from "react"
import { Link } from "gatsby"

const Article = ({ Post }) => {
//   console.log("ESTE ES LA DATA DEL POST", Post)
  const { slug, title, publishedAt, mainImage, body } = Post.node
  const {asset} = mainImage

  
  let allText
  body.map(element =>
    element?.children?.map(node => (allText += ` ${node?.text}`))
  )

  return (
    <Link to={`/articles/${slug?.current}`} className="anchor_article">
      <section className="articles">
        <article className="container container--green">
          <div className="container__imagen w-50">
            <img src={asset.url} alt="imagen" style={{width:445, height:295}} />
          </div>
          <div className="container summary flex-column description-resource p-2 w-40">
            <div>
              <time className="summary__date">{publishedAt}</time>
              <h1 className="summary__heading">{title}</h1>
            </div>
            <div className="sumUp_article">{allText.substring(9, 150)}</div>
            <div className="summary__btn "> Les mer </div>
          </div>
        </article>
      </section>
    </Link>
  )
}

export default Article
