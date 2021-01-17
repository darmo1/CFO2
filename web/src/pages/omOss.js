import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query GET_OMOSS {
    allSanityOmOss {
      edges {
        node {
          title
          mainImage {
            _key
           asset{
            url
          }
          }
          body {
            children {
              _key
              _type
              text
            }
          }
        }
      }
    }
  }
`

const omOss = ({data}) => {
  
    const { title, mainImage, body } = data.allSanityOmOss.edges[0].node;
  

  return (
    <div>
      <Layout>
      <section className="container flex-column">
          <h1 className="title box container container--green">
              {title}
          </h1>
          <div className="container__omoss container">

          <div>
              {body.map( (text, index ) => (
                  <p key={index}> {text.children[0]?.text}  </p>
              ))}
          </div>
          <figure>
              <img src={mainImage?.asset?.url} alt={"HOLI"} />
          </figure>

          </div>

      </section>

      </Layout>
    </div>
  )
}

export default omOss
