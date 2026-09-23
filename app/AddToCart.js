// https://jsonplaceholder.typicode.com/users

"use client";

import { useEffect, useState } from "react";

export default function Students() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch the API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading the students...</p>;
    }

    return (
        <div>
            <h1>Student Data</h1>

            {students.map((student) => (
                <div key={student.id}>
                    {student.id}
                    <p>{student.name}</p>
                </div>
            ))}
        </div>
    );
}


// "use client"
// import { useState } from "react";

// export default function SearchBox(){
//     const [search , setSearch] = useState("")
//     return(
//         <div>
//             <input
//             type = "text"
//             placeholder= "Search for students..."
//             value = {search}
//             onChange={(e)=>setSearch(e.target.value)}
//             ></input>
//             <p>Search Value: {search}</p>
//         </div>
//     )
// }




// "use client"
// export default function AddToCart(){
//     function handleClick(){
//         alert("Product successfully added into the cart.")
//     }
//     return(
//         <div>
//             <button onClick = {handleClick}>Add To Cart</button>
//         </div>
//     )
