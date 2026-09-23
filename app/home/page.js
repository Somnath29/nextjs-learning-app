// This example demonstrates how Server and Client Components work together in Next.js. // ProductPage is a Server Component by default, while AddToCart is a Client Component // because it uses onClick and browser-side JavaScript. // This allows us to keep most of the page server-rendered while making only the // interactive button run on the client.






"use client"
import AddToCart from "../AddToCart"
export default function ProductPage(){

    return(
        <div>
        <h1>Product</h1>
        <p> Laptop : 500000</p>
        <AddToCart></AddToCart>
        </div>
    )
}










// "use client"
// export default function Home(){
//     function handleSubmit(){
//         alert("hello");
//     }
//     return(
//         <div>
//         <h1>Welcome to Home Page</h1>
//         <button onClick={handleSubmit}>Click Me</button>
//         </div>
//     )
// }

