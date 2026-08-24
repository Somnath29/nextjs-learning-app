// Normal routing: /about → fixed route
// Dynamic routing: /product/[id] → variable route

// A common use case is product pages, where you don't want to create 1,000 separate pages for 1,000 products.

export default async function Productpage({params}){

    const {id} = await params
    return(
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {id} </p>
        </div>
    )
    
}