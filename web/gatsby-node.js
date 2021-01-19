const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const articleTemplate = path.resolve(`src/templates/SingleArticle.js`)
    const result = await graphql(`
        query GET_DATA_ARTICLE{
            allSanityPost{
                edges{
                  node{
                    _id
                    publishedAt
                    slug{
                      
                      current
                    }
                    title
                    mainImage{
                      asset{
                        id
                        url
                      }
                    }
                    body{
                      _key
                      _type
                      children{
                        text
                      }
                    }
                    
                  }
                }
              }
          }
    `)

    if(result.errors){
        throw result.errors
    }

    console.log('this is result',result)

    result.data.allSanityPost.edges.forEach(({node})=> {
        createPage({
            path:`/articles/${node.slug.current}`,
            component: articleTemplate,
            context: node
            
        })
    })
}