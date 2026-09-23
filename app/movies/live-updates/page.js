async function getLiveUpdates() {
    const response = await fetch(
        "https://api.tvmaze.com/shows",
        {
            cache: "no-store"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch live updates");
    }

    return response.json();
}

export default async function LiveUpdates() {

    const shows = await getLiveUpdates();

    return (
        <div>
            <h1>Live Updates</h1>

            {shows.map((show) => (
                <div key={show.id}>
                    <h2>{show.name}</h2>
                    <p>Status: {show.status}</p>
                </div>
            ))}
        </div>
    );
}