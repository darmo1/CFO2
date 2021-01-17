import React from "react"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Slider from "../components/Slider"
import Services from "../components/Services"
import Prices from "../components/Prices"
import Cover from "../components/Cover"
import {graphql} from 'gatsby'

import "../style/hjem.css"


export const query = graphql`
  query GET_DATA {
    allSanitySliders{ 
    edges{
      node{
        titlePresentation
        cardPrice{
          _key
          quote
          bodyquote
          
        }
      }
    }
  },
  allSanityPrices {
    edges{
      node{
         headPrice
        subtitle
        cardPrice {
          _key
          _type
          heading
          body
        }
      }
    }
  },
  allSanityServices{
    edges{
      node{
        titleServices
        body {
          heading
          body{
            children {
              text
            }
          }
        }
        }
      }
    }
  }
`
export default function Home({data}) {

  return (
    <div className="body">
      <Layout>
        <Cover>
          <h3 className="presentation__text-over p-15-20 container--green t-center">
            ØKONOMIHJELP FOR STARTUPS
          </h3>
          <a href="#contact">
            <button className="btn btn-contact p-15-20"> KONTAKT OSS </button>
          </a>
        </Cover>
        <Services services={data.allSanityServices.edges[0].node} />
        <Prices prices={data.allSanityPrices.edges[0].node}  />
        <Cover>
          <h1 className="box container--green">KONTAKT OSS</h1>
          <Form id="contact" />
        </Cover>
        <Slider  slide ={data.allSanitySliders.edges[0].node}  />
      </Layout>
    </div>
  )
}
