export default {
    title: "Services",
    name: "services",
    type: "document",
    fields: [
        {
            title: "Head of section",
            name: "titleServices",
            type: "string"
        },
        {
            title:"Body Services",
            name:"body",
            description: "Add you information to block",
            type: "array",
            of: [{type: "richText"}]

        }
       /*  {
            name: "body",
            title: 'Body Services',
            type: 'richText',
          } */
    ],
}