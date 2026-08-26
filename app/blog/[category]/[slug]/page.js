// react - category 
// react - usestate slug


const products =[
    {
        slug: "phone-17",
        name:"iphone-17",
        price:500000
    },

    {
        slug: "phone-18",
        name:"iphone-18",
        price:600000
    },

    {
        slug: "phone-19",
        name:"iphone-19",
        price:700000
    }
]


export default async function Blog({params}){
    const {slug} = await params
    const product = products.find((product)=>product.slug===slug)
    return(
        <div>
            <h1>products</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

// export default async function slug({params}){
//     // get the values 
//     const{category,slug} = await params
//     return(
//         <div>
//             <h1>Blog details</h1>
//             <p>category:{category}</p>
//             <p>Post:{slug}</p>
//         </div>
//     )
// }