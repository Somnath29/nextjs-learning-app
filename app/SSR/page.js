export const dynamic = "force-dynamic"
export default async function ProductPage(params) {
    // api - https://jsonplaceholder.typicode.com/posts
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1" ,
         {cache: "no-store"})

    // at the top u can also write :export const dynamic = "force-dynamic"
    // if SSR - use cache:no-store
    // if SSG - cache:force-cache
    // if ISR - next:{
    // revalidate:60
    // }

    // whenever we put req to server , it will not use any cache
    // cache:"no-store it will become an ssr component 
    const products = await response.json()
    return(
        <div>
            <h1>posts:</h1> 
            <h1>{products.body}</h1><br></br>
            <p>{products.title}</p>
        </div>
    )
}