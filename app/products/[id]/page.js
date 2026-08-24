// **********************************************************************
//  Normal routing: /about → fixed route
// Dynamic routing: /product/[id] → variable route

// A common use case is product pages, where you don't want to create 1,000 separate pages for 1,000 products.

// **********************************************************************


import { notFound } from "next/navigation"

export default async function Product({params}){
    const {id} = await params;
    const response = await fetch(`https://dummyjson.com/products/${id}`)
     if(!response.ok){
        notFound();
     }
    const product = await response.json()

    return(
        <div>
            <h1>Product Details</h1>
            <img 
            src = {product.thumbnail} width ="300"/>
            <h2>Product Title: {product.title}</h2>
            <p>Product Price: {product.price}</p>
            <p>Product Rating: {product.rating}</p>
            <p>Product Category: {product.category}</p>
            <p>Product Stock: {product.stock}</p>
        </div>
    )
}


// const products = [
//     {
//         id: 101,
//         name : "iphone17",
//         price : 500000
//     },

//     {
//         id: 102,
//         name : "iphone18",
//         price : 600000
//     },

//     {
//         id: 103,
//         name : "iphone19",
//         price : 800000
//     }
// ]

// export default async function Productpage({params}){

//     const {id} = await params
//     const Product = products.find((item) => item.id === parseInt(id));

//     if(!Product){
//             notFound()
//         }

//     return(
//         <div>
//             <h1>Product Details</h1>
//             <p>Product Name:  {Product.name} </p>
//             <p>Product Price: {Product.price} </p>
//             <p>Product ID: {id} </p>
//         </div>

        
//     )

    
    
// }