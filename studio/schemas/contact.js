export default {
    title:"Contact",
    name: "contact",
    type: "document",
    fields: [
        {
            title:"Company",
            name: "company",
            type:"string"
        },
        {
            title:"Phone",
            name: "phone",
            type:"number"
        },
        {
            title:"Country",
            name: "country",
            type:"string"
        },
        {
            title:"City",
            name: "city",
            type:"string"
        }, {
            title:"other",
            name: "other",
            description:"Add information relevant",
            type:"string"
        },
        {
            title:"Social List",
            name: "socialList",
            description: "Add social media",
            type:"array",
            of:[{
                type: "social",
            }]
        },

    ]
}