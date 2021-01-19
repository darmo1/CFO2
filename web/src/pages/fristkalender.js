// import React from "react"
// import CardLayout from "../components/CardLayout"
// import Layout from "../components/Layout"
// import MenuArticles from "../components/MenuArticles"

// export const query = graphql`
//   query GET_WEBINARER {
//     allSanityWebinar {
//       edges {
//         node {
//           title
//           body {
//             children {
//               text
//             }
//           }
//           video
//         }
//       }
//     }
//   }
// `
// const fristkalender = ({data}) => {

//   const dataWebinar = data.allSanityWebinar.edges
//   return (
//     <Layout>
//       <MenuArticles />

//       {dataWebinar.map(webinar => (
//         <CardLayout>
//           <div className="container__files-section w-40 pr-2">
//             <iframe
//               className="div-iframe w-100"
//               style={{ width: 250, height: 200 }}
//               src={webinar.node.video}
//             ></iframe>
//             <a hre="#" className="download-button">LAST NED SLIDES</a>
//           </div>
//           <div className="description-resource w-60">
//             <h3>{webinar.node.title}</h3>
//             {
//               webinar.node.body.map( component => {
//                 return component.children.map(element => (
//                   <p>{ element?.text } </p>
//                 )
                 
//                 )
//               })
//             }
         
//           </div>
//         </CardLayout>
//       ))}
//     </Layout>
//   )
// }

// export default fristkalender
