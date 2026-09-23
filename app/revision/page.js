"use client"; 
//CSR 

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    // useRouter when navigation happens through JS
    const router = useRouter();

    const [username, setUsername] = useState("");

    function handleLogin() {
        if (username === "") {
            alert("Please enter your name");
            return;
        }

        router.push("/dashboard");
        // router.back("")
        // router.forward("")
        // router.replace("/login")
    }

    return (
        <div>
            <h1>Login</h1>

            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}







// import Link  from "next/link";
// // useRouter

// export default function Test(){
//     return(
//         <div>
//             <p>This is for revision</p>
//             {/* { Link in nextjs} */}
//             <Link href = "">Dashboard</Link>
//             {/* using link instead of <a> - no refresh */}
//         </div>
//     );
// }