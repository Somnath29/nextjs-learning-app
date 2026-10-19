import { NextResponse } from "next/server";

const students = [
    { id: "1", name: "rahul" },
    { id: "2", name: "som" },
    { id: "3", name: "jay" },
    { id: "4", name: "priya" },
];



export async function GET(request, { params }) {
    const { id } = await params;

    const student = students.find(
        (student) => student.id === id
    );

    if(!student){
         return NextResponse.json(
            {
                message: "student not found"
            },
            {
                status:404 

                ///student/2  →  200 OK
                // /student/5  →  404 Not Found
            }
    )
    }

    return NextResponse.json(student)

}



// PUT - update the student

export async function PUT(request, { params }) {
    const { id } = await params;

    const body = await request.json();

    return NextResponse.json({
        message: `student id ${id} updated`,
        data: body
    });
}


