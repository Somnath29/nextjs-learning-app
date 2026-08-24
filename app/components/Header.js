import Link from "next/link";
export default function Header(){
    return(
        // <nav>
        //     <a href = "">Home </a>
        //     <a href = "/about">About </a>
        //     <a href = "/contact">ContactUs</a>
        // </nav>

        // no refreshing using this 
        <nav className="flex gap-4 bg-green-300 p-2">
            <Link href ="/" className = "bg-amber-50 p-3  text-blue-900 hover:bg-purple-500" >Home  </Link>
            <Link href ="/about" className = "bg-amber-50 p-1 text-blue-900  hover:bg-purple-500"> About</Link>
            <Link href ="/contact" className = "bg-amber-50 p-1 text-blue-900 hover:bg-purple-500"> ContactUs</Link>
            <Link href ="/student" className = "bg-amber-50 p-1 text-blue-900 hover:bg-purple-500"> Student</Link>
        </nav>
    )
}