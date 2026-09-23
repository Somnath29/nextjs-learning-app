// sir's code

// async function getMovies(){
//     const response = await fetch("https://api.tvmaze.com/shows",{
//         // fetch api

//         next:{
//         revalidate: 60 //ISR
//         }
//     })

//     if(!response.ok){
//         throw new console.error("failed api");
//     }

//     return response.json()
    
// }



// export default async function MoviesAll(){
//     const movies = await getMovies()

//     return(
//         <div>
//             <h1>Movies</h1>
//             <p>movies.id</p>
//             <p>movies.name</p>
//         </div>
//     )
// }




// chatgpt code

async function getMovies() {
    const response = await fetch(
        "https://api.tvmaze.com/shows",
        {
            next: {
                revalidate: 60 // ISR
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    return response.json();
}

export default async function MoviesAll() {

    const movies = await getMovies();

    return (
        <div>
            <h1>Movies</h1>

            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.name}</h2>

                    <a href={`/movies/${movie.id}`}>
                        View Details
                    </a>
                </div>
            ))}
        </div>
    );
}