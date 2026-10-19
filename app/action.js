// define server actions 

"use server"
export async function registerStudent(formData){
    const name = formData.get("name")
    const email = formData.get("email")
    const course = formData.get("course")
    const photo = formData.get("photo")



// validation

if(!name || !email|| !course){
    return{
        error: "all fields are mandatory"
    }
}

if(name.length <3){
    return{
        error: "name must be in at atleast 3 characters"
    }
}

console.log(name)
console.log(email)
console.log(course)


if(photo && photo.size > 5 *1024){

    return{
        error: "image must be less than 5 MB"
    }
    console.log("file" , photo.name)
}


return{
    success:true
}

}





// data mutations

// await db.students.create({
//     data:{
//         name, 
//         email,//mutation
//         course
//     }
// })

