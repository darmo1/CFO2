// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import services from "./services"
import prices from "./prices"
import slides from "./slides" 
import slide from "./slide"
import cardPrice from "./cardPrice"
import contact from "./contact"
import social from "./social"
import omOss from "./omOss"
import richText from "./richText"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    category,
    services,
    prices,
    slides,
    slide,
    contact, 
    social,
    cardPrice,
    richText,
    post,
    omOss,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
