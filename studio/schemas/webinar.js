export default {
    name:"webinar",
    title:"Webinar",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title Webinar",
            type:"string"
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name:"video",
            title:"Video URL",
            type:"url"
        },
        
    ]
}