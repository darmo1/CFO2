import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import MenuArticles from "../components/MenuArticles"
import Article from "../components/Article"

export const query = graphql`
  query GET_POST {
    allSanityPost {
      edges {
        node {
          _id
          publishedAt
          slug {
            _key
            _type
            current
          }
          title
          mainImage {
          asset {
            id
            url
          }
        }
          body {
            _key
            _type
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

const articles = ({ data }) => {
  const posts = data.allSanityPost.edges
  console.log('this is posts', posts)

  return (
    <div>
      <Layout>
        <MenuArticles />

        {posts.map(post => (
          <Article key={post.node._id} Post={post} />
        ))}
      </Layout>
    </div>
  )
}

export default articles
