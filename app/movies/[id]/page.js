async function getMovie(id) {
    const response = await fetch(
        `https://api.tvmaze.com/shows/${id}`,
        {
            next: {
                revalidate: 60
            }
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch movie");
    }

    return response.json();
}

export default async function MovieDetails({ params }) {

    const { id } = await params;

    const movie = await getMovie(id);

    return (
        <div>
            <h1>{movie.name}</h1>

            <p>{movie.summary}</p>

            <p>Language: {movie.language}</p>

            <p>Rating: {movie.rating?.average}</p>

            <p>Genres: {movie.genres?.join(", ")}</p>

            <a href="/movies">
                Back to Movies
            </a>
        </div>
    );
}