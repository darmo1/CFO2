export default {
    title: "Prices",
    name: "prices",
    type: "document",
    fields: [
        {
            title: "Main Head",
            name: "headPrice",
            type: "string"
        },
        {
            title: "SubTitle",
            name: "subtitle",
            type: "string"
        },
        {
            title:"Cards Price",
            name:"cardPrice",
            type: "array",
            of: [{type: "cardPrice"}]

        }
    ],
}