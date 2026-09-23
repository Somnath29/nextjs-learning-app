export const dynamic = "force-dynamic"
export default async function ProductPage() {
    // api - https://jsonplaceholder.typicode.com/posts
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1" ,
        {
            next:{
                revalidate:60
            }
        })

    const products = await response.json()
    return(
        <div>
            <h1>posts:</h1> 
            <h1>{products.body}</h1><br></br>
            <p>{products.title}</p>
        </div>
    )
}