import React from "react"
import CardLayout from "../components/CardLayout"
import Layout from "../components/Layout"
import MenuArticles from "../components/MenuArticles"

const fristkalender = () => {
  return (
    <Layout>
      <MenuArticles />
      <CardLayout>
        <div className="container__files-section w-40 pr-2">
          <iframe
            className="div-iframe w-100"
            style={{ width: 250, height: 200 }}
          ></iframe>
          <a className="download-button">LAST NED SLIDES</a>
        </div>
        <div className="description-resource w-60">
          <h3>TITULO</h3>
          <p>Aqui va lo demas</p>
        </div>
      </CardLayout>
    </Layout>
  )
}

export default fristkalender
