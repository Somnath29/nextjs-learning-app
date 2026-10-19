// main home page 

// export default function Home(){
//   return(
//     <div>
//       <h1 >Hello , NextJs. </h1>
//       <p>This is the welcome page</p>
//     </div>

//     // <> // fragments
//     // <h1>Hello</h1>
//     // </>
//   )
// }




// "use client";
// import { useState, useEffect } from "react";

// export default function Home() {
//     const [student, setStudents] = useState([]);

//     useEffect(() => {
//         fetch("/api3/students")
//             .then((response) => response.json())
//             .then((data) => {
//                 setStudents(data);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Student List of Btech CSE</h1>

//             {student.map((students) => (
//                 <div key={students.id}>
//                     <h2>{students.name}</h2>
//                     <p>{students.course}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }








// "use client";

// import { useState } from "react";

// // POST
// export default function Home() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // connect with backend api
//         const response = await fetch("/api3/students", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name,
//                 email
//             })
//         });

//         const data = await response.json();

//         alert(data.message);
//     };

//     return (
//         <div>
//             <h1>Student Registration Form</h1>

//             <form onSubmit={handleSubmit}>
//                 Name<br></br>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => {
//                         setName(e.target.value);
//                     }}
//                     placeholder="Enter your name here.."
//                 />

//                 <br/>
//                 <br/>

//                 {/* Email Input field */}
//                 Email<br></br>
//                 <input
//                     type="text"
//                     value={email}
//                     onChange={(e) => {
//                         setEmail(e.target.value);
//                     }}
//                     placeholder="Enter your email here.."
//                 />

//                 <br/>
//                 <br/>

//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// }








// // server action;

// // import server action

// import { registerStudent } from "./action"

// export default function Home(){
//     return(
//         <main>
//             <h1>Student Registration</h1>
//             <form action = {registerStudent}>
//                 <input name = "name"
//                 placeholder="Enter your name here...">
//                 </input> <br></br>

//                 <input name = "email"
//                 placeholder="Enter your email here...">
//                 </input> <br></br>

//                 <input name = "course"
//                 placeholder="Enter your course  here...">
//                 </input> <br></br>
                
//                 <input type="file"
//                     name="photo"
//                 ></input>

//                 <br />

//                 <button type = 'submit'>Register</button>

//                 {/* form data  */}


//             </form>
//         </main>
//     )
// }










export default function TaskPage(){
    return(
        <main>
            <h1>Task Manager</h1>
            <form>
                <input 
                type = "text" 
                name = "title" 
                placeholder="enter your task title here...  " 
                required>
                </input>

                <button type = "submit">Add Task</button>
            </form>
        </main>
    )
}