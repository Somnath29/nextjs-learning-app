import Link from "next/link";
export default function NavBar(){
    return(
        // <nav>
        //     <a href = "">Home </a>
        //     <a href = "/about">About </a>
        //     <a href = "/contact">ContactUs</a>
        // </nav>

        // no refreshing using this 
        <nav className="flex gap-4">
            <Link href ="/" className = "bg-amber-50  text-red-700" >Home  </Link>
            <Link href ="/about" className = "bg-amber-50  text-red-700"> About</Link>
            <Link href ="/contact" className = "bg-amber-50  text-red-700"> ContactUs</Link>
        </nav>
    )
}