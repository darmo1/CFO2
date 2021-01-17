// const path = require('path')

// exports.createPages = async ({graphql, actions}) => {

//     const { createPage } = actions
//     const result = await graphql(`
//         query {
//            slider: allSanitySliders {
//                 nodes {
//                   _id
//                   titlePresentation
//                   cardPrice {
//                     _key
//                     bodyquote
//                     quote
//                   }
//                 }
//               }
//         }
//     `)

//     //Create Pages
//     result.data.slider.nodes.forEach(slide => {
//         createPage({
//             path: "",
//             component: path.resolve('./src/pages/'),
//             context: {
//                 _id: 
//             }
//         })
//     });
// }