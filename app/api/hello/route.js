import { NextResponse } from "next/server";

const student = [
    {
        id: 1,
        name: "jithesh"
    },
    {
        id: 2,
        name: "jithu"
    }
];

export async function POST(request) {
    const body = await request.json();

    const { username, password } = body;

    // Check for username and password
    if (username === "admin" && password === "abcd") {
        return NextResponse.json({
            success: true,
            message: "login successful"
        });
    }

    // Invalid details
    return NextResponse.json({
        success: false,
        message: "invalid username and password"
    });
}




{
    status :200
} 

{
    error: "error while login"
}









//     return NextResponse.json({
//         success:false,
//         message:"login successful"
//     })

//     console.log(body);

//     return NextResponse.json({
//         message: "student registered",
//         student: body
//     });
// }


// async function POST(){
//     return NextResponse.json({
//         mesage: "user created successfully"
//     })
// }



// export async function POST(request){
//     const body = await request.json()
//     console.log(body)
//     return NextResponse.json({
//         message: "student registered",
//         student: body
//     })
// }




// export async function GET(){
//     return NextResponse.json(student)
//     const {searchParams} = new URL(request.url);   
//     const course = searchParams.get("course");
//     return NextResponse.json({message:`hello world ${course}`})
//     // {
//     //     message:"hello world",
//     // }
// }


// //POST
// export async function POST(){
//     return NextResponse.json({
//         message:"hello world",
//     })
// }