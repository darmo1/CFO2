export default {
    title: "Sliders",
    name: "sliders",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "titlePresentation",
            description: "Name of section",
            type: "string"
        },
        {
            title:"Slide",
            name:"cardPrice",
            description: "Click in botton to create slide",
            type: "array",
            of: [{type: "slide"}]

        }
    ],
}