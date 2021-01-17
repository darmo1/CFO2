export default {
title:"Information services",
  name: "richText",
  type: "object",
  fields:[
    {
        title: "Heading",
        name: "heading",
        type: "string",
      },
      {
        title: "Body List",
        name: "body",
        type: "array",
        of: [{type:"block"}]
      },
]
};
