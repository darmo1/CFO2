import React from "react"
import CardLayout from "../components/CardLayout"
import Layout from "../components/Layout"
import MenuArticles from "../components/MenuArticles"

export const query = graphql`
  query GET_MALER {
    allSanityMaler {
      edges {
        node {
          title
          document {
            asset {
              url
            }
          }
          body {
            children {
              text
            }
          }
        }
      }
    }
  }
`
const maler = ({ data }) => {
  const dataMaler = data.allSanityMaler.edges
  return (
    <Layout>
      <MenuArticles />

      {dataMaler.map(maler => (
        <CardLayout>
          <div className="container__files-section w-40 pr-2">
            <a>
              <img
                style={{ width: 363, height: 200 }}
                src={maler.node.document.asset.url}
                alt="PFD"
              />
            </a>
            <a hre="#" className="download-button">
              LAST NED SLIDES
            </a>
          </div>
          <div className="description-resource w-60">
            <h3>{maler.node.title}</h3>
            {maler.node.body.map(component => {
              return component.children.map(element => <p>{element?.text} </p>)
            })}
          </div>
        </CardLayout>
      ))}
    </Layout>
  )
}

export default maler
